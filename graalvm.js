/*
 *  Node.js test runner for running `data-*.js` tests with GraalVM's `js` command.

 *  The runner will always pass the `--js.intl-402` flag needed to enable Intl support.
 *  Furthermore, it will try to figure out which tests require additional flags in order
 *  to pass. The runner can also run tests that rely on `setTimeout` by using
 *  the `node` launcher as a fallback, if present.
 *
 *  Reports discrepancies to console; fix them manually in `data-*.js` files.
 *  Expects GraalVM's `js` command in the path. Optionally, GraalVM's `node` command
 *  can be specified in the `GRAALVM_NODE` environment variable.
 * 
 *  Examples:
 *
 *    $ node graalvm.js
 *    $ GRAALVM_NODE=<graalvm>/bin/node node graalvm.js
 */

var fs = require('fs');
var child_process = require('child_process');
var runner_support = require('./runner_support');

var jsCommand = 'js';
var jsArgs = [ '--js.intl-402' ];
var nodeCommand = process.env['GRAALVM_NODE'];
var nodeArgs = [];

var testScriptFilename = 'graalvmtest.js';

var flagsForSuite = {
    'data-es5': [],
    'data-es6': [ [ '--js.ecmascript-version=6' ] ],
    'data-es2016plus': [ [ '--js.ecmascript-version=staging' ] ],
    'data-esnext': [ [ '--js.ecmascript-version=staging' ], [ '--experimental-options', '--js.new-set-methods' ] ],
    'data-esintl': [],
    'data-non-standard': [ [ '--experimental-options', '--js.nashorn-compat' ], [ '--experimental-options', '--js.v8-compat' ], [ '--experimental-options', '--js.global-property' ] ]
};

var prelude = 
    'if (typeof global === "undefined") {\n' +
    '    this.lacksGlobal = true;\n' +
    '    global = this;\n' +
    '}\n' +
    'if (typeof globalThis === "undefined") {\n' +
    '    this.lacksGlobalThis = true;\n' +
    '    globalThis = this;\n' +
    '}\n' +
    'var __script_executed = {};\n' + 
    'global.__script_executed = __script_executed;\n' + 
    'global.test = function test(expression) {\n' +
    '    if (expression) {\n' +
    '        console.log("[SUCCESS]");\n' +
    '    }\n' +
    '}\n' +
    'global.asyncTestPassed = function asyncTestPassed() {\n' +
    '    console.log("[SUCCESS]");\n' +
    '}\n' +
    runner_support.createIterableHelper;

// Key for .res (e.g. test.res.graalvm), automatic based on GraalVM version.
var graalvmKey = (function () {
    var stdout = child_process.execFileSync(jsCommand, [ '--version' ], {
        encoding: 'utf-8'
    });

    var version = /[\d\.]+/.exec(stdout)[0];
    console.log('GraalVM version is: ' + version);
    return version.replace(/\.0(?:$|(?=\.))/g, '').replace(/\./g, '_');
})();
console.log('GraalVM result key is: test.res.graalvm' + graalvmKey);

function exec(launcherCommand, launcherArgs, flags) {
    try {
        var stdout = child_process.execFileSync(launcherCommand, launcherArgs.concat(flags, [ testScriptFilename ]), {
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'ignore']
        });

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        return false;
    }
}

function executeTestScript(launcherCommand, launcherArgs, suite) {
    if (exec(launcherCommand, launcherArgs, [])) {
        return true;
    }

    for (var i = 0; i < flagsForSuite[suite].length; i++) {
        var flags = flagsForSuite[suite][i];
        if (exec(launcherCommand, launcherArgs, flags)) {
            return {
                val: 'flagged',
                note_id: ('graalvm-' + flags.join('-')).replace(/[=\.]/g, '-').replace(/-+/g, '-'),
                note_html: 'Requires the <code>' + flags.join(' ') + '</code> flag' + (flags.length > 1 ? 's' : '') + '.'
            };
        }
    }

    return false;
}

function runTest(evalcode, suite, testPath) {
    if (/\bsetTimeout\b/.test(evalcode) && !nodeCommand) {
        console.log(testPath + ': could not run test using setTimeout (set GRAALVM_NODE to GraalVM\'s `node` binary and rerun to get results)');
        return 'skip';
    }

    var script =
        prelude + '\n' +
        'var evalcode = ' + JSON.stringify(evalcode) + ';\n' +
        'var result = eval(evalcode);\n' +
        'if (result) {\n' +
        '    console.log("[SUCCESS]");\n' +
        '}\n';

    fs.writeFileSync(testScriptFilename, script);
    
    if (evalcode.match(/\bsetTimeout\b/)) {
        return executeTestScript(nodeCommand, nodeArgs, suite);
    } else {
        return executeTestScript(jsCommand, jsArgs, suite);
    }
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

runner_support.runTests(runTest, graalvmKey, 'GraalVM', { resultsMatch: resultsMatch });