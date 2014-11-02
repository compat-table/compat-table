// exports browsers and tests

Object.assign = require('object-assign');

var temp = {};

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
  closure: {
    full: 'Closure Compiler v20140923',
    short: 'Closure Compiler',
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
    obsolete: true
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25',
    obsolete: true
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27',
    obsolete: true
  },
  firefox28: {
    full: 'Firefox',
    short: 'FF 28',
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
  },
  chrome30: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;30,<br>OP&nbsp;17',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome33: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;32-33,<br>OP&nbsp;19-20',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome34: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;34,<br>OP&nbsp;21',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome35: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;35,<br>OP&nbsp;22',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  chrome37: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;37,<br>OP&nbsp;24',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  chrome38: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;38,<br>OP&nbsp;25',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  chrome39: {
    full: 'Chrome, Opera',
    short: 'CH 39,<br>OP&nbsp;26',
    obsolete: false,
    note_id: 'experimental-flag',
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
    short: 'SF 7.0',
    obsolete: false
  },
  safari71_8: {
    full: 'Safari',
    short: 'SF 7.1, SF 8',
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
    full: 'Konqueror 4.14',
    short: 'KQ 4.14',
    note_id: 'khtml',
    note_html: 'Results are only applicable for the KHTML rendering engine.'
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
    full: 'Node 0.11.14 harmony',
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
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax',
  subtests: {
    '0 parameters': {
      exec: function(){/*
        return (() => 5)() === 5;
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
        chrome37:    true,
      },
    },
    '1 parameter, no brackets': {
      exec: function(){/*
        var b = x => x + "foo";
        return (b("fee fie foe ") === "fee fie foe foo");
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
        chrome37:    true,
      },
    },
    'multiple parameters': {
      exec: function(){/*
        var c = (v, w, x, y, z) => "" + v + w + x + y + z;
        return (c(6, 5, 4, 3, 2) === "65432");
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
        chrome37:    true,
      },
    },
    'lexical "this" binding': {
      exec: function(){/*
        var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
        var e = { x : "baz", y : d };
        return d("ley") === "barley" && e.y("ley") === "barley";
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
      },
    },
    'can\'t be bound, can be curried': {
      exec: function(){/*
        var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
        var e = { x : "baz" };
        return d.bind(e, "ley")() === "barley";
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
      },
    },
    'lexical "arguments" binding': {
      exec: function(){/*
        var f = (function() { return z => arguments[0]; }(5));
        return f(6) === 5;
      */},
      res: {
        firefox23:   true,
        firefox24:   false,
      },
    },
    'no line break between params and <code>=></code>': {
      exec: function(){/*
        return () => {
          try { Function("x\n => 2")(); } catch(e) { return true; }
        }();
      */},
      res: {
      },
    },
    'no "prototype" and "name" properties': {
      exec: function(){/*
        var a = () => 5;
        return !a.hasOwnProperty("prototype") && a.name === ""; 
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox23:   true,
        chrome39:    true,
      },
    },
  },
},
{
  name: 'const',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations',
  subtests: {
    'basic support': {
      exec: function() {/*
        const foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        phantom:     true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      }
    },
    'is block-scoped': {
      exec: function() {/*
        { const bar = 456; }
        return (function(){ try { bar; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
      }
    },
    'redefining a const is a syntax error': {
      exec: function() {/*
        const baz = 1;
        try {
          Function("const foo = 1; foo = 2;")();
        } catch(e) {
          return true;
        }
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
      }
    },
    'temporal dead zone': {
      exec: function(){/*
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        const qux = 456;
        return passed;
      */},
      res: {
        ejs:         true,
        ie11:        true,
      },
    },
   'basic support (strict mode)': {
      exec: function() {/*
        "use strict";
        const foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome:      true,
        konq49:      true,
        nodeharmony: true,
      }
    },
    'is block-scoped (strict mode)': {
      exec: function() {/*
        'use strict';
        { const bar = 456; }
        return (function(){ try { bar; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        chrome19dev: true,
        ie11:        true,
        nodeharmony: true,
      }
    },
    'redefining a const (strict mode)': {
      exec: function() {/*
        'use strict';
        const baz = 1;
        try {
          Function("'use strict'; const foo = 1; foo = 2;")();
        } catch(e) {
          return true;
        }
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome33:    true,
        nodeharmony: true,
      }
    },
    'temporal dead zone (strict mode)': {
      exec: function(){/*
        'use strict';
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        const qux = 456;
        return passed;
      */},
      res: {
        ejs:         true,
        ie11:        true,
        chrome19dev: true,
        nodeharmony: true,
      },
    },
  }
},
{
  name: 'let',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-let-and-const-declarations',
  subtests: {
    'basic support': {
      exec: function(){/*
        let foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   {
          val: false,
          note_id: 'fx-let',
          note_html: 'Available from Firefox 2 for code in a <code>&lt;script type="application/javascript;version=1.7"></code> (or <code>version=1.8</code>) tag.'
        },
      },
    },
    'is block-scoped': {
      exec: function(){/*
        { let bar = 456; }
        return (function(){ try { bar; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
      },
    },
    'for-loop statement scope': {
      exec: function(){/*
        for(let baz = 0; false;) {}
        return (function(){ try { baz; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
      },
    },
    'temporal dead zone': {
      exec: function(){/*
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        let qux = 456;
        return passed;
      */},
      res: {
        ejs:         true,
        ie11:        true,
        firefox35: {
          val: false,
          note_id: 'fx-let-tdz',
          note_html: 'Available from Firefox 35 for code in a <code>&lt;script type="application/javascript;version=1.7"></code> (or <code>version=1.8</code>) tag.'
        },
      },
    },
    'for-loop iteration scope': {
      exec: function(){/*
        let scopes = [];
        for(let i = 0; i < 2; i++) {
          scopes.push(function(){ return i; });
        }
        let passed = (scopes[0]() === 0 && scopes[1]() === 1);
        
        scopes = [];
        for(let i in { a:1, b:1 }) {
          scopes.push(function(){ return i; });
        }
        passed &= (scopes[0]() === "a" && scopes[1]() === "b");
        return passed;
      */},
      res: {
        tr:          true,
        ejs:         true,
      },
    },
    'basic support (strict mode)': {
      exec: function(){/*
        'use strict';
        let foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        chrome19dev: true,
        nodeharmony: true,
        firefox11:   { val: false, note_id: 'fx-let' },
      },
    },
    'is block-scoped (strict mode)': {
      exec: function(){/*
        'use strict';
        { let bar = 456; }
        return (function(){ try { bar; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        chrome19dev: true,
        nodeharmony: true,
      },
    },
    'for-loop statement scope (strict mode)': {
      exec: function(){/*
        'use strict';
        for(let baz = 0; false;) {}
        return (function(){ try { baz; } catch(e) { return true; }}());
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        chrome19dev: true,
        nodeharmony: true,
      },
    },
    'temporal dead zone (strict mode)': {
      exec: function(){/*
        'use strict';
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        let qux = 456;
        return passed;
      */},
      res: {
        ejs:         true,
        ie11:        true,
        chrome19dev: true,
        nodeharmony: true,
      },
    },
    'for-loop iteration scope (strict mode)': {
      exec: function(){/*
        'use strict';
        let scopes = [];
        for(let i = 0; i < 2; i++) {
          scopes.push(function(){ return i; });
        }
        let passed = (scopes[0]() === 0 && scopes[1]() === 1);
        
        scopes = [];
        for(let i in { a:1, b:1 }) {
          scopes.push(function(){ return i; });
        }
        passed &= (scopes[0]() === "a" && scopes[1]() === "b");
        return passed;
      */},
      res: {
        tr:          true,
        ejs:         true,
        chrome37:    true,
      },
    },
  },
},
{
  name: 'default function parameters',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation',
  subtests: {
    'basic functionality': {
      exec: function(){/*
        return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox16:   true,
      },
    },
    'explicit undefined defers to the default': {
      exec: function(){/*
        return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox18:   true,
      },
    },
    'defaults can refer to previous params': {
      exec: function(){/*
        return (function (a, b = a) { return b === 5; }(5));
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox16:   true,
      },
    },
    'temporal dead zone': {
      exec: function(){/*
        return (function(x = 1) {
          try {
            eval("(function(a=a){}())"); 
            return false;
          } catch(e) {}
          try {
            eval("(function(a=b,b){}())"); 
            return false;
          } catch(e) {}
          try {
            eval("(function(a=function(){ return b; }){ var b = 1;}())"); 
            return false;
          } catch(e) {}
          return true;
        }());
      */},
      res: {
      },
    }
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  name: 'spread (...) operator',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-argument-lists-runtime-semantics-argumentlistevaluation',
  subtests: {
    'with arrays, in function calls': {
      exec: function () {/*
        return Math.max(...[1, 2, 3]) === 3
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox27:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true
      },
    },
    'with arrays, in array literals': {
      exec: function() {/*
       return [...[1, 2, 3]][2] === 3;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox16:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true
      },
    },
    'with strings, in function calls': {
      exec: function() {/*
       return Math.max(..."1234") === 4;
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox27:   true,
      },
    },
    'with strings, in array literals': {
      exec: function() {/*
       return ["a", ..."bcd", "e"][3] === "d";
      */},
      res: {
        tr:          true,
        ejs:         true,
        firefox17:   true,
      },
    },
  }
},
{
  name: 'class',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions',
  subtests: {
    'class statement': {
      exec: function () {/*
        class C {}
        return typeof C === "function";
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
    'class expression': {
      exec: function () {/*
        return typeof class C {} === "function";
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
    'constructor': {
      exec: function () {/*
        class C {
          constructor() { this.x = 1; }
        }
        return C.prototype.constructor === C
          && new C().x === 1;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
    'prototype methods': {
      exec: function () {/*
        class C {
          constructor() {}
          method() { return 2; }
        }
        return typeof C.prototype.method === "function"
          && new C().method() === 2;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
    'static methods': {
      exec: function () {/*
        class C {
          constructor() {}
          static method() { return 3; }
        }
        return typeof C.method === "function"
          && C.method() === 3;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
    'extends': {
      exec: function () {/*
        class C extends Array {}
        return Array.isPrototypeOf(C)
          && Array.prototype.isPrototypeOf(C.prototype);
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
      },
    },
  },
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
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox33:   {
      val: true,
      note_id: 'fx-proto-shorthand',
      note_html: 'Firefox 33 and 34 incorrectly regard both of the following as true: <ul>'
      +'<li><code>var __proto__ = []; ({ __proto__ }) instanceof Array</code>'
      +'<li><code>({ __proto__(){} }) instanceof Function</code>'
      +'</ul>'
    },
    firefox34:   { val: true, note_id: 'fx-proto-shorthand' },
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    safari71_8:  true,
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     true,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  name: 'octal and binary literals',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-numeric-literals',
  subtests: {
    'octal literals': {
      exec: function () {/*
        return 0o10 === 8 && 0O10 === 8;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox25:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'binary literals': {
      exec: function () {/*
        return 0b10 === 2 && 0B10 === 2;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox25:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'octal supported by Number()': {
      exec: function () {/*
        return Number('0o1') === 1;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'binary supported by Number()': {
      exec: function () {/*
        return Number('0b1') === 1;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
  },
},
{
  name: 'template strings',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literals',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var a = "ba", b = "QUX";
        return `foo bar
        ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox34:   true,
      },
    },
    'tagged template strings': {
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
        closure:     true,
        firefox34:   true,
      },
    }
  },
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  subtests: Object.assign({
    'Int8Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Int8Array(buffer);         view[0] = 0x80;
        return view[0] === -0x80;
      */},
      res: (temp.basicTypedArrayResults = {
        ejs:         true,
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        phantom:     true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      }),
    },
    'Uint8Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Uint8Array(buffer);        view[0] = 0x100;
        return view[0] === 0;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Uint8ClampedArray': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
        return view[0] === 0xFF;
      */},
      res: {
        ejs:         true,
        firefox11:   true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      },
    },
    'Int16Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Int16Array(buffer);        view[0] = 0x8000;
        return view[0] === -0x8000;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Uint16Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Uint16Array(buffer);       view[0] = 0x10000;
        return view[0] === 0;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Int32Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Int32Array(buffer);        view[0] = 0x80000000;
        return view[0] === -0x80000000;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Uint32Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Uint32Array(buffer);       view[0] = 0x100000000;
        return view[0] === 0;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Float32Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Float32Array(buffer);       view[0] = 0.1;
        return view[0] === 0.10000000149011612;
      */},
      res: temp.basicTypedArrayResults,
    },
    'Float64Array': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new Float64Array(buffer);       view[0] = 0.1;
        return view[0] === 0.1;
      */},
      res: temp.basicTypedArrayResults,
    },
    'DataView (Int8)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt8 (0, 0x80);
        return view.getInt8(0) === -0x80;
      */},
      res: (temp.basicDataViewResults = {
        ejs:         true,
        ie10:        true,
        firefox16:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        phantom:     true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      }),
    },
    'DataView (Uint8)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint8(0, 0x100); 
        return view.getUint8(0) === 0;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Int16)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt16(0, 0x8000); 
        return view.getInt16(0) === -0x8000;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Uint16)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint16(0, 0x10000); 
        return view.getUint16(0) === 0;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Int32)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt32(0, 0x80000000); 
        return view.getInt32(0) === -0x80000000;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Uint32)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint32(0, 0x100000000); 
        return view.getUint32(0) === 0;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Float32)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setFloat32(0, 0.1); 
        return view.getFloat32(0) === 0.10000000149011612;
      */},
      res: temp.basicDataViewResults,
    },
    'DataView (Float64)': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setFloat64(0, 0.1); 
        return view.getFloat64(0) === 0.1;
      */},
      res: temp.basicDataViewResults,
    },
  },
  (function(){
    var methods = {
    '.from':                  {},
    '.of':                    {},
    '.prototype.subarray':    {
        ejs:         true,
        firefox16:   true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
    },
    '.prototype.join':        {},
    '.prototype.indexOf':     {},
    '.prototype.lastIndexOf': {},
    '.prototype.slice':       {},
    '.prototype.every':       {},
    '.prototype.filter':      {},
    '.prototype.forEach':     {},
    '.prototype.map':         {},
    '.prototype.reduce':      {},
    '.prototype.reduceRight': {},
    '.prototype.reverse':     {},
    '.prototype.some':        {},
    '.prototype.sort':        {},
    '.prototype.copyWithin':  { firefox35: true },
    '.prototype.find':        {},
    '.prototype.findIndex':   {},
    '.prototype.fill':        {},
    '.prototype.keys':        { chrome38: true },
    '.prototype.values':      { chrome38: true },
    '.prototype.entries':     { chrome38: true },
    };
    var eqFn = ' === "function"';
    var obj = {};
    for (var m in methods) {
      obj['%TypedArray%' + m] = {
        exec: eval('0,function(){/*\n  return typeof '
          + [
            'Int8Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Int16Array',
            'Uint16Array',
            'Int32Array',
            'Uint32Array',
            'Float32Array',
            'Float64Array'
          ].join(m + eqFn + ' &&\n    typeof ') + m + eqFn + ';\n*/}'),
        res: methods[m]
      }
    };
    return obj;
  }())),
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
    closure:     false,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'map-constructor',
      note_html: 'Map and Set constructor arguments, such as <code>new Map([[key, val]])</code> or <code>new Set([obj1, obj2])</code>, are not supported.'
    },
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    chrome30:    { val: true, note_id: 'map-constructor' },
    chrome33:    { val: true, note_id: 'map-constructor' },
    chrome34:    { val: true, note_id: 'map-constructor' },
    chrome35:    { val: true, note_id: 'map-constructor' },
    chrome37:    { val: true, note_id: 'map-constructor' },
    chrome39:    { val: true, note_id: 'map-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  { val: true, note_id: 'map-constructor' },
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
    closure:     false,
    ie10:        false,
    ie11:        { val: true, note_id: 'map-constructor' },
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    chrome30:    { val: true, note_id: 'map-constructor' },
    chrome33:    { val: true, note_id: 'map-constructor' },
    chrome34:    { val: true, note_id: 'map-constructor' },
    chrome35:    { val: true, note_id: 'map-constructor' },
    chrome37:    { val: true, note_id: 'map-constructor' },
    chrome39:    { val: true, note_id: 'map-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  { val: true, note_id: 'map-constructor' },
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
    closure:     false,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'weakmap-constructor',
      note_html: 'WeakMap (and, except in Firefox, WeakSet) constructor arguments, such as <code>new WeakMap([[key, val]])</code> or <code>new WeakSet([obj1, obj2])</code>, are not supported.'
    },
    firefox11:   { val: true, note_id: 'weakmap-constructor' },
    firefox13:   { val: true, note_id: 'weakmap-constructor' },
    firefox16:   { val: true, note_id: 'weakmap-constructor' },
    firefox17:   { val: true, note_id: 'weakmap-constructor' },
    firefox18:   { val: true, note_id: 'weakmap-constructor' },
    firefox23:   { val: true, note_id: 'weakmap-constructor' },
    firefox24:   { val: true, note_id: 'weakmap-constructor' },
    firefox25:   { val: true, note_id: 'weakmap-constructor' },
    firefox27:   { val: true, note_id: 'weakmap-constructor' },
    firefox28:   { val: true, note_id: 'weakmap-constructor' },
    firefox29:   { val: true, note_id: 'weakmap-constructor' },
    firefox30:   { val: true, note_id: 'weakmap-constructor' },
    firefox31:   { val: true, note_id: 'weakmap-constructor' },
    firefox32:   { val: true, note_id: 'weakmap-constructor' },
    firefox33:   { val: true, note_id: 'weakmap-constructor' },
    firefox34:   { val: true, note_id: 'weakmap-constructor' },
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'weakmap-constructor' },
    chrome30:    { val: true, note_id: 'weakmap-constructor' },
    chrome33:    { val: true, note_id: 'weakmap-constructor' },
    chrome34:    { val: true, note_id: 'weakmap-constructor' },
    chrome35:    { val: true, note_id: 'weakmap-constructor' },
    chrome37:    { val: true, note_id: 'weakmap-constructor' },
    chrome39:    { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  { val: true, note_id: 'weakmap-constructor' },
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    { val: true, note_id: 'weakmap-constructor' },
    chrome34:    { val: true, note_id: 'weakmap-constructor' },
    chrome35:    { val: true, note_id: 'weakmap-constructor' },
    chrome37:    { val: true, note_id: 'weakmap-constructor' },
    chrome39:    { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'weakmap-constructor' },
    ios7:        false,
    ios8:        false
  }
},
{
  name: 'Proxy',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots',
  subtests: {
    '"get" handler': {
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
        ejs:         true,
        firefox18:   {
          val: true,
          note_id: 'fx-proxy-get',
          note_html: 'Firefox doesn\'t allow inheritors of a proxy (such as objects created by <code>Object.create(proxy)</code>) to trigger the proxy\'s "get" handler via the prototype chain, unless the proxied object actually does possess the named property.'
        },
        firefox23:   { val: true, note_id: 'fx-proxy-get' },
      },
    },
    '"set" handler': {
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
        ejs:         true,
        firefox18:   {
          val: true,
          note_id: 'fx-proxy-set',
          note_html: 'Firefox doesn\'t allow inheritors of a proxy (such as objects created by <code>Object.create(proxy)</code>) to trigger the proxy\'s "set" handler via the prototype chain.'
        },
        firefox23:   { val: true, note_id: 'fx-proxy-set' },
      },
    },
    '"has" handler': {
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
        ejs:         true,
        firefox18:   true,
      },    
    },
    '"deleteProperty" handler': {
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
        ejs:         true,
        firefox18:   true,
      },    
    },
    '"getOwnPropertyDescriptor" handler': {
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
        ejs:         true,
        firefox18:   {
          val: false,
          note_id: 'fx-proxy-getown',
          note_html: 'From Firefox 18 up to 29, the <code>getOwnPropertyDescriptor</code> handler can only report non-existent properties if the proxy target is non-extensible rather than extensible'
        },
        firefox23:   { val: false, note_id: 'fx-proxy-getown' },
        firefox30:   true,
      },    
    },
    '"defineProperty" handler': {
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
        ejs:         true,
        firefox18:   true,
      },    
    },
    '"getPrototypeOf" handler': {
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
        ejs:         true,
      },
    },
    '"setPrototypeOf" handler': {
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
        ejs:         true,
      },
    },
    '"isExtensible" handler': {
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
        firefox31:   true,
      },
    },
    '"preventExtensions" handler': {
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
        firefox23:   true,
      },
    },
    '"enumerate" handler': {
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
      },
    },
    '"ownKeys" handler': {
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
        firefox18:   {
          val: false,
          note_id: 'fx-proxy-ownkeys',
          note_html: 'Available from Firefox 18 up to 33 as the draft standard <code>keys</code> handler'
        },
        firefox23:   { val: false, note_id: 'fx-proxy-ownkeys' },
        firefox33:   true,
      },
    },
    '"apply" handler': {
      exec: function () {/*
        var proxied = function(){};
        var passed = false;
        var host = {
          method: new Proxy(proxied, { 
            apply: function (t, thisArg, args) {
              passed = t === proxied && thisArg === host && args + "" === "foo,bar";
            }
          })
        };
        host.method("foo", "bar");
        return passed;
      */},
      res: {
        firefox18:   true,
      },
    },
    '"construct" handler': {
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
        firefox18:   true,
      },
    },
    '"Proxy.revocable': {
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
        firefox34:   true,
      },
    },
  },
},
{
  name: 'Reflect',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection',
  subtests: (function(){
    var methods = {
    'apply':                      { ejs:         true, },
    'construct':                  { ejs:         true, },
    'defineProperty':             { ejs:         true, },
    'deleteProperty':             { ejs:         true, },
    'getOwnPropertyDescriptor':   { ejs:         true, },
    'getPrototypeOf':             { ejs:         true, },
    'has':                        { ejs:         true, },
    'isExtensible':               { ejs:         true, },
    'set':                        { ejs:         true, },
    'setPrototypeOf':             { ejs:         true, },
    };
    var eqFn = ' === "function"';
    var obj = {};
    for (var m in methods) {
      obj['Reflect.' + m] = {
        exec: eval('0,function(){/*\n  return typeof Reflect.' +
          m + eqFn + ';\n*/}'),
        res: methods[m]
      }
    };
    return obj;
  }()),
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
    closure:     true,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
    ie10:        true,
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
    firefox34:   false,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    safari71_8:  true,
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
  subtests: {
    'array destructuring': {
      exec: function(){/*
        var [a, , [b], c] = [5, null, [6]];
        return a === 5 && b === 6 && c === undefined;
      */},
      res: (temp.destructuringResults = {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  {
          val: true,
          note_id: 'fx-destructuring',
          note_html: 'Safari 7.1, Safari 8 and iOS 8 fail to support multiple destructurings in a single <code>var</code> or <code>let</code> statement - for example, <code>var [a,b] = [5,6], {c,d} = {c:7,d:8};</code>'
        },
        webkit:      true,
        ios8:        { val: true, note_id: 'fx-destructuring' },
      }),
    },
    'object destructuring': {
      exec: function(){/*
        var {c, x:d, e} = {c:7, x:8};
        return c === 7 && d === 8 && e === undefined;
      */},
      res: temp.destructuringResults,
    },
    'combined destructuring': {
      exec: function(){/*
        var [e, {x:f, g}] = [9, {x:10}];
        return e === 9 && f === 10 && g === undefined;
      */},
      res: temp.destructuringResults,
    },
    'destructuring parameters': {
      exec: function(){/*
        return (function({a, x:b, y:e}, [c, d]) {
          return a === 1 && b === 2 && c === 3 &&
            d === 4 && e === undefined;
        }({a:1, x:2},[3, 4]));
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'destructuring rest': {
      exec: function(){/*
        var [a, ...b] = [3, 4, 5];
        var [c, ...d] = [6];
        return a === 3 && b instanceof Array && (b + "") === "4,5" &&
           c === 6 && d instanceof Array && d.length === 0;
      */},
      res: {
        tr:          true,
        closure:     true,
        firefox34:   true,
      },
    },
    'destructuring defaults': {
      exec: function(){/*
        var {a = 1, b = 0, c = 3} = {b:2, c:undefined};
        return a === 1 && b === 2 && c === 3;
      */},
      res: {
        tr:          true,
        closure:     true,
      },
    },
    'defaults in parameters': {
      exec: function(){/*
        return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}) {
          return a === 1 && b === 2 && c === 3 && d === 4 && 
            e === 5 && f === undefined;
        }({b:2, c:undefined, x:4}));
      */},
      res: {
        tr:          true,
        closure:     true,
      },
    },
  },
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
    closure:     false,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
  name: 'Object.assign',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign',
  exec: function () {
    return typeof Object.assign === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  exec: function () {/*
    var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
    var A = function(){};
    
    return (desc
        && "get" in desc
        && "set" in desc
        && desc.configurable
        && !desc.enumerable
        && (new A()).__proto__ === A.prototype);
  */},
  res: {
    tr:          false,
    ejs:         false,
    closure:     false,
    ie10:        false,
    ie11:        true,
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
    firefox34:   true,
    chrome:      true,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     true,
    safari7:     true,
    safari71_8:  true,
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
  subtests: {
    'function statements': {
      exec: function () {/*
        function foo(){};
        return foo.name === 'foo' &&
          (function(){}).name === '';
      */},
      res: (temp.legacyFunctionNameResults = {
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
      }),
    },
    'function expressions': {
      exec: function () {/*
        return (function foo(){}).name === 'foo' &&
          (function(){}).name === '';
      */},
      res: temp.legacyFunctionNameResults,
    },
    'new Function': {
      exec: function () {/*
        return (new Function).name === "anonymous";
      */},
      res: {
        firefox11:   true,
        safari51:    true,
        webkit:      true,
        rhino17:     true,
        phantom:     true,
        ios7:        true,
      },
    },
    'bound functions': {
      exec: function() {/*
        function foo() {};
        return foo.bind({}).name === "bound foo" &&
          (function(){}).bind({}).name === "bound ";
      */},
      res: {},
    },
    'variables (function)': {
      exec: function() {/*
        var foo = function() {};
        var bar = function baz() {};
        return foo.name === "foo" && bar.name === "baz";
      */},
      res: {},
    },
    'object methods (function)': {
      exec: function() {/*
        var o = { foo: function(){}, bar: function baz(){}};
        o.qux = function(){};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "qux";
      */},
      res: {},
    },
    'accessor properties': {
      exec: function() {/*
        var o = { get foo(){}, set foo(){} };
        var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
        return descriptor.get.name === "get foo" &&
               descriptor.get.name === "set foo";
      */},
      res: {},
    },
    'shorthand methods': {
      exec: function() {/*
        var o = { foo(){} };
        return o.foo.name === "foo";
      */},
      res: {},
    },
    'symbol-keyed methods': {
      exec: function() {/*
        var o = {};
        var sym = Symbol("foo");
        var sym2 = Symbol();
        
        o[sym] = function(){};
        o[sym2] = function(){};
        
        return o[sym].name === "[foo]" &&
               o[sym2].name === "";
      */},
      res: {},
    },
    'class statements': {
      exec: function() {/*
        class foo {};
        class bar { static name() {} };
        return foo.name === "foo" &&
          typeof bar.name === "function";
      */},
      res: {},
    },
    'class expressions': {
      exec: function() {/*
        return class foo {}.name === "foo" &&
          typeof class bar { static name() {} }.name === "function";
      */},
      res: {},
    },
    'variables (class)': {
      exec: function() {/*
        var foo = class {};
        var bar = class baz {};
        var qux = class { static name() {} };
        return foo.name === "foo" &&
               bar.name === "baz" &&
               typeof qux.name === "function";
      */},
      res: {},
    },
    'object methods (class)': {
      exec: function() {/*
        var o = { foo: class {}, bar: class baz {}};
        o.qux = class {};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "qux";
      */},
      res: {},
    },
    'class prototype methods': {
      exec: function() {/*
        class C { foo(){} };
        return (new C).foo.name === "foo";
      */},
      res: {},
    },
    'class static methods': {
      exec: function() {/*
        class C { static foo(){} };
        return C.foo.name === "foo";
      */},
      res: {},
    },
    'isn\'t writable, is configurable': {
      exec: function () {/*
        var descriptor = Object.getOwnPropertyDescriptor(function(){},"name");
        return descriptor.enumerable   === false &&
               descriptor.writable     === false &&
               descriptor.configurable === true;
      */},
      res: {},
    },
  },
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
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    ejs:         true,
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    safari71_8:  true,
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
    closure:     true,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  subtests: {
    'basic functionality': {
      exec: function(){/*
        var object = {};
        var symbol = Symbol();
        var value = {};
        object[symbol] = value;
        return object[symbol] === value;
      */},
      res:(temp.basicSymbolResults = {
        ejs:         true,
        chrome30:    true, // Actually Chrome 29
        nodeharmony: true,
      }),
    },
    'typeof support': {
      exec: function(){/*
        return typeof Symbol() === "symbol";
      */},
      res: temp.basicSymbolResults,
    },
    'symbol keys are hidden to pre-ES6 code': {
      exec: function(){/*
        var object = {};
        var symbol = Symbol();
        object[symbol] = 1;
        
        for (var x in object){}
        var passed = (x !== symbol);
        
        if (Object.keys && Object.getOwnPropertyNames) {
          passed &= Object.keys(object).length === 0
            && Object.getOwnPropertyNames(object).length === 0;
        }
        
        return passed;
      */},
      res: temp.basicSymbolResults,
    },
    'Object.defineProperty support': {
      exec: function(){/*
        var object = {};
        var symbol = Symbol();
        var value = {};
        
        if (Object.defineProperty) {
          Object.defineProperty(object, symbol, { value: value });
          return object[symbol] === value;
        }
        
        return passed;
      */},
      res: temp.basicSymbolResults,
    },
    'cannot coerce to string or number': {
      exec: function(){/*
        var symbol = Symbol();
        
        try {
          symbol + "";
          return false;
        }
        catch(e) {}
        
        try {
          symbol + 0;
          return false;
        } catch(e) {}
        
        return true;
      */},
      res: temp.basicSymbolResults,
    },
    'can convert with String()': {
      exec: function(){/*
        return String(Symbol("foo")) === "Symbol(foo)";
      */},
      res: {},
    },
    'new Symbol() throws': {
      exec: function(){/*
        var symbol = Symbol();
        try {
          new Symbol();
        } catch(e) {
          return true;
        }
      */},
      res: {
        chrome35:   true,
      },
    },
    'Object(symbol)': {
      exec: function(){/*
        var symbol = Symbol();
        var symbolObject = Object(symbol);
        
        return typeof symbolObject === "object" &&
          symbolObject == symbol &&
          symbolObject.valueOf() === symbol;
      */},
      res: {
        chrome30:   true,
        chrome35:   false,
      },
    },
  },
},
{
  name: 'global symbol registry',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.for',
  exec: function() {/*
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
  */},
  res: {
    tr:          false,
    ejs:         true,
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  name: 'well-known symbols',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  subtests: {
    'Symbol.hasInstance': {
      exec: function() {/*
        var passed = false;
        var obj = { foo: true };
        var C = function(){};
        C[Symbol.hasInstance] = function(inst) { passed = inst.foo; return false; };
        obj instanceof C;
        return passed;
      */},
      res: {
       ejs:         true,
      },
    },
    'Symbol.isConcatSpreadable': {
      exec: function() {/*
        var a = [], b = [];
        b[Symbol.isConcatSpreadable] = false;
        a = a.concat(b);
        return a[0] === b;
      */},
      res: {
       ejs:         true,
      },
    },
    'Symbol.isRegExp': {
      exec: function() {/*
        return RegExp.prototype[Symbol.isRegExp] === true;
      */},
      res: {
      },
    },
    'Symbol.iterator': {
      exec: function() {/*
        var a = 0, b = {};
        b[Symbol.iterator] = function() {
          return {
            next: function() {
              return {
                done: a++ === 1,
                value: "foo"
              };
            }
          };
        };
        var c;
        for (c of b) {}
        return c === "foo";
      */},
      res: {
        chrome38:    true,
        ejs:         true,
      },
    },
    'Symbol.toPrimitive': {
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
      },
    },
    'Symbol.toStringTag': {
      exec: function() {/*
        var a = {};
        a[Symbol.toStringTag] = "foo";
        return (a + "") === "[object foo]";
      */},
      res: {
        ejs:         true,
      },
    },
    'Symbol.unscopables': {
      exec: function() {/*
        var a = { foo: 1, bar: 2 };
        a[Symbol.unscopables] = { bar: true };
        with (a) {
          return foo === 1 && typeof bar === "undefined";
        }
      */},
      res: {
        chrome38:    true,
      },
    },
  },
},
{
  name: 'RegExp.prototype methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype',
  subtests: {
    'RegExp.prototype.match': {
      exec: function () {
        return typeof RegExp.prototype.match === 'function';
      },
      res: {},
    },
    'RegExp.prototype.replace': {
      exec: function () {
        return typeof RegExp.prototype.replace === 'function';
      },
      res: {},
    },
    'RegExp.prototype.split': {
      exec: function () {
        return typeof RegExp.prototype.split === 'function';
      },
      res: {},
    },
    'RegExp.prototype.search': {
      exec: function () {
        return typeof RegExp.prototype.search === 'function';
      },
      res: {},
    },
  }
},
// As this one is Annex B, it is separate from the above.
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
    closure:     false,
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
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    safari71_8:  true,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    ejs:         true,
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
  name: 'Array.prototype.keys',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.keys',
  exec: function () {
    return typeof Array.prototype.keys === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     false,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  true,
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
    closure:     false,
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
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
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
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
    closure:     false,
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
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    chrome39:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    safari71_8:  false,
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
  name: 'Math methods',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math',
  subtests: (function(){
    var methods = {
      'clz32': {
        ejs:         true,
        firefox31:   true,
        chrome35:    true,
        nodeharmony: true,
      },
      'imul': {
        ejs:         true,
        firefox23:   true,
        chrome21dev: {
          val: true,
          note_id: 'chromu-imul',
          note_html: 'Available since Chrome 28'
        },
        chrome30:    true,
        safari7:     true,
        webkit:      true,
        konq49:      true,
        ios7:        true,
        nodeharmony: true,
      },
      'sign': {
        ejs:         true,
        firefox25:   true,
        chrome33:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
      'log10': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'log2': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'log1p': {
        ejs:         true,
        firefox25:   true,
        chrome35:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'expm1': {
        ejs:         true,
        firefox25:   true,
        chrome35:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'cosh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'sinh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'tanh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'acosh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'asinh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'atanh': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'hypot': {
        ejs:         true,
        firefox27:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'trunc': {
        ejs:         true,
        firefox25:   true,
        chrome33:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'fround': {
        ejs:         true,
        firefox27:   {
          val: true,
          note_id: 'fx-fround',
          note_html: 'Available since Firefox 26'
        },
        firefox28:   true,
        chrome35:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'cbrt': {
        ejs:         true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
        ios8:        true,
      },
    };
    var eqFn = ' === "function"';
    var obj = {};
    for (var m in methods) {
      obj['Math.' + m] = {
        exec: eval('0,function(){/*\n  return typeof Math.' +
          m + eqFn + ';\n*/}'),
        res: methods[m]
      }
    };
    return obj;
  }()),
  separator: 'after'
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.filter(function(e) { return !e.annex_b })
        .concat(exports.tests.filter(function(e) { return  e.annex_b }));
