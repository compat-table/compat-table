// this file must only contain js code written in ES3 as it's used in tests

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
