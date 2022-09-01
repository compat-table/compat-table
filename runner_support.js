var fs = require('fs');

exports.createIterableHelper =
'function __createIterableObject(arr, methods) {\n' +
'    methods = methods || {};\n' +
'    if (typeof Symbol !== "function" || !Symbol.iterator)\n' +
'        return {};\n' +
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
'}\n' +
'if (typeof global !== "undefined") {\n' +
'    global.__createIterableObject = __createIterableObject;\n' +
'}\n';

exports.runTests = function runTests(runner, key, family, options) {
    options = options === undefined ? {} : options;
    var resultsMatch;
    if (options.resultsMatch) {
        resultsMatch = options.resultsMatch;
    } else {
        resultsMatch = function resultsMatch(expect, actual) {
            return expect === actual;
        };
    }
    var suites = options.suites;
    if (suites === undefined) {
        suites = [];
    }
    var testName = options.testName;
    var bail = options.bail;

    var testCount = 0;
    var testSuccess = 0;
    var testOutOfDate = 0;

    var environments = JSON.parse(fs.readFileSync('environments.json').toString());

    var testFilename = 'test.js';

    var asyncTestHelperHead =
        'function asyncTestPassed() {\n' +
        '   print("[SUCCESS]");\n' +
        '}\n' +
        '\n' +
        'var jobQueue = [];\n' +
        '\n' +
        'function setTimeout(cb, time, cbarg) {\n' +
        '    var runTime = Date.now() + time;\n' +
        '    if (!jobQueue[runTime]) {\n' +
        '        jobQueue[runTime] = [];\n' +
        '    }\n' +
        '    jobQueue[runTime].push(function() {\n' +
        '        cb(cbarg);\n' + 
        '    });\n' +
        '}\n';
    var asyncTestHelperTail =
        'function flushQueue() {\n' +            
        '    var curTime = Date.now();\n' +
        '    var empty = true;\n' +
        '    for (var runTime in jobQueue) {\n' +
        '        empty = false;\n' +
        '        if (curTime >= runTime) {\n' +
        '            var jobs = jobQueue[runTime];\n' +
        '            delete jobQueue[runTime];\n' +
        '            jobs.forEach(function (job) {\n' +
        '                job();\n' +
        '            });\n' +
        '        }\n' +
        '    }\n' +
        '    if (!empty) {\n' +
        '        Promise.resolve().then(flushQueue);\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'Promise.resolve().then(flushQueue);\n';

    // List of keys for inheriting results from previous versions.
    var keyList = (function () {
        var res = [];
        for (var k in environments) {
            var env = environments[k];
            if (env.family !== family) {
                continue;
            }
            res.push(k);
            if (k === key) {
                // Include versions up to 'key' but not newer.
                break;
            }
        }
        return res;
    })();
    console.log(family + ' key list for inheriting results is:', keyList);

    function testCode(exec) {
        if (typeof exec === 'function') {
            var src = exec.toString();
            var functionBody = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
            if (functionBody) {
                return '(function () { ' + removeIndent(functionBody[1]) + ' })()';
            } else {
                return '(' + src + ')()';
            }
        } else if (Array.isArray(exec)) {
            return exec.map(function (e) { return testCode(e.script); }).join("; ");
        } else {
            return undefined;
        }
    }

    function removeIndent(str) {
        var indentation = /^[\t ]+/m.exec(str);
        return str.replace(new RegExp('^' + indentation[0], 'gm'), '');
    }

    // Run test / subtests, recursively.  Report results, indicate data files
    // which are out of date.
    function runTest(parents, test) {
        if (!testName || (test.name.indexOf(testName) !== -1 || parents.some(function (p) { return p.indexOf(testName) !== -1; }))) {
            var testPath = parents.join(' -> ') + ' -> ' + test.name;

            var evalcode = testCode(test.exec);

            var actual;
            if (evalcode) {
                var script = '';
                if (/\blacksGlobal\b/.test(evalcode)) {
                    script += 'this.lacksGlobal = typeof global === "undefined";\n';
                }
                if (/\bglobal\b/.test(evalcode)) {
                    script += 'if (typeof global === "undefined") {\n' +
                              '    global = this;\n' +
                              '}\n';
                }
                if (/\blacksGlobalThis\b/.test(evalcode)) {
                    script += 'this.lacksGlobalThis = typeof globalThis === "undefined";\n';
                }
                if (/\bglobalThis\b/.test(evalcode)) {
                    script += 'if (typeof globalThis === "undefined") {\n' +
                              '    globalThis = this;\n' +
                              '}\n';
                }
                if (/\b__script_executed\b/.test(evalcode)) {
                    script += 'var __script_executed = {};\n' + 
                              'global.__script_executed = __script_executed;\n' +
                              'if (typeof global !== "undefined") {\n' +
                              '    global.__script_executed = __script_executed;\n' +
                              '}\n';
                }
                if (/\b__createIterableObject\b/.test(evalcode)) {
                    script += exports.createIterableHelper;
                }

                if (/\basyncTestPassed\b/.test(evalcode)) {
                    script += asyncTestHelperHead + '\n' + evalcode + '\n\n' + asyncTestHelperTail;
                } else if (/\bglobal\.test\b/.test(evalcode)) {
                    script += 'global.test = function (expression) {\n' +
                              '    if (expression) {\n' +
                              '        console.log("[SUCCESS]");\n' +
                              '    }\n' +
                              '}\n' +
                              evalcode;
                } else {
                    script += 'var result = ' + evalcode + ';\n' + 
                              'if (result) {\n' + 
                              '    print("[SUCCESS]");\n' +
                              '}\n';
                }

                fs.writeFileSync(testFilename, script);
            
                actual = runner(testFilename, parents[0]);
            } else {
                actual = 'skip';
            }


            if (actual !== 'skip') {
                testCount++;

                if (actual) {
                    testSuccess++;
                }
    
                if (test.res) {
                    // Take expected result from newest engine version not newer
                    // than current version.
                    var expect;
                    keyList.forEach(function (k) {
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

        if (bail && testOutOfDate > 0) {
            throw new Error('stop, tests not outdated: ' + (testCount - 1));
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
        var datafile = /^data-(.*)\.js$/.exec(filename);
        if (!datafile) {
            return;
        }
        var suitename = datafile[1];

        if (suites.length != 0 && !suites.includes(suitename)) {
            return;
        }

        console.log('');
        console.log('**** ' + suitename + ' ****');
        console.log('');

        var testsuite = require('./data-' + suitename + '.js');
        testsuite.tests.forEach(function (test) {
            runTest([ suitename ], test);
        });
    });

    console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
    console.log(testOutOfDate + ' tests are out of date (data-*.js file .res)');
};