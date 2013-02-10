// exports browsers and tests

exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7',
    short: 'IE 7'
  },
  ie8: {
    full: 'Inernet Explorer 8',
    short: 'IE 8'
  },
  ie9: {
    full: 'Inernet Explorer 9 RC',
    short: 'IE 9'
  },
  firefox3: {
    full: 'Firefox 3',
    short: 'FF 3'
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    short: 'FF 3.5, 3.6'
  },
  firefox4: {
    full: 'Firefox 4.0b12pre',
    short: 'FF 4'
  },
  firefox5: {
    full: 'Firefox 5',
    short: 'FF 5'
  },
  firefox6: {
    full: 'Firefox 6',
    short: 'FF 6'
  },
  firefox7: {
    full: 'Firefox 7, Firefox 8, Firefox 9, Firefox 10, Firefox 11',
    short: 'FF 7-11'
  },
  firefox12: {
    full: 'Firefox 12',
    short: 'FF 12'
  },
  safari3: {
    full: 'Safari 3.2',
    short: 'SF 3.2'
  },
  safari4: {
    full: 'Safari 4.0.5',
    short: 'SF 4'
  },
  safari5: {
    full: 'Safari 5',
    short: 'SF 5'
  },
  webkit: {
    full: 'Webkit r72487 (Nov 24, 2010)',
    short: 'WebKit'
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev)',
    short: 'CH 7-10'
  },
  opera10_10: {
    full: 'Opera 10.10',
    short: 'OP 10.10'
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156)',
    short: 'OP 10.50-11.10'
  },
  konq44: {
    full: 'Konqueror 4.4',
    short: 'Konq 4.4'
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9'
  },
  besen: {
    full: 'Bero\'s EcmaScript Engine (version 1.0.0.489)',
    short: 'BESEN',
    link: 'http://besen.sourceforge.net/'
  },
  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7'
  }
};

exports.tests = [
{
  name: '<a href="http://kangax.github.com/nfe/#function-statements">function statement</a>',
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/isGenerator">Function.prototype.isGenerator</a>',
  exec: function () {
    return typeof Function.prototype.isGenerator == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  },
  separator: 'after'
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/proto">__proto__</a>',
  exec: function () {
    return ({}).__proto__ === Object.prototype &&
      [].__proto__ === Array.prototype;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/prototype">__count__</a>',
  exec: function () {
    return typeof ({}).__count__ === 'number' &&
      ({ x: 1, y: 2 }).__count__ === 2;
    },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/Parent">__parent__</a>',
  exec: function () {
    return typeof ({}).__parent__ !== 'undefined';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/noSuchMethod">__noSuchMethod__</a>',
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineGetter">__defineGetter__</a>',
  exec: function () {
    return '__defineGetter__' in ({ });
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    konq44: true,
    konq49: true,
    besen: false,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineSetter">__defineSetter__</a>',
  exec: function () {
    return '__defineSetter__' in ({ });
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: true
  }
},
{
  name: '<a href="https://developer.mozilla.org/en/Sharp_variables_in_JavaScript">Sharp variables</a>',
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
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: false,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: false,
    chrome7: false,
    opera10_10: null,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: false,
    opera10_50: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
    konq44: true,
    konq49: true,
    besen: true,
    rhino: true
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: true,
    chrome7: true,
    opera10_10: true,
    opera10_50: true,
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
    webkit: false,
    chrome7: true,
    opera10_10: false,
    opera10_50: true,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
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
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  },
  separator: 'after'
},
{
  name: '<a href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies">Proxy</a>',
  exec: function () {
    return typeof Proxy !== 'undefined' &&
      typeof Proxy.create == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox5: true,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
},
{
  name: '<a href="http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps">WeakMap</a>',
  exec: function () {
    return typeof WeakMap !== 'undefined' &&
      typeof new WeakMap().get == 'function' &&
      typeof new WeakMap().set == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox5: false,
    firefox6: true,
    firefox7: true,
    firefox12: true,
    safari3: false,
    safari4: false,
    safari5: false,
    webkit: false,
    chrome7: false,
    opera10_10: false,
    opera10_50: false,
    konq44: false,
    konq49: false,
    besen: false,
    rhino: false
  }
}
];
