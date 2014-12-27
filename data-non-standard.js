// exports browsers and tests

exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7-10',
    short: 'IE 7-10',
    obsolete: false
  },
  ie11: {
    full: 'Internet Explorer 11',
    short: 'IE 11',
    obsolete: false
  },
  firefox3: {
    full: 'Firefox 3',
    short: 'FF 3',
    obsolete: true
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    short: 'FF 3.5, 3.6',
    obsolete: true
  },
  firefox4: {
    full: 'Firefox 4.0b12pre',
    short: 'FF 4',
    obsolete: true
  },
  firefox5: {
    full: 'Firefox 5-6',
    short: 'FF 5-6',
    obsolete: true
  },
  firefox7: {
    full: 'Firefox 7, Firefox 8, Firefox 9, Firefox 10, Firefox 11',
    short: 'FF 7-11',
    obsolete: true
  },
  firefox12: {
    full: 'Firefox 12',
    short: 'FF 12',
    obsolete: true
  },
  firefox28: {
    full: 'Firefox 28',
    short: 'FF 28',
    obsolete: false
  },
  safari3: {
    full: 'Safari 3.2',
    short: 'SF 3.2',
    obsolete: true
  },
  safari4: {
    full: 'Safari 4.0.5',
    short: 'SF 4',
    obsolete: true
  },
  safari5: {
    full: 'Safari 5',
    short: 'SF 5',
    obsolete: true
  },
  safari7: {
    full: 'Safari 7.0',
    short: 'SF 7.0',
    obsolete: false
  },
  safari71_8: {
    full: 'Safari 7.1, Safari 8',
    short: 'SF 7.1, SF 8',
    obsolete: false
  },
  webkit: {
    full: 'Webkit r72487 (Nov 24, 2010)',
    short: 'WebKit',
    obsolete: false
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev)',
    short: 'CH 7-10',
    obsolete: true
  },
  opera10_10: {
    full: 'Opera 10.10',
    short: 'OP 10.10',
    obsolete: true
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156)',
    short: 'OP 10.50-11.10',
    obsolete: true
  },
  opera15: {
    full: 'Opera 15.0',
    short: 'OP 15',
    obsolete: false
  },
  konq44: {
    full: 'Konqueror 4.4',
    short: 'Konq 4.4',
    obsolete: true
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9',
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
  }
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    return 'caller' in (function(){});
  },
  res: {
    ie7: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: false,
    phantom: true
  }
},
{
  name: 'function "arity" property',
  exec: function () {
    return (function (){}).arity === 0 &&
      (function (x){}).arity === 1 &&
      (function (x, y){}).arity === 2;
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
      return f.arguments && f.arguments[0] === 1 && f.arguments[1] === 'boo';
    }
    return f(1, 'boo');
  },
  res: {
    ie7: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: null,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    o.__noSuchMethod__ = function () { executed = true; }
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  }
},
{
  name: '__defineGetter__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineGetter',
  exec: function () {
    return '__defineGetter__' in {};
  },
  res: {
    ie7: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
  }
},
{
  name: '__defineSetter__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineSetter',
  exec: function () {
    return '__defineSetter__' in {};
  },
  res: {
    ie7: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
  }
},
{
  name: '__lookupGetter__',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__',
  exec: function () {/*
    try {
      var obj = eval('{ get foo() { return "bar"; } }');
    }
    catch(e) {
      obj = {}; obj.__defineGetter__("foo", function(){ return "bar"; });
    }
    var func = obj.__lookupGetter__("foo");
    return typeof func === "function" && func() === "bar";
  */},
  res: {
    ie7: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
  },
  separator: 'after',
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'Array comprehensions (right-to-left)',
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: false,
    opera15: false,
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
    try {
      var it = Iterator({ foo: 1, bar: 2 });
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
          if (x > 0) return { foo: --x };
          else throw StopIteration;
        }
      };
      var total = 0;
      for (var item in { __iterator__ : function() { return iter; }}) {
        total += item.foo;
      }
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
        test(function () {
          try {
            var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
            var passed = g.next() === "foo";
            return passed && (g.send("bar") === "barbaz");
          }
          catch(e) {
            return false;
          }
        }());
        __script_executed["generators"] = true;
      }
  },{
      script: function () {
        if (!__script_executed["generators"]) {
          test(function () {
            try {
              var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
              var passed = g.next() === "foo";
              return passed && (g.send("bar") === "barbaz");
            }
            catch(e) {
              return false;
            }
          }());
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true,
    phantom: false
  },
},
{
  name: 'Generator comprehensions (JS 1.8)',
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'RegExp "x" flag',
  exec: function () {
    try {
      var re = RegExp('^ ( \\d+ ) \
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
    firefox28: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: true,
    opera15: false,
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
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
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
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true,
    phantom: true
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
    firefox4: true,
    firefox5: false,
    firefox7: false,
    firefox12: false,
    firefox28: false,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: true,
    opera15: false,
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
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    opera15: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false,
    phantom: true
  }
},
{
  name: 'String.prototype.trimRight',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
  exec: function () { return typeof String.prototype.trimRight === 'function' },
  res: {
    ie7: false,
    ie11: false,
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    opera15: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false,
    phantom: true
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    firefox28: true,
    //safari3: false,
    //safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    //webkit: false,
    //chrome7: false,
    //opera10_10: false,
    //opera10_50: false,
    //opera15: false,
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: false,
    phantom: false
  },
  separator: 'after'
},
{
  name: 'error "stack"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack',
  exec: function () {
    try {
      throw new Error;
    } catch (err) {
      return 'stack' in err;
    }
  },
  res: {
    ie7: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox7: true,
    firefox12: true,
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  }
},
{
  name: 'error "lineNumber"',
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber',
  exec: function () {
    return 'lineNumber' in new Error;
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    return 'columnNumber' in new Error;
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    return 'fileName' in new Error;
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
    firefox28: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    safari71_8: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
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
    return 'description' in new Error;
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false,
    phantom: false
  },
  separator: 'after'
}
];
