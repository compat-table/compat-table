exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.tests = [
{
  name: 'uneval',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval',
  exec: function () {
    return typeof uneval == 'function';
  },
  res: { 
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false,
  }
},
{
  name: '"toSource" method',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource',
  exec: function () {
    return 'toSource' in Object.prototype
        && Number   .prototype.hasOwnProperty('toSource')
        && Boolean  .prototype.hasOwnProperty('toSource')
        && String   .prototype.hasOwnProperty('toSource')
        && Function .prototype.hasOwnProperty('toSource')
        && Array    .prototype.hasOwnProperty('toSource')
        && RegExp   .prototype.hasOwnProperty('toSource')
        && Date     .prototype.hasOwnProperty('toSource')
        && Error    .prototype.hasOwnProperty('toSource');
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: true,
    rhino17: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'function "caller" property',
  exec: function () {
    return 'caller' in function(){};
  },
  res: {
    ie7: true,
    iojs: true,
    firefox2: true,
    safari3: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    konq44: true,
    besen: false,
    rhino17: false,
    phantom: true,
    android40: true,
  }
},
{
  name: 'function "arity" property',
  exec: function () {
    return (function () {}).arity === 0 &&
      (function (x) { return x; }).arity === 1 &&
      (function (x, y) { return y; }).arity === 2;
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox7: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'function "arguments" property',
  exec: function () {
    function f(a, b) {
      return f.arguments && a === 1 && f.arguments[0] === 1 && b === 'boo' && f.arguments[1] === 'boo';
    }
    return f(1, 'boo');
  },
  res: {
    ie7: true,
    iojs: true,
    firefox2: true,
    safari3: null,
    safari4: true,
    chrome7: true,
    opera10_10: true,
    konq44: true,
    besen: false,
    rhino17: true,
    phantom: true,
    android40: true,
  }
},
{
  name: 'Function.prototype.isGenerator',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/isGenerator',
  exec: function () {
    return typeof Function.prototype.isGenerator == 'function';
  },
  res: {
    ie7: false,
    firefox2: false,
    firefox5: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'class extends null',
  spec: 'https://github.com/tc39/ecma262/issues/543',
  exec: function() {/*
     class C extends null {}
     return new C instanceof C;
     */},
  res: {
    safari10_1: true,
    safaritp: true,
    webkit: true,
  },
},
{
  name: '__count__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/prototype',
  exec: function () {
    return typeof ({}).__count__ === 'number' &&
      ({ x: 1, y: 2 }).__count__ === 2;
    },
  res: {
    ie7: false,
    firefox2: true,
    firefox4: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: '__parent__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/Parent',
  exec: function () {
    return typeof ({}).__parent__ !== 'undefined';
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox4: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: '__noSuchMethod__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/noSuchMethod',
  exec: function () {
    var o = { }, executed = false;
    o.__noSuchMethod__ = function () { executed = true; };
    try {
      o.__i_dont_exist();
    } catch (e) { }
    return executed;
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox44: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'Array generics',
  exec: function () {
    return typeof Array.slice === 'function' && Array.slice('abc').length === 3;
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'String generics',
  exec: function () {
    return typeof String.slice === 'function' && String.slice(123, 1) === "23";
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Array comprehensions (JS 1.8 style)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_comprehensions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var a = [i * 2 for (i in obj) if (i !== "foo")];
    return a instanceof Array && a[0] === 4 && a[1] === 8;
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox44: true,
    firefox46: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Array comprehensions (ES draft style)',
  significance: 'medium',
  spec: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */},
  res: {
    firefox30: true,
  }
},
{
  name: 'Expression closures',
  exec: function () {/*
    return (function(x)x)(1) === 1;
  */},
  res: {
    ie7: false,
    firefox2: false,
    firefox3: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: true,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'ECMAScript for XML (E4X)',
  spec: 'https://developer.mozilla.org/en-US/docs/Archive/Web/E4X',
  exec: function () {/*
    return typeof <foo/> === "xml";
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox17: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: '"for each..in" loops',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in',
  exec: function () {/*
    var str = '';
    for each (var item in {a: "foo", b: "bar", c: "baz"}) {
      str += item;
    }
    return str === "foobarbaz";
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox20: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Sharp variables',
  spec: 'https://developer.mozilla.org/en/Sharp_variables_in_JavaScript',
  exec: function () {/*
    var arr = #1=[1, #1#, 3];
    return arr[1] === arr;
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox12: false,
    safari3: null,
    safari4: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: false,
    konq44: null,
    konq49: false,
    besen: null,
    rhino17: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Iterator',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
  exec: function () {
    /* global Iterator */
    try {
      // jshint newcap:false
      var it = Iterator({ foo: 1, bar: 2 });
      // jshint newcap:true
      var keys = "";
      var values = 0;
      for (var pair in it) {
        keys   += pair[0];
        values += pair[1];
      }
      return keys === "foobar" && values === 3;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: '__iterator__',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
  exec: function () {
    try {
      var x = 5;
      var iter = {
        next: function() {
          /* global StopIteration */
          if (x > 0) return { foo: --x };
          else throw StopIteration;
        }
      };
      var total = 0;
      // jshint iterator: true
      for (var item in { __iterator__: function() { return iter; }}) {
        total += item.foo;
      }
      // jshint iterator: false
      return total === 10;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Generators (JS 1.8)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators',
  exec:[{
      type: 'application/javascript;version=1.8',
      script: function () {
        global.test((function () {
          try {
            var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
            var passed = g.next() === "foo";
            return passed && (g.send("bar") === "barbaz");
          }
          catch(e) {
            return false;
          }
        }()));
        global.__script_executed["generators"] = true;
      }
  },{
      script: function () {
        if (!global.__script_executed["generators"]) {
          global.test((function () {
            try {
              var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
              var passed = g.next() === "foo";
              return passed && (g.send("bar") === "barbaz");
            }
            catch(e) {
              return false;
            }
          }()));
        }
      }
  }],
  res: {
    ie7: false,
    firefox3: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  },
},
{
  name: 'Generator comprehensions (JS 1.8 style)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_expressions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var g = (i * 2 for (i in obj) if (i !== "foo"));
    return g.next() === 4 && g.next() === 8;
  */},
  res: {
    ie7: false,
    firefox3: true,
    firefox46: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Generator comprehensions (ES draft style)',
  significance: 'medium',
  spec: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    var iterator = (for (a of [1,2]) a + 4);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  */},
  res: {
    firefox30: true,
  },
  separator: 'after'
},
{
  name: 'RegExp "x" flag',
  exec: function () {
    try {
      var re = new RegExp('^ ( \\d+ ) \
                         ( \\w+ ) \
                         ( foo  )', 'x');
      return re.exec('23xfoo')[0] === '23xfoo';
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: false,
    safari3: false,
    chrome7: false,
    opera10_10: true,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'RegExp "lastMatch"',
  exec: function () {
    var re = /\w/;
    re.exec('x');
    return RegExp.lastMatch === 'x';
  },
  res: {
    ie7: true,
    iojs: true,
    firefox2: true,
    safari3: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    konq44: true,
    besen: false,
    rhino17: true,
    phantom: true,
    android40: true,
  }
},
{
  name: 'RegExp.$1-$9',
  exec: function () {
    for (var i = 1; i < 10; i++) {
      if (!(('$' + i) in RegExp)) return false;
    }
    return true;
  },
  res: {
    ie7: true,
    iojs: true,
    firefox2: true,
    safari3: true,
    chrome7: true,
    opera10_10: true,
    konq44: true,
    besen: false,
    rhino17: true,
    phantom: true,
    android40: true,
  }
},
{
  name: 'Callable RegExp',
  exec: function () {/*
    return /\\w/("x")[0] === "x";
  */},
  res: {
    ie7: false,
    firefox2: false,
    safari3: true,
    safari7: false,
    opera10_10: true,
    chrome7: true,
    chrome11: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'RegExp named groups',
  exec: function () {/*
    return /(?P<name>a)(?P=name)/.test("aa");
  */},
  res: {
    ie7: false,
    firefox2: false,
    safari3: null,
    safari4: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: true,
    konq44: null,
    konq49: true,
    besen: null,
    rhino17: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'String.prototype.trimLeft',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft',
  exec: function () { return typeof String.prototype.trimLeft === 'function' },
  res: {
    ie7: false,
    edge13: true,
    iojs: true,
    firefox2: false,
    firefox3_5: true,
    safari3: false,
    safari5: true,
    chrome7: true,
    opera10_10: false,
    konq44: false,
    konq49: true,
    besen: false,
    rhino17: false,
    phantom: true,
    android40: true,
  }
},
{
  name: 'String.prototype.trimRight',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
  exec: function () { return typeof String.prototype.trimRight === 'function' },
  res: {
    ie7: false,
    edge13: true,
    iojs: true,
    firefox2: false,
    firefox3_5: true,
    safari3: false,
    safari5: true,
    chrome7: true,
    opera10_10: false,
    konq44: false,
    konq49: true,
    besen: false,
    rhino17: false,
    phantom: true,
    android40: true,
  }
},
{
  name: 'String.prototype.quote',
  exec: function () { return typeof String.prototype.quote === 'function' },
  res: {
    ie7: false,
    firefox2: true,
    firefox37: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: null,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'String.prototype.replace flags',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  exec: function () { return 'foofoo'.replace('foo', 'bar', 'g') === 'barbar' },
  res: {
    firefox2: true,
    firefox49: false,
    rhino17: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Date.prototype.toLocaleFormat',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat',
  exec: function () { return typeof Date.prototype.toLocaleFormat === 'function' },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  },
},
{
  name: 'Date.parse produces NaN for invalid dates',
  exec: function () {
    var brokenOnFirefox = !isNaN(Date.parse('2012-04-04T24:00:00.500Z'));
    var brokenOnIE10 = !isNaN(Date.parse('2012-12-31T24:01:00.000Z'));
    var brokenOnChrome = !isNaN(Date.parse('2011-02-29T12:00:00.000Z'));
    return !brokenOnFirefox && !brokenOnIE10 && !brokenOnChrome;
  },
  res: {
    firefox2: true,
    firefox3_6: false,
    firefox49: true,
    safari4: true,
    opera10_10: true,
    konq43: true,
    besen: true,
    rhino17: true,
    ejs: true,
    android40: true,
  },
  separator: 'after'
},
{
  name: 'Object.prototype.watch',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch',
  exec: function () { return typeof Object.prototype.watch == 'function' },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Object.prototype.unwatch',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch',
  exec: function () { return typeof Object.prototype.unwatch == 'function' },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'Object.prototype.eval',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/eval',
  exec: function () { return typeof Object.prototype.eval == 'function' },
  res: {
    ie7: false,
    firefox2: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: true,
    rhino17: false,
    phantom: false
  },
},
{
  name: 'Object.observe',
  spec: 'https://arv.github.io/ecmascript-object-observe/',
  exec: function () {/*
    return typeof Object.observe == 'function';
  */},
  res: {
    chrome36: true,
    chrome49: false,
    node010: true,
    android50: true,
  },
  separator: 'after'
},
{
  name: 'error "stack"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack',
  exec: function () {
    try {
      throw new Error();
    } catch (err) {
      return 'stack' in err;
    }
  },
  res: {
    ie7: false,
    ie11: true,
    iojs: true,
    firefox2: true,
    safari3: false,
    safari71_8: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false,
    android40: true,
  }
},
{
  name: 'error "lineNumber"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber',
  exec: function () {
    return 'lineNumber' in new Error();
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'error "columnNumber"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber',
  exec: function () {
    return 'columnNumber' in new Error();
  },
  res: {
    ie7: false,
    firefox2: false,
    firefox17: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  }
},
{
  name: 'error "fileName"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName',
  exec: function () {
    return 'fileName' in new Error();
  },
  res: {
    ie7: false,
    firefox2: true,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: true,
    phantom: false
  }
},
{
  name: 'error "description"',
  spec: 'http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx',
  exec: function () {
    return 'description' in new Error();
  },
  res: {
    ie7: true,
    firefox2: false,
    safari3: false,
    chrome7: false,
    opera10_10: false,
    konq44: false,
    besen: false,
    rhino17: false,
    phantom: false
  },
  separator: 'after'
}
];
