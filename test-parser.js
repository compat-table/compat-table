// Copyright 2012 Dan Wolff | danwolff.se
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  function deindentFunc(fn) {
    fn = (fn+'');
    var indent = /(?:^|\n)([\t ]+)[^\n]+/.exec(fn);
    if (indent) {
      fn = fn.replace(new RegExp('\n' + indent[1], 'g'), '\n');
    }
    return fn;
  }

function prepareTest(fn, transformFn, rowNum) {
  var script, expr;
  if (!fn) {
    return { script: script, source: expr };
  }
  if (typeof fn === 'function') {
    // see if the code is encoded in a comment
    expr = (fn+"").match(/[^]*\/\*([^]*)\*\/\}$/);
    var transformed = false;
    // if there wasn't an expression, make the function statement into one
    if (!expr) {
      if (transformFn) {
        try {
          expr = transformFn("("+fn+")");
          transformed = true;
        } catch(e) {
          expr = "false";
        }
      }
      else {
        expr = deindentFunc(fn);
      }
      script = 'test(\n' + expr + '())';
      return { script: script, source: expr };
    }
    else {
      expr = deindentFunc(expr[1]);
      if (transformFn) {
        try {
          if (expr.search(/Function\s*\(|eval\s*\(/) > -1) {
            throw new Error("This test's code invokes eval() and cannot be compiled.");
          }
          expr = transformFn("(function(){" + expr + "})");
          transformed = true;
        } catch(e) {
          expr = "/* Error during compilation: " + e.message + "*/";
        }
      }
      /* jshint unused: true */ // this appears unused, but removing it might break things.
      var async = !!/asyncTestPassed/.exec(fn);
      /* jshint unused: false */
      var codeString = JSON.stringify(expr).replace(/\\r/g,'');
      var asyncFn = 'global.__asyncPassedFn && __asyncPassedFn("' + rowNum + '")';
      var strictAsyncFn = 'global.__strictAsyncPassedFn && __strictAsyncPassedFn("' + rowNum + '")';
      var funcString =
        transformed ? '' + asyncFn + ' && eval(' + codeString + ')()'
        : 'Function("asyncTestPassed",' + codeString + ')(asyncTestPassed)';
      var strictFuncString =
        transformed ? '' + strictAsyncFn + ' && function(){"use strict";' + codeString + '}() && "Strict"'
        : 'Function("asyncTestPassed","\'use strict\';"+' + codeString + ')(asyncTestPassed)';

      script = 'test(function(){'
        +  'try{'
        +    'var asyncTestPassed=' + asyncFn + ';'
        +    'try{'
        +      'return ' + funcString
        +    '}'
        +    'catch(e){'
        +      'asyncTestPassed=' + strictAsyncFn + ';'
        +      'return ' + strictFuncString + '&&"Strict"'
        +    '}'
        +  '}'
        +  'catch(e){'
        +    'return false;'
        +  '}'
        +'}());';
      return { script: script, source: expr };
    }
  } else {
    // it's an array of objects like the following:
    // { type: 'application/javascript;version=1.8', script: function () { ... } }
    return fn.map(function(script) {
      var expr = deindentFunc(
          (script.script+'').replace(/^function \(\) \{\s*|\s*\}$/g, '')
        );
      return { script: expr, source: expr, type: script.type };
    });
  }
}

module.exports = {
  prepareTest: prepareTest
};
