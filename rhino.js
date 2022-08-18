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
var runner_support = require('./runner_support');

var javaCommand = 'java';

var jdkBin = '';
// if JAVA_HOME is set then resolve to the bin
if (process.env.JAVA_HOME) {
    var jdkBin = path.resolve(process.env.JAVA_HOME, 'bin');
    javaCommand = path.resolve(jdkBin, 'java');
}

function executeScript(scriptName) {
    return child_process.execFileSync(javaCommand, ['-jar', 'rhino.jar', '-version', '200', scriptName], {
        encoding: 'utf-8'
    });
}

// Key for .res (e.g. test.res.rhino1_7_13), automatic based on rhino version.
var rhinoKey = (function () {
    var script = 'print(org.mozilla.javascript.ImplementationVersion.get());\n' +
                 'quit()\n';

    fs.writeFileSync('rhinotest.js', script);
    var stdout = executeScript('rhinotest.js');

    console.log('rhino version is: ' + stdout);
    var match = stdout.match(/Rhino (\d+)\.(\d+)\.(\d+)/);
    return match[1] + "_" + match[2] + "_" + match[3];
})();
console.log('rhino result key is: test.res.rhino' + rhinoKey);

function runTest(evalcode) {
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

    return /^\[SUCCESS\]$/gm.test(stdout);
}

runner_support.runTests(runTest, rhinoKey, 'Rhino');