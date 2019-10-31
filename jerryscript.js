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

var testCount = 0;
var testSuccess = 0;
var testOutOfDate = 0;

var jerryCommand = process.argv[2];
var suites = process.argv.slice(3);

var environments = JSON.parse(fs.readFileSync('environments.json').toString());

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

// List of keys for inheriting results from previous versions.
var jerryKeyList = (function () {
    var res = [];
    for (var k in environments) {
        var env = environments[k];
        if (env.family !== 'JerryScript') {
            continue;
        }
        res.push(k);
        if (k === jerryKey) {
            // Include versions up to 'jerryKey' but not newer.
            break;
        }
    }
    return res;
})();
console.log('JerryScript key list for inheriting results is:', jerryKeyList);

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test, sublevel) {
    var testPath = parents.join(' -> ') + ' -> ' + test.name;

    if (typeof test.exec === 'function') {
        var src = test.exec.toString();
        var m = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
        var evalcode;
        if (m) {
            evalcode = '(function test() {' + m[1] + '})();';
        } else {
            evalcode = '(' + src + ')()';
        }
        //console.log(evalcode);

        var script = 'var evalcode = ' + JSON.stringify(evalcode) + ';\n' +
                     'try {\n' +
                     '    var res = eval(evalcode);\n' +
                     '    if (res !== true && res !== 1) { throw new Error("failed: " + res); }\n' +
                     '    print("[SUCCESS]");\n' +
                     '} catch (e) {\n' +
                     '    print("[FAILURE]", e);\n' +
                     '    /*throw e;*/\n' +
                     '}\n';

        fs.writeFileSync('jerrytest.js', script);
        var success = false;
        try {
            var stdout = child_process.execFileSync(jerryCommand, [ 'jerrytest.js' ], {
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
