var browsers = require('./esnext-browsers');

exports.name = 'ES2016+';
exports.target_file = 'es2016plus/index.html';
exports.skeleton_file = 'es2016plus/skeleton.html';

var temp = {};
var flag = "flagged";
/* jshint unused:false */
var strict = "strict";
var fallthrough = "needs-polyfill-or-native";

var babel = {
  regenerator: {
    val: true,
    note_id: "babel-regenerator",
    note_html: "This feature requires native generators or <code>regenerator-runtime</code>, it's a part of <code>babel-polyfill</code> or <code>babel-runtime</code>."
  }
};

var typescript = {
  corejs: {
    val: true,
    note_id: "typescript-core-js",
    note_html: "This feature is supported when using TypeScript with <a href='https://github.com/zloirock/core-js'>core-js</a>, or when a native ES6 host is used."
  },
  fallthrough: {
    val: fallthrough,
    note_id: "typescript-es6",
    note_html: "TypeScript's compiler will accept code using this feature if the <code>--target ES6</code> flag is set, but passes it through unmodified and does not supply a runtime polyfill."
  },
  asyncawait: {
    val: true,
    note_id: "typescript-async-await",
    note_html: "TypeScript <code>async</code> / <code>await</code> requires native generators support."
  },
};
var firefox = {
  nightly: {
    val: false,
    note_id: "firefox-nightly",
    note_html: "The feature is enabled by default only in Firefox Nightly."
  }
};

exports.browsers = browsers;

