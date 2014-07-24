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
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
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
    obsolete: true
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27-28',
    obsolete: true
  },
  firefox29: {
    full: 'Firefox',
    short: 'FF 29',
    obsolete: true
  },
  firefox30: {
    full: 'Firefox',
    short: 'FF 30',
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  firefox33: {
    full: 'Firefox',
    short: 'FF 33'
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
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
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
    full: 'WebKit r170830',
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
  name: 'proper tail calls (tail call optimisation)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tail-position-calls',
  exec: function() {
    "use strict";
    try {
      return (function f(n){ if (n <= 0) return true; return f(n - 1);}(1e6));
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'const',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:const',
  exec: function () {
    try {
      return !!Function(
         'const foo = 123;'
        +'var passed = (foo === 123);'
        
         // bar is not hoisted outside of its block
        +'{ const bar = 456; }'
        +'passed &= (function(){ try { bar; } catch(e) { return true; }}());'

         // qux is not defined until its const statement is executed,
         // and accessing it prior to that will result in a ReferenceError.
        +'passed &= (function(){ try { qux; } catch(e) { return true; }}());'
        +'const qux = 789;'
        
         // uninitialized const is a syntax error (13.2.1.1)
        +'passed &= (function() {'
        +'  try { Function("const a;")();} catch(e) { return true; }'
        +'}());'
        
         // duplicate consts are syntax errors (13.2.1.1)
        +'passed &= (function() {'
        +'  try { Function("const a = 1; const a = 2;")();} catch(e) { return true; }'
        +'}());'

         // redefining a const is a syntax error (12.14.1)
        +'passed &= (function() {'
        +'  try { Function("const a = 1; a = 2;")(); } catch(e) { return true; }'
        +'}());'
        
        +'return passed;'
      )();
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'let',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:let',
  exec: function () {
    try {
      return !!Function(
         'let foo = 123;'
        +'let passed = (foo === 123);'
        
         // bar is not hoisted outside of its block
        +'{ let bar = 456; }'
        +'passed &= (function(){ try { bar; } catch(e) { return true; }}());'

         // baz is not hoisted outside of the for-loop
        +'for(let baz = 0; false;) {}'
        +'passed &= (function(){ try { baz; } catch(e) { return true; }}());'

         // qux is not defined until its let statement is executed,
         // and accessing it prior to that will result in a ReferenceError.
        +'passed &= (function(){ try { qux; } catch(e) { return true; }}());'
        +'let qux = 789;'
        
         // duplicate lets are syntax errors (13.2.1.1)
        +'passed &= (function() {'
        +'  try { Function("let a; let a;")();} catch(e) { return true; }'
        +'}());'
        
         // for-loop iterations create new bindings (13.6.3.3)
        +'let scopes = [];'
        +'for(let i = 0; i <= 2; i++) {'
        +'  scopes.push(function(){ return i; });'
        +'}'
        +'passed &= (scopes[0]() === 0 && scopes[1]() === 1 && scopes[2]() === 2);'
        
        +'scopes = [];'
        +'for(let i in { a:1, b:1, c:1 }) {'
        +'  scopes.push(function(){ return i; });'
        +'}'
        +'passed &= (scopes[0]() === "a" && scopes[1]() === "b" && scopes[2]() === "c");'
        
        +'return passed;'
      )();
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    konq49:      false,
    opera:       false,
    opera15:     false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'spread call (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      function one() { return arguments[0]; }
      function two() { return arguments[1]; }
      var passed;
      eval(
         // Array spreading
         'passed  = two(...[1, 2, 3]) === 2;'
        +'passed  = one(...[]) === undefined;'
         
         // String spreading
        +'passed &= two(..."graults") === "r";'
        +'passed  = one(..."") === undefined;'
         
         // Other primitives, and objects with no valid iterator,
         // should throw a TypeError when attempting to spread.
        +'passed &= eval("try { one(...{0:1}); false; } catch(e) { true; }");'
        +'passed &= eval("try { one(    ...1); false; } catch(e) { true; }");'
      );
      return passed;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'spread array (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      var passed;
      eval(
         // Array spreading
         'var a = [...[1, 2, 3]];'
        +'passed  = a instanceof Array && a[1] === 2;'
        +'passed &= [...[]].length === 0;'
         
         // String spreading
        +'var b = [..."graults"];'
        +'passed &= b instanceof Array && b[1] === "r";'
        +'passed &= [...""].length === 0;'
        
         // Other primitives, and objects with no valid iterator,
         // should throw a TypeError when attempting to spread.
        +'passed &= eval("try { [...{0:1}]; false; } catch(e) { true; }");'
        +'passed &= eval("try { [    ...1]; false; } catch(e) { true; }");'
      );
      return passed;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'class',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes',
  exec: function () {
    try {
      return eval(
         'class C extends Array {'
        +'  constructor() { this.b = true; }'
        +'  a(){}'
        +'  static d(){}'
        +'}'
        +'C.d && new C().a && new C().b && new C() instanceof Array');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'shorthand properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      return eval("var a = 7, b = 8, c = {a,b}; c.a === 7 && c.b === 8");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'shorthand methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      return eval("({ y() { return 2; } }).y() === 2");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: '__proto__ in object literals',
  note_id: 'proto-in-object-literals',
  note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-__proto__-property-names-in-object-initializers',
  exec: function() {
    var passed = { __proto__ : [] } instanceof Array;
    // If computed properties are supported, the following
    // check must also be passed.
    var a = "__proto__";
    try {
      return eval("passed && !({ [a] : [] } instanceof Array)");
    }
    catch(e) {
      return passed;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    opera15:     true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'modules',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:modules',
  exec: function () {
    try {
      return eval('export var foo = 1;');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array comprehensions',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-comprehension',
  exec: function () {
    try {
      eval('[for (a of [1, 2, 3]) a * a][0] === 1');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Generator comprehensions',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-comprehensions',
  exec: function () {
    try {
      eval('(for (a of [1, 2, 3]) a * a)');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Map',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects',
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Set',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects',
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
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'WeakMap',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects',
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
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Reflect',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection',
  exec: function () {
    var i, names =
      ["apply","construct","defineProperty","deleteProperty","getOwnPropertyDescriptor",
      "getPrototypeOf","has","isExtensible","set","setPrototypeOf"];

    if (typeof Reflect !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect)) {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Reflect.Realm',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-realm-objects',
  exec: function () {
    var i, names =
      ["eval", "global", "intrinsics", "stdlib", "directEval",
      "indirectEval", "initGlobal", "nonEval"];

    if (typeof Reflect !== "object" || typeof Reflect.Realm !== "function"
        || typeof Reflect.Realm.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Realm.prototype)) {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Reflect.Loader',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader-objects',
  exec: function () {
    var i, names =
      ["define", "delete", "entries", "get", "global", "has", "import",
      "keys", "load", "module", "newModule", "realm", "set", "values",
      "normalize", "locate", "fetch", "translate", "instantiate"];

    if (typeof Reflect !== "object" || typeof Reflect.Loader !== "function"
        || typeof Reflect.Loader.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Loader.prototype)) {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
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
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Destructuring',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
        // Array destructuring
         'var [a, , [b], g] = [5, null, [6]];'
        // Object destructuring
        +'var {c, x:d, h} = {c:7, x:8};'
        // Combined destructuring
        +'var [e, {x:f, i}] = [9, {x:10}];'
        +'a === 5 && b === 6 && c === 7 && d === 8 && e === 9 && f === 10 &&'
        +'g === undefined && h === undefined && i === undefined');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit: {
      val: true,
      note_id: 'fx-destructuring',
      note_html: 'As of '+exports.browsers.webkit.full+', WebKit fails to support multiple destructurings in a single <code>var</code> or <code>let</code> statement - for example, <code>var [a,b] = [5,6], {c,d} = {c:7,d:8};</code>'
    },
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring parameters',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         '(function({a, x:b}, [c, d]) {'
        +'  return a === 1 && b === 2 && c === 3 && d === 4;'
        +'}({a:1, x:2},[3, 4]))'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring defaults',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         'var {a = 1, b = 1, c = 3} = {b:2, c:undefined};'
        +'a === 1 && b === 2 && c === 3'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring rest',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         'var [a, ...b] = [3, 4, 5];'
        +'var [c, ...d] = [6];'
        +'a === 3 && b instanceof Array && (b + "") === "4,5" && '
        +'c === 6 && d instanceof Array && d.length === 0'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Promise',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects',
  exec: function () {
    return typeof Promise !== 'undefined' &&
           typeof Promise.all === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Object.assign',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign',
  exec: function () {
    return typeof Object.assign === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Object.is',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is',
  exec: function () {
    return typeof Object.is === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     true,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Object.getOwnPropertySymbols',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.getownpropertysymbols',
  exec: function () {
    return typeof Object.getOwnPropertySymbols === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Object.setPrototypeOf',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.setprototypeof',
  exec: function () {
    return typeof Object.setPrototypeOf === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Object.prototype.__proto__',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.__proto__',
  exec: function () {
    var a = {},
        desc = Object.getOwnPropertyDescriptor
            && Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
    return !!(desc
        && "get" in desc
        && "set" in desc
        && desc.configurable
        && !desc.enumerable
        && Object.create(a).__proto__ === a);
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      true,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    opera15:     true,
    konq49:      false,
    rhino17:     true,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Function.prototype.toMethod',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function.prototype.tomethod',
  exec: function f() {
    return typeof f.toMethod === "function";
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.raw',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.raw',
  exec: function () {
    return typeof String.raw === 'function';
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.fromCodePoint',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.fromcodepoint',
  exec: function () {
    return typeof String.fromCodePoint === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.codePointAt',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.codepointat',
  exec: function () {
    return typeof String.prototype.codePointAt === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.repeat',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat',
  exec: function () {
    return typeof String.prototype.repeat === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.startsWith',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith',
  exec: function () {
    return typeof String.prototype.startsWith === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.endsWith',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith',
  exec: function () {
    return typeof String.prototype.endsWith === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.contains',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains',
  exec: function () {
    return typeof String.prototype.contains === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype HTML methods',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.anchor',
  exec: function () {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (typeof String.prototype[names[i]] !== 'function') {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        true,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    opera15:     true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Unicode code point escapes',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals',
  exec: function () {
    try {
      return eval("'\\u{1d306}' == '\\ud834\\udf06'");
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
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
      return typeof symbol === "symbol" &&
             object[symbol] === value &&
             Object.keys(object).length === 0 &&
             Object.getOwnPropertyNames(object).length === 0;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Global symbol registry',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.for',
  exec: function() {
    try {
      var symbol = Symbol('foo');
      return Symbol.for('foo') === symbol &&
             Symbol.keyFor(symbol) === 'foo';
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.create',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.create === "symbol") {
      var a = 2, b = function(){};
      b[Symbol.create] = function() { a = 4; return {};};
      new b();
      return a === 4;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.hasInstance',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.hasInstance === "symbol") {
      var a = 2, b = function(){};
      b[Symbol.hasInstance] = function() { a = 4; return false; };
      ({}) instanceof b;
      return a === 4;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.isConcatSpreadable',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.isConcatSpreadable === "symbol") {
      var a = [], b = [];
      b[Symbol.isConcatSpreadable] = false;
      a = a.concat(b);
      return a[0] === b;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.isRegExp',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    return Symbol && typeof Symbol.isRegExp === "symbol" && RegExp.prototype[Symbol.isRegExp] === true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.iterator',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    try {
      var a = 1, b = {};
      b[Symbol.iterator] = function() {
        return {
          next: function() {
            return { value: "foo", done: true };
          }
        };
      };
      return Function("for (var c of b) { return c === 'foo'; } return false;")();
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.toPrimitive',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.toPrimitive === "symbol") {
      var a = {};
      a[Symbol.toPrimitive] = function() { return 7; };
      return a == 7;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.toStringTag',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.toStringTag === "symbol") {
      var a = {};
      a[Symbol.toStringTag] = "foo";
      return (a + "") === "[object foo]";
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.unscopables',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (Symbol && typeof Symbol.unscopables === "symbol") {
      var a = { foo: 1, bar: 2 };
      a[Symbol.unscopables] = ["bar"];
      with (a) {
        return foo === 1 && typeof bar === "undefined";
      }
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.match',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.match',
  exec: function () {
    return typeof RegExp.prototype.match === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.replace',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.replace',
  exec: function () {
    return typeof RegExp.prototype.replace === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.search',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search',
  exec: function () {
    return typeof RegExp.prototype.search === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.split',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.split',
  exec: function () {
    return typeof RegExp.prototype.split === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.compile',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.compile',
  exec: function () {
    return typeof RegExp.prototype.compile === 'function';
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        true,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    opera15:     true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Array.from',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from',
  exec: function () {
    return typeof Array.from === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.of',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of',
  exec: function () {
    return typeof Array.of === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.copyWithin',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.copywithin',
  exec: function () {
    return typeof Array.prototype.copyWithin === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.find',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.find',
  exec: function () {
    return typeof Array.prototype.find === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.findIndex',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.findindex',
  exec: function () {
    return typeof Array.prototype.findIndex === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.fill',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.fill',
  exec: function () {
    return typeof Array.prototype.fill === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.keys',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.keys',
  exec: function () {
    return typeof Array.prototype.keys === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.values',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.values',
  exec: function () {
    return typeof Array.prototype.values === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   {
      val: false,
      note_id: 'fx-array-prototype-values',
      note_html: 'Available from Firefox 17 up to 27 as the non-standard <code>Array.prototype.iterator</code>'
    },
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   {
      val: false,
      note_id: 'fx-array-prototype-values-2',
      note_html: 'Available since Firefox 27 as the non-standard <code>Array.prototype["@@iterator"]</code>'
    },
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.entries',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.entries',
  exec: function () {
    return typeof Array.prototype.entries === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype[Symbol.unscopables]',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype-@@unscopables',
  exec: function () {
    return Symbol && typeof Symbol.unscopables === "symbol"
      && Array.prototype[Symbol.unscopables] instanceof Array
      && (Array.prototype[Symbol.unscopables] + "")
        .indexOf("find,findIndex,fill,copyWithin,entries,keys,values") >-1;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.isFinite',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isfinite-number',
  exec: function () {
    return typeof Number.isFinite === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     true,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Number.isInteger',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger',
  exec: function () {
    return typeof Number.isInteger === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.isSafeInteger',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger',
  exec: function () {
    return typeof Number.isSafeInteger === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.isNaN',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan',
  exec: function () {
    return typeof Number.isNaN === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     true,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Number.EPSILON',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.epsilon',
  exec: function () {
    return typeof Number.EPSILON === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.MIN_SAFE_INTEGER',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.min_safe_integer',
  exec: function () {
    return typeof Number.MIN_SAFE_INTEGER === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.MAX_SAFE_INTEGER',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer',
  exec: function () {
    return typeof Number.MAX_SAFE_INTEGER === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.clz32',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.clz32',
  exec: function () {
    return typeof Math.clz32 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.imul',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.imul',
  exec: function () {
    return typeof Math.imul === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: {
      val: true,
      note_id: 'chromu-imul',
      note_html: 'Available since Chrome 28'
    },
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     true,
    webkit:      true,
    opera:       false,
    opera15:     true,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.sign',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sign',
  exec: function () {
    return typeof Math.sign === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.log10',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log10',
  exec: function () {
    return typeof Math.log10 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.log2',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log2',
  exec: function () {
    return typeof Math.log2 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.log1p',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log1p',
  exec: function () {
    return typeof Math.log1p === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.expm1',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.expm1',
  exec: function () {
    return typeof Math.expm1 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.cosh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cosh',
  exec: function () {
    return typeof Math.cosh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.sinh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sinh',
  exec: function () {
    return typeof Math.sinh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.tanh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.atanh',
  exec: function () {
    return typeof Math.tanh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.acosh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.acosh',
  exec: function () {
    return typeof Math.acosh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.asinh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.asinh',
  exec: function () {
    return typeof Math.asinh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.atanh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.atanh',
  exec: function () {
    return typeof Math.atanh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.hypot',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot',
  exec: function () {
    return typeof Math.hypot === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.trunc',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc',
  exec: function () {
    return typeof Math.trunc === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.fround',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround',
  exec: function () {
    return typeof Math.fround === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   {
      val: true,
      note_id: 'fx-fround',
      note_html: 'Available since Firefox 26'
    },
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Math.cbrt',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cbrt',
  exec: function () {
    return typeof Math.cbrt === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    opera15:     false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  },
  separator: 'after'
}
];
