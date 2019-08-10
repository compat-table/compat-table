module.exports = [
    {
        name: "SIMD (Single Instruction, Multiple Data)",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        simdFloatTypes=['Float32x4'];
        simdBoolTypes=['Bool32x4','Bool16x8','Bool8x16'];
        simdIntTypes=['Int32x4','Int16x8','Int8x16','Uint32x4','Uint16x8','Uint8x16'];
        simd32bitFloatIntTypes=['Float32x4','Int32x4','Uint32x4'];
        simdSmallIntTypes=['Int16x8','Int8x16','Uint16x8','Uint8x16'];
        simdBoolIntTypes=simdBoolTypes.concat(simdIntTypes);
        simdFloatIntTypes=simdFloatTypes.concat(simdIntTypes);
        simdAllTypes=simdFloatTypes.concat(simdIntTypes,simdBoolTypes);
        return typeof SIMD !== 'undefined';
      */
                }
            },
            {
                name: "Float32x4",
                exec: function() {
                    /*
        return typeof SIMD.Float32x4 === 'function';
      */
                }
            },
            {
                name: "Int32x4",
                exec: function() {
                    /*
        return typeof SIMD.Int32x4 === 'function';
      */
                }
            },
            {
                name: "Int16x8",
                exec: function() {
                    /*
        return typeof SIMD.Int16x8 === 'function';
      */
                }
            },
            {
                name: "Int8x16",
                exec: function() {
                    /*
        return typeof SIMD.Int8x16 === 'function';
      */
                }
            },
            {
                name: "Uint32x4",
                exec: function() {
                    /*
        return typeof SIMD.Uint32x4 === 'function';
      */
                }
            },
            {
                name: "Uint16x8",
                exec: function() {
                    /*
        return typeof SIMD.Uint16x8 === 'function';
      */
                }
            },
            {
                name: "Uint8x16",
                exec: function() {
                    /*
        return typeof SIMD.Uint8x16 === 'function';
      */
                }
            },
            {
                name: "Bool32x4",
                exec: function() {
                    /*
        return typeof SIMD.Bool32x4 === 'function';
      */
                }
            },
            {
                name: "Bool16x8",
                exec: function() {
                    /*
        return typeof SIMD.Bool16x8 === 'function';
      */
                }
            },
            {
                name: "Bool8x16",
                exec: function() {
                    /*
        return typeof SIMD.Bool8x16 === 'function';
      */
                }
            },
            {
                name: "SIMD.%floatType%.abs",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].abs === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.add",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].add === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%integerType%.addSaturate",
                exec: function() {
                    /*
        return simdSmallIntTypes.every(function(type){
          return typeof SIMD[type].addSaturate === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.and",
                exec: function() {
                    /*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].and === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%booleanType%.anyTrue",
                exec: function() {
                    /*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].anyTrue === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%booleanType%.allTrue",
                exec: function() {
                    /*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].allTrue === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.check",
                exec: function() {
                    /*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].check === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.equal",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].equal === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.extractLane",
                exec: function() {
                    /*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].extractLane === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.greaterThan",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].greaterThan === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.greaterThanOrEqual",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].greaterThanOrEqual === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.lessThan",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].lessThan === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.lessThanOrEqual",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].lessThanOrEqual === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.mul",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].mul === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.div",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].div === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.load",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].load === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.load1",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load1 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.load2",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load2 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.load3",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load3 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.max",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].max === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.maxNum",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].maxNum === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.min",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].min === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.minNum",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].minNum === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.neg",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].neg === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.not",
                exec: function() {
                    /*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].not === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.notEqual",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].notEqual === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.or",
                exec: function() {
                    /*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].or === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.reciprocalApproximation",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].reciprocalApproximation === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.reciprocalSqrtApproximation",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].reciprocalSqrtApproximation === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.replaceLane",
                exec: function() {
                    /*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].replaceLane === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.select",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].select === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%integerType%.shiftLeftByScalar",
                exec: function() {
                    /*
        return simdIntTypes.every(function(type){
          return typeof SIMD[type].shiftLeftByScalar === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%integerType%.shiftRightByScalar",
                exec: function() {
                    /*
        return simdIntTypes.every(function(type){
          return typeof SIMD[type].shiftRightByScalar === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.shuffle",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].shuffle === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.splat",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].splat === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%floatType%.sqrt",
                exec: function() {
                    /*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].sqrt === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.store",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].store === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.store1",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store1 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.store2",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store2 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.store3",
                exec: function() {
                    /*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store3 === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.sub",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].sub === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%integerType%.subSaturate",
                exec: function() {
                    /*
        return simdSmallIntTypes.every(function(type){
          return typeof SIMD[type].subSaturate === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.swizzle",
                exec: function() {
                    /*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].swizzle === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.xor",
                exec: function() {
                    /*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].xor === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.fromTIMDBits",
                exec: function() {
                    /*
        return ['Float32x4','Int32x4','Int8x16','Uint32x4','Uint16x8','Uint8x16'].every(function(type){
          return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
        });
      */
                }
            },
            {
                name: "SIMD.%type%.fromTIMD",
                exec: function() {
                    /*
        return typeof SIMD.Float32x4.fromInt32x4 === 'function' && typeof SIMD.Float32x4.fromUint32x4 === 'function' && typeof SIMD.Int32x4.fromFloat32x4 === 'function' && typeof SIMD.Uint32x4.fromFloat32x4 === 'function';
      */
                }
            }
        ]
    },
    {
        name: "decompilation",
        subtests: [
            {
                name: "uneval, existence",
                exec: function() {
                    /*
        return typeof uneval == 'function';
      */
                }
            },
            {
                name: 'built-in "toSource" methods',
                exec: function() {
                    /*
        return 'toSource' in Object.prototype
            && Number   .prototype.hasOwnProperty('toSource')
            && Boolean  .prototype.hasOwnProperty('toSource')
            && String   .prototype.hasOwnProperty('toSource')
            && Function .prototype.hasOwnProperty('toSource')
            && Array    .prototype.hasOwnProperty('toSource')
            && RegExp   .prototype.hasOwnProperty('toSource')
            && Date     .prototype.hasOwnProperty('toSource')
            && Error    .prototype.hasOwnProperty('toSource');
      */
                }
            },
            {
                name: '"toSource" method as hook for uneval',
                exec: function() {
                    /*
        return uneval({ toSource: function() { return "pwnd!" } }) === "pwnd!";
      */
                }
            },
            {
                name: "eval(uneval(value)) is functionally equivalent to value",
                exec: function() {
                    /*

        function isEquivalent(x, y) {

            if (x == null || y == null)
                return x === y;

            if (typeof x !== typeof y)
                return false;

            switch (typeof x) {
            case 'number':
                return x === y && 1/x === 1/y || isNaN(x) && isNaN(y)
            case 'boolean':
            case 'string':
            case 'symbol':
                return x === y;
            }

            if ({}.toString.call(x) !== {}.toString.call(y))
                return false;

            switch ({}.toString.call(x)) {

            case '[object Boolean]':
            case '[object Number]':
            case '[object String]':
            case '[object Date]':
                return x.valueOf() === y.valueOf();

            case '[object Function]':
            case '[object RegExp]':
            case '[object Error]':
                return x.toString() === y.toString();

            case '[object Array]':
                if (x.length !== y.length)
                    return false;
                for (var i = 0; i < x.length; i++) {
                    if (!isEquivalent(x[i], y[i]))
                        return false;
                }
                return true;

            default:
                for (var i in x) {
                    if ({}.hasOwnProperty.call(x, i)) {
                        if (!{}.hasOwnProperty.call(y, i) || !isEquivalent(x[i], y[i]))
                            return false;
                    }
                }
                for (var i in y) {
                    if ({}.hasOwnProperty.call(y, i) && !{}.hasOwnProperty.call(x, i))
                        return false;
                }
                return true;
            }
        }


        var sample = [
            undefined,
            null,
            false,
            1,
            NaN,
            -0,
            "foo",
            typeof Symbol !== "undefined" && Symbol.iterator,
            typeof Symbol !== "undefined" && Symbol.for && Symbol.for('bingo'),
            Object(true),
            Object(3),
            Object("x"),
            function x(y) { return 42 + y; },
            new Date(1234567890123),
            new Error("message"),
            new EvalError("WTF"),
            /rx/gim,
            [ 3, undefined, "%&@", null, function() {} ],
            { foo: "x", bar: [ 42, new Date ] }
        ];

        for (var k in sample) {
            if (!isEquivalent(sample[k], eval(uneval(sample[k])))) {
                return false;
            }
        }

        return true;
      */
                }
            }
        ]
    },
    {
        name: 'optional "scope" argument of "eval"',
        exec: function() {
            /*
    var x = 1;
    return eval("x", { x: 2 }) === 2;
  */
        }
    },
    {
        name: 'function "caller" property',
        exec: function() {
            return "caller" in function() {};
        }
    },
    {
        name: 'function "arity" property',
        exec: function() {
            return (
                function() {}.arity === 0 &&
                function(x) {
                    return x;
                }.arity === 1 &&
                function(x, y) {
                    return y;
                }.arity === 2
            );
        }
    },
    {
        name: 'function "arguments" property',
        exec: function() {
            function f(a, b) {
                return (
                    f.arguments &&
                    a === 1 &&
                    f.arguments[0] === 1 &&
                    b === "boo" &&
                    f.arguments[1] === "boo"
                );
            }
            return f(1, "boo");
        }
    },
    {
        name: "Function.prototype.isGenerator",
        exec: function() {
            return typeof Function.prototype.isGenerator == "function";
        }
    },
    {
        name: "class extends null",
        exec: function() {
            /*
     class C extends null {}
     return new C instanceof C;
     */
        }
    },
    {
        name: "__count__",
        exec: function() {
            return (
                typeof {}.__count__ === "number" &&
                { x: 1, y: 2 }.__count__ === 2
            );
        }
    },
    {
        name: "__parent__",
        exec: function() {
            return typeof {}.__parent__ !== "undefined";
        }
    },
    {
        name: "__noSuchMethod__",
        exec: function() {
            var o = {},
                executed = false;
            o.__noSuchMethod__ = function() {
                executed = true;
            };
            try {
                o.__i_dont_exist();
            } catch (e) {}
            return executed;
        }
    },
    {
        name: "Array generics",
        exec: function() {
            return (
                typeof Array.slice === "function" &&
                Array.slice("abc").length === 3
            );
        }
    },
    {
        name: "String generics",
        exec: function() {
            return (
                typeof String.slice === "function" &&
                String.slice(123, 1) === "23"
            );
        }
    },
    {
        name: "Array comprehensions (JS 1.8 style)",
        exec: function() {
            /*
    var obj = { 2: true, "foo": true, 4: true };
    var a = [i * 2 for (i in obj) if (i !== "foo")];
    return a instanceof Array && a[0] === 4 && a[1] === 8;
  */
        }
    },
    {
        name: "Array comprehensions (ES draft style)",
        exec: function() {
            /*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */
        }
    },
    {
        name: "Expression closures",
        exec: function() {
            /*
    return (function(x)x)(1) === 1;
  */
        }
    },
    {
        name: "ECMAScript for XML (E4X)",
        exec: function() {
            /*
    return typeof <foo/> === "xml";
  */
        }
    },
    {
        name: '"for each..in" loops',
        exec: function() {
            /*
    var str = '';
    for each (var item in {a: "foo", b: "bar", c: "baz"}) {
      str += item;
    }
    return str === "foobarbaz";
  */
        }
    },
    {
        name: "Sharp variables",
        exec: function() {
            /*
    var arr = #1=[1, #1#, 3];
    return arr[1] === arr;
  */
        }
    },
    {
        name: "Iterator",
        exec: function() {
            /* global Iterator */
            try {
                // jshint newcap:false
                var it = Iterator({ foo: 1, bar: 2 });
                // jshint newcap:true
                var keys = "";
                var values = 0;
                for (var pair in it) {
                    keys += pair[0];
                    values += pair[1];
                }
                return keys === "foobar" && values === 3;
            } catch (e) {
                return false;
            }
        }
    },
    {
        name: "__iterator__",
        exec: function() {
            try {
                var x = 5;
                var iter = {
                    next: function() {
                        /* global StopIteration */
                        if (x > 0) return { foo: --x };
                        else throw StopIteration;
                    }
                };
                var total = 0;
                // jshint iterator: true
                for (var item in {
                    __iterator__: function() {
                        return iter;
                    }
                }) {
                    total += item.foo;
                }
                // jshint iterator: false
                return total === 10;
            } catch (e) {
                return false;
            }
        }
    },
    {
        name: "Generators (JS 1.8)",
        exec: [
            {
                type: "application/javascript;version=1.8"
            },
            {}
        ]
    },
    {
        name: "Generator comprehensions (JS 1.8 style)",
        exec: function() {
            /*
    var obj = { 2: true, "foo": true, 4: true };
    var g = (i * 2 for (i in obj) if (i !== "foo"));
    return g.next() === 4 && g.next() === 8;
  */
        }
    },
    {
        name: "Generator comprehensions (ES draft style)",
        exec: function() {
            /*
    var iterator = (for (a of [1,2]) a + 4);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  */
        }
    },
    {
        name: 'RegExp "x" flag',
        exec: function() {
            try {
                var re = new RegExp(
                    "^ ( \\d+ ) \
                         ( \\w+ ) \
                         ( foo  )",
                    "x"
                );
                return re.exec("23xfoo")[0] === "23xfoo";
            } catch (e) {
                return false;
            }
        }
    },
    {
        name: "Callable RegExp",
        exec: function() {
            /*
    return /\\w/("x")[0] === "x";
  */
        }
    },
    {
        name: "RegExp named groups",
        exec: function() {
            /*
    return /(?P<name>a)(?P=name)/.test("aa") &&
           !/(?P<name>a)(?P=name)/.test("")
  */
        }
    },
    {
        name: "String.prototype.quote",
        exec: function() {
            return typeof String.prototype.quote === "function";
        }
    },
    {
        name: "String.prototype.replace flags",
        exec: function() {
            return "foofoo".replace("foo", "bar", "g") === "barbar";
        }
    },
    {
        name: "Date.prototype.toLocaleFormat",
        exec: function() {
            return typeof Date.prototype.toLocaleFormat === "function";
        }
    },
    {
        name: "Date.parse produces NaN for invalid dates",
        exec: function() {
            var brokenOnFirefox = !isNaN(
                Date.parse("2012-04-04T24:00:00.500Z")
            );
            var brokenOnIE10 = !isNaN(Date.parse("2012-12-31T24:01:00.000Z"));
            var brokenOnChrome = !isNaN(Date.parse("2011-02-29T12:00:00.000Z"));
            return !brokenOnFirefox && !brokenOnIE10 && !brokenOnChrome;
        }
    },
    {
        name: "Object.prototype.watch",
        exec: function() {
            return typeof Object.prototype.watch == "function";
        }
    },
    {
        name: "Object.prototype.unwatch",
        exec: function() {
            return typeof Object.prototype.unwatch == "function";
        }
    },
    {
        name: "Object.prototype.eval",
        exec: function() {
            return typeof Object.prototype.eval == "function";
        }
    },
    {
        name: "Object.observe",
        exec: function() {
            /*
    return typeof Object.observe == 'function';
  */
        }
    },
    {
        name: 'error "stack"',
        exec: function() {
            try {
                throw new Error();
            } catch (err) {
                return "stack" in err;
            }
        }
    },
    {
        name: 'error "lineNumber"',
        exec: function() {
            return "lineNumber" in new Error();
        }
    },
    {
        name: 'error "columnNumber"',
        exec: function() {
            return "columnNumber" in new Error();
        }
    },
    {
        name: 'error "fileName"',
        exec: function() {
            return "fileName" in new Error();
        }
    },
    {
        name: 'error "description"',
        exec: function() {
            return "description" in new Error();
        }
    },
    {
        name: "global",
        subtests: [
            {
                name: '"global" global property is global object',
                exec: function() {
                    /*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof global === 'object' && global && global === actualGlobal && !global.lacksGlobal && global.__system_global_test__ === 42;
    */
                }
            },
            {
                name:
                    '"global" global property has correct property descriptor',
                exec: function() {
                    /*
      var actualGlobal = Function('return this')();
      if (typeof global !== 'object') { return false; }
      if (!('global' in actualGlobal)) { return false; }
      if (Object.prototype.propertyIsEnumerable.call(actualGlobal, 'global')) { return false; }
      if (typeof Object.getOwnPropertyDescriptor !== 'function') { return true; } // ES3

      var descriptor = Object.getOwnPropertyDescriptor(actualGlobal, 'global');
      return descriptor.value === actualGlobal && !descriptor.enumerable && descriptor.configurable && descriptor.writable;
    */
                }
            }
        ]
    }
];
