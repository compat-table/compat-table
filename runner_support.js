var fs = require('fs');

var environments = JSON.parse(fs.readFileSync('environments.json').toString());

// List of keys for inheriting results from previous versions.
exports.keyList = function keyList(key, family) {
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
};

exports.createIterableHelper =
'if (typeof global === "undefined") {\n' +
'    global = this;\n' +
'}\n' +
'global.__createIterableObject = function __createIterableObject(arr, methods) {\n' +
'    methods = methods || {};\n' +
'    if (typeof Symbol !== "function" || !Symbol.iterator)\n' +
'      return {};\n' +
'    arr.length++;\n' +
'    var iterator = {\n' +
'      next: function() {\n' +
'        return { value: arr.shift(), done: arr.length <= 0 };\n' +
'      },\n' +
'      "return": methods["return"],\n' +
'      "throw": methods["throw"]\n' +
'    };\n' +
'    var iterable = {};\n' +
'    iterable[Symbol.iterator] = function(){ return iterator; };\n' +
'    return iterable;\n' +
'  };\n';

exports.suites = {};
fs.readdirSync('.').forEach(function (filename) {
    var datafile = /^(data-.*)\.js$/.exec(filename);
    if (!datafile) {
        return;
    }
    var suitename = datafile[1];
    var testsuite = require('./' + suitename);

    exports.suites[suitename] = testsuite;
});