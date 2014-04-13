// exports browsers and tests

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false // always up-to-date version
  },
  ie10: {
    full: 'Internet Explorer',
    short: 'IE 10',
    obsolete: false // no EOL any time soon
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  firefox11: {
    full: 'Firefox',
    short: 'FF 11-12',
    obsolete: true
  },
  firefox13: {
    full: 'Firefox',
    short: 'FF 13',
    obsolete: true
  },
  firefox16: {
    full: 'Firefox',
    short: 'FF 16',
    obsolete: true
  },
  firefox17: {
    full: 'Firefox',
    short: 'FF 17',
    obsolete: true
  },
  firefox18: {
    full: 'Firefox',
    short: 'FF 18',
    obsolete: true
  },
  firefox23: {
    full: 'Firefox',
    short: 'FF 23',
    obsolete: true
  },
  firefox24: {
    full: 'Firefox',
    short: 'FF 24',
    obsolete: false // ESR (EOL at end of 2014)
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25',
    obsolete: false // current version
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27-28'
  },
  firefox29: {
    full: 'Firefox',
    short: 'FF 29'
  },
  firefox30: {
    full: 'Firefox',
    short: 'FF 30'
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  chrome: {
    full: 'Chrome',
    short: 'CH &lt;19',
    obsolete: true
  },
  chrome19dev: {
    full: 'Chrome',
    short: 'CH 19',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome21dev: {
    full: 'Chrome',
    short: 'CH 21-29',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  safari51: {
    full: 'Safari',
    short: 'SF 5.1',
    obsolete: true
  },
  safari6: {
    full: 'Safari',
    short: 'SF 6',
    obsolete: false // EOLs together with OS X 10.8
  },
  safari7: {
    full: 'Safari',
    short: 'SF 7',
    obsolete: false
  },
  webkit: {
    full: 'WebKit rev. 163695',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  opera: {
    full: 'Opera 12',
    short: 'OP 12',
    obsolete: false // still supported
  },
  opera15: {
    full: 'Opera 15.0',
    short: 'OP 15',
    obsolete: false // current version
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'KQ 4.9'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH'
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH'
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false // current version
  },
  nodeharmony: {
    full: 'Node 0.11.11 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: true,
    safari7: true,
    webkit: true,
    opera: true,
    opera15: true,
    konq49: true,
    rhino17: false,
    phantom: true,
    node: true,
    nodeharmony: true
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
        global.__let_script_executed = true;
      }
    },
    {
      script: function () {
        if (!global.__let_script_executed) {
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    konq49: false,
    opera: false,
    opera15: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'computed properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      var x = 'y';
      return eval("({ [x]: 1 })['y'] === 1");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Generator comprehensions',
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
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Iterators',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:iterators',
  exec: function () {
    try {
      return eval("(function(){ var it = Iterator({ key: 'v' }); for(var pair of it){return pair[0] === 'key' && pair[1] === 'v'}}())");
    } catch (e) {
      return false;
    }
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
        global.__yield_script_executed = true;
      }
    },
    {
      script: function () {
        if (!global.__yield_script_executed) {
          test((function () {
            try {
              eval('(function* () { yield 5; }())');
              return true;
            } catch (e) {
              return false;
            }
          }()));
          global.__yield_script_executed = true;
        }
      }
    }
  ],
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
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
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'RegExp "u" flag',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode',
  exec: function() {
    try {
      return eval('"𠮷".match(/./u)[0].length === 2');
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Map',
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
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Set',
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
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'WeakMap',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps',
  exec: function () {
    try {
      var weakMap = new WeakMap();
      var key = [1,2,3];
      weakMap.set(key, 123);
      return weakMap.has(key) && weakMap.get(key) === 123;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'WeakSet',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakset-objects',
  exec: function () {
    try {
      var set = new WeakSet(), obj = { };
      set.add(obj);
      return set.has(obj);
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Proxy',
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
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Structs (binary data storage)',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:binary_data',
  exec: function () {
    return typeof StructType !== 'undefined';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
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
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Destructuring',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      eval('var [a] = [5];');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Promise',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:promises',
  exec: function () {
    return typeof Promise !== 'undefined' &&
           typeof Promise.all === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.assign',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-19.1.2.1',
  exec: function () {
    return typeof Object.assign === 'function';
  },
  res: {
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptors === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.getPropertyDescriptor',
  exec: function () {
    return typeof Object.getPropertyDescriptor === 'function';
  },
  res: {
    tr: true,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.getPropertyNames',
  exec: function () {
    return typeof Object.getPropertyNames === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.is',
  exec: function () {
    return typeof Object.is === 'function';
  },
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: true,
    nodeharmony: true
  }
},
{
  name: 'Object.setPrototypeOf',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-19.1.2.19',
  exec: function () {
    return typeof Object.setPrototypeOf === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.observe (part of <b>ES7</b>)',
  exec: function () {
    return typeof Object.observe === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'String.fromCodePoint',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.fromCodePoint === 'function';
  },
  res: {
    tr: true,
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
    firefox27: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    firefox28: false,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.codePointAt',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.codePointAt === 'function';
  },
  res: {
    tr: true,
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
    firefox27: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    firefox28: false,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.repeat',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.repeat === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.startsWith',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.startsWith === 'function';
  },
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.endsWith',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.endsWith === 'function';
  },
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.contains',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:string_extras',
  exec: function () {
    return typeof String.prototype.contains === 'function';
  },
  res: {
    tr: true,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Symbol',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol-constructor',
  exec: function() {
    try {
      var object = {};
      var symbol = Symbol();
      var value = Math.random();
      object[symbol] = value;
      return object[symbol] === value &&
             Object.keys(object).length === 0 &&
             Object.getOwnPropertyNames(object).length === 0;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
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
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Array.from',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-22.1.2.1',
  exec: function () {
    return typeof Array.from === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Array.of',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-22.1.2.3',
  exec: function () {
    return typeof Array.of === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.find',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-22.1.3.8',
  exec: function () {
    return typeof Array.prototype.find === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.findIndex',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-22.1.3.9',
  exec: function () {
    return typeof Array.prototype.findIndex === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.fill',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-22.1.3.6',
  exec: function () {
    return typeof Array.prototype.fill === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Number.isFinite',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isfinite',
  exec: function () {
    return typeof Number.isFinite === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: true,
    nodeharmony: true
  }
},
{
  name: 'Number.isInteger',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isinteger',
  exec: function () {
    return typeof Number.isInteger === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Number.isNaN',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.isnan',
  exec: function () {
    return typeof Number.isNaN === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: true,
    nodeharmony: true
  }
},
{
  name: 'Number.toInteger',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger',
  exec: function () {
    return typeof Number.toInteger === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.clz32',
  exec: function () {
    return typeof Math.clz32 === 'function';
  },
  res: {
    tr: false,
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
    firefox27: false,
    firefox28: false,
    firefox29: false,
    firefox30: false,
    firefox31: false,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.imul',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.8.2.33',
  exec: function () {
    return typeof Math.imul === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: {
      val: true,
      note_id: 'chromu-imul',
      note_html: 'Available since Chrome 28'
    },
    chrome30: true,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: true,
    webkit: true,
    opera: false,
    opera15: true,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Math.sign',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.sign === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Math.log10',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log10 === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.log2',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log2 === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.log1p',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.log1p === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.expm1',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.expm1 === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.cosh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.cosh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.sinh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.sinh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.tanh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.tanh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.acosh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.acosh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.asinh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.asinh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.atanh',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.atanh === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.hypot',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.hypot === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: false,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.trunc',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.trunc === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Math.fround',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions',
  exec: function () {
    return typeof Math.fround === 'function';
  },
  res: {
    tr: false,
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
    firefox27: {
      val: true,
      note_id: 'fx-fround',
      note_html: 'Available since Firefox 26'
    },
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Math.cbrt',
  exec: function () {
    return typeof Math.cbrt === 'function';
  },
  res: {
    tr: false,
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
    firefox27: true,
    firefox28: true,
    firefox29: true,
    firefox30: true,
    firefox31: true,
    chrome: false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30: false,
    chrome33: false,
    chrome34: true,
    chrome35: true,
    safari51: false,
    safari6: false,
    safari7: false,
    webkit: true,
    opera: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
}
];
