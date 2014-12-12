// exports browsers and tests

Object.assign = require('object-assign');

var temp = {};

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur',
    short: 'Traceur',
    obsolete: false,
    platformtype: 'compiler',
  },
  _6to5: {
    full: '6to5',
    short: '6to5 +<br>polyfill',
    obsolete: false,
    platformtype: 'compiler',
  },
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    obsolete: false,
    platformtype: 'compiler',
  },
  closure: {
    full: 'Closure Compiler v20141120',
    short: 'Closure<br>Compiler',
    obsolete: false,
    platformtype: 'compiler',
  },
  jsx: {
    full: 'JSX',
    short: 'JSX',
    obsolete: false,
    platformtype: 'compiler',
    note_id: 'jsx-flag',
    note_html: 'Have to be enabled via <code>harmony</code> option'
  },
  typescript: {
    full: 'TypeScript 1.3',
    short: 'TypeScript',
    obsolete: false,
    platformtype: 'compiler',
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
  ie11tp: {
    full: 'Internet Explorer',
    short: 'IE<br>Technical<br>Preview',
    obsolete: false,
    note_id: 'ie-experimental-flag',
    note_html: 'Have to be enabled via "Experimental Web Platform Features" flag'
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
    short: 'FF 32',
    obsolete: true
  },
  firefox33: {
    full: 'Firefox',
    short: 'FF 33',
    obsolete: true
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34'
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35'
  },
  firefox36: {
    full: 'Firefox',
    short: 'FF 36'
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
  chrome31: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;31,<br>OP&nbsp;18',
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
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome36: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;36,<br>OP&nbsp;23',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome37: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;37,<br>OP&nbsp;24',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome38: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;38,<br>OP&nbsp;25',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome39: {
    full: 'Chrome, Opera',
    short: 'CH 39,<br>OP&nbsp;26',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  chrome40: {
    full: 'Chrome, Opera',
    short: 'CH 40,<br>OP&nbsp;27',
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
    short: 'SF 7.1,<br>SF 8',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r176637',
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
    platformtype: 'engine',
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH',
    platformtype: 'engine',
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false, // current version
    platformtype: 'engine',
  },
  nodeharmony: {
    full: 'Node 0.11.14 harmony',
    short: 'Node<br>harmony',
    obsolete: false, // current version
    platformtype: 'engine',
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  },
  ios7: {
    full: 'iOS Safari',
    short: 'iOS7',
    platformtype: 'mobile',
  },
  ios8: {
    full: 'iOS Safari',
    short: 'iOS8',
    platformtype: 'mobile',
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
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-arrow-function-definitions',
  subtests: {
    '0 parameters': {
      exec: function(){/*
        return (() => 5)() === 5;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
        chrome38:    true,
      },
    },
    '1 parameter, no brackets': {
      exec: function(){/*
        var b = x => x + "foo";
        return (b("fee fie foe ") === "fee fie foe foo");
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
        chrome38:    true,
      },
    },
    'multiple parameters': {
      exec: function(){/*
        var c = (v, w, x, y, z) => "" + v + w + x + y + z;
        return (c(6, 5, 4, 3, 2) === "65432");
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
        chrome38:    true,
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
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
      },
    },
    '"this" unchanged by call or apply': {
      exec: function(){/*
        var d = { x : "foo", y : function() { return () => this.x; }};
        var e = { x : "bar" };
        return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
      */},
      res: {
        tr:          true,
        closure:     true,
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        ie11tp:      true,
        firefox23:   true,
      },
    },
    'can\'t be bound, can be curried': {
      exec: function(){/*
        var d = { x : "bar", y : function() { return z => this.x + z; }};
        var e = { x : "baz" };
        return d.y().bind(e, "ley")() === "barley";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
      },
    },
    'lexical "arguments" binding': {
      exec: function(){/*
        var f = (function() { return z => arguments[0]; }(5));
        return f(6) === 5;
      */},
      res: {
        _6to5:       true,
        closure:     true,
        ie11tp:      true,
        firefox23:   true,
        firefox24:   false,
      },
    },
    'no line break between params and <code>=></code>': {
      exec: function(){/*
        return (() => {
          try { Function("x\n => 2")(); } catch(e) { return true; }
        })();
      */},
      res: {
      },
    },
    'no "prototype" property': {
      exec: function(){/*
        var a = () => 5;
        return !a.hasOwnProperty("prototype");
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
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
        _6to5:       true,
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
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox36:   true,
      }
    },
    'redefining a const is an error': {
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox36:   true,
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
        firefox36:   true,
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
        _6to5:       true,
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
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */},
      res: {
        tr:          true,
        ejs:         true,
        closure:     true,
        chrome19dev: true,
        ie11:        true,
        firefox36:   true,
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome21dev: true,
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
        firefox36:   true,
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
        _6to5:       true,
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
        let bar = 123;
        { let bar = 456; }
        return bar === 123;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: false, note_id: 'fx-let', },
      },
    },
    'for-loop statement scope': {
      exec: function(){/*
        let baz = 1;
        for(let baz = 0; false; false) {}
        return baz === 1;
      */},
      res: {
        tr:          true,
        ejs:         true,
        _6to5:       true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: false, note_id: 'fx-let', },
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
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
        _6to5:       true,
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
        let bar = 123;
        { let bar = 456; }
        return bar === 123;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: false, note_id: 'fx-let', },
        chrome19dev: true,
        nodeharmony: true,
      },
    },
    'for-loop statement scope (strict mode)': {
      exec: function(){/*
        'use strict';
        let baz = 1;
        for(let baz = 0; false; false) {}
        return baz === 1;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: false, note_id: 'fx-let', },
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
        firefox35:   { val: false, note_id: 'fx-let-tdz', },
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox16:   true,
      },
    },
    'explicit undefined defers to the default': {
      exec: function(){/*
        return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox18:   true,
      },
    },
    'defaults can refer to previous params': {
      exec: function(){/*
        return (function (a, b = a) { return b === 5; }(5));
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
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
          return true;
        }());
      */},
      res: {
      },
    },
    'separate scope': {
      exec: function(){/*
        return (function(a=function(){
          return typeof b === 'undefined';
        }){
          var b = 1;
          return a();
        }());
      */},
      res: {
        _6to5:       true,
        closure:     true,
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
    _6to5:       true,
    ejs:         true,
    closure:     true,
    jsx:         true,
    typescript:  true,
    ie10:        false,
    ie11:        false,
    ie11tp:      true,
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox27:   true,
      },
    },
    'with strings, in array literals': {
      exec: function() {/*
       return ["a", ..."bcd", "e"][3] === "d";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox17:   true,
      },
    },
    'with generic iterables, in calls': {
      exec: function () {/*
        var iterable = __createIterableObject(1, 2, 3);
        return Math.max(...iterable) === 3;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        firefox27:   true,
      },
    },
    'with generic iterables, in arrays': {
      exec: function () {/*
        var iterable = __createIterableObject("b", "c", "d");
        return ["a", ...iterable, "e"][3] === "d";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        firefox27:   true,
      },
    },
    'with instances of iterables, in calls': {
      exec: function () {/*
        var iterable = __createIterableObject(1, 2, 3);
        return Math.max(...Object.create(iterable)) === 3;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        firefox36:   true,
      },
    },
    'with instances of iterables, in arrays': {
      exec: function () {/*
        var iterable = __createIterableObject("b", "c", "d");
        return ["a", ...Object.create(iterable), "e"][3] === "d";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        firefox36:   true,
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
        _6to5:       true,
        ejs:         true,
        jsx:         true,
        closure:     true,
        ie11tp:      true,
        chrome40:    true,
      },
    },
    'is block-scoped': {
      exec: function () {/*
        class C {}
        var c1 = C;
        {
          class C {}
          var c2 = C;
        }
        return C === c1;
      */},
      res: {
        _6to5:       true,
        ie11tp:      true,
      },
    },
    'class expression': {
      exec: function () {/*
        return typeof class C {} === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        chrome40:    true,
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
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        chrome40:    true,
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
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
      },
    },
    'implicit strict mode': {
      exec: function () {/*
        var c = class C {
          static method() { return this === undefined; }
        }.method;

        return c();
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ie11tp:      true,
      },
    },
    'extends': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        return c instanceof Array
          && Array.isPrototypeOf(C)
          && Array.prototype.isPrototypeOf(C.prototype);
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     {
          val: false,
          note_id: 'compiled-extends',
          note_html: 'This compiler transforms <code>extends</code> into code that copies properties from the superclass, instead of using the prototype chain.'
        },
        jsx:         { val: false, note_id: 'compiled-extends' },
        ie11tp:      true,
        chrome40:    true,
      },
    },
    'extends null': {
      exec: function () {/*
        class C extends null {}
        var c = new C();
        return !(c instanceof Object)
          && Function.prototype.isPrototypeOf(C)
          && Object.getPrototypeOf(C.prototype) === null;
      */},
      res: {
        tr:          true,
        ejs:         true,
        ie11tp:      true,
      },
    },
  },
},
{
  name: 'super',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-super-keyword',
  subtests: {
    'in constructors': {
      exec: function() {/*
        class B extends class {
          constructor(a) { return ["foo" + a]; }
        } {
          constructor(a) { return super("bar" + a); }
        }
        return new B("baz")[0] === "foobarbaz";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        chrome40:    true,
      },
    },
    'in methods': {
      exec: function() {/*
        class B extends class {
          qux(a) { return "foo" + a; }
        } {
          qux(a) { return super.qux("bar" + a); }
        }
        return new B().qux("baz") === "foobarbaz";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
      },
    },
    'is statically bound': {
      exec: function() {/*
        class B extends class {
          qux() { return "bar"; }
        } {
          qux() { return super.qux() + this.corge; }
        }
        var obj = {
          qux: B.prototype.qux,
          corge: "ley"
        };
        return obj.qux() === "barley";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
      },
    },
  },
},
{
  name: 'object literal extensions',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  subtests: {
    'computed properties': {
      exec: function() {/*
        var x = 'y';
        return ({ [x]: 1 }).y === 1;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox34:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'shorthand properties': {
      exec: function () {/*
        var a = 7, b = 8, c = {a,b};
        return c.a === 7 && c.b === 8;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox33:   true,
        chrome40:    true,
      },
    },
    'shorthand methods': {
      exec: function() {/*
        return ({ y() { return 2; } }).y() === 2;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        ie11tp:      true,
        firefox34:   true,
        chrome39:    true,
      },
    },
  },
},
{
  name: 'hoisted block-level function declaration',
  annex_b: true,
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics',
  exec: function () {/*
    // Note: only available outside of strict mode.
    { function f() { return 1; } }
      function g() { return 1; }
    { function g() { return 2; } }
    { function h() { return 1; } }
      function h() { return 2; }

    return f() === 1 && g() === 2 && h() === 1;
  */},
  res: {
    ie11:        true,
    firefox11:   true,
    rhino17:     true,
  }
},
{
  name: '__proto__ in object literals',
  annex_b: true,
  note_id: 'proto-in-object-literals',
  note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-__proto__-property-names-in-object-initializers',
  subtests: {
    'basic support': {
      exec: function() {/*
        return { __proto__ : [] } instanceof Array
          && !({ __proto__ : null } instanceof Object);
      */},
      res: {
        ie11:        true,
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
      },
    },
    'multiple __proto__ is an error': {
      exec: function() {/*
        try {
          eval("({ __proto__ : [], __proto__: {} })");
        }
        catch(e) {
          return true;
        }
      */},
      res: {
        firefox35:    true,
      },
    },
    'not a computed property': {
      exec: function() {/*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        var a = "__proto__";
        return !({ [a] : [] } instanceof Array);
      */},
      res: {
        firefox34:    true,
        safari71_8:   true,
        webkit:       true,
        ios8:         true,
      },
    },
    'not a shorthand property': {
      exec: function() {/*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        var __proto__ = [];
        return !({ __proto__ } instanceof Array);
      */},
      res: {
        firefox35:    true,
      },
    },
    'not a shorthand method': {
      exec: function() {/*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        return !({ __proto__(){} } instanceof Function);
      */},
      res: {
        firefox35:    true,
      },
    },
  },
},
{
  name: 'for..of loops',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-for-in-and-for-of-statements',
  subtests: {
    'with arrays': {
      exec: function () {/*
        var arr = [5];
        for (var item of arr)
          return item === 5;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox13:   true,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'with strings': {
      exec: function () {/*
        var str = "";
        for (var item of "foo")
          str += item;
        return str === "foo";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox17:   true,
        chrome38:    true,
      },
    },
    'with generic iterables': {
      exec: function () {/*
        var result = "";
        var iterable = __createIterableObject(1, 2, 3);
        for (var item of iterable) {
          result += item;
        }
        return result === "123";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    'with instances of generic iterables': {
      exec: function () {/*
        var result = "";
        var iterable = __createIterableObject(1, 2, 3);
        for (var item of Object.create(iterable)) {
          result += item;
        }
        return result === "123";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ie11tp:      true,
        firefox36:   true,
        chrome35:    true,
      },
    },
  },
},
{
  name: 'generators',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions',
  subtests: {
    'basic functionality': {
      exec: function() {/*
        function * generator(){
          yield 5; yield 6;
        };
        var iterator = generator();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    'correct \"this\" binding': {
      exec: function() {/*
        function * generator(){
          yield this.x; yield this.y;
        };
        var iterator = { g: generator, x: 5, y: 6 }.g();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    'sending': {
      exec: function() {/*
        var sent;
        function * generator(){
          sent = [yield 5, yield 6];
        };
        var iterator = generator();
        iterator.next();
        iterator.next("foo");
        iterator.next("bar");
        return sent[0] === "foo" && sent[1] === "bar";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    '%GeneratorPrototype%': {
      exec: function() {/*
        function * generatorFn(){}
        var ownProto = Object.getPrototypeOf(generatorFn());
        var passed = ownProto === generatorFn.prototype;
        
        var sharedProto = Object.getPrototypeOf(ownProto);
        passed &= sharedProto !== Object.prototype &&
          sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
          sharedProto.hasOwnProperty('next');
        
        return passed;
      */},
      res: {
        tr:          true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    '%GeneratorPrototype%.throw': {
      exec: function() {/*
        var passed = false;
        function * generator(){
          try {
            yield 5; yield 6;
          } catch(e) {
            passed = (e === "foo");
          }
        };
        var iterator = generator();
        iterator.next();
        iterator.throw("foo");
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    '%GeneratorPrototype%.return': {
      exec: function() {/*
        function * generator(){
          yield 5; yield 6;
        };
        var iterator = generator();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.return("quxquux");
        passed    &= item.value === "quxquux" && item.done === true;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
      },
    },
    'yield operator precedence': {
      exec: function() {/*
        var passed;
        function * generator(){
          passed = yield 0 ? true : false;
        };
        var iterator = generator();
        iterator.next();
        iterator.next(true);
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    'yield *, arrays': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * [5, 6];
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        firefox27:   true,
        chrome38:    true,
      },
    },
    'yield *, strings': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * "56";
        }());
        var item = iterator.next();
        var passed = item.value === "5" && item.done === false;
        item = iterator.next();
        passed    &= item.value === "6" && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        firefox27:   true,
        chrome38:    true,
      },
    },
    'yield *, generic iterables': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * __createIterableObject(5, 6, 7);
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 7 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: true,
        nodeharmony: true,
      },
    },
    'yield *, instances of iterables': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * Object.create(__createIterableObject(5, 6, 7));
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 7 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        firefox36:   true,
        chrome35:    true,
      },
    },
    'shorthand generator methods': {
      exec: function() {/*
        var o = {
          * generator() {
            yield 5; yield 6;
          },
        };
        var iterator = o.generator();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        chrome39:    true,
        firefox35:   true,
      },
    },
  },
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        _6to5:       true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        ejs:         true,
        firefox36:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'binary supported by Number()': {
      exec: function () {/*
        return Number('0b1') === 1;
      */},
      res: {
        ejs:         true,
        firefox36:   true,
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
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        ie11tp:      true,
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
        _6to5:       true,
        jsx:         true,
        closure:     true,
        firefox34:   true,
      },
    }
  },
},
{
  name: 'RegExp "y" and "u" flags',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky',
  subtests: {
    '"y" flag': {
      exec: function () {/*
        var re = new RegExp('\\w');
        var re2 = new RegExp('\\w', 'y');
        re.exec('xy');
        re2.exec('xy');
        return (re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y');
      */},
      res: {
        firefox11:   true,
        chrome39:    true,
      },
    },
    '"u" flag': {
      exec: function() {/*
        return "𠮷".match(/./u)[0].length === 2;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ie11tp:      true,
      },
    },
  },
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
        ie11tp:      true,
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
    '.from':                  { ie11tp: true, },
    '.of':                    { ie11tp: true, },
    '.prototype.subarray':    {
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
    },
    '.prototype.join':        { ie11tp: true, },
    '.prototype.indexOf':     { ie11tp: true, },
    '.prototype.lastIndexOf': { ie11tp: true, },
    '.prototype.slice':       { ie11tp: true, },
    '.prototype.every':       { ie11tp: true, },
    '.prototype.filter':      { ie11tp: true, },
    '.prototype.forEach':     { ie11tp: true, chrome40: true },
    '.prototype.map':         { ie11tp: true, },
    '.prototype.reduce':      { ie11tp: true, },
    '.prototype.reduceRight': { ie11tp: true, },
    '.prototype.reverse':     { ie11tp: true, },
    '.prototype.some':        { ie11tp: true, },
    '.prototype.sort':        { ie11tp: true, },
    '.prototype.copyWithin':  { ie11tp: true, firefox34: true },
    '.prototype.find':        { ie11tp: true, },
    '.prototype.findIndex':   { ie11tp: true, },
    '.prototype.fill':        { ie11tp: true, },
    '.prototype.keys':        { ie11tp: true, chrome38: true },
    '.prototype.values':      { ie11tp: true, chrome38: true },
    '.prototype.entries':     { ie11tp: true, chrome38: true },
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
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var key = {};
        var map = new Map();

        map.set(key, 123);

        return map.has(key) && map.get(key) === 123;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'constructor arguments': {
      exec: function () {/*
        var key1 = {};
        var key2 = {};
        var map = new Map([[key1, 123], [key2, 456]]);

        return map.has(key1) && map.get(key1) === 123 &&
               map.has(key2) && map.get(key2) === 456;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome38:    true,
      },
    },
    'Map.prototype.set returns this': {
      exec: function () {/*
        var map = new Map();
        return map.set(0, 0) === map;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ie11tp:      true,
        firefox33:   true,
        chrome38:    true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
      },
    },
    '-0 key converts to +0': {
      exec: function () {/*
        var map = new Map();
        map.set(-0, "foo");
        var k;
        map.forEach(function (value, key) {
          k = 1 / key;
        });
        return k === Infinity && map.get(+0) == "foo";
      */},
      res: {
        _6to5:       true,
        ie11tp:      true,
        firefox29:   true,
        chrome39:    true,
        nodeharmony: true,
      },
    },
    'Map.prototype.size': {
      exec: function () {/*
        var key = {};
        var map = new Map();

        map.set(key, 123);

        return map.size === 1;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Map.prototype.delete': {
      exec: function () {/*
        return typeof Map.prototype.delete === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Map.prototype.clear': {
      exec: function () {/*
        return typeof Map.prototype.clear === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Map.prototype.forEach': {
      exec: function () {/*
        return typeof Map.prototype.forEach === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox25:   true,
        chrome36:    true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Map.prototype.keys': {
      exec: function () {/*
        return typeof Map.prototype.keys === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox23:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome37:    true,
      },
    },
    'Map.prototype.values': {
      exec: function () {/*
        return typeof Map.prototype.values === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox23:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome36:    true,
      },
    },
    'Map.prototype.entries': {
      exec: function () {/*
        return typeof Map.prototype.entries === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox23:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome36:    true,
      },
    },
  },
},
{
  name: 'Set',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var obj = {};
        var set = new Set();

        set.add(123);
        set.add(123);

        return set.has(123);
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'constructor arguments': {
      exec: function () {/*
        var obj1 = {};
        var obj2 = {};
        var set = new Set([obj1, obj2]);

        return set.has(obj1) && set.has(obj2);
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome38:    true,
      },
    },
    'Set.prototype.add returns this': {
      exec: function () {/*
        var set = new Set();
        return set.add(0) === set;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ie11tp:      true,
        firefox33:   true,
        chrome38:    true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
      },
    },
    '-0 key converts to +0': {
      exec: function () {/*
        var set = new Set();
        set.add(-0);
        var k;
        set.forEach(function (value) {
          k = 1 / value;
        });
        return k === Infinity && set.has(+0);
      */},
      res: {
        _6to5:       true,
        ie11tp:      true,
        firefox29:   true,
        chrome39:    true,
        nodeharmony: true,
      },
    },
    'Set.prototype.size': {
      exec: function () {/*
        var obj = {};
        var set = new Set();

        set.add(123);
        set.add(123);
        set.add(456);

        return set.size === 2;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Set.prototype.delete': {
      exec: function () {/*
        return typeof Set.prototype.delete === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Set.prototype.clear': {
      exec: function () {/*
        return typeof Set.prototype.clear === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Set.prototype.forEach': {
      exec: function () {/*
        return typeof Set.prototype.forEach === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11:        true,
        firefox25:   true,
        chrome36:    true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Set.prototype.keys': {
      exec: function () {/*
        return typeof Set.prototype.keys === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox24:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome38:    true,
      },
    },
    'Set.prototype.values': {
      exec: function () {/*
        return typeof Set.prototype.values === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox24:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome37:    true,
      },
    },
    'Set.prototype.entries': {
      exec: function () {/*
        return typeof Set.prototype.entries === "function";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox24:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        chrome37:    true,
      },
    },
  },
},
{
  name: 'WeakMap',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var key = {};
        var weakmap = new WeakMap();

        weakmap.set(key, 123);

        return weakmap.has(key) && weakmap.get(key) === 123;
      */},
      res: {
        ie11:        true,
        firefox11:   true,
        chrome21dev: true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'constructor arguments': {
      exec: function () {/*
        var key1 = {};
        var key2 = {};
        var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

        return weakmap.has(key1) && weakmap.get(key1) === 123 &&
               weakmap.has(key2) && weakmap.get(key2) === 456;
      */},
      res: {
        ie11tp:      true,
        firefox36:   true,
        chrome38:    true,
      },
    },
    'WeakMap.prototype.set returns this': {
      exec: function () {/*
        var weakmap = new WeakMap();
        var key = {};
        return weakmap.set(key, 0) === weakmap;
      */},
      res: {
        ie11tp:      true,
        chrome38:    true,
        firefox33:   true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
      },
    },
    'WeakMap.prototype.delete': {
      exec: function () {/*
        return typeof WeakMap.prototype.delete === "function";
      */},
      res: {
        ejs:         true,
        ie11:        true,
        firefox11:   true,
        chrome21dev: true,
        safari71_8:  true,
        ios8:        true,
        webkit:      true,
        nodeharmony: true,
      },
    },
  },
},
{
  name: 'WeakSet',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakset-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var obj1 = {}, obj2 = {};
        var weakset = new WeakSet();

        weakset.add(obj1);
        weakset.add(obj1);

        return weakset.has(obj1);
      */},
      res: {
        ie11tp:      true,
        firefox34:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'constructor arguments': {
      exec: function () {/*
        var obj1 = {}, obj2 = {};
        var weakset = new WeakSet([obj1, obj2]);

        return weakset.has(obj1) && weakset.has(obj2);
      */},
      res: {
        ie11tp:      true,
        firefox34:   true,
        chrome38:    true,
      },
    },
    'WeakSet.prototype.add returns this': {
      exec: function () {/*
        var weakset = new WeakSet();
        var obj = {};
        return weakset.add(obj) === weakset;
      */},
      res: {
        ie11tp:      true,
        chrome38:    true,
        firefox34:   true,
      },
    },
    'WeakSet.prototype.delete': {
      exec: function () {/*
        return typeof WeakSet.prototype.delete === "function";
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
        firefox34:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
  },
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
        ie11tp:      true,
        firefox18:   true,
      },
    },
    '"get" handler, instances of proxies': {
      exec: function () {/*
        var proxied = { };
        var proxy = Object.create(new Proxy(proxied, {
          get: function (t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
          }
        }));
        return proxy.foo === 5;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
        firefox18:   {
          val: false,
          note_id: 'fx-proxy-get',
          note_html: 'Firefox doesn\'t allow a proxy\'s "get" handler to be triggered via the prototype chain, unless the proxied object does possess the named property (or the proxy\'s "has" handler reports it as present).'
        },
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
        ie11tp:      true,
        firefox18:   true,
      },
    },
    '"set" handler, instances of proxies': {
      exec: function () {/*
        var proxied = { };
        var passed = false;
        var proxy = Object.create(new Proxy(proxied, {
          set: function (t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
          }
        }));
        proxy.foo = "bar";
        return passed;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
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
        ie11tp:      true,
        firefox18:   true,
      },
    },
    '"has" handler, instances of proxies': {
      exec: function () {/*
        var proxied = {};
        var passed = false;
        "foo" in Object.create(new Proxy(proxied, {
          has: function (t, k) {
            passed = t === proxied && k === "foo";
          }
        }));
        return passed;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
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
        ie11tp:      true,
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
        ie11tp:      true,
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
              return true;
            }
          }),
          "foo",
          { value: 5, configurable: true }
        );
        return passed;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
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
        ie11tp:      true,
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
              return true;
            }
          }),
          newProto
        );
        return passed;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
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
        ie11tp:      true,
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
        ie11tp:      true,
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
        ie11tp:      true,
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
        ie11tp:      true,
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
        ie11tp:      true,
        firefox18:   true,
      },
    },
    'Proxy.revocable': {
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
        ie11tp:      true,
        firefox34:   true,
      },
    },
    'Array.isArray support': {
      exec: function () {/*
        return Array.isArray(new Proxy([], {}));
      */},
      res: {
        firefox18: true,
      },
    },
    'JSON.stringify support': {
      exec: function () {/*
        return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
      */},
      res: {
        firefox18: true,  // a bug in FF18
        firefox23: false,
      },
    },
  },
},
{
  name: 'Reflect',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection',
  subtests: {
    'Reflect.get': {
      exec: function() {/*
        return Reflect.get({ qux: 987 }, "qux") === 987;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.set': {
      exec: function() {/*
        var obj = {};
        Reflect.set(obj, "quux", 654);
        return obj.quux === 654;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.has': {
      exec: function() {/*
        return Reflect.has({ qux: 987 }, "qux");
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.deleteProperty': {
      exec: function() {/*
        var obj = { bar: 456 };
        Reflect.deleteProperty(obj, "bar");
        return !("bar" in obj);
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.getOwnPropertyDescriptor': {
      exec: function() {/*
        var obj = { baz: 789 };
        var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
        return desc.value === 789 &&
          desc.configurable && desc.writable && desc.enumerable;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.defineProperty': {
      exec: function() {/*
        var obj = {};
        Reflect.defineProperty(obj, "foo", { value: 123 });
        return obj.foo === 123;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.getPrototypeOf': {
      exec: function() {/*
        return Reflect.getPrototypeOf([]) === Array.prototype;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.setPrototypeOf': {
      exec: function() {/*
        var obj = {};
        Reflect.setPrototypeOf(obj, Array.prototype);
        return obj instanceof Array;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.isExtensible': {
      exec: function() {/*
        return Reflect.isExtensible({}) &&
          !Reflect.isExtensible(Object.preventExtensions({}));
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.preventExtensions': {
      exec: function() {/*
        var obj = {};
        Reflect.preventExtensions(obj);
        return !Object.isExtensible(obj);
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.enumerate': {
      exec: function() {/*
        var obj = { foo: 1, bar: 2 };
        var iterator = Reflect.enumerate(obj);

        var item = iterator.next();
        var passed = item.value === "foo" && item.done === false;
        item = iterator.next();
        passed    &= item.value === "bar" && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.ownKeys': {
      exec: function() {/*
        var obj = { foo: 1, bar: 2 };
        return Reflect.ownKeys(obj) + "" === "foo,bar";
      */},
      res: {
        ejs:         true,
      },
    },
    'Reflect.apply': {
      exec: function() {/*
        return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
    'Reflect.construct': {
      exec: function() {/*
        return Reflect.construct(function(a, b, c) {
          this.qux = a + b + c;
        }, ["foo", "bar", "baz"]).qux === "foobarbaz";
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
      },
    },
  },
},
{
  name: 'block-level function declaration',
  note_id: 'block-level-function',
  note_html: 'Note that prior to ES6, it was <a href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">recommended</a> that ES5 implementations forbid block-level declarations in strict mode.',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-functiondeclarationinstantiation',
  exec: function () {/*
    'use strict';
    function f() { return 1; }
    {
      function f() { return 2; }
    }
    return f() === 1;
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
  name: 'destructuring',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment',
  subtests: {
    'with arrays': {
      exec: function(){/*
        var [a, , [b], c] = [5, null, [6]];
        return a === 5 && b === 6 && c === undefined;
      */},
      res: (temp.destructuringResults = {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      }),
    },
    'with strings': {
      exec: function(){/*
        var [a, b, c] = "bar";
        return a === "b" && b === "a" && c === "r";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'with generic iterables': {
      exec: function(){/*
        var iterable = __createIterableObject(1, 2, 3);
        var [a, b, c] = iterable;
        return a === 1 && b === 2 && c === 3;
      */},
      res: {
        firefox34:    true,
        _6to5:        true,
      },
    },
    'with instances of generic iterables': {
      exec: function(){/*
        var iterable = __createIterableObject(1, 2, 3);
        var [a, b, c] = Object.create(iterable);
        return a === 1 && b === 2 && c === 3;
      */},
      res: {
        _6to5:        true,
        firefox36:   true,
      },
    },
    'with objects': {
      exec: function(){/*
        var {c, x:d, e} = {c:7, x:8};
        return c === 7 && d === 8 && e === undefined;
      */},
      res: temp.destructuringResults,
    },
    'multiples in a single var statement': {
      exec: function() {/*
        var [a,b] = [5,6], {c,d} = {c:7,d:8};
        return a === 5 && b === 6 && c === 7 && d === 8;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        webkit:      true,
      },
    },
    'nested': {
      exec: function(){/*
        var [e, {x:f, g}] = [9, {x:10}];
        return e === 9 && f === 10 && g === undefined;
      */},
      res: temp.destructuringResults,
    },
    'in parameters': {
      exec: function(){/*
        return (function({a, x:b, y:e}, [c, d]) {
          return a === 1 && b === 2 && c === 3 &&
            d === 4 && e === undefined;
        }({a:1, x:2}, [3, 4]));
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'in for-in loop heads': {
      exec: function(){/*
        for(var [i, j, k] in { qux: 1 }) {
          return i === "q" && j === "u" && k === "x";
        }
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'in for-of loop heads': {
      exec: function(){/*
        for(var [i, j, k] of [[1,2,3]]) {
          return i === 1 && j === 2 && k === 3;
        }
      */},
      res: {
        tr:          true,
        _6to5:       true,
        closure:     true,
        firefox13:   true,
        safari71_8:  true,
        webkit:      true,
        ios8:        true,
      },
    },
    'rest': {
      exec: function(){/*
        var [a, ...b] = [3, 4, 5];
        var [c, ...d] = [6];
        return a === 3 && b instanceof Array && (b + "") === "4,5" &&
           c === 6 && d instanceof Array && d.length === 0;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        jsx:         true,
        closure:     true,
        firefox34:   true,
      },
    },
    'nested rest': {
      exec: function(){/*
        var a = [1, 2, 3], first, last;
        [first, ...[a[2], last]] = a;
        return first === 1 && last === 3 && (a + "") === "1,2,2";
      */},
      res: {
        tr:           true,
        _6to5:        true,
      },
    },
    'defaults': {
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
  exec: function () {/*
    return typeof Promise !== 'undefined' &&
           typeof Promise.all === 'function';
  */},
  res: {
    tr:          true,
    _6to5:       true,
    ejs:         true,
    closure:     false,
    ie10:        false,
    ie11:        false,
    ie11tp:      true,
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
  name: 'Object static methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-object-constructor',
  subtests: {
    'Object.assign': {
      exec: function () {/*
        var o = Object.assign({a:true}, {b:true}, {c:true});
        return "a" in o && "b" in o && "c" in o;
      */},
      res: {
        tr:          true,
        ejs:         true,
        _6to5:       true,
        firefox34:   true,
      },
    },
    'Object.is': {
      exec: function () {/*
        return typeof Object.is === 'function' &&
          Object.is(NaN, NaN) &&
         !Object.is(-0, 0);
      */},
      res: {
        tr:          true,
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
        firefox23:   true,
        chrome19dev: true,
        konq49:      true,
        node:        true,
        nodeharmony: true,
      },
    },
    'Object.getOwnPropertySymbols': {
      exec: function () {/*
        var o = {};
        var sym = Symbol();
        o[sym] = "foo";
        return Object.getOwnPropertySymbols(o)[0] === sym;
      */},
      res: {
        tr:          true,
        ejs:         true,
        ie11tp:      true,
        firefox36:   true,
        chrome34:    true,
        nodeharmony: true,
      },
    },
    'Object.setPrototypeOf': {
      exec: function () {/*
        return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
      */},
      res: {
        ejs:         true,
        _6to5: {
          value: true,
          note_id: 'setprototypeof-polyfill',
          note_html: 'Requires native support for <code>Object.prototype.__proto__</code>',
        },
        ie11:        true,
        firefox31:   true,
        chrome34:    true,
        nodeharmony: true,
      },
    },
  },
},
{
  name: 'Object.prototype.__proto__',
  annex_b: true,
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.__proto__',
  subtests: {
    'get prototype': {
      exec: function() {/*
        var A = function(){};
        return (new A()).__proto__ === A.prototype;
      */},
      res: (temp.basicProtoResults = {
        ie11:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      }),
    },
    'set prototype': {
      exec: function() {/*
        var o = {};
        o.__proto__ = Array.prototype;
        return o instanceof Array;
      */},
      res: temp.basicProtoResults,
    },
    'correct property descriptor': {
      exec: function () {/*
        var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
        var A = function(){};

        return (desc
          && "get" in desc
          && "set" in desc
          && desc.configurable
          && !desc.enumerable);
      */},
      res: {
        ie11:        true,
        firefox17:   true,
        chrome30:    true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        rhino17:     true,
        nodeharmony: true,
        ios7:        true,
      },
    },
  },
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
        konq49:      true,
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
               o.qux.name === "";
      */},
      res: {},
    },
    'accessor properties': {
      exec: function() {/*
        var o = { get foo(){}, set foo(x){} };
        var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
        return descriptor.get.name === "get foo" &&
               descriptor.set.name === "set foo";
      */},
      res: {},
    },
    'shorthand methods': {
      exec: function() {/*
        var o = { foo(){} };
        return o.foo.name === "foo";
      */},
      res: {
        firefox34:    true,
        chrome39:     true,
      },
    },
    'symbol-keyed methods': {
      exec: function() {/*
        var sym1 = Symbol("foo");
        var sym2 = Symbol();
        var o = {
          [sym1]: function(){},
          [sym2]: function(){}
        };

        return o[sym1].name === "[foo]" &&
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
               o.qux.name === "";
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
        var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
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
  exec: function () {/*
    return typeof Function.prototype.toMethod === "function";
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
  name: 'String static methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-string-constructor',
  subtests: {
    'String.raw': {
      exec: function() {/*
        return typeof String.raw === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox34:   true,
      },
    },
    'String.fromCodePoint': {
      exec: function() {/*
        return typeof String.fromCodePoint === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox29:   true,
        chrome38:    true,
      },
    },
  },
},
{
  name: 'String.prototype methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-string-prototype-object',
  subtests: {
    'String.prototype.codePointAt': {
      exec: function () {/*
        return typeof String.prototype.codePointAt === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox29:   true,
        chrome38:    true,
      },
    },
    'String.prototype.normalize': {
      exec: function () {/*
        return typeof String.prototype.normalize === "function"
          && "c\u0327\u0301".normalize("NFC") === "\u1e09"
          && "\u1e09".normalize("NFD") === "c\u0327\u0301";
      */},
      res: {
        ie11tp:      true,
        firefox31:   true,
        chrome34:    true,
      },
    },
    'String.prototype.repeat': {
      exec: function () {/*
        return typeof String.prototype.repeat === 'function'
          && "foo".repeat(3) === "foofoofoo";
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox24:   true,
        chrome30:    true,
        nodeharmony: true,
      },
    },
    'String.prototype.startsWith': {
      exec: function () {/*
        return typeof String.prototype.startsWith === 'function'
          && "foobar".startsWith("foo");
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox17:   true,
        chrome30:    true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'String.prototype.endsWith': {
      exec: function () {/*
        return typeof String.prototype.endsWith === 'function'
          && "foobar".endsWith("bar");
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox17:   true,
        chrome30:    true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'String.prototype.includes': {
      exec: function () {/*
        return typeof String.prototype.includes === 'function'
          && "foobar".includes("oba");
      */},
      res: {
        tr:          true,
        _6to5:       {
          val: false,
          note_id: 'string-contains',
          note_html: 'Available as the draft standard <code>String.prototype.contains</code>'
        },
        ejs:         { val: false, note_id: 'string-contains' },
        firefox18:   { val: false, note_id: 'string-contains' },
        chrome30:    { val: false, note_id: 'string-contains' },
        webkit:      { val: true },
        nodeharmony: { val: false, note_id: 'string-contains' },
      },
    },
  },
},
{
  name: 'String.prototype HTML methods',
  annex_b: true,
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.anchor',
  exec: function () {/*
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (typeof String.prototype[names[i]] !== 'function') {
        return false;
      }
    }
    return true;
  */},
  res: {
    tr:          false,
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
  name: 'Unicode code point escapes',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals',
  exec: function () {/*
    return '\u{1d306}' == '\ud834\udf06';
  */},
  res: {
    tr:          true,
    _6to5:       true,
    ejs:         true,
    closure:     true,
    ie10:        false,
    ie11:        false,
    ie11tp:      true,
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
      res: {
        tr:          true,
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
        firefox36:   true,
        chrome30:    true, // Actually Chrome 29
        nodeharmony: true,
      },
    },
    'typeof support': {
      exec: function(){/*
        return typeof Symbol() === "symbol";
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
        firefox36:   true,
        chrome30:    true, // Actually Chrome 29
        nodeharmony: true,
      },
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
      res: {
        tr:          true,
        ejs:         true,
        ie11tp:      true,
        firefox36:   true,
        chrome30:    true, // Actually Chrome 29
        nodeharmony: true,
      },
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
      res: {
        tr:          true,
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
        firefox36:   true,
        chrome30:    true, // Actually Chrome 29
        nodeharmony: true,
      },
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
      res: {
        ejs:         true,
        ie11tp:      true,
        firefox36:   true,
        chrome38:    true,
        nodeharmony: true,
      },
    },
    'can convert with String()': {
      exec: function(){/*
        return String(Symbol("foo")) === "Symbol(foo)";
      */},
      res: {
        chrome39:    true,
        firefox36:   true,
      },
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
        tr:         true,
        _6to5:      true,
        ie11tp:     true,
        firefox36:  true,
        chrome35:   true,
        nodeharmony:true,
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
        _6to5:      true,
        ie11tp:     true,
        firefox36:  true,
        chrome30:   true,
        chrome35:   false,
      },
    },
    'global symbol registry': {
      exec: function() {/*
        var symbol = Symbol.for('foo');
        return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
      */},
      res: {
        ejs:         true,
        ie11tp:      true,
        firefox36:  true,
        chrome35:    true,
        nodeharmony: true,
      },
    },
  },
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
        Object.defineProperty(C, Symbol.hasInstance, {
          value: function(inst) { passed = inst.foo; return false; }
        });
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
        tr:          true,
        _6to5:       true,
        ie11tp:      true,
        firefox36:   true,
        chrome37:    true,
        ejs:         true,
      },
    },
    'Symbol.species': {
      exec: function() {/*
        return RegExp[Symbol.species] === RegExp
          && Array[Symbol.species] === Array
          && !(Symbol.species in Object);
      */},
      res: {
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
        chrome40:    true,
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
        ie11tp:      true,
        chrome38:    true,
      },
    },
  },
},
{
  name: 'RegExp.prototype properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype',
  subtests: {
    'RegExp.prototype.flags': {
      exec: function () {/*
        return /./igm.flags === "gim" && /./.flags === "";
      */},
      res: {},
    },
    'RegExp.prototype[Symbol.match]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.match] === 'function';
      */},
      res: {},
    },
    'RegExp.prototype[Symbol.replace]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.replace] === 'function';
      */},
      res: {},
    },
    'RegExp.prototype[Symbol.split]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.split] === 'function';
      */},
      res: {},
    },
    'RegExp.prototype[Symbol.search]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.search] === 'function';
      */},
      res: {},
    },
  }
},
// As this one is Annex B, it is separate from the above.
{
  name: 'RegExp.prototype.compile',
  annex_b: true,
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.compile',
  exec: function () {/*
    return typeof RegExp.prototype.compile === 'function';
  */},
  res: {
    tr:          false,
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
  name: 'Array static methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-array-constructor',
  subtests: {
    'Array.from': {
      exec: function () {/*
        return typeof Array.from === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox32:   true,
      }
    },
    'Array.of': {
      exec: function () {/*
        return typeof Array.of === 'function' &&
          Array.of(2)[0] === 2;
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox25:   true,
        chrome39:    true,
      },
    },
  },
},
{
  name: 'Array.prototype methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-array-prototype-object',
  subtests: {
    'Array.prototype.copyWithin': {
      exec: function () {/*
        return typeof Array.prototype.copyWithin === 'function';
      */},
      res: {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
        firefox32:   true,
      },
    },
    'Array.prototype.find': {
      exec: function () {/*
        return typeof Array.prototype.find === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox25:   true,
        chrome30:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Array.prototype.findIndex': {
      exec: function () {/*
        return typeof Array.prototype.findIndex === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox25:   true,
        chrome30:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Array.prototype.fill': {
      exec: function () {/*
        return typeof Array.prototype.fill === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox31:   true,
        chrome36:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Array.prototype.keys': {
      exec: function () {/*
        return typeof Array.prototype.keys === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox28:   true,
        chrome30:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Array.prototype.values': {
      exec: function () {/*
        return typeof Array.prototype.values === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox17:   {
          val: false,
          note_id: 'fx-array-prototype-values',
          note_html: 'Available from Firefox 17 up to 27 as the non-standard <code>Array.prototype.iterator</code>'
        },
        firefox27:   {
          val: false,
          note_id: 'fx-array-prototype-values-2',
          note_html: 'Available from Firefox 27 up to 35 as the non-standard <code>Array.prototype["@@iterator"]</code>'
        },
        firefox36:   {
          val: false,
          note_id: 'array-prototype-iterator',
          note_html: 'Available as <code>Array.prototype[Symbol.iterator]</code>'
        },
        chrome30:    true,
        chrome38:    { val: false, note_id: 'array-prototype-iterator' },
        nodeharmony: true,
      },
    },
    'Array.prototype.entries': {
      exec: function () {/*
        return typeof Array.prototype.entries === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox28:   true,
        chrome30:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
    },
    'Array.prototype[Symbol.unscopables]': {
      exec: function () {/*
        var unscopables = Array.prototype[Symbol.unscopables];
        if (!unscopables) {
          return false;
        }
        var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
        for (var i = 0; i < ns.length; i++) {
          if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
        }
        return true;
      */},
      res: {
        ie11tp:      true,
        chrome38:    true,
      },
    },
  },
},
{
  name: 'Number properties',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isfinite-number',
  subtests: {
    'Number.isFinite': {
      exec: function () {/*
        return typeof Number.isFinite === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome19dev: true,
        webkit:      true,
        konq49:      true,
        node:        true,
        nodeharmony: true,
      },
    },
    'Number.isInteger': {
      exec: function () {/*
        return typeof Number.isInteger === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
    },
    'Number.isSafeInteger': {
      exec: function () {/*
        return typeof Number.isSafeInteger === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox32:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
    },
    'Number.isNaN': {
      exec: function () {/*
        return typeof Number.isNaN === 'function';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox16:   true,
        chrome19dev: true,
        webkit:      true,
        konq49:      true,
        node:        true,
        nodeharmony: true,
      },
    },
    'Number.EPSILON': {
      exec: function () {/*
        return typeof Number.EPSILON === 'number';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox25:   true,
        chrome34:    true,
        webkit:      true,
        nodeharmony: true,
      },
    },
    'Number.MIN_SAFE_INTEGER': {
      exec: function () {/*
        return typeof Number.MIN_SAFE_INTEGER === 'number';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox31:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
    },
    'Number.MAX_SAFE_INTEGER': {
      exec: function () {/*
        return typeof Number.MAX_SAFE_INTEGER === 'number';
      */},
      res: {
        tr:          true,
        _6to5:       true,
        ejs:         true,
        ie11tp:      true,
        firefox31:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
    },
  },
},
{
  name: 'Math methods',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math',
  subtests: (function(){
    var methods = {
      'clz32': {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
        firefox31:   true,
        chrome35:    true,
        nodeharmony: true,
      },
      'imul': {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
        firefox25:   true,
        chrome33:    true,
        webkit:      true,
        konq49:      true,
        nodeharmony: true,
      },
      'log10': {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
        firefox25:   true,
        chrome35:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'cosh': {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
        firefox25:   true,
        chrome34:    true,
        safari71_8:  true,
        webkit:      true,
        nodeharmony: true,
        ios8:        true,
      },
      'atanh': {
        ejs:         true,
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
        _6to5:       true,
        ie11tp:      true,
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
},
{
  name: 'miscellaneous',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions',
  subtests: {
    'duplicate property names in strict mode': {
      exec: function(){/*
        'use strict';
        return this === undefined && ({ a:1, a:1 }).a === 1;
      */},
      res: {
        firefox35:   true,
      },
    },
    'no semicolon needed after do-while': {
      exec: function(){/*
        do {} while (false) return true;
      */},
      res: {
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        rhino17:     true,
        phantom:     true,
        node:        true,
        nodeharmony: true,
        ios7:        true,
      },
    },
    'no assignments allowed in for-in head': {
      exec: function(){/*
        try {
          eval('for (var i = 0 in {}) {}');
        }
        catch(e) {
          return true;
        }
      */},
      res: {
      },
    },
    'accessors aren\'t constructors': {
      exec: function(){/*
        try {
          new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
        } catch(e) {
          return true;
        }
      */},
      res: {
      },
    },
    'Object static methods accept primitives': {
      exec: function(){/*
        var methods = ['freeze', 'seal', 'preventExtensions', 'getOwnPropertyDescriptor',
          'getPrototypeOf', 'isExtensible', 'isSealed', 'isFrozen', 'keys', 'getOwnPropertyNames'];
        for (var i = 0; i < methods.length; i++) {
          Object[methods[i]](20000, "foo");
          Object[methods[i]]("foo", "foo");
          Object[methods[i]](false, "foo");
        }
        return true;
      */},
      res: {
        firefox35:   true,
      },
    },
    'Invalid Date': {
      exec: function(){/*
        return new Date(NaN) + "" === "Invalid Date";
      */},
      res: {
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
      },
    },
    'RegExp constructor can alter flags': {
      exec: function(){/*
        return new RegExp(/./im, "g").global === true;
      */},
      res: {
      },
    },
  },
  separator: "after",
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.filter(function(e) { return !e.annex_b })
        .concat(exports.tests.filter(function(e) { return  e.annex_b }));
