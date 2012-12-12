// exports browsers and tests

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  ie10: {
    full: 'Internet Explorer',
    short: 'IE 10'
  },
  firefox11: {
    full: 'Firefox',
    short: 'FF 11, 12'
  },
  firefox13: {
    full: 'Firefox',
    short: 'FF 13'
  },
  firefox16: {
    full: 'Firefox',
    short: 'FF 16'
  },
  firefox17: {
    full: 'Firefox',
    short: 'FF 17'
  },
  firefox18: {
    full: 'Firefox',
    short: 'FF 18'
  },
  chrome: {
    full: 'Chrome',
    short: 'CH &lt;19'
  },
  chrome19dev: {
    full: 'Chrome',
    short: 'CH 19',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome21dev: {
    full: 'Chrome',
    short: 'CH 21-24',
    note_id: 'experimental-flag'
  },
  safari51: {
    full: 'Safari',
    short: 'SF 5.1'
  },
  safari6: {
    full: 'Safari',
    short: 'SF 6'
  },
  webkit: {
    full: 'WebKit'
  },
  opera: {
    full: 'Opera 12'
  },
  rhino17: {
    full: 'Rhino 1.7'
  },
  node08: {
    full: 'Node 0.8'
  },
  node08harmony: {
    full: 'Node harmony',
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  }
};

