// exports browsers and tests

exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7',
    short: 'IE 7',
    obsolete: true
  },
  ie8: {
    full: 'Inernet Explorer 8',
    short: 'IE 8',
    obsolete: true
  },
  ie9: {
    full: 'Inernet Explorer 9',
    short: 'IE 9',
    obsolete: false
  },
  ie10: {
    full: 'Internet Explorer 10',
    short: 'IE 10',
    obsolete: false
  },
  ie11: {
    full: 'Internet Explorer 11',
    short: 'IE11',
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
    full: 'Firefox 5',
    short: 'FF 5',
    obsolete: true
  },
  firefox6: {
    full: 'Firefox 6',
    short: 'FF 6',
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
    full: 'Safari 7',
    short: 'SF 7',
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
    obsolete: false
  },
  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7',
    obsolete: false
  }
};

exports.tests = [
{
  name: 'function statement',
  link: 'http://kangax.github.com/nfe/#function-statements',
  exec: function () {
    try {
      eval('if (1) { function f(){ } } else { function f(){ } }');
      return typeof f === 'function';
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: {
      val: true,
      note_id: 'function-statements-strict-mode-firefox',
      note_html: 'From Firefox 4 on, function statements in strict mode functions are only accepted at top level or immediately within another function.'
    },
    firefox5: {
      val: true,
      note_id: 'function-statements-strict-mode-firefox'
    },
    firefox6: {
      val: true,
      note_id: 'function-statements-strict-mode-firefox'
    },
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: {
      val: true,
      note_id: 'besen-extensions',
      note_html: "With 'Javascript-specific extensions' option enabled"
    },
    rhino: true
  },
  separator: 'after'
},
{
  name: 'uneval',
  exec: function () {
    return typeof uneval == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: '"toSource" method',
  exec: function () {
    return 'toSource' in (function (){}) && 'toSource' in ({});
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'function "name" property',
  exec: function () {
    return (function foo(){}).name == 'foo';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'function "caller" property',
  exec: function () {
    return 'caller' in (function(){});
  },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: false
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
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
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: null,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  },
  separator: 'after'
},
{
  name: '__proto__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/proto',
  exec: function () {
    return ({}).__proto__ === Object.prototype &&
      [].__proto__ === Array.prototype;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: '__defineGetter__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineGetter',
  exec: function () {
    return '__defineGetter__' in ({ });
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
  }
},
{
  name: '__defineSetter__',
  link: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineSetter',
  exec: function () {
    return '__defineSetter__' in ({ });
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'const',
  exec: function () {
    try {
      eval('const foobarbaz = 12');
      return typeof foobarbaz === 'number';
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: 'let',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function(){
          try {
            return eval('(function(){ let foobarbaz2 = 123; return foobarbaz2 == 123; })()');
          } catch (e) {
            return false;
          }
        })());
        __script_executed = true
      }
    },
    {
      script: function () {
        if (!__script_executed) {
          test(false);
          __script_executed = false;
        }
      }
    }
  ],
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: 'Array generics',
  exec: function () {
    return typeof Array.slice === 'function' && Array.slice('123').length === 3;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: 'Expression closures',
  exec: function () {
    try {
      return eval('(function(x)x)(1)') === 1;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: false
  }
},
{
  name: 'e4x',
  exec: function () {
    try {
      return eval('typeof <foo/> === "xml"');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: 'Sharp variables',
  link: 'https://developer.mozilla.org/en/Sharp_variables_in_JavaScript',
  exec: function () {
    try {
      return eval('(function () { var arr = #1=[1, #1#, 3]; return arr[1] === arr; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: false,
    safari3: null,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: false,
    opera15: false,
    konq44: null,
    konq49: false,
    besen: null,
    rhino: false
  },
  separator: 'after'
},
{
  name: 'RegExp "y" flag',
  exec: function () {
    try {
      var re = new RegExp('\\w');
      var re2 = new RegExp('\\w', 'y');
      re.exec('xy');
      re2.exec('xy');
      return (re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
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
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: true,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
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
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
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
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
  }
},
{
  name: 'Callable RegExp',
  exec: function () {
    try {
      return eval('/\\w/("x")[0] === "x"');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: false,
    webkit: false,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: 'RegExp named groups',
  exec: function () {
    try {
      return eval('/(?P<name>a)(?P=name)/.test("aa")');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: null,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: true,
    opera15: false,
    konq44: null,
    konq49: true,
    besen: null,
    rhino: false
  },
  separator: 'after'
},
{
  name: 'String.prototype.substr',
  exec: function () { return typeof String.prototype.substr === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.trimLeft',
  exec: function () { return typeof String.prototype.trimLeft === 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    opera15: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false
  }
},
{
  name: 'String.prototype.trimRight',
  exec: function () { return typeof String.prototype.trimRight === 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
    opera15: true,
    konq44: false,
    konq49: true,
    besen: false,
    rhino: false
  }
},
{
  name: 'String.prototype.anchor',
  exec: function () { return typeof String.prototype.anchor === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.big',
  exec: function () { return typeof String.prototype.big === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.blink',
  exec: function () { return typeof String.prototype.blink === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.bold',
  exec: function () { return typeof String.prototype.bold === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.link',
  exec: function () { return typeof String.prototype.link === 'function' },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.quote',
  exec: function () { return typeof String.prototype.quote === 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: null,
    konq49: null,
    besen: null,
    rhino: false
  },
  separator: 'after'
},
{
  name: 'Object.prototype.watch',
  exec: function () { return typeof Object.prototype.watch == 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: 'Object.prototype.unwatch',
  exec: function () { return typeof Object.prototype.unwatch == 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: 'Object.prototype.eval',
  exec: function () { return typeof Object.prototype.eval == 'function' },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: true,
    rhino: false
  },
  separator: 'after'
},
{
  name: 'Octal literals',
  exec: function () {
    try {
      return eval('070 === 56');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: true,
    safari4: true,
    safari5: true,
    safari7: true,
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    opera15: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'error "stack"',
  exec: function () {
    return 'stack' in new Error;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    opera15: true,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: 'error "lineNumber"',
  exec: function () {
    return 'lineNumber' in new Error;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: 'error "fileName"',
  exec: function () {
    return 'fileName' in new Error;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: false,
    ie11: false,
    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: 'error "description"',
  exec: function () {
    return 'description' in new Error;
  },
  res: {
    ie7: true,
    ie8: true,
    ie9: true,
    ie10: true,
    ie11: true,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox6: false,
    firefox7: false,
    firefox12: false,
    safari3: false,
    safari4: false,
    safari5: false,
    safari7: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    opera15: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  },
  separator: 'after'
}
];
