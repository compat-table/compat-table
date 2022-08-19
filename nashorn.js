/*
 *  Node.js test runner for running data-*.js tests with Nashorn 'jjs' command
 *  running in es6 mode (a.k.a.: jjs --language=es6).
 * 
 *  If the environment variable JAVA_HOME is defined it will use it to
 *  construct the path to 'jjs' as $JAVA_HOME/bin/jjs
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects a 'jjs' command in the path.  Example:
 *
 *    $ node nashorn.js
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

// Key for .res (e.g. test.res.nashorn), automatic based on nashorn version.
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
console.log('jjs result key is: test.res.' + jjsKey);

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