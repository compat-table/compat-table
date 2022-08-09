/*
 *  Node.js test runner for running data-*.js tests with GraalVM's 'js' command
 *  running in the suitable ecmascript-version mode (e.g. jjs --ecmascript-version=5 for data-es5).
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects a 'js' command in the path.  Example:
 *
 *    $ node graalvm.js
 */

var fs = require('fs');
var child_process = require('child_process');

var testCount = 0;
var testSuccess = 0;
var testOutOfDate = 0;

var jsCommand = 'js';

var environments = JSON.parse(fs.readFileSync('environments.json').toString());

var flagsForSuite = {
    'data-es5': [ [ '--js.ecmascript-version=5' ] ],
    'data-es6': [ [ '--js.ecmascript-version=6' ] ],
    'data-es2016plus': [ [ '--js.ecmascript-version=staging' ] ],
    'data-esnext': [ [ '--js.ecmascript-version=staging' ], [ '--experimental-options', '--js.new-set-methods' ] ],
    'data-esintl': [],
    'data-non-standard': [ [ '--experimental-options', '--js.nashorn-compat' ], [ '--experimental-options', '--js.v8-compat' ], [ '--experimental-options', '--js.global-property' ] ]
};

var prelude = 
    'var __script_executed = {};\n' + 
    'if (typeof global === "undefined") {\n' +
    '    this.lacksGlobal = true;\n' +
    '    global = this;\n' +
    '}\n' +
    'if (typeof globalThis === "undefined") {\n' +
    '    this.lacksGlobalThis = true;\n' +
    '    globalThis = this;\n' +
    '}\n' +
    'function test(expression) {\n' +
    '    if (expression) {\n' +
    '        print("[SUCCESS]");\n' +
    '    }\n' +
    '}\n' +
    'function asyncTestPassed() {\n' +
    '    print("[SUCCESS]");\n' +
    '}\n' +
    'function __createIterableObject(arr, methods) {\n' +
    '    methods = methods || {};\n' +
    '    if (typeof Symbol !== "function" || !Symbol.iterator) {\n' +
    '        return {};\n' +
    '    }\n' +
    '    arr.length++;\n' +
    '    var iterator = {\n' +
    '        next: function() {\n' +
    '            return { value: arr.shift(), done: arr.length <= 0 };\n' +
    '        },\n' +
    '        "return": methods["return"],\n' +
    '        "throw": methods["throw"]\n' +
    '    };\n' +
    '    var iterable = {};\n' +
    '    iterable[Symbol.iterator] = function(){ return iterator; };\n' +
    '    return iterable;\n' +
    '}\n';

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

// List of keys for inheriting results from previous versions.
var graalvmKeyList = (function () {
    var res = [];
    for (var k in environments) {
        var env = environments[k];
        if (env.family !== 'GraalVM') {
            continue;
        }
        res.push(k);
        if (k === graalvmKey) {
            // Include versions up to 'graalvmKey' but not newer.
            break;
        }
    }
    return res;
})();
console.log('GraalVM key list for inheriting results is:', graalvmKeyList);

function executeTestScript(testScriptFilename, suite) {
    var stdout = child_process.execFileSync(jsCommand, [ '--js.intl-402', testScriptFilename ], {
        encoding: 'utf-8'
    });

    if (/^\[SUCCESS\]$/gm.test(stdout)) {
        return true;
    }

    for (var i = 0; i < flagsForSuite[suite].length; i++) {
        var flags = flagsForSuite[suite][i];
        var args = flags.slice(0);
        args.push('--js.intl-402');
        args.push(testScriptFilename);
        stdout = child_process.execFileSync(jsCommand, args, {
            encoding: 'utf-8'
        });

        if (/^\[SUCCESS\]$/m.test(stdout)) {
            return {
                val: 'flagged',
                note_id: ('graalvm-' + flags.join('-')).replace(/[=\.]/g, '-').replace(/-+/g, '-'),
                note_html: 'Requires the <code>' + flags.join(' ') + '</code> flag' + (flags.length > 1 ? 's' : '') + '.'
            };
        }
    }

    return false;
}

function resultsMatch(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a === 'object' && a.val === 'flagged' && typeof b === 'object' && b.val === 'flagged') {
        return a.note_id === b.note_id && a.note_html === b.note_html;
    }
    return false;
}

function testCode(exec) {
    if (typeof exec === 'function') {
        var src = exec.toString();
        var functionBody = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
        if (functionBody) {
            var indentation = /^[\t ]+/m.exec(functionBody[1]);
            return '(function () { ' + functionBody[1].replace(new RegExp('^' + indentation[0], 'gm'), '') + ' })();';
        } else {
            return '(' + src + ')()';
        }
    } else if (Array.isArray(exec)) {
        return exec.map(function (e) { return testCode(e.script); }).join(" || ");
    } else {
        return undefined;
    }
}

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test) {
    var testPath = parents.join(' -> ') + ' -> ' + test.name;

    var evalcode = testCode(test.exec);
    if (evalcode !== undefined) {
        if (evalcode.match(/\bsetTimeout\b/)) {
            console.log(testPath + ': could not run test using setTimeout');
        } else {
            var script =
                prelude + '\n' +
                'var evalcode = ' + JSON.stringify(evalcode) + ';\n' +
                'try {\n' +
                '    var result = eval(evalcode);\n' +
                '    if (result) {\n' +
                '        print("[SUCCESS]");\n' +
                '    }\n' +
                '} catch (e) {\n' +
                '}\n';

            fs.writeFileSync('graalvmtest.js', script);
            var actual = executeTestScript('graalvmtest.js', parents[0]);
            testCount++;
            if (actual) {
                testSuccess++;
            }
    
            if (test.res) {
                // Take expected result from newest GraalVM version not newer
                // than current version.
                var expect;
                graalvmKeyList.forEach(function (k) {
                    if (test.res[k] !== undefined) {
                        expect = test.res[k];
                    }
                });

                if (resultsMatch(expect, actual)) {
                    // Matches.
                } else if (expect === undefined) {
                    testOutOfDate++;
                    console.log(testPath + ': test result missing, res: ' + JSON.stringify(expect) + ', actual: ' + JSON.stringify(actual));
                } else {
                    testOutOfDate++;
                    console.log(testPath + ': test result out of date, res: ' + JSON.stringify(expect) + ', actual: ' + JSON.stringify(actual));
                }
            } else {
                testOutOfDate++;
                console.log(testPath + ': test.res missing');
            }
        }
    }
    if (test.subtests) {
        var newParents = parents.slice(0);
        newParents.push(test.name);
        test.subtests.forEach(function (subtest) {
            runTest(newParents, subtest);
        });
    }
}

fs.readdirSync('.').forEach(function (filename) {
    var datafile = /^(data-.*)\.js$/.exec(filename);
    if (!datafile) {
        return;
    }
    var suitename = datafile[1];

    console.log('');
    console.log('**** ' + suitename + ' ****');
    console.log('');
    var testsuite = require('./' + suitename);
    testsuite.tests.forEach(function (test) {
        runTest([ suitename ], test);
    });
});

console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
console.log(testOutOfDate + ' tests are out of date (data-*.js file .res)');
