module.exports = [
    {
        name: "globalThis",
        subtests: [
            {
                name: '"globalThis" global property is global object',
                exec: function() {
                    /*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof globalThis === 'object' && globalThis && globalThis === actualGlobal && !globalThis.lacksGlobalThis && globalThis.__system_global_test__ === 42;
    */
                }
            },
            {
                name:
                    '"globalThis" global property has correct property descriptor',
                exec: function() {
                    /*
      var actualGlobal = Function('return this')();
      if (typeof globalThis !== 'object') { return false; }
      if (!('globalThis' in actualGlobal)) { return false; }
      if (Object.prototype.propertyIsEnumerable.call(actualGlobal, 'globalThis')) { return false; }

      var descriptor = Object.getOwnPropertyDescriptor(actualGlobal, 'globalThis');
      return descriptor.value === actualGlobal && !descriptor.enumerable && descriptor.configurable && descriptor.writable;
    */
                }
            }
        ]
    },
    {
        name: "WeakReferences",
        subtests: [
            {
                name: "WeakRef minimal support",
                exec: function() {
                    /*
        var O = {};
        var weakref = new WeakRef(O);
        return weakref.deref() === O;
      */
                }
            },
            {
                name: "Finalizers minimal support",
                exec: function() {
                    /*
        var fg = new FinalizationGroup(function() {});
        return Object.getPrototypeOf(fg) === FinalizationGroup.prototype;
      */
                }
            }
        ]
    },
    {
        name: "instance class fields",
        subtests: [
            {
                name: "public instance class fields",
                exec: function() {
                    /*
        class C {
          x = 'x';
        }
        return new C().x === 'x';
      */
                }
            },
            {
                name: "private instance class fields basic support",
                exec: function() {
                    /*
        class C {
          #x;
          constructor(x){
            this.#x = x;
          }
          x(){
            return this.#x;
          }
        }
        return new C(42).x() === 42;
      */
                }
            },
            {
                name: "private instance class fields initializers",
                exec: function() {
                    /*
        class C {
          #x = 42;
          x(){
            return this.#x;
          }
        }
        return new C().x() === 42;
      */
                }
            },
            {
                name: "computed instance class fields",
                exec: function() {
                    /*
        class C {
          ['x'] = 42;
        }
        return new C().x === 42;
      */
                }
            }
        ]
    },
    {
        name: "static class fields",
        subtests: [
            {
                name: "public static class fields",
                exec: function() {
                    /*
        class C {
          static x = 'x';
        }
        return C.x === 'x';
      */
                }
            },
            {
                name: "private static class fields",
                exec: function() {
                    /*
        class C {
          static #x = 42;
          x(){
            return C.#x;
          }
        }
        return new C().x() === 42;
      */
                }
            },
            {
                name: "computed static class fields",
                exec: function() {
                    /*
        class C {
          static ['x'] = 42;
        }
        return C.x === 42;
      */
                }
            }
        ]
    },
    {
        name: "optional chaining operator (?.)",
        subtests: [
            {
                name: "optional property access",
                exec: function() {
                    /*
        var foo = { baz: 42 };
        var bar = null;
        return foo?.baz === 42 && bar?.baz === undefined;
      */
                }
            },
            {
                name: "optional bracket access",
                exec: function() {
                    /*
        var foo = { baz: 42 };
        var bar = null;
        return foo?.['baz'] === 42 && bar?.['baz'] === undefined;
      */
                }
            },
            {
                name: "optional method call",
                exec: function() {
                    /*
        var foo = { baz: function () { return 42; } };
        var bar = null;
        return foo?.baz() === 42 && bar?.baz() === undefined;
      */
                }
            }
        ]
    },
    {
        name: "nullish coalescing operator (??)",
        exec: function() {
            /*
    return null ?? 42 === 42 &&
      undefined ?? 42 === 42 &&
      false ?? 42 === false &&
      '' ?? 42 === '' &&
      0 ?? 42 === 0;
  */
        }
    },
    {
        name: "numeric separators",
        exec: function() {
            /*
    return 1_000_000.000_001 === 1000000.000001 &&
      0b1010_0001_1000_0101 === 0b1010000110000101;
  */
        }
    },
    {
        name: "BigInt",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        return (1n + 2n) === 3n;
      */
                }
            },
            {
                name: "constructor",
                exec: function() {
                    /*
        return BigInt("3") === 3n;
      */
                }
            },
            {
                name: "BigInt.asIntN",
                exec: function() {
                    /*
        return typeof BigInt.asIntN === 'function';
      */
                }
            },
            {
                name: "BigInt.asUintN",
                exec: function() {
                    /*
        return typeof BigInt.asUintN === 'function';
      */
                }
            },
            {
                name: "BigInt64Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new BigInt64Array(buffer);
        view[0] = 0x8000000000000000n;
        return view[0] === -0x8000000000000000n;
      */
                }
            },
            {
                name: "BigUint64Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new BigUint64Array(buffer);
        view[0] = 0x10000000000000000n;
        return view[0] === 0n;
      */
                }
            },
            {
                name: "DataView.prototype.getBigInt64",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigInt64(0, 1n);
        return view.getBigInt64(0) === 1n;
      */
                }
            },
            {
                name: "DataView.prototype.getBigUint64",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigUint64(0, 1n);
        return view.getBigUint64(0) === 1n;
      */
                }
            }
        ]
    },
    {
        name: "Legacy RegExp features in JavaScript",
        subtests: [
            {
                name: 'RegExp "lastMatch"',
                exec: function() {
                    var re = /\w/;
                    re.exec("x");
                    return RegExp.lastMatch === "x";
                }
            },
            {
                name: "RegExp.$1-$9",
                exec: function() {
                    for (var i = 1; i < 10; i++) {
                        if (!("$" + i in RegExp)) return false;
                    }
                    return true;
                }
            }
        ]
    },
    {
        name: "Generator function.sent Meta Property",
        exec: function() {
            /*
    var result;
    function* generator() {
      result = function.sent;
    }
    var iter = generator();
    iter.next('tromple');
    return result === 'tromple';
  */
        }
    },
    {
        name: "Class and Property Decorators",
        subtests: [
            {
                name: "class decorators",
                exec: function() {
                    /*
        class A {
          @nonconf
          get B() {}
        }
        function nonconf(target, name, descriptor) {
          descriptor.configurable = false;
          return descriptor;
        }
        return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
      */
                }
            }
        ]
    },
    {
        name: "Realms",
        exec: function() {
            /*
    return typeof Realm === "function"
      && ["eval", "global", "intrinsics", "stdlib", "directEval", "indirectEval", "initGlobal", "nonEval"].every(function(key){
        return key in Realm.prototype;
      });
  */
        }
    },
    {
        name: "throw expressions",
        subtests: [
            {
                name: "logical",
                exec: function() {
                    /*
        var a, b;
        try {
          a = 19 || throw 77;
          b = 88 && throw 23;
        } catch (e) {
          return a + e === 42;
        }
      */
                }
            },
            {
                name: "parameter initializers",
                exec: function() {
                    /*
        function fn (arg = throw 42) {
          return arg;
        }

        if (fn(21) !== 21) return false;

        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */
                }
            },
            {
                name: "arrow function bodies",
                exec: function() {
                    /*
        var fn = () => throw 42;
        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */
                }
            },
            {
                name: "conditionals",
                exec: function() {
                    /*
        true ? 42 : throw 21;
        try {
          false ? 42 : throw 21;
        } catch (e) {
          return e === 21;
        }
      */
                }
            }
        ]
    },
    {
        name: "String.prototype.replaceAll",
        exec: function() {
            /*
    return 'q=query+string+parameters'.replaceAll('+', ' ') === 'q=query string parameters';
  */
        }
    },
    {
        name: "Set methods",
        subtests: [
            {
                name: "Set.prototype.intersection",
                exec: function() {
                    /*
        var set = new Set([1, 2, 3]).intersection(new Set([2, 3, 4]));
        return set.size === 2
          && set.has(2)
          && set.has(3);
      */
                }
            },
            {
                name: "Set.prototype.union",
                exec: function() {
                    /*
        var set = new Set([1, 2]).union(new Set([2, 3]));
        return set.size === 3
          && set.has(1)
          && set.has(2)
          && set.has(3);
      */
                }
            },
            {
                name: "Set.prototype.difference",
                exec: function() {
                    /*
        var set = new Set([1, 2, 3]).difference(new Set([3, 4]));
        return set.size === 2
          && set.has(1)
          && set.has(2);
      */
                }
            },
            {
                name: "Set.prototype.symmetricDifference",
                exec: function() {
                    /*
        var set = new Set([1, 2]).symmetricDifference(new Set([2, 3]));
        return set.size === 2
          && set.has(1)
          && set.has(3);
      */
                }
            },
            {
                name: "Set.prototype.isDisjointFrom",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).isDisjointFrom([4, 5, 6]);
      */
                }
            },
            {
                name: "Set.prototype.isSubsetOf",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).isSubsetOf([5, 4, 3, 2, 1]);
      */
                }
            },
            {
                name: "Set.prototype.isSupersetOf",
                exec: function() {
                    /*
        return new Set([5, 4, 3, 2, 1]).isSupersetOf([1, 2, 3]);
      */
                }
            }
        ]
    },
    {
        name: "ArrayBuffer.prototype.transfer",
        subtests: [
            {
                name: "ArrayBuffer.prototype.transfer()",
                exec: function() {
                    /*
        const buffer1 = new Uint8Array([1, 2]).buffer;
        const buffer2 = buffer1.transfer();
        return buffer1.byteLength === 0
          && buffer2.byteLength === 2;
      */
                }
            },
            {
                name: "ArrayBuffer.prototype.realloc()",
                exec: function() {
                    /*
        const buffer1 = new ArrayBuffer(1024);
        const buffer2 = buffer1.realloc(256);
        return buffer1.byteLength === 0
          && buffer2.byteLength === 256;
      */
                }
            }
        ]
    },
    {
        name: "Promise.any",
        exec: function() {
            /*
    Promise.any([
      Promise.resolve(1),
      Promise.reject(2),
      Promise.resolve(3)
    ]).then(it => {
      if (it === 1) asyncTestPassed();
    });
  */
        }
    },
    {
        name: "do expressions",
        exec: function() {
            /*
    return do {
      let x = 23;
      x + 19;
    } === 42;
  */
        }
    },
    {
        name: "Observable",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        return typeof Observable !== 'undefined';
      */
                }
            },
            {
                name: "Symbol.observable well known symbol",
                exec: function() {
                    /*
        return typeof Symbol.observable === 'symbol';
      */
                }
            },
            {
                name: "Observable.prototype.subscribe",
                exec: function() {
                    /*
        return 'subscribe' in Observable.prototype;
      */
                }
            },
            {
                name: "Observable constructor behavior",
                exec: function() {
                    /*
        if(!(new Observable(function(){}) instanceof Observable))return false;

        var nonCallableCheckPassed,
            primitiveCheckPassed,
            newCheckPassed;

        try { new Observable({ }) } catch(e) { nonCallableCheckPassed = true }
        try { new Observable(false) } catch(e) { primitiveCheckPassed = true }
        try { Observable(function() { }) } catch(e) { newCheckPassed = true }

        return nonCallableCheckPassed && primitiveCheckPassed && newCheckPassed;
      */
                }
            },
            {
                name: "Observable.prototype[Symbol.observable]",
                exec: function() {
                    /*
        var o = new Observable(function() { });
        return Symbol.observable in Observable.prototype && o[Symbol.observable]() === o;
      */
                }
            },
            {
                name: "Observable.of",
                exec: function() {
                    /*
        return Observable.of(1, 2, 3) instanceof Observable;
      */
                }
            },
            {
                name: "Observable.from",
                exec: function() {
                    /*
        return (Observable.from([1,2,3,4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
      */
                }
            }
        ]
    },
    {
        name: "Frozen Realms API",
        exec: function() {
            /*
    return typeof Reflect.Realm.immutableRoot === 'function'
      && typeof Reflect.Realm.prototype.spawn === 'function';
  */
        }
    },
    {
        name: "Math.signbit",
        exec: function() {
            /*
    return Math.signbit(-0) === false
      && Math.signbit(0) === true
      && Math.signbit(-42) === false
      && Math.signbit(42) === true;
  */
        }
    },
    {
        name: "Math extensions proposal",
        subtests: [
            {
                name: "Math.clamp",
                exec: function() {
                    /*
      return Math.clamp(2, 4, 6) === 4
        && Math.clamp(4, 2, 6) === 4
        && Math.clamp(6, 2, 4) === 4;
    */
                }
            },
            {
                name: "Math.DEG_PER_RAD",
                exec: function() {
                    /*
      return Math.DEG_PER_RAD === Math.PI / 180;
    */
                }
            },
            {
                name: "Math.degrees",
                exec: function() {
                    /*
      return Math.degrees(Math.PI / 2) === 90
        && Math.degrees(Math.PI) === 180;
    */
                }
            },
            {
                name: "Math.fscale",
                exec: function() {
                    /*
      return Math.fscale(3, 1, 2, 1, Math.PI) === Math.fround((3 - 1) * (Math.PI - 1) / (2 - 1) + 1);
    */
                }
            },
            {
                name: "Math.RAD_PER_DEG",
                exec: function() {
                    /*
      return Math.RAD_PER_DEG === 180 / Math.PI;
    */
                }
            },
            {
                name: "Math.radians",
                exec: function() {
                    /*
      return Math.radians(90) === Math.PI / 2
        && Math.radians(180) === Math.PI;
    */
                }
            },
            {
                name: "Math.scale",
                exec: function() {
                    /*
      return Math.scale(0, 3, 5, 8, 10) === 5;
    */
                }
            }
        ]
    },
    {
        name: "Promise.try",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        return typeof Promise.try === 'function';
      */
                }
            },
            {
                name: "returns instance of Promise",
                exec: function() {
                    /*
        return Promise.try(function () {}) instanceof Promise;
      */
                }
            },
            {
                name: "call function synchronously",
                exec: function() {
                    /*
        var score = 0;
        Promise.try(function () { score++ });
        return score === 1;
      */
                }
            },
            {
                name: "function returns value",
                exec: function() {
                    /*
        var score = 0;
        Promise.try(function() {
          score++;
          return 'foo';
        }).then(function(val) {
          score += (val === 'foo');
          if (score === 2) asyncTestPassed();
        });
      */
                }
            },
            {
                name: "function throws exception",
                exec: function() {
                    /*
        var score = 0;
        Promise.try(function() {
          score++;
          throw 'bar';
        }).catch(function(err) {
          score += (err === 'bar');
          if (score === 2) asyncTestPassed();
        });
      */
                }
            },
            {
                name: "function returns fulfilled Promise",
                exec: function() {
                    /*
        var score = 0;
        Promise.try(function() {
          score++;
          return Promise.resolve('foo');
        }).then(function(val) {
          score += (val === 'foo');
          if (score === 2) asyncTestPassed();
        });
      */
                }
            },
            {
                name: "function returns rejected Promise",
                exec: function() {
                    /*
        var score = 0;
        Promise.try(function() {
          score++;
          return Promise.reject('bar');
        }).catch(function(err) {
          score += (err === 'bar');
          if (score === 2) asyncTestPassed();
        });
      */
                }
            }
        ]
    },
    {
        name: "`.of` and `.from` on collection constructors",
        subtests: [
            {
                name: "Map.of",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = Map.of([A, 1], [B, 2]);
        return C.get(A) + C.get(B) === 3;
      */
                }
            },
            {
                name: "Map.from",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = Map.from([[A, 1], [B, 2]], function (it) {
          return [it[0], it[1] + 1];
        });
        return C.get(A) + C.get(B) === 5;
      */
                }
            },
            {
                name: "Set.of",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = Set.of(A, B);
        return C.has(A) + C.has(B);
      */
                }
            },
            {
                name: "Set.from",
                exec: function() {
                    /*
        var C = Set.from([1, 2], function (it) {
          return it + 2;
        });
        return C.has(3) + C.has(4);
      */
                }
            },
            {
                name: "WeakMap.of",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = WeakMap.of([A, 1], [B, 2]);
        return C.get(A) + C.get(B) === 3;
      */
                }
            },
            {
                name: "WeakMap.from",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = WeakMap.from([[A, 1], [B, 2]], function (it) {
          return [it[0], it[1] + 1];
        });
        return C.get(A) + C.get(B) === 5;
      */
                }
            },
            {
                name: "WeakSet.of",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = WeakSet.of(A, B);
        return C.has(A) + C.has(B);
      */
                }
            },
            {
                name: "WeakSet.from",
                exec: function() {
                    /*
        var A = {};
        var B = {};
        var C = WeakSet.from([A, B]);
        return C.has(A) + C.has(B);
      */
                }
            }
        ]
    },
    {
        name: "the pipeline operator",
        exec: function() {
            /*
    function doubleSay (str) {
      return str + ', ' + str;
    }
    function capitalize (str) {
      return str[0].toUpperCase() + str.slice(1);
    }

    var result = 'hello'
      |> doubleSay
      |> capitalize
      |> _ => _ + '!';

    return result === 'Hello, hello!';
  */
        }
    },
    {
        name: "extensible numeric literals",
        exec: function() {
            /*
    function i (str, num) {
      return typeof str + str + typeof num + num;
    }

    return 123i === 'string123number123';
  */
        }
    },
    {
        name: "partial application syntax",
        subtests: [
            {
                name: "partial application from left",
                exec: function() {
                    /*
        function f(a, b) {
          return a + b;
        };
        var p = f('a', ?);
        return p('b') === 'ab';
      */
                }
            },
            {
                name: "partial application from right",
                exec: function() {
                    /*
        function f(a, b) {
          return a + b;
        };
        var p = f(?, 'b');
        return p('a') === 'ab';
      */
                }
            },
            {
                name: "partial application for any arg",
                exec: function() {
                    /*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f(?, 'b', ?);
        return p('a', 'c') === 'abc';
      */
                }
            },
            {
                name: "partial application from left with rest",
                exec: function() {
                    /*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f('a', ...);
        return p('b', 'c') === 'abc';
      */
                }
            },
            {
                name: "partial application from right with rest",
                exec: function() {
                    /*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f(..., 'c');
        return p('a', 'b') === 'abc';
      */
                }
            },
            {
                name: "partial application for any arg with rest",
                exec: function() {
                    /*
        function f(a, b, c, d, e) {
          return a + b + c + d + e;
        };
        var p = f(..., 'c', ...);
        return p('a', 'b') === 'abcab';
      */
                }
            },
            {
                name: "mixed partial application",
                exec: function() {
                    /*
        function f(a, b, c, d) {
          return a + b + c;
        };
        var p = f(?, 'b', ...);
        return p('a', 'c', 'd') === 'abcd';
      */
                }
            },
            {
                name: "runtime evaluation",
                exec: function() {
                    /*
        var f = function() {
          throw new Error();
        };
        var p = f(?, 'b');
        f = function(a, b) {
          return a + b;
        };
        return p('a') === 'ab';
      */
                }
            },
            {
                name: "runtime evaluation of property access",
                exec: function() {
                    /*
        var o = {};
        var p = o.f(?, 'b');
        o = { x: 'c', f: function(a, b) {
          return a + b + this.x;
        } };
        return p('a') === 'abc';
      */
                }
            },
            {
                name: "lexical `this`",
                exec: function() {
                    /*
        function f(a, b) {
          return a + b + (this === o);
        }
        var o = { f: f(?, 'b') };
        return o.f('a') === 'abfalse';
      */
                }
            },
            {
                name: "constructor partial application",
                exec: function() {
                    /*
        function F(a, b) {
          this.x = a + b;
        }
        var p = new F(?, 'b');
        return p('a').x === 'ab';
      */
                }
            },
            {
                name: "constructor partial application with rest",
                exec: function() {
                    /*
        function F(a, b, c) {
          this.x = a + b + c;
        }
        var p = new F('a', ...);
        return p('b', 'c').x === 'abc';
      */
                }
            }
        ]
    },
    {
        name: "Object.freeze and Object.seal syntax",
        subtests: [
            {
                name: "Object.freeze syntax",
                exec: function() {
                    /*
        return Object.isFrozen({# foo: 42 #});
      */
                }
            },
            {
                name: "Object.freeze syntax with array literal",
                exec: function() {
                    /*
        return Object.isFrozen([# 42 #]);
      */
                }
            },
            {
                name: "Object.seal syntax",
                exec: function() {
                    /*
        return Object.isSealed({| foo: 42 |});
      */
                }
            },
            {
                name: "Object.seal syntax with array literal",
                exec: function() {
                    /*
        return Object.isSealed([| 42 |]);
      */
                }
            },
            {
                name: "Sealing, function destructuring",
                exec: function() {
                    /*
        function foo({| bar, baz |}) {
          return bar + baz;
        }
        if (foo({ bar: 1, baz: 2 }) !== 3) return;
        try {
          foo({ bar: 1, fuz: 2 });
        } catch (e) {
          return true;
        }
      */
                }
            },
            {
                name: "Freezing, function destructuring",
                exec: function() {
                    /*
        function foo({# bar, baz #}) {
          if (baz === 42) bar = 27;
          return bar + baz;
        }
        if (foo({ bar: 1, baz: 2 }) !== 3) return;
        try {
          foo({ bar: 1, baz: 42 });
        } catch (e) {
          return true;
        }
      */
                }
            },
            {
                name: "Sealing, function arguments",
                exec: function() {
                    /*
        function foo(| bar, baz |) {
          return bar + baz;
        }
        if (foo(1, 2) !== 3) return;
        try {
          foo(1, 2, 3);
        } catch (e) {
          return true;
        }
      */
                }
            },
            {
                name: "Freezing, function arguments",
                exec: function() {
                    /*
        function foo(# bar, baz #) {
          if (baz === 42) bar = 27;
          return bar + baz;
        }
        if (foo(1, 2) !== 3) return;
        try {
          foo(1, 42);
        } catch (e) {
          return true;
        }
      */
                }
            }
        ]
    },
    {
        name: "String.prototype.codePoints",
        exec: function() {
            /*
    var results = [];
    for (let code of 'a𠮷b'.codePoints()) results.push(code);
    return results.length === 3
      && results[0].codePoint === 97 && results[0].position === 0
      && results[1].codePoint === 134071 && results[1].position === 1
      && results[2].codePoint === 98 && results[2].position === 3;
  */
        }
    },
    {
        name: "Getting last item from array",
        subtests: [
            {
                name: "Array.prototype.lastItem",
                exec: function() {
                    /*
        return [1, 2, 3].lastItem === 3;
      */
                }
            },
            {
                name: "Array.prototype.lastIndex",
                exec: function() {
                    /*
        return [1, 2, 3].lastIndex === 2;
      */
                }
            }
        ]
    },
    {
        name: "Collections methods",
        subtests: [
            {
                name: "Map.groupBy",
                exec: function() {
                    /*
        var map = Map.groupBy(new Set([1, 2, 3, 4]), it => it % 2)
        return map.size === 2
          && map.get(0)[0] === 2
          && map.get(0)[1] === 4
          && map.get(1)[0] === 1
          && map.get(1)[1] === 3;
      */
                }
            },
            {
                name: "Map.keyBy",
                exec: function() {
                    /*
        var map = Map.keyBy(new Set([{ id: 101 }, { id: 102 }]), it => it.id)
        return map.size === 2
          && map.get(101).id === 101
          && map.get(102).id === 102;
      */
                }
            },
            {
                name: "Map.prototype.deleteAll",
                exec: function() {
                    /*
        var map = new Map([[1, 2], [3, 4], [5, 6], [7, 8]]);
        map.deleteAll(1, 5)
        return map.size === 2
          && map.get(3) === 4
          && map.get(7) === 8;
      */
                }
            },
            {
                name: "Map.prototype.every",
                exec: function() {
                    /*
        return new Map([[1, 4], [2, 5], [3, 6]]).every(it => typeof it == 'number');
      */
                }
            },
            {
                name: "Map.prototype.filter",
                exec: function() {
                    /*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).filter(it => !(it % 2));
        return map.size === 2
          && map.get(1) === 4
          && map.get(3) === 6;
      */
                }
            },
            {
                name: "Map.prototype.find",
                exec: function() {
                    /*
        return new Map([[1, 2], [2, 3], [3, 4]]).find(it => it % 2) === 3;
      */
                }
            },
            {
                name: "Map.prototype.findKey",
                exec: function() {
                    /*
        return new Map([[1, 2], [2, 3], [3, 4]]).findKey(it => it % 2) === 2;
      */
                }
            },
            {
                name: "Map.prototype.includes",
                exec: function() {
                    /*
        return new Map([[1, 2], [2, NaN]]).includes(2)
          && new Map([[1, 2], [2, NaN]]).includes(NaN);
      */
                }
            },
            {
                name: "Map.prototype.keyOf",
                exec: function() {
                    /*
        return new Map([[1, 2], [2, NaN]]).keyOf(2) === 1
          && new Map([[1, 2], [2, NaN]]).keyOf(NaN) === undefined;
      */
                }
            },
            {
                name: "Map.prototype.mapKeys",
                exec: function() {
                    /*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).mapKeys((value, key) => key * key);
        return map.size === 3
          && map.get(1) === 4
          && map.get(4) === 5
          && map.get(9) === 6;
      */
                }
            },
            {
                name: "Map.prototype.mapValues",
                exec: function() {
                    /*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).mapValues((value, key) => value * value);
        return map.size === 3
          && map.get(1) === 16
          && map.get(2) === 25
          && map.get(3) === 36;
      */
                }
            },
            {
                name: "Map.prototype.merge",
                exec: function() {
                    /*
        var map = new Map([[1, 4], [2, 5]]).merge(new Map([[2, 7], [3, 6]]));
        return map.size === 3
          && map.get(1) === 4
          && map.get(2) === 7
          && map.get(3) === 6;
      */
                }
            },
            {
                name: "Map.prototype.reduce",
                exec: function() {
                    /*
        return new Map([['a', 1], ['b', 2], ['c', 3], ]).reduce(((a, b) => a + b), 1) === 7;
      */
                }
            },
            {
                name: "Map.prototype.some",
                exec: function() {
                    /*
        return new Map([[1, 4], [2, 5], [3, 6]]).some(it => it % 2);
      */
                }
            },
            {
                name: "Set.prototype.addAll",
                exec: function() {
                    /*
        var set = new Set([1, 2]).addAll(2, 3);
        return set.size === 3
          && set.has(1)
          && set.has(2)
          && set.has(3);
      */
                }
            },
            {
                name: "Set.prototype.deleteAll",
                exec: function() {
                    /*
        var set = new Set([1, 2, 3, 4]);
        return set.deleteAll(2, 3) === true
          && set.size === 2
          && set.has(1)
          && set.has(4);
      */
                }
            },
            {
                name: "Set.prototype.every",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).every(it => typeof it === 'number');
      */
                }
            },
            {
                name: "Set.prototype.filter",
                exec: function() {
                    /*
        var set = new Set([1, 2, 3]).filter(it => it % 2);
        return set.size === 2
          && set.has(1)
          && set.has(3);
      */
                }
            },
            {
                name: "Set.prototype.find",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).find(it => !(it % 2)) === 2;
      */
                }
            },
            {
                name: "Set.prototype.join",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).join('|') === '1|2|3';
      */
                }
            },
            {
                name: "Set.prototype.map",
                exec: function() {
                    /*
        var set = new Set([1, 2, 3]).map(it => it * it);
        return set.size === 3
          && set.has(1)
          && set.has(4)
          && set.has(9);
      */
                }
            },
            {
                name: "Set.prototype.reduce",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).reduce((memo, it) => memo + it) === 6;
      */
                }
            },
            {
                name: "Set.prototype.some",
                exec: function() {
                    /*
        return new Set([1, 2, 3]).some(it => it % 2);
      */
                }
            },
            {
                name: "WeakMap.prototype.deleteAll",
                exec: function() {
                    /*
        var a = {};
        var b = {};
        var c = {};
        var d = {};
        var map = new WeakMap([[a, 1], [b, 2], [c, 3], [d, 4]]);
        map.deleteAll(a, c)
        return !map.has(a)
          && map.get(b) === 2
          && !map.has(c)
          && map.get(d) === 4;
      */
                }
            },
            {
                name: "WeakSet.prototype.addAll",
                exec: function() {
                    /*
        var a = {};
        var b = {};
        var c = {};
        var d = {};
        var set = new WeakSet([a, b]);
        set.addAll(c, d)
        return set.has(a)
          && set.has(b)
          && set.has(c)
          && set.has(d);
      */
                }
            },
            {
                name: "WeakSet.prototype.deleteAll",
                exec: function() {
                    /*
        var a = {};
        var b = {};
        var c = {};
        var d = {};
        var set = new WeakSet([a, b, c, d]);
        set.deleteAll(a, c)
        return !set.has(a)
          && set.has(b)
          && !set.has(c)
          && set.has(d);
      */
                }
            }
        ]
    },
    {
        name: "Math.seededPRNG",
        exec: function() {
            /*
    var gen1 = Math.seededPRNG({ seed: 42 });
    var gen2 = Math.seededPRNG({ seed: 42 });
    if (!gen1.next || !gen1[Symbol.iterator]) return false;
    var first = gen1.next().value;
    if (first < 0 || first > 1) return false;
    if (first !== gen2.next().value) return false;
    var second = gen1.next().value;
    if (first === second) return false;
    return second === gen2.next().value;
  */
        }
    },
    {
        name: "{ BigInt, Number }.fromString",
        subtests: [
            {
                name: "Number.fromString",
                exec: function() {
                    /*
        return Number.fromString('42') === 42;
      */
                }
            },
            {
                name: "BigInt.fromString",
                exec: function() {
                    /*
        return BigInt.fromString('42') === 42n;
      */
                }
            }
        ]
    },
    {
        name: "bind (::) operator",
        subtests: [
            {
                name: "binary form",
                exec: function() {
                    /*
        function foo() { this.garply += "foo"; return this; }
        var obj = { garply: "bar" };
        return typeof obj::foo === "function" && obj::foo().garply === "barfoo";
      */
                }
            },
            {
                name: "unary form",
                exec: function() {
                    /*
        var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
        return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
      */
                }
            }
        ]
    },
    {
        name: "String.prototype.at",
        exec: function() {
            /*
    return 'a𠮷b'.at(1) === '𠮷';
  */
        }
    },
    {
        name: "additional meta properties",
        subtests: [
            {
                name: "function.callee",
                exec: function() {
                    /*
        var f = _ => function.callee === f;
        return f();
      */
                }
            },
            {
                name: "function.count",
                exec: function() {
                    /*
        return (_ => function.count)(1, 2, 3) === 3;
      */
                }
            },
            {
                name: "function.arguments",
                exec: function() {
                    /*
        var arr =  (_ => function.arguments)(1, 2, 3);
        return Array.isArray(arr)
          && arr.length === 3
          && arr[0] === 1
          && arr[1] === 2
          && arr[2] === 3;
      */
                }
            }
        ]
    },
    {
        name: "method parameter decorators",
        exec: function() {
            /*
    var target, key, index;
    function decorator(_target, _key, _index){
      target = _target;
      key    = _key;
      index  = _index;
    }
    class C {
      method(@decorator foo){ }
    }
    return target === C.prototype
      && key === 'method'
      && index === 0;
  */
        }
    },
    {
        name: "function expression decorators",
        exec: function() {
            /*
    function inverse(f){
      return function(){
        return !f.apply(this, arguments);
      };
    }
    return (@inverse function(it){
      return it % 2;
    })(2);
  */
        }
    },
    {
        name: "Reflect.isCallable / Reflect.isConstructor",
        subtests: [
            {
                name: "Reflect.isCallable",
                exec: function() {
                    /*
        return Reflect.isCallable(function(){})
          && Reflect.isCallable(_ => _)
          && !Reflect.isCallable(class {});
      */
                }
            },
            {
                name: "Reflect.isConstructor",
                exec: function() {
                    /*
        return Reflect.isConstructor(function(){})
          && !Reflect.isConstructor(_ => _)
          && Reflect.isConstructor(class {});
      */
                }
            }
        ]
    },
    {
        name: "zones",
        subtests: [
            {
                name: "Zone",
                exec: function() {
                    /*
        return typeof Zone == 'function';
      */
                }
            },
            {
                name: "Zone.current",
                exec: function() {
                    /*
        return 'current' in Zone;
      */
                }
            },
            {
                name: "Zone.prototype.name",
                exec: function() {
                    /*
        return 'name' in Zone.prototype;
      */
                }
            },
            {
                name: "Zone.prototype.parent",
                exec: function() {
                    /*
        return 'parent' in Zone.prototype;
      */
                }
            },
            {
                name: "Zone.prototype.fork",
                exec: function() {
                    /*
        return typeof Zone.prototype.fork == 'function';
      */
                }
            },
            {
                name: "Zone.prototype.run",
                exec: function() {
                    /*
        return typeof Zone.prototype.run == 'function';
      */
                }
            },
            {
                name: "Zone.prototype.wrap",
                exec: function() {
                    /*
        return typeof Zone.prototype.wrap == 'function';
      */
                }
            }
        ]
    },
    {
        name: "syntactic tail calls",
        subtests: [
            {
                name: "direct recursion",
                exec: function() {
                    /*
        "use strict";
        return (function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return continue f(n - 1);
        }(1e6)) === "foo";
      */
                }
            },
            {
                name: "mutual recursion",
                exec: function() {
                    /*
        "use strict";
        function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return continue g(n - 1);
        }
        function g(n){
          if (n <= 0) {
            return  "bar";
          }
          return continue f(n - 1);
        }
        return f(1e6) === "foo" && f(1e6+1) === "bar";
      */
                }
            }
        ]
    },
    {
        name: "object shorthand improvements",
        subtests: [
            {
                name: "object initializers",
                exec: function() {
                    /*
        var foo = { bar: 42, baz: 33 };
        var fuz = { foo.bar, foo['baz'] };
        return fuz.bar === 42 && fuz.baz === 33;
      */
                }
            },
            {
                name: "destructuring assignments",
                exec: function() {
                    /*
        var foo = { bar: 42, baz: 33 };
        var fuz = {};
        ({ fuz.bar, fuz['baz'] } = foo);
        return fuz.bar === 42 && fuz.baz === 33;
      */
                }
            }
        ]
    },
    {
        name: "Metadata reflection API",
        subtests: [
            {
                name: "Reflect.defineMetadata",
                exec: function() {
                    /*
        return typeof Reflect.defineMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.hasMetadata",
                exec: function() {
                    /*
        return typeof Reflect.hasMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.hasOwnMetadata",
                exec: function() {
                    /*
        return typeof Reflect.hasOwnMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.getMetadata",
                exec: function() {
                    /*
        return typeof Reflect.getMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.getOwnMetadata",
                exec: function() {
                    /*
        return typeof Reflect.getOwnMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.getMetadataKeys",
                exec: function() {
                    /*
        return typeof Reflect.getMetadataKeys == 'function';
      */
                }
            },
            {
                name: "Reflect.getOwnMetadataKeys",
                exec: function() {
                    /*
        return typeof Reflect.getOwnMetadataKeys == 'function';
      */
                }
            },
            {
                name: "Reflect.deleteMetadata",
                exec: function() {
                    /*
        return typeof Reflect.deleteMetadata == 'function';
      */
                }
            },
            {
                name: "Reflect.metadata",
                exec: function() {
                    /*
        return typeof Reflect.metadata == 'function';
      */
                }
            }
        ]
    }
];
