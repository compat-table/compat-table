// exports browsers and tests

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false, // always up-to-date version
    nonbrowser: true
  },
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    obsolete: false, // always up-to-date version
    nonbrowser: true
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
    obsolete: true
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31',
    obsolete: false // ESR (EOL at Aug 2015)
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  firefox33: {
    full: 'Firefox',
    short: 'FF 33'
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34'
  },
  /*firefox35: {
    full: 'Firefox',
    short: 'FF 35'
  },*/
  chrome: {
    full: 'Chrome, Opera',
    short: 'CH &lt;19',
    obsolete: true
  },
  chrome19dev: {
    full: 'Chrome, Opera',
    short: 'CH 19',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome21dev: {
    full: 'Chrome, Opera',
    short: 'CH 21-29',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome30: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;30,<br>OP&nbsp;17',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;33,<br>OP&nbsp;20',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;34,<br>OP&nbsp;21',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;35,<br>OP&nbsp;22',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;37,<br>OP&nbsp;24',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome39: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;39,<br>OP&nbsp;26',
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
    full: 'WebKit r173886',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  opera: {
    full: 'Opera 12.16',
    short: 'OP 12',
    obsolete: false // still supported
  },
  konq49: {
    full: 'Konqueror 4.13',
    short: 'KQ 4.13'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    nonbrowser: true
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH',
    nonbrowser: true,
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false, // current version
    nonbrowser: true
  },
  nodeharmony: {
    full: 'Node 0.11.13 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
    nonbrowser: true,
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  },
  ios7: {
    full: 'iOS Safari',
    short: 'iOS7'
  },
  ios8: {
    full: 'iOS Safari',
    short: 'iOS8'
  }
};

exports.tests = [
{
  name: 'proper tail calls (tail call optimisation)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tail-position-calls',
  exec: function() {/*
    "use strict";
    return (function f(n){
      if (n <= 0) {
        return  "foo";
      }
      return f(n - 1);
    }(1e6)) === "foo";
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'arrow functions',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-arrow-function-definitions',
  exec: function() {/*
    // 0 parameters
    var passed = (() => 5)() === 5;
    
    // 1 parameter, no brackets
    var b = x => x + "foo";
    passed &= (b("fee fie foe ") === "fee fie foe foo");
    
    // multiple parameters
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    passed &= (c(6, 5, 4, 3, 2) === "65432");
    
    // arrows have a lexical "this" binding (14.2.17)
    var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
    var e = { x : "baz", y : d };
    passed &= d("ley") === "barley" && e.y("ley") === "barley";
    
    // arrows cannot be re-bound, but they can still be curried.
    passed &= d.bind(e, "ley")() === "barley";
    return passed;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox23:   {
      val: true,
      note_id: 'fx-arrow',
      note_html: 'Firefox\'s arrows do not lexically bind <code>arguments</code>, and incorrectly allow line breaks between the arrow\'s parameters and the <code>=></code> token.'
    },
    firefox24:   { val: true, note_id: 'fx-arrow' },
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'const',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations',
  exec: function () {/*
    const foo = 123;
    var passed = (foo === 123);
    
    // bar is not hoisted outside of its block
    { const bar = 456; }
    passed &= (function(){ try { bar; } catch(e) { return true; }}());
    
    // redefining a const is a syntax error (12.14.1)
    passed &= (function() {
      try { Function("foo = 2;")(); } catch(e) { return true; }
    }());
    
    return passed;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   {
      val: false,
      note_id: 'const-reassign',
      note_html: 'In all of these browsers, <code>const</code> is not block-scoped, and reassigning to a <code>const</code> is a silent failure instead of an error.'
    },
    firefox13:   { val: false, note_id: 'const-reassign' },
    chrome:      { val: false, note_id: 'const-reassign' },
    safari51:    false,
    safari6:     { val: false, note_id: 'const-reassign' },
    webkit:      { val: false, note_id: 'const-reassign' },
    opera:       { val: false, note_id: 'const-reassign' },
    konq49:      { val: false, note_id: 'const-reassign' },
    rhino17:     false,
    phantom:     { val: false, note_id: 'const-reassign' },
    node:        { val: false, note_id: 'const-reassign' },
    nodeharmony: { val: false, note_id: 'const-reassign' },
    ios7:        { val: false, note_id: 'const-reassign' },
  }
},
{
  name: 'let (block scope)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations',
  exec: (function() {
    var script = function () {
      test(function() {
        try {
          return !!Function(
             '"use strict";'
            +'let foo = 123;'
            +'let passed = (foo === 123);'
   
             // bar is not hoisted outside of its block
            +'{ let bar = 456; }'
            +'passed &= (function(){ try { bar; } catch(e) { return true; }}());'

             // baz is not hoisted outside of the for-loop
            +'for(let baz = 0; false;) {}'
            +'passed &= (function(){ try { baz; } catch(e) { return true; }}());'
  
            +'return passed;'
          )();
        } catch (e) {
          return false;
        }
      }());
      global.__script_executed['let'] = true;
    }
    return [{
      type: 'application/javascript;version=1.8',
      script: script
    },{
      script: eval(("0,"+script).replace("{",
        "{if (!global.__script_executed['let']) {")+"}")
    }];
  }()),
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   {
      val: true,
      note_id: 'let-javascript18',
      note_html: 'Firefox incorrectly prohibits <code>let</code> outside of a <code>&lt;script type="application/javascript;version=1.8"&gt;</code> tag.'
    },
    firefox13:   { val: true, note_id: 'let-javascript18' },
    chrome:      false,
    chrome19dev: {
      val: true,
      note_id: 'let-extended-mode',
      note_html: 'Chrome and Node incorrectly prohibit <code>let</code> outside of strict mode.'
    },
    chrome21dev: { val: true, note_id: 'let-extended-mode' },
    safari51:    false,
    webkit:      false,
    konq49:      false,
    opera:       false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'let-extended-mode' },
    ios7:        false,
  }
},
{
  name: 'let/const temporal dead zone',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations',
  exec: (function() {
    var script = function () {
      test(function() {
        try {
          return !!Function(
             '"use strict";'
            // qux and quux are not defined until the let/const statements execute,
            // and accessing them prior to that will result in a ReferenceError.
            +'let passed = (function(){ try {  qux; } catch(e) { return true; }}());'
            +'let qux = 456;'
            +'passed    &= (function(){ try { quux; } catch(e) { return true; }}());'
            +'const quux = 789;'
            +'return passed;'
          )();
        } catch (e) {
          return false;
        }
      }());
      global.__script_executed['let TDZ'] = true;
    }
    return [{
      type: 'application/javascript;version=1.8',
      script: script
    },{
      script: eval(("0,"+script).replace("{",
        "{if (!global.__script_executed['let TDZ']) {")+"}")
    }];
  }()),
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    chrome:      false,
    chrome19dev: true,
    safari51:    false,
    webkit:      false,
    konq49:      false,
    opera:       false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
  }
},
{
  name: 'let (for-loop iteration scope)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-for-statement-runtime-semantics-labelledevaluation',
  exec: (function() {
    var script = function () {
      test(function() {
        try {
          return !!Function(    
            '"use strict";'   
             // for-loop iterations create new bindings
            +'let scopes = [];'
            +'for(let i = 0; i < 2; i++) {'
            +'  scopes.push(function(){ return i; });'
            +'}'
            +'let passed = (scopes[0]() === 0 && scopes[1]() === 1);'
    
            +'scopes = [];'
            +'for(let i in { a:1, b:1 }) {'
            +'  scopes.push(function(){ return i; });'
            +'}'
            +'passed &= (scopes[0]() === "a" && scopes[1]() === "b");'
    
            +'return passed;'
          )();
        } catch (e) {
          return false;
        }
      }());
      global.__script_executed['let for'] = true;
    }
    return [{
      type: 'application/javascript;version=1.8',
      script: script
    },{
      script: eval(("0,"+script).replace("{",
        "{if (!global.__script_executed['let for']) {")+"}")
    }];
  }()),
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    konq49:      false,
    opera:       false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'default function parameters',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation',
  exec: function () {/*
    var passed = (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));

    // explicit undefined will defer to the default
    passed    &= (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));

    // defaults can refer to previous parameters
    passed    &= (function (a, b = a) { return b === 5; }(5));

    return passed;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox18:   {
      val: true,
      note_id: 'fx-defaults-scope',
      note_html: 'In Firefox, defaults can incorrectly refer to later parameters (<code>a=b, b</code>), themselves (<code>a=a</code>), and/or identifiers in the function body (<code>function(a=function(){ return b; }){ var b=true; ... }</code>)'
    },
    firefox23:   { val: true, note_id: 'fx-defaults-scope' },
    firefox35:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'rest parameters',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-function-definitions',
  exec: function() {/*
    return (function (...args) { return typeof args !== "undefined"; }())
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox16:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'spread call (...) operator',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-argument-lists-runtime-semantics-argumentlistevaluation',
  exec: function () {/*
    return Math.max(...[1, 2, 3]) === 3
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox27:   true,
    chrome:      false,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'spread array (...) operator',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-literal',
  exec: function() {/*
    return [...[1, 2, 3]][2] === 3;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox16:   true,
    chrome:      false,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'string spreading',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-literal',
  exec: function() {/*
    return ["a", ..."bcd", "e"][3] === "d" && Math.max(..."1234") === 4;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox16:   {
      val: false,
      note_id: 'fx-spreading-strings',
      note_html: 'Spreading strings in array literals, but not in calls, is supported from Firefox 16 up.'
    },
    firefox17:   { val: false, note_id: 'fx-spreading-strings' },
    firefox27:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'class',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions',
  exec: function () {/*
    class C extends Array {
      constructor() { this.b = true; }
      a(){}
      static d(){}
    }
    return C.d && new C().a && new C().b && new C() instanceof Array;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'super',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-super-keyword',
  exec: function () {/*
    var passed = true;
    var B = class extends class {
      constructor(a) { return this.id + a; }
      foo(a)         { return a + this.id; }
    } {
      constructor(a) {
        this.id = 'AB';
        // "super" in the constructor calls
        // the superclass's constructor on "this".
        passed &= super(a)     === 'ABCD';
        // "super" can be also used to call
        // superclass methods on "this".
        passed &= super.foo(a) === 'CDAB';
      }
      foo(a) {
        passed &= super.foo(a) === 'YZEF';
      }
    }
    var b = new B("CD");
    // "super" is bound statically, even though "this" isn't
    var obj = { foo: b.foo, id:"EF" };
    obj.foo("YZ");
    return passed;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'computed properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {/*
    var x = 'y';
    return ({ [x]: 1 }).y === 1;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'shorthand properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function () {/*
    var a = 7, b = 8, c = {a,b};
    return c.a === 7 && c.b === 8;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox33:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'shorthand methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {/*
    return ({ y() { return 2; } }).y() === 2;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: '__proto__ in object literals',
  annex_b: true,
  note_id: 'proto-in-object-literals',
  note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-__proto__-property-names-in-object-initializers',
  exec: function() {
    var passed = { __proto__ : [] } instanceof Array
      && !({ __proto__ : null } instanceof Object);

    // If computed properties are supported, the following
    // check must also be passed.
    var a = "__proto__";
    try {
      eval("passed &= !({ [a] : [] } instanceof Array)");
    }
    catch(e) {}
    return passed;
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   true,
    firefox33:   {
      val: true,
      note_id: 'fx-proto-shorthand',
      note_html: 'Firefox 33 and 34 incorrectly regard both of the following as true: <ul>'
      +'<li><code>var __proto__ = []; ({ __proto__ }) instanceof Array</code>'
      +'<li><code>({ __proto__(){} }) instanceof Function</code>'
      +'</ul>'
    },
    firefox34:   { val: true, note_id: 'fx-proto-shorthand' },
    firefox35:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'modules',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-modules',
  exec: function () {/*
    export var foo = 1;
    return true;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'for..of loops',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-for-in-and-for-of-statements',
  exec: function () {/*
    var arr = [5];
    for (var item of arr)
      return item === 5;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox13:   true,
    chrome:      false,
    chrome37:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'generators (yield)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions',
  exec: function () {/*
    var generator = (function* () {
      yield* (function* () {
        yield 5; yield 6;
      }());
    }());

    var item = generator.next();
    var passed = item.value === 5 && item.done === false;
    item = generator.next();
    passed    &= item.value === 6 && item.done === false;
    item = generator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox27:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
  }
},
{
  name: 'octal literals',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-numeric-literals',
  exec: function () {/*
    return 0o10 === 8 && 0O10 === 8;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox25:   {
      val: true,
      note_id: 'octal-to-string',
      note_html: 'Firefox doesn\'t support <code>Number("0o1")</code> and <code>Number("0b1")</code> evaluating to 1 instead of NaN.'
    },
    firefox27:   { val: true, note_id: 'octal-to-string' },
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'binary literals',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-numeric-literals',
  exec: function () {/*
    return 0b10 === 2 && 0B10 === 2;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox25:   { val: true, note_id: 'octal-to-string' },
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'template strings',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literals',
  exec: function () {/*
    var a = "ba", b = "QUX";
    return `foo bar
${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'tagged template strings',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literals',
  exec: function () {/*
    var called = false;
    function fn(parts, a, b) {
      called = true;
      return parts instanceof Array &&
        parts[0]     === "foo"      &&
        parts[1]     === "bar\n"    &&
        parts.raw[0] === "foo"      &&
        parts.raw[1] === "bar\\n"   &&
        a === 123                   &&
        b === 456;
    }
    return fn `foo${123}bar\n${456}` && called;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'RegExp "y" flag',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky',
  exec: function () {/*
    var re = new RegExp('\\w');
    var re2 = new RegExp('\\w', 'y');
    re.exec('xy');
    re2.exec('xy');
    return (re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y');
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'RegExp "u" flag',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode',
  exec: function() {/*
    return "𠮷".match(/./u)[0].length === 2;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'typed arrays',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-typedarray-objects',
  exec: function () {/*
    var buffer = new ArrayBuffer(64);
    var passed = true;
    var view;

    // Check that each int type overflows as expected.
    view = new Int8Array(buffer);         view[0] = 0x80;
    passed &= view[0] === -0x80;
    view = new Uint8Array(buffer);        view[0] = 0x100;
    passed &= view[0] === 0;
    view = new Uint8ClampedArray(buffer); view[0] = 0x100;
    passed &= view[0] === 0xFF;
    view = new Int16Array(buffer);        view[0] = 0x8000;
    passed &= view[0] === -0x8000;
    view = new Uint16Array(buffer);       view[0] = 0x10000;
    passed &= view[0] === 0;
    view = new Int32Array(buffer);        view[0] = 0x80000000;
    passed &= view[0] === -0x80000000;
    view = new Uint32Array(buffer);       view[0] = 0x100000000;
    passed &= view[0] === 0;
    // Check that each float type loses precision as expected.
    view = new Float32Array(buffer);      view[0] = 0.1;
    passed &= view[0] === 0.10000000149011612;
    view = new Float64Array(buffer);      view[0] = 0.1;
    passed &= view[0] === 0.1;
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        {
      val: false,
      note_id: 'ie-typedarray',
      note_html: 'Internet Explorer supports every typed array class except <code>Uint8ClampedArray</code>.'
    },
    ie11:        { val: false, note_id: 'ie-typedarray' },
    firefox11:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      false,
    rhino17:     false,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'typed arrays (DataView)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-dataview-objects',
  exec: function () {/*
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    var passed = true;

    view.setInt8 (0, 0x80);        passed &= view.getInt8(0)   === -0x80;
    view.setUint8(0, 0x100);       passed &= view.getUint8(0)  === 0;
    view.setInt16(0, 0x8000);      passed &= view.getInt16(0)  === -0x8000;
    view.setUint16(0,0x10000);     passed &= view.getUint16(0) === 0;
    view.setInt32(0, 0x80000000);  passed &= view.getInt32(0)  === -0x80000000;
    view.setUint32(0,0x100000000); passed &= view.getUint32(0) === 0;
    view.setFloat32(0, 0.1);       passed &= view.getFloat32(0)=== 0.10000000149011612;
    view.setFloat64(0, 0.1);       passed &= view.getFloat64(0)=== 0.1;
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        true,
    firefox11:   false,
    firefox16:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      false,
    rhino17:     false,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'Map',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects',
  exec: function () {/*
    var key = {};
    var map = new Map();
    
    map.set(key, 123);
    
    return map.has(key) && map.get(key) === 123 &&
           map.size === 1;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'map-constructor',
      note_html: 'Map and Set constructor arguments, such as <code>new Map([[key, val]])</code> or <code>new Set([obj1, obj2])</code>, are not supported.'
    },
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    safari51:    false,
    webkit:      { val: true, note_id: 'map-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'map-constructor' },
    ios7:        false,
    ios8:        { val: true, note_id: 'map-constructor' },
  }
},
{
  name: 'Set',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects',
  exec: function () {/*
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);

    return set.has(123) && set.size === 1;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        { val: true, note_id: 'map-constructor' },
    firefox11:   false,
    firefox23:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    safari51:    false,
    webkit:      { val: true, note_id: 'map-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'map-constructor' },
    ios7:        false,
    ios8:        { val: true, note_id: 'map-constructor' },
  }
},
{
  name: 'WeakMap',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects',
  exec: function () {/*
    var key1 = {};
    var weakmap = new WeakMap();

    weakmap.set(key1, 123);

    return weakmap.has(key1) && weakmap.get(key1) === 123;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'weakmap-constructor',
      note_html: 'WeakMap (and, except in Firefox, WeakSet) constructor arguments, such as <code>new WeakMap([[key, val]])</code> or <code>new WeakSet([obj1, obj2])</code>, are not supported.'
    },
    firefox11:   false,
    firefox23:   { val: true, note_id: 'weakmap-constructor' },
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    webkit:      { val: true, note_id: 'weakmap-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'weakmap-constructor' },
    ios7:        false,
    ios8:        { val: true, note_id: 'weakmap-constructor' },
  }
},
{
  name: 'WeakSet',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakset-objects',
  exec: function () {/*
    var obj1 = {}, obj2 = {};
    var weakset = new WeakSet();

    weakset.add(obj1);
    weakset.add(obj1);

    return weakset.has(obj1);
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    chrome33:    { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'weakmap-constructor' },
    ios7:        false,
  }
},
{
  name: 'Proxy "get" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver',
  exec: function () {/*
    var proxied = { };
    var proxy = new Proxy(proxied, {
      get: function (t, k, r) {
        return t === proxied && k === "foo" && r === proxy && 5;
      }
    });
    return proxy.foo === 5;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   {
      val: true,
      note_id: 'fx-proxy-get',
      note_html: 'Firefox doesn\'t allow inheritors of a proxy (such as objects created by <code>Object.create(proxy)</code>) to trigger the proxy\'s "get" handler via the prototype chain, unless the proxied object actually does possess the named property.'
    },
    firefox23:   { val: true, note_id: 'fx-proxy-get' },
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "set" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver',
  exec: function () {/*
    var proxied = { };
    var passed = false;
    var proxy = new Proxy(proxied, {
      set: function (t, k, v, r) {
        passed = t === proxied && k + v === "foobar" && r === proxy;
      }
    });
    proxy.foo = "bar";
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   {
      val: true,
      note_id: 'fx-proxy-set',
      note_html: 'Firefox doesn\'t allow inheritors of a proxy (such as objects created by <code>Object.create(proxy)</code>) to trigger the proxy\'s "set" handler via the prototype chain.'
    },
    firefox23:   { val: true, note_id: 'fx-proxy-set' },
    firefox24:   { val: true, note_id: 'fx-proxy-set' },
    firefox25:   { val: true, note_id: 'fx-proxy-set' },
    firefox27:   { val: true, note_id: 'fx-proxy-set' },
    firefox28:   { val: true, note_id: 'fx-proxy-set' },
    firefox29:   { val: true, note_id: 'fx-proxy-set' },
    firefox30:   { val: true, note_id: 'fx-proxy-set' },
    firefox31:   { val: true, note_id: 'fx-proxy-set' },
    firefox32:   { val: true, note_id: 'fx-proxy-set' },
    firefox33:   { val: true, note_id: 'fx-proxy-set' },
    firefox34:   { val: true, note_id: 'fx-proxy-set' },
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "has" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    "foo" in new Proxy(proxied, {
      has: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    });
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "deleteProperty" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-delete-p',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    delete new Proxy(proxied, {
      deleteProperty: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    }).foo;
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "getOwnPropertyDescriptor" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p',
  exec: function () {/*
    var proxied = {};
    var fakeDesc = { value: "foo", configurable: true };
    var returnedDesc = Object.getOwnPropertyDescriptor(
      new Proxy(proxied, {
        getOwnPropertyDescriptor: function (t, k) {
          return t === proxied && k === "foo" && fakeDesc;
        }
      }),
      "foo"
    );
    return (returnedDesc.value     === fakeDesc.value
      && returnedDesc.configurable === fakeDesc.configurable
      && returnedDesc.writable     === false
      && returnedDesc.enumerable   === false);
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox18:    {
      val: false,
      note_id: 'fx-proxy-getown',
      note_html: 'From Firefox 18 up to 29, the <code>getOwnPropertyDescriptor</code> handler can only report non-existent properties if the proxy target is non-extensible rather than extensible'
    },
    firefox23:   { val: false, note_id: 'fx-proxy-getown' },
    firefox30:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "defineProperty" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    Object.defineProperty(
      new Proxy(proxied, {
        defineProperty: function (t, k, d) {
          passed = t === proxied && k === "foo" && d.value === 5;
        }
      }),
      "foo",
      { value: 5 }
    );
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "getPrototypeOf" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof',
  exec: function () {/*
    var proxied = {};
    var fakeProto = {};
    var proxy = new Proxy(proxied, {
      getPrototypeOf: function (t) {
        return t === proxied && fakeProto;
      }
    });
    return Object.getPrototypeOf(proxy) === fakeProto;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "setPrototypeOf" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof',
  exec: function () {/*
    var proxied = {};
    var newProto = {};
    var passed = false;
    Object.setPrototypeOf(
      new Proxy(proxied, {
        setPrototypeOf: function (t, p) {
          passed = t === proxied && p === newProto;
        }
      }),
      newProto
    );
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "isExtensible" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-isextensible',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    Object.isExtensible(
      new Proxy(proxied, {
        isExtensible: function (t) {
          passed = t === proxied; return true;
        }
      })
    );
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "preventExtensions" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-preventextensions',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    Object.preventExtensions(
      new Proxy(proxied, {
        preventExtensions: function (t) {
          passed = t === proxied;
          return Object.preventExtensions(proxied);
        }
      })
    );
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox23:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "enumerate" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-enumerate',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    for (var i in
      new Proxy(proxied, {
        enumerate: function (t) {
          passed = t === proxied;
          return {
            next: function(){ return { done: true, value: null };}
          };
        }
      })
    ) { }
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "ownKeys" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys',
  exec: function () {/*
    var proxied = {};
    var passed = false;
    Object.keys(
      new Proxy(proxied, {
        ownKeys: function (t) {
          passed = t === proxied; return [];
        }
      })
    );
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox18:   {
      val: false,
      note_id: 'fx-proxy-ownkeys',
      note_html: 'Available from Firefox 18 up to 33 as the draft standard <code>keys</code> handler'
    },
    firefox23:   { val: false, note_id: 'fx-proxy-ownkeys' },
    firefox33:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "apply" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist',
  exec: function () {/*
    var proxied = function(){};
    var passed = false;
    var host = {
      method: new Proxy(proxied, { 
        apply: function (t, thisArg, args) { console.log(arguments);
          passed = t === proxied && thisArg === host && args + "" === "foo,bar";
        }
      })
    };
    host.method("foo", "bar");
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy "construct" handler',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-construct-internal-method',
  exec: function () {/*
    var proxied = function(){};
    var passed = false;
    new new Proxy(proxied, {
      construct: function (t, args) {
        passed = t === proxied && args + "" === "foo,bar";
        return {};
      }
    })("foo","bar");
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Proxy.revocable',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy.revocable',
  exec: function () {/*
    var obj = Proxy.revocable({}, { get: function() { return 5; } });
    var passed = (obj.proxy.foo === 5);
    obj.revoke();
    try {
      obj.proxy.foo;
    } catch(e) {
      passed &= e instanceof TypeError;
    }
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Reflect',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection',
  exec: function () {
    var i, names =
      ["apply","construct","defineProperty","deleteProperty","enumerate","get",
      "getOwnPropertyDescriptor","getPrototypeOf","has","isExtensible","ownKeys",
      "preventExtensions","set","setPrototypeOf"];

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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'block-level function declaration',
  note_id: 'block-level-function',
  note_html: 'Note that prior to ES6, it was <a href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">recommended</a> that ES5 implementations forbid block-level declarations in strict mode.',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation',
  exec: function () {/*
    'use strict';
    {
      function f(){}
    }
    return typeof f === "undefined";
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    chrome:      false,
    chrome21dev: true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
  }
},
{
  name: 'hoisted block-level function declaration',
  note_id: 'hoisted-block-level-function',
  note_html: 'Note that the specified semantics is identical to that used by Internet Explorer prior to IE 11.',
  annex_b: true,
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics',
  exec: function () {/*
    // Note: only available outside of strict mode.
    var passed = f() === 2 && g() === 4;
    if (true) { function f(){ return 1; } } else { function f(){ return 2; } }
    if (false){ function g(){ return 3; } } else { function g(){ return 4; } }
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        true,
    ie11:        false,
    firefox11:   false,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     false,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'destructuring',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment',
  exec: function () {/*
    // Array destructuring
    var [a, , [b], g] = [5, null, [6]];
    // Object destructuring
    var {c, x:d, h} = {c:7, x:8};
    // Combined destructuring
    var [e, {x:f, i}] = [9, {x:10}];

    return a === 5 && b === 6 && c === 7 &&
           d === 8 && e === 9 && f === 10 &&
           g === undefined && h === undefined && i === undefined;
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   true,
    chrome:      false,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        {
      val: true,
      note_id: 'fx-destructuring',
      note_html: 'iOS 8 fails to support multiple destructurings in a single <code>var</code> or <code>let</code> statement - for example, <code>var [a,b] = [5,6], {c,d} = {c:7,d:8};</code>'
    },
  }
},
{
  name: 'destructuring parameters',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment',
  exec: function () {/*
    return (function({a, x:b}, [c, d]) {
      return a === 1 && b === 2 && c === 3 && d === 4;
    }({a:1, x:2},[3, 4]));
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   true,
    chrome:      false,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'destructuring defaults',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment',
  exec: function () {/*
    var {a = 1, b = 1, c = 3} = {b:2, c:undefined};
    return a === 1 && b === 2 && c === 3;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'destructuring rest',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment',
  exec: function () {/*
    var [a, ...b] = [3, 4, 5];
    var [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
           c === 6 && d instanceof Array && d.length === 0;
  */},
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Promise',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects',
  exec: function () {/*
    var p1 = new Promise(function(resolve, reject) { resolve("foo"); });
    var p2 = new Promise(function(resolve, reject) { reject("quux"); });
    var score = 0;
    
    function thenFn(result)  { score += (result === "foo");  check(); }
    function catchFn(result) { score += (result === "quux"); check(); }
    function shouldNotRun(result)  { score = -Infinity;   }
    
    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);
    
    p1.then(function() {
      // Promise.prototype.then() should return a new Promise
      score += p1.then() !== p1;
      check();
    });
    
    function check() {
      if (score === 4) asyncTestPassed();
    }
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox29:   true,
    chrome:      false,
    chrome33:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'Promise.all',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise.all',
  exec: function () {/*
    var fulfills = Promise.all([
      new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
      new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
    ]);
    var rejects = Promise.all([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
    ]);
    var score = 0;
    fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
    rejects.catch(function(result) { score += (result === "qux"); check(); });
    
    function check() {
      if (score === 2) asyncTestPassed();
    }
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox29:   true,
    chrome:      false,
    chrome33:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true,
  }
},
{
  name: 'Promise.race',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise.race',
  exec: function () {/*
    var fulfills = Promise.race([
      new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
      new Promise(function(_, reject) { setTimeout(reject, 300,"bar"); }),
    ]);
    var rejects = Promise.race([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(resolve)   { setTimeout(resolve,300,"qux"); }),
    ]);
    var score = 0;
    fulfills.then(function(result) { score += (result === "foo"); check(); });
    rejects.catch(function(result) { score += (result === "baz"); check(); });
    
    function check() {
      if (score === 2) asyncTestPassed();
    }
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox29:   true,
    chrome:      false,
    chrome33:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true,
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
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox23:   true,
    chrome:      false,
    chrome19dev: true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox31:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Object.prototype.__proto__',
  annex_b: true,
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
    firefox18:   true,
    chrome:      true,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      false,
    rhino17:     true,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'function "name" property',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-setfunctionname',
  exec: function () {
    return (function foo(){}).name == 'foo';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'Function.prototype.toMethod',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function.prototype.tomethod',
  exec: function () {
    return typeof Function.prototype.toMethod === "function";
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox34:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox29:   true,
    chrome:      false,
    chrome37:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox29:   true,
    chrome:      false,
    chrome37:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'String.prototype.normalize',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.normalize',
  exec: function () {
    return typeof String.prototype.normalize === "function"
      && "c\u0327\u0301".normalize("NFC") === "\u1e09"
      && "\u1e09".normalize("NFD") === "c\u0327\u0301";
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox24:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox17:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox17:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox18:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'String.prototype HTML methods',
  annex_b: true,
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
    firefox11:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
  }
},
{
  name: 'Unicode code point escapes',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals',
  exec: function () {/*
    return '\u{1d306}' == '\ud834\udf06';
  */},
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Global symbol registry',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.for',
  exec: function() {/*
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.hasInstance',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var passed = false;
    var obj = { foo: true };
    var C = function(){};
    C[Symbol.hasInstance] = function(inst) { passed = inst.foo; return false; };
    obj instanceof C;
    return passed;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.isConcatSpreadable',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var a = [], b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.isRegExp',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    return RegExp.prototype[Symbol.isRegExp] === true;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.iterator',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var a = 0, b = {};
    b[Symbol.iterator] = function() {
      return {
        next: function() {
          return {
            done: a === 1,
            value: a++
          };
        }
      };
    };
    var c;
    for (c of b) {}
    return c === 0;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
  }
},
{
  name: 'Symbol.toPrimitive',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var a = {}, b = {}, c = {};
    var passed = 0;
    a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
    b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
    c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };

    a >= 0;
    b in {};
    c == 0;
    return passed === 3;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.toStringTag',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
  */},
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Symbol.unscopables',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {/*
    var a = { foo: 1, bar: 2 };
    a[Symbol.unscopables] = { bar: true };
    with (a) {
      return foo === 1 && typeof bar === "undefined";
    }
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'RegExp.prototype.compile',
  annex_b: true,
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.compile',
  exec: function () {
    return typeof RegExp.prototype.compile === 'function';
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        true,
    firefox11:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
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
    firefox11:   false,
    firefox32:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Array.of',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of',
  exec: function () {
    return typeof Array.of === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox32:   true,
    chrome:      false,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox27:   true,
    chrome:      false,
    chrome30:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   {
      val: false,
      note_id: 'fx-array-prototype-values',
      note_html: 'Available from Firefox 17 up to 27 as the non-standard <code>Array.prototype.iterator</code>'
    },
    firefox18:   { val: false, note_id: 'fx-array-prototype-values' },
    firefox23:   { val: false, note_id: 'fx-array-prototype-values' },
    firefox24:   { val: false, note_id: 'fx-array-prototype-values' },
    firefox25:   { val: false, note_id: 'fx-array-prototype-values' },
    firefox27:   {
      val: false,
      note_id: 'fx-array-prototype-values-2',
      note_html: 'Available since Firefox 27 as the non-standard <code>Array.prototype["@@iterator"]</code>'
    },
    firefox28:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox29:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox30:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox31:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox32:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox33:   { val: false, note_id: 'fx-array-prototype-values-2' },
    firefox34:   { val: false, note_id: 'fx-array-prototype-values-2' },
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox27:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
  }
},
{
  name: 'Array.prototype[Symbol.unscopables]',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype-@@unscopables',
  exec: function () {/*
    var unscopables = Array.prototype[Symbol.unscopables];
    var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
    for (var i = 0; i < ns.length; i++) {
      if (!unscopables[ns[i]]) return false;
    }
    return true;
  */},
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    firefox11:   false,
    chrome:      false,
    chrome39:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox16:   true,
    chrome:      false,
    chrome19dev: true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox32:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox31:   true,
    chrome:      false,
    chrome35:    true,
    safari51:    false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox23:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: {
      val: true,
      note_id: 'chromu-imul',
      note_html: 'Available since Chrome 28'
    },
    chrome30:    true,
    safari51:    false,
    safari6:     false,
    safari7:     true,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        true,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        false
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome35:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox27:   true,
    chrome:      false,
    chrome19dev: false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox27:   {
      val: true,
      note_id: 'fx-fround',
      note_html: 'Available since Firefox 26'
    },
    firefox29:   true,
    chrome:      false,
    chrome35:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
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
    firefox11:   false,
    firefox25:   true,
    chrome:      false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true,
    ios7:        false,
    ios8:        true
  },
  separator: 'after'
}
];

//Shift annex B features to the bottom
exports.tests = exports.tests.filter(function(e) { return !e.annex_b })
        .concat(exports.tests.filter(function(e) { return  e.annex_b }));
