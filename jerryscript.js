/*
 *  Node.js test runner for running data-*.js tests with JerryScript 'jerry' command.
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects 'jerry' to be already built.  Example:
 *
 *    $ node jerryscript.js /path/to/jerry [suitename]
 */

var fs = require('fs');
var child_process = require('child_process');
var console = require('console');
var runner_support = require('./runner_support');

var testCount = 0;
var testSuccess = 0;
var testOutOfDate = 0;

var jerryCommand = process.argv[2];
var suites = process.argv.slice(3);

// Key for .res (e.g. test.res.jerryscript1_0), automatic based on `jerry --version`.
var jerryKey = (function () {
    var stdout = child_process.execFileSync(jerryCommand, [ '--version' ], {
        encoding: 'utf-8'
    });

    var m = /^Version:\s+(\d)\.(\d)(?:\.(\d))?/.exec(stdout);
    if (m) {
        return 'jerryscript' + m[1] + '_' + m[2] + (m[3] ? '_' + m[3] : '');
    }
    throw new Error('Invalid JerryScript version');
})();
console.log('JerryScript result key is: test.res.' + jerryKey);
// jerryKey = "jerryscript2_4_0" // uncomment this line to test pre 2.4.0

// List of keys for inheriting results from previous versions.
var jerryKeyList = runner_support.keyList(jerryKey, 'JerryScript');
console.log('JerryScript key list for inheriting results is:', jerryKeyList);

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
'}\n';

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test, sublevel) {
    var testPath = parents.join(' -> ') + ' -> ' + test.name;

    if (typeof test.exec === 'function') {
        var src = test.exec.toString();
        var m = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
        var evalcode;
        var processArgs = ['jerrytest.js'];
        var script = '';

        if (src.includes('__createIterableObject')) {
            script += runner_support.createIterableHelper;
        } else if (src.includes('global')) {
            script += 'var global = this;\n';
        }

        if (src.includes('asyncTestPassed')) {
            script += asyncTestHelperHead + '(function test() {' + m[1] + '})();' + asyncTestHelperTail;
            processArgs.unshift('--call-on-exit','onCloseAsyncCheck');
        } else {
            if (m) {
                evalcode = '(function test() {' + m[1] + '})();';
            } else {
                evalcode = '(' + src + ')()';
            }

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

        fs.writeFileSync(processArgs[processArgs.length - 1], script);
        var success = false;
        try {
            var stdout = child_process.execFileSync(jerryCommand, processArgs, {
                encoding: 'utf-8'
            });
            //console.log(stdout);

            if (/^\[SUCCESS\]$/gm.test(stdout)) {
                success = true;
                testSuccess++;
            } else {
                //console.log(stdout);
            }
        } catch (e) {
            //console.log(e);
        }
        testCount++;

        if (test.res) {
            // Take expected result from newest JerryScript version not newer
            // than current version.
            var expect = void 0;
            jerryKeyList.forEach(function (k) {
                if (test.res[k] !== void 0) {
                    expect = test.res[k];
                }
            });

            if (expect === success) {
                // Matches.
            } else if (expect === void 0 && !success) {
                testOutOfDate++;
                console.log(testPath + ': test result missing, res: ' + expect + ', actual: ' + success);
            } else {
                testOutOfDate++;
                console.log(testPath + ': test result out of date, res: ' + expect + ', actual: ' + success);
            }
        } else {
            testOutOfDate++;
            console.log(testPath + ': test.res missing');
        }
    }
    if (test.subtests) {
        var newParents = parents.slice(0);
        newParents.push(test.name);
        test.subtests.forEach(function (v) { runTest(newParents, v, sublevel + 1); });
    }
}

for (var suitename in runner_support.suites) {
    var testsuite = runner_support.suites[suitename];
    if (suites.length != 0 && !suites.includes(suitename)) {
        continue;
    }
    console.log('');
    console.log('**** ' + suitename + ' ****');
    console.log('');
    testsuite.tests.forEach(function (test) {
        runTest([ suitename ], test);
    });
}

console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
console.log(testOutOfDate + ' tests are out of date (data-*.js file .res)');
