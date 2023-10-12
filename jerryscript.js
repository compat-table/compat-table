/*
 * Node.js test runner for running test-*.js tests with JerryScript 'jerry' command.
 *
 * Expects 'jerry' to be already built.  Example:
 *
 * Discrepancies will be reported in the console
 * Either update the results-*.js files manually or use the -u/--update flag.
 *
 * $ node jerryscript.js /path/to/jerry [suitename]
 * or
 * $ node jerryscript.js /path/to/jerry [suitename] -u
 */

var child_process = require('child_process');
var console = require('console');
var runner_support = require('./runner_support');

var jerryCommand = process.argv[2];
var suites = process.argv.slice(3);

// Key against which the results will be stored (e.g. .jerryscript1_0), automatic based on `jerry --version`.
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
console.log('JerryScript result key is: ' + jerryKey);
// jerryKey = "jerryscript2_4_0" // uncomment this line to test pre 2.4.0

function jerryRunner(testFilename) {
    return child_process.execFileSync(jerryCommand, [ testFilename ], {
        encoding: 'utf-8'
    });
}

runner_support.runTests(jerryRunner, jerryKey, 'JerryScript', { suites: suites });