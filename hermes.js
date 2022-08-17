/*
 *  Node.js test runner for running data-*.js tests with Hermes 'hermes' command.
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects 'hermes' to be already built.  Example:
 *
 *  $ node hermes.js --hermes-bin /path/to/hermes --suite suitename
 * 
 *  suitename can be 'all'
 */

var fs = require('fs');
var child_process = require('child_process');
var console = require('console');
var runner_support = require('./runner_support');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .option('hermes-bin', {
        alias: 'b',
        type: 'string'
    })
    .option('suite', {
        alias: 's',
        type: 'string',
        choices: ['all', 'es5', 'es6', 'es2016plus'],
        default: 'all'
    })
    .option('test-name', {
        alias: 't',
        type: 'string'
    })
    // .option('promise', {
    //     type: 'boolean'
    // })
    .option('symbol', {
        type: 'boolean'
    })
    .option('proxy', {
        type: 'boolean'
    })
    .option('bail', {
        type: 'boolean',
        describe: 'Bail of first outdated test'
    })
    .argv;

var testCount = 0;
var testSuccess = 0;
var testFailure = 0;
var testOutOfDate = 0;

var hermesCommand = argv.hermesBin;
var suites = argv.suite;
suites = suites === 'all' ? '' : suites;
var testName = argv.testName;

// Key for .res (e.g. test.res.hermes0_7_0), automatic based on `hermes -version`.
var hermesKey = (function () {
    var stdout = child_process.execFileSync(hermesCommand, [ '-version' ], {
        encoding: 'utf-8'
    });

    var m = /Hermes release version:\s+(\d)\.(\d)(?:\.(\d))?/.exec(stdout);
    if (m) {
        return 'hermes' + m[1] + '_' + m[2] + (m[3] ? '_' + m[3] : '');
    }
    throw new Error('Invalid Hermes version');
})();
console.log('Hermes result key is: test.res.' + hermesKey);

// List of keys for inheriting results from previous versions.
var hermesKeyList = runner_support.keyList(hermesKey, 'Hermes');
console.log('Hermes key list for inheriting results is:', hermesKeyList);

var asyncTestHelperHead =
'var asyncPassed = false;\n' +
'\n' +
'function asyncTestPassed() {\n' +
'  asyncPassed = true;\n' +
'}\n' +
'\n' +
'function setTimeout(cb, time, cbarg) {\n' +
'  if (!jobqueue[time]) {\n' +
'    jobqueue[time] = [];\n' +
'  }\n' +
'  jobqueue[time].push({cb, cbarg, startTime: Date.now(), timeout: time});\n' +
'}\n' +
'\n' +
'var jobqueue = [];\n';

var asyncTestHelperTail =
'const thenCb = job => {\n' +
'  job.cb(job.cbarg)\n' +
'}\n' +
'\n' +
'const catchCb = job => {\n' +
'  jobRunner(job);\n' +
'}\n' +
'\n' +
'function jobRunner(job){\n' +
'  return new Promise((resolve, reject) => {\n' +
'    let diff = Date.now() - job.startTime;\n' +
'    if (diff >= job.timeout) {\n' +
'      if (!job.run) {\n' +
'        job.run = true;\n' +
'        resolve (job);\n' +
'      }\n' +
'    } else {\n' +
'      reject (job)\n' +
'    }\n' +
'  })\n' +
'  .then(thenCb)\n' +
'  .catch(catchCb)\n' +
'}\n' +
'\n' +
'jobqueue.forEach(function(jobs, index) {\n' +
'  for (var job of jobs) {\n' +
'    jobRunner(job);\n' +
'  }\n' +
'});\n' +
'\n' +
'function onCloseAsyncCheck() {\n' +
'  if (!asyncPassed) {\n' +
'    print("Async[FAILURE]");\n' +
'    throw "Async check failed";\n' +
'  }\n' +
'  print("[SUCCESS]");\n' +
'}\n' +
'\n' +
'Promise.resolve().then(onCloseAsyncCheck);\n';

function removeIndent(str) {
  return str.split(/\n/g).map(function(s) { return s.trim(); }).filter(Boolean).join('\n');
}

function getArgs(testFilename) {
    var processArgs = [
        /*'-enable-eval',*/
        /*'-allow-function-to-string',*/
    ]
        .concat([testFilename])
        .filter(Boolean);

    // if (argv.promise) {
    //     processArgs.unshift('-Xes6-promise');
    // }

    if (argv.symbol) {
        processArgs.unshift('-Xes6-symbol');
    }

    if (argv.proxy) {
        processArgs.unshift('-Xes6-proxy');
    }

    // Comment this to see eval warnings
    processArgs.unshift('-w');

    return processArgs;
}

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test, sublevel) {
    var testPath = parents.join(' -> ') + ' -> ' + test.name;

    if (!testName || (test.name.indexOf(testName) !== -1 || parents.some(function (p) { return p.indexOf(testName) !== -1; }))) {
        if (typeof test.exec === 'function') {
            var src = test.exec.toString();
            var m = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
            var evalcode;

            var testFilename = 'hermestest.js';
            var processArgs = getArgs(testFilename);
            var script = '';

            if (src.includes('__createIterableObject')) {
                script += runner_support.createIterableHelper;
            } else if (src.includes('global')) {
                script += 'var global = this;\n';
            }

            if (src.includes('asyncTestPassed')) {
                script += asyncTestHelperHead + removeIndent(m[1]) + asyncTestHelperTail;
            } else {
                if (m) {
                    evalcode = 'function test() {' + removeIndent(m[1]) + '}';
                } else {
                    evalcode = 'function test() { return (' + removeIndent(src) + ')(); }';
                }

                script += '' + evalcode + ';\n' +
                        'try {\n' +
                        '    var res = test();\n' +
                        '    if (!res) { throw new Error("failed: " + res); }\n' +
                        '    print("[SUCCESS]");\n' +
                        '} catch (e) {\n' +
                        '    print("[FAILURE]", e);\n' +
                        '    /*throw e;*/\n' +
                        '}\n';
            }

            fs.writeFileSync(testFilename, script);
            var success = false;
            try {
                var stdout = child_process.execFileSync(hermesCommand, processArgs, {
                    encoding: 'utf-8'
                });

                if (/^\[SUCCESS\]$/gm.test(stdout)) {
                    success = true;
                    testSuccess++;
                } else {
                    // console.log(stdout);
                }
            } catch (e) {
                // console.log(e);
            }
            testCount++;

            if (test.res) {
                // Take expected result from newest Hermes version not newer
                // than current version.
                var expect = void 0;
                hermesKeyList.forEach(function (k) {
                    if (test.res[k] !== void 0) {
                        expect = test.res[k];
                        
                        // Handling notes
                        if (typeof expect === 'object' && 'val' in expect) {
                            if (expect.val === 'flagged') {
                                if (expect.note_id === 'hermes-promise') {
                                    expect = !!argv.promise;
                                } else if (expect.note_id === 'hermes-symbol') {
                                    expect = !!argv.symbol;
                                } else if (expect.note_id === 'hermes-proxy') {
                                    expect = !!argv.proxy;
                                } else {
                                    // expect = true;
                                    expect = expect.val;
                                }
                            } else {
                                expect = expect.val;
                            }

                        }
                    }
                });

                if (!success) {
                    testFailure++;
                }

                if (expect === success) {
                    // Matches.
                } else if (expect === void 0 && !success) {
                    testOutOfDate++;
                    console.log(testPath + ': test result missing, res: ' + expect + ', actual: ' + success);
                    // if (testFailure >= 2) throw new Error(testCount)
                } else {
                    testOutOfDate++;
                    console.log(testPath + ': test result out of date, res: ' + expect + ', actual: ' + success);
                }

                // if (test.name === 'repeated parameter names is a SyntaxError') {
                //     throw new Error('stop')
                // }
            } else {
                testOutOfDate++;
                console.log(testPath + ': test.res missing');
            }
        }
    }

    if (argv.bail && testOutOfDate > 0) {
        throw new Error('stop, tests not outdated: ' + (testCount - 1));
    }

    if (test.subtests) {
        var newParents = parents.slice(0);
        newParents.push(test.name);
        test.subtests.forEach(function (v) { runTest(newParents, v, sublevel + 1); });
    }
}

fs.readdirSync('.').forEach(function (filename) {
    var m = /^data-(.*)\.js$/.exec(filename);
    if (!m) {
        return;
    }
    var suitename = m[1];
    if (suites.length != 0 && !suites.includes(suitename)) {
        return;
    }

    console.log('');
    console.log('**** ' + suitename + ' ****');
    console.log('');
    var testsuite = require('./data-' + suitename + '.js');
    testsuite.tests.forEach(function (v) { runTest([ suitename ], v, 0); });
});

console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
console.log(testOutOfDate + ' tests are out of date (data-*.js file .res)');
