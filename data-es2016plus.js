var common = require('./data-common');

var babel = common.babel;
var typescript = common.typescript;
var firefox = common.firefox;
var chrome = common.chrome;
var edge = common.edge;
var graalvm = common.graalvm;

exports.name = 'ES2016+';
exports.target_file = 'es2016plus/index.html';
exports.skeleton_file = 'es2016plus/skeleton.html';

exports.tests = [
  {
    name: 'exponentiation (**) operator',
    category: '2016 features',
    significance: 'small',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-exp-operator',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)',
    subtests: [
      {
        name: 'basic support',
        exec: function () {/*
         return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
         */},
        res: {
          tr: true,
          babel6corejs2: true,
          closure: true,
          typescript1corejs2: true,
          ie11: false,
          edge13: edge.experimental,
          edge14: true,
          firefox2: false,
          firefox42: firefox.nightly,
          firefox52: true,
          opera10_50: false,
          chrome51: chrome.experimental,
          chrome52: true,
          safari10_1: true,
          duktape2_0: true,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'assignment',
        exec: function () {/*
         var a = 2; a **= 3; return a === 8;
         */},
        res: {
          tr: true,
          babel6corejs2: true,
          closure: true,
          typescript1corejs2: true,
          ie11: false,
          edge13: edge.experimental,
          edge14: true,
          firefox2: false,
          firefox48: firefox.nightly,
          firefox52: true,
          opera10_50: false,
          chrome51: chrome.experimental,
          chrome52: true,
          safari10_1: true,
          duktape2_0: true,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
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
          babel6corejs2: true,
          closure: true,
          ie11: false,
          edge14: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          chrome51: chrome.experimental,
          chrome52: true,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
    ],
  },
  {
    name: 'Object static methods',
    spec: 'https://tc39.github.io/ecma262/#sec-properties-of-the-object-constructor',
    category: '2017 features',
    significance: 'medium',
    subtests: [
      {
        name: 'Object.values',
        spec: 'https://tc39.github.io/ecma262/#sec-object.values',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
        category: '2017 features',
        significance: 'medium',
        exec: function () {/*
         var obj = Object.create({ a: "qux", d: "qux" });
         obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
         var v = Object.values(obj);
         return Array.isArray(v) && String(v) === "foo,bar,baz";
         */},
        res: {
          babel6corejs2: babel.corejs,
          closure: true,
          es7shim: true,
          typescript1corejs2: typescript.corejs,
          firefox2: false,
          firefox45: firefox.nightly,
          firefox47: true,
          opera10_50: false,
          chrome51: chrome.experimental,
          chrome54: true,
          ie11: false,
          edge14: true,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Object.entries',
        spec: 'https://tc39.github.io/ecma262/#sec-object.entries',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
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
          babel6corejs2: babel.corejs,
          closure: true,
          es7shim: true,
          typescript1corejs2: typescript.corejs,
          firefox2: false,
          firefox45: firefox.nightly,
          firefox47: true,
          opera10_50: false,
          chrome51: chrome.experimental,
          chrome54: true,
          ie11: false,
          edge14: true,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Object.getOwnPropertyDescriptors',
        spec: 'https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors',
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
          babel6corejs2: babel.corejs,
          closure: true,
          es7shim: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge15: true,
          chrome51: chrome.experimental,
          chrome54: true,
          firefox2: false,
          firefox50: true,
          opera10_50: false,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: "Object.getOwnPropertyDescriptors doesn't provide undefined descriptors",
        exec: function () {/*
          var P = new Proxy({a:1}, {
            getOwnPropertyDescriptor: function(t, k) {}
          });
          return !Object.getOwnPropertyDescriptors(P).hasOwnProperty('a');
        */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge15: true,
          firefox2: false,
          firefox50: true,
          opera10_50: false,
          chrome54: true,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
    ],
  },
  {
    name: 'Array.prototype.includes',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.includes',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    category: '2016 features',
    significance: 'small',
    subtests: [
      {
        name: 'Array.prototype.includes',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
        exec: function(){/*
         return [1, 2, 3].includes(1)
         && ![1, 2, 3].includes(4)
         && ![1, 2, 3].includes(1, 1)
         && [NaN].includes(NaN)
         && Array(1).includes();
         */},
        res: {
          babel6corejs2: babel.corejs,
          closure: true,
          es7shim: true,
          typescript1corejs2: typescript.corejs,
          safari9: true,
          chrome47: true,
          ie11: false,
          edge14: true,
          firefox2: false,
          firefox43: true,
          opera10_50: false,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
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
          babel6corejs2: babel.corejs,
          closure20180402: true,
          es7shim: true,
          typescript1corejs2: typescript.corejs,
          safari9: true,
          chrome47: true,
          ie11: false,
          edge14: true,
          firefox2: false,
          firefox43: true,
          opera10_50: false,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: '%TypedArray%.prototype.includes',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes',
        exec: function(){/*
         return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
         Int32Array, Uint32Array, Float32Array, Float64Array].every(function(TypedArray){
         return new TypedArray([1, 2, 3]).includes(1)
         && !new TypedArray([1, 2, 3]).includes(4)
         && !new TypedArray([1, 2, 3]).includes(1, 1);
         });
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          chrome47: true,
          ie11: false,
          edge14: true,
          firefox2: false,
          firefox43: true,
          opera10_50: false,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
    ],
  },
  {
    name: 'String padding',
    category: '2017 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-string-pad-start-end',
    subtests: [
      {
        name: 'String.prototype.padStart',
        spec: 'https://tc39.github.io/ecma262/#sec-string.prototype.padstart',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
        exec: function(){/*
         return 'hello'.padStart(10) === '     hello'
         && 'hello'.padStart(10, '1234') === '12341hello'
         && 'hello'.padStart() === 'hello'
         && 'hello'.padStart(6, '123') === '1hello'
         && 'hello'.padStart(3) === 'hello'
         && 'hello'.padStart(3, '123') === 'hello';
         */},
        res: {
          babel6corejs2: babel.corejs,
          closure: true,
          typescript1corejs2: typescript.corejs,
          es7shim: true,
          firefox2: false,
          firefox48: true,
          opera10_50: false,
          ie11: false,
          edge14: edge.experimental,
          edge15: true,
          chrome52: chrome.experimental,
          chrome57: true,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'String.prototype.padEnd',
        spec: 'https://tc39.github.io/ecma262/#sec-string.prototype.padend',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd',
        exec: function(){/*
         return 'hello'.padEnd(10) === 'hello     '
         && 'hello'.padEnd(10, '1234') === 'hello12341'
         && 'hello'.padEnd() === 'hello'
         && 'hello'.padEnd(6, '123') === 'hello1'
         && 'hello'.padEnd(3) === 'hello'
         && 'hello'.padEnd(3, '123') === 'hello';
         */},
        res: {
          babel6corejs2: babel.corejs,
          closure: true,
          typescript1corejs2: typescript.corejs,
          es7shim: true,
          firefox2: false,
          firefox48: true,
          opera10_50: false,
          ie11: false,
          edge14: edge.experimental,
          edge15: true,
          chrome52: chrome.experimental,
          chrome57: true,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'trailing commas in function syntax',
    spec: 'https://github.com/tc39/proposal-trailing-function-commas',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas',
    category: '2017 features',
    significance: 'small',
    subtests: [
      {
        name: 'in parameter lists',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Parameter_definitions',
        exec: function(){/*
          return typeof function f( a, b, ){} === 'function';
        */},
        res: {
          babel6corejs2: true,
          closure: true,
          typescript2corejs2: true,
          ie11: false,
          edge14: true,
          chrome57: chrome.experimental,
          chrome58: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'in argument lists',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Function_calls',
        exec: function(){/*
          return Math.min(1,2,3,) === 1;
        */},
        res: {
          babel6corejs2: true,
          closure: true,
          typescript2corejs2: true,
          ie11: false,
          edge14: true,
          chrome57: chrome.experimental,
          chrome58: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
    ],
  },
  {
    name: 'async functions',
    category: '2017 features',
    significance: 'large',
    spec: 'https://tc39.github.io/ecma262/#sec-async-function-definitions',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
    subtests: [
      {
        // Should test that async functions return promises
        // that (without await) resolve to the returned value.
        name: 'return',
        exec: function () {/*
          async function a(){
            return "foo";
          }
          var p = a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.then(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: true,
          babel6corejs2: babel.regenerator,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: chrome.experimental,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'throw',
        exec: function () {/*
          async function a(){
            throw "foo";
          }
          var p = a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.catch(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'no line break between async and function',
        exec: function () {/*
          async function a(){}
          try { Function("async\n function a(){}")(); } catch(e) { return true; }
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: null,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: false,
          edge14: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'no "prototype" property',
        exec: function(){/*
          async function a(){};
          return !a.hasOwnProperty("prototype");
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: false,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'await',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await',
        exec: function () {/*
          (async function (){
            await Promise.resolve();
            var a1 = await new Promise(function(resolve) { setTimeout(resolve,800,"foo"); });
            var a2 = await new Promise(function(resolve) { setTimeout(resolve,800,"bar"); });
            if (a1 + a2 === "foobar") {
              asyncTestPassed();
            }
          }());
        */},
        res: {
          tr: true,
          babel6corejs2: babel.regenerator,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: chrome.experimental,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'await, rejection',
        exec: function () {/*
          (async function (){
            await Promise.resolve();
            try {
              var a1 = await new Promise(function(_, reject) { setTimeout(reject,800,"foo"); });
            } catch(e) {
              if (e === "foo") {
                asyncTestPassed();
              }
            }
          }());
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'must await a value',
        exec: function () {/*
          async function a(){ await Promise.resolve(); }
          try { Function("(async function a(){ await; }())")(); } catch(e) { return true; }
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: null,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'can await non-Promise values',
        exec: function () {/*
          (async function (){
            await Promise.resolve();
            var e = await "foo";
            if (e === "foo") {
              asyncTestPassed();
            }
          }());
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'cannot await in parameters',
        exec: function () {/*
          async function a(){ await Promise.resolve(); }
          try { Function("(async function a(b = await Promise.resolve()){}())")(); } catch(e) { return true; }
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: null,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'async methods, object literals',
        exec: function () {/*
          var o = {
            async a(){ return await Promise.resolve("foo"); }
          };
          var p = o.a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.then(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'async methods, classes',
        exec: function () {/*
          class C {
            async a(){ return await Promise.resolve("foo"); }
          };
          var p = new C().a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.then(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'async arrow functions in methods, classes',
        exec: function () {/*
          function doSomething(callback) {
            callback();
          }
          class C {
            a(){
              doSomething(async () => {
                await 1;
                asyncTestPassed();
              });
            }
          };
          var p = new C().a();
        */},
        res: {
          tr: true,
          babel6corejs2: babel.regenerator,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: chrome.experimental,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10: false,
          safari10_1: false,
          safari11: true,
          duktape2_0: false,
          jerryscript2_3_0: true,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'async arrow functions',
        exec: function () {/*
          var a = async () => await Promise.resolve("foo");
          var p = a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.then(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: true,
          babel6corejs2: babel.regenerator,
          closure: true,
          typescript1corejs2: typescript.downlevelIteration,
          chrome52: chrome.experimental,
          chrome55: true,
          ie11: false,
          edge13: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'correct prototype chain',
        exec: function() {/*
          var asyncFunctionProto = Object.getPrototypeOf(async function (){});
          return asyncFunctionProto !== function(){}.prototype
            && Object.getPrototypeOf(asyncFunctionProto) === Function.prototype;
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: false,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: false,
          edge14: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'async function prototype, Symbol.toStringTag',
        exec: function() {/*
          return Object.getPrototypeOf(async function (){})[Symbol.toStringTag] === "AsyncFunction";
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: false,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: false,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'async function constructor',
        exec: function() {/*
          var a = async function (){}.constructor("return 'foo';");
          var p = a();
          if (!(p instanceof Promise)) {
            return false;
          }
          p.then(function(result) {
            if (result === "foo") {
              asyncTestPassed();
            }
          });
        */},
        res: {
          tr: null,
          babel6corejs2: null,
          closure: false,
          typescript1corejs2: false,
          chrome52: null,
          chrome55: true,
          ie11: false,
          edge13: false,
          edge14: edge.experimental,
          edge15: true,
          firefox2: false,
          firefox52: true,
          opera10_50: false,
          safari10_1: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
    ]
  },
  {
    name: 'shared memory and atomics',
    category: '2017 features',
    significance: 'medium',
    'subtests': [
      {
        name: 'SharedArrayBuffer',
        spec: 'https://tc39.github.io/ecma262/#sec-sharedarraybuffer-objects',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer',
        exec: function () {/*
         return typeof SharedArrayBuffer === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: {
            val: false,
            note_id: 'edg-shared-memory-spectre',
            note_html: 'The feature was temporarily disabled to mitigate the Meltdown and Spectre CPU bugs.',
          },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: {
            val: "flagged",
            note_id: 'fx-shared-memory-spectre',
            note_html: 'The feature was <a href="https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/">temporarily disabled</a> to mitigate the Meltdown and Spectre CPU bugs. It can be enabled via <code>javascript.options.shared_memory</code> setting under <code>about:config</code>',
          },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox77: {
            val: false,
            note_id: "fx-shared-memory-esr-disable",
            note_html: 'The feature was intentionally disabled to prepare for Firefox 78 ESR',
          },
          firefox79: {
            val: true,
            note_id: "fx-shared-memory-cors-isolation",
            note_html: 'The feature is available with <a href="https://hacks.mozilla.org/2020/07/safely-reviving-shared-memory/">properly set CORS isolation headers</a> or via enabling <code>dom.postMessage.sharedArrayBuffer.bypassCOOP_COEP.insecure.enabled</code> setting under <code>about:config</code>',
          },
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: {
            val: false,
            note_id: 'chr-shared-memory-spectre',
            note_html: 'The feature was temporarily disabled to mitigate the Meltdown and Spectre CPU bugs.',
          },
          chrome68: true,
          safari10_1: true,
          safari11: {
            val: false,
            note_id: 'sf-shared-memory-spectre',
            note_html: 'The feature was <a href="https://webkit.org/blog/8048/what-spectre-and-meltdown-mean-for-webkit/">temporarily disabled</a> to mitigate the Meltdown and Spectre CPU bugs.',
          },
          safaritp: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'SharedArrayBuffer[Symbol.species]',
        exec: function () {/*
         return SharedArrayBuffer[Symbol.species] === SharedArrayBuffer;
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox52: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox77: {val: false, note_id: "fx-shared-memory-esr-disable" },
          firefox79: {val: true, note_id: "fx-shared-memory-cors-isolation" },
          opera10_50: false,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11: { val: false, note_id: 'sf-shared-memory-spectre' },
          safaritp: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'SharedArrayBuffer.prototype.byteLength',
        spec: 'https://tc39.github.io/ecma262/#sec-get-sharedarraybuffer.prototype.bytelength',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength',
        exec: function () {/*
         return 'byteLength' in SharedArrayBuffer.prototype;
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox77: {val: false, note_id: "fx-shared-memory-esr-disable" },
          firefox79: {val: true, note_id: "fx-shared-memory-cors-isolation" },
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari11: { val: false, note_id: 'sf-shared-memory-spectre' },
          safaritp: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'SharedArrayBuffer.prototype.slice',
        spec: 'https://tc39.github.io/ecma262/#sec-sharedarraybuffer.prototype.slice',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice',
        exec: function () {/*
         return typeof SharedArrayBuffer.prototype.slice === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox52: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox77: {val: false, note_id: "fx-shared-memory-esr-disable" },
          firefox79: {val: true, note_id: "fx-shared-memory-cors-isolation" },
          opera10_50: false,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11: { val: false, note_id: 'sf-shared-memory-spectre' },
          safaritp: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'SharedArrayBuffer.prototype[Symbol.toStringTag]',
        spec: 'https://tc39.github.io/ecma262/#sec-sharedarraybuffer.prototype.toString',
        exec: function () {/*
         return SharedArrayBuffer.prototype[Symbol.toStringTag] === 'SharedArrayBuffer';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox52: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox77: {val: false, note_id: "fx-shared-memory-esr-disable" },
          firefox79: {val: true, note_id: "fx-shared-memory-cors-isolation" },
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11: { val: false, note_id: 'sf-shared-memory-spectre' },
          safaritp: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.add',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.add',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add',
        exec: function () {/*
         return typeof Atomics.add === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.and',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.and',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and',
        exec: function () {/*
         return typeof Atomics.and === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.compareExchange',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.compareExchange',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange',
        exec: function () {/*
         return typeof Atomics.compareExchange === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.exchange',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.exchange',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange',
        exec: function () {/*
         return typeof Atomics.exchange === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.wait',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.wait',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait',
        exec: function () {/*
         return typeof Atomics.wait === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox48: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.wake',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.wake',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wake',
        exec: function () {/*
         return typeof Atomics.wake === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox48: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: false,
          graalvm20_1: false,
        }
      },
      {
        name: 'Atomics.isLockFree',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.isLockFree',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree',
        exec: function () {/*
         return typeof Atomics.isLockFree === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.load',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.load',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load',
        exec: function () {/*
         return typeof Atomics.load === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.or',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.or',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/or',
        exec: function () {/*
         return typeof Atomics.or === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.store',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.store',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store',
        exec: function () {/*
         return typeof Atomics.store === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.sub',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.sub',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub',
        exec: function () {/*
         return typeof Atomics.sub === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Atomics.xor',
        spec: 'https://tc39.github.io/ecma262/#sec-atomics.xor',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor',
        exec: function () {/*
         return typeof Atomics.xor === 'function';
         */},
        res: {
          ie11: false,
          edge15: edge.experimental,
          edge16: true,
          edge17: { val: false, note_id: 'edg-shared-memory-spectre' },
          firefox2: false,
          firefox46: firefox.nightly,
          firefox51: firefox.developer,
          firefox53: firefox.sharedmem,
          firefox55: true,
          firefox57: { val: "flagged", note_id: 'fx-shared-memory-spectre' },
          firefox72: firefox.nightly,
          firefox74: firefox.beta,
          firefox78: true,
          opera10_50: false,
          chrome48: chrome.sharedmem,
          chrome60: true,
          chrome63: { val: false, note_id: 'chr-shared-memory-spectre' },
          chrome68: true,
          safari10_1: true,
          safari11_1: { val: false, note_id: 'sf-shared-memory-spectre' },
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'generator functions can\'t be used with "new"',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-createdynamicfunction',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*#Generators_are_not_constructable',
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
      ie11: false,
      edge13: true,
      firefox2: false,
      firefox43: true,
      opera10_50: false,
      chrome50: true,
      safari10: true,
      duktape2_0: false,
      jerryscript2_3_0: true,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'generator throw() caught by inner generator',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-generatorfunction-objects',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*#IteratorResult_object_returned_instead_of_throwing',
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
      closure20180319: true,
      typescript1corejs2: typescript.downlevelIteration,
      ie11: false,
      edge14: true,
      firefox2: false,
      firefox27: true,
      opera10_50: false,
      chrome39: true,
      node0_12: "flagged",
      node4: true,
      safari10: true,
      duktape2_0: false,
      jerryscript2_3_0: true,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
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
      ie11: false,
      edge12: true,
      firefox2: false,
      firefox52: true,
      opera10_50: false,
      chrome47: true,
      safari10: true,
      duktape2_0: false,
      jerryscript2_3_0: true,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'nested rest destructuring, declarations',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-destructuring-assignment',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring',
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
      babel6corejs2: true,
      closure: true,
      ie11: false,
      edge13: edge.experimental,
      edge14: true,
      firefox2: false,
      firefox47: true,
      opera10_50: false,
      chrome49: true,
      safari10_1: true,
      typescript1corejs2: true,
      duktape2_0: false,
      jerryscript2_3_0: true,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
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
      babel6corejs2: true,
      closure: true,
      ie11: false,
      edge13: edge.experimental,
      edge14: true,
      firefox2: false,
      firefox47: true,
      opera10_50: false,
      typescript1corejs2: true,
      chrome49: true,
      safari10_1: true,
      duktape2_0: false,
      jerryscript2_3_0: true,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'Proxy, "enumerate" handler removed',
    category: '2016 misc',
    significance: 'tiny',
    spec: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-proxy-objects',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate',
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
      ie11: false,
      edge15: true,
      firefox2: false,
      firefox18: true,
      firefox25: false,
      firefox47: true,
      opera10_50: false,
      chrome50: true,
      safari10: true,
      duktape2_0: true,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
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
      firefox2: false,
      firefox43: true,
      opera10_50: false,
      chrome49: true,
      ie11: false,
      edge14: true,
      safari10: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    },
  },
  {
    name: 'Object.prototype getter/setter methods',
    spec: 'https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__',
    category: '2017 annex b',
    significance: 'tiny',
    subtests: [{
      name: '__defineGetter__',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__',
      exec: function () {/*
       var obj = {};
       function bar() { return "bar"; }
       Object.prototype.__defineGetter__.call(obj, "foo", bar);
       var prop = Object.getOwnPropertyDescriptor(obj, "foo");
       return prop.get === bar && !prop.writable && prop.configurable
       && prop.enumerable;
       */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: true,
        firefox2: false,
        firefox4: true,
        opera10_50: false,
        opera12: true,
        chrome30: true,
        node0_12: true,
        safari4: true,
        safari9: true,
        android4_0: true,
        ios5_1: true,
        duktape2_0: false,
        duktape2_2: true,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      }
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
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox36: true,
          opera10_50: false,
          chrome30: chrome.experimental,
          chrome38: true,
          node0_12: true,
          safari9: true,
          android4_0: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
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
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge16: true,
          firefox2: false,
          firefox48: true,
          opera10_50: false,
          opera12: true,
          chrome60: chrome.harmony,
          chrome62: true,
          safari5_1: true,
          safari9: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: '__defineSetter__',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__',
        exec: function () {/*
         var obj = {};
         function bar() {}
         Object.prototype.__defineSetter__.call(obj, "foo", bar);
         var prop = Object.getOwnPropertyDescriptor(obj, "foo");
         return prop.set === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: false,
          firefox4: true,
          opera10_50: false,
          opera12: true,
          chrome30: true,
          node0_12: true,
          safari4: true,
          safari9: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox36: true,
          opera10_50: false,
          chrome30: chrome.experimental,
          chrome38: true,
          node0_12: true,
          safari9: true,
          android4_0: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge16: true,
          firefox2: false,
          firefox48: true,
          opera10_50: false,
          opera12: true,
          chrome60: chrome.harmony,
          chrome62: true,
          safari5_1: true,
          safari9: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: '__lookupGetter__',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__',
        exec: function () {/*
         var obj = {
         get foo() { return "bar"},
         qux: 1
         };
         var foo = Object.prototype.__lookupGetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, "qux") === void undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: true,
          opera10_50: true,
          opera12: true,
          chrome30: true,
          node0_12: true,
          safari3_1: true,
          safari9: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
         && Object.prototype.__lookupGetter__.call(obj, "qux") === void undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: false,
          firefox4: true,
          opera10_50: false,
          opera12: true,
          chrome30: true,
          node0_12: true,
          safari4: true,
          safari9: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
         && Object.prototype.__lookupGetter__.call(obj, sym2) === void undefined
         && Object.prototype.__lookupGetter__.call(obj, Symbol()) === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox36: true,
          opera10_50: false,
          chrome30: chrome.experimental,
          chrome38: true,
          node0_12: true,
          safari9: true,
          android4_0: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: false,
          firefox24: true,
          opera10_50: false,
          opera12: true,
          chrome60: chrome.harmony,
          chrome62: true,
          safari5_1: true,
          safari9: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: '__lookupGetter__, data properties can shadow accessors',
        exec: function () {/*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineGetter__("foo", function () {})
         return b.__lookupGetter__("foo") === void undefined
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox4: true,
          opera10_50: false,
          opera12: true,
          chrome57: true,
          node8: true,
          safari4: true,
          safari9: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: '__lookupSetter__',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__',
        exec: function () {/*
         var obj = {
         set foo(baz) { return "bar"; },
         qux: 1
         };
         var foo = Object.prototype.__lookupSetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, "qux") === void undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: true,
          opera10_50: true,
          opera12: true,
          chrome30: true,
          node0_12: true,
          safari3_1: true,
          safari9: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
         && Object.prototype.__lookupSetter__.call(obj, "qux") === void undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: false,
          firefox4: true,
          opera10_50: false,
          opera12: true,
          chrome30: true,
          node0_12: true,
          safari4: true,
          safari9: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
         && Object.prototype.__lookupSetter__.call(obj, sym2) === void undefined
         && Object.prototype.__lookupSetter__.call(obj, Symbol()) === void undefined;
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox36: true,
          opera10_50: false,
          chrome30: chrome.experimental,
          chrome38: true,
          node0_12: true,
          safari9: true,
          android4_0: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: true,
          firefox2: false,
          firefox24: true,
          opera10_50: false,
          opera12: true,
          chrome60: chrome.harmony,
          chrome62: true,
          safari5_1: true,
          safari9: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: '__lookupSetter__, data properties can shadow accessors',
        exec: function () {/*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineSetter__("foo", function () {})
         return b.__lookupSetter__("foo") === void undefined
         */},
        res: {
          babel6corejs2: babel.corejs,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox4: true,
          opera10_50: false,
          opera12: true,
          chrome57: true,
          node8: true,
          safari4: true,
          safari9: true,
          ios5_1: true,
          duktape2_0: false,
          duktape2_2: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
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
        firefox2: false,
        firefox18: true,
        opera10_50: false,
        ie11: false,
        edge13: true,
        chrome52: true,
        safari10: true,
        duktape2_0: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
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
          firefox2: false,
          firefox18: true,
          opera10_50: false,
          ie11: false,
          edge13: true,
          chrome52: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
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
          ie11: false,
          edge14: true,
          chrome57: true,
          firefox2: false,
          firefox49: true,
          opera10_50: false,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
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
          ie11: false,
          edge14: true,
          chrome57: true,
          firefox2: false,
          firefox49: true,
          opera10_50: false,
          node8: true,
          safari10: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'Proxy "ownKeys" handler, duplicate keys for non-extensible targets',
    category: '2018 misc',
    significance: 'tiny',
    spec: 'https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys',
    exec: function() {/*
      var p = new Proxy({}, {
        ownKeys() {
          return ["a", "a"];
        }
      });
      try {
        Object.keys(p);
      } catch (e) {
         return e instanceof TypeError
      }
      return false;
    */},
    res: {
      edge16: false,
      chrome75: true,
      firefox57: true,
      firefox70: true,
      safari13: true,
      jerryscript2_3_0: false,
      graalvm19: false,
      graalvm20: true,
      graalvm20_1: true,
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
      ie11: false,
      firefox2: false,
      firefox54: true,
      opera10_50: false,
      chrome59: true,
      safari10: true,
      safari10_1: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    },
  },
  {
    name: 'assignments allowed in for-in head in non-strict mode',
    spec: 'https://tc39.github.io/ecma262/#sec-initializers-in-forin-statement-heads',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Compatibility_Initializer_expressions_in_strict_mode',
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
      firefox52: true,
      opera10_50: true,
      chrome30: true,
      safari3_1: true,
      safari9: false,
      safari10_1: true,
      node0_12: true,
      android4_0: true,
      ios5_1: true,
      duktape2_0: true,
      nashorn1_8: true,
      nashorn9: true,
      nashorn10: true,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    },
  },
  {
    name: 'arguments.caller removed',
    category: '2017 misc',
    significance: 'tiny',
    spec: 'https://github.com/tc39/ecma262/pull/689',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller',
    exec: function() {/*
     return (function(){
       'use strict';
       return !Object.getOwnPropertyDescriptor(arguments,'caller');
     })();
     */},
    res: {
      ie11: false,
      edge16: true,
      firefox2: false,
      firefox53: true,
      opera10_50: false,
      chrome56: true,
      node8: true,
      safari10_1: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    },
  },
  {
    name: 'object rest/spread properties',
    significance: 'medium',
    category: '2018 features',
    spec: 'https://github.com/tc39/proposal-object-rest-spread',
    subtests: [
      {
        name: 'object rest properties',
        exec: function () {/*
          var {a, ...rest} = {a: 1, b: 2, c: 3};
          return a === 1 && rest.a === void undefined && rest.b === 2 && rest.c === 3;
          */},
        res: {
          babel6corejs2: true,
          closure: true,
          closure20181028: {
            val: false,
            note_id: 'closure-object-assign',
            note_html: 'Requires native support for <code>Object.assign</code>',
          },
          typescript2_1corejs2: true,
          jsx: true,
          ie11: false,
          firefox2: false,
          firefox55: true,
          opera10_50: false,
          chrome58: chrome.experimental,
          chrome60: true,
          safari11: false,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'object spread properties',
        exec: function () {/*
          var spread = {b: 2, c: 3};
          var O = {a: 1, ...spread};
          return O !== spread && (O.a + O.b + O.c) === 6;
          */},
        res: {
          babel6corejs2: true,
          closure: true,
          closure20190121: {
            val: false,
            note_id: 'closure-object-assign',
          },
          jsx: true,
          ie11: false,
          firefox2: false,
          firefox55: true,
          opera10_50: false,
          chrome58: chrome.experimental,
          chrome60: true,
          typescript2_1corejs2: true,
          safari11: false,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
    ],
  },
  {
    name: 'Promise.prototype.finally',
    category: '2018 features',
    significance: 'medium',
    spec: 'https://github.com/tc39/proposal-promise-finally',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally',
    subtests: [
      {
        name: 'basic support',
        exec: function(){/*
        var p1 = Promise.resolve("foo");
        var p2 = Promise.reject("bar");
        var score = 0;
        function thenFn(result)  {
          score += (result === "foo");
          check();
        }
        function catchFn(result) {
          score += (result === "bar");
          check();
        }
        function finallyFn() {
          score += (arguments.length === 0);
          check();
        }
        p1.then(thenFn);
        p1.finally(finallyFn);
        p1.finally(function() {
          // should return a new Promise
          score += p1.finally() !== p1;
          check();
        });
        p2.catch(catchFn);
        p2.finally(finallyFn);
        function check() {
          if (score === 5) asyncTestPassed();
        }
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20180402: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge18: true,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          opera10_50: false,
          chrome61: chrome.promise,
          chrome63: true,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'don\'t change resolution value',
        exec: function(){/*
        var score = 0;
        function thenFn(result)  {
          score += (result === "foo");
          check();
        }
        function catchFn(result) {
          score += (result === "bar");
          check();
        }
        function finallyFn() {
          score++;
          check();
          return Promise.resolve("foobar");
        }
        Promise.resolve("foo").finally(finallyFn).then(thenFn);
        Promise.reject("bar").finally(finallyFn).catch(catchFn);
        function check() {
          if (score === 4) asyncTestPassed();
        }
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20180402: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge18: true,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          opera10_50: false,
          chrome61: chrome.promise,
          chrome63: true,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'change rejection value',
        exec: function(){/*
        var score = 0;
        Promise
          .reject("foobar")
          .finally(function() {
            return Promise.reject("foo");
          })
          .catch(function(result) {
            score += (result === "foo");
            check();
            return Promise.reject("foobar");
          })
          .finally(function() {
            throw new Error('bar');
          })
          .catch(function(result) {
            score += (result.message === "bar");
            check();
          });
        function check() {
          if (score === 2) asyncTestPassed();
        }
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20180402: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge18: true,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          opera10_50: false,
          safari11_1: true,
          safaritp: true,
          chrome61: chrome.promise,
          chrome63: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'template literal revision',
    spec: 'https://github.com/tc39/proposal-template-literal-revision',
    category: '2018 misc',
    significance: 'small',
    exec: function() {/*
     function tag(strings, a) {
     return strings[0] === void 0 &&
     strings.raw[0] === "\\01\\1\\xg\\xAg\\u0\\u0g\\u00g\\u000g\\u{g\\u{0\\u{110000}" &&
     strings[1] === "\0" &&
     strings.raw[1] === "\\0" &&
     a === 0;
     }
     return tag`\01\1\xg\xAg\u0\u0g\u00g\u000g\u{g\u{0\u{110000}${0}\0`;
     */},
    res: {
      closure20181008: true,
      closure20200315: false,
      closure20200517: true,
      ie11: false,
      firefox2: false,
      firefox53: true,
      opera10_50: false,
      chrome59: chrome.harmony,
      chrome62: true,
      safari11: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 's (dotAll) flag for regular expressions',
    spec: 'https://tc39.github.io/ecma262/#sec-get-regexp.prototype.dotAll',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll',
    category: '2018 features',
    significance: 'small',
    exec: function(){/*
    const regex = /foo.bar/s;
    return regex.test('foo\nbar');
  */},
    res : {
      es6tr: null,
      tr: null,
      babel6corejs2: true,
      closure: false,
      jsx: null,
      typescript1corejs2: null,
      es6shim: null,
      konq414: null,
      ie7: null,
      ie10: false,
      firefox1: null,
      firefox2: false,
      firefox77: false,
      firefox78: true,
      opera10_50: false,
      chrome1: null,
      chrome60: chrome.harmony,
      chrome62: true,
      safari11_1: true,
      safaritp: true,
      webkit: true,
      rhino1_7: null,
      xs6: null,
      jxa: null,
      node0_10: null,
      duktape2_0: null,
      duktape2_2: false,
      jerryscript2_3_0: false,
      android1_5: null,
      ios4: null,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    },
  },
  {
    name: 'RegExp named capture groups',
    spec: 'https://github.com/tc39/proposal-regexp-named-groups',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges',
    category: '2018 features',
    significance: 'small',
    exec: function(){/*
      var result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2016-03-11');
      return result.groups.year === '2016'
        && result.groups.month === '03'
        && result.groups.day === '11'
        && result[0] === '2016-03-11'
        && result[1] === '2016'
        && result[2] === '03'
        && result[3] === '11';
      */},
    res : {
      babel6corejs2: true,
      ie11: false,
      firefox2: false,
      firefox77: false,
      firefox78: true,
      opera10_50: false,
      chrome60: chrome.harmony,
      chrome64: true,
      safari11_1: true,
      safaritp: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'RegExp Lookbehind Assertions',
    spec: 'https://github.com/tc39/proposal-regexp-lookbehind',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions',
    category: '2018 features',
    significance: 'small',
    exec: function(){/*
    return /(?<=a)b/.test('ab') && /(?<!a)b/.test('cb') &&
           !/(?<=a)b/.test('b');
  */},
    res : {
      ie11: false,
      firefox2: false,
      firefox77: false,
      firefox78: true,
      opera10_50: false,
      chrome50: chrome.harmony,
      chrome62: true,
      safari13_1: false,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'RegExp Unicode Property Escapes',
    category: '2018 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-regexp-unicode-property-escapes',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes',
    exec: function () {/*
    const regexGreekSymbol = /\p{Script=Greek}/u;
    return regexGreekSymbol.test('π');
  */},
    res: {
      babel6corejs2: true,
      ie11: false,
      firefox2: false,
      firefox77: false,
      firefox78: true,
      opera10_50: false,
      chrome59: chrome.harmony,
      chrome64: true,
      safari11_1: true,
      safaritp: true,
      duktape2_0: false,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'Asynchronous Iterators',
    category: '2018 features',
    significance: 'medium',
    spec: 'https://github.com/tc39/proposal-async-iteration',
    subtests: [
      {
        name: 'async generators',
        exec: function(){/*
          async function*generator(){
            yield 42;
          }

          var iterator = generator();
          iterator.next().then(function(step){
            if(iterator[Symbol.asyncIterator]() === iterator && step.done === false && step.value === 42)asyncTestPassed();
          });
        */},
        res: {
          babel6corejs2: true,
          closure20180805: true,
          chrome62: chrome.harmony,
          chrome63: true,
          typescript2_3corejs2: true,
          ie11: false,
          firefox2: false,
          firefox55: firefox.nightly,
          firefox57: true,
          opera10_50: false,
          safari12: true,
          webkit: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'for-await-of loops',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of',
        exec: function(){/*
          var asyncIterable = {};
          asyncIterable[Symbol.asyncIterator] = function(){
            var i = 0;
            return {
              next: function(){
                switch(++i){
                  case 1: return Promise.resolve({done: false, value: 'a'});
                  case 2: return Promise.resolve({done: false, value: 'b'});
                } return Promise.resolve({done: true});
              }
            };
          };

          (async function(){
            var result = '';
            for await(var value of asyncIterable)result += value;
            if(result === 'ab')asyncTestPassed();
          })();
        */},
        res: {
          babel6corejs2: true,
          closure20180910: true,
          chrome62: chrome.harmony,
          chrome63: true,
          typescript2_3corejs2: true,
          ie11: false,
          firefox2: false,
          firefox55: firefox.nightly,
          firefox57: true,
          opera10_50: false,
          safari12: true,
          webkit: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'optional catch binding',
    category: '2019 misc',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-optional-catch-binding',
    subtests: [
      {
        name: 'basic',
        exec: function(){/*
          try {
            throw new Error();
          }
          catch {
            return true;
          }
          return false;
        */},
        res: {
          babel7corejs2: true,
          closure20190215: true,
          typescript2_5corejs2: true,
          ie11: false,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          opera10_50: false,
          chrome65: chrome.harmony,
          chrome66: true,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'await',
        exec: function(){/*
          (async function (){
            try {
              await Promise.reject();
            }
            catch {
              asyncTestPassed();
            }
          })();
        */},
        res: {
          babel7corejs2: true,
          closure20190215: true,
          typescript2_5corejs2: true,
          ie11: false,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          opera10_50: false,
          chrome65: chrome.harmony,
          chrome66: true,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'yield',
        exec: function(){/*
          function *foo() {
            try {
              yield;
            }
            catch {
              return true;
            }
          }

          var it = foo();
          it.next();
          return it.throw().value;
        */},
        res: {
          babel7corejs2: true,
          closure20190215: true,
          typescript2_5corejs2: true,
          ie11: false,
          firefox2: false,
          firefox57: false,
          firefox58: true,
          chrome65: chrome.harmony,
          chrome66: true,
          safari11_1: true,
          safaritp: true,
          webkit: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'Symbol.prototype.description',
    spec: 'https://github.com/tc39/proposal-Symbol-description',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description',
    category: '2019 misc',
    significance: 'small',
    subtests: [
      {
        name: 'basic',
        exec: function(){/*
          return Symbol('foo').description === 'foo';
        */},
        res : {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          closure20190301: true,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox63: true,
          chrome67: false,
          chrome69: chrome.harmony,
          chrome70: true,
          safari11: false,
          safari12: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'empty description',
        exec: function(){/*
          return Symbol('').description === '';
        */},
        res : {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          closure20190301: true,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox63: true,
          chrome67: false,
          chrome69: chrome.harmony,
          chrome70: true,
          safari11: false,
          safari12: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'undefined description',
        exec: function(){/*
          return Symbol.prototype.hasOwnProperty('description')
            && Symbol().description === void undefined;
        */},
        res : {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox63: true,
          chrome67: false,
          chrome69: chrome.harmony,
          chrome70: true,
          safari11: false,
          safari12: false,
          safari12_1: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
    ]
  },
  {
    name: 'Function.prototype.toString revision',
    category: '2019 misc',
    significance: 'small',
    spec: 'https://github.com/tc39/Function-prototype-toString-revision',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString',
    subtests: [{
      name: 'functions created with the Function constructor',
      exec: function(){/*
        var fn = Function('a', ' /\x2A a \x2A/ b, c /\x2A b \x2A/ //', '/\x2A c \x2A/ ; /\x2A d \x2A/ //');
        var str = 'function anonymous(a, /\x2A a \x2A/ b, c /\x2A b \x2A/ //\n) {\n/\x2A c \x2A/ ; /\x2A d \x2A/ //\n}';
        return fn + '' === str;
    */},
      res: {
        ie11: false,
        firefox2: false,
        firefox54: true,
        opera10_50: false,
        chrome59: chrome.harmony,
        chrome66: true,
        duktape2_0: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: 'arrows',
      exec: function(){/*
        var str = 'a => b';
        return eval('(' + str + ')') + '' === str;
    */},
      res: {
        node4: true,
        firefox2: false,
        firefox51: true,
        opera10_50: false,
        chrome50: true,
        safari10: true,
        ie11: false,
        edge13: true,
        duktape2_0: false,
        nashorn1_8: true,
        nashorn9: true,
        nashorn10: true,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: '[native code]',
      exec: function(){/*
        const NATIVE_EVAL_RE = /\bfunction\b[\s\S]*\beval\b[\s\S]*\([\s\S]*\)[\s\S]*\{[\s\S]*\[[\s\S]*\bnative\b[\s\S]+\bcode\b[\s\S]*\][\s\S]*\}/;
        return NATIVE_EVAL_RE.test(eval + '');
    */},
      res: {
        node4: true,
        firefox2: false,
        firefox10: true,
        firefox45: true,
        opera10_50: true,
        chrome50: true,
        safari3_1: true,
        ie11: true,
        edge13: true,
        duktape2_0: true,
        nashorn9: true,
        nashorn10: true,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: 'class expression with implicit constructor',
      exec: function(){/*
        var str = 'class A {}';
        return eval('(' + str + ')') + '' === str;
    */},
      res: {
        node4: true,
        firefox2: false,
        firefox55: true,
        opera10_50: false,
        chrome50: true,
        safari10: true,
        ie11: false,
        edge14: true,
        duktape2_0: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: 'class expression with explicit constructor',
      exec: function(){/*
        var str = 'class /\x2A a \x2A/ A /\x2A b \x2A/ extends /\x2A c \x2A/ function B(){} /\x2A d \x2A/ { /\x2A e \x2A/ constructor /\x2A f \x2A/ ( /\x2A g \x2A/ ) /\x2A h \x2A/ { /\x2A i \x2A/ ; /\x2A j \x2A/ } /\x2A k \x2A/ m /\x2A l \x2A/ ( /\x2A m \x2A/ ) /\x2A n \x2A/ { /\x2A o \x2A/ } /\x2A p \x2A/ }';
        return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */},
      res: {
        node4: true,
        firefox2: false,
        firefox55: true,
        opera10_50: false,
        chrome50: true,
        safari10: true,
        ie11: false,
        edge14: true,
        duktape2_0: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: 'unicode escape sequences in identifiers',
      exec: function(){/*
        var str = 'function \\u0061(\\u{62}, \\u0063) { \\u0062 = \\u{00063}; return b; }';
        return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */},
      res: {
        ie11: false,
        firefox2: false,
        firefox54: true,
        opera10_50: false,
        chrome59: chrome.harmony,
        chrome66: true,
        duktape2_0: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }, {
      name: 'methods and computed property names',
      exec: function(){/*
        var str = '[ /\x2A a \x2A/ "f" /\x2A b \x2A/ ] /\x2A c \x2A/ ( /\x2A d \x2A/ ) /\x2A e \x2A/ { /\x2A f \x2A/ }';
        return eval('({ /\x2A before \x2A/' + str + '/\x2A after \x2A/ }.f)') + '' === str;
    */},
      res: {
        ie11: false,
        firefox2: false,
        firefox54: true,
        opera10_50: false,
        chrome59: chrome.harmony,
        chrome66: true,
        duktape2_0: false,
        nashorn9: true,
        nashorn10: true,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      },
    }]
  },
  {
    name: 'JSON superset',
    spec: 'https://github.com/tc39/proposal-json-superset',
    category: '2019 misc',
    significance: 'small',
    subtests: [
      {
        name: 'LINE SEPARATOR can appear in string literals',
        exec: function(){/*
          return eval("'\u2028'") === "\u2028";
        */},
        res : {
          closure20190215: true,
          ie11: false,
          firefox2: false,
          firefox61: false,
          firefox62: true,
          chrome65: false,
          chrome66: true,
          safari11: false,
          safari12: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'PARAGRAPH SEPARATOR can appear in string literals',
        exec: function(){/*
          return eval("'\u2029'") === "\u2029";
        */},
        res : {
          closure20190215: true,
          ie11: false,
          firefox2: false,
          firefox61: false,
          firefox62: true,
          chrome65: false,
          chrome66: true,
          safari11: false,
          safari12: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
    ]
  },
  {
    name: 'Object.fromEntries',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-object-from-entries',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
    category: '2019 features',
    exec: function () {/*
    var object = Object.fromEntries(new Map([['foo', 42], ['bar', 23]]));
    return object.foo === 42 && object.bar === 23;
  */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      closure20190325: true,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox10: false,
      firefox52: false,
      firefox62: false,
      firefox63: true,
      safari12_1: true,
      safaritp: true,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
      chrome73: true,
      chrome74: true,
    }
  },
  {
    name: 'Well-formed JSON.stringify',
    spec: 'https://github.com/tc39/proposal-well-formed-stringify',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Well-formed_JSON.stringify()',
    category: '2019 misc',
    significance: 'small',
    exec: function () {/*
    return JSON.stringify('\uDF06\uD834') === "\"\\udf06\\ud834\""
      && JSON.stringify('\uDEAD') === "\"\\udead\"";
  */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      edge16: false,
      firefox10: false,
      firefox52: false,
      firefox63: false,
      firefox64: true,
      chrome70: false,
      chrome71: false,
      chrome72: true,
      safari1: false,
      safari12_1: true,
      safaritp: true,
      jerryscript2_3_0: false,
      graalvm19: true,
      graalvm20: true,
      graalvm20_1: true,
    }
  },
  {
    name: 'string trimming',
    category: '2019 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-string-left-right-trim',
    subtests: [
      {
        name: 'String.prototype.trimLeft',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft',
        exec: function(){/*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20190709: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox3_5: true,
          firefox3_6: true,
          firefox4: true,
          chrome7: true,
          opera10_10: false,
          konq4_4: false,
          konq4_9: true,
          besen: false,
          rhino1_7: false,
          phantom: true,
          node0_12: true,
          safari3: false,
          safari4: true,
          safari12: true,
          webkit: true,
          es7shim: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          nashorn1_8: true,
          nashorn9: true,
          nashorn10: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'String.prototype.trimRight',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
        exec: function(){/*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20190709: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          edge12: true,
          firefox2: false,
          firefox3_5: true,
          firefox3_6: true,
          firefox4: true,
          chrome7: true,
          opera10_10: false,
          konq4_4: false,
          konq4_9: true,
          besen: false,
          rhino1_7: false,
          phantom: true,
          node0_12: true,
          safari3: false,
          safari4: true,
          safari12: true,
          webkit: true,
          es7shim: true,
          android4_0: true,
          ios5_1: true,
          duktape2_0: false,
          nashorn1_8: true,
          nashorn9: true,
          nashorn10: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'String.prototype.trimStart',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart',
        exec: function(){/*
        return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20190325: {
            val: false,
            note_id: 'closure-string-trimstart',
            note_html: 'Requires native support for String.prototype.trimLeft.',
          },
          closure20190709: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox59: false,
          firefox60: firefox.nightly,
          firefox61: true,
          chrome66: true,
          opera10_50: false,
          safari12: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'String.prototype.trimEnd',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd',
        exec: function(){/*
        return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20190325: {
            val: false,
            note_id: 'closure-string-trimend',
            note_html: 'Requires native support for String.prototype.trimRight.',
          },
          closure20190709: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox59: false,
          firefox60: firefox.nightly,
          firefox61: true,
          chrome66: true,
          opera10_50: false,
          safari12: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      }
    ]
  },
  {
    name: 'Array.prototype.{flat, flatMap}',
    category: '2019 features',
    significance: 'medium',
    spec: 'https://tc39.github.io/proposal-flatMap/',
    links: [
      {
        note_id: 'flatten-compat-issue',
        note_html: 'Name of <code>Array.prototype.flatten()</code> changed to <code>Array.prototype.flat()</code> due to <a href="https://github.com/tc39/proposal-flatMap/pull/56">web compatibility issues.</a>',
      }
    ],
    subtests: [
      {
        name: 'Array.prototype.flat',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
        exec: function(){/*
        return [1, [2, 3], [4, [5, 6]]].flat().join('') === '12345,6';
      */},
        res: {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          closure20190301: true,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox58: false,
          firefox59: {
            val: false,
            note_id: 'ffox-flatten',
            note_html: 'Older Firefox Nightly builds support only the obsolete draft function name <code>Array.prototype.flatten()</code>.'
          },
          firefox62: true,
          chrome69: true,
          opera10_50: false,
          safari12: true,
          safaritp: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'Array.prototype.flatMap',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap',
        exec: function(){/*
        return [{a: 1, b: 2}, {a: 3, b: 4}].flatMap(function (it) {
          return [it.a, it.b];
        }).join('') === '1234';
      */},
        res: {
          babel6corejs2: babel.corejs,
          closure20190301: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox58: false,
          firefox59: firefox.nightly,
          firefox62: true,
          chrome69: true,
          opera10_50: false,
          safari12: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
      {
        name: 'flat and flatMap in Array.prototype[@@unscopables]',
        exec: function(){/*
        return Array.prototype[Symbol.unscopables].flat
          && Array.prototype[Symbol.unscopables].flatMap;
      */},
        res: {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox58: false,
          firefox59: false,
          firefox62: false,
          firefox67: true,
          chrome69: false,
          chrome73: true,
          chrome74: true,
          opera10_50: false,
          safari12: false,
          safari13: true,
          duktape2_2: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        }
      },
    ]
  },
  {
    name: 'String.prototype.matchAll',
    category: '2020 features',
    significance: 'small',
    spec: 'https://github.com/tc39/String.prototype.matchAll',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll',
    subtests: [
      {
        name: 'basic functionality',
        exec: function(){/*
          var iterator = '11a2bb'.matchAll(/(\d)(\D)/g);
          if(iterator[Symbol.iterator]() !== iterator)return false;
          var a = '', b = '', c = '', step;
          while(!(step = iterator.next()).done){
            a += step.value[0];
            b += step.value[1];
            c += step.value[2];
          }
          return a === '1a2b'
            && b === '12'
            && c === 'ab';
        */},
        res: {
          babel6corejs2: babel.corejs,
          closure20200101: true,
          typescript1corejs2: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox65: false,
          firefox66: firefox.nightly,
          firefox67: true,
          chrome67: false,
          chrome68: chrome.harmony,
          chrome73: true,
          chrome74: true,
          opera10_50: false,
          safari13: true,
          safaritp: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        },
      },
      {
        name: 'throws on non-global regex',
        exec: function(){/*
          if (typeof String.prototype.matchAll !== 'function') return false;
          try {
            '11a2bb'.matchAll(/(\d)(\D)/);
          } catch (e) {
            return true;
          }
        */},
        res: {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          closure20200101: true,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox2: false,
          firefox60: false,
          firefox72: false,
          firefox73: true,
          chrome67: false,
          chrome68: false,
          chrome73: false,
          chrome74: false,
          chrome80: true,
          opera10_50: false,
          safari13: false,
          safari13_1: true,
          safaritp: true,
          duktape2_0: false,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        },
      },
    ],
  },
  {
    name: 'BigInt',
    category: '2020 features',
    significance: 'medium',
    spec: 'https://github.com/tc39/proposal-bigint',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt',
    subtests: [
      {
        name: 'basic functionality',
        exec: function () {/*
        return (1n + 2n) === 3n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          safari14: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'constructor',
        exec: function () {/*
        return BigInt("3") === 3n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          safari14: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'BigInt.asUintN',
        exec: function () {/*
        return typeof BigInt.asUintN === 'function';
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          safari14: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'BigInt.asIntN',
        exec: function () {/*
        return typeof BigInt.asIntN === 'function';
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          safari14: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'BigInt64Array',
        exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new BigInt64Array(buffer);
        view[0] = 0x8000000000000000n;
        return view[0] === -0x8000000000000000n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox67: false,
          firefox68: true,
          chrome67: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'BigUint64Array',
        exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new BigUint64Array(buffer);
        view[0] = 0x10000000000000000n;
        return view[0] === 0n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox67: false,
          firefox68: true,
          chrome67: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'DataView.prototype.getBigInt64',
        exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigInt64(0, 1n);
        return view.getBigInt64(0) === 1n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
      {
        name: 'DataView.prototype.getBigUint64',
        exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigUint64(0, 1n);
        return view.getBigUint64(0) === 1n;
      */},
        res: {
          ie11: false,
          firefox10: false,
          firefox45: false,
          firefox66: false,
          firefox67: firefox.bigint,
          firefox68: true,
          chrome67: true,
          jerryscript2_3_0: false,
          graalvm19: true,
          graalvm20: true,
          graalvm20_1: true,
        },
      },
    ],
  },
  {
    name: 'Promise.allSettled',
    category: '2020 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-promise-allSettled',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled',
    exec: function () {/*
      Promise.allSettled([
        Promise.resolve(1),
        Promise.reject(2),
        Promise.resolve(3)
      ]).then(it => {
        if (
          it.length === 3 &&
          it[0].status === 'fulfilled' && it[0].value === 1 &&
          it[1].status === 'rejected' && it[1].reason === 2 &&
          it[2].status === 'fulfilled' && it[2].value === 3
        ) asyncTestPassed();
      });
    */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      closure20191027: true,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox10: false,
      firefox68: firefox.nightly,
      firefox71: true,
      chrome76: true,
      safari13: true,
      jerryscript2_3_0: false,
      graalvm19: false,
      graalvm20: graalvm.es2020flag,
      graalvm20_1: true,
    }
  },
  {
    name: 'globalThis',
    category: '2020 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-global',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis',
    subtests: [{
      name: '"globalThis" global property is global object',
      exec: function(){/*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof globalThis === 'object' && globalThis && globalThis === actualGlobal && !globalThis.lacksGlobalThis && globalThis.__system_global_test__ === 42;
    */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        closure20200101: true,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox53: false,
        firefox65: true,
        chrome70: chrome.experimental,
        chrome71: true,
        opera10_50: false,
        safari10_1: false,
        safari12_1: true,
        safaritp: true,
        node0_10: false,
        node0_12: false,
        node4: false,
        node6: false,
        node6_5: false,
        node7: false,
        node7_6: false,
        node8: false,
        node8_3: false,
        node8_7: false,
        duktape2_0: false,
        duktape2_1: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      }
    }, {
      name: '"globalThis" global property has correct property descriptor',
      exec: function(){/*
      var actualGlobal = Function('return this')();
      if (typeof globalThis !== 'object') { return false; }
      if (!('globalThis' in actualGlobal)) { return false; }
      if (Object.prototype.propertyIsEnumerable.call(actualGlobal, 'globalThis')) { return false; }

      var descriptor = Object.getOwnPropertyDescriptor(actualGlobal, 'globalThis');
      return descriptor.value === actualGlobal && !descriptor.enumerable && descriptor.configurable && descriptor.writable;
    */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        closure20200101: true,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox53: false,
        firefox65: true,
        chrome70: chrome.experimental,
        chrome71: true,
        opera10_50: false,
        safari10_1: false,
        safari12_1: true,
        safaritp: true,
        node0_10: false,
        node0_12: false,
        node4: false,
        node6: false,
        node6_5: false,
        node7: false,
        node7_6: false,
        node8: false,
        node8_3: false,
        node8_7: false,
        duktape2_0: false,
        duktape2_1: false,
        jerryscript2_3_0: false,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true,
      }
    }]
  },
  {
    name: 'optional chaining operator (?.)',
    spec: 'https://github.com/tc39/proposal-optional-chaining',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining',
    category: '2020 features',
    significance: 'medium',
    subtests: [
      {
        name: 'optional property access',
        exec: function(){/*
          var foo = { baz: 42 };
          var bar = null;
          return foo?.baz === 42 && bar?.baz === void undefined;
        */},
        res : {
          babel7corejs2: true,
          typescript3_7corejs3: true,
          ie11: false,
          firefox10: false,
          firefox52: false,
          firefox73: false,
          firefox74: true,
          chrome77: false,
          chrome78: {val: 'flagged', note_id: "chrome-optional-chaining", note_html: "The feature has to be enabled via <code>--js-flags=\"--harmony-optional-chaining\"</code> flag"},
          chrome80: true,
          safari13_1: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        }
      },
      {
        name: 'optional bracket access',
        exec: function(){/*
          var foo = { baz: 42 };
          var bar = null;
          return foo?.['baz'] === 42 && bar?.['baz'] === void undefined;
        */},
        res : {
          babel7corejs2: true,
          typescript3_7corejs3: true,
          ie11: false,
          firefox10: false,
          firefox52: false,
          firefox73: false,
          firefox74: true,
          chrome77: false,
          chrome78: {val: 'flagged', note_id: "chrome-optional-chaining"},
          chrome80: true,
          safari13_1: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        }
      },
      {
        name: 'optional method call',
        exec: function(){/*
          var foo = { baz: function () { return this.value; }, value: 42 };
          var bar = null;
          return foo?.baz() === 42 && bar?.baz() === void undefined;
        */},
        res : {
          babel7corejs2: true,
          typescript3_7corejs3: true,
          ie11: false,
          firefox10: false,
          firefox52: false,
          firefox73: false,
          firefox74: true,
          chrome77: false,
          chrome78: {val: 'flagged', note_id: "chrome-optional-chaining"},
          chrome80: true,
          safari13_1: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        }
      },
      {
        name: 'optional function call',
        exec: function(){/*
          var foo = { baz: function () { return 42; } };
          var bar = {};
          function baz() { return 42; };
          var n;
          return foo.baz?.() === 42 && bar.baz?.() === void undefined && baz?.() === 42 && n?.() === void undefined;
        */},
        res : {
          babel7corejs2: true,
          typescript3_7corejs3: true,
          ie11: false,
          firefox10: false,
          firefox52: false,
          firefox73: false,
          firefox74: true,
          chrome77: false,
          chrome78: {val: 'flagged', note_id: "chrome-optional-chaining"},
          chrome80: true,
          safari13_1: true,
          safaritp: true,
          jerryscript2_3_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2020flag,
          graalvm20_1: true,
        }
      },
    ]
  },
  {
    name: 'nullish coalescing operator (??)',
    spec: 'https://github.com/tc39/proposal-nullish-coalescing',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator',
    category: '2020 features',
    significance: 'small',
    exec: function(){/*
      return (null ?? 42) === 42 &&
        (undefined ?? 42) === 42 &&
        (false ?? 42) === false &&
        ('' ?? 42) === '' &&
        (0 ?? 42) === 0 &&
        isNaN(NaN ?? 42);
    */},
    res : {
      babel7corejs2: true,
      closure: false,
      closure20200315: true,
      typescript3_7corejs3: true,
      ie11: false,
      firefox10: false,
      firefox52: false,
      firefox72: true,
      chrome77: false,
      chrome78: {val: 'flagged', note_id: "chrome-nullish", note_html: "The feature has to be enabled via <code>--js-flags=\"--harmony-nullish\"</code> flag"},
      chrome80: true,
      safari13_1: true,
      safaritp: true,
      jerryscript2_3_0: false,
      graalvm19: false,
      graalvm20: graalvm.es2020flag,
      graalvm20_1: true,
    }
  },
  {
    name: 'String.prototype.replaceAll',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-string-replace-all',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll',
    category: '2021 features',
    exec: function () {/*
      return 'q=query+string+parameters'.replaceAll('+', ' ') === 'q=query string parameters';
    */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox10: false,
      firefox52: false,
      firefox71: false,
      firefox72: firefox.nightly,
      firefox77: true,
      chrome77: false,
      chrome80: chrome.stringPrototypeReplaceAll,
      chrome85: true,
      safari13_1: true,
      safaritp: true,
      jerryscript2_3_0: false,
      graalvm19: false,
      graalvm20: graalvm.es2020flag,
      graalvm20_1: graalvm.es2021flag,
      ios13_4: true,
    }
  },
  {
    name: 'Promise.any',
    category: '2021 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-promise-any',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any',
    subtests: [
      {
        name: 'fulfillment',
        exec: function () {/*
          Promise.any([
            Promise.reject(1),
            Promise.resolve(2),
            Promise.resolve(3)
          ]).then(it => {
            if (it === 2) asyncTestPassed();
          });
        */},
        res: {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox10: false,
          firefox60: false,
          firefox72: firefox.nightly,
          firefox79: true,
          chrome77: false,
          chrome84: {val: 'flagged', note_id: "chrome-promise-any", note_html: "Available behind the <a href='https://bugs.chromium.org/p/v8/issues/detail?id=9808'><code>--js-flags=\"--harmony-promise-any\"</code></a> flag in V8."},
          chrome85: true,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        }
      },
      {
        name: 'AggregateError',
        exec: function () {/*
          Promise.any([
            Promise.reject(1),
            Promise.reject(2),
            Promise.reject(3)
          ]).catch(error => {
            if (error instanceof AggregateError && error.errors.length === 3) asyncTestPassed();
          });
        */},
        res: {
          babel6corejs2: false,
          babel7corejs3: babel.corejs,
          typescript1corejs2: typescript.fallthrough,
          typescript3_2corejs3: typescript.corejs,
          ie11: false,
          firefox10: false,
          firefox60: false,
          firefox72: firefox.nightly,
          firefox79: true,
          chrome77: false,
          chrome84: {val: 'flagged', note_id: "chrome-promise-any", note_html: "Available behind the <a href='https://bugs.chromium.org/p/v8/issues/detail?id=9808'><code>--js-flags=\"--harmony-promise-any\"</code></a> flag in V8."},
          chrome85: true,
          safari14: true,
          safaritp: true,
        }
      }
    ],
  },
  {
    name: 'WeakReferences',
    spec: 'https://github.com/tc39/proposal-weakrefs',
    category: '2021 features',
    significance: 'large',
    subtests: [
      {
        name: 'WeakRef minimal support',
        spec: 'https://github.com/tc39/proposal-weakrefs#weak-references',
        exec: function(){/*
          var O = {};
          var weakref = new WeakRef(O);
          return weakref.deref() === O;
        */},
        res : {
          ie11: false,
          firefox2: false,
          firefox74: {
            val: 'flagged',
            note_id: 'firefox-weakrefs',
            note_html: 'The feature has to be enabled via <code>javascript.options.experimental.weakrefs</code> setting under <code>about:config</code>.'
          },
          firefox79: true,
          opera10_50: false,
          chrome65: false,
          chrome74: {val: 'flagged', note_id: "chrome-weakrefs", note_html: "Available behind the <a href='https://bugs.chromium.org/p/v8/issues/detail?id=8179'><code>--js-flags=\"--harmony-weak-refs --expose-gc\"</code></a> flag in V8."},
          chrome85: true,
          safari13: false,
          safaritp: true,
          duktape2_0: false,
          graalvm19: false,
          graalvm20: graalvm.es2021flag,
        }
      },
      {
        name: 'FinalizationRegistry minimal support',
        spec: 'https://github.com/tc39/proposal-weakrefs#finalizers',
        exec: function(){/*
          var fr = new FinalizationRegistry(function() {});
          return Object.getPrototypeOf(fr) === FinalizationRegistry.prototype;
        */},
        res : {
          ie11: false,
          firefox2: false,
          firefox74: false,
          firefox78: { val: 'flagged', note_id: 'firefox-weakrefs' },
          firefox79: true,
          opera10_50: false,
          chrome65: false,
          chrome74: false,
          chrome85: true,
          safaritp: true,
          duktape2_0: false,
          graalvm19: false,
          graalvm20: false,
          graalvm20_1: false,
          graalvm20_3: graalvm.es2021flag,
        }
      }
    ]
  },
  {
    name: 'Logical Assignment',
    category: '2021 features',
    significance: 'small',
    spec: 'https://github.com/tc39/proposal-logical-assignment/',
    subtests: [
      {
        name: '||= basic support',
        exec: function () {/*
        let a;
        let b = 0;
        let c = 1;
        a ||= 2;
        b ||= 2;
        c ||= 2;
        return a === 2 && b === 2 && c === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment", note_html: "Available behind the <a href='https://github.com/v8/v8/commit/b151d8db22be308738192497a68c2c7c0d8d4070'><code>--js-flags=\"--logical-assignment\"</code></a> flag in V8."},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '||= short-circuiting behaviour',
        exec: function () {/*
        let a = 1;
        let i = 1;
        a ||= ++i;
        return a === 1 && i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '||= setter not unecessarily invoked',
        exec: function () {/*
        let i = 1;
        var obj = { get x() { return 1 }, set x(n) { i++; } };
        obj.x ||= 2;
        return i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '&&= basic support',
        exec: function () {/*
        let a;
        let b = 0;
        let c = 1;
        a &&= 2;
        b &&= 2;
        c &&= 2;
        return typeof a === 'undefined' && b === 0 && c === 2;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '&&= short-circuiting behaviour',
        exec: function () {/*
        let a;
        let i = 1;
        a &&= ++i;
        return typeof a === 'undefined' && i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '&&= setter not unecessarily invoked',
        exec: function () {/*
        let i = 1;
        var obj = { get x() { return }, set x(n) { i++; } };
        obj.x &&= 2;
        return i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '??= basic support',
        exec: function () {/*
        let a;
        let b = 0;
        let c = 1;
        a ??= 2;
        b ??= 2;
        c ??= 2;
        return a === 2 && b === 0 && c === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '??= short-circuiting behaviour',
        exec: function () {/*
        let a = 1;
        let i = 1;
        a ??= ++i;
        return a === 1 && i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
      {
        name: '??= setter not unecessarily invoked',
        exec: function () {/*
        let i = 1;
        var obj = { get x() { return 1 }, set x(n) { i++; } };
        obj.x ??= 2;
        return i === 1;
      */},
        res: {
          ie11: false,
          firefox60: false,
          firefox76: false,
          firefox77: firefox.nightly,
          firefox79: true,
          chrome80: false,
          chrome84: {val: 'flagged', note_id: "chrome-logical-assignment"},
          chrome85: true,
          safari13: false,
          safari14: true,
          safaritp: true,
          graalvm20_3: graalvm.es2021flag,
        },
      },
    ]
  },
  {
    name: 'numeric separators',
    spec: 'https://github.com/tc39/proposal-numeric-separator',
    category: '2021 features',
    significance: 'small',
    exec: function(){/*
      return 1_000_000.000_001 === 1000000.000001 &&
        0b1010_0001_1000_0101 === 0b1010000110000101;
    */},
    res : {
      babel7corejs2: true,
      typescript1corejs2: false,
      typescript2_7corejs2: true,
      ie11: false,
      firefox2: false,
      firefox10: false,
      firefox67: false,
      firefox68: firefox.nightly,
      firefox70: true,
      opera10_50: false,
      chrome67: chrome.harmony,
      chrome75: true,
      safari13: true,
      safaritp: true,
      graalvm19: false,
      graalvm20: graalvm.es2020flag,
      graalvm20_1: true,
    }
  },
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['2016 features', '2016 misc', '2017 features', '2017 misc', '2017 annex b', '2018 features', '2018 misc', '2019 features', '2019 misc', '2020 features', '2021 features', 'finished (stage 4)'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES2016+ category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
