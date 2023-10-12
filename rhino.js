/*
 * Node.js test runner for running test-*.js tests with Rhino's interpreter
 * running in es6 mode (a.k.a.: -version 200).
 *
 * If the environment variable JAVA_HOME is defined it will use it to
 *  construct the path to 'java' as $JAVA_HOME/bin/java
 *
 * Expects a 'rhino.jar' file in this directory
 *
 * Discrepancies will be reported in the console
 * Either update the results-*.js files manually or use the -u/--update flag.
 *
 * $ node rhino.js
 * or
 * $ node rhino.js -u
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

// Key against which the results will be stored (e.g. .rhino1_7_13), automatic based on rhino version.
var rhinoKey = values.version ? values.version : (function () {
    var script = 'print(org.mozilla.javascript.ImplementationVersion.get());\n' +
                 'quit()\n';

    fs.writeFileSync('rhinoversion.js', script);
    var stdout = executeScript('rhinoversion.js');

    console.log('rhino version is: ' + stdout);
    var match = stdout.match(/Rhino (\d+)\.(\d+)\.(\d+)/);
    return 'rhino' + match[1] + "_" + match[2] + "_" + match[3];
})();
console.log('rhino result key is: ' + rhinoKey);

runner_support.runTests(executeScript, rhinoKey, 'Rhino');