// exports browsers and tests

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  ie10: {
    full: 'Internet Explorer',
    short: 'IE 10'
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11'
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
  firefox23: {
    full: 'Firefox',
    short: 'FF 23'
  },
  firefox24: {
    full: 'Firefox',
    short: 'FF 24'
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25'
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
    short: 'CH 21-29',
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
    full: 'Opera 12',
    short: 'OP 12'
  },
  opera15: {
    full: 'Opera 15.0',
    short: 'OP 15'
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9'
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
  name: 'arrow functions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax',
  exec: function() {
    try {
      eval('var a = () => 5;');
    } catch (e) {
      return false;
    }
    return true;
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'class',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes',
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'let',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:let',
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
    ie11: true,
    firefox11: true,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    konq49: false,
    opera: false,
    opera15: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'const',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:const',
  exec: function () {
    try {
      return eval('(function () { const foobarbaz = 12; return typeof foobarbaz === "number"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: true,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: true,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: true,
    webkit: true,
    opera: true,
    opera15: true,
    konq49: true,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'default function params',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values',
  exec: function () {
    try {
      return eval('(function (a = 5) { return a === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'rest parameters',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters',
  exec: function () {
    try {
      return eval('(function (...args) { return typeof args !== "undefined"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'spread call (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      return eval('Math.max(...[1, 2, 3]) === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'spread array (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      return eval('[...[1, 2, 3]][2] === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Modules',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:modules',
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'For..of loops',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:iterators',
  exec: function () {
    try {
      return eval('(function () { var arr = [5]; for (var item of arr) return item === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Array comprehensions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
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
    ie11: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Generator expressions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:generator_expressions',
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
    ie11: false,
    firefox11: false,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Iterators',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:iterators',
  exec: function () {
    var obj = {
      iterator: function() {
        return {
          next: function() { throw StopIteration }
        }
      }
    };
    try {
      eval('for (var a of obj) {}');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Generators (yield)',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:generators',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function () {
          try {
            eval('(function* () { yield 5; }())');
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Template Strings',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:quasis',
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'RegExp "y" flag',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:regexp_y_flag',
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
    ie11: false,
    firefox11: true,
    firefox13: true,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Maps',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets',
  exec: function () {
    try {
      var map = new Map();
      map.set('key', 123);
      return map.has("key") && map.get('key') === 123 && map.size === 1;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: true,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: true
  }
},
{
  name: 'Sets',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets',
  exec: function () {
    try {
      var set = new Set();
      set.add(123);
      return set.has(123) && set.size === 1;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    ie10: false,
    ie11: true,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'WeakMaps',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps',
  exec: function () {
    return typeof WeakMap !== 'undefined' &&
      typeof WeakMap.prototype.get === 'function' &&
      typeof WeakMap.prototype.set === 'function' &&
      typeof WeakMap.prototype.clear === 'function' &&
      typeof WeakMap.prototype.has === 'function';
  },
  res: {
    ie10: false,
    ie11: true,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Proxies',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies',
  exec: function () {
    try {
      return typeof Proxy !== "undefined" &&
           new Proxy({}, { get: function () { return 5; } }).foo === 5;
    }
    catch(err) { }
    return false;
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Structs (binary data storage)',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:binary_data',
  exec: function () {
    return typeof StructType !== 'undefined';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Block-level function declaration',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:block_functions',
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
    ie11: true,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: true
  }
},
{
  name: 'Object.assign',
  link: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.2.3.17",
  exec: function () {
    return typeof Object.assign === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Object.mixin',
  link: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.2.3.18",
  exec: function () {
    return typeof Object.mixin === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptors === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Object.setPrototypeOf',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.2.3.19',
  exec: function () {
    return typeof Object.setPrototypeOf === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.fromCodePoint',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.fromCodePoint === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.codePointAt',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.codePointAt === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.repeat',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.repeat === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.startsWith',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.startsWith === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.endsWith',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.endsWith === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.contains',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.contains === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'String.prototype.toArray',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.toArray === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
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
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Number.isFinite',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isfinite',
  exec: function () {
    return typeof Number.isFinite === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Number.isInteger',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isinteger',
  exec: function () {
    return typeof Number.isInteger === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Number.isNaN',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isnan',
  exec: function () {
    return typeof Number.isNaN === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    node08: true,
    node08harmony: true
  }
},
{
  name: 'Number.toInteger',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger',
  exec: function () {
    return typeof Number.toInteger === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: true,
    firefox17: true,
    firefox18: true,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.imul',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.8.2.33',
  exec: function () {
    return typeof Math.imul === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: true,
    firefox24: true,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: {
      val: true,
      note_id: 'chromu-imul',
      note_html: 'Available since Chrome 28'
    },
    safari51: false,
    safari6: false,
    webkit: true,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.sign',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.sign === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log10',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log10 === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log2',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log2 === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.log1p',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log1p === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.expm1',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.expm1 === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.cosh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.cosh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.sinh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.sinh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.tanh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.tanh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.acosh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.acosh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.asinh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.asinh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.atanh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.atanh === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.hypot',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.hypot === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
},
{
  name: 'Math.trunc',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.trunc === 'function';
  },
  res: {
    ie10: false,
    ie11: false,
    firefox11: false,
    firefox13: false,
    firefox16: false,
    firefox17: false,
    firefox18: false,
    firefox23: false,
    firefox24: false,
    firefox25: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    safari51: false,
    safari6: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    node08: false,
    node08harmony: false
  }
}
];
