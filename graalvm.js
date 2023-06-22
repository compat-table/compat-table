/*
 *  Node.js test runner for running `data-*.js` tests with GraalVM's `js` command.

 *  The runner will always pass the `--js.intl-402` flag needed to enable Intl support.
 *  Furthermore, it will try to figure out which tests require additional flags in order
 *  to pass.
 * 
 *  Reports discrepancies to console; fix them manually in `data-*.js` files.
 *  Expects GraalVM's `js` command in the path. * 
 *  Examples:
 *
 *    $ node graalvm.js
 */

var child_process = require('child_process');
var runner_support = require('./runner_support');

var jsCommand = 'js';
var jsArgs = [ '--js.intl-402' ];

var flagsForSuite = {
    'es5': [],
    'es6': [ [ '--js.ecmascript-version=6' ] ],
    'es2016plus': [ [ '--js.ecmascript-version=staging' ] ],
    'esnext': [ [ '--js.ecmascript-version=staging' ], [ '--experimental-options', '--js.new-set-methods' ] ],
    'esintl': [],
    'non-standard': [ [ '--experimental-options', '--js.nashorn-compat' ], [ '--experimental-options', '--js.v8-compat' ], [ '--experimental-options', '--js.global-property' ] ]
};

// Key for .res (e.g. test.res.graalvm), automatic based on GraalVM version.
var graalvmKey = (function () {
    var stdout = child_process.execFileSync(jsCommand, [ '--version' ], {
        encoding: 'utf-8'
    });

    var version = /[\d\.]+/.exec(stdout)[0];
    console.log('GraalVM version is: ' + version);
    return 'graalvm' + version.replace(/\.0(?:$|(?=\.))/g, '').replace(/\./g, '_');
})();
console.log('GraalVM result key is: test.res.' + graalvmKey);

function exec(flags, testFilename) {
    try {
        var stdout = child_process.execFileSync(jsCommand, jsArgs.concat(flags, [ testFilename ]), {
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'ignore']
        });

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        return false;
    }
}

function graalvmRunner(testFilename, suite) {
    if (exec([], testFilename)) {
        return true;
    }

    for (var i = 0; i < flagsForSuite[suite].length; i++) {
        var flags = flagsForSuite[suite][i];
        if (exec(flags, testFilename)) {
            return {
                val: 'flagged',
                note_id: ('graalvm-' + flags.join('-')).replace(/[=\.]/g, '-').replace(/-+/g, '-'),
                note_html: 'Requires the <code>' + flags.join(' ') + '</code> flag' + (flags.length > 1 ? 's' : '') + '.'
            };
        }
    }

    return false;
}

function resultsMatch(expect, actual) {
    if (expect === actual) {
        return true;
    }
    if (typeof expect === 'object' && expect.val === 'flagged' && typeof actual === 'object' && actual.val === 'flagged') {
        return expect.note_id === actual.note_id && expect.note_html === actual.note_html;
    }
    return false;
}

runner_support.runTests(graalvmRunner, graalvmKey, 'GraalVM', { resultsMatch: resultsMatch });