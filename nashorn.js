/*
 * Node.js test runner for running test-*.js tests with Nashorn 'jjs' command
 * running in es6 mode (a.k.a.: jjs --language=es6).
 *
 * If the environment variable JAVA_HOME is defined it will use it to
 * construct the path to 'jjs' as $JAVA_HOME/bin/jjs
 *
 * Expects a 'jjs' command in the path
 *
 * Discrepancies will be reported in the console
 * Either update the results-*.js files manually or use the -u/--update flag.
 *
 * $ node nashorn.js
 * or
 * $ node nashorn.js -u
 */

var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var runner_support = require('./runner_support');

var jjsCommand = 'jjs';

var jdkBin = '';
// if JAVA_HOME is set then resolve to the bin
if (process.env.JAVA_HOME) {
    var jdkBin = path.resolve(process.env.JAVA_HOME, 'bin');
    jjsCommand = path.resolve(jdkBin, 'jjs');
}

// Key against which the results will be stored (e.g. .nashorn), automatic based on nashorn version.
var jjsKey = (function () {
    var script = 'print(java.lang.System.getProperty("java.specification.version"));\n' +
                 'quit()\n';

    fs.writeFileSync('jjstest.js', script);
    var stdout = child_process.execFileSync(jjsCommand, [ '--language=es6', 'jjstest.js' ], {
        encoding: 'utf-8'
    });

    console.log('jjs version is: ' + stdout);
    return 'nashorn' + stdout.replace('.', '_');
})();
console.log('jjs result key is: ' + jjsKey);

function jjsRunner(testFilename) {
    try {
        var stdout = child_process.execFileSync(jjsCommand, [ '--language=es6', testFilename ], {
            encoding: 'utf-8'
        });

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        return false;
    }
}

runner_support.runTests(jjsRunner, jjsKey, 'Nashorn');