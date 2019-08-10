module.exports = [
    {
        name: "Object/array literal extensions",
        subtests: [
            {
                name: "Getter accessors",
                exec: function() {
                    /*
      return ({ get x(){ return 1 } }).x === 1;
    */
                }
            },
            {
                name: "Setter accessors",
                exec: function() {
                    /*
      var value = 0;
      ({ set x(v){ value = v; } }).x = 1;
      return value === 1;
    */
                }
            },
            {
                name: "Trailing commas in object literals",
                exec: function() {
                    /*
      return { a: true, }.a === true;
    */
                }
            },
            {
                name: "Trailing commas in array literals",
                exec: function() {
                    /*
      return [1,].length === 1;
    */
                }
            },
            {
                name: "Reserved words as property names",
                exec: function() {
                    /*
      return ({ if: 1 }).if === 1;
    */
                }
            }
        ]
    },
    {
        name: "Object static methods",
        subtests: [
            {
                name: "Object.create",
                exec: function() {
                    return typeof Object.create == "function";
                }
            },
            {
                name: "Object.defineProperty",
                exec: function() {
                    return typeof Object.defineProperty == "function";
                }
            },
            {
                name: "Object.defineProperties",
                exec: function() {
                    return typeof Object.defineProperties == "function";
                }
            },
            {
                name: "Object.getPrototypeOf",
                exec: function() {
                    return typeof Object.getPrototypeOf == "function";
                }
            },
            {
                name: "Object.keys",
                exec: function() {
                    return typeof Object.keys == "function";
                }
            },
            {
                name: "Object.seal",
                exec: function() {
                    return typeof Object.seal == "function";
                }
            },
            {
                name: "Object.freeze",
                exec: function() {
                    return typeof Object.freeze == "function";
                }
            },
            {
                name: "Object.preventExtensions",
                exec: function() {
                    return typeof Object.preventExtensions == "function";
                }
            },
            {
                name: "Object.isSealed",
                exec: function() {
                    return typeof Object.isSealed == "function";
                }
            },
            {
                name: "Object.isFrozen",
                exec: function() {
                    return typeof Object.isFrozen == "function";
                }
            },
            {
                name: "Object.isExtensible",
                exec: function() {
                    return typeof Object.isExtensible == "function";
                }
            },
            {
                name: "Object.getOwnPropertyDescriptor",
                exec: function() {
                    return typeof Object.getOwnPropertyDescriptor == "function";
                }
            },
            {
                name: "Object.getOwnPropertyNames",
                exec: function() {
                    return typeof Object.getOwnPropertyNames == "function";
                }
            }
        ]
    },
    {
        name: "Array methods",
        subtests: [
            {
                name: "Array.isArray",
                exec: function() {
                    return typeof Array.isArray == "function";
                }
            },
            {
                name: "Array.prototype.indexOf",
                exec: function() {
                    return typeof Array.prototype.indexOf == "function";
                }
            },
            {
                name: "Array.prototype.lastIndexOf",
                exec: function() {
                    return typeof Array.prototype.lastIndexOf == "function";
                }
            },
            {
                name: "Array.prototype.every",
                exec: function() {
                    return typeof Array.prototype.every == "function";
                }
            },
            {
                name: "Array.prototype.some",
                exec: function() {
                    return typeof Array.prototype.some == "function";
                }
            },
            {
                name: "Array.prototype.forEach",
                exec: function() {
                    return typeof Array.prototype.forEach == "function";
                }
            },
            {
                name: "Array.prototype.map",
                exec: function() {
                    return typeof Array.prototype.map == "function";
                }
            },
            {
                name: "Array.prototype.filter",
                exec: function() {
                    return typeof Array.prototype.filter == "function";
                }
            },
            {
                name: "Array.prototype.reduce",
                exec: function() {
                    return typeof Array.prototype.reduce == "function";
                }
            },
            {
                name: "Array.prototype.reduceRight",
                exec: function() {
                    return typeof Array.prototype.reduceRight == "function";
                }
            },
            {
                name:
                    "Array.prototype.sort: compareFn must be function or undefined",
                exec: function() {
                    try {
                        [1, 2].sort(null);
                        return false;
                    } catch (enull) {}
                    try {
                        [1, 2].sort(true);
                        return false;
                    } catch (etrue) {}
                    try {
                        [1, 2].sort({});
                        return false;
                    } catch (eobj) {}
                    try {
                        [1, 2].sort([]);
                        return false;
                    } catch (earr) {}
                    try {
                        [1, 2].sort(/a/g);
                        return false;
                    } catch (eregex) {}
                    return true;
                }
            },
            {
                name:
                    "Array.prototype.sort: compareFn may be explicit undefined",
                exec: function() {
                    try {
                        var arr = [2, 1];
                        return (
                            arr.sort(undefined) === arr &&
                            arr[0] === 1 &&
                            arr[1] === 2
                        );
                    } catch (e) {
                        return false;
                    }
                }
            }
        ]
    },
    {
        name: "String properties and methods",
        subtests: [
            {
                name: "Property access on strings",
                exec: function() {
                    return "foobar"[3] === "b";
                }
            },
            {
                name: "String.prototype.trim",
                exec: function() {
                    return typeof String.prototype.trim == "function";
                }
            }
        ]
    },
    {
        name: "Date methods",
        subtests: [
            {
                name: "Date.prototype.toISOString",
                exec: function() {
                    return typeof Date.prototype.toISOString == "function";
                }
            },
            {
                name: "Date.now",
                exec: function() {
                    return typeof Date.now == "function";
                }
            },
            {
                name: "Date.prototype.toJSON",
                exec: function() {
                    try {
                        return (
                            Date.prototype.toJSON.call(new Date(NaN)) === null
                        );
                    } catch (e) {
                        return false;
                    }
                }
            }
        ]
    },
    {
        name: "Function.prototype.bind",
        exec: function() {
            return typeof Function.prototype.bind == "function";
        }
    },
    {
        name: "JSON",
        exec: function() {
            return typeof JSON == "object";
        }
    },
    {
        name: "Immutable globals",
        subtests: [
            {
                name: "undefined",
                exec: function() {
                    /*
      undefined = 12345;
      var result = typeof undefined == 'undefined';
      undefined = void 0;
      return result;
    */
                }
            },
            {
                name: "NaN",
                exec: function() {
                    /*
      NaN = false;
      var result = typeof NaN == 'number';
      NaN = Math.sqrt(-1);
      return result;
    */
                }
            },
            {
                name: "Infinity",
                exec: function() {
                    /*
      Infinity = false;
      var result = typeof Infinity == 'number';
      Infinity = 1/0;
      return result;
    */
                }
            }
        ]
    },
    {
        name: "Miscellaneous",
        subtests: [
            {
                name: "Function.prototype.apply permits array-likes",
                exec: function() {
                    try {
                        return function(a, b) {
                            return a === 1 && b === 2;
                        }.apply({}, { 0: 1, 1: 2, length: 2 });
                    } catch (e) {
                        return false;
                    }
                }
            },
            {
                name: "parseInt ignores leading zeros",
                exec: function() {
                    return parseInt("010") === 10;
                }
            },
            {
                name: 'Function "prototype" property is non-enumerable',
                exec: function() {
                    /*
      return !Function().propertyIsEnumerable('prototype');
    */
                }
            },
            {
                name: 'Arguments toStringTag is "Arguments"',
                exec: function() {
                    /*
      return (function(){ return Object.prototype.toString.call(arguments) === '[object Arguments]'; }());
    */
                }
            },
            {
                name: "Zero-width chars in identifiers",
                exec: function() {
                    /*
      var _\u200c\u200d = true;
      return _\u200c\u200d;
    */
                }
            },
            {
                name: "Unreserved words",
                exec: function() {
                    /*
      var abstract, boolean, byte, char, double, final, float, goto, int, long,
        native, short, synchronized, transient, volatile;
      return true;
    */
                }
            },
            {
                name:
                    "Enumerable properties can be shadowed by non-enumerables",
                exec: function() {
                    /*
      var result = true;
      Object.prototype.length = 42;
      for (var i in Function) {
          if (i == 'length') {
              result = false;
          }
      }
      delete Object.prototype.length;
      return result;
    */
                }
            },
            {
                name: 'Thrown functions have proper "this" values',
                exec: function() {
                    /*
      try {
        throw function() { return !('a' in this); };
      }
      catch(e) {
        var a = true;
        return e();
      }
    */
                }
            }
        ]
    },
    {
        name: "Strict mode",
        subtests: [
            {
                name: "reserved words",
                exec: function() {
                    /*
      'use strict';
      var words = 'implements,interface,let,package,private,protected,public,static,yield'.split(',');
      for (var i = 0; i < 9; i+=1) {
        try { eval('var ' + words[i]); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      }
      return true;
    */
                }
            },
            {
                name: '"this" is undefined in functions',
                exec: function() {
                    /*
      'use strict';
      return this === undefined && (function(){ return this === undefined; }).call();
    */
                }
            },
            {
                name: '"this" is not coerced to object in primitive methods',
                exec: function() {
                    /*
      'use strict';
      return (function(){ return typeof this === 'string' }).call('')
        && (function(){ return typeof this === 'number' }).call(1)
        && (function(){ return typeof this === 'boolean' }).call(true);
    */
                }
            },
            {
                name: '"this" is not coerced to object in primitive accessors',
                exec: function() {
                    /*
      'use strict';

      function test(Class, instance) {
        Object.defineProperty(Class.prototype, 'test', {
          get: function () { passed = passed && this === instance; },
          set: function () { passed = passed && this === instance; },
          configurable: true
        });

        var passed = true;
        instance.test;
        instance.test = 42;
        return passed;
      }

      return test(String, '')
        && test(Number, 1)
        && test(Boolean, true);
    */
                }
            },
            {
                name: "legacy octal is a SyntaxError",
                exec: function() {
                    /*
      'use strict';
      try { eval('010');     return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('"\\010"'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */
                }
            },
            {
                name:
                    "assignment to unresolvable identifiers is a ReferenceError",
                exec: function() {
                    /*
      'use strict';
      try { eval('__i_dont_exist = 1'); } catch (err) { return err instanceof ReferenceError; }
    */
                }
            },
            {
                name: "assignment to eval or arguments is a SyntaxError",
                exec: function() {
                    /*
      'use strict';
      try { eval('eval = 1');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('arguments = 1'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('eval++');        return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('arguments++');   return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */
                }
            },
            {
                name: "assignment to non-writable properties is a TypeError",
                exec: function() {
                    /*
      'use strict';
      try { Object.defineProperty({},"x",{ writable: false }).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { Object.preventExtensions({}).x = 1;                      return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { ({ get x(){ } }).x = 1;                                  return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { (function f() { f = 123; })();                           return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */
                }
            },
            {
                name: "eval or arguments bindings is a SyntaxError",
                exec: function() {
                    /*
      'use strict';
      try { eval('var eval');                return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('var arguments');           return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('(function(eval){})');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('(function(arguments){})'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('try{}catch(eval){}');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('try{}catch(arguments){}'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */
                }
            },
            {
                name: "arguments.caller removed or is a TypeError",
                exec: function() {
                    /*
      'use strict';
      if ('caller' in arguments) {
        try { arguments.caller; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      }
      return true;
    */
                }
            },
            {
                name: "arguments.callee is a TypeError",
                exec: function() {
                    /*
      'use strict';
      try { arguments.callee; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */
                }
            },
            {
                name:
                    "(function(){}).caller and (function(){}).arguments is a TypeError",
                exec: function() {
                    /*
      'use strict';
      try { (function(){}).caller;    return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { (function(){}).arguments; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */
                }
            },
            {
                name: "arguments is unmapped",
                exec: function() {
                    /*
      'use strict';
      return (function(x){
        x = 2;
        return arguments[0] === 1;
      })(1) && (function(x){
        arguments[0] = 2;
        return x === 1;
      })(1);
    */
                }
            },
            {
                name: "eval() can't create bindings",
                exec: function() {
                    /*
      'use strict';
      try { eval('var __some_unique_variable;'); __some_unique_variable; } catch (err) { return err instanceof ReferenceError; }
    */
                }
            },
            {
                name: "deleting bindings is a SyntaxError",
                exec: function() {
                    /*
      'use strict';
      try { eval('var x; delete x;'); } catch (err) { return err instanceof SyntaxError; }
    */
                }
            },
            {
                name: "deleting non-configurable properties is a TypeError",
                exec: function() {
                    /*
      'use strict';
      try { delete Object.prototype; } catch (err) { return err instanceof TypeError; }
    */
                }
            },
            {
                name: '"with" is a SyntaxError',
                exec: function() {
                    /*
      'use strict';
      try { eval('with({}){}'); } catch (err) { return err instanceof SyntaxError; }
    */
                }
            },
            {
                name: "repeated parameter names is a SyntaxError",
                exec: function() {
                    /*
      'use strict';
      try { eval('function f(x, x) { }'); } catch (err) { return err instanceof SyntaxError; }
    */
                }
            },
            {
                name:
                    "function expressions with matching name and argument are valid",
                exec: function() {
                    /*
      var foo = function bar(bar) {'use strict'};
      return typeof foo === 'function';
    */
                }
            }
        ]
    }
];