exports.tests = [
  {
    name: 'exponentiation (**) operator',
    category: '2016 features',
    significance: 'small',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-exp-operator',
    subtests: [
      {
        name: 'basic support',
        exec: function () {/*
         return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
         */},
        res: {
          tr: true,
          babel: true,
          typescript: true,
          edge13: flag,
          edge14: true,
          firefox48: firefox.nightly,
          chrome51: flag,
          chrome52: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: 'assignment',
        exec: function () {/*
         var a = 2; a **= 3; return a === 8;
         */},
        res: {
          tr: true,
          babel: true,
          typescript: true,
          edge13: flag,
          edge14: true,
          firefox48: firefox.nightly,
          chrome51: flag,
          chrome52: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: 'early syntax error for unary negation without parens',
        exec: function () {/*
         if (2 ** 3 !== 8) { return false; }
         try {
         Function("-5 ** 2")();
         } catch(e) {
         return true;
         }
         */},
        res: {
          babel: true,
          edge14: true,
          chrome51: flag,
          chrome52: true,
          safaritp: true,
          webkit: true,
        }
      },
    ],
  },
  {
    name: 'Object.values',
    spec: 'https://github.com/ljharb/proposal-object-values-entries',
    category: '2017 features',
    significance: 'small',
    exec: function () {/*
     var obj = Object.create({ a: "qux", d: "qux" });
     obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
     var v = Object.values(obj);
     return Array.isArray(v) && String(v) === "foo,bar,baz";
     */},
    res: {
      babel: true,
      es7shim: true,
      typescript: typescript.corejs,
      firefox45: firefox.nightly,
      firefox47: true,
      chrome51: flag,
      chrome54: true,
      edge14: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'Object.entries',
    spec: 'https://github.com/ljharb/proposal-object-values-entries',
    category: '2017 features',
    significance: 'small',
    exec: function () {/*
     var obj = Object.create({ a: "qux", d: "qux" });
     obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
     var e = Object.entries(obj);
     return Array.isArray(e)
     && e.length === 3
     && String(e[0]) === "a,foo"
     && String(e[1]) === "b,bar"
     && String(e[2]) === "c,baz";
     */},
    res: {
      babel: true,
      es7shim: true,
      typescript: typescript.corejs,
      firefox45: firefox.nightly,
      firefox47: true,
      chrome51: flag,
      chrome54: true,
      edge14: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'Array.prototype.includes',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.includes',
    category: '2016 features',
    significance: 'small',
    subtests: [
      {
        name: 'Array.prototype.includes',
        exec: function(){/*
         return [1, 2, 3].includes(1)
         && ![1, 2, 3].includes(4)
         && ![1, 2, 3].includes(1, 1)
         && [NaN].includes(NaN)
         && Array(1).includes();
         */},
        res: {
          babel: true,
          es7shim: true,
          typescript: typescript.corejs,
          safari9: true,
          safaritp: true,
          webkit: true,
          chrome47: true,
          edge14: true,
          firefox43: true,
        }
      },
      {
        name: 'Array.prototype.includes is generic',
        exec: function(){/*
         var passed = 0;
         return [].includes.call({
         get "0"() {
         passed = NaN;
         return 'foo';
         },
         get "11"() {
         passed += 1;
         return 0;
         },
         get "19"() {
         passed += 1;
         return 'foo';
         },
         get "21"() {
         passed = NaN;
         return 'foo';
         },
         get length() {
         passed += 1;
         return 24;
         }
         }, 'foo', 6) === true && passed === 3;
         */},
        res: {
          babel: true,
          es7shim: true,
          typescript: typescript.corejs,
          safari9: true,
          safaritp: true,
          webkit: true,
          chrome47: true,
          edge14: true,
          firefox43: true,
        }
      },
      {
        name: '%TypedArray%.prototype.includes',
        exec: function(){/*
         return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
         Int32Array, Uint32Array, Float32Array, Float64Array].every(function(TypedArray){
         return new TypedArray([1, 2, 3]).includes(1)
         && !new TypedArray([1, 2, 3]).includes(4)
         && !new TypedArray([1, 2, 3]).includes(1, 1);
         });
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          chrome47: true,
          edge14: true,
          firefox43: true,
          safaritp: true,
          safari10: true,
          webkit: true,
        }
      },
    ],
  },
  {
    name: 'Object.getOwnPropertyDescriptors',
    spec: 'https://github.com/tc39/proposal-object-getownpropertydescriptors',
    category: '2017 features',
    significance: 'small',
    subtests: [
      {
        name: 'basic support',
        exec: function () {/*
          var object = {a: 1};
          var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
          object[B] = 2;
          var O = Object.defineProperty(object, 'c', {value: 3});
          var D = Object.getOwnPropertyDescriptors(O);

          return D.a.value === 1 && D.a.enumerable === true && D.a.configurable === true && D.a.writable === true
          && D[B].value === 2 && D[B].enumerable === true && D[B].configurable === true && D[B].writable === true
          && D.c.value === 3 && D.c.enumerable === false && D.c.configurable === false && D.c.writable === false;
          */},
        res: {
          babel: true,
          es7shim: true,
          typescript: typescript.corejs,
          chrome51: flag,
          chrome54: true,
          firefox50: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: "doesn't provide undefined descriptors",
        exec: function () {/*
          var P = new Proxy({a:1}, {
            getOwnPropertyDescriptor: function(t, k) {}
          });
          return !Object.getOwnPropertyDescriptors(P).hasOwnProperty('a');
        */},
        res: {
          firefox50: true,
          chrome54: true,
          safaritp: true,
          webkit: true,
        },
      },
    ]
  },
  {
    name: 'String padding',
    category: '2017 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-string-pad-start-end',
    subtests: [
      {
        name: 'String.prototype.padStart',
        exec: function(){/*
         return 'hello'.padStart(10) === '     hello'
         && 'hello'.padStart(10, '1234') === '12341hello'
         && 'hello'.padStart() === 'hello'
         && 'hello'.padStart(6, '123') === '1hello';
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          es7shim: true,
          firefox48: true,
          edge14: flag,
          chrome52: flag,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: 'String.prototype.padEnd',
        exec: function(){/*
         return 'hello'.padEnd(10) === 'hello     '
         && 'hello'.padEnd(10, '1234') === 'hello12341'
         && 'hello'.padEnd() === 'hello'
         && 'hello'.padEnd(6, '123') === 'hello1';
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          es7shim: true,
          firefox48: true,
          edge14: flag,
          chrome52: flag,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      }
    ]
  },
  {
    name: 'trailing commas in function syntax',
    spec: 'https://jeffmo.github.io/es-trailing-function-commas/',
    category: '2017 features',
    significance: 'small',
    subtests: [
      {
        name: 'in parameter lists',
        exec: function(){/*
          return typeof function f( a, b, ){} === 'function';
        */},
        res: {
          babel: true,
          typescript: true,
          edge14: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: 'in argument lists',
        exec: function(){/*
          return Math.min(1,2,3,) === 1;
        */},
        res: {
          babel: true,
          typescript: true,
          edge14: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      },
    ],
  },
  {
    name: 'async functions',
    category: '2017 features',
    significance: 'large',
    spec: 'https://tc39.github.io/ecmascript-asyncawait/',
    subtests: [
      {
        name: 'basic support',
        exec: function () {/*
          return (async function(){
            return 42;
          })() instanceof Promise
        */},
        res: {
          tr: true,
          babel: babel.regenerator,
          typescript: typescript.asyncawait,
          chrome52: flag,
          chrome55: true,
          edge13: flag,
          edge14: flag,
        }
      },
      {
        name: 'await support',
        exec: function () {/*
          return (async function(){
            return 10 + await Promise.resolve(10);
          })() instanceof Promise
        */},
        res: {
          tr: true,
          babel: babel.regenerator,
          typescript: typescript.asyncawait,
          chrome52: flag,
          chrome55: true,
          edge13: flag,
          edge14: flag,
        }
      },
      {
        name: 'arrow async functions',
        exec: function () {/*
          return (async () => 42 + await Promise.resolve(42))() instanceof Promise
        */},
        res: {
          tr: true,
          babel: babel.regenerator,
          typescript: false, // still buggy output
          chrome52: flag,
          chrome55: true,
          edge13: flag,
          edge14: flag,
        }
      }
    ]
  },
  {
    name: 'generator functions can\'t be used with "new"',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-createdynamicfunction',
    links: [
      {
        note_id: 'new-gen-fn',
        note_html: '<a href="https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#67-new--generatorfunction">TC39 meeting notes from July 28, 2015.</a>',
      }
    ],
    exec: function(){/*
     function * generator() {
     yield 3;
     }
     try {
     new generator();
     } catch(e) {
     return true;
     }
     */},
    res: {
      edge13: true,
      firefox43: true,
      chrome50: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'generator throw() caught by inner generator',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-generatorfunction-objects',
    links: [
      {
        note_id: 'gen-throw',
        note_html: '<a href="https://github.com/tc39/ecma262/issues/293">\'Semantics of yield* in throw case\' GitHub issue in ECMA-262 repo.</a>',
      }
    ],
    exec: function(){/*
     function * generator() {
     yield * (function * () {
     try {
     yield 'foo';
     }
     catch(e) {
     return;
     }
     }());
     yield 'bar';
     }
     var iter = generator();
     iter.next();
     return iter['throw']().value === 'bar';
     */},
    res: {
      edge14: true,
      firefox27: true,
      chrome39: true,
      node: flag,
      node4: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'strict fn w/ non-strict non-simple params is error',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-functiondeclarationinstantiation',
    links: [
      {
        note_id: 'strict-fn-non-strict-params',
        note_html: '<a href="https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-29.md#611-the-scope-of-use-strict-with-respect-to-destructuring-in-parameter-lists">TC39 meeting notes from July 29, 2015.</a>',
      },
    ],
    exec: function(){/*
     function foo(...a){}
     try {
     Function("function bar(...a){'use strict';}")();
     } catch(e) {
     return true;
     }
     */},
    res: {
      edge12: true,
      chrome47: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'nested rest destructuring, declarations',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-destructuring-assignment',
    links: [
      {
        note_id: 'nested-rest-destruct-decl',
        note_html: '<a href="https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#66-bindingrestelement-should-allow-a-bindingpattern-ala-assignmentrestelement">TC39 meeting notes from July 28, 2015.</a>',
      }
    ],
    exec: function(){/*
     var [x, ...[y, ...z]] = [1,2,3,4];
     return x === 1 && y === 2 && z + '' === '3,4';
     */},
    res: {
      babel: true,
      edge13: flag,
      edge14: true,
      firefox47: true,
      typescript: true,
      chrome49: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'nested rest destructuring, parameters',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-destructuring-assignment',
    links: [
      {
        note_id: 'nested-rest-destruct-params',
        note_html: '<a href="https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#66-bindingrestelement-should-allow-a-bindingpattern-ala-assignmentrestelement">TC39 meeting notes from July 28, 2015.</a>',
      },
    ],
    exec: function(){/*
     return function([x, ...[y, ...z]]) {
     return x === 1 && y === 2 && z + '' === '3,4';
     }([1,2,3,4]);
     */},
    res: {
      babel: true,
      edge13: flag,
      edge14: true,
      firefox47: true,
      typescript: true,
      chrome49: true,
      safaritp: true,
      webkit: true,
    }
  },
  {
    name: 'Proxy, "enumerate" handler removed',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-proxy-objects',
    links: [
      {
        note_id: 'proxy-enumerate-removed',
        note_html: '<a href="https://github.com/tc39/ecma262/pull/367">\'Normative: Remove [[Enumerate]] and associated reflective capabilities\' GitHub Pull Request in ECMA-262 repo.</a>',
      },
    ],
    exec: function() {/*
     var passed = true;
     var proxy = new Proxy({}, {
     enumerate: function() {
     passed = false;
     }
     });
     for(var key in proxy); // Should not throw, nor execute the 'enumerate' method.
     return passed;
     */},
    res: {
      firefox18: true,
      firefox25: false,
      firefox47: true,
      chrome50: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    },
  },
  {
    name: 'Proxy internal calls, Array.prototype.includes',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.includes',
    exec: function() {/*
     // Array.prototype.includes -> Get -> [[Get]]
     var get = [];
     var p = new Proxy({length: 3, 0: '', 1: '', 2: '', 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
     Array.prototype.includes.call(p, {});
     if (get + '' !== "length,0,1,2") return;

     get = [];
     p = new Proxy({length: 4, 0: NaN, 1: '', 2: NaN, 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
     Array.prototype.includes.call(p, NaN, 1);
     return (get + '' === "length,1,2");
     */},
    res: {
      firefox43: true,
      chrome49: true,
      edge14: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    },
  },
  {
    name: 'Object.prototype getter/setter methods',
    spec: 'https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__',
    category: '2017 annex b',
    significance: 'tiny',
    subtests: [{
      name: '__defineGetter__',
      exec: function () {/*
       var obj = {};
       function bar() { return "bar"; }
       Object.prototype.__defineGetter__.call(obj, "foo", bar);
       var prop = Object.getOwnPropertyDescriptor(obj, "foo");
       return prop.get === bar && !prop.writable && prop.configurable
       && prop.enumerable;
       */},
      res: (temp.basicDefineGetterResults = {
        babel: true,
        typescript: typescript.corejs,
        ie11: true,
        firefox4: true,
        chrome30: true,
        node: true,
        iojs: true,
        safari51: true,
        safari9: true,
        safaritp: true,
        webkit: true,
        android40: true,
        ios51: true,
      })
    },
      {
        name: '__defineGetter__, symbols',
        exec: function () {/*
         var obj = {};
         var sym = Symbol();
         function bar() { return "bar"; }
         Object.prototype.__defineGetter__.call(obj, sym, bar);
         var prop = Object.getOwnPropertyDescriptor(obj, sym);
         return prop.get === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */},
        res: (temp.defineGetterSymbolsResults = {
          babel: true,
          typescript: typescript.corejs,
          edge12: true,
          firefox36: true,
          chrome30: flag,
          chrome38: true,
          node: true,
          iojs: true,
          safari9: true,
          safaritp: true,
          webkit: true,
          android40: true,
        })
      },
      {
        name: '__defineGetter__, ToObject(this)',
        exec: function () {/*
         var key = '__accessors_test__';
         __defineGetter__.call(1, key, function(){});
         try {
         __defineGetter__.call(null, key, function(){});
         } catch(e){
         return true;
         }
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          firefox48: true,
          safari51: true,
          safari9: true,
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: '__defineSetter__',
        exec: function () {/*
         var obj = {};
         function bar() {}
         Object.prototype.__defineSetter__.call(obj, "foo", bar);
         var prop = Object.getOwnPropertyDescriptor(obj, "foo");
         return prop.set === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */},
        res: temp.basicDefineGetterResults,
      },
      {
        name: '__defineSetter__, symbols',
        exec: function () {/*
         var obj = {};
         var sym = Symbol();
         function bar(baz) {}
         Object.prototype.__defineSetter__.call(obj, sym, bar);
         var prop = Object.getOwnPropertyDescriptor(obj, sym);
         return prop.set === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */},
        res: temp.defineGetterSymbolsResults,
      },
      {
        name: '__defineSetter__, ToObject(this)',
        exec: function () {/*
         var key = '__accessors_test__';
         __defineSetter__.call(1, key, function(){});
         try {
         __defineSetter__.call(null, key, function(){});
         } catch(e){
         return true;
         }
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          firefox48: true,
          safari51: true,
          safari9: true,
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: '__lookupGetter__',
        exec: function () {/*
         var obj = {
         get foo() { return "bar"},
         qux: 1
         };
         var foo = Object.prototype.__lookupGetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
         */},
        res: Object.assign({}, temp.basicDefineGetterResults, {
          firefox2:   true,
        }),
      },
      {
        name: '__lookupGetter__, prototype chain',
        exec: function () {/*
         var obj = {
         get foo() { return "bar"},
         qux: 1
         };
         var foo = Object.prototype.__lookupGetter__.call(Object.create(obj), "foo");
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
         */},
        res: temp.basicDefineGetterResults,
      },
      {
        name: '__lookupGetter__, symbols',
        exec: function () {/*
         var sym = Symbol();
         var sym2 = Symbol();
         var obj = {};
         Object.defineProperty(obj, sym, { get: function() { return "bar"; }});
         Object.defineProperty(obj, sym2, { value: 1 });
         var foo = Object.prototype.__lookupGetter__.call(obj, sym);
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, sym2) === undefined
         && Object.prototype.__lookupGetter__.call(obj, Symbol()) === undefined;
         */},
        res: temp.defineGetterSymbolsResults,
      },
      {
        name: '__lookupGetter__, ToObject(this)',
        exec: function () {/*
         __lookupGetter__.call(1, 'key');
         try {
         __lookupGetter__.call(null, 'key');
         } catch(e){
         return true;
         }
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          ie11: true,
          firefox24: true,
          safari51: true,
          safari9: true,
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: '__lookupGetter__, data properties can shadow accessors',
        exec: function () {/*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineGetter__("foo", function () {})
         return b.__lookupGetter__("foo") === undefined
         */},
        res: (temp.lookupGetterShadowResults = {
          babel: true,
          typescript: typescript.corejs,
          firefox4: true,
          safari51: true,
          safari9: true,
          safaritp: true,
          webkit: true,
          ios51: true,
        }),
      },
      {
        name: '__lookupSetter__',
        exec: function () {/*
         var obj = {
         set foo(baz) { return "bar"; },
         qux: 1
         };
         var foo = Object.prototype.__lookupSetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
         */},
        res: Object.assign({}, temp.basicDefineGetterResults, {
          firefox2:   true,
        }),
      },
      {
        name: '__lookupSetter__, prototype chain',
        exec: function () {/*
         var obj = {
         set foo(baz) { return "bar"; },
         qux: 1
         };
         var foo = Object.prototype.__lookupSetter__.call(Object.create(obj), "foo");
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
         */},
        res: temp.basicDefineGetterResults,
      },
      {
        name: '__lookupSetter__, symbols',
        exec: function () {/*
         var sym = Symbol();
         var sym2 = Symbol();
         var obj = {};
         Object.defineProperty(obj, sym, { set: function(baz) { return "bar"; }});
         Object.defineProperty(obj, sym2, { value: 1 });
         var foo = Object.prototype.__lookupSetter__.call(obj, sym);
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, sym2) === undefined
         && Object.prototype.__lookupSetter__.call(obj, Symbol()) === undefined;
         */},
        res: temp.defineGetterSymbolsResults,
      },
      {
        name: '__lookupSetter__, ToObject(this)',
        exec: function () {/*
         __lookupSetter__.call(1, 'key');
         try {
         __lookupSetter__.call(null, 'key');
         } catch(e){
         return true;
         }
         */},
        res: {
          babel: true,
          typescript: typescript.corejs,
          ie11: true,
          firefox24: true,
          safari51: true,
          safari9: true,
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: '__lookupSetter__, data properties can shadow accessors',
        exec: function () {/*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineSetter__("foo", function () {})
         return b.__lookupSetter__("foo") === undefined
         */},
        res: temp.lookupGetterShadowResults,
      }
    ]
  },
  {
    name: 'Proxy internal calls, getter/setter methods',
    spec: 'https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__',
    category: '2017 annex b',
    significance: 'tiny',
    subtests: [{
      name: '__defineGetter__',
      exec: function () {/*
       // Object.prototype.__defineGetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
       var def = [];
       var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
       Object.prototype.__defineGetter__.call(p, "foo", Object);
       return def + '' === "foo";
       */},
      res: {
        firefox18: true,
        edge13: true,
        chrome52: true,
        safari10: true,
        safaritp: true,
        webkit: true,
      }
    },
      {
        name: '__defineSetter__',
        exec: function () {/*
         // Object.prototype.__defineSetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
         var def = [];
         var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
         Object.prototype.__defineSetter__.call(p, "foo", Object);
         return def + '' === "foo";
         */},
        res: {
          firefox18: true,
          edge13: true,
          chrome52: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: '__lookupGetter__',
        exec: function () {/*
         // Object.prototype.__lookupGetter__ -> [[GetOwnProperty]]
         // Object.prototype.__lookupGetter__ -> [[GetPrototypeOf]]
         var gopd = [];
         var gpo = false;
         var p = new Proxy({}, {
         getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
         getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
         });
         Object.prototype.__lookupGetter__.call(p, "foo");
         return gopd + '' === "foo" && gpo;
         */},
        res: {
          edge14: true,
          firefox49: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      },
      {
        name: '__lookupSetter__',
        exec: function () {/*
         // Object.prototype.__lookupSetter__ -> [[GetOwnProperty]]
         // Object.prototype.__lookupSetter__ -> [[GetPrototypeOf]]
         var gopd = [];
         var gpo = false;
         var p = new Proxy({}, {
         getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
         getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
         });
         Object.prototype.__lookupSetter__.call(p, "foo");
         return gopd + '' === "foo" && gpo;
         */},
        res: {
          edge14: true,
          firefox49: true,
          safari10: true,
          safaritp: true,
          webkit: true,
        }
      }
    ]
  },
  {
    name: 'class extends null',
    category: '2017 misc',
    significance: 'tiny',
    spec: 'https://github.com/tc39/ecma262/issues/543',
    subtests: [
      {
        name: 'proper default constructor',
        exec: function() {/*
         class C extends null {}
         return new C instanceof C;
         */},
        res: {
          safaritp: true,
          webkit: true,
        },
      },
      {
        name: 'proper "this" binding',
        exec: function() {/*
         var passed = false;
         new class C extends null {
         constructor() {
         passed = (this instanceof C && !(this instanceof Object));
         return this;
         }
         };
         return passed;
         */},
        res: {
          safaritp: true,
          webkit: true,
        },
      },
    ]
  },
  {
    name: 'Proxy "ownKeys" handler, duplicate keys for non-extensible targets',
    category: '2017 misc',
    significance: 'tiny',
    spec: 'https://github.com/tc39/ecma262/pull/594',
    exec: function() {/*
     var P = new Proxy(Object.preventExtensions(Object.defineProperty({a:1}, "b", {value:1})), {
     ownKeys: function() {
     return ['a','a','b','b'];
     }
     });
     return Object.getOwnPropertyNames(P) + '' === "a,a,b,b";
     */},
    res: {
      firefox51: true,
      chrome51: true,
      safari10: true,
      safaritp: true,
      webkit: true,
    },
  },
  {
    name: 'RegExp "u" flag, case folding',
    category: '2017 misc',
    significance: 'tiny',
    spec: 'https://github.com/tc39/ecma262/pull/525',
    exec: function() {/*
     return "ſ".match(/\w/iu) && !"ſ".match(/\W/iu)
     && "\u212a".match(/\w/iu) && !"\u212a".match(/\W/iu)
     && "\u212a".match(/.\b/iu) && "ſ".match(/.\b/iu)
     && !"\u212a".match(/.\B/iu) && !"ſ".match(/.\B/iu);
     */},
    res: {
    },
  },
  {
    name: 'assignments allowed in for-in head in non-strict mode',
    spec: 'https://tc39.github.io/ecma262/#sec-initializers-in-forin-statement-heads',
    category: '2017 annex b',
    significance: 'tiny',
    exec: function(){/*
     for (var i = 0 in {}) {}
     return i === 0;
     */},
    res: {
      tr: true,
      ie10: true,
      edge12: true,
      firefox2: true,
      firefox31: true,
      firefox40: false,
      chrome30: true,
      safari51: true,
      safari9: false,
      safaritp: true,
      webkit: true,
      node: true,
      android40: true,
      ios51: true,
    },
  },
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['2016 features', '2016 misc', '2017 features', '2017 misc', '2017 annex b', 'finished (stage 4)'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES2016+ category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
