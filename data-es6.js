// exports browsers and tests

Object.assign = require('object-assign');

var temp = {};
var flag = "flagged";
var strict = "strict";
var fallthrough = "needs-polyfill-or-native";

var typescript = {
    corejs: { 
        val: true, 
        note_id: "typescript-core-js", 
        note_html: "This feature is supported when using TypeScript with core-js, or when a native ES6 host is used."
    },
    fallthrough: {
        val: fallthrough,
        note_id: "typescript-es6",
        note_html: "TypeScript's compiler will accept code using this feature if the <code>--target ES6</code> flag is set, but passes it through unmodified and does not supply a runtime polyfill."
    }
};

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
  babel: {
    full: 'Babel',
    short: 'Babel +<br><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler',
    note_id: 'babel-optional',
    note_html: 'Flagged features require an optional transformer setting.',
  },
  es6tr: {
    full: 'ES6 Transpiler',
    short: 'ES6<br>Trans-<br>piler',
    obsolete: true,
    platformtype: 'compiler',
  },
  closure: {
    full: 'Closure Compiler v20150505',
    short: 'Closure',
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
    full: 'TypeScript 1.5-alpha',
    short: 'Type-<br />Script +<br /><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler'
  },
  es6shim: {
    full: 'es6-shim',
    short: 'es6-<br>shim',
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
  edge: {
    full: 'Internet Explorer, Microsoft Edge',
    short: 'Edge',
    unstable: true,
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
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
    short: 'FF 31<br>ESR',
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
    short: 'FF 34',
    obsolete: true
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35',
    obsolete: true
  },
  firefox36: {
    full: 'Firefox',
    short: 'FF 36',
    obsolete: true
  },
  firefox37: {
    full: 'Firefox',
    short: 'FF 37',
    obsolete: true,
  },
  firefox38: {
    full: 'Firefox',
    short: 'FF 38',
    obsolete: true,
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF 39',
  },
  firefox40: {
    full: 'Firefox',
    short: 'FF 40',
    unstable: true,
  },
  firefox41: {
    full: 'Firefox',
    short: 'FF 41',
    unstable: true,
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
    note_html: 'Flagged features have to be enabled via "Experimental Javascript features" flag'
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
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome40: {
    full: 'Chrome, Opera',
    short: 'CH 40,<br>OP&nbsp;27',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome41: {
    full: 'Chrome, Opera',
    short: 'CH 41,<br>OP&nbsp;28',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome42: {
    full: 'Chrome, Opera',
    short: 'CH 42,<br>OP&nbsp;29',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome43: {
    full: 'Chrome, Opera',
    short: 'CH 43,<br>OP&nbsp;30',
    note_id: 'experimental-flag',
  },
  chrome44: {
    full: 'Chrome, Opera',
    short: 'CH 44,<br>OP&nbsp;31',
    unstable: true,
    note_id: 'experimental-flag',
  },
  chrome45: {
    full: 'Chrome, Opera',
    short: 'CH 45,<br>OP&nbsp;32',
    unstable: true,
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
    obsolete: true
  },
  safari7: {
    full: 'Safari',
    short: 'SF 6.1,<br>SF 7',
    obsolete: false
  },
  safari71_8: {
    full: 'Safari',
    short: 'SF 7.1,<br>SF 8',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r185990',
    short: 'WK',
    unstable: true,
  },
  opera: {
    full: 'Opera 12.16',
    short: 'OP 12',
    obsolete: true
  },
  konq49: {
    full: 'Konqueror 4.14',
    short: 'KQ<br>4.14',
    note_id: 'khtml',
    note_html: 'Results are only applicable for the KHTML rendering engine.'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    platformtype: 'engine',
    obsolete: true,
  },
  phantom: {
    full: 'PhantomJS 2.0',
    short: 'PJS',
    platformtype: 'engine',
    equals: 'safari6',
    // As PJS is a "headless browser" that emulates a real browser, it technically should support annex B.
    needs_annex_b: true,
  },
  node: {
    full: 'Node 0.12.0',
    short: 'Node',
    platformtype: 'engine',
    note_id: 'harmony-flag',
    note_html: 'Flagged features have to be enabled via <code>--harmony</code> or <code>--es_staging</code> flag'
  },
  iojs: {
    full: 'io.js 2.0.0',
    short: 'io.js',
    platformtype: 'engine',
    note_id: 'harmony-flag',
  },
  ejs: {
    full: 'Echo JS',
    short: 'Echo JS',
    unstable: true,
    platformtype: 'engine',
  },
  ios7: {
    full: 'iOS Safari',
    short: 'iOS7',
    platformtype: 'mobile',
    equals: 'safari7',
  },
  ios8: {
    full: 'iOS Safari',
    short: 'iOS8',
    platformtype: 'mobile',
    equals: 'safari71_8',
  }
};

exports.tests = [
{
  name: 'proper tail calls (tail call optimisation)',
  category: 'optimisation',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-tail-position-calls',
  subtests: {
    'direct recursion': {
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
        tr:          {
          val: flag,
          note_id: 'tr-tco',
          note_html: 'Requires the <code>properTailCalls</code> compile option.'
        },
        babel:       true,
        typescript:  typescript.fallthrough,
      },
    },
    'mutual recursion': {
      exec: function() {/*
        "use strict";
        function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return g(n - 1);
        }
        function g(n){
          if (n <= 0) {
            return  "bar";
          }
          return f(n - 1);
        }
        return f(1e6) === "foo" && f(1e6+1) === "bar";
      */},
      res: {
        tr:          { val: flag, note_id: 'tr-tco' },
        typescript:  typescript.fallthrough
      },
    }
  }
},
{
  name: 'arrow functions',
  category: 'functions',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
  subtests: {
    '0 parameters': {
      exec: function(){/*
        return (() => 5)() === 5;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        chrome38:    flag,
        chrome40:    false,
        chrome45:    true,
        webkit:      true,
        node:        flag,
      },
    },
    '1 parameter, no brackets': {
      exec: function(){/*
        var b = x => x + "foo";
        return (b("fee fie foe ") === "fee fie foe foo");
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        chrome38:    flag,
        chrome40:    false,
        chrome45:    true,
        webkit:      true,
        node:        flag,
      },
    },
    'multiple parameters': {
      exec: function(){/*
        var c = (v, w, x, y, z) => "" + v + w + x + y + z;
        return (c(6, 5, 4, 3, 2) === "65432");
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        chrome38:    flag,
        chrome40:    false,
        chrome45:    true,
        webkit:      true,
        node:        flag,
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
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        chrome45:    true,
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
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        edge:        true,
        firefox23:   true,
        chrome45:    true,
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
        babel:       true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        chrome45:    true,
      },
    },
    'lexical "arguments" binding': {
      exec: function(){/*
        var f = (function() { return z => arguments[0]; }(5));
        return f(6) === 5;
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        edge:        true,
        firefox23:   true,
        firefox24:   false,
        chrome45:    true,
      },
    },
    'no line break between params and <code>=></code>': {
      exec: function(){/*
        return (() => {
          try { Function("x\n => 2")(); } catch(e) { return true; }
        })();
      */},
      res: {
        babel:       true,
        tr:          true,
        typescript:  true,
        edge:        true,
        firefox39:   true,
        webkit:      true,
        chrome45:    true,
      },
    },
    'no "prototype" property': {
      exec: function(){/*
        var a = () => 5;
        return !a.hasOwnProperty("prototype");
      */},
      res: {
        ejs:         true,
        edge:        true,
        firefox23:   true,
        chrome39:    flag,
        chrome40:    false,
        chrome45:    true,
      },
    },
    'lexical "super" binding': {
      exec: function(){/*
        class B {
          qux() {
            return "quux";
          }
        }
        class C extends B {
          baz() {
            return x => super.qux();
          }
        }
        var arrow = new C().baz();
        return arrow() === "quux";
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        es6tr:       true,
        jsx:         true,
        typescript:  true,
        edge:        flag,
        chrome45:    strict,
      },
    },
    'lexical "new.target" binding': {
      exec: function(){/*
        function C() {
          return x => new.target;
        }
        return new C()() === C && C()() === undefined;
      */},
      res: {
        firefox41:    true,
      },
    },
  },
},
{
  name: 'const',
  category: 'bindings',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
  subtests: {
    'basic support': {
      exec: function() {/*
        const foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        node:        true,
        iojs:        true,
      }
    },
    'is block-scoped': {
      exec: function() {/*
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6tr:       true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox36:   true,
      }
    },
    'temporal dead zone': {
      exec: function(){/*
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
      */},
      res: {
        babel:       flag,
        typescript:  true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome:      flag,
        chrome41:    true,
        konq49:      true,
        node:        flag,
        iojs:        true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        tr:          true,
        ejs:         true,
        closure:     true,
        chrome19dev: flag,
        chrome41:    true,
        ie11:        true,
        firefox36:   true,
        node:        flag,
        iojs:        true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   true,
        chrome21dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
      }
    },
    'temporal dead zone (strict mode)': {
      exec: function(){/*
        'use strict';
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
      */},
      res: {
        babel:       flag,
        typescript:  true,
        ie11:        true,
        firefox36:   true,
        chrome19dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
      },
    },
  }
},
{
  name: 'let',
  category: 'bindings',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
  subtests: {
    'basic support': {
      exec: function(){/*
        let foo = 123;
        return (foo === 123);
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   {
          val: flag,
          note_id: 'fx-let',
          note_html: 'Available for code in a <code>&lt;script type="application/javascript;version=1.7"></code> (or <code>version=1.8</code>) tag.'
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: flag, note_id: 'fx-let', },
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
        es6tr:       true,
        babel:       true,
        typescript:  true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: flag, note_id: 'fx-let', },
      },
    },
    'temporal dead zone': {
      exec: function(){/*
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        let qux = 456;
        fn();
        return passed;
      */},
      res: {
        babel:       flag,
        typescript:  true,
        ejs:         true,
        ie11:        true,
        firefox35:   { val: flag, note_id: 'fx-let', },
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
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        closure:     true,
        firefox39:   { val: flag, note_id: 'fx-let', },
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        chrome19dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
        firefox11:   { val: flag, note_id: 'fx-let' },
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: flag, note_id: 'fx-let', },
        chrome19dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        ie11:        true,
        firefox11:   { val: flag, note_id: 'fx-let', },
        chrome19dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
      },
    },
    'temporal dead zone (strict mode)': {
      exec: function(){/*
        'use strict';
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        let qux = 456;
        fn();
        return passed;
      */},
      res: {
        babel:       flag,
        typescript:  true,
        ejs:         true,
        ie11:        true,
        firefox35:   { val: flag, note_id: 'fx-let', },
        chrome19dev: flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
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
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        closure:     true,
        chrome37:    flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
        firefox39:   { val: flag, note_id: 'fx-let', },
      },
    },
  },
},
{
  name: 'default function parameters',
  category: 'syntax',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
  subtests: {
    'basic functionality': {
      exec: function(){/*
        return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox16:   true,
        edge:        flag,
      },
    },
    'explicit undefined defers to the default': {
      exec: function(){/*
        return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox18:   true,
        edge:        flag,
      },
    },
    'defaults can refer to previous params': {
      exec: function(){/*
        return (function (a, b = a) { return b === 5; }(5));
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox16:   true,
        edge:        flag,
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
        babel:       true,
        typescript:  true,
        edge:        flag,
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
        babel:       true,
        closure:     true,
        edge:        flag,
      },
    },
    'new Function() support': {
      exec: function() {/*
        return new Function("a = 1", "b = 2",
          "return a === 3 && b === 2;"
        )(3);
      */},
      res: {
        typescript: typescript.fallthrough,
        edge:        flag,
      },
    },
  }
},
{
  name: 'rest parameters',
  category: 'syntax',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions',
  subtests: {
    'basic functionality': {
      exec: function() {/*
        return (function (foo, ...args) {
          return args instanceof Array && args + "" === "bar,baz";
        }("foo", "bar", "baz"));
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        jsx:         true,
        typescript:  true,
        edge:        true,
        firefox16:   true,
        chrome44:    flag,
        chrome45:    true,
      },
    },
    'function \'length\' property': {
      exec: function() {/*
        return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        jsx:         true,
        typescript:  true,
        edge:        true,
        firefox16:   true,
        chrome44:    flag,
        chrome45:    true,
      },
    },
    'arguments object interaction': {
      exec: function() {/*
        return (function (foo, ...args) {
          foo = "qux";
          // The arguments object is not mapped to the
          // parameters, even outside of strict mode.
          return arguments.length === 3
            && arguments[0] === "foo"
            && arguments[1] === "bar"
            && arguments[2] === "baz";
        }("foo", "bar", "baz"));
      */},
      res: {
        babel:       true,
        tr:          true,
        chrome44:    flag,
        chrome45:    true,
        edge:        true,
      },
    },
    'can\'t be used in setters': {
      exec: function() {/*
        return (function (...args) {
          try {
            eval("({set e(...args){}})");
          } catch(e) {
            return true;
          }
        }());
      */},
      res: {
        babel:       true,
        tr:          true,
        closure:     true,
        jsx:         true,
        typescript:  true,
        edge:        true,
        firefox38:   true,
        chrome45:    true,
      },
    },
    'new Function() support': {
      exec: function() {/*
        return new Function("a", "...b",
          "return b instanceof Array && a+b === 'foobar,baz';"
        )('foo','bar','baz');
      */},
      res: {
        edge:        true,
        firefox16:   true,
        chrome44:    flag,
        chrome45:    true,
      },
    },
  },
},
{
  name: 'spread (...) operator',
  category: 'syntax',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation',
  subtests: {
    'with arrays, in function calls': {
      exec: function () {/*
        return Math.max(...[1, 2, 3]) === 3
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox27:   true,
        safari71_8:  true,
        webkit:      true,
        chrome44:    flag,
        chrome45:    true,
      },
    },
    'with arrays, in array literals': {
      exec: function() {/*
       return [...[1, 2, 3]][2] === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox16:   true,
        safari71_8:  true,
        webkit:      true,
        chrome45:    true,
      },
    },
    'with strings, in function calls': {
      exec: function() {/*
       return Math.max(..."1234") === 4;
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        edge:        true,
        firefox27:   true,
        chrome44:    flag,
        chrome45:    true,
      },
    },
    'with strings, in array literals': {
      exec: function() {/*
       return ["a", ..."bcd", "e"][3] === "d";
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        edge:        true,
        firefox17:   true,
        webkit:      true,
        chrome45:    true,
      },
    },
    'with astral plane strings, in function calls': {
      exec: function() {/*
       return Array(..."𠮷𠮶")[0] === "𠮷";
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        firefox27:   true,
        chrome44:    flag,
        chrome45:    true,
        edge:        true,
      },
    },
    'with astral plane strings, in array literals': {
      exec: function() {/*
       return [..."𠮷𠮶"][0] === "𠮷";
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        firefox27:   true,
        webkit:      true,
        edge:        true,
        chrome45:    true,
      },
    },
    'with generator instances, in calls': {
      exec: function () {/*
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        return Math.max(...iterable) === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        firefox27:   true,
        chrome44:    flag,
        chrome45:    true,
        edge:        flag,
      },
    },
    'with generator instances, in arrays': {
      exec: function () {/*
        var iterable = (function*(){ yield "b"; yield "c"; yield "d"; }());
        return ["a", ...iterable, "e"][3] === "d";
      */},
      res: {
        tr:          true,
        babel:       true,
        ejs:         true,
        firefox27:   true,
        chrome44:    flag,
        chrome45:    true,
        edge:        flag,
      },
    },
    'with generic iterables, in calls': {
      exec: function () {/*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Math.max(...iterable) === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       {
          val: true,
          note_id: 'compiler-iterable',
          note_html: 'This compiler requires generic iterables have either a <code>Symbol.iterator</code> or non-standard <code>"@@iterator"</code> method.'
        },
        ejs:         true,
        firefox36:   true,
        chrome44:    flag,
        chrome45:    true,
        edge:        true,
      },
    },
    'with generic iterables, in arrays': {
      exec: function () {/*
        var iterable = global.__createIterableObject(["b", "c", "d"]);
        return ["a", ...iterable, "e"][3] === "d";
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       { val: true, note_id: 'compiler-iterable' },
        ejs:         true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome45:    true,
      },
    },
    'with instances of iterables, in calls': {
      exec: function () {/*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Math.max(...Object.create(iterable)) === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       { val: true, note_id: 'compiler-iterable' },
        firefox36:   true,
        chrome44:    flag,
        chrome45:    true,
        edge:        true
      },
    },
    'with instances of iterables, in arrays': {
      exec: function () {/*
        var iterable = global.__createIterableObject(["b", "c", "d"]);
        return ["a", ...Object.create(iterable), "e"][3] === "d";
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       { val: true, note_id: 'compiler-iterable' },
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome45:    true,
      },
    },
  }
},
{
  name: 'class',
  category: 'functions',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions',
  subtests: {
    'class statement': {
      exec: function () {/*
        class C {}
        return typeof C === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        jsx:         true,
        closure:     true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
        typescript:  true,
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
        babel:       true,
        jsx:         true,
        edge:        flag,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'class expression': {
      exec: function () {/*
        return typeof class C {} === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'anonymous class': {
      exec: function () {/*
        return typeof class {} === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'prototype methods': {
      exec: function () {/*
        class C {
          method() { return 2; }
        }
        return typeof C.prototype.method === "function"
          && new C().method() === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'string-keyed methods': {
      exec: function () {/*
        class C {
          "foo bar"() { return 2; }
        }
        return typeof C.prototype["foo bar"] === "function"
          && new C()["foo bar"]() === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'computed prototype methods': {
      exec: function () {/*
        var foo = "method";
        class C {
          [foo]() { return 2; }
        }
        return typeof C.prototype.method === "function"
          && new C().method() === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        flag,
        chrome45:    strict,
      },
    },
    'static methods': {
      exec: function () {/*
        class C {
          static method() { return 3; }
        }
        return typeof C.method === "function"
          && C.method() === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'computed static methods': {
      exec: function () {/*
        var foo = "method";
        class C {
          static [foo]() { return 3; }
        }
        return typeof C.method === "function"
          && C.method() === 3;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        edge:        flag,
        chrome45:    strict,
      },
    },
    'accessor properties': {
      exec: function () {/*
        var baz = false;
        class C {
          get foo() { return "foo"; }
          set bar(x) { baz = x; }
        }
        new C().bar = true;
        return new C().foo === "foo" && baz;
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        typescript:  true,
        jsx:         true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'computed accessor properties': {
      exec: function () {/*
        var garply = "foo", grault = "bar", baz = false;
        class C {
          get [garply]() { return "foo"; }
          set [grault](x) { baz = x; }
        }
        new C().bar = true;
        return new C().foo === "foo" && baz;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        chrome45:    strict,
      },
    },
    'static accessor properties': {
      exec: function () {/*
        var baz = false;
        class C {
          static get foo() { return "foo"; }
          static set bar(x) { baz = x; }
        }
        C.bar = true;
        return C.foo === "foo" && baz;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        jsx:         true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        iojs:        strict,
        chrome41:    strict,
        webkit:      true,
      },
    },
    'computed static accessor properties': {
      exec: function () {/*
        var garply = "foo", grault = "bar", baz = false;
        class C {
          static get [garply]() { return "foo"; }
          static set [grault](x) { baz = x; }
        }
        C.bar = true;
        return C.foo === "foo" && baz;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        chrome45:    strict,
      },
    },
    'class name is lexically scoped': {
      exec: function () {/*
        class C {
          method() { return typeof C === "function"; }
        }
        var M = C.prototype.method;
        C = undefined;
        return C === undefined && M();
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        edge:        flag,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'computed names, temporal dead zone': {
      exec: function () {/*
        try {
          var B = class C {
            [C](){}
          }
        } catch(e) {
          return true;
        }
      */},
      res: {
        edge:        flag,
        chrome45:    strict,
      },
    },
    'methods aren\'t enumerable': {
      exec: function () {/*
        class C {
          foo() {}
          static bar() {}
        }
        return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
      */},
      res: {
        babel:       true,
        jsx:         true,
        chrome42:    strict,
        webkit:      true,
      },
    },
    'implicit strict mode': {
      exec: function () {/*
        class C {
          static method() { return this === undefined; }
        }
        return (0,C.method)();
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        edge:        flag,
        webkit:      true,
        chrome41:    strict,
        iojs:        strict,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        class C {}
        try {
          C();
        }
        catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'extends': {
      exec: function () {/*
        class B {}
        class C extends B {}
        return new C() instanceof B
          && B.isPrototypeOf(C);
      */},
      res: (temp.extendsRes = {
        es6tr:       {
          val: false,
          note_id: 'compiler-proto',
          note_html: 'Requires native support for <code>Object.prototype.__proto__</code>',
        },
        babel:       { val: false, note_id: 'compiler-proto' },
        tr:          { val: false, note_id: 'compiler-proto' },
        typescript:  {
          val: false,
          note_id: 'typescript-extends',
          note_html: 'TypeScript transforms <code>extends</code> into code that copies static properties from the superclass (but uses the prototype chain for instance properties).'},
        ejs:         true,
        closure:     {
          val: false,
          note_id: 'compiled-extends',
          note_html: 'This compiler transforms <code>extends</code> into code that copies properties from the superclass, instead of using the prototype chain.'
        },
        jsx:         { val: false, note_id: 'compiled-extends' },
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      }),
    },
    'extends expressions': {
      exec: function () {/*
        var B;
        class C extends (B = class {}) {}
        return new C() instanceof B
          && B.isPrototypeOf(C);
      */},
      res: {
        es6tr:       { val: false, note_id: 'compiler-proto' },
        babel:       { val: false, note_id: 'compiler-proto' },
        tr:          { val: false, note_id: 'compiler-proto' },
        typescript:  {
          val: false,
          note_id: 'typescript-extends',
        },
        ejs:         true,
        jsx:         { val: false, note_id: 'compiled-extends' },
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'extends null': {
      exec: function () {/*
        class C extends null {
          constructor() { return Object.create(null); }
        }
        return Function.prototype.isPrototypeOf(C)
          && Object.getPrototypeOf(C.prototype) === null;
      */},
      res: {
        babel:       true,
        tr:          true,
        ejs:         true,
        es6tr:       true,
        jsx:         true,
        edge:        flag,
        iojs:        strict,
        chrome41:    strict,
        webkit:      true,
      },
    },
    'new.target': {
      exec: function () {/*
        var passed = false;
        new function f() {
          passed = new.target === f;
        }();

        class A {
          constructor() {
            passed &= new.target === B;
          }
        }
        class B extends A {}
        new B();
        return passed;
      */},
      res: {},
    },
  },
},
{
  name: 'super',
  category: 'functions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-super-keyword',
  subtests: {
    'statement in constructors': {
      exec: function() {/*
        var passed = false;
        class B {
          constructor(a) { passed = (a === "barbaz"); }
        }
        class C extends B {
          constructor(a) { super("bar" + a); }
        }
        new C("baz");
        return passed;
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  true,
        closure:     true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'expression in constructors': {
      exec: function() {/*
        class B {
          constructor(a) { return ["foo" + a]; }
        }
        class C extends B {
          constructor(a) { return super("bar" + a); }
        }
        return new C("baz")[0] === "foobarbaz";
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  true,
        closure:     true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'in methods, property access': {
      exec: function() {/*
        class B {}
        B.prototype.qux = "foo";
        B.prototype.corge = "baz";
        class C extends B {
          quux(a) { return super.qux + a + super["corge"]; }
        }
        C.prototype.qux = "garply";
        return new C().quux("bar") === "foobarbaz";
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  {
          val: false,
          note_id: 'typescript-property-access',
          note_html: 'TypeScript does not support computed <code>super</code> property access.'
        },
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'in methods, method calls': {
      exec: function() {/*
        class B {
          qux(a) { return "foo" + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        return new C().qux("baz") === "foobarbaz";
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  true,
        closure:     true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'method calls use correct "this" binding': {
      exec: function() {/*
        class B {
          qux(a) { return this.foo + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        var obj = new C();
        obj.foo = "foo";
        return obj.qux("baz") === "foobarbaz";
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  true,
        closure:     true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
    'constructor calls use correct "new.target" binding': {
      exec: function() {/*
        var passed;
        class B {
          constructor() { passed = (new.target === C); }
        }
        class C extends B {
          constructor() { super(); }
        }
        new C();
        return passed;
      */},
      res: {
      },
    },
    'is statically bound': {
      exec: function() {/*
        class B {
          qux() { return "bar"; }
        }
        class C extends B {
          qux() { return super.qux() + this.corge; }
        }
        var obj = {
          qux: C.prototype.qux,
          corge: "ley"
        };
        return obj.qux() === "barley";
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        edge:        flag,
        webkit:      true,
        iojs:        strict,
        chrome41:    strict,
      },
    },
  },
},
{
  name: 'object literal extensions',
  category: 'syntax',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-initialiser',
  subtests: {
    'computed properties': {
      exec: function() {/*
        var x = 'y';
        return ({ [x]: 1 }).y === 1;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        jsx:         true,
        closure:     true,
        edge:        true,
        firefox34:   true,
        safari71_8:  true,
        webkit:      true,
        chrome44:    true
      },
    },
    'shorthand properties': {
      exec: function () {/*
        var a = 7, b = 8, c = {a,b};
        return c.a === 7 && c.b === 8;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox33:   true,
        chrome41:    flag,
        chrome43:    true,
        iojs:        true,
        webkit:      true,
      },
    },
    'shorthand methods': {
      exec: function() {/*
        return ({ y() { return 2; } }).y() === 2;
      */},
      res: (temp.shorthandMethodsResults = {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox34:   { val: true, note_id: "ff-shorthand-methods", note_html: 'Firefox incorrectly produces an error in strict mode if the method is named "arguments", "eval", or "delete".' },
        chrome41:    flag,
        chrome43:    true,
        iojs:        true,
        webkit:      true,
      }),
    },
    'string-keyed shorthand methods': {
      exec: function() {/*
        return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
      */},
      res: Object.assign({}, temp.shorthandMethodsResults, {
        closure:     false,
        firefox34:   true,
      }),
    },
    'computed shorthand methods': {
      exec: function() {/*
        var x = 'y';
        return ({ [x](){ return 1 } }).y() === 1;
      */},
      res: {
        edge:        true,
        tr:          true,
        closure:     true,
        babel:       true,
        typescript:  true,
        jsx:         true,
        es6tr:       true,
        firefox34:   true,
        webkit:      true,
        chrome44:    true
      }
    },
    'computed accessors': {
      exec: function() {/*
        var x = 'y',
            valueSet,
            obj = {
              get [x] () { return 1 },
              set [x] (value) { valueSet = value }
            };
        obj.y = 'foo';
        return obj.y === 1 && valueSet === 'foo';
      */},
      res: {
        babel:       true,
        typescript:  true,
        edge:        true,
        tr:          true,
        es6tr:       true,
        firefox34:   true,
        chrome44:    true
      }
    }
  }
},
{
  name: 'non-strict function semantics',
  note_id: 'hoisted-block-functions',
  note_html: 'The current version of the specification contains <a href="https://esdiscuss.org/topic/block-level-function-declarations-web-legacy-compatibility-bug">multiple bugs</a> for hoisted block-level function declaration semantics, which these tests disregard.',
  category: 'annex b',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations',
  subtests: {
    'hoisted block-level function declaration': {
      exec: function () {/*
        // Note: only available outside of strict mode.
        if (!this) return false;
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
        chrome:      true,
        node:        true,
        iojs:        true,
      },
    },
    'labeled function statements': {
      exec: function() {/*
        // Note: only available outside of strict mode.
        if (!this) return false;
        
        label: function foo() { return 2; }
        return foo() === 2;
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
        node:        true,
        iojs:        true,
      },
    },
    'function statements in if-statement clauses': {
      exec: function() {/*
        // Note: only available outside of strict mode.
        if (!this) return false;
        
        if(true) function foo() { return 2; }
        if(false) {} else function bar() { return 3; }
        if(true) function baz() { return 4; } else {}
        if(false) function qux() { return 5; } else function qux() { return 6; }
        return foo() === 2 && bar() === 3 && baz() === 4 && qux() === 6;
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
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: '__proto__ in object literals',
  category: 'annex b',
  significance: 'small',
  note_id: 'proto-in-object-literals',
  note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-__proto__-property-names-in-object-initializers',
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
        node:        true,
        iojs:        true,
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
        edge:         true,
        firefox35:    true,
        webkit:       true,
        chrome42:     true,
        iojs:         true,
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
        edge:         true,
        firefox34:    true,
        safari71_8:   true,
        webkit:       true,
        chrome44:     true,
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
        webkit:       true,
        chrome42:     true,
        iojs:         true,
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
        webkit:       true,
        chrome42:     true,
        iojs:         true,
      },
    },
  },
},
{
  name: 'for..of loops',
  category: 'syntax',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements',
  subtests: {
    'with arrays': {
      exec: function () {/*
        var arr = [5];
        for (var item of arr)
          return item === 5;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        jsx:         true,
        closure:     true,
        edge:        true,
        firefox13:   true,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
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
        babel:       true,
        typescript:  true,
        ejs:         true,
        closure:     true,
        edge:        true,
        firefox17:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'with astral plane strings': {
      exec: function () {/*
        var str = "";
        for (var item of "𠮷𠮶")
          str += item + " ";
        return str === "𠮷 𠮶 ";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        edge:        true,
        firefox17:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'with generator instances': {
      exec: function () {/*
        var result = "";
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        for (var item of iterable) {
          result += item;
        }
        return result === "123";
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        firefox27:   true,
        chrome21dev: flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'with generic iterables': {
      exec: function () {/*
        var result = "";
        var iterable = global.__createIterableObject([1, 2, 3]);
        for (var item of iterable) {
          result += item;
        }
        return result === "123";
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        typescript:  typescript.fallthrough,
        es6tr:       { val: true, note_id: 'compiler-iterable' },
        ejs:         true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome21dev: flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'with instances of generic iterables': {
      exec: function () {/*
        var result = "";
        var iterable = global.__createIterableObject([1, 2, 3]);
        for (var item of Object.create(iterable)) {
          result += item;
        }
        return result === "123";
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        typescript:  typescript.fallthrough,
        es6tr:       { val: true, note_id: 'compiler-iterable' },
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome35:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'iterator closing, break': {
      exec: function () {/*
        var closed = false;
        var iter = __createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        for (var it of iter) break;
        return closed;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        webkit:      true,
      },
    },
    'iterator closing, throw': {
      exec: function () {/*
        var closed = false;
        var iter = __createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          for (var it of iter) throw 0;
        } catch(e){}
        return closed;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        webkit:      true,
      },
    },
  },
},
{
  name: 'generators',
  category: 'functions',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions',
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
      res: (temp.basicGenerators = {
        tr:          true,
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
      }),
    },
    'generator function expressions': {
      exec: function() {/*
        var generator = function * (){
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
      res: temp.basicGenerators,
    },
    'correct "this" binding': {
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
      res: temp.basicGenerators,
    },
    'can\'t use "this" with new': {
      exec: function() {/*
        function * generator(){
          yield this.x; yield this.y;
        };
        try {
          (new generator()).next();
        }
        catch (e) {
          return true;
        }
      */},
      res: {
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
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
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
        babel:       true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        edge:        flag,
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
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
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
        tr:        true,
        babel:     true,
        firefox38: true,
        edge:      flag,
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
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
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
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome38:    flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
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
        babel:       true,
        closure:     true,
        tr:          true,
        firefox27:   true,
        chrome38:    flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        ejs:         true,
        edge:        flag,
      },
    },
    'yield *, astral plane strings': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * "𠮷𠮶";
        }());
        var item = iterator.next();
        var passed = item.value === "𠮷" && item.done === false;
        item = iterator.next();
        passed    &= item.value === "𠮶" && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */},
      res: {
        babel:       true,
        tr:          true,
        firefox27:   true,
        chrome38:    flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        edge:        flag,
      },
    },
    'yield *, generator instances': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * (function*(){ yield 5; yield 6; yield 7; }());
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
        babel:       true,
        closure:     true,
        firefox27:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        edge:        flag,
      },
    },
    'yield *, generic iterables': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * global.__createIterableObject([5, 6, 7]);
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
        babel:       true,
        closure:     true,
        firefox36:   true,
        chrome21dev: flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        edge:        flag,
      },
    },
    'yield *, instances of iterables': {
      exec: function () {/*
        var iterator = (function * generator() {
          yield * Object.create(__createIterableObject([5, 6, 7]));
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
        babel:       true,
        closure:     true,
        firefox36:   true,
        chrome35:    flag,
        chrome39:    true,
        node:        flag,
        iojs:        true,
        edge:        flag,
      },
    },
    'yield *, iterator closing': {
      exec: function () {/*
        var closed = '';
        var iter = __createIterableObject([1, 2, 3], {
          'return': function(){
            closed += 'a';
            return {done: true};
          }
        });
        var gen = (function* generator(){
          try {
            yield *iter;
          } finally {
            closed += 'b';
          }
        })();
        gen.next();
        gen['return']();
        return closed === 'ab';
      */},
      res: {
        tr:          true,
        babel:       true,
        edge:        flag,
      },
    },
    'yield *, iterator closing via throw()': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'throw': undefined,
          'return': function() {
            closed = true;
            return {done: true};
          }
        });
        var gen = (function*(){
          try {
            yield *iter;
          } catch(e){}
        })();
        gen.next();
        gen['throw']();
        return closed;
      */},
      res: {
        babel:       true,
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
        babel:       true,
        closure:     true,
        chrome41:    flag,
        chrome42:    true,
        firefox34:   true,
        iojs:        true,
        ejs:         true,
        edge:        flag,
      },
    },
    'string-keyed shorthand generator methods': {
      exec: function() {/*
        var o = {
          * "foo bar"() {
            yield 5; yield 6;
          },
        };
        var iterator = o["foo bar"]();
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
        babel:       true,
        chrome41:    flag,
        chrome42:    true,
        firefox34:   true,
        iojs:        true,
        ejs:         true,
        edge:        flag,
      },
    },
    'computed shorthand generators': {
      exec: function() {/*
        var garply = "generator";
        var o = {
          * [garply] () {
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
        babel:       true,
        closure:     true,
        firefox34:   true,
        ejs:         true,
        chrome44:    true,
        edge:        flag,
      },
    },
    'shorthand generator methods, classes': {
      exec: function() {/*
        class C {
          * generator() {
            yield 5; yield 6;
          }
        };
        var iterator = new C().generator();
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
        babel:       true,
        closure:     true,
        chrome41:    strict,
        iojs:        strict,
        edge:        flag,
      },
    },
    'computed shorthand generators, classes': {
      exec: function() {/*
        var garply = "generator";
        class C {
          * [garply] () {
            yield 5; yield 6;
          }
        }
        var iterator = new C().generator();
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
        babel:       true,
        closure:     true,
        edge:        flag,
        chrome45:    strict,
      },
    },
  },
},
{
  name: 'prototype of bound functions',
  category: 'misc',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-boundfunctioncreate',
  subtests: {
    'basic functions': {
      exec: function () {/*
          function correctProtoBound(proto) {
            var f = function(){};
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(f, proto);
            }
            else {
              f.__proto__ = proto;
            } 
            var boundF = Function.prototype.bind.call(f, null);
            return Object.getPrototypeOf(boundF) === proto;
          }
          return correctProtoBound(Function.prototype)
            && correctProtoBound({})
            && correctProtoBound(null);
      */},
      res: {
      },
    },
    'generator functions': {
      exec: function() {/*
          function correctProtoBound(proto) {
            var f = function*(){};
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(f, proto);
            }
            else {
              f.__proto__ = proto;
            } 
            var boundF = Function.prototype.bind.call(f, null);
            return Object.getPrototypeOf(boundF) === proto;
          }
          return correctProtoBound(Function.prototype)
            && correctProtoBound({})
            && correctProtoBound(null);
      */},
      res: {
      },
    },
    'arrow functions': {
      exec: function() {/*
          function correctProtoBound(proto) {
            var f = ()=>5;
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(f, proto);
            }
            else {
              f.__proto__ = proto;
            } 
            var boundF = Function.prototype.bind.call(f, null);
            return Object.getPrototypeOf(boundF) === proto;
          }
          return correctProtoBound(Function.prototype)
            && correctProtoBound({})
            && correctProtoBound(null);
      */},
      res: {
      },
    },
    'classes': {
      exec: function() {/*
          function correctProtoBound(proto) {
            class C {}
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(C, proto);
            }
            else {
              C.__proto__ = proto;
            } 
            var boundF = Function.prototype.bind.call(C, null);
            return Object.getPrototypeOf(boundF) === proto;
          }
          return correctProtoBound(Function.prototype)
            && correctProtoBound({})
            && correctProtoBound(null);
      */},
      res: {
      },
    },
    'subclasses': {
      exec: function() {/*
          function correctProtoBound(superclass) {
            class C extends superclass {
              constructor() {
                return Object.create(null);
              }
            }
            var boundF = Function.prototype.bind.call(C, null);
            return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
          }
          return correctProtoBound(function(){})
            && correctProtoBound(Array)
            && correctProtoBound(null);
      */},
      res: {
      },
    },
  },
},
{
  name: 'octal and binary literals',
  category: 'syntax',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals',
  subtests: {
    'octal literals': {
      exec: function () {/*
        return 0o10 === 8 && 0O10 === 8;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox25:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'binary literals': {
      exec: function () {/*
        return 0b10 === 2 && 0B10 === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox25:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'octal supported by Number()': {
      exec: function () {/*
        return Number('0o1') === 1;
      */},
      res: {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox36:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'binary supported by Number()': {
      exec: function () {/*
        return Number('0b1') === 1;
      */},
      res: {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox36:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
  },
},
{
  name: 'template strings',
  category: 'syntax',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var a = "ba", b = "QUX";
        return `foo bar
        ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox34:   true,
        chrome41:    true,
        webkit:      true,
        iojs:        true,
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
        babel:       true,
        es6tr:       true,
        jsx:         true,
        closure:     true,
        typescript:  true,
        edge:        true,
        firefox34:   true,
        chrome41:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'line break normalisation': {
      /* For some reason, this .fromCharCode stuff is necessary instead of \r\n. */
      exec: function () {/*
        var cr   = eval("`x" + String.fromCharCode(13)    + "y`");
        var lf   = eval("`x" + String.fromCharCode(10)    + "y`");
        var crlf = eval("`x" + String.fromCharCode(13,10) + "y`");

        return cr.length === 3 && lf.length === 3 && crlf.length === 3
          && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
      */},
      res: {
        tr:          true,
        babel:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox34:   true,
        edge:        true,
        chrome41:    true,
        webkit:      true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'RegExp "y" and "u" flags',
  category: 'syntax',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
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
        chrome39:    flag,
        chrome40:    false,
        ejs:         true,
        edge:        flag,
        typescript:  typescript.fallthrough
      },
    },
    '"u" flag': {
      exec: function() {/*
        return "𠮷".match(/^.$/u)[0].length === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        edge:        true,
      },
    },
  },
},
{
  name: 'typed arrays',
  category: 'built-ins',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects',
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
        node:        true,
        iojs:        true,
        typescript:  typescript.fallthrough,
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
      res: (temp.clampedArrayResults = {
        ejs:         true,
        firefox11:   true,
        edge:        true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        node:        true,
        iojs:        true,
        typescript:  typescript.fallthrough,
      }),
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
        node:        true,
        iojs:        true,
        typescript:  typescript.fallthrough,
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
    'ArrayBuffer[Symbol.species]': {
      exec: function(){/*
        return typeof ArrayBuffer[Symbol.species] === 'function';
      */},
      res: {},
    },
    'constructors require new': {
      exec: function(){/*
        var buffer = new ArrayBuffer(64);
        var constructors = [
          'ArrayBuffer',
          'DataView',
          'Int8Array',
          'Uint8Array',
          'Uint8ClampedArray',
          'Int16Array',
          'Uint16Array',
          'Int32Array',
          'Uint32Array',
          'Float32Array',
          'Float64Array'
        ];
        for(var i = 0; i < constructors.length; i+=1) {
          try {
            if (constructors[i] in global) {
              global[constructors[i]](constructors[i] === "ArrayBuffer" ? 64 : buffer);
            }
            return false;
          } catch(e) {
          }
        }
        return true;
      */},
      res: Object.assign({}, temp.clampedArrayResults, {
        edge:     false,
        safari6:  false,
        webkit:   false,
        firefox11:false,
      }),
    },
  },
  (function(){
    var methods = {
    '.from':                  { edge:    true, firefox38: true, chrome45: true, },
    '.of':                    { edge:    true, firefox38: true, chrome45: true, },
    '.prototype.subarray':    {
        ejs:         true,
        edge:        true,
        firefox16:   true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        node:        true,
        iojs:        true,
    },
    '.prototype.join':        { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.indexOf':     { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.lastIndexOf': { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.slice':       { edge:    true, firefox38: true, ejs: true, chrome45: true, },
    '.prototype.every':       { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.filter':      { edge:    true, firefox38: true, chrome45: true, },
    '.prototype.forEach':     { edge:    true, firefox38: true, ejs: true, chrome45: true, },
    '.prototype.map':         { edge:    true, firefox38: true, chrome45: true, },
    '.prototype.reduce':      { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.reduceRight': { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.reverse':     { edge:    true, firefox37: true, chrome45: true, },
    '.prototype.some':        { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.sort':        { edge:    true, chrome45: true, },
    '.prototype.copyWithin':  { edge:    true, firefox34: true, chrome45: true, },
    '.prototype.find':        { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.findIndex':   { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.fill':        { edge:    true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.keys':        { edge:    true, chrome38: true, node: true, iojs: true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.values':      { edge:    true, chrome38: true, node: true, iojs: true, firefox37: true, ejs: true, chrome45: true, },
    '.prototype.entries':     { edge:    true, chrome38: true, node: true, iojs: true, firefox37: true, chrome45: true, },
    '.prototype[Symbol.iterator]':      { edge:    true, chrome38: true, node: true, iojs: true, firefox37: true, ejs: true, chrome45: true, },
    '[Symbol.species]':       {},
    };
    var eqFn = ' === "function"';
    var obj = {};
    for (var m in methods) {
      methods[m].typescript = typescript.fallthrough,

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
      };
    }
    return obj;
  }())),
},
{
  name: 'Map',
  category: 'built-ins',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var key = {};
        var map = new Map();

        map.set(key, 123);

        return map.has(key) && map.get(key) === 123;
      */},
      res: (temp.basicMap = {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      }),
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox16:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        new Map();
        try {
          Map();
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        ie11:        true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'constructor accepts null': {
      exec: function () {/*
        new Map(null);
        return true;
      */},
      res: temp.basicMap,
    },
    'constructor invokes set': {
      exec: function () {/*
        var passed = false;
        var _set = Map.prototype.set;

        Map.prototype.set = function(k, v) {
          passed = true;
        };

        new Map([ [1, 2] ]);
        Map.prototype.set = _set;

        return passed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox37:   true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new Map(iter);
        } catch(e){}
        return closed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
      },
    },
    'Map.prototype.set returns this': {
      exec: function () {/*
        var map = new Map();
        return map.set(0, 0) === map;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox33:   true,
        chrome38:    true,
        safari71_8:  true,
        node:        true,
        webkit:      true,
        iojs:        true,
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
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome39:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
        ejs:         true,
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.delete': {
      exec: function () {/*
        return typeof Map.prototype.delete === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.clear': {
      exec: function () {/*
        return typeof Map.prototype.clear === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.forEach': {
      exec: function () {/*
        return typeof Map.prototype.forEach === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox25:   true,
        chrome36:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.keys': {
      exec: function () {/*
        return typeof Map.prototype.keys === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox23:   true,
        safari71_8:  true,
        webkit:      true,
        chrome37:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.values': {
      exec: function () {/*
        return typeof Map.prototype.values === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox23:   true,
        safari71_8:  true,
        webkit:      true,
        chrome36:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype.entries': {
      exec: function () {/*
        return typeof Map.prototype.entries === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox23:   true,
        safari71_8:  true,
        webkit:      true,
        chrome36:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Map.prototype[Symbol.iterator]': {
      exec: function () {/*
        return typeof Map.prototype[Symbol.iterator] === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        firefox36:   true,
        chrome37:    flag,
        chrome38:    true,
        webkit:      true,
        edge:        true,
        node:        true,
        iojs:        true,
      },
    },
    'Map iterator prototype chain': {
      exec: function () {/*
        // Iterator instance
        var iterator = new Map()[Symbol.iterator]();
        // %MapIteratorPrototype%
        var proto1 = Object.getPrototypeOf(iterator);
        // %IteratorPrototype%
        var proto2 = Object.getPrototypeOf(proto1);

        return proto2.hasOwnProperty(Symbol.iterator) &&
          !proto1    .hasOwnProperty(Symbol.iterator) &&
          !iterator  .hasOwnProperty(Symbol.iterator) &&
          iterator[Symbol.iterator]() === iterator;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
        chrome45:    true,
      },
    },
    'Map[Symbol.species]': {
      exec: function () {/*
        var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
        return 'get' in prop && Map[Symbol.species] === Map;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        firefox41:   true,
      },
    },
  },
},
{
  name: 'Set',
  category: 'built-ins',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var obj = {};
        var set = new Set();

        set.add(123);
        set.add(123);

        return set.has(123);
      */},
      res: (temp.basicSet = {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true
      }),
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox16:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        new Set();
        try {
          Set();
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        ie11:        true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'constructor accepts null': {
      exec: function () {/*
        new Set(null);
        return true;
      */},
      res: temp.basicSet,
    },
    'constructor invokes add': {
      exec: function () {/*
        var passed = false;
        var _add = Set.prototype.add;

        Set.prototype.add = function(v) {
          passed = true;
        };

        new Set([1]);
        Set.prototype.add = _add;

        return passed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox37:   true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        var add = Set.prototype.add;
        Set.prototype.add = function(){ throw 0 };
        try {
          new Set(iter);
        } catch(e){}
        Set.prototype.add = add;
        return closed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
      },
    },
    'Set.prototype.add returns this': {
      exec: function () {/*
        var set = new Set();
        return set.add(0) === set;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox33:   true,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
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
        babel:       true,
        es6shim:     true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox29:   true,
        chrome39:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
        ejs:         true,
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true
      },
    },
    'Set.prototype.delete': {
      exec: function () {/*
        return typeof Set.prototype.delete === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox16:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype.clear': {
      exec: function () {/*
        return typeof Set.prototype.clear === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox23:   true,
        chrome21dev: flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype.forEach': {
      exec: function () {/*
        return typeof Set.prototype.forEach === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        ie11:        true,
        firefox25:   true,
        chrome36:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype.keys': {
      exec: function () {/*
        return typeof Set.prototype.keys === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox24:   true,
        safari71_8:  true,
        webkit:      true,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype.values': {
      exec: function () {/*
        return typeof Set.prototype.values === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox24:   true,
        safari71_8:  true,
        webkit:      true,
        chrome37:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype.entries': {
      exec: function () {/*
        return typeof Set.prototype.entries === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox24:   true,
        safari71_8:  true,
        webkit:      true,
        chrome37:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Set.prototype[Symbol.iterator]': {
      exec: function () {/*
        return typeof Set.prototype[Symbol.iterator] === "function";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        firefox36:   true,
        chrome37:    flag,
        chrome38:    true,
        webkit:      true,
        edge:        true,
        node:        true,
        iojs:        true,
      },
    },
    'Set iterator prototype chain': {
      exec: function () {/*
        // Iterator instance
        var iterator = new Set()[Symbol.iterator]();
        // %SetIteratorPrototype%
        var proto1 = Object.getPrototypeOf(iterator);
        // %IteratorPrototype%
        var proto2 = Object.getPrototypeOf(proto1);

        return proto2.hasOwnProperty(Symbol.iterator) &&
          !proto1    .hasOwnProperty(Symbol.iterator) &&
          !iterator  .hasOwnProperty(Symbol.iterator) &&
          iterator[Symbol.iterator]() === iterator;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
        chrome45:    true,
      },
    },
    'Set[Symbol.species]': {
      exec: function () {/*
        var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
        return 'get' in prop && Set[Symbol.species] === Set;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        firefox41:   true,
      },
    },
  },
},
{
  name: 'WeakMap',
  category: 'built-ins',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var key = {};
        var weakmap = new WeakMap();

        weakmap.set(key, 123);

        return weakmap.has(key) && weakmap.get(key) === 123;
      */},
      res: (temp.basicWeakMap = {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        ie11:        true,
        firefox11:   true,
        chrome21dev: flag,
        chrome36:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      }),
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
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox36:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        new WeakMap();
        try {
          WeakMap();
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        ie11:        true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'constructor accepts null': {
      exec: function () {/*
        new WeakMap(null);
        return true;
      */},
      res: temp.basicWeakMap,
    },
    'constructor invokes set': {
      exec: function () {/*
        var passed = false;
        var _set = WeakMap.prototype.set;

        WeakMap.prototype.set = function(k, v) {
          passed = true;
        };

        new WeakMap([ [{ }, 42] ]);
        WeakMap.prototype.set = _set;

        return passed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox37:   true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'frozen objects as keys': {
      exec: function () {/*
        var f = Object.freeze({});
        var m = new WeakMap;
        m.set(f, 42);
        return m.get(f) === 42;
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox11:   true,
        chrome21dev: flag,
        chrome36:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new WeakMap(iter);
        } catch(e){}
        return closed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
      },
    },
    'WeakMap.prototype.set returns this': {
      exec: function () {/*
        var weakmap = new WeakMap();
        var key = {};
        return weakmap.set(key, 0) === weakmap;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        chrome38:    true,
        firefox33:   true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'WeakMap.prototype.delete': {
      exec: function () {/*
        return typeof WeakMap.prototype.delete === "function";
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        ie11:        true,
        firefox11:   true,
        chrome21dev: flag,
        chrome36:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'no WeakMap.prototype.clear method': {
      exec: function () {/*
        if (!("clear" in WeakMap.prototype)) {
          return true;
        }
        var m = new WeakMap();
        var key = {};
        m.set(key, 2);
        m.clear();
        return m.has(key);
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        chrome43:    true,
        edge:        true,
        webkit:      true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'WeakSet',
  category: 'built-ins',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        var obj1 = {};
        var weakset = new WeakSet();

        weakset.add(obj1);
        weakset.add(obj1);

        return weakset.has(obj1);
      */},
      res: (temp.basicWeakSet = {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox34:   true,
        chrome30:    flag,
        chrome36:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      }),
    },
    'constructor arguments': {
      exec: function () {/*
        var obj1 = {}, obj2 = {};
        var weakset = new WeakSet([obj1, obj2]);

        return weakset.has(obj1) && weakset.has(obj2);
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox34:   true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        new WeakSet();
        try {
          WeakSet();
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        firefox37:   true,
        edge:        true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'constructor accepts null': {
      exec: function () {/*
        new WeakSet(null);
        return true;
      */},
      res: temp.basicWeakSet,
    },
    'constructor invokes add': {
      exec: function () {/*
        var passed = false;
        var _add = WeakSet.prototype.add;

        WeakSet.prototype.add = function(v) {
          passed = true;
        };

        new WeakSet([ { } ]);
        WeakSet.prototype.add = _add;

        return passed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox37:   true,
        chrome43:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new WeakSet(iter);
        } catch(e){}
        return closed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
      },
    },
    'WeakSet.prototype.add returns this': {
      exec: function () {/*
        var weakset = new WeakSet();
        var obj = {};
        return weakset.add(obj) === weakset;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        chrome38:    true,
        webkit:      true,
        firefox34:   true,
        node:        true,
        iojs:        true,
      },
    },
    'WeakSet.prototype.delete': {
      exec: function () {/*
        return typeof WeakSet.prototype.delete === "function";
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox34:   true,
        chrome30:    flag,
        chrome36:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'no WeakSet.prototype.clear method': {
      exec: function () {/*
        if (!("clear" in WeakSet.prototype)) {
          return true;
        }
        var s = new WeakSet();
        var key = {};
        s.add(key);
        s.clear();
        return s.has(key);
      */},
      res: {
        typescript:  typescript.corejs,
        chrome43:    true,
        webkit:      true,
        edge:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'Proxy',
  category: 'built-ins',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
  subtests: {
    'constructor requires new': {
      exec: function () {/*
        new Proxy({}, {});
        try {
          Proxy({}, {});
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox18:   true,
      },
    },
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox18:   {
          val: false,
          note_id: 'fx-proxy-get',
          note_html: 'Firefox 18 up to 37 doesn\'t allow a proxy\'s "get" handler to be triggered via the prototype chain, unless the proxied object does possess the named property (or the proxy\'s "has" handler reports it as present).'
        },
        firefox38:   true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox37:   true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        ejs:         true,
        typescript:  typescript.fallthrough,
        firefox31:   true,
        edge:        true,
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
        ejs:         true,
        typescript:  typescript.fallthrough,
        firefox23:   true,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox37:   true,
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
        typescript:  typescript.fallthrough,
        firefox18:   {
          val: false,
          note_id: 'fx-proxy-ownkeys',
          note_html: 'Available from Firefox 18 up to 33 as the draft standard <code>keys</code> handler'
        },
        firefox23:   { val: false, note_id: 'fx-proxy-ownkeys' },
        firefox33:   true,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
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
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox34:   true,
      },
    },
    'Array.isArray support': {
      exec: function () {/*
        return Array.isArray(new Proxy([], {}));
      */},
      res: {
        typescript:  typescript.fallthrough,
        firefox18:   true,
        edge:        true,
      },
    },
    'JSON.stringify support': {
      exec: function () {/*
        return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
      */},
      res: {
        typescript:  typescript.fallthrough,
        firefox18:   true,  // a bug in FF18
        firefox23:   false,
        firefox40:   true,
        edge:        true,
      },
    },
  },
},
{
  name: 'Reflect',
  category: 'built-ins',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflection',
  subtests: {
    'Reflect.get': {
      exec: function() {/*
        return Reflect.get({ qux: 987 }, "qux") === 987;
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.set': {
      exec: function() {/*
        var obj = {};
        Reflect.set(obj, "quux", 654);
        return obj.quux === 654;
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.has': {
      exec: function() {/*
        return Reflect.has({ qux: 987 }, "qux");
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.deleteProperty': {
      exec: function() {/*
        var obj = { bar: 456 };
        Reflect.deleteProperty(obj, "bar");
        return !("bar" in obj);
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
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
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.defineProperty': {
      exec: function() {/*
        var obj = {};
        Reflect.defineProperty(obj, "foo", { value: 123 });
        return obj.foo === 123;
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.getPrototypeOf': {
      exec: function() {/*
        return Reflect.getPrototypeOf([]) === Array.prototype;
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.setPrototypeOf': {
      exec: function() {/*
        var obj = {};
        Reflect.setPrototypeOf(obj, Array.prototype);
        return obj instanceof Array;
      */},
      res: {
        babel:       { val: false, note_id: 'compiler-proto' },
        typescript:  { val: false, note_id: 'compiler-proto' },
        ejs:         true,
        edge:        true,
        es6shim:     { val: false, note_id: 'compiler-proto' },
      },
    },
    'Reflect.isExtensible': {
      exec: function() {/*
        return Reflect.isExtensible({}) &&
          !Reflect.isExtensible(Object.preventExtensions({}));
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.preventExtensions': {
      exec: function() {/*
        var obj = {};
        Reflect.preventExtensions(obj);
        return !Object.isExtensible(obj);
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.enumerate': {
      exec: function() {/*
        var obj = { foo: 1, bar: 2 };
        var iterator = Reflect.enumerate(obj);
        var passed = 1;
        if (typeof Symbol === 'function' && 'iterator' in Symbol) {
          passed &= Symbol.iterator in iterator;
        }
        var item = iterator.next();
        passed &= item.value === "foo" && item.done === false;
        item = iterator.next();
        passed &= item.value === "bar" && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed === 1;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
      },
    },
    'Reflect.ownKeys': {
      exec: function() {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;
        
        var expected = [];
        for (var key in obj) { expected.push(key); }

        return Reflect.ownKeys(obj).join('') === expected.join('');
      */},
      res: {
        babel:       true,
        typescript:  true,
        ejs:         true,
        es6shim:     true,
        edge:        true,
      },
    },
    'Reflect.ownKeys, key order': {
      exec: function() {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Reflect.ownKeys(obj).join('') === "012349 DB-1AC";
      */},
      res: {
        babel:       { val: false, note_id: "forin-order", note_html: "This uses native for-in enumeration order, rather than the correct order." },
        typescript:  { val: false, note_id: "forin-order" },
        ejs:         true,
        es6shim:     { val: false, note_id: "forin-order" },
        edge:        true,
      },
    },
    'Reflect.ownKeys, symbol order': {
      exec: function() {/*
        var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
        var obj = {
          1:    true,
          A:    true,
        };
        obj.B = true;
        obj[sym1] = true;
        obj[2] = true;
        obj[sym2] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
        Object.defineProperty(obj, 'D', { value: true, enumerable: true });

        var result = Reflect.ownKeys(obj);
        var l = result.length;
        return result[l-3] === sym1 && result[l-2] === sym2 && result[l-1] === sym3;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
      }
    },
    'Reflect.apply': {
      exec: function() {/*
        return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.construct': {
      exec: function() {/*
        return Reflect.construct(function(a, b, c) {
          this.qux = a + b + c;
        }, ["foo", "bar", "baz"]).qux === "foobarbaz";
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        es6shim:     true,
      },
    },
    'Reflect.construct, new.target': {
      exec: function() {/*
        return Reflect.construct(function(a, b, c) {
          if (new.target === Object) {
            this.qux = a + b + c;
          }
        }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
      */},
      res: {
          typescript:  typescript.fallthrough,
      },
    },
  },
},
{
  name: 'block-level function declaration',
  category: 'bindings',
  significance: 'small',
  note_id: 'block-level-function',
  note_html: 'Note that prior to ES6, it was <a href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">recommended</a> that ES5 implementations forbid block-level declarations in strict mode.',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
  exec: function () {/*
    'use strict';
    function f() { return 1; }
    {
      function f() { return 2; }
    }
    return f() === 1;
  */},
  res: {
    babel:       true,
    tr:          true,
    closure:     true,
    ie11:        true,
    chrome21dev: flag,
    chrome41:    true,
    node:        flag,
    iojs:        true,
  }
},
{
  name: 'destructuring',
  category: 'syntax',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
  subtests: {
    'with arrays': {
      exec: function(){/*
        var [a, , [b], c] = [5, null, [6]];
        var d, e;
        [d,e] = [7,8];
        return a === 5 && b === 6 && c === undefined
          && d === 7 && e === 8;
      */},
      res: (temp.destructuringResults = {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
      }),
    },
    'with strings': {
      exec: function(){/*
        var [a, b, c] = "ab";
        var d, e;
        [d,e] = "de";
        return a === "a" && b === "b" && c === undefined
          && d === "d" && e === "e";
      */},
      res: {
        tr:          true,
        babel:       true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        typescript:  true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
      },
    },
    'with astral plane strings': {
      exec: function(){/*
        var c;
        [c] = "𠮷𠮶";
        return c === "𠮷";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        firefox34:   true,
        webkit:      true,
      },
    },
    'with generator instances': {
      exec: function(){/*
        var [a, b, c] = (function*(){ yield 1; yield 2; }());
        var d, e;
        [d, e] = (function*(){ yield 3; yield 4; }());
        return a === 1 && b === 2 && c === undefined
          && d === 3 && e === 4;
      */},
      res: {
        tr:           true,
        typescript:   typescript.fallthrough,
        firefox34:    true,
        babel:        true,
      },
    },
    'with generic iterables': {
      exec: function(){/*
        var [a, b, c] = global.__createIterableObject([1, 2]);
        var d, e;
        [d, e] = global.__createIterableObject([3, 4]);
        return a === 1 && b === 2 && c === undefined
          && d === 3 && e === 4;
      */},
      res: {
        tr:           true,
        typescript:   typescript.fallthrough,
        firefox34:    true,
        webkit:       true,
        babel:        true,
      },
    },
    'with instances of generic iterables': {
      exec: function(){/*
        var [a, b, c] = Object.create(global.__createIterableObject([1, 2]))
        var d, e;
        [d, e] = Object.create(global.__createIterableObject([3, 4]));
        return a === 1 && b === 2 && c === undefined
          && d === 3 && e === 4;
      */},
      res: {
        tr:           true,
        babel:        true,
        typescript:   typescript.fallthrough,
        firefox36:    true,
        webkit:       true,
      },
    },
    'iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        var [a, b] = iter;
        return closed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.fallthrough,
        webkit:      true,
      },
    },
    'iterable destructuring expression': {
      exec: function() {/*
        var a, b, iterable = [1,2];
        return ([a, b] = iterable) === iterable;
      */},
      res: {
        tr:           true,
        babel:        true,
        typescript:   true,
        es6tr:        true,
        firefox11:    true,
        safari71_8:   true,
        webkit:       true,
      },
    },
    'chained iterable destructuring': {
      exec: function() {/*
        var a,b,c,d;
        [a,b] = [c,d] = [1,2];
        return a === 1 && b === 2 && c === 1 && d === 2;
      */},
      res: {
        tr:           true,
        babel:        true,
        typescript:   true,
        es6tr:        true,
        firefox11:    true,
        safari71_8:   true,
        webkit:       true,
      },
    },
    'trailing commas in iterable patterns': {
      exec: function(){/*
        var [a,] = [1];
        return a === 1;
      */},
      res: Object.assign({}, temp.destructuringResults, {
        webkit:       true,
        safari71_8:   false,
        babel:        true,
        typescript:   true,
        tr:           false,
        closure:      false,
      }),
    },
    'with objects': {
      exec: function(){/*
        var {c, x:d, e} = {c:7, x:8};
        var f, g;
        ({f,g} = {f:9,g:10});
        return c === 7 && d === 8 && e === undefined
          && f === 9 && g === 10;
      */},
      res: Object.assign({}, temp.destructuringResults, {
        firefox11:    {
          val: true,
          note_id: "ff11-object-destructuring",
          note_html: "Firefox < 16 incorrectly treats <code>({f,g} = {f:9,g:10})</code> as assigning to global variables instead of locals."
        },
        firefox16:    true,
        webkit:       true,
        safari71_8:   true,
        typescript:   true
      }),
    },
    'object destructuring with primitives': {
      exec: function(){/*
        var {toFixed} = 2;
        var {slice} = '';
        var toString, match;
        ({toString} = 2);
        ({match} = '');
        return toFixed === Number.prototype.toFixed
          && toString === Number.prototype.toString
          && slice === String.prototype.slice
          && match === String.prototype.match;
      */},
      res: Object.assign({}, temp.destructuringResults, {
        webkit:       true,
        safari71_8:   true,
        typescript:   true
      }),
    },
    'trailing commas in object patterns': {
      exec: function(){/*
        var {a,} = {a:1};
        return a === 1;
      */},
      res: Object.assign({}, temp.destructuringResults, {
        webkit:       true,
        safari71_8:   false,
        typescript:   true
      }),
    },
    'object destructuring expression': {
      exec: function() {/*
        var a, b, obj = { a:1, b:2 };
        return ({a,b} = obj) === obj;
      */},
      res: {
        tr:           true,
        babel:        true,
        typescript:   true,
        es6tr:        true,
        firefox16:    true,
        safari71_8:   true,
        webkit:       true,
      },
    },
    'parenthesised left-hand-side is a syntax error': {
      exec: function() {/*
        var a, b;
        ({a,b} = {a:1,b:2});
        try {
          eval("({a,b}) = {a:3,b:4};");
        }
        catch(e) {
          return a === 1 && b === 2;
        }
      */},
      res: {
        tr:           true,
        babel:        true,
        typescript:   true,
        safari71_8:   true,
        webkit:       true,
        firefox41:    true,
      },
    },
    'chained object destructuring': {
      exec: function() {/*
        var a,b,c,d;
        ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
        return a === 1 && b === 2 && c === 3 && d === 4;
      */},
      res: {
        tr:           true,
        firefox16:    true,
        babel:        true,
        typescript:   true,
        es6tr:        true,
        webkit:       true,
        safari71_8:   true,
      },
    },
    'throws on null and undefined': {
      exec: function(){/*
        try {
          var {a} = null;
          return false;
        } catch(e) {}
        try {
          var {b} = undefined;
          return false;
        } catch(e) {}
        return true;
      */},
      res: Object.assign({}, temp.destructuringResults, {
        closure:      false,
        webkit:       true,
        typescript:   true
      }),
    },
    'computed properties': {
      exec: function(){/*
        var qux = "corge";
        var { [qux]: grault } = { corge: "garply" };
        return grault === "garply";
      */},
      res: {
        babel:       true,
        closure:     true,
        tr:          true,
        es6tr:       true,
        firefox35:   true,
      },
    },
    'multiples in a single var statement': {
      exec: function() {/*
        var [a,b] = [5,6], {c,d} = {c:7,d:8};
        return a === 5 && b === 6 && c === 7 && d === 8;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
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
        var {h, x:[i]} = {h:11, x:[12]};
        return e === 9 && f === 10 && g === undefined
          && h === 11 && i === 12;
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
      },
    },
    'in parameters, new Function() support': {
      exec: function(){/*
        return new Function("{a, x:b, y:e}","[c, d]",
          "return a === 1 && b === 2 && c === 3 && "
          + "d === 4 && e === undefined;"
        )({a:1, x:2}, [3, 4]);
      */},
      res: {
        safari71_8:  true,
        webkit:      true,
        typescript:  typescript.fallthrough,
      },
    },
    'in parameters, function \'length\' property': {
      exec: function(){/*
        return function({a, b}, [c, d]){}.length === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        ejs:         true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
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
        babel:       true,
        closure:     true,
        firefox11:   true,
        safari71_8:  true,
        webkit:      true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        closure:     true,
        firefox13:   true,
        safari71_8:  true,
        webkit:      true,
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
        babel:       true,
        typescript:  true,
        es6tr:       true,
        jsx:         true,
        closure:     true,
        firefox34:   true,
        webkit:      true,
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
        babel:        true,
        typescript:   true,
      },
    },
    'defaults': {
      exec: function(){/*
        var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
        var [d = 0, e = 5, f = 6] = [4,,undefined];
        return a === 1 && b === 2 && c === 3
          && d === 4 && e === 5 && f === 6;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        closure:     true,
        webkit:      true,
      },
    },
    'defaults in parameters': {
      exec: function(){/*
        return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
            [f = 6, g = 0, h = 8]) {
          return a === 1 && b === 2 && c === 3 && d === 4 &&
            e === 5 && f === 6 && g === 7 && h === 8;
        }({b:2, c:undefined, x:4},[, 7, undefined]));
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        closure:     true,
      },
    },
    'defaults, let temporal dead zone': {
      exec: function(){/*
        var {a, b = 2} = {a:1};
        try {
          eval("let {c = c} = {};");
          return false;
        } catch(e){}
        try {
          eval("let {c = d, d} = {d:1};");
          return false;
        } catch(e){}
        return a === 1 && b === 2;
      */},
      res: {
        babel:        flag,
        typescript:   true,
        webkit:       true,
      },
    },
    'defaults in parameters, separate scope': {
      exec: function(){/*
        return (function({a=function(){
          return typeof b === 'undefined';
        }}){
          var b = 1;
          return a();
        }({}));
      */},
      res: {
        babel:       true,
        closure:     true,
      },
    },
    'defaults in parameters, new Function() support': {
      exec: function(){/*
        return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
          "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
        )({b:2, c:undefined, x:4});
      */},
      res: {
        typescript:   typescript.fallthrough,
      },
    },
  },
},
{
  name: 'Promise',
  category: 'built-ins',
  significance: 'large',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
  subtests: {
    'basic functionality': {
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome33:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'constructor requires new': {
      exec: function () {/*
        new Promise(function(){});
        try {
          Promise(function(){});
          return false;
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        firefox37:   true,
        edge:        true,
        chrome43:    true,
        iojs:        true,
      },
    },
    'Promise.all': {
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome33:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Promise.all, generic iterables': {
      exec: function () {/*
        var fulfills = Promise.all(global.__createIterableObject([
          new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
        ]));
        var rejects = Promise.all(global.__createIterableObject([
          new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
        ]));
        var score = 0;
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */},
      res: {
        babel:       true,
        es6shim:     true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox38:   true,
        chrome43:    true,
        webkit:      true,
      },
    },
    'Promise.race': {
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
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome33:    true,
        webkit:      true,
        safari71_8:  true,
        node:        true,
        iojs:        true,
      },
    },
    'Promise.race, generic iterables': {
      exec: function () {/*
        var fulfills = Promise.race(global.__createIterableObject([
          new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
          new Promise(function(_, reject) { setTimeout(reject, 300,"bar"); }),
        ]));
        var rejects = Promise.race(global.__createIterableObject([
          new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
          new Promise(function(resolve)   { setTimeout(resolve,300,"qux"); }),
        ]));
        var score = 0;
        fulfills.then(function(result) { score += (result === "foo"); check(); });
        rejects.catch(function(result) { score += (result === "baz"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */},
      res: {
        babel:       true,
        es6shim:     true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox38:   true,
        chrome43:    true,
        webkit:      true,
        iojs:        false,
      },
    },
    'Promise[Symbol.species]': {
      exec: function () {/*
        var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
        return 'get' in prop && Promise[Symbol.species] === Promise;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      },
    },
  },
},
{
  name: 'Object static methods',
  category: 'built-in extensions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor',
  subtests: {
    'Object.assign': {
      exec: function () {/*
        var o = Object.assign({a:true}, {b:true}, {c:true});
        return "a" in o && "b" in o && "c" in o;
      */},
      res: {
        tr:          true,
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox34:   true,
        webkit:      true,
        chrome45:    true,
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
        es6shim:     true,
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox23:   true,
        chrome19dev: true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Object.getOwnPropertySymbols': {
      exec: function () {/*
        var o = {};
        var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
        o[sym]  = true;
        o[sym2] = true;
        o[sym3] = true;
        var result = Object.getOwnPropertySymbols(o);
        return result[0] === sym
          && result[1] === sym2
          && result[2] === sym3;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        ejs:         true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome34:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'Object.setPrototypeOf': {
      exec: function () {/*
        return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
      */},
      res: {
        ejs:         true,
        babel:       { val: false, note_id: 'compiler-proto' },
        typescript:  { val: false, note_id: 'compiler-proto' },
        es6shim:     { val: false, note_id: 'compiler-proto' },
        ie11:        true,
        firefox31:   true,
        chrome34:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'Object static methods accept primitives',
  category: 'misc',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor',
  subtests: {
    'Object.getPrototypeOf': {
      exec: function () {/*
        return Object.getPrototypeOf('a').constructor === String;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.getOwnPropertyDescriptor': {
      exec: function () {/*
        return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.getOwnPropertyNames': {
      exec: function () {/*
        var s = Object.getOwnPropertyNames('a');
        return s.length === 2 &&
          ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
      */},
      res: {
        babel:       true,
        typescript:  true,
        edge:        true,
        firefox33:   true,
        chrome40:    true,
        iojs:        true,
        es6shim:     true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.seal': {
      exec: function () {/*
        return Object.seal('a') === 'a';
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.freeze': {
      exec: function () {/*
        return Object.freeze('a') === 'a';
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.preventExtensions': {
      exec: function () {/*
        return Object.preventExtensions('a') === 'a';
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.isSealed': {
      exec: function () {/*
        return Object.isSealed('a') === true;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.isFrozen': {
      exec: function () {/*
        return Object.isFrozen('a') === true;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.isExtensible': {
      exec: function () {/*
        return Object.isExtensible('a') === false;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        webkit:      true,
        chrome44:    true
      },
    },
    'Object.keys': {
      exec: function () {/*
        var s = Object.keys('a');
        return s.length === 1 && s[0] === '0';
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox35:   true,
        chrome40:    true,
        webkit:      true,
        iojs:        true,
        chrome44:    true
      },
    },
  },
},
{
  name: 'Object.prototype.__proto__',
  category: 'annex b',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.__proto__',
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
        iojs:        true,
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
    'absent from Object.create(null)': {
      exec: function () {/*
        var o = Object.create(null), p = {};
        o.__proto__ = p;
        return Object.getPrototypeOf(o) !== p;
      */},
      res: (temp.advancedProtoResults = {
        ie11:        true,
        firefox11:   true,
        chrome30:    true,
        safari6:     true,
        webkit:      true,
        opera:       true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      }),
    },
    'present in hasOwnProperty()': {
      exec: function () {/*
        return Object.prototype.hasOwnProperty('__proto__');
      */},
      res: Object.assign({}, temp.advancedProtoResults, {
        konq49:      true,
        safari51:    true,
      }),
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
      res: Object.assign({}, temp.advancedProtoResults, {
        firefox11: false,
        rhino17:   false,
        firefox17: true,
      }),
    },
    'present in Object.getOwnPropertyNames()': {
      exec: function () {/*
        return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
      */},
      res: Object.assign({}, temp.advancedProtoResults, {
        firefox11: false,
        firefox39: true,
        rhino17:   false,
      }),
    },
  },
},
{
  name: 'function "name" property',
  category: 'built-in extensions',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname',
  subtests: {
    'function statements': {
      exec: function () {/*
        function foo(){};
        return foo.name === 'foo' &&
          (function(){}).name === '';
      */},
      res: (temp.legacyFunctionNameResults = {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        firefox11:   true,
        edge:        true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
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
        edge:        true,
        safari51:    true,
        webkit:      true,
        konq49:      true,
        rhino17:     true,
      },
    },
    'bound functions': {
      exec: function() {/*
        function foo() {};
        return foo.bind({}).name === "bound foo" &&
          (function(){}).bind({}).name === "bound ";
      */},
      res: {
        ejs:         true,
        edge:        true,
        chrome45:    true,
      },
    },
    'variables (function)': {
      exec: function() {/*
        var foo = function() {};
        var bar = function baz() {};
        return foo.name === "foo" && bar.name === "baz";
      */},
      res: {
        edge:        flag,
        babel:       true,
      },
    },
    'object methods (function)': {
      exec: function() {/*
        var o = { foo: function(){}, bar: function baz(){}};
        o.qux = function(){};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "";
      */},
      res: {
        babel:       true,
        edge:        flag,
      },
    },
    'accessor properties': {
      exec: function() {/*
        var o = { get foo(){}, set foo(x){} };
        var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
        return descriptor.get.name === "get foo" &&
               descriptor.set.name === "set foo";
      */},
      res: {
        edge:          true,
      },
    },
    'shorthand methods': {
      exec: function() {/*
        var o = { foo(){} };
        return o.foo.name === "foo";
      */},
      res: {
        babel:        true,
        firefox34:    true,
        edge:         flag,
        chrome41:     flag,
        chrome42:     true,
        webkit:       true,
        iojs:         true,
      },
    },
    'shorthand methods (no lexical binding)': {
      exec: function() {/*
        var f = "foo";
        return ({f() { return f; }}).f() === "foo";
      */},
      res: {
        babel:        true,
        typescript:   true,
        firefox34:    true,
        edge:         true,
        chrome41:     flag,
        chrome42:     true,
        iojs:         true,
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
      res: {
        edge:        true,
      },
    },
    'class statements': {
      exec: function() {/*
        class foo {};
        class bar { static name() {} };
        return foo.name === "foo" &&
          typeof bar.name === "function";
      */},
      res: {
        babel:       { val: false, note_id: "name-configurable", },
        edge:        flag,
        chrome43:    strict,
      },
    },
    'class expressions': {
      exec: function() {/*
        return class foo {}.name === "foo" &&
          typeof class bar { static name() {} }.name === "function";
      */},
      res: {
        babel:       {
          val: false,
          note_id: "name-configurable",
          note_html: 'Requires function "name" properties to be natively configurable',
        },
        edge:        flag,
        chrome43:    strict,
      },
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
      res: {
        babel:       true,
        edge:        flag,
      },
    },
    'object methods (class)': {
      exec: function() {/*
        var o = { foo: class {}, bar: class baz {}};
        o.qux = class {};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "";
      */},
      res: {
        babel:        true,
        edge:         flag,
      },
    },
    'class prototype methods': {
      exec: function() {/*
        class C { foo(){} };
        return (new C).foo.name === "foo";
      */},
      res: {
        babel:        true,
        edge:         flag,
        webkit:       true,
        chrome43:     strict,
      },
    },
    'class static methods': {
      exec: function() {/*
        class C { static foo(){} };
        return C.foo.name === "foo";
      */},
      res: {
        babel:        true,
        edge:         flag,
        webkit:       true,
        chrome43:     strict,
      },
    },
    'isn\'t writable, is configurable': {
      exec: function () {/*
        var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
        return descriptor.enumerable   === false &&
               descriptor.writable     === false &&
               descriptor.configurable === true;
      */},
      res: {
        edge:         true,
        firefox38:    true,
        chrome43:     true,
      },
    },
  },
},
{
  name: 'String static methods',
  category: 'built-in extensions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-constructor',
  subtests: {
    'String.raw': {
      exec: function() {/*
        return typeof String.raw === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox34:   true,
        chrome41:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'String.fromCodePoint': {
      exec: function() {/*
        return typeof String.fromCodePoint === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome38:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
  },
},
{
  name: 'String.prototype methods',
  category: 'built-in extensions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object',
  subtests: {
    'String.prototype.codePointAt': {
      exec: function () {/*
        return typeof String.prototype.codePointAt === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox29:   true,
        chrome38:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'String.prototype.normalize': {
      exec: function () {/*
        return typeof String.prototype.normalize === "function"
          && "c\u0327\u0301".normalize("NFC") === "\u1e09"
          && "\u1e09".normalize("NFD") === "c\u0327\u0301";
      */},
      res: {
        edge:        true,
        firefox31:   true,
        chrome34:    true,
        chrome41:    true,
      },
    },
    'String.prototype.repeat': {
      exec: function () {/*
        return typeof String.prototype.repeat === 'function'
          && "foo".repeat(3) === "foofoofoo";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox24:   true,
        webkit:      true,
        chrome30:    flag,
        chrome41:    true,
        node:        flag,
        iojs:        true,
      },
    },
    'String.prototype.startsWith': {
      exec: function () {/*
        return typeof String.prototype.startsWith === 'function'
          && "foobar".startsWith("foo");
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox17:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'String.prototype.endsWith': {
      exec: function () {/*
        return typeof String.prototype.endsWith === 'function'
          && "foobar".endsWith("bar");
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox17:   true,
        chrome30:    flag,
        chrome41:    true,
        webkit:      true,
        node:        flag,
        iojs:        true,
      },
    },
    'String.prototype.includes': {
      exec: function () {/*
        return typeof String.prototype.includes === 'function'
          && "foobar".includes("oba");
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        firefox18:   {
          val: false,
          note_id: 'string-contains',
          note_html: 'Available as the draft standard <code>String.prototype.contains</code>'
        },
        firefox40:   true,
        chrome30:    { val: false, note_id: 'string-contains' },
        chrome41:    true,
        webkit:      true,
        node:        { val: flag, note_id: 'string-contains' },
        iojs:        true,
        edge:        true,
      },
    },
    'String.prototype[Symbol.iterator]': {
      exec: function () {/*
        return typeof String.prototype[Symbol.iterator] === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox36:   true,
        chrome37:    flag,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'String iterator prototype chain': {
      exec: function () {/*
        // Iterator instance
        var iterator = ''[Symbol.iterator]();
        // %StringIteratorPrototype%
        var proto1 = Object.getPrototypeOf(iterator);
        // %IteratorPrototype%
        var proto2 = Object.getPrototypeOf(proto1);

        return proto2.hasOwnProperty(Symbol.iterator) &&
          !proto1    .hasOwnProperty(Symbol.iterator) &&
          !iterator  .hasOwnProperty(Symbol.iterator) &&
          iterator[Symbol.iterator]() === iterator;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
        chrome45:    true,
      },
    },
  },
},
{
  name: 'String.prototype HTML methods',
  category: 'annex b',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.anchor',
  subtests: {
    existence: {
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
        es6shim:     true,
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      },
    },
    'tags\' names are lowercase': {
      exec: function () {/*
        var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
          "italics", "link", "small", "strike", "sub", "sup"];
        for (i = 0; i < names.length; i++) {
          if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
            return false;
          }
        }
        return true;
      */},
      res: {
        es6shim:     true,
        edge:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      },
    },
    'quotes in arguments are escaped': {
      exec: function () {/*
        var i, names = ["anchor", "fontcolor", "fontsize", "link"];
        for (i = 0; i < names.length; i++) {
          if (""[names[i]]('"') !== ""[names[i]]('&' + 'quot;')) {
            return false;
          }
        }
        return true;
      */},
      res: {
        es6shim:     true,
        edge:        true,
        firefox17:   true,
        chrome:      true,
        safari6:     true,
        webkit:      true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'Unicode code point escapes',
  category: 'syntax',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-string-literals',
  subtests: {
    'in strings': {
      exec: function () {/*
        return '\u{1d306}' == '\ud834\udf06';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        es6tr:       true,
        ejs:         true,
        closure:     true,
        edge:        true,
        webkit:      true,
        chrome44:    true,
        firefox40:   true,
      }
    },
    'in identifiers': {
      exec: function(){/*
        var \u{102C0} = { \u{102C0} : 2 };
        return \u{102C0}['\ud800\udec0'] === 2;
      */},
      res: {
        edge:        true,
        chrome44:    true,
        webkit:      true,
      }
    },
  }
},
{
  name: 'new.target',
  category: 'syntax',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects',
  subtests: {
    'in constructors': {
      exec: function () {/*
        var passed = false;
        new function f() {
          passed = (new.target === f);
        }();
        (function() {
          passed &= (new.target === undefined);
        }());
        return passed;
      */},
      res: {
        firefox41:   true,
      }
    },
    'can\'t be assigned to': {
      exec: function(){/*
        var passed = false;
        new function f() {
          passed = (new.target === f);
        }();

        try {
          Function("new.target = function(){};");
        } catch(e) {
          return passed;
        }
      */},
      res: {
        firefox41:   true,
      }
    },
  }
},
{
  name: 'Symbol',
  category: 'built-ins',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
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
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome30:    flag, // Actually Chrome 29
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'typeof support': {
      exec: function(){/*
        return typeof Symbol() === "symbol";
      */},
      res: {
        tr:          flag,
        babel:       flag,
        typescript:  typescript.fallthrough,
        ejs:         true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome30:    flag, // Actually Chrome 29
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'symbol keys are hidden to pre-ES6 code': {
      exec: function(){/*
        var object = {};
        var symbol = Symbol();
        object[symbol] = 1;

        for (var x in object){}
        var passed = !x;

        if (Object.keys && Object.getOwnPropertyNames) {
          passed &= Object.keys(object).length === 0
            && Object.getOwnPropertyNames(object).length === 0;
        }

        return passed;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome30:    flag, // Actually Chrome 29
        chrome38:    true,
        node:        true,
        iojs:        true,
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
        typescript:  typescript.corejs,
        ejs:         true,
        babel:       true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome30:    flag, // Actually Chrome 29
        chrome38:    true,
        node:        true,
        iojs:        true,
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
        typescript:  true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome38:    true,
        node:        true,
        iojs:        true,
      },
    },
    'can convert with String()': {
      exec: function(){/*
        return String(Symbol("foo")) === "Symbol(foo)";
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
        edge:        true,
        chrome39:    true,
        firefox36:   true,
        webkit:      true,
        iojs:        true,
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
        ejs:        true,
        tr:         true,
        babel:      true,
        typescript: true,
        edge:       true,
        firefox36:  true,
        webkit:     true,
        chrome35:   flag,
        chrome38:   true,
        node:       true,
        iojs:       true,
      },
    },
    'Object(symbol)': {
      exec: function(){/*
        var symbol = Symbol();
        var symbolObject = Object(symbol);

        return typeof symbolObject === "object" &&
          symbolObject == symbol &&
          symbolObject !== symbol &&
          symbolObject.valueOf() === symbol;
      */},
      res: {
        typescript:  typescript.fallthrough,
        edge:        true,
        firefox36:   true,
        chrome30:    flag,
        chrome35:    false,
        webkit:      true,
      },
    },
    'global symbol registry': {
      exec: function() {/*
        var symbol = Symbol.for('foo');
        return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        firefox36:   true,
        chrome35:    flag,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'well-known symbols',
  category: 'built-ins',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols',
  note_id: 'symbol-iterator-functionality',
  note_html: 'Functionality for <code>Symbol.iterator</code> is tested by the "generic iterators" subtests for '
    + 'the <a href="#spread_(...)_operator">spread (...) operator</a>, <a href="#for..of_loops">for..of loops</a>, '
    + '<a href="#destructuring">destructuring</a>, <a href="#generators">yield *</a>, '
    + 'and <a href="#Array_static_methods">Array.from</a>.',
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
        typescript:  typescript.fallthrough,
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
        typescript: typescript.fallthrough,
        ejs:        true,
      },
    },
    'Symbol.iterator, existence': {
      exec: function() {/*
        return "iterator" in Symbol;
      */},
      res: {
        tr:          true,
        babel:       true,
        closure:     true,
        typescript:  typescript.corejs,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome37:    flag,
        chrome38:    true,
        ejs:         true,
        node:        true,
        iojs:        true,
      },
    },
    'Symbol.iterator, arguments object': {
      exec: function() {/*
        return (function() {
          return typeof arguments[Symbol.iterator] === 'function'
            && Object.hasOwnProperty.call(arguments, Symbol.iterator);
        }());
      */},
      res: {
        chrome37:    flag,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
        edge:        true,
      },
    },
    'Symbol.species, existence': {
      exec: function() {/*
        return "species" in Symbol;
      */},
      res: {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        firefox41:   true,
      },
    },
    'Symbol.species, Array.prototype.concat': {
      exec: function () {/*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.concat.call(obj, []).foo === 1;
      */},
      res: {
      }
    },
    'Symbol.species, Array.prototype.filter': {
      exec: function () {/*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.filter.call(obj, Boolean).foo === 1;
      */},
      res: {
      }
    },
    'Symbol.species, Array.prototype.map': {
      exec: function () {/*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.map.call(obj, Boolean).foo === 1;
      */},
      res: {
      }
    },
    'Symbol.species, Array.prototype.slice': {
      exec: function () {/*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.slice.call(obj, 0).foo === 1;
      */},
      res: {
      }
    },
    'Symbol.species, Array.prototype.splice': {
      exec: function () {/*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.splice.call(obj, 0).foo === 1;
      */},
      res: {
      }
    },
    'Symbol.species, RegExp.prototype[Symbol.split]': {
      exec: function () {/*
        var passed = false;
        var obj = { constructor: {} };
        obj[Symbol.split] = RegExp.prototype[Symbol.split];
        obj.constructor[Symbol.species] = function() {
          passed = true;
          return /./;
        };
        "".split(obj);
        return passed;
      */},
      res: {
      }
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
        ejs:         true,
        typescript:  typescript.fallthrough,
      },
    },
    'Symbol.toStringTag': {
      exec: function() {/*
        var a = {};
        a[Symbol.toStringTag] = "foo";
        return (a + "") === "[object foo]";
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        chrome40:    flag,
        iojs:        flag,
      },
    },
    'Symbol.toStringTag, misc. built-ins': {
      exec: function() {/*
        var s = Symbol.toStringTag;
        return Math[s] === "Math"
          && JSON[s] === "JSON";
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        chrome40:    flag,
        iojs:        flag,
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
        edge:        true,
        chrome38:    true,
        webkit:      true,
        ejs: {
          val: false,
          note_id: 'ejs-no-with',
          note_html: '<code>with</code> is not supported in ejs'
        },
        typescript:  typescript.fallthrough,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'RegExp.prototype properties',
  category: 'built-in extensions',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype',
  subtests: {
    'RegExp.prototype.flags': {
      exec: function () {/*
        return /./igm.flags === "gim" && /./.flags === "";
      */},
      res: {
        babel:       true,
        ejs:         true,
        typescript:  typescript.corejs,
        es6shim:     true,
        firefox37:   true,
        webkit:      true,
      },
    },
    'RegExp.prototype[Symbol.match]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.match] === 'function';
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
      },
    },
    'RegExp.prototype[Symbol.replace]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.replace] === 'function';
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
      },
    },
    'RegExp.prototype[Symbol.split]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.split] === 'function';
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
      },
    },
    'RegExp.prototype[Symbol.search]': {
      exec: function () {/*
        return typeof RegExp.prototype[Symbol.search] === 'function';
      */},
      res: {
        ejs:         true,
        typescript:  typescript.fallthrough,
      },
    },
    'RegExp[Symbol.species]': {
      exec: function () {/*
        var prop = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
        return 'get' in prop && RegExp[Symbol.species] === RegExp;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      },
    },
  }
},
// As this one is Annex B, it is separate from the above.
{
  name: 'RegExp.prototype.compile',
  category: 'annex b',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.compile',
  exec: function () {/*
    return typeof RegExp.prototype.compile === 'function';
  */},
  res: {
    tr:          false,
    ejs:         false,
    closure:     false,
    ie10:        true,
    firefox11:   true,
    chrome:      true,
    safari51:    true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    node:        true,
    iojs:        true,
  }
},
{
  name: 'RegExp syntax extensions',
  category: 'annex b',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regular-expressions-patterns',
  subtests: {
    'hyphens in character sets': {
      exec: function() {/*
        return /[\w-_]/.exec("-")[0] === "-";
      */},
      res: (temp.regExpExtensions = {
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      }),
    },
    'invalid character escapes': {
      exec: function() {/*
        return /\z/.exec("\\z")[0] === "z"
          && /[\z]/.exec("[\\z]")[0] === "z";
      */},
      res: temp.regExpExtensions,
    },
    'invalid control-character escapes': {
      exec: function() {/*
        return /\c2/.exec("\\c2")[0] === "\\c2";
      */},
      res: temp.regExpExtensions,
    },
    'invalid unicode escapes': {
      exec: function() {/*
        return /\u1/.exec("u1")[0] === "u1"
          && /[\u1]/.exec("u")[0] === "u";
      */},
      res: Object.assign({}, temp.regExpExtensions, { opera: false }),
    },
    'invalid hexadecimal escapes': {
      exec: function() {/*
        return /\x1/.exec("x1")[0] === "x1"
          && /[\x1]/.exec("x")[0] === "x";
      */},
      res: Object.assign({}, temp.regExpExtensions, { opera: false }),
    },
    'incomplete patterns and quantifiers': {
      exec: function() {/*
        return /x{1/.exec("x{1")[0] === "x{1"
          && /x]1/.exec("x]1")[0] === "x]1";
      */},
      res: temp.regExpExtensions,
    },
    'octal escape sequences': {
      exec: function() {/*
        return /\041/.exec("!")[0] === "!"
          && /[\041]/.exec("!")[0] === "!";
      */},
      res: temp.regExpExtensions,
    },
    'invalid backreferences become octal escapes': {
      exec: function() {/*
        return /\41/.exec("!")[0] === "!"
          && /[\41]/.exec("!")[0] === "!";
      */},
      res: temp.regExpExtensions,
    },
  },
},
{
  name: 'Array static methods',
  category: 'built-in extensions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-array-constructor',
  subtests: {
    'Array.from, array-like objects': {
      exec: function () {/*
        return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        ejs:         true,
        edge:        true,
        firefox32:   true,
        webkit:      true,
        chrome45:    true,
      }
    },
    'Array.from, generator instances': {
      exec: function () {/*
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        return Array.from(iterable) + '' === "1,2,3";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        es6shim:     true,
        firefox32:   true,
        chrome45:    true,
      }
    },
    'Array.from, generic iterables': {
      exec: function () {/*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Array.from(iterable) + '' === "1,2,3";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        es6shim:     true,
        firefox32:   true,
        webkit:      true,
        chrome45:    true,
      }
    },
    'Array.from, instances of generic iterables': {
      exec: function () {/*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Array.from(Object.create(iterable)) + '' === "1,2,3";
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        edge:        true,
        firefox36:   true,
        webkit:      true,
        chrome45:    true,
      }
    },
    'Array.from map function, array-like objects': {
      exec: function () {/*
        return Array.from({ 0: "foo", 1: "bar", length: 2 }, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        ejs:         true,
        edge:        true,
        firefox32:   true,
        webkit:      true,
        chrome45:    true,
      }
    },
    'Array.from map function, generator instances': {
      exec: function () {/*
        var iterable = (function*(){ yield "foo"; yield "bar"; yield "bal"; }());
        return Array.from(iterable, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.fallthrough,
        ejs:         true,
        es6shim:     true,
        firefox32:   true,
        chrome45:    true,
      }
    },
    'Array.from map function, generic iterables': {
      exec: function () {/*
        var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
        return Array.from(iterable, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        es6shim:     true,
        firefox32:   true,
        webkit:      true,
        chrome45:    true,
      }
    },
    'Array.from map function, instances of iterables': {
      exec: function () {/*
        var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
        return Array.from(Object.create(iterable), function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */},
      res: {
        babel:        true,
        typescript:   typescript.corejs,
        tr:           true,
        edge:         true,
        firefox36:    true,
        webkit:       true,
        chrome45:     true,
      }
    },
    'Array.from, iterator closing': {
      exec: function () {/*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          Array.from(iter, function() { throw 42 });
        } catch(e){}
        return closed;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
      },
    },
    'Array.of': {
      exec: function () {/*
        return typeof Array.of === 'function' &&
          Array.of(2)[0] === 2;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome39:    flag,
        chrome40:    false,
        chrome45:    true,
        webkit:      true,
      },
    },
    'Array[Symbol.species]': {
      exec: function () {/*
        var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
        return 'get' in prop && Array[Symbol.species] === Array;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      },
    },
  },
},
{
  name: 'Array.prototype methods',
  category: 'built-in extensions',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-array-prototype-object',
  subtests: {
    'Array.prototype.copyWithin': {
      exec: function () {/*
        return typeof Array.prototype.copyWithin === 'function';
      */},
      res: {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox32:   true,
        webkit:      true,
        chrome45:    true,
      },
    },
    'Array.prototype.find': {
      exec: function () {/*
        return typeof Array.prototype.find === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome30:    flag,
        chrome45:    true,
        safari71_8:  true,
        webkit:      true,
        node:        flag,
      },
    },
    'Array.prototype.findIndex': {
      exec: function () {/*
        return typeof Array.prototype.findIndex === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome30:    flag,
        chrome45:    true,
        safari71_8:  true,
        webkit:      true,
        node:        flag,
      },
    },
    'Array.prototype.fill': {
      exec: function () {/*
        return typeof Array.prototype.fill === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox31:   true,
        chrome36:    flag,
        chrome45:    true,
        safari71_8:  true,
        webkit:      true,
        node:        flag,
      },
    },
    'Array.prototype.keys': {
      exec: function () {/*
        return typeof Array.prototype.keys === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox28:   true,
        chrome30:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Array.prototype.values': {
      exec: function () {/*
        return typeof Array.prototype.values === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        webkit:      true,
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
        chrome30:    flag,
        chrome38:    { val: false, note_id: 'array-prototype-iterator' },
        node:        true,
      },
    },
    'Array.prototype.entries': {
      exec: function () {/*
        return typeof Array.prototype.entries === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox28:   true,
        chrome30:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Array.prototype[Symbol.iterator]': {
      exec: function () {/*
        return typeof Array.prototype[Symbol.iterator] === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        edge:        true,
        webkit:      true,
        firefox17:   {
          val: false,
          note_id: 'fx-array-prototype-values',
        },
        firefox27:   {
          val: false,
          note_id: 'fx-array-prototype-values-2',
        },
        firefox36:   true,
        chrome37:    flag,
        chrome38:    true,
        node:        true,
      },
    },
    'Array iterator prototype chain': {
      exec: function () {/*
        // Iterator instance
        var iterator = [][Symbol.iterator]();
        // %ArrayIteratorPrototype%
        var proto1 = Object.getPrototypeOf(iterator);
        // %IteratorPrototype%
        var proto2 = Object.getPrototypeOf(proto1);

        return proto2.hasOwnProperty(Symbol.iterator) &&
          !proto1    .hasOwnProperty(Symbol.iterator) &&
          !iterator  .hasOwnProperty(Symbol.iterator) &&
          iterator[Symbol.iterator]() === iterator;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        webkit:      true,
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
        babel:       true,
        typescript:  typescript.corejs,
        edge:        true,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'Number properties',
  category: 'built-in extensions',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number',
  subtests: {
    'Number.isFinite': {
      exec: function () {/*
        return typeof Number.isFinite === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox16:   true,
        chrome19dev: true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.isInteger': {
      exec: function () {/*
        return typeof Number.isInteger === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox16:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.isSafeInteger': {
      exec: function () {/*
        return typeof Number.isSafeInteger === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox32:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.isNaN': {
      exec: function () {/*
        return typeof Number.isNaN === 'function';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox16:   true,
        chrome19dev: true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.EPSILON': {
      exec: function () {/*
        return typeof Number.EPSILON === 'number';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.MIN_SAFE_INTEGER': {
      exec: function () {/*
        return typeof Number.MIN_SAFE_INTEGER === 'number';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox31:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
    'Number.MAX_SAFE_INTEGER': {
      exec: function () {/*
        return typeof Number.MAX_SAFE_INTEGER === 'number';
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        ejs:         true,
        es6shim:     true,
        edge:        true,
        firefox31:   true,
        chrome34:    true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    },
  },
},
{
  name: 'Math methods',
  category: 'built-in extensions',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-math',
  subtests: (function(){
    var methods = {
      'clz32': {
        ejs:         true,
        tr:          true,
        babel:       true,
        typescript:  typescript.corejs,
        es6shim:     true,
        edge:        true,
        firefox31:   true,
        chrome35:    flag,
        chrome38:    true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
      'imul': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
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
        node:        true,
        iojs:        true,
      },
      'sign': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome33:    flag,
        chrome38:    true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'log10': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'log2': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'log1p': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome35:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'expm1': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome35:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
      'cosh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'sinh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'tanh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'acosh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'asinh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        node:        true,
        iojs:        true,
      },
      'atanh': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'trunc': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome33:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'fround': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox27:   {
          val: true,
          note_id: 'fx-fround',
          note_html: 'Available since Firefox 26'
        },
        firefox28:   true,
        chrome35:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
      'cbrt': {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        edge:        true,
        firefox25:   true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      },
    };
    var eqFn = ' === "function"';
    var obj = {};
    for (var m in methods) {
      obj['Math.' + m] = {
        exec: eval('0,function(){/*\n  return typeof Math.' +
          m + eqFn + ';\n*/}'),
        res: methods[m]
      };
    }
    obj['Math.hypot'] = {
      exec: function(){/*
        return Math.hypot() === 0 &&
          Math.hypot(1) === 1 &&
          Math.hypot(9, 12, 20) === 25 &&
          Math.hypot(27, 36, 60, 100) === 125;
      */},
      res: {
        ejs:         true,
        babel:       true,
        typescript:  typescript.corejs,
        tr:          true,
        es6shim:     true,
        firefox27:   true,
        edge:        true,
        chrome34:    flag,
        chrome38:    true,
        safari71_8:  true,
        webkit:      true,
        konq49:      true,
        node:        true,
        iojs:        true,
      }
    };
    return obj;
  }()),
},
{
  name: 'Array is subclassable',
  category: 'subclassing',
  significance: 'medium',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-array-constructor',
  subtests: {
    'length property (accessing)': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        var len1 = c.length;
        c[2] = 'foo';
        var len2 = c.length;
        return len1 === 0 && len2 === 3;
      */},
      res: {
        iojs:        strict,
        chrome43:    strict,
        webkit:      true,
      },
    },
    'length property (setting)': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        c[2] = 'foo';
        c.length = 1;
        return c.length === 1 && !(2 in c);
      */},
      res: {
        iojs:        strict,
        chrome43:    strict,
        webkit:      true,
      },
    },
    'correct prototype chain': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
      */},
      res: {
        babel:       { val: false, note_id: 'compiler-proto' },
        iojs:        strict,
        chrome43:    strict,
        edge:        flag,
      },
    },
    'Array.isArray support': {
      exec: function () {/*
        class C extends Array {}
        return Array.isArray(new C());
      */},
      res: {
        webkit:      true,
        chrome43:    strict,
      }
    },
    'Array.prototype.concat': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        return c.concat(1) instanceof C;
      */},
      res: {
      }
    },
    'Array.prototype.filter': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        return c.filter(Boolean) instanceof C;
      */},
      res: {
      }
    },
   'Array.prototype.map': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        return c.map(Boolean) instanceof C;
      */},
      res: {
      }
    },
    'Array.prototype.slice': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        c.push(2,4,6);
        return c.slice(1,2) instanceof C;
      */},
      res: {
      }
    },
   'Array.prototype.splice': {
      exec: function () {/*
        class C extends Array {}
        var c = new C();
        c.push(2,4,6);
        return c.splice(1,2) instanceof C;
      */},
      res: {
      }
    },
    'Array.from': {
      exec: function () {/*
        class C extends Array {}
        return C.from({ length: 0 }) instanceof C;
      */},
      res: {
        tr:          { val: false, note_id: 'compiler-proto' },
        babel:       { val: false, note_id: 'compiler-proto' },
        edge:        flag,
        chrome45:    strict,
      }
    },
    'Array.of': {
      exec: function () {/*
        class C extends Array {}
        return C.of(0) instanceof C;
      */},
      res: {
        tr:          { val: false, note_id: 'compiler-proto' },
        babel:       { val: false, note_id: 'compiler-proto' },
        edge:        flag,
        chrome45:    strict,
      }
    },
  },
},
{
  name: 'RegExp is subclassable',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-constructor',
  category: 'subclassing',
  significance: 'small',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r.global && r.source === "baz";
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
        webkit:      true,
      },
    },
    'correct prototype chain': {
      exec: function () {/*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
      */},
      res: {
        babel:       { val: false, note_id: 'compiler-proto' },
        iojs:        strict,
        chrome43:    strict,
        typescript:  typescript.fallthrough,
        edge:        flag,
      },
    },
    'RegExp.prototype.exec': {
      exec: function () {/*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
        webkit:      true,
      },
    },
    'RegExp.prototype.test': {
      exec: function () {/*
        class R extends RegExp {}
        var r = new R("baz");
        return r.test("foobarbaz");
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
        webkit:      true,
      },
    },
  },
},
{
  name: 'Function is subclassable',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-constructor',
  category: 'subclassing',
  significance: 'small',
  subtests: {
    'can be called': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("return 'foo';");
        return c() === 'foo';
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'correct prototype chain': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("return 'foo';");
        return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
      */},
      res: {
        babel:       { val: false, note_id: 'compiler-proto' },
        typescript:  typescript.fallthrough,
        edge:        flag,
      },
    },
    'can be used with "new"': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("this.bar = 2;");
        c.prototype.baz = 3;
        return new c().bar === 2 && new c().baz === 3;
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'Function.prototype.call': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("x", "return this.bar + x;");
        return c.call({bar:1}, 2) === 3;
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'Function.prototype.apply': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("x", "return this.bar + x;");
        return c.apply({bar:1}, [2]) === 3;
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'Function.prototype.bind': {
      exec: function () {/*
        class C extends Function {}
        var c = new C("x", "y", "return this.bar + x + y;").bind({bar:1}, 2);
        return c(6) === 9 && c instanceof C;
      */},
      res: {
        typescript:  typescript.fallthrough,
      },
    },
  },
},
{
  name: 'Promise is subclassable',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-constructor',
  category: 'subclassing',
  significance: 'small',
  subtests: {
    'basic functionality': {
      exec: function () {/*
        class P extends Promise {}
        var p1 = new P(function(resolve, reject) { resolve("foo"); });
        var p2 = new P(function(resolve, reject) { reject("quux"); });
        var score = +(p1 instanceof P);

        function thenFn(result)  { score += (result === "foo");  check(); }
        function catchFn(result) { score += (result === "quux"); check(); }
        function shouldNotRun(result)  { score = -Infinity;   }

        p1.then(thenFn, shouldNotRun);
        p2.then(shouldNotRun, catchFn);
        p1.catch(shouldNotRun);
        p2.catch(catchFn);

        p1.then(function() {
          // P.prototype.then() should return a new P
          score += p1.then() instanceof P && p1.then() !== p1;
          check();
        });

        function check() {
          if (score === 5) asyncTestPassed();
        }
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'correct prototype chain': {
      exec: function () {/*
        class C extends Promise {}
        var c = new C(function(resolve, reject) { resolve("foo"); });
        return c instanceof C && c instanceof Promise && Object.getPrototypeOf(C) === Promise;
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'Promise.all': {
      exec: function () {/*
        class P extends Promise {}
        var fulfills = P.all([
          new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
        ]);
        var rejects = P.all([
          new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
        ]);
        var score = +(fulfills instanceof P);
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 3) asyncTestPassed();
        }
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
    'Promise.race': {
      exec: function () {/*
        class P extends Promise {}
        var fulfills = P.race([
          new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
          new Promise(function(_, reject) { setTimeout(reject, 300,"bar"); }),
        ]);
        var rejects = P.race([
          new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
          new Promise(function(resolve)   { setTimeout(resolve,300,"qux"); }),
        ]);
        var score = +(fulfills instanceof P);
        fulfills.then(function(result) { score += (result === "foo"); check(); });
        rejects.catch(function(result) { score += (result === "baz"); check(); });

        function check() {
          if (score === 3) asyncTestPassed();
        }
      */},
      res: {
        typescript:  typescript.fallthrough,
        chrome43:    strict,
      },
    },
  },
},
{
  name: 'miscellaneous subclassables',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-boolean-constructor',
  category: 'subclassing',
  significance: 'small',
  subtests: {
    'Boolean is subclassable': {
      exec: function () {/*
        class C extends Boolean {}
        var c = new C(true);
        return c instanceof Boolean
          && c == true;
      */},
      res: {
        typescript:  typescript.fallthrough,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'Number is subclassable': {
      exec: function () {/*
        class C extends Number {}
        var c = new C(6);
        return c instanceof Number
          && +c === 6;
      */},
      res: {
        typescript:  typescript.fallthrough,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'String is subclassable': {
      exec: function () {/*
        class C extends String {}
        var c = new C("golly");
        return c instanceof String
          && c + '' === "golly"
          && c[0] === "g"
          && c.length === 5;
      */},
      res: {
        typescript:  typescript.fallthrough,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'Map is subclassable': {
      exec: function () {/*
        var key = {};
        class M extends Map {}
        var map = new M();

        map.set(key, 123);

        return map.has(key) && map.get(key) === 123;
      */},
      res: {
        typescript:  typescript.fallthrough,
        webkit:      true,
        chrome43:    strict,
      },
    },
    'Set is subclassable': {
      exec: function () {/*
        var obj = {};
        class S extends Set {}
        var set = new S();

        set.add(123);
        set.add(123);

        return set.has(123);
      */},
      res: {
        typescript:  typescript.fallthrough,
        webkit:      true,
        chrome43:    strict,
      },
    },
  },
},
{
  name: 'own property order',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys',
  category: 'misc',
  significance: 'small',
  subtests: {
    'for..in': {
      exec: function () {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        var result = '';
        for(var i in obj) {
          result += i;
        }
        return result === "012349 DB-1AC";
      */},
      res: {
        ie10:          { val: true, note_id: 'ie_property_order' },
        chrome:        true,
        node:          true,
        iojs:          true,
        opera:         true,
        safari7:       true,
        webkit:        true,
      },
    },
    'Object.keys': {
      exec: function () {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Object.keys(obj).join('') === "012349 DB-1AC";
      */},
      res: {
        ie10:          { val: true, note_id: 'ie_property_order' },
        chrome:        true,
        node:          true,
        iojs:          true,
        opera:         true,
        safari7:       true,
        webkit:        true,
      },
    },
    'Object.getOwnPropertyNames': {
      exec: function () {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AC";
      */},
      res: {
        ie10:          { val: true, note_id: 'ie_property_order' },
        chrome37:      true,
        iojs:          true,
        opera:         true,
        safari71_8:    true,
        webkit:        true,
      },
    },
    'Object.assign': {
      exec: function () {/*
        function f(key) {
          return {
            get: function() { result += key; return true; },
            set: Object,
            enumerable: true
          };
        };
        var result = '';
        var obj = Object.defineProperties({}, {
          2:    f(2),
          0:    f(0),
          1:    f(1),
          ' ':  f(' '),
          9:    f(9),
          D:    f('D'),
          B:    f('B'),
          '-1': f('-1'),
        });
        Object.defineProperty(obj,'A',f('A'));
        Object.defineProperty(obj,'3',f('3'));
        Object.defineProperty(obj,'C',f('C'));
        Object.defineProperty(obj,'4',f('4'));
        delete obj[2];
        obj[2] = true;

        Object.assign({}, obj);

        return result === "012349 DB-1AC";
      */},
      res: {
        edge:        { val: true, note_id: 'ie_property_order' },
        webkit:      true,
        chrome45:    true,
      },
    },
    'JSON.stringify': {
      exec: function () {/*
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return JSON.stringify(obj) ===
          '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}';
      */},
      res: {
        ie10:          { val: true, note_id: 'ie_property_order' },
        chrome:        true,
        node:          true,
        iojs:          true,
        opera:         true,
        safari7:       true,
        webkit:        true,
      },
    },
    'JSON.parse': {
      exec: function () {/*
        var result = '';
        JSON.parse(
          '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}',
          function reviver(k,v) {
            result += k;
            return v;
          }
        );
        return result === "012349 DB-1AC";
      */},
      res: {
        ie10:          {
          val:       true,
          note_id:   'ie_property_order',
          note_html: 'Unlike other engines, Chakra sorts properties removed by <code>delete</code>, then recreated by assignment, to their original creation positions, not their latest positions.'
        },
        firefox23:     true, // Actually Firefox 21
        chrome:        true,
        node:          true,
        iojs:          true,
        opera:         true,
        safari51:      true,
        webkit:        true,
      },
    },
  },
},
{
  name: 'miscellaneous',
  category: 'misc',
  significance: 'small',
  link: 'http://www.ecma-international.org/ecma-262/6.0/#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions',
  subtests: {
    'no escaped reserved words as identifiers': {
      exec: function() {/*
        var \u0061;
        try {
          eval('var v\\u0061r');
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        tr:          true,
        jsx:         true,
        es6tr:       true,
        typescript:  true,
        closure:     true,
        ie10:        true,
        firefox11:   true,
        webkit:      true,
        opera:       true,
      },
    },
    'duplicate property names in strict mode': {
      exec: function(){/*
        'use strict';
        return this === undefined && ({ a:1, a:1 }).a === 1;
      */},
      res: {
        edge:        true,
        firefox34:   true,
        chrome42:    true,
        webkit:      true,
        iojs:        true,
      },
    },
    'no semicolon needed after do-while': {
      exec: function(){/*
        do {} while (false) return true;
      */},
      res: {
        babel:       true,
        typescript:  true,
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        rhino17:     true,
        node:        true,
        iojs:        true,
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
        babel: true,
        typescript: true
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
        edge:        true,
        chrome42:    true,
        iojs:        true,
        firefox41:   true,
      },
    },
    'Invalid Date': {
      exec: function(){/*
        return new Date(NaN) + "" === "Invalid Date";
      */},
      res: {
        es6shim:     true,
        ejs:         true,
        ie10:        true,
        firefox11:   true,
        chrome:      true,
        safari51:    true,
        webkit:      true,
        opera:       true,
        konq49:      true,
        rhino17:     true,
        node:        true,
        iojs:        true,
      },
    },
    'RegExp constructor can alter flags': {
      exec: function(){/*
        return new RegExp(/./im, "g").global === true;
      */},
      res: {
        babel:       true,
        typescript:  true,
        es6shim:     true,
        edge:        true,
        firefox39:   true,
      },
    },
    'built-in prototypes are not instances': {
      exec: function(){/*
        try {
          Boolean.prototype.valueOf(); return false;
        } catch(e) {}
        try {
          Number.prototype.valueOf(); return false;
        } catch(e) {}
        try {
          String.prototype.toString(); return false;
        } catch(e) {}
        try {
          RegExp.prototype.source; return false;
        } catch(e) {}
        try {
          Date.prototype.valueOf(); return false;
        } catch(e) {}
        return true;
      */},
      res: {
      },
    },
    'function \'length\' is configurable': {
      exec: function(){/*
        var fn = function(a, b) {};

        var desc = Object.getOwnPropertyDescriptor(fn, "length");
        if (desc.configurable) {
          Object.defineProperty(fn, "length", { value: 1 });
          return fn.length === 1;
        }

        return false;
      */},
      res: {
        firefox37:   true,
        chrome43:    true,
        edge:        true,
      },
    },
  },
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['optimisation','syntax','bindings','functions',
    'built-ins','built-in extensions','subclassing','misc','annex b'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES6 category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
