/*
 *  Node.js test runner for running data-*.js tests with Rhino's interpreter
 *  running in es6 mode (a.k.a.: -version 200).
 * 
 *  If the environment variable JAVA_HOME is defined it will use it to
 *  construct the path to 'java' as $JAVA_HOME/bin/java
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects a 'rhino.jar' file in this directory.  Example:
 *
 *    $ node rhino.js
 */

var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var testCount = 0;
var testSuccess = 0;
var testOutOfDate = 0;

var javaCommand = 'java';

var jdkBin = '';
// if JAVA_HOME is set then resolve to the bin
if (process.env.JAVA_HOME) {
    var jdkBin = path.resolve(process.env.JAVA_HOME, 'bin');
    javaCommand = path.resolve(jdkBin, 'java');
}

var environments = JSON.parse(fs.readFileSync('environments.json').toString());

function executeScript(scriptName) {
    return child_process.execFileSync(javaCommand, ['-jar', 'rhino.jar', '-version', '200', scriptName], {
        encoding: 'utf-8'
    });
}

// Key for .res (e.g. test.res.nashorn), automatic based on nashorn version.
var rhinoKey = (function () {
    var script = 'print(org.mozilla.javascript.ImplementationVersion.get());\n' +
                 'quit()\n';

    fs.writeFileSync('rhinotest.js', script);
    var stdout = executeScript('rhinotest.js');

    console.log('rhino version is: ' + stdout);
    var match = stdout.match(/Rhino (\d+)\.(\d+)\.(\d+)/);
    return match[1] + "_" + match[2];
})();
console.log('rhino result key is: test.res.rhino' + rhinoKey);

// List of keys for inheriting results from previous versions.
var rhinoKeyList = (function () {
    var res = [];
    for (var k in environments) {
        var env = environments[k];
        if (env.family !== 'Rhino') {
            continue;
        }
        res.push(k);
        if (k === rhinoKey) {
            // Include versions up to 'rhinoKey' but not newer.
            break;
        }
    }
    return res;
})();
console.log('rhino key list for inheriting results is:', rhinoKeyList);

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
                     '    print("[FAILURE] " + e);\n' +
                     '    /*throw e;*/\n' +
                     '}\n';

        fs.writeFileSync('rhinotest.js', script);
        var stdout = executeScript('rhinotest.js');
        //console.log(stdout);

        var success = false;
        if (/^\[SUCCESS\]$/gm.test(stdout)) {
            success = true;
            testSuccess++;
        } else {
            //console.log(stdout);
        }
        testCount++;

        if (test.res) {
            // Take expected result from newest rhino version not newer
            // than current version.
            var expect = void 0;
            rhinoKeyList.forEach(function (k) {
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
    var m = /^(data-.*)\.js$/.exec(filename);
    if (!m) {
        return;
    }
    var suitename = m[1];

    console.log('');
    console.log('**** ' + suitename + ' ****');
    console.log('');
    var testsuite = require('./' + suitename);
    testsuite.tests.forEach(function (v) { runTest([ suitename ], v, 0); });
});

console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
console.log(testOutOfDate + ' tests are out of date (data-*.js file .res)');
