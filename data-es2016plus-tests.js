module.exports = [
    {
        name: "exponentiation (**) operator",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
         return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
         */
                }
            },
            {
                name: "assignment",
                exec: function() {
                    /*
         var a = 2; a **= 3; return a === 8;
         */
                }
            },
            {
                name: "early syntax error for unary negation without parens",
                exec: function() {
                    /*
         if (2 ** 3 !== 8) { return false; }
         try {
         Function("-5 ** 2")();
         } catch(e) {
         return true;
         }
         */
                }
            }
        ]
    },
    {
        name: "Array.prototype.includes",
        subtests: [
            {
                name: "Array.prototype.includes",
                exec: function() {
                    /*
         return [1, 2, 3].includes(1)
         && ![1, 2, 3].includes(4)
         && ![1, 2, 3].includes(1, 1)
         && [NaN].includes(NaN)
         && Array(1).includes();
         */
                }
            },
            {
                name: "Array.prototype.includes is generic",
                exec: function() {
                    /*
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
         */
                }
            },
            {
                name: "%TypedArray%.prototype.includes",
                exec: function() {
                    /*
         return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
         Int32Array, Uint32Array, Float32Array, Float64Array].every(function(TypedArray){
         return new TypedArray([1, 2, 3]).includes(1)
         && !new TypedArray([1, 2, 3]).includes(4)
         && !new TypedArray([1, 2, 3]).includes(1, 1);
         });
         */
                }
            }
        ]
    },
    {
        name: 'generator functions can\'t be used with "new"',
        exec: function() {
            /*
     function * generator() {
     yield 3;
     }
     try {
     new generator();
     } catch(e) {
     return true;
     }
     */
        }
    },
    {
        name: "generator throw() caught by inner generator",
        exec: function() {
            /*
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
     */
        }
    },
    {
        name: "strict fn w/ non-strict non-simple params is error",
        exec: function() {
            /*
     function foo(...a){}
     try {
     Function("function bar(...a){'use strict';}")();
     } catch(e) {
     return true;
     }
     */
        }
    },
    {
        name: "nested rest destructuring, declarations",
        exec: function() {
            /*
     var [x, ...[y, ...z]] = [1,2,3,4];
     return x === 1 && y === 2 && z + '' === '3,4';
     */
        }
    },
    {
        name: "nested rest destructuring, parameters",
        exec: function() {
            /*
     return function([x, ...[y, ...z]]) {
     return x === 1 && y === 2 && z + '' === '3,4';
     }([1,2,3,4]);
     */
        }
    },
    {
        name: 'Proxy, "enumerate" handler removed',
        exec: function() {
            /*
     var passed = true;
     var proxy = new Proxy({}, {
     enumerate: function() {
     passed = false;
     }
     });
     for(var key in proxy); // Should not throw, nor execute the 'enumerate' method.
     return passed;
     */
        }
    },
    {
        name: "Proxy internal calls, Array.prototype.includes",
        exec: function() {
            /*
     // Array.prototype.includes -> Get -> [[Get]]
     var get = [];
     var p = new Proxy({length: 3, 0: '', 1: '', 2: '', 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
     Array.prototype.includes.call(p, {});
     if (get + '' !== "length,0,1,2") return;

     get = [];
     p = new Proxy({length: 4, 0: NaN, 1: '', 2: NaN, 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
     Array.prototype.includes.call(p, NaN, 1);
     return (get + '' === "length,1,2");
     */
        }
    },
    {
        name: "Object static methods",
        subtests: [
            {
                name: "Object.values",
                exec: function() {
                    /*
         var obj = Object.create({ a: "qux", d: "qux" });
         obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
         var v = Object.values(obj);
         return Array.isArray(v) && String(v) === "foo,bar,baz";
         */
                }
            },
            {
                name: "Object.entries",
                exec: function() {
                    /*
         var obj = Object.create({ a: "qux", d: "qux" });
         obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
         var e = Object.entries(obj);
         return Array.isArray(e)
         && e.length === 3
         && String(e[0]) === "a,foo"
         && String(e[1]) === "b,bar"
         && String(e[2]) === "c,baz";
         */
                }
            },
            {
                name: "Object.getOwnPropertyDescriptors",
                exec: function() {
                    /*
          var object = {a: 1};
          var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
          object[B] = 2;
          var O = Object.defineProperty(object, 'c', {value: 3});
          var D = Object.getOwnPropertyDescriptors(O);

          return D.a.value === 1 && D.a.enumerable === true && D.a.configurable === true && D.a.writable === true
          && D[B].value === 2 && D[B].enumerable === true && D[B].configurable === true && D[B].writable === true
          && D.c.value === 3 && D.c.enumerable === false && D.c.configurable === false && D.c.writable === false;
          */
                }
            },
            {
                name:
                    "Object.getOwnPropertyDescriptors doesn't provide undefined descriptors",
                exec: function() {
                    /*
          var P = new Proxy({a:1}, {
            getOwnPropertyDescriptor: function(t, k) {}
          });
          return !Object.getOwnPropertyDescriptors(P).hasOwnProperty('a');
        */
                }
            }
        ]
    },
    {
        name: "String padding",
        subtests: [
            {
                name: "String.prototype.padStart",
                exec: function() {
                    /*
         return 'hello'.padStart(10) === '     hello'
         && 'hello'.padStart(10, '1234') === '12341hello'
         && 'hello'.padStart() === 'hello'
         && 'hello'.padStart(6, '123') === '1hello'
         && 'hello'.padStart(3) === 'hello'
         && 'hello'.padStart(3, '123') === 'hello';
         */
                }
            },
            {
                name: "String.prototype.padEnd",
                exec: function() {
                    /*
         return 'hello'.padEnd(10) === 'hello     '
         && 'hello'.padEnd(10, '1234') === 'hello12341'
         && 'hello'.padEnd() === 'hello'
         && 'hello'.padEnd(6, '123') === 'hello1'
         && 'hello'.padEnd(3) === 'hello'
         && 'hello'.padEnd(3, '123') === 'hello';
         */
                }
            }
        ]
    },
    {
        name: "trailing commas in function syntax",
        subtests: [
            {
                name: "in parameter lists",
                exec: function() {
                    /*
          return typeof function f( a, b, ){} === 'function';
        */
                }
            },
            {
                name: "in argument lists",
                exec: function() {
                    /*
          return Math.min(1,2,3,) === 1;
        */
                }
            }
        ]
    },
    {
        name: "async functions",
        subtests: [
            {
                name: "return",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "throw",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "no line break between async and function",
                exec: function() {
                    /*
          async function a(){}
          try { Function("async\n function a(){}")(); } catch(e) { return true; }
        */
                }
            },
            {
                name: 'no "prototype" property',
                exec: function() {
                    /*
          async function a(){};
          return !a.hasOwnProperty("prototype");
        */
                }
            },
            {
                name: "await",
                exec: function() {
                    /*
          (async function (){
            await Promise.resolve();
            var a1 = await new Promise(function(resolve) { setTimeout(resolve,800,"foo"); });
            var a2 = await new Promise(function(resolve) { setTimeout(resolve,800,"bar"); });
            if (a1 + a2 === "foobar") {
              asyncTestPassed();
            }
          }());
        */
                }
            },
            {
                name: "await, rejection",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "must await a value",
                exec: function() {
                    /*
          async function a(){ await Promise.resolve(); }
          try { Function("(async function a(){ await; }())")(); } catch(e) { return true; }
        */
                }
            },
            {
                name: "can await non-Promise values",
                exec: function() {
                    /*
          (async function (){
            await Promise.resolve();
            var e = await "foo";
            if (e === "foo") {
              asyncTestPassed();
            }
          }());
        */
                }
            },
            {
                name: "cannot await in parameters",
                exec: function() {
                    /*
          async function a(){ await Promise.resolve(); }
          try { Function("(async function a(b = await Promise.resolve()){}())")(); } catch(e) { return true; }
        */
                }
            },
            {
                name: "async methods, object literals",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "async methods, classes",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "async arrow functions in methods, classes",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "async arrow functions",
                exec: function() {
                    /*
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
        */
                }
            },
            {
                name: "correct prototype chain",
                exec: function() {
                    /*
          var asyncFunctionProto = Object.getPrototypeOf(async function (){});
          return asyncFunctionProto !== function(){}.prototype
            && Object.getPrototypeOf(asyncFunctionProto) === Function.prototype;
        */
                }
            },
            {
                name: "async function prototype, Symbol.toStringTag",
                exec: function() {
                    /*
          return Object.getPrototypeOf(async function (){})[Symbol.toStringTag] == "AsyncFunction";
        */
                }
            },
            {
                name: "async function constructor",
                exec: function() {
                    /*
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
        */
                }
            }
        ]
    },
    {
        name: "shared memory and atomics",
        subtests: [
            {
                name: "SharedArrayBuffer",
                exec: function() {
                    /*
         return typeof SharedArrayBuffer === 'function';
         */
                }
            },
            {
                name: "SharedArrayBuffer[Symbol.species]",
                exec: function() {
                    /*
         return SharedArrayBuffer[Symbol.species] === SharedArrayBuffer;
         */
                }
            },
            {
                name: "SharedArrayBuffer.prototype.byteLength",
                exec: function() {
                    /*
         return 'byteLength' in SharedArrayBuffer.prototype;
         */
                }
            },
            {
                name: "SharedArrayBuffer.prototype.slice",
                exec: function() {
                    /*
         return typeof SharedArrayBuffer.prototype.slice === 'function';
         */
                }
            },
            {
                name: "SharedArrayBuffer.prototype[Symbol.toStringTag]",
                exec: function() {
                    /*
         return SharedArrayBuffer.prototype[Symbol.toStringTag] === 'SharedArrayBuffer';
         */
                }
            },
            {
                name: "Atomics.add",
                exec: function() {
                    /*
         return typeof Atomics.add == 'function';
         */
                }
            },
            {
                name: "Atomics.and",
                exec: function() {
                    /*
         return typeof Atomics.and == 'function';
         */
                }
            },
            {
                name: "Atomics.compareExchange",
                exec: function() {
                    /*
         return typeof Atomics.compareExchange == 'function';
         */
                }
            },
            {
                name: "Atomics.exchange",
                exec: function() {
                    /*
         return typeof Atomics.exchange == 'function';
         */
                }
            },
            {
                name: "Atomics.wait",
                exec: function() {
                    /*
         return typeof Atomics.wait == 'function';
         */
                }
            },
            {
                name: "Atomics.wake",
                exec: function() {
                    /*
         return typeof Atomics.wake == 'function';
         */
                }
            },
            {
                name: "Atomics.isLockFree",
                exec: function() {
                    /*
         return typeof Atomics.isLockFree == 'function';
         */
                }
            },
            {
                name: "Atomics.load",
                exec: function() {
                    /*
         return typeof Atomics.load == 'function';
         */
                }
            },
            {
                name: "Atomics.or",
                exec: function() {
                    /*
         return typeof Atomics.or == 'function';
         */
                }
            },
            {
                name: "Atomics.store",
                exec: function() {
                    /*
         return typeof Atomics.store == 'function';
         */
                }
            },
            {
                name: "Atomics.sub",
                exec: function() {
                    /*
         return typeof Atomics.sub == 'function';
         */
                }
            },
            {
                name: "Atomics.xor",
                exec: function() {
                    /*
         return typeof Atomics.xor == 'function';
         */
                }
            }
        ]
    },
    {
        name:
            'Proxy "ownKeys" handler, duplicate keys for non-extensible targets (ES 2017 semantics)',
        exec: function() {
            /*
     var P = new Proxy(Object.preventExtensions(Object.defineProperty({a:1}, "b", {value:1})), {
     ownKeys: function() {
     return ['a','a','b','b'];
     }
     });
     return Object.getOwnPropertyNames(P) + '' === "a,a,b,b";
     */
        }
    },
    {
        name: 'RegExp "u" flag, case folding',
        exec: function() {
            /*
     return "ſ".match(/\w/iu) && !"ſ".match(/\W/iu)
     && "\u212a".match(/\w/iu) && !"\u212a".match(/\W/iu)
     && "\u212a".match(/.\b/iu) && "ſ".match(/.\b/iu)
     && !"\u212a".match(/.\B/iu) && !"ſ".match(/.\B/iu);
     */
        }
    },
    {
        name: "arguments.caller removed",
        exec: function() {
            /*
     return (function(){
       'use strict';
       return !Object.getOwnPropertyDescriptor(arguments,'caller');
     })();
     */
        }
    },
    {
        name: "Object.prototype getter/setter methods",
        subtests: [
            {
                name: "__defineGetter__",
                exec: function() {
                    /*
       var obj = {};
       function bar() { return "bar"; }
       Object.prototype.__defineGetter__.call(obj, "foo", bar);
       var prop = Object.getOwnPropertyDescriptor(obj, "foo");
       return prop.get === bar && !prop.writable && prop.configurable
       && prop.enumerable;
       */
                }
            },
            {
                name: "__defineGetter__, symbols",
                exec: function() {
                    /*
         var obj = {};
         var sym = Symbol();
         function bar() { return "bar"; }
         Object.prototype.__defineGetter__.call(obj, sym, bar);
         var prop = Object.getOwnPropertyDescriptor(obj, sym);
         return prop.get === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */
                }
            },
            {
                name: "__defineGetter__, ToObject(this)",
                exec: function() {
                    /*
         var key = '__accessors_test__';
         __defineGetter__.call(1, key, function(){});
         try {
         __defineGetter__.call(null, key, function(){});
         } catch(e){
         return true;
         }
         */
                }
            },
            {
                name: "__defineSetter__",
                exec: function() {
                    /*
         var obj = {};
         function bar() {}
         Object.prototype.__defineSetter__.call(obj, "foo", bar);
         var prop = Object.getOwnPropertyDescriptor(obj, "foo");
         return prop.set === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */
                }
            },
            {
                name: "__defineSetter__, symbols",
                exec: function() {
                    /*
         var obj = {};
         var sym = Symbol();
         function bar(baz) {}
         Object.prototype.__defineSetter__.call(obj, sym, bar);
         var prop = Object.getOwnPropertyDescriptor(obj, sym);
         return prop.set === bar && !prop.writable && prop.configurable
         && prop.enumerable;
         */
                }
            },
            {
                name: "__defineSetter__, ToObject(this)",
                exec: function() {
                    /*
         var key = '__accessors_test__';
         __defineSetter__.call(1, key, function(){});
         try {
         __defineSetter__.call(null, key, function(){});
         } catch(e){
         return true;
         }
         */
                }
            },
            {
                name: "__lookupGetter__",
                exec: function() {
                    /*
         var obj = {
         get foo() { return "bar"},
         qux: 1
         };
         var foo = Object.prototype.__lookupGetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
         */
                }
            },
            {
                name: "__lookupGetter__, prototype chain",
                exec: function() {
                    /*
         var obj = {
         get foo() { return "bar"},
         qux: 1
         };
         var foo = Object.prototype.__lookupGetter__.call(Object.create(obj), "foo");
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
         */
                }
            },
            {
                name: "__lookupGetter__, symbols",
                exec: function() {
                    /*
         var sym = Symbol();
         var sym2 = Symbol();
         var obj = {};
         Object.defineProperty(obj, sym, { get: function() { return "bar"; }});
         Object.defineProperty(obj, sym2, { value: 1 });
         var foo = Object.prototype.__lookupGetter__.call(obj, sym);
         return foo() === "bar"
         && Object.prototype.__lookupGetter__.call(obj, sym2) === undefined
         && Object.prototype.__lookupGetter__.call(obj, Symbol()) === undefined;
         */
                }
            },
            {
                name: "__lookupGetter__, ToObject(this)",
                exec: function() {
                    /*
         __lookupGetter__.call(1, 'key');
         try {
         __lookupGetter__.call(null, 'key');
         } catch(e){
         return true;
         }
         */
                }
            },
            {
                name: "__lookupGetter__, data properties can shadow accessors",
                exec: function() {
                    /*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineGetter__("foo", function () {})
         return b.__lookupGetter__("foo") === undefined
         */
                }
            },
            {
                name: "__lookupSetter__",
                exec: function() {
                    /*
         var obj = {
         set foo(baz) { return "bar"; },
         qux: 1
         };
         var foo = Object.prototype.__lookupSetter__.call(obj, "foo");
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
         */
                }
            },
            {
                name: "__lookupSetter__, prototype chain",
                exec: function() {
                    /*
         var obj = {
         set foo(baz) { return "bar"; },
         qux: 1
         };
         var foo = Object.prototype.__lookupSetter__.call(Object.create(obj), "foo");
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
         && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
         */
                }
            },
            {
                name: "__lookupSetter__, symbols",
                exec: function() {
                    /*
         var sym = Symbol();
         var sym2 = Symbol();
         var obj = {};
         Object.defineProperty(obj, sym, { set: function(baz) { return "bar"; }});
         Object.defineProperty(obj, sym2, { value: 1 });
         var foo = Object.prototype.__lookupSetter__.call(obj, sym);
         return foo() === "bar"
         && Object.prototype.__lookupSetter__.call(obj, sym2) === undefined
         && Object.prototype.__lookupSetter__.call(obj, Symbol()) === undefined;
         */
                }
            },
            {
                name: "__lookupSetter__, ToObject(this)",
                exec: function() {
                    /*
         __lookupSetter__.call(1, 'key');
         try {
         __lookupSetter__.call(null, 'key');
         } catch(e){
         return true;
         }
         */
                }
            },
            {
                name: "__lookupSetter__, data properties can shadow accessors",
                exec: function() {
                    /*
         var a = { };
         var b = Object.create(a);
         b.foo = 1;
         a.__defineSetter__("foo", function () {})
         return b.__lookupSetter__("foo") === undefined
         */
                }
            }
        ]
    },
    {
        name: "Proxy internal calls, getter/setter methods",
        subtests: [
            {
                name: "__defineGetter__",
                exec: function() {
                    /*
       // Object.prototype.__defineGetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
       var def = [];
       var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
       Object.prototype.__defineGetter__.call(p, "foo", Object);
       return def + '' === "foo";
       */
                }
            },
            {
                name: "__defineSetter__",
                exec: function() {
                    /*
         // Object.prototype.__defineSetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
         var def = [];
         var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
         Object.prototype.__defineSetter__.call(p, "foo", Object);
         return def + '' === "foo";
         */
                }
            },
            {
                name: "__lookupGetter__",
                exec: function() {
                    /*
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
         */
                }
            },
            {
                name: "__lookupSetter__",
                exec: function() {
                    /*
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
         */
                }
            }
        ]
    },
    {
        name: "assignments allowed in for-in head in non-strict mode",
        exec: function() {
            /*
     for (var i = 0 in {}) {}
     return i === 0;
     */
        }
    },
    {
        name: "object rest/spread properties",
        subtests: [
            {
                name: "object rest properties",
                exec: function() {
                    /*
          var {a, ...rest} = {a: 1, b: 2, c: 3};
          return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
          */
                }
            },
            {
                name: "object spread properties",
                exec: function() {
                    /*
          var spread = {b: 2, c: 3};
          var O = {a: 1, ...spread};
          return O !== spread && (O.a + O.b + O.c) === 6;
          */
                }
            }
        ]
    },
    {
        name: "Promise.prototype.finally",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "don't change resolution value",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "change rejection value",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "s (dotAll) flag for regular expressions",
        exec: function() {
            /*
    const regex = /foo.bar/s;
    return regex.test('foo\nbar');
  */
        }
    },
    {
        name: "RegExp named capture groups",
        exec: function() {
            /*
      var result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2016-03-11');
      return result.groups.year === '2016'
        && result.groups.month === '03'
        && result.groups.day === '11'
        && result[0] === '2016-03-11'
        && result[1] === '2016'
        && result[2] === '03'
        && result[3] === '11';
      */
        }
    },
    {
        name: "RegExp Lookbehind Assertions",
        exec: function() {
            /*
    return /(?<=a)b/.test('ab') && /(?<!a)b/.test('cb') &&
           !/(?<=a)b/.test('b');
  */
        }
    },
    {
        name: "RegExp Unicode Property Escapes",
        exec: function() {
            /*
    const regexGreekSymbol = /\p{Script=Greek}/u;
    return regexGreekSymbol.test('π');
  */
        }
    },
    {
        name: "Asynchronous Iterators",
        subtests: [
            {
                name: "async generators",
                exec: function() {
                    /*
          async function*generator(){
            yield 42;
          }

          var iterator = generator();
          iterator.next().then(function(step){
            if(iterator[Symbol.asyncIterator]() === iterator && step.done === false && step.value === 42)asyncTestPassed();
          });
        */
                }
            },
            {
                name: "for-await-of loops",
                exec: function() {
                    /*
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
        */
                }
            }
        ]
    },
    {
        name: "template literal revision",
        exec: function() {
            /*
     function tag(strings, a) {
     return strings[0] === void 0 &&
     strings.raw[0] === "\\01\\1\\xg\\xAg\\u0\\u0g\\u00g\\u000g\\u{g\\u{0\\u{110000}" &&
     strings[1] === "\0" &&
     strings.raw[1] === "\\0" &&
     a === 0;
     }
     return tag`\01\1\xg\xAg\u0\u0g\u00g\u000g\u{g\u{0\u{110000}${0}\0`;
     */
        }
    },
    {
        name: "Object.fromEntries",
        exec: function() {
            /*
    var object = Object.fromEntries(new Map([['foo', 42], ['bar', 23]]));
    return object.foo === 42 && object.bar === 23;
  */
        }
    },
    {
        name: "string trimming",
        subtests: [
            {
                name: "String.prototype.trimLeft",
                exec: function() {
                    /*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */
                }
            },
            {
                name: "String.prototype.trimRight",
                exec: function() {
                    /*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */
                }
            },
            {
                name: "String.prototype.trimStart",
                exec: function() {
                    /*
        return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
      */
                }
            },
            {
                name: "String.prototype.trimEnd",
                exec: function() {
                    /*
        return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
      */
                }
            }
        ]
    },
    {
        name: "Array.prototype.{flat, flatMap}",
        subtests: [
            {
                name: "Array.prototype.flat",
                exec: function() {
                    /*
        return [1, [2, 3], [4, [5, 6]]].flat().join('') === '12345,6';
      */
                }
            },
            {
                name: "Array.prototype.flatMap",
                exec: function() {
                    /*
        return [{a: 1, b: 2}, {a: 3, b: 4}].flatMap(function (it) {
          return [it.a, it.b];
        }).join('') === '1234';
      */
                }
            },
            {
                name: "flat and flatMap in Array.prototype[@@unscopables]",
                exec: function() {
                    /*
        return Array.prototype[Symbol.unscopables].flat
          && Array.prototype[Symbol.unscopables].flatMap;
      */
                }
            }
        ]
    },
    {
        name: "optional catch binding",
        subtests: [
            {
                name: "basic",
                exec: function() {
                    /*
          try {
            throw new Error();
          }
          catch {
            return true;
          }
          return false;
        */
                }
            },
            {
                name: "await",
                exec: function() {
                    /*
          (async function (){
            try {
              await Promise.reject();
            }
            catch {
              asyncTestPassed();
            }
          })();
        */
                }
            },
            {
                name: "yield",
                exec: function() {
                    /*
          function *foo() {
            try {
              yield;
              throw new Error();
            }
            catch {
              return true;
            }
          }

          var it = foo();
          it.next();
          return it.next().value;
        */
                }
            }
        ]
    },
    {
        name: "Symbol.prototype.description",
        subtests: [
            {
                name: "basic",
                exec: function() {
                    /*
          return Symbol('foo').description === 'foo';
        */
                }
            },
            {
                name: "empty description",
                exec: function() {
                    /*
          return Symbol('').description === '';
        */
                }
            },
            {
                name: "undefined description",
                exec: function() {
                    /*
          return Symbol.prototype.hasOwnProperty('description')
            && Symbol().description === undefined;
        */
                }
            }
        ]
    },
    {
        name: "Function.prototype.toString revision",
        subtests: [
            {
                name: "functions created with the Function constructor",
                exec: function() {
                    /*
        var fn = Function('a', ' /\x2A a \x2A/ b, c /\x2A b \x2A/ //', '/\x2A c \x2A/ ; /\x2A d \x2A/ //');
        var str = 'function anonymous(a, /\x2A a \x2A/ b, c /\x2A b \x2A/ //\n) {\n/\x2A c \x2A/ ; /\x2A d \x2A/ //\n}';
        return fn + '' === str;
    */
                }
            },
            {
                name: "arrows",
                exec: function() {
                    /*
        var str = 'a => b';
        return eval('(' + str + ')') + '' === str;
    */
                }
            },
            {
                name: "[native code]",
                exec: function() {
                    /*
        const NATIVE_EVAL_RE = /\bfunction\b[\s\S]*\beval\b[\s\S]*\([\s\S]*\)[\s\S]*\{[\s\S]*\[[\s\S]*\bnative\b[\s\S]+\bcode\b[\s\S]*\][\s\S]*\}/;
        return NATIVE_EVAL_RE.test(eval + '');
    */
                }
            },
            {
                name: "class expression with implicit constructor",
                exec: function() {
                    /*
        var str = 'class A {}';
        return eval('(' + str + ')') + '' === str;
    */
                }
            },
            {
                name: "class expression with explicit constructor",
                exec: function() {
                    /*
        var str = 'class /\x2A a \x2A/ A /\x2A b \x2A/ extends /\x2A c \x2A/ function B(){} /\x2A d \x2A/ { /\x2A e \x2A/ constructor /\x2A f \x2A/ ( /\x2A g \x2A/ ) /\x2A h \x2A/ { /\x2A i \x2A/ ; /\x2A j \x2A/ } /\x2A k \x2A/ m /\x2A l \x2A/ ( /\x2A m \x2A/ ) /\x2A n \x2A/ { /\x2A o \x2A/ } /\x2A p \x2A/ }';
        return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */
                }
            },
            {
                name: "unicode escape sequences in identifiers",
                exec: function() {
                    /*
        var str = 'function \\u0061(\\u{62}, \\u0063) { \\u0062 = \\u{00063}; return b; }';
        return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */
                }
            },
            {
                name: "methods and computed property names",
                exec: function() {
                    /*
        var str = '[ /\x2A a \x2A/ "f" /\x2A b \x2A/ ] /\x2A c \x2A/ ( /\x2A d \x2A/ ) /\x2A e \x2A/ { /\x2A f \x2A/ }';
        return eval('({ /\x2A before \x2A/' + str + '/\x2A after \x2A/ }.f)') + '' === str;
    */
                }
            }
        ]
    },
    {
        name: "JSON superset",
        subtests: [
            {
                name: "LINE SEPARATOR can appear in string literals",
                exec: function() {
                    /*
          return eval("'\u2028'") === "\u2028";
        */
                }
            },
            {
                name: "PARAGRAPH SEPARATOR can appear in string literals",
                exec: function() {
                    /*
          return eval("'\u2029'") === "\u2029";
        */
                }
            }
        ]
    },
    {
        name: "Well-formed JSON.stringify",
        exec: function() {
            /*
    return JSON.stringify('\uDF06\uD834') === "\"\\udf06\\ud834\""
      && JSON.stringify('\uDEAD') === "\"\\udead\"";
  */
        }
    },
    {
        name: "String.prototype.matchAll",
        exec: function() {
            /*
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
    */
        }
    },
    {
        name: "Promise.allSettled",
        exec: function() {
            /*
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
    */
        }
    }
];