exports.tests = [
{
  name: 'class',
  exec: function () {
    try {
      return eval('class C{ constructor() { this.own = true; } } (new C()).own;');
      /*
      class C{
        constructor() {
          this.own = true;
        }
      }
      (new C()).own; // true
      */
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'let',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function () {
          try {
            return eval('(function () { let foobarbaz2 = 123; return foobarbaz2 == 123; }())');
          } catch (e) {
            return false;
          }
        }()));
        __let_script_executed = true;
      }
    },
    {
      script: function () {
        if (!__let_script_executed) {
          test((function () {
            try {
              return eval('(function () { "use strict"; __let_script_executed = true; let foobarbaz2 = 123; return foobarbaz2 == 123; }())');
            } catch (e) {
              return false;
            }
          }()));
        }
      }
    }
  ],
  res: {
    ie10: false,
    firefox11: true,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'const',
  exec: function () {
    try {
      return eval('(function () { const foobarbaz = 12; return typeof foobarbaz === "number"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: true,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: true,
    webkit: true,
    opera: true,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'default function params',
  exec: function () {
    try {
      return eval('(function (a = 5) { return a === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'rest parameters',
  exec: function () {
    try {
      return eval('(function (...args) { return typeof args !== "undefined"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'spread call (...) operator',
  exec: function () {
    try {
      return eval('Math.max(...[1, 2, 3]) === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'spread array (...) operator',
  exec: function () {
    try {
      return eval('[...[1, 2, 3]][2] === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: '<del title="Temporarily disabled due to Chrome crash">Modules</del>',
  exec: function () {
    try {
      // this line crashes Chrome 21-24
      // return eval('module foo { }');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'For..of loops',
  exec: function () {
    try {
      return eval('(function () { var arr = [5]; for (var item of arr) return item === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Array comprehensions',
  exec: function () {
    try {
      eval('[a * a for (a of [1, 2, 3])][0] === 1');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Generator expressions',
  exec: function () {
    try {
      eval('(a for (a of [1, 2, 3]))');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Iterators',
  exec: function () {
    try {
      eval('for (var a of {b: 5}) {}');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Generators (yield)',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function () {
          try {
            eval('(function () { yield 5; }())');
            return true;
          } catch (e) {
            return false;
          }
        }()));
        __yield_script_executed = true;
      }
    },
    {
      script: function () {
        if (!__yield_script_executed) {
          test(false);
          __yield_script_executed = false;
        }
      }
    }
  ],
  res: {
    ie10: false,
    firefox11: true,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Template Strings',
  exec: function () {
    try {
      eval('var u = function () { return true }; u`literal`');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
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
    ie10: false,
    firefox11: true,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Maps',
  exec: function () {
    return typeof Map !== 'undefined' &&
      typeof Map.prototype.get === 'function' &&
      typeof Map.prototype.set === 'function' &&
      typeof Map.prototype.clear === 'function' &&
      typeof Map.prototype.has === 'function' &&
      typeof Map.prototype.forEach === 'function' &&
      typeof Map.prototype.size === 'number' &&
      Map([["key", "val"]]).has("key");
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: {
      val: false,
      note_id: 'firefox-map',
      note_html: 'Firefox 13-18 fails the test because of lacking <code>Map.prototype.forEach</code> and because <code>Map.prototype.size</code> is a function instead of a number'
    },
    firefox16: {
      val: false,
      note_id: 'firefox-map'
    },
    firefox17: {
      val: false,
      note_id: 'firefox-map'
    },
    firefox18: {
      val: false,
      note_id: 'firefox-map'
    },
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: true
  }
},
{
  name: 'Sets',
  exec: function () {
    return typeof Set !== 'undefined' &&
      typeof Set.prototype.add === 'function' &&
      typeof Set.prototype.values === 'function' &&
      typeof Set.prototype.clear === 'function' &&
      typeof Set.prototype.has === 'function' &&
      typeof Set.prototype.forEach === 'function' &&
      typeof Set.prototype.size === 'number' &&
      Set([1]).has(1);
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'WeakMaps',
  exec: function () {
    return typeof WeakMap !== 'undefined' &&
      typeof WeakMap.prototype.get === 'function' &&
      typeof WeakMap.prototype.set === 'function' &&
      typeof WeakMap.prototype.clear === 'function' &&
      typeof WeakMap.prototype.has === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Proxies',
  exec: function () {
    return typeof Proxy !== 'undefined' &&
      typeof Proxy.create == 'function' &&
      typeof Proxy.createFunction == 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: true
  }
},
{
  name: 'Structs (binary data storage)',
  exec: function () {
    return typeof StructType !== 'undefined';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Block-level function declaration',
  exec: function () {
    'use strict';
    try {
      return eval('{function f(){}} typeof f == "undefined"');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: true
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptors === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Object.getPropertyDescriptor',
  exec: function () {
    return typeof Object.getPropertyDescriptor === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Object.getPropertyNames',
  exec: function () {
    return typeof Object.getPropertyNames === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Object.is',
  exec: function () {
    return typeof Object.is === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Object.isnt',
  exec: function () {
    return typeof Object.isnt === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.fromCodePoint',
  exec: function () {
    return typeof String.fromCodePoint === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.codePointAt',
  exec: function () {
    return typeof String.prototype.codePointAt === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.repeat',
  exec: function () {
    return typeof String.prototype.repeat === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.startsWith',
  exec: function () {
    return typeof String.prototype.startsWith === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.endsWith',
  exec: function () {
    return typeof String.prototype.endsWith === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.contains',
  exec: function () {
    return typeof String.prototype.contains === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.toArray',
  exec: function () {
    return typeof String.prototype.toArray === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Unicode code point escapes',
  exec: function () {
    try {
      return eval("'\\u{1d306}' == '\\ud834\\udf06'");
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Array.from',
  exec: function () {
    return typeof Array.from === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Array.of',
  exec: function () {
    return typeof Array.of === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Number.isFinite',
  exec: function () {
    return typeof Number.isFinite === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Number.isInteger',
  exec: function () {
    return typeof Number.isInteger === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Number.isNaN',
  exec: function () {
    return typeof Number.isNaN === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Number.toInteger',
  exec: function () {
    return typeof Number.toInteger === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.sign',
  exec: function () {
    return typeof Math.sign === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log10',
  exec: function () {
    return typeof Math.log10 === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log2',
  exec: function () {
    return typeof Math.log2 === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log1p',
  exec: function () {
    return typeof Math.log1p === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.expm1',
  exec: function () {
    return typeof Math.expm1 === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.cosh',
  exec: function () {
    return typeof Math.cosh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.sinh',
  exec: function () {
    return typeof Math.sinh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.tanh',
  exec: function () {
    return typeof Math.tanh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.acosh',
  exec: function () {
    return typeof Math.acosh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.asinh',
  exec: function () {
    return typeof Math.asinh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.atanh',
  exec: function () {
    return typeof Math.atanh === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.hypot',
  exec: function () {
    return typeof Math.hypot === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.trunc',
  exec: function () {
    return typeof Math.trunc === 'function';
  },
  res: {
    ie10: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
}
];