/*
 *  Node.js test runner for running data-*.js tests with Hermes 'hermes' command.
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects 'hermes' to be already built.  Example:
 *
 *  $ node hermes.js --hermes-bin /path/to/hermes --suite suitename
 * 
 *  suitename can be 'all'
 */

var fs = require('fs');
var child_process = require('child_process');
var console = require('console');
var runner_support = require('./runner_support');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .option('hermes-bin', {
        alias: 'b',
        type: 'string'
    })
    .option('suite', {
        alias: 's',
        type: 'string',
        choices: ['all', 'es5', 'es6', 'es2016plus', 'esintl', 'esnext', 'non-standard'],
        default: 'all'
    })
    .option('test-name', {
        alias: 't',
        type: 'string'
    })
    // .option('promise', {
    //     type: 'boolean'
    // })
    .option('symbol', {
        type: 'boolean'
    })
    .option('proxy', {
        type: 'boolean'
    })
    .option('bail', {
        type: 'boolean',
        describe: 'Bail of first outdated test'
    })
    .option('react-native-bundler', {
        alias: 'r',
        type: 'string'
    })
    .argv;

var hermesCommand = argv.hermesBin;
var suites = argv.suite;
suites = suites === 'all' ? '' : suites;

var testFamily = argv.reactNativeBundler ? 'React-Native': 'Hermes';

// Key for .res (e.g. test.res.hermes0_7_0), automatic based on `hermes -version`.
var testKey = (function () {
    var stdout = child_process.execFileSync(hermesCommand, ['-version'], {
        encoding: 'utf-8'
    });

    var m, prefix;

    if (argv.reactNativeBundler) {
        prefix = 'reactnative';
        // make sure to use hermes bundled with react native release
        m = /Hermes release version: for RN\s+(\d+)\.(\d+)(?:\.(\d+))?/.exec(stdout);
    } else {
        prefix = 'hermes';
        m = /Hermes release version:\s+(\d+)\.(\d+)(?:\.(\d+))?/.exec(stdout);
    }

    if (m) {
        return prefix + m[1] + '_' + m[2] + (m[3] ? '_' + m[3] : '');
    }
    throw new Error('Invalid Hermes version');
})();
console.log('Hermes result key is: test.res.' + testKey);

function getArgs(testFilename) {
    var processArgs = [
        /*'-enable-eval',*/
        /*'-allow-function-to-string',*/
    ]
        .concat([testFilename])
        .filter(Boolean);

    // if (argv.promise) {
    //     processArgs.unshift('-Xes6-promise');
    // }

    if (argv.symbol) {
        processArgs.unshift('-Xes6-symbol');
    }

    if (argv.proxy) {
        processArgs.unshift('-Xes6-proxy');
    }

    // Comment this to see eval warnings
    processArgs.unshift('-w');

    return processArgs;
}

function testRunner(testFilename) {
    var processArgs = getArgs(testFilename);
    if (argv.reactNativeBundler) {
        var transpilerCommand = 'curl -s --upload-file ./' + testFilename +  ' "' + argv.reactNativeBundler +  '"';
        var traspilerStdout = child_process.execSync(transpilerCommand);
        fs.writeFileSync(testFilename, traspilerStdout.toString());
    }

    try {
        var stdout = child_process.execFileSync(hermesCommand, processArgs, {
            encoding: 'utf-8'
        });

        return /^\[SUCCESS\]$/m.test(stdout);
    } catch (e) {
        // console.log(e);
        return false;
    }
}

function resultsMatch(expect, actual) {
    // Handling notes
    if (typeof expect === 'object' && 'val' in expect) {
        if (expect.val === 'flagged') {
            if (expect.note_id === 'hermes-promise') {
                expect = !!argv.promise;
            } else if (expect.note_id === 'hermes-symbol') {
                expect = !!argv.symbol;
            } else if (expect.note_id === 'hermes-proxy') {
                expect = !!argv.proxy;
            } else {
                // expect = true;
                expect = expect.val;
            }
        } else {
            expect = expect.val;
        }
    }
    return expect === actual;
}

runner_support.runTests(testRunner, testKey, testFamily, { resultsMatch: resultsMatch, suites: suites, testName: argv.testName, bail: argv.bail });
