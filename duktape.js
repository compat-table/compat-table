/*
 * Node.js test runner for running test-*.js tests with Duktape 'duk' command.
 *
 * Expects a './duk' command in the current directory
 *
 * Discrepancies will be reported in the console
 * Either update the results-*.js files manually or use the -u/--update flag.
 *
 * $ cp /path/to/duk ./duk
 * $ node duktape.js
 * or
 * $ node duktape.js -o
 */

var child_process = require('child_process');
var runner_support = require('./runner_support');

var dukCommand = './duk';

// Key against which the results will be stored (e.g. .duktape2_0), automatic based on Duktape.version.
var dukKey = (function () {
    var stdout = child_process.execFileSync(dukCommand, [ '-e', 'print(Duktape.version)' ], {
        encoding: 'utf-8'
    });
    var dukVersion = Number(stdout);
    console.log('Duktape version is: ' + dukVersion);
    if ((dukVersion % 100) == 99) {
        dukVersion++;  // Treat e.g. 2.2.99 (built from master) as 2.3.0 for testing
    }
    return 'duktape' + (Math.floor(dukVersion / 10000)) + '_' + (Math.floor(dukVersion / 100 % 100));
})();
console.log('Duktape result key is: ' + dukKey);

function dukRunner(testFilename) {
    return child_process.execFileSync(dukCommand, [ testFilename ], {
        encoding: 'utf-8'
    });
}

runner_support.runTests(dukRunner, dukKey, 'Duktape');