// exports browsers and tests

exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7-10',
    short: 'IE 7-10',
    family: 'Chakra',
    obsolete: false
  },
  ie11: {
    full: 'Internet Explorer 11',
    short: 'IE 11',
    family: 'Chakra',
    obsolete: false
  },
  edge13: {
    full: 'Edge 13',
    short: 'Edge 13',
    family: 'Chakra',
    obsolete: false
  },
  iojs: {
    full: 'io.js 1.0.0',
    short: 'io.js',
    platformtype: 'engine',
  },
  firefox3: {
    full: 'Firefox 3',
    short: 'FF 3',
    obsolete: true
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    short: 'FF 3.5, 3.6',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox4: {
    full: 'Firefox 4.0b12pre',
    short: 'FF 4',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox5: {
    full: 'Firefox 5-6',
    short: 'FF 5-6',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox7: {
    full: 'Firefox 7-11',
    short: 'FF 7-11',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox12: {
    full: 'Firefox 12',
    short: 'FF 12',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox16: {
    full: 'Firefox 16',
    short: 'FF 16',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox17: {
    full: 'Firefox 17',
    short: 'FF 17',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox20: {
    full: 'Firefox 20',
    short: 'FF 20',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox28: {
    full: 'Firefox 28-29',
    short: 'FF 28-29',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox30: {
    full: 'Firefox 30-36',
    short: 'FF 30-36',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox37: {
    full: 'Firefox 37-43',
    short: 'FF 37-43',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox44: {
    full: 'Firefox 44-45',
    short: 'FF 44-45',
    family: 'SpiderMonkey',
    obsolete: false
  },
  firefox46: {
    full: 'Firefox 46',
    short: 'FF 46',
    family: 'SpiderMonkey',
    obsolete: true
  },
  firefox47: {
    full: 'Firefox 47',
    short: 'FF 47-48',
    family: 'SpiderMonkey',
    obsolete: false
  },
  firefox49: {
    full: 'Firefox 49',
    short: 'FF 49',
    family: 'SpiderMonkey',
    obsolete: false,
    unstable: true
  },
  safari3: {
    full: 'Safari 3.2',
    short: 'SF 3.2',
    family: 'JavaScriptCore',
    obsolete: true
  },
  safari4: {
    full: 'Safari 4.0.5',
    short: 'SF 4',
    family: 'JavaScriptCore',
    obsolete: true
  },
  safari5: {
    full: 'Safari 5',
    short: 'SF 5',
    family: 'JavaScriptCore',
    obsolete: true
  },
  safari7: {
    full: 'Safari 7.0',
    short: 'SF 7.0',
    family: 'JavaScriptCore',
    obsolete: true
  },
  safari71_8: {
    full: 'Safari 7.1-9.1',
    short: 'SF 7.1-9.1',
    family: 'JavaScriptCore',
    obsolete: false
  },
  safaritp: {
    full: 'Safari Technology Preview Release 5',
    short: 'SF TP',
    family: 'JavaScriptCore',
    unstable: true
  },
  webkit: {
    full: 'Webkit r200167 (April 28, 2016)',
    short: 'WebKit',
    family: 'JavaScriptCore',
    obsolete: false,
    unstable: true
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev)',
    short: 'CH 7-10',
    family: 'V8',
    obsolete: true
  },
  chrome11: {
    full: 'Chrome 11-35',
    short: 'CH 11-35',
    family: 'V8',
    obsolete: true
  },
  chrome36: {
    full: 'Chrome 36-48',
    short: 'CH 36-48',
    family: 'V8',
    obsolete: true
  },
  chrome49: {
    full: 'Chrome 49+',
    short: 'CH 49+',
    family: 'V8',
    obsolete: false
  },
  opera10_10: {
    full: 'Opera 10.10',
    short: 'OP 10.10',
    family: 'Carakan',
    obsolete: true
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156)',
    short: 'OP 10.50-11.10',
    family: 'Carakan',
    obsolete: true
  },
  konq44: {
    full: 'Konqueror 4.4',
    short: 'Konq 4.4',
    family: 'KJS',
    obsolete: true
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9',
    family: 'KJS',
    obsolete: false
  },
  besen: {
    full: 'Bero\'s EcmaScript Engine (version 1.0.0.489)',
    short: 'BESEN',
    link: 'http://besen.sourceforge.net/',
    obsolete: false,
    platformtype: 'engine',
  },
  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7',
    obsolete: false,
    platformtype: 'engine',
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'Phantom',
    obsolete: false,
    platformtype: 'engine',
  },
  android40: {
    full: 'Android Browser',
    short: 'Android 4.0',
    platformtype: 'mobile',
    obsolete: true,
  },
  android41: {
    full: 'Android Browser',
    short: 'Android 4.1-4.4',
    platformtype: 'mobile',
  },
  android50: {
    full: 'Android Browser',
    short: 'Android 5.0+',
    platformtype: 'mobile',
  },
};

exports.tests = [
{
  name: 'uneval',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval',
  exec: function () {
    return typeof uneval == 'function';
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false,
  }
},
{
  name: '"toSource" method',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource',
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: true,
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
    ie11: true,
    iojs: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: false,
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
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
    ie11: true,
    iojs: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: null,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true,
    android40: true,
  }
},
{
  name: 'Function.prototype.isGenerator',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/isGenerator',
  exec: function () {
    return typeof Function.prototype.isGenerator == 'function';
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: '__count__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/prototype',
  exec: function () {
    return typeof ({}).__count__ === 'number' &&
      ({ x: 1, y: 2 }).__count__ === 2;
    },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: '__parent__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/Parent',
  exec: function () {
    return typeof ({}).__parent__ !== 'undefined';
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  }
},
{
  name: '__noSuchMethod__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/noSuchMethod',
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Array comprehensions (JS 1.8 style)',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_comprehensions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var a = [i * 2 for (i in obj) if (i !== "foo")];
    return a instanceof Array && a[0] === 4 && a[1] === 8;
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Array comprehensions (ES draft style)',
  significance: 'medium',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */},
  res: {
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
  }
},
{
  name: 'Expression closures',
  exec: function () {/*
    return (function(x)x)(1) === 1;
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: false,
    phantom: false
  }
},
{
  name: 'ECMAScript for XML (E4X)',
  link: 'https://developer.mozilla.org/en-US/docs/Archive/Web/E4X',
  exec: function () {/*
    return typeof <foo/> === "xml";
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  }
},
{
  name: '"for each..in" loops',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in',
  exec: function () {/*
    var str = '';
    for each (var item in {a: "foo", b: "bar", c: "baz"}) {
      str += item;
    }
    return str === "foobarbaz";
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Sharp variables',
  link: 'https://developer.mozilla.org/en/Sharp_variables_in_JavaScript',
  exec: function () {/*
    var arr = #1=[1, #1#, 3];
    return arr[1] === arr;
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: false,
    firefox28: false,
    safari3: null,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: null,
    konq49: false,
    besen: null,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Iterator',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: '__iterator__',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Generators (JS 1.8)',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators',
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  },
},
{
  name: 'Generator comprehensions (JS 1.8 style)',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_expressions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var g = (i * 2 for (i in obj) if (i !== "foo"));
    return g.next() === 4 && g.next() === 8;
  */},
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Generator comprehensions (ES draft style)',
  significance: 'medium',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
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
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
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
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox16: true,
    firefox17: false,
    firefox20: true,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: true,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
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
    ie11: true,
    iojs: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
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
    ie11: true,
    iojs: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
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
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
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
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: null,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: true,
    chrome11: false,
    chrome36: false,
    konq44: null,
    konq49: true,
    besen: null,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'String.prototype.trimLeft',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft',
  exec: function () { return typeof String.prototype.trimLeft === 'function' },
  res: {
    ie7: false,
    ie11: false,
    edge13: true,
    iojs: true,
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false,
    phantom: true,
    android40: true,
  }
},
{
  name: 'String.prototype.trimRight',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
  exec: function () { return typeof String.prototype.trimRight === 'function' },
  res: {
    ie7: false,
    ie11: false,
    edge13: true,
    iojs: true,
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false,
    phantom: true,
    android40: true,
  }
},
{
  name: 'String.prototype.quote',
  exec: function () { return typeof String.prototype.quote === 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: false,
    firefox44: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: null,
    rhino: false,
    phantom: false
  }
},
{
  name: 'String.prototype.replace flags',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  exec: function () { return 'foofoo'.replace('foo', 'bar', 'g') === 'barbar' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true /* false in non-release builds */,
    firefox49: false,
    //safari3: false,
    //safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    //chrome7: false,
    //opera10_10: false,
    //opera10_50: false,
    chrome11: false,
    chrome36: false,
    //konq44: false,
    //konq49: false,
    //besen: false,
    rhino: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Date.prototype.toLocaleFormat',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat',
  exec: function () { return typeof Date.prototype.toLocaleFormat === 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
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
    firefox3: true,
    firefox4: false,
    firefox49: true,
    safari4: true,
    webkit: true,
    opera10_10: true,
    konq43: true,
    besen: true,
    rhino: true,
    ejs: true,
    android40: true,
  },
  separator: 'after'
},
{
  name: 'Object.prototype.watch',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch',
  exec: function () { return typeof Object.prototype.watch == 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Object.prototype.unwatch',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch',
  exec: function () { return typeof Object.prototype.unwatch == 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'Object.prototype.eval',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/eval',
  exec: function () { return typeof Object.prototype.eval == 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Object.observe',
  link: 'https://arv.github.io/ecmascript-object-observe/',
  exec: function () {/*
    return typeof Object.observe == 'function';
  */},
  res: {
    chrome36:        true,
    chrome49:        false,
    node:            true,
    iojs:            true,
    android50:       true,
  },
  separator: 'after'
},
{
  name: 'error "stack"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack',
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
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: true,
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    chrome11: true,
    chrome36: true,
    chrome49: true,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false,
    android40: true,
  }
},
{
  name: 'error "lineNumber"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber',
  exec: function () {
    return 'lineNumber' in new Error();
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  }
},
{
  name: 'error "columnNumber"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber',
  exec: function () {
    return 'columnNumber' in new Error();
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'error "fileName"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName',
  exec: function () {
    return 'fileName' in new Error();
  },
  res: {
    ie7: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox16: true,
    firefox17: true,
    firefox20: true,
    firefox28: true,
    firefox30: true,
    firefox37: true,
    firefox44: true,
    firefox46: true,
    firefox47: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  }
},
{
  name: 'error "description"',
  link: 'http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx',
  exec: function () {
    return 'description' in new Error();
  },
  res: {
    ie7: true,
    ie11: true,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    safaritp: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    chrome11: false,
    chrome36: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  },
  separator: 'after'
}
];
