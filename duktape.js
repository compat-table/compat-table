/*
 *  Node.js test runner for running test-*.js tests with Duktape 'duk' command.
 *
 *  Reports discrepancies to console; fix them manually in results-*.js files.
 *  Expects a './duk' command in the current directory.  Example:
 *
 *    $ cp /path/to/duk ./duk
 *    $ node duktape.js
 */

var child_process = require('child_process');
var runner_support = require('./runner_support');

var dukCommand = './duk';

// Key for .res (e.g. test.res.duktape2_0), automatic based on Duktape.version.
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
console.log('Duktape result key is: test.res.' + dukKey);

function dukRunner(testFilename) {
    try {
        var stdout = child_process.execFileSync(dukCommand, [ testFilename ], {
            encoding: 'utf-8'
        });

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        return false;
    }
}

runner_support.runTests(dukRunner, dukKey, 'Duktape');