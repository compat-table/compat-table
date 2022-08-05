/*
 *  Node.js test runner for running data-*.js tests with GraalVM's 'js' command
 *  running in the suitable ecmascript-version mode (e.g. jjs --ecmascript-version=5 for data-es5).
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects a 'js' command in the path.  Example:
 *
 *    $ node graalvm.js
 */

const fs = require('fs');
const child_process = require('child_process');

let testCount = 0;
let testSuccess = 0;
let testOutOfDate = 0;

const jsCommand = 'js';

const environments = JSON.parse(fs.readFileSync('environments.json').toString());

const flagsForSuite = {
    'data-es5': [ [ '--js.ecmascript-version=5' ] ],
    'data-es6': [ [ '--js.ecmascript-version=6' ] ],
    'data-es2016plus': [ [ '--js.ecmascript-version=latest' ] ],
    'data-esnext': [ [ '--js.ecmascript-version=staging' ], [ '--experimental-options', '--js.new-set-methods' ] ],
    'data-esintl': [ [ '--js.intl-402' ] ],
    'data-non-standard': [ [ '--experimental-options', '--js.nashorn-compat' ], [ '--experimental-options', '--js.v8-compat' ], [ '--experimental-options', '--js.global-property' ] ]
};

const prelude = 
`var __script_executed = {};
if (typeof global === 'undefined') {
    this.lacksGlobal = true;
    global = this;
}
if (typeof globalThis === 'undefined') {
    this.lacksGlobalThis = true;
    globalThis = this;
}
function test(expression) {
    if (expression) {
        print("[SUCCESS]");
    }
}
function asyncTestPassed() {
    print("[SUCCESS]");
}
function __createIterableObject(arr, methods) {
    methods = methods || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }
    arr.length++;
    var iterator = {
        next: function() {
            return { value: arr.shift(), done: arr.length <= 0 };
        },
        'return': methods['return'],
        'throw': methods['throw']
    };
    var iterable = {};
    iterable[Symbol.iterator] = function(){ return iterator; }
    return iterable;
}
`;

// Key for .res (e.g. test.res.graalvm), automatic based on GraalVM version.
const graalvmKey = (function () {
    const stdout = child_process.execFileSync(jsCommand, [ '--version' ], {
        encoding: 'utf-8'
    });

    const version = /[\d\.]+/.exec(stdout)[0];
    console.log(`GraalVM version is: ${version}`);
    return version.replace(/\.0(?:$|(?=\.))/g, '').replace(/\./g, '_');
})();
console.log(`GraalVM result key is: test.res.graalvm${graalvmKey}`);

// List of keys for inheriting results from previous versions.
const graalvmKeyList = (function () {
    const res = [];
    for (const k in environments) {
        const env = environments[k];
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
    let stdout = child_process.execFileSync(jsCommand, [ testScriptFilename ], {
        encoding: 'utf-8'
    });

    if (/^\[SUCCESS\]$/gm.test(stdout)) {
        return true;
    }

    for (const flags of flagsForSuite[suite]) {
        const args = flags.slice(0);
        args.push(testScriptFilename);
        stdout = child_process.execFileSync(jsCommand, args, {
            encoding: 'utf-8'
        });

        if (/^\[SUCCESS\]$/m.test(stdout)) {
            return {
                val: 'flagged',
                note_id: `graalvm-${flags.join('-')}`.replace(/[=\.]/g, '-').replace(/-+/g, '-'),
                note_html: `Requires the <code>${flags.join(' ')}</code> flag${flags.length > 1 ? 's' : ''}.`
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
        const src = exec.toString();
        const functionBody = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
        if (functionBody) {
            const indentation = /^[\t ]+/m.exec(functionBody[1]);
            return `(function () { ${functionBody[1].replace(new RegExp('^' + indentation[0], 'gm'), '')} })();`;
        } else {
            return `(${src})()`;
        }
    } else if (Array.isArray(exec)) {
        return exec.map(e => testCode(e.script)).join(" || ");
    } else {
        return undefined;
    }
}

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test) {
    const testPath = parents.join(' -> ') + ' -> ' + test.name;

    let evalcode = testCode(test.exec);
    if (evalcode !== undefined) {
        if (evalcode.match(/\bsetTimeout\b/)) {
            console.log(`${testPath}: could not run test using setTimeout`);
        } else {
            const script =
`${prelude}
var evalcode = ${JSON.stringify(evalcode)};
try {
    var result = eval(evalcode);
    if (result) {
        print("[SUCCESS]");
    }
} catch (e) {
}
`;

            fs.writeFileSync('graalvmtest.js', script);
            const actual = executeTestScript('graalvmtest.js', parents[0]);
            testCount++;
            if (actual) {
                testSuccess++;
            }
    
            if (test.res) {
                // Take expected result from newest GraalVM version not newer
                // than current version.
                let expect;
                for (const k of graalvmKeyList) {
                    if (test.res[k] !== undefined) {
                        expect = test.res[k];
                    }
                }

                if (resultsMatch(expect, actual)) {
                    // Matches.
                } else if (expect === undefined) {
                    testOutOfDate++;
                    console.log(`${testPath}: test result missing, res: ${JSON.stringify(expect)}, actual: ${JSON.stringify(actual)}`);
                } else {
                    testOutOfDate++;
                    console.log(`${testPath}: test result out of date, res: ${JSON.stringify(expect)}, actual: ${JSON.stringify(actual)}`);
                }
            } else {
                testOutOfDate++;
                console.log(`${testPath}: test.res missing`);
            }
        }
    }
    if (test.subtests) {
        const newParents = parents.slice(0);
        newParents.push(test.name);
        for (const subtest of test.subtests) {
            runTest(newParents, subtest);
        }
    }
}

for (const filename of fs.readdirSync('.')) {
    const datafile = /^(data-.*)\.js$/.exec(filename);
    if (!datafile) {
        continue;
    }
    const suitename = datafile[1];

    console.log('');
    console.log(`**** ${suitename} ****`);
    console.log('');
    const testsuite = require('./' + suitename);
    for (const test of testsuite.tests) {
        runTest([ suitename ], test);
    }
}

console.log(`${testCount} tests executed: ${testSuccess} success, ${(testCount - testSuccess)} fail`);
console.log(`${testOutOfDate} tests are out of date (data-*.js file .res)`);
