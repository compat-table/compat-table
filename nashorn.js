/*
 *  Node.js test runner for running data-*.js tests with Nashorn 'jjs' command
 *  running in es6 mode (a.k.a.: jjs --language=es6).
 * 
 *  If the environment variable JAVA_HOME is defined it will use it to
 *  construct the path to 'jjs' as $JAVA_HOME/bin/jjs
 *
 *  Reports discrepancies to console; fix them manually in data-*.js files.
 *  Expects a 'jjs' command in the path.  Example:
 *
 *    $ node nashorn.js
 */

var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var testCount = 0;
var testSuccess = 0;

var jjsCommand = 'jjs';

var jdkBin = '';
// if JAVA_HOME is set then resolve to the bin
if (process.env.JAVA_HOME) {
    var jdkBin = path.resolve(process.env.JAVA_HOME, 'bin');
    jjsCommand = path.resolve(jdkBin, 'jjs');
}

// Key for .res (e.g. test.res.nashorn), automatic based on nashorn version.
var jjsKey = (function () {
    var script = 'print(java.lang.System.getProperty("java.specification.version"));\n' +
                 'quit()\n';

    fs.writeFileSync('jjstest.js', script);
    var stdout = child_process.execFileSync(jjsCommand, [ '--language=es6', 'jjstest.js' ], {
        encoding: 'utf-8'
    });

    console.log('jjs version is: ' + stdout);
    return stdout.replace('.', '_');
})();
console.log('jjs result key is: test.res.nashorn' + jjsKey);

// Run test / subtests, recursively.  Report results, indicate data files
// which are out of date.
function runTest(parents, test, sublevel) {
    var testPath = parents.join(' -> ') + ' -> ' + test.name;

    if (typeof test.exec === 'function') {
        var src = test.exec.toString();
        var m = /^function\s*\w*\s*\(.*?\)\s*\{\s*\/\*([\s\S]*?)\*\/\s*\}$/m.exec(src);
        var evalcode;
        if (m) {
            evalcode = '(function test() {' + m[1] + '})();';
        } else {
            evalcode = '(' + src + ')()';
        }
        //console.log(evalcode);

        var script = 'var evalcode = ' + JSON.stringify(evalcode) + ';\n' +
                     'try {\n' +
                     '    var res = eval(evalcode);\n' +
                     '    if (res !== true && res !== 1) { throw new Error("failed: " + res); }\n' +
                     '    print("[SUCCESS]");\n' +
                     '} catch (e) {\n' +
                     '    print("[FAILURE] " + e);\n' +
                     '    /*throw e;*/\n' +
                     '}\n';

        fs.writeFileSync('jjstest.js', script);
        var stdout = child_process.execFileSync(jjsCommand, [ '--language=es6', 'jjstest.js' ], {
            encoding: 'utf-8'
        });
        //console.log(stdout);

        var success = false;
        if (/^\[SUCCESS\]$/gm.test(stdout)) {
            success = true;
            testSuccess++;
        } else {
            //console.log(stdout);
        }
        testCount++;

        if (success) {
            console.log(testPath + ': test passed');
        } else {
            console.log(testPath + ': test failed');
        }
        test.success = success;
    }
    if (test.subtests) {
        var newParents = parents.slice(0);
        newParents.push(test.name);
        test.subtests.forEach(function (v) { runTest(newParents, v, sublevel + 1); });
    }
}

function setResults(test, results) {
    var resTest;
    var i;
    for (i = 0; i < results.length; i++) {
        if (results[i].name === test.name) {
            resTest = results[i];
            break;
        }
    }
    if (!resTest) {
        throw new Error('Unable to find test in results JSON');
    }
    if (resTest.res) {
        resTest.res[jjsKey] = test.success;
    }
    if (test.subtests) {
        if (!resTest.subtests) {
            throw new Error('Test has subtests, but results don\'t');
        }
        for (i = 0; i < test.subtests.length; i++) {
            setResults(test.subtests[i], resTest.subtests);
        }
    }
}

fs.readdirSync('.').forEach(function (filename) {
    var m = /^(data-.*)\-tests.js$/.exec(filename);
    if (!m) {
        return;
    }
    var suitename = m[1];

    console.log('');
    console.log('**** ' + suitename + ' ****');
    console.log('');
    var testsuite = require('./' + suitename + '-tests');
    testsuite.forEach(function (v) { runTest([ suitename ], v, 0); });
    
    var results = require('./' + suitename);
    for (var i = 0; i < testsuite.length; i++) {
        setResults(testsuite[i], results.tests);
    }
    fs.writeFileSync(suitename + '.json', JSON.stringify(results, null, 4));
});

console.log(testCount + ' tests executed: ' + testSuccess + ' success, ' + (testCount - testSuccess) + ' fail');
