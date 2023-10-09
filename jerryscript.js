/*
 *  Node.js test runner for running test-*.js tests with JerryScript 'jerry' command.
 *
 *  Reports discrepancies to console; fix them manually in results-*.js files.
 *  Expects 'jerry' to be already built.  Example:
 *
 *    $ node jerryscript.js /path/to/jerry [suitename]
 */

var child_process = require('child_process');
var console = require('console');
var runner_support = require('./runner_support');

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

function jerryRunner(testFilename) {
    try {
        var stdout = child_process.execFileSync(jerryCommand, [ testFilename ], {
            encoding: 'utf-8'
        });
        //console.log(stdout);

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        //console.log(e);
        return false;
    }
}

runner_support.runTests(jerryRunner, jerryKey, 'JerryScript', { suites: suites });