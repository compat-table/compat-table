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

function runTest(evalcode) {
    var testFilename = 'hermestest.js';
    var processArgs = getArgs(testFilename);
    var script = '';

    if (evalcode.includes('__createIterableObject')) {
        script += runner_support.createIterableHelper;
    } else if (evalcode.includes('global')) {
        script += 'var global = this;\n';
    }

    if (evalcode.includes('asyncTestPassed')) {
        script += asyncTestHelperHead + evalcode + asyncTestHelperTail;
    } else {
        script += 'var evalcode = ' + JSON.stringify(evalcode) + ';\n' +
                 'try {\n' +
                 '    var res = eval(evalcode);\n' +
                 '    if (!res) { throw new Error("failed: " + res); }\n' +
                 '    print("[SUCCESS]");\n' +
                 '} catch (e) {\n' +
                 '    print("[FAILURE]", e);\n' +
                 '    /*throw e;*/\n' +
                 '}\n';
    }

    fs.writeFileSync(testFilename, script);

    try {
        var stdout = child_process.execFileSync(hermesCommand, processArgs, {
            encoding: 'utf-8'
        });

        return /^\[SUCCESS\]$/gm.test(stdout);
    } catch (e) {
        // console.log(e);
        return false;
    }
}

function resultsMatch(expect, actual) {
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
    return expect === actual;
}

runner_support.runTests(runTest, hermesKey, 'Hermes', { resultsMatch: resultsMatch, suites: suites, testName: testName, bail: argv.bail });