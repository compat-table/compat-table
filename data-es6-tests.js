module.exports = [
    {
        name: "proper tail calls (tail call optimisation)",
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
          return f(n - 1);
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
          return g(n - 1);
        }
        function g(n){
          if (n <= 0) {
            return  "bar";
          }
          return f(n - 1);
        }
        return f(1e6) === "foo" && f(1e6+1) === "bar";
      */
                }
            }
        ]
    },
    {
        name: "default function parameters",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
      */
                }
            },
            {
                name: "explicit undefined defers to the default",
                exec: function() {
                    /*
        return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
      */
                }
            },
            {
                name: "defaults can refer to previous params",
                exec: function() {
                    /*
        return (function (a, b = a) { return b === 5; }(5));
      */
                }
            },
            {
                name: "arguments object interaction",
                exec: function() {
                    /*
        return (function (a = "baz", b = "qux", c = "quux") {
          a = "corge";
          // The arguments object is not mapped to the
          // parameters, even outside of strict mode.
          return arguments.length === 2
            && arguments[0] === "foo"
            && arguments[1] === "bar";
        }("foo", "bar"));
      */
                }
            },
            {
                name: "temporal dead zone",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "separate scope",
                exec: function() {
                    /*
        return (function(a=function(){
          return typeof b === 'undefined';
        }){
          var b = 1;
          return a();
        }());
      */
                }
            },
            {
                name: "new Function() support",
                exec: function() {
                    /*
        return new Function("a = 1", "b = 2",
          "return a === 3 && b === 2;"
        )(3);
      */
                }
            }
        ]
    },
    {
        name: "rest parameters",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        return (function (foo, ...args) {
          return args instanceof Array && args + "" === "bar,baz";
        }("foo", "bar", "baz"));
      */
                }
            },
            {
                name: "function 'length' property",
                exec: function() {
                    /*
        return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
      */
                }
            },
            {
                name: "arguments object interaction",
                exec: function() {
                    /*
        return (function (foo, ...args) {
          foo = "qux";
          // The arguments object is not mapped to the
          // parameters, even outside of strict mode.
          return arguments.length === 3
            && arguments[0] === "foo"
            && arguments[1] === "bar"
            && arguments[2] === "baz";
        }("foo", "bar", "baz"));
      */
                }
            },
            {
                name: "can't be used in setters",
                exec: function() {
                    /*
        return (function (...args) {
          try {
            eval("({set e(...args){}})");
          } catch(e) {
            return true;
          }
        }());
      */
                }
            },
            {
                name: "new Function() support",
                exec: function() {
                    /*
        return new Function("a", "...b",
          "return b instanceof Array && a+b === 'foobar,baz';"
        )('foo','bar','baz');
      */
                }
            }
        ]
    },
    {
        name: "spread syntax for iterable objects",
        subtests: [
            {
                name: "with arrays, in function calls",
                exec: function() {
                    /*
        return Math.max(...[1, 2, 3]) === 3
      */
                }
            },
            {
                name: "with arrays, in array literals",
                exec: function() {
                    /*
       return [...[1, 2, 3]][2] === 3;
      */
                }
            },
            {
                name: "with sparse arrays, in function calls",
                exec: function() {
                    /*
        var a = Array(...[,,]);
        return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
      */
                }
            },
            {
                name: "with sparse arrays, in array literals",
                exec: function() {
                    /*
        var a = [...[,,]];
        return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
      */
                }
            },
            {
                name: "with strings, in function calls",
                exec: function() {
                    /*
       return Math.max(..."1234") === 4;
      */
                }
            },
            {
                name: "with strings, in array literals",
                exec: function() {
                    /*
       return ["a", ..."bcd", "e"][3] === "d";
      */
                }
            },
            {
                name: "with astral plane strings, in function calls",
                exec: function() {
                    /*
       return Array(..."𠮷𠮶")[0] === "𠮷";
      */
                }
            },
            {
                name: "with astral plane strings, in array literals",
                exec: function() {
                    /*
       return [..."𠮷𠮶"][0] === "𠮷";
      */
                }
            },
            {
                name: "with generator instances, in calls",
                exec: function() {
                    /*
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        return Math.max(...iterable) === 3;
      */
                }
            },
            {
                name: "with generator instances, in arrays",
                exec: function() {
                    /*
        var iterable = (function*(){ yield "b"; yield "c"; yield "d"; }());
        return ["a", ...iterable, "e"][3] === "d";
      */
                }
            },
            {
                name: "with generic iterables, in calls",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Math.max(...iterable) === 3;
      */
                }
            },
            {
                name: "with generic iterables, in arrays",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject(["b", "c", "d"]);
        return ["a", ...iterable, "e"][3] === "d";
      */
                }
            },
            {
                name: "with instances of iterables, in calls",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Math.max(...Object.create(iterable)) === 3;
      */
                }
            },
            {
                name: "with instances of iterables, in arrays",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject(["b", "c", "d"]);
        return ["a", ...Object.create(iterable), "e"][3] === "d";
      */
                }
            },
            {
                name: "spreading non-iterables is a runtime error",
                exec: function() {
                    /*
        try {
          Math.max(...2);
        } catch(e) {
          return Math.max(...[1, 2, 3]) === 3;
        }
      */
                }
            }
        ]
    },
    {
        name: "object literal extensions",
        subtests: [
            {
                name: "computed properties",
                exec: function() {
                    /*
        var x = 'y';
        return ({ [x]: 1 }).y === 1;
      */
                }
            },
            {
                name: "shorthand properties",
                exec: function() {
                    /*
        var a = 7, b = 8, c = {a,b};
        return c.a === 7 && c.b === 8;
      */
                }
            },
            {
                name: "shorthand methods",
                exec: function() {
                    /*
        return ({ y() { return 2; } }).y() === 2;
      */
                }
            },
            {
                name: "string-keyed shorthand methods",
                exec: function() {
                    /*
        return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
      */
                }
            },
            {
                name: "computed shorthand methods",
                exec: function() {
                    /*
        var x = 'y';
        return ({ [x](){ return 1 } }).y() === 1;
      */
                }
            },
            {
                name: "computed accessors",
                exec: function() {
                    /*
        var x = 'y',
            valueSet,
            obj = {
              get [x] () { return 1 },
              set [x] (value) { valueSet = value }
            };
        obj.y = 'foo';
        return obj.y === 1 && valueSet === 'foo';
      */
                }
            }
        ]
    },
    {
        name: "for..of loops",
        subtests: [
            {
                name: "with arrays",
                exec: function() {
                    /*
        var arr = [5];
        for (var item of arr)
          return item === 5;
      */
                }
            },
            {
                name: "with sparse arrays",
                exec: function() {
                    /*
        var arr = [,,];
        var count = 0;
        for (var item of arr)
          count += (item === undefined);
        return count === 2;
      */
                }
            },
            {
                name: "with strings",
                exec: function() {
                    /*
        var str = "";
        for (var item of "foo")
          str += item;
        return str === "foo";
      */
                }
            },
            {
                name: "with astral plane strings",
                exec: function() {
                    /*
        var str = "";
        for (var item of "𠮷𠮶")
          str += item + " ";
        return str === "𠮷 𠮶 ";
      */
                }
            },
            {
                name: "with generator instances",
                exec: function() {
                    /*
        var result = "";
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        for (var item of iterable) {
          result += item;
        }
        return result === "123";
      */
                }
            },
            {
                name: "with generic iterables",
                exec: function() {
                    /*
        var result = "";
        var iterable = global.__createIterableObject([1, 2, 3]);
        for (var item of iterable) {
          result += item;
        }
        return result === "123";
      */
                }
            },
            {
                name: "with instances of generic iterables",
                exec: function() {
                    /*
        var result = "";
        var iterable = global.__createIterableObject([1, 2, 3]);
        for (var item of Object.create(iterable)) {
          result += item;
        }
        return result === "123";
      */
                }
            },
            {
                name: "iterator closing, break",
                exec: function() {
                    /*
        var closed = false;
        var iter = __createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        for (var it of iter) break;
        return closed;
      */
                }
            },
            {
                name: "iterator closing, throw",
                exec: function() {
                    /*
        var closed = false;
        var iter = __createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          for (var it of iter) throw 0;
        } catch(e){}
        return closed;
      */
                }
            }
        ]
    },
    {
        name: "octal and binary literals",
        subtests: [
            {
                name: "octal literals",
                exec: function() {
                    /*
        return 0o10 === 8 && 0O10 === 8;
      */
                }
            },
            {
                name: "binary literals",
                exec: function() {
                    /*
        return 0b10 === 2 && 0B10 === 2;
      */
                }
            },
            {
                name: "octal supported by Number()",
                exec: function() {
                    /*
        return Number('0o1') === 1;
      */
                }
            },
            {
                name: "binary supported by Number()",
                exec: function() {
                    /*
        return Number('0b1') === 1;
      */
                }
            }
        ]
    },
    {
        name: "template literals",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var a = "ba", b = "QUX";
        return `foo bar
        ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
      */
                }
            },
            {
                name: "toString conversion",
                exec: function() {
                    /*
        var a = {
          toString: function() { return "foo"; },
          valueOf: function() { return "bar"; },
        };
        return `${a}` === "foo";
      */
                }
            },
            {
                name: "tagged template literals",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "passed array is frozen",
                exec: function() {
                    /*
        return (function(parts) {
          return Object.isFrozen(parts) && Object.isFrozen(parts.raw);
        }) `foo${0}bar${0}baz`;
      */
                }
            },
            {
                name: "line break normalisation",
                exec: function() {
                    /*
        var cr   = eval("`x" + String.fromCharCode(13)    + "y`");
        var lf   = eval("`x" + String.fromCharCode(10)    + "y`");
        var crlf = eval("`x" + String.fromCharCode(13,10) + "y`");

        return cr.length === 3 && lf.length === 3 && crlf.length === 3
          && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
      */
                }
            },
            {
                name: "TemplateStrings call site caching",
                exec: function() {
                    /*
        // TemplateStrings caching was changed from per-contents to
        // per-call-site.
        // https://github.com/tc39/ecma262/pull/890
        function strings(array) {
          return array;
        }
        function getStrings() {
          return strings`foo`;
        }
        var original = getStrings();
        var other = strings`foo`;
        return original === getStrings() && original !== other;
      */
                }
            },
            {
                name: "TemplateStrings permanent caching",
                exec: function() {
                    /*
        function strings(array) {
          return array;
        }
        function getStrings() {
          return strings`foo`;
        }
        var original = getStrings();
        var newed = new getStrings();
        return original === getStrings() && original === newed;
      */
                }
            }
        ]
    },
    {
        name: 'RegExp "y" and "u" flags',
        subtests: [
            {
                name: '"y" flag',
                exec: function() {
                    /*
        var re = new RegExp('\\w', 'y');
        re.exec('xy');
        return (re.exec('xy')[0] === 'y');
      */
                }
            },
            {
                name: '"y" flag, lastIndex',
                exec: function() {
                    /*
        var re = new RegExp('yy', 'y');
        re.lastIndex = 3;
        var result = re.exec('xxxyyxx')[0];
        return result === 'yy' && re.lastIndex === 5;
      */
                }
            },
            {
                name: '"u" flag',
                exec: function() {
                    /*
        return "𠮷".match(/^.$/u)[0].length === 2;
      */
                }
            },
            {
                name: '"u" flag, non-BMP Unicode characters',
                exec: function() {
                    /*
        return "𠮷x".match(/^.x$/u)[0].length === 3;
      */
                }
            },
            {
                name: '"u" flag, Unicode code point escapes',
                exec: function() {
                    /*
        return "𝌆".match(/\u{1d306}/u)[0].length === 2;
      */
                }
            },
            {
                name: '"u" flag, case folding',
                exec: function() {
                    /*
        return "ſ".match(/S/iu) && "S".match(/ſ/iu);
      */
                }
            }
        ]
    },
    {
        name: "destructuring, declarations",
        subtests: [
            {
                name: "with arrays",
                exec: function() {
                    /*
        var [a, , [b], c] = [5, null, [6]];
        return a === 5 && b === 6 && c === undefined;
      */
                }
            },
            {
                name: "with sparse arrays",
                exec: function() {
                    /*
        var [a, , b] = [,,,];
        return a === undefined && b === undefined;
      */
                }
            },
            {
                name: "with strings",
                exec: function() {
                    /*
        var [a, b, c] = "ab";
        return a === "a" && b === "b" && c === undefined;
      */
                }
            },
            {
                name: "with astral plane strings",
                exec: function() {
                    /*
        var [c] = "𠮷𠮶";
        return c === "𠮷";
      */
                }
            },
            {
                name: "with generator instances",
                exec: function() {
                    /*
        var [a, b, c] = (function*(){ yield 1; yield 2; }());
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "with generic iterables",
                exec: function() {
                    /*
        var [a, b, c] = global.__createIterableObject([1, 2]);
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "with instances of generic iterables",
                exec: function() {
                    /*
        var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        var [a, b] = iter;
        return closed;
      */
                }
            },
            {
                name: "trailing commas in iterable patterns",
                exec: function() {
                    /*
        var [a,] = [1];
        return a === 1;
      */
                }
            },
            {
                name: "with objects",
                exec: function() {
                    /*
        var {c, x:d, e} = {c:7, x:8};
        return c === 7 && d === 8 && e === undefined;
      */
                }
            },
            {
                name: "object destructuring with primitives",
                exec: function() {
                    /*
        var {toFixed} = 2;
        var {slice} = '';
        return toFixed === Number.prototype.toFixed
          && slice === String.prototype.slice;
      */
                }
            },
            {
                name: "trailing commas in object patterns",
                exec: function() {
                    /*
        var {a,} = {a:1};
        return a === 1;
      */
                }
            },
            {
                name: "throws on null and undefined",
                exec: function() {
                    /*
        try {
          var {a} = null;
          return false;
        } catch(e) {
          if (!(e instanceof TypeError))
            return false;
        }
        try {
          var {b} = undefined;
          return false;
        } catch(e) {
          if (!(e instanceof TypeError))
            return false;
        }
        return true;
      */
                }
            },
            {
                name: "computed properties",
                exec: function() {
                    /*
        var qux = "corge";
        var { [qux]: grault } = { corge: "garply" };
        return grault === "garply";
      */
                }
            },
            {
                name: "multiples in a single var statement",
                exec: function() {
                    /*
        var [a,b] = [5,6], {c,d} = {c:7,d:8};
        return a === 5 && b === 6 && c === 7 && d === 8;
      */
                }
            },
            {
                name: "nested",
                exec: function() {
                    /*
        var [e, {x:f, g}] = [9, {x:10}];
        var {h, x:[i]} = {h:11, x:[12]};
        return e === 9 && f === 10 && g === undefined
          && h === 11 && i === 12;
      */
                }
            },
            {
                name: "in for-in loop heads",
                exec: function() {
                    /*
        for(var [i, j, k] in { qux: 1 }) {
          return i === "q" && j === "u" && k === "x";
        }
      */
                }
            },
            {
                name: "in for-of loop heads",
                exec: function() {
                    /*
        for(var [i, j, k] of [[1,2,3]]) {
          return i === 1 && j === 2 && k === 3;
        }
      */
                }
            },
            {
                name: "in catch heads",
                exec: function() {
                    /*
        try {
          throw [1,2];
        } catch([i,j]) {
          try {
            throw { k: 3, l: 4 };
          } catch({k, l}) {
            return i === 1 && j === 2 && k === 3 && l === 4;
          }
        }
      */
                }
            },
            {
                name: "rest",
                exec: function() {
                    /*
        var [a, ...b] = [3, 4, 5];
        var [c, ...d] = [6];
        return a === 3 && b instanceof Array && (b + "") === "4,5" &&
           c === 6 && d instanceof Array && d.length === 0;
      */
                }
            },
            {
                name: "defaults",
                exec: function() {
                    /*
        var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
        var [d = 0, e = 5, f = 6] = [4,,undefined];
        return a === 1 && b === 2 && c === 3
          && d === 4 && e === 5 && f === 6;
      */
                }
            },
            {
                name: "defaults, let temporal dead zone",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "destructuring, assignment",
        subtests: [
            {
                name: "with arrays",
                exec: function() {
                    /*
        var a,b,c;
        [a, , [b], c] = [5, null, [6]];
        return a === 5 && b === 6 && c === undefined;
      */
                }
            },
            {
                name: "with sparse arrays",
                exec: function() {
                    /*
        var a, b;
        [a, , b] = [,,,];
        return a === undefined && b === undefined;
      */
                }
            },
            {
                name: "with strings",
                exec: function() {
                    /*
        var a,b,c;
        [a, b, c] = "ab";
        return a === "a" && b === "b" && c === undefined;
      */
                }
            },
            {
                name: "with astral plane strings",
                exec: function() {
                    /*
        var c;
        [c] = "𠮷𠮶";
        return c === "𠮷";
      */
                }
            },
            {
                name: "with generator instances",
                exec: function() {
                    /*
        var a,b,c;
        [a, b, c] = (function*(){ yield 1; yield 2; }());
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "with generic iterables",
                exec: function() {
                    /*
        var a,b,c;
        [a, b, c] = global.__createIterableObject([1, 2]);
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "with instances of generic iterables",
                exec: function() {
                    /*
        var a,b,c;
        [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
        return a === 1 && b === 2 && c === undefined;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        var a,b;
        [a, b] = iter;
        return closed;
      */
                }
            },
            {
                name: "iterable destructuring expression",
                exec: function() {
                    /*
        var a, b, iterable = [1,2];
        return ([a, b] = iterable) === iterable;
      */
                }
            },
            {
                name: "chained iterable destructuring",
                exec: function() {
                    /*
        var a,b,c,d;
        [a,b] = [c,d] = [1,2];
        return a === 1 && b === 2 && c === 1 && d === 2;
      */
                }
            },
            {
                name: "trailing commas in iterable patterns",
                exec: function() {
                    /*
        var a;
        [a,] = [1];
        return a === 1;
      */
                }
            },
            {
                name: "with objects",
                exec: function() {
                    /*
        var c,d,e;
        ({c, x:d, e} = {c:7, x:8});
        return c === 7 && d === 8 && e === undefined;
      */
                }
            },
            {
                name: "object destructuring with primitives",
                exec: function() {
                    /*
        var toFixed, slice;
        ({toFixed} = 2);
        ({slice} = '');
        return toFixed === Number.prototype.toFixed
          && slice === String.prototype.slice;
      */
                }
            },
            {
                name: "trailing commas in object patterns",
                exec: function() {
                    /*
        var a;
        ({a,} = {a:1});
        return a === 1;
      */
                }
            },
            {
                name: "object destructuring expression",
                exec: function() {
                    /*
        var a, b, obj = { a:1, b:2 };
        return ({a,b} = obj) === obj;
      */
                }
            },
            {
                name: "parenthesised left-hand-side is a syntax error",
                exec: function() {
                    /*
        var a, b;
        ({a,b} = {a:1,b:2});
        try {
          eval("({a,b}) = {a:3,b:4};");
        }
        catch(e) {
          return a === 1 && b === 2;
        }
      */
                }
            },
            {
                name: "chained object destructuring",
                exec: function() {
                    /*
        var a,b,c,d;
        ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
        return a === 1 && b === 2 && c === 3 && d === 4;
      */
                }
            },
            {
                name: "throws on null and undefined",
                exec: function() {
                    /*
        var a,b;
        try {
          ({a} = null);
          return false;
        } catch(e) {
          if (!(e instanceof TypeError))
            return false;
        }
        try {
          ({b} = undefined);
          return false;
        } catch(e) {
          if (!(e instanceof TypeError))
            return false;
        }
        return true;
      */
                }
            },
            {
                name: "computed properties",
                exec: function() {
                    /*
        var grault, qux = "corge";
        ({ [qux]: grault } = { corge: "garply" });
        return grault === "garply";
      */
                }
            },
            {
                name: "nested",
                exec: function() {
                    /*
        var e,f,g,h,i;
        [e, {x:f, g}] = [9, {x:10}];
        ({h, x:[i]} = {h:11, x:[12]});
        return e === 9 && f === 10 && g === undefined
          && h === 11 && i === 12;
      */
                }
            },
            {
                name: "rest",
                exec: function() {
                    /*
        var a,b,c,d;
        [a, ...b] = [3, 4, 5];
        [c, ...d] = [6];
        return a === 3 && b instanceof Array && (b + "") === "4,5" &&
           c === 6 && d instanceof Array && d.length === 0;
      */
                }
            },
            {
                name: "nested rest",
                exec: function() {
                    /*
        var a = [1, 2, 3], first, last;
        [first, ...[a[2], last]] = a;
        return first === 1 && last === 3 && (a + "") === "1,2,2";
      */
                }
            },
            {
                name: "empty patterns",
                exec: function() {
                    /*
        [] = [1,2];
        ({} = {a:1,b:2});
        return true;
      */
                }
            },
            {
                name: "defaults",
                exec: function() {
                    /*
        var a,b,c,d,e,f;
        ({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
        [d = 0, e = 5, f = 6] = [4,,undefined];
        return a === 1 && b === 2 && c === 3
          && d === 4 && e === 5 && f === 6;
      */
                }
            }
        ]
    },
    {
        name: "destructuring, parameters",
        subtests: [
            {
                name: "with arrays",
                exec: function() {
                    /*
        return function([a, , [b], c]) {
          return a === 5 && b === 6 && c === undefined;
        }([5, null, [6]]);
      */
                }
            },
            {
                name: "with sparse arrays",
                exec: function() {
                    /*
        return function([a, , b]) {
          return a === undefined && b === undefined;
        }([,,,]);
      */
                }
            },
            {
                name: "with strings",
                exec: function() {
                    /*
        return function([a, b, c]) {
          return a === "a" && b === "b" && c === undefined;
        }("ab");
      */
                }
            },
            {
                name: "with astral plane strings",
                exec: function() {
                    /*
        return function([c]) {
          return c === "𠮷";
        }("𠮷𠮶");
      */
                }
            },
            {
                name: "with generator instances",
                exec: function() {
                    /*
        return function([a, b, c]) {
          return a === 1 && b === 2 && c === undefined;
        }(function*(){ yield 1; yield 2; }());
      */
                }
            },
            {
                name: "with generic iterables",
                exec: function() {
                    /*
        return function([a, b, c]) {
          return a === 1 && b === 2 && c === undefined;
        }(global.__createIterableObject([1, 2]));
      */
                }
            },
            {
                name: "with instances of generic iterables",
                exec: function() {
                    /*
        return function([a, b, c]) {
          return a === 1 && b === 2 && c === undefined;
        }(Object.create(global.__createIterableObject([1, 2])));
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        (function([a,b]) {}(iter));
        return closed;
      */
                }
            },
            {
                name: "trailing commas in iterable patterns",
                exec: function() {
                    /*
        return function([a,]) {
          return a === 1;
        }([1]);
      */
                }
            },
            {
                name: "with objects",
                exec: function() {
                    /*
        return function({c, x:d, e}) {
          return c === 7 && d === 8 && e === undefined;
        }({c:7, x:8});
      */
                }
            },
            {
                name: "object destructuring with primitives",
                exec: function() {
                    /*
        return function({toFixed}, {slice}) {
          return toFixed === Number.prototype.toFixed
            && slice === String.prototype.slice;
        }(2,'');
      */
                }
            },
            {
                name: "trailing commas in object patterns",
                exec: function() {
                    /*
        return function({a,}) {
          return a === 1;
        }({a:1});
      */
                }
            },
            {
                name: "throws on null and undefined",
                exec: function() {
                    /*
        try {
          (function({a}){}(null));
          return false;
        } catch(e) {}
        try {
          (function({b}){}(undefined));
          return false;
        } catch(e) {}
        return true;
      */
                }
            },
            {
                name: "computed properties",
                exec: function() {
                    /*
        var qux = "corge";
        return function({ [qux]: grault }) {
          return grault === "garply";
        }({ corge: "garply" });
      */
                }
            },
            {
                name: "nested",
                exec: function() {
                    /*
        return function([e, {x:f, g}], {h, x:[i]}) {
          return e === 9 && f === 10 && g === undefined
            && h === 11 && i === 12;
        }([9, {x:10}],{h:11, x:[12]});
      */
                }
            },
            {
                name: "'arguments' interaction",
                exec: function() {
                    /*
        return (function({a, x:b, y:e}, [c, d]) {
          return arguments[0].a === 1 && arguments[0].x === 2
            && !("y" in arguments[0]) && arguments[1] + '' === "3,4";
        }({a:1, x:2}, [3, 4]));
      */
                }
            },
            {
                name: "new Function() support",
                exec: function() {
                    /*
        return new Function("{a, x:b, y:e}","[c, d]",
          "return a === 1 && b === 2 && c === 3 && "
          + "d === 4 && e === undefined;"
        )({a:1, x:2}, [3, 4]);
      */
                }
            },
            {
                name: "in parameters, function 'length' property",
                exec: function() {
                    /*
        return function({a, b}, [c, d]){}.length === 2;
      */
                }
            },
            {
                name: "rest",
                exec: function() {
                    /*
        return function([a, ...b], [c, ...d]) {
          return a === 3 && b instanceof Array && (b + "") === "4,5" &&
             c === 6 && d instanceof Array && d.length === 0;
        }([3, 4, 5], [6]);
      */
                }
            },
            {
                name: "empty patterns",
                exec: function() {
                    /*
        return function ([],{}){
          return arguments[0] + '' === "3,4" && arguments[1].x === "foo";
        }([3,4],{x:"foo"});
      */
                }
            },
            {
                name: "defaults",
                exec: function() {
                    /*
        return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
            [f = 6, g = 0, h = 8]) {
          return a === 1 && b === 2 && c === 3 && d === 4 &&
            e === 5 && f === 6 && g === 7 && h === 8;
        }({b:2, c:undefined, x:4},[, 7, undefined]));
      */
                }
            },
            {
                name: "defaults, separate scope",
                exec: function() {
                    /*
        return (function({a=function(){
          return typeof b === 'undefined';
        }}){
          var b = 1;
          return a();
        }({}));
      */
                }
            },
            {
                name: "defaults, new Function() support",
                exec: function() {
                    /*
        return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
          "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
        )({b:2, c:undefined, x:4});
      */
                }
            },
            {
                name: "defaults, arrow function",
                exec: function() {
                    /*
        return ((a, {b = 0, c = 3}) => {
          return a === 1 && b === 2 && c === 3;
        })(1, {b: 2});
      */
                }
            }
        ]
    },
    {
        name: "Unicode code point escapes",
        subtests: [
            {
                name: "in strings",
                exec: function() {
                    /*
        return '\u{1d306}' == '\ud834\udf06';
      */
                }
            },
            {
                name: "in identifiers",
                exec: function() {
                    /*
        var \u{102C0} = { \u{102C0} : 2 };
        return \u{102C0}['\ud800\udec0'] === 2;
      */
                }
            }
        ]
    },
    {
        name: "new.target",
        subtests: [
            {
                name: "in constructors",
                exec: function() {
                    /*
        var passed = false;
        new function f() {
          passed = (new.target === f);
        }();
        (function() {
          passed &= (new.target === undefined);
        }());
        return passed;
      */
                }
            },
            {
                name: "assignment is an early error",
                exec: function() {
                    /*
        var passed = false;
        new function f() {
          passed = (new.target === f);
        }();

        try {
          Function("new.target = function(){};");
        } catch(e) {
          return passed;
        }
      */
                }
            }
        ]
    },
    {
        name: "const",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        const foo = 123;
        return (foo === 123);
      */
                }
            },
            {
                name: "is block-scoped",
                exec: function() {
                    /*
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */
                }
            },
            {
                name: "scope shadow resolution",
                exec: function() {
                    /*
        try {
            { const bar = 456; }
            const bar = 123;
            return bar === 123;
        } catch(e) {
          return false;
        }
      */
                }
            },
            {
                name: "cannot be in statements",
                exec: function() {
                    /*
        const bar = 1;
        try {
          Function("if(true) const baz = 1;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "redefining a const is an error",
                exec: function() {
                    /*
        const baz = 1;
        try {
          Function("const foo = 1; foo = 2;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "for loop statement scope",
                exec: function() {
                    /*
       const baz = 1;
       for(const baz = 0; false;) {}
       return baz === 1;
       */
                }
            },
            {
                name: "for-in loop iteration scope",
                exec: function() {
                    /*
        var scopes = [];
        for(const i in { a:1, b:1 }) {
          scopes.push(function(){ return i; });
        }
        return (scopes[0]() === "a" && scopes[1]() === "b");
      */
                }
            },
            {
                name: "for-of loop iteration scope",
                exec: function() {
                    /*
        var scopes = [];
        for(const i of ['a','b']) {
          scopes.push(function(){ return i; });
        }
        return (scopes[0]() === "a" && scopes[1]() === "b");
      */
                }
            },
            {
                name: "temporal dead zone",
                exec: function() {
                    /*
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
      */
                }
            },
            {
                name: "basic support (strict mode)",
                exec: function() {
                    /*
        "use strict";
        const foo = 123;
        return (foo === 123);
      */
                }
            },
            {
                name: "is block-scoped (strict mode)",
                exec: function() {
                    /*
        'use strict';
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */
                }
            },
            {
                name: "scope shadow resolution (strict mode)",
                exec: function() {
                    /*
        'use strict';
        try {
            { const bar = 456; }
            const bar = 123;
            return bar === 123;
        } catch(e) {
          return false;
        }
      */
                }
            },
            {
                name: "cannot be in statements (strict mode)",
                exec: function() {
                    /*
        'use strict';
        const bar = 1;
        try {
          Function("'use strict'; if(true) const baz = 1;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "redefining a const (strict mode)",
                exec: function() {
                    /*
        'use strict';
        const baz = 1;
        try {
          Function("'use strict'; const foo = 1; foo = 2;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "for loop statement scope (strict mode)",
                exec: function() {
                    /*
        'use strict';
        const baz = 1;
        for(const baz = 0; false;) {}
        return baz === 1;
      */
                }
            },
            {
                name: "for-in loop iteration scope (strict mode)",
                exec: function() {
                    /*
        'use strict';
        var scopes = [];
        for(const i in { a:1, b:1 }) {
          scopes.push(function(){ return i; });
        }
        return (scopes[0]() === "a" && scopes[1]() === "b");
      */
                }
            },
            {
                name: "for-of loop iteration scope (strict mode)",
                exec: function() {
                    /*
        'use strict';
        var scopes = [];
        for(const i of ['a','b']) {
          scopes.push(function(){ return i; });
        }
        return (scopes[0]() === "a" && scopes[1]() === "b");
      */
                }
            },
            {
                name: "temporal dead zone (strict mode)",
                exec: function() {
                    /*
        'use strict';
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
      */
                }
            }
        ]
    },
    {
        name: "let",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        let foo = 123;
        return (foo === 123);
      */
                }
            },
            {
                name: "is block-scoped",
                exec: function() {
                    /*
        let bar = 123;
        { let bar = 456; }
        return bar === 123;
      */
                }
            },
            {
                name: "scope shadow resolution",
                exec: function() {
                    /*
        try {
            { let bar = 456; }
            let bar = 123;
            return bar === 123;
        } catch(e) {
          return false;
        }
      */
                }
            },
            {
                name: "cannot be in statements",
                exec: function() {
                    /*
        let bar = 1;
        try {
          Function("if(true) let baz = 1;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "for loop statement scope",
                exec: function() {
                    /*
        let baz = 1;
        for(let baz = 0; false;) {}
        return baz === 1;
      */
                }
            },
            {
                name: "temporal dead zone",
                exec: function() {
                    /*
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        let qux = 456;
        fn();
        return passed;
      */
                }
            },
            {
                name: "for/for-in loop iteration scope",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "basic support (strict mode)",
                exec: function() {
                    /*
        'use strict';
        let foo = 123;
        return (foo === 123);
      */
                }
            },
            {
                name: "is block-scoped (strict mode)",
                exec: function() {
                    /*
        'use strict';
        let bar = 123;
        { let bar = 456; }
        return bar === 123;
      */
                }
            },
            {
                name: "scope shadow resolution (strict mode)",
                exec: function() {
                    /*
        'use strict';
        try {
            { let bar = 456; }
            let bar = 123;
            return bar === 123;
        } catch(e) {
          return false;
        }
      */
                }
            },
            {
                name: "cannot be in statements (strict mode)",
                exec: function() {
                    /*
        'use strict';
        let bar = 1;
        try {
          Function("'use strict'; if(true) let baz = 1;")();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "for loop statement scope (strict mode)",
                exec: function() {
                    /*
        'use strict';
        let baz = 1;
        for(let baz = 0; false;) {}
        return baz === 1;
      */
                }
            },
            {
                name: "temporal dead zone (strict mode)",
                exec: function() {
                    /*
        'use strict';
        var passed = (function(){ try {  qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        let qux = 456;
        fn();
        return passed;
      */
                }
            },
            {
                name: "for/for-in loop iteration scope (strict mode)",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "block-level function declaration",
        exec: function() {
            /*
    'use strict';
    if (f() !== 1) return false;
    function f() { return 1; }
    {
      if (f() !== 2) return false;
      function f() { return 2; }
      if (f() !== 2) return false;
    }
    if (f() !== 1) return false;
    return true;
  */
        }
    },
    {
        name: "arrow functions",
        subtests: [
            {
                name: "0 parameters",
                exec: function() {
                    /*
        return (() => 5)() === 5;
      */
                }
            },
            {
                name: "1 parameter, no brackets",
                exec: function() {
                    /*
        var b = x => x + "foo";
        return (b("fee fie foe ") === "fee fie foe foo");
      */
                }
            },
            {
                name: "multiple parameters",
                exec: function() {
                    /*
        var c = (v, w, x, y, z) => "" + v + w + x + y + z;
        return (c(6, 5, 4, 3, 2) === "65432");
      */
                }
            },
            {
                name: 'lexical "this" binding',
                exec: function() {
                    /*
        var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
        var e = { x : "baz", y : d };
        return d("ley") === "barley" && e.y("ley") === "barley";
      */
                }
            },
            {
                name: '"this" unchanged by call or apply',
                exec: function() {
                    /*
        var d = { x : "foo", y : function() { return () => this.x; }};
        var e = { x : "bar" };
        return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
      */
                }
            },
            {
                name: "can't be bound, can be curried",
                exec: function() {
                    /*
        var d = { x : "bar", y : function() { return z => this.x + z; }};
        var e = { x : "baz" };
        return d.y().bind(e, "ley")() === "barley";
      */
                }
            },
            {
                name: 'lexical "arguments" binding',
                exec: function() {
                    /*
        var f = (function() { return z => arguments[0]; }(5));
        return f(6) === 5;
      */
                }
            },
            {
                name: "no line break between params and <code>=></code>",
                exec: function() {
                    /*
        return (() => {
          try { Function("x\n => 2")(); } catch(e) { return true; }
        })();
      */
                }
            },
            {
                name: "correct precedence",
                exec: function() {
                    /*
        return (() => {
          try { Function("0 || () => 2")(); } catch(e) { return true; }
        })();
      */
                }
            },
            {
                name: 'no "prototype" property',
                exec: function() {
                    /*
        var a = () => 5;
        return !a.hasOwnProperty("prototype");
      */
                }
            },
            {
                name: 'lexical "super" binding in constructors',
                exec: function() {
                    /*
        var received;

        class B {
          constructor (arg) {
            received = arg;
          }
        }
        class C extends B {
          constructor () {
            var callSuper = () => super('foo');
            callSuper();
          }
        }
        return new C instanceof C && received === 'foo'
      */
                }
            },
            {
                name: 'lexical "super" binding in methods',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: 'lexical "new.target" binding',
                exec: function() {
                    /*
        function C() {
          return x => new.target;
        }
        return new C()() === C && C()() === undefined;
      */
                }
            }
        ]
    },
    {
        name: "class",
        subtests: [
            {
                name: "class statement",
                exec: function() {
                    /*
        class C {}
        return typeof C === "function";
      */
                }
            },
            {
                name: "is block-scoped",
                exec: function() {
                    /*
        class C {}
        var c1 = C;
        {
          class C {}
          var c2 = C;
        }
        return C === c1;
      */
                }
            },
            {
                name: "class expression",
                exec: function() {
                    /*
        return typeof class C {} === "function";
      */
                }
            },
            {
                name: "anonymous class",
                exec: function() {
                    /*
        return typeof class {} === "function";
      */
                }
            },
            {
                name: "constructor",
                exec: function() {
                    /*
        class C {
          constructor() { this.x = 1; }
        }
        return C.prototype.constructor === C
          && new C().x === 1;
      */
                }
            },
            {
                name: "prototype methods",
                exec: function() {
                    /*
        class C {
          method() { return 2; }
        }
        return typeof C.prototype.method === "function"
          && new C().method() === 2;
      */
                }
            },
            {
                name: "string-keyed methods",
                exec: function() {
                    /*
        class C {
          "foo bar"() { return 2; }
        }
        return typeof C.prototype["foo bar"] === "function"
          && new C()["foo bar"]() === 2;
      */
                }
            },
            {
                name: "computed prototype methods",
                exec: function() {
                    /*
        var foo = "method";
        class C {
          [foo]() { return 2; }
        }
        return typeof C.prototype.method === "function"
          && new C().method() === 2;
      */
                }
            },
            {
                name: "optional semicolons",
                exec: function() {
                    /*
        class C {
          ;
          method() { return 2; };
          method2() { return 2; }
          method3() { return 2; };
        }
        return typeof C.prototype.method === "function"
          && typeof C.prototype.method2 === "function"
          && typeof C.prototype.method3 === "function";
      */
                }
            },
            {
                name: "static methods",
                exec: function() {
                    /*
        class C {
          static method() { return 3; }
        }
        return typeof C.method === "function"
          && C.method() === 3;
      */
                }
            },
            {
                name: "computed static methods",
                exec: function() {
                    /*
        var foo = "method";
        class C {
          static [foo]() { return 3; }
        }
        return typeof C.method === "function"
          && C.method() === 3;
      */
                }
            },
            {
                name: "accessor properties",
                exec: function() {
                    /*
        var baz = false;
        class C {
          get foo() { return "foo"; }
          set bar(x) { baz = x; }
        }
        new C().bar = true;
        return new C().foo === "foo" && baz;
      */
                }
            },
            {
                name: "computed accessor properties",
                exec: function() {
                    /*
        var garply = "foo", grault = "bar", baz = false;
        class C {
          get [garply]() { return "foo"; }
          set [grault](x) { baz = x; }
        }
        new C().bar = true;
        return new C().foo === "foo" && baz;
      */
                }
            },
            {
                name: "static accessor properties",
                exec: function() {
                    /*
        var baz = false;
        class C {
          static get foo() { return "foo"; }
          static set bar(x) { baz = x; }
        }
        C.bar = true;
        return C.foo === "foo" && baz;
      */
                }
            },
            {
                name: "computed static accessor properties",
                exec: function() {
                    /*
        var garply = "foo", grault = "bar", baz = false;
        class C {
          static get [garply]() { return "foo"; }
          static set [grault](x) { baz = x; }
        }
        C.bar = true;
        return C.foo === "foo" && baz;
      */
                }
            },
            {
                name: "class name is lexically scoped",
                exec: function() {
                    /*
        class C {
          method() { return typeof C === "function"; }
        }
        var M = C.prototype.method;
        C = undefined;
        return C === undefined && M();
      */
                }
            },
            {
                name: "computed names, temporal dead zone",
                exec: function() {
                    /*
        try {
          var B = class C {
            [C](){}
          }
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "methods aren't enumerable",
                exec: function() {
                    /*
        class C {
          foo() {}
          static bar() {}
        }
        return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
      */
                }
            },
            {
                name: "implicit strict mode",
                exec: function() {
                    /*
        class C {
          static method() { return this === undefined; }
        }
        return (0,C.method)();
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        class C {}
        try {
          C();
        }
        catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "extends",
                exec: function() {
                    /*
        class B {}
        class C extends B {}
        return new C() instanceof B
          && B.isPrototypeOf(C);
      */
                }
            },
            {
                name: "extends expressions",
                exec: function() {
                    /*
        var B;
        class C extends (B = class {}) {}
        return new C() instanceof B
          && B.isPrototypeOf(C);
      */
                }
            },
            {
                name: "extends null",
                exec: function() {
                    /*
        class C extends null {
          constructor() { return Object.create(null); }
        }
        return Function.prototype.isPrototypeOf(C)
          && Object.getPrototypeOf(C.prototype) === null;
      */
                }
            },
            {
                name: "new.target",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "super",
        subtests: [
            {
                name: "statement in constructors",
                exec: function() {
                    /*
        var passed = false;
        class B {
          constructor(a) { passed = (a === "barbaz"); }
        }
        class C extends B {
          constructor(a) { super("bar" + a); }
        }
        new C("baz");
        return passed;
      */
                }
            },
            {
                name: "expression in constructors",
                exec: function() {
                    /*
        class B {
          constructor(a) { return ["foo" + a]; }
        }
        class C extends B {
          constructor(a) { return super("bar" + a); }
        }
        return new C("baz")[0] === "foobarbaz";
      */
                }
            },
            {
                name: "in methods, property access",
                exec: function() {
                    /*
        class B {}
        B.prototype.qux = "foo";
        B.prototype.corge = "baz";
        class C extends B {
          quux(a) { return super.qux + a + super["corge"]; }
        }
        C.prototype.qux = "garply";
        return new C().quux("bar") === "foobarbaz";
      */
                }
            },
            {
                name: "in methods, method calls",
                exec: function() {
                    /*
        class B {
          qux(a) { return "foo" + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        return new C().qux("baz") === "foobarbaz";
      */
                }
            },
            {
                name: 'method calls use correct "this" binding',
                exec: function() {
                    /*
        class B {
          qux(a) { return this.foo + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        var obj = new C();
        obj.foo = "foo";
        return obj.qux("baz") === "foobarbaz";
      */
                }
            },
            {
                name: 'constructor calls use correct "new.target" binding',
                exec: function() {
                    /*
        var passed;
        class B {
          constructor() { passed = (new.target === C); }
        }
        class C extends B {
          constructor() { super(); }
        }
        new C();
        return passed;
      */
                }
            },
            {
                name: "is statically bound",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "super() invokes the correct constructor",
                exec: function() {
                    /*
        // checks that super() is *not* a synonym of super.constructor()
        var passed;
        class B {
            constructor() {
                passed = true;
            }
        };
        B.prototype.constructor = function () {
            passed = false;
        };
        class C extends B { };
        new C;
        return passed;
      */
                }
            }
        ]
    },
    {
        name: "generators",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "generator function expressions",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: 'correct "this" binding',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: 'can\'t use "this" with new',
                exec: function() {
                    /*
        function * generator(){
          yield this.x; yield this.y;
        };
        try {
          (new generator()).next();
        }
        catch (e) {
          return true;
        }
      */
                }
            },
            {
                name: "sending",
                exec: function() {
                    /*
        var sent;
        function * generator(){
          sent = [yield 5, yield 6];
        };
        var iterator = generator();
        iterator.next();
        iterator.next("foo");
        iterator.next("bar");
        return sent[0] === "foo" && sent[1] === "bar";
      */
                }
            },
            {
                name: "%GeneratorPrototype%",
                exec: function() {
                    /*
        function * generatorFn(){}
        var ownProto = Object.getPrototypeOf(generatorFn());
        var passed = ownProto === generatorFn.prototype;

        var sharedProto = Object.getPrototypeOf(ownProto);
        passed &= sharedProto !== Object.prototype &&
          sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
          sharedProto.hasOwnProperty('next');

        return passed;
      */
                }
            },
            {
                name: "%GeneratorPrototype% prototype chain",
                exec: function() {
                    /*
        function * generatorFn(){}
        var g = generatorFn();
        var ownProto = Object.getPrototypeOf(g);
        var passed = ownProto === generatorFn.prototype;

        var sharedProto = Object.getPrototypeOf(ownProto);
        var iterProto = Object.getPrototypeOf(sharedProto);

        passed &= iterProto.hasOwnProperty(Symbol.iterator) &&
          !sharedProto     .hasOwnProperty(Symbol.iterator) &&
          !ownProto        .hasOwnProperty(Symbol.iterator) &&
          g[Symbol.iterator]() === g;

        return passed;
      */
                }
            },
            {
                name: "%GeneratorPrototype%.constructor",
                exec: function() {
                    /*
        function * g (){}
        var iterator = new g.constructor("a","b","c","yield a; yield b; yield c;")(5,6,7);
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 7 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;

        passed &= g.constructor === (function*(){}).constructor;
        return passed;
      */
                }
            },
            {
                name: "%GeneratorPrototype%.throw",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "%GeneratorPrototype%.return",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield operator precedence",
                exec: function() {
                    /*
        var passed;
        function * generator(){
          passed = yield 0 ? true : false;
        };
        var iterator = generator();
        iterator.next();
        iterator.next(true);
        return passed;
      */
                }
            },
            {
                name: "yield *, arrays",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, sparse arrays",
                exec: function() {
                    /*
        var iterator = (function * generator() {
          yield * [,,];
        }());
        var item = iterator.next();
        var passed = item.value === undefined && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
      */
                }
            },
            {
                name: "yield *, strings",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, astral plane strings",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, generator instances",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, generic iterables",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, instances of iterables",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield * on non-iterables is a runtime error",
                exec: function() {
                    /*
        var iterator = (function * generator() {
          yield * [5];
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        iterator = (function * generator() {
          yield * 5;
        }());
        try {
          iterator.next();
        } catch (e) {
          return passed;
        }
      */
                }
            },
            {
                name: "yield *, iterator closing",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "yield *, iterator closing via throw()",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "shorthand generator methods",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "string-keyed shorthand generator methods",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "computed shorthand generators",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "shorthand generator methods, classes",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "computed shorthand generators, classes",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "shorthand generators can't be constructors",
                exec: function() {
                    /*
        class C {
          * generator() {
            yield 5; yield 6;
          }
        };
        try {
          Function("class D { * constructor() { return {}; } }");
        } catch(e) {
          return true;
        }
      */
                }
            }
        ]
    },
    {
        name: "typed arrays",
        subtests: [
            {
                name: "Int8Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Int8Array(buffer);         view[0] = 0x80;
        return view[0] === -0x80;
      */
                }
            },
            {
                name: "Uint8Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Uint8Array(buffer);        view[0] = 0x100;
        return view[0] === 0;
      */
                }
            },
            {
                name: "Uint8ClampedArray",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
        return view[0] === 0xFF;
      */
                }
            },
            {
                name: "Int16Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Int16Array(buffer);        view[0] = 0x8000;
        return view[0] === -0x8000;
      */
                }
            },
            {
                name: "Uint16Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Uint16Array(buffer);       view[0] = 0x10000;
        return view[0] === 0;
      */
                }
            },
            {
                name: "Int32Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Int32Array(buffer);        view[0] = 0x80000000;
        return view[0] === -0x80000000;
      */
                }
            },
            {
                name: "Uint32Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Uint32Array(buffer);       view[0] = 0x100000000;
        return view[0] === 0;
      */
                }
            },
            {
                name: "Float32Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Float32Array(buffer);       view[0] = 0.1;
        return view[0] === 0.10000000149011612;
      */
                }
            },
            {
                name: "Float64Array",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new Float64Array(buffer);       view[0] = 0.1;
        return view[0] === 0.1;
      */
                }
            },
            {
                name: "DataView (Int8)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt8 (0, 0x80);
        return view.getInt8(0) === -0x80;
      */
                }
            },
            {
                name: "DataView (Uint8)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint8(0, 0x100);
        return view.getUint8(0) === 0;
      */
                }
            },
            {
                name: "DataView (Int16)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt16(0, 0x8000);
        return view.getInt16(0) === -0x8000;
      */
                }
            },
            {
                name: "DataView (Uint16)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint16(0, 0x10000);
        return view.getUint16(0) === 0;
      */
                }
            },
            {
                name: "DataView (Int32)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setInt32(0, 0x80000000);
        return view.getInt32(0) === -0x80000000;
      */
                }
            },
            {
                name: "DataView (Uint32)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setUint32(0, 0x100000000);
        return view.getUint32(0) === 0;
      */
                }
            },
            {
                name: "DataView (Float32)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setFloat32(0, 0.1);
        return view.getFloat32(0) === 0.10000000149011612;
      */
                }
            },
            {
                name: "DataView (Float64)",
                exec: function() {
                    /*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setFloat64(0, 0.1);
        return view.getFloat64(0) === 0.1;
      */
                }
            },
            {
                name: "ArrayBuffer[Symbol.species]",
                exec: function() {
                    /*
        return typeof ArrayBuffer[Symbol.species] === 'function';
      */
                }
            },
            {
                name: "constructors require new",
                exec: function() {
                    /*
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
        return constructors.every(function (constructor) {
          try {
            if (constructor in global) {
              global[constructor](constructor === "ArrayBuffer" ? 64 : buffer);
            }
            return false;
          } catch(e) {
            return true;
          }
        });
      */
                }
            },
            {
                name: "constructors accept generic iterables",
                exec: function() {
                    /*
        var constructors = [
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
        for(var i = 0; i < constructors.length; i++){
          var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
          if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
        }
        return true;
      */
                }
            },
            {
                name: "correct prototype chains",
                exec: function() {
                    /*
        var constructors = [
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
        var constructor = Object.getPrototypeOf(Int8Array);
        var prototype = Object.getPrototypeOf(Int8Array.prototype);
        if(constructor === Function.prototype || prototype === Object.prototype)return false;
        for(var i = 0; i < constructors.length; i+=1) {
          if (!(constructors[i] in global
              && Object.getPrototypeOf(global[constructors[i]]) === constructor
              && Object.getPrototypeOf(global[constructors[i]].prototype) === prototype
              && Object.getOwnPropertyNames(global[constructors[i]].prototype).sort() + ''
                === "BYTES_PER_ELEMENT,constructor")) {
            return false;
          }
        }
        return true;
      */
                }
            },
            {
                name: "%TypedArray%.from",
                exec: function() {
                    /*
return typeof Int8Array.from === "function" &&
    typeof Uint8Array.from === "function" &&
    typeof Uint8ClampedArray.from === "function" &&
    typeof Int16Array.from === "function" &&
    typeof Uint16Array.from === "function" &&
    typeof Int32Array.from === "function" &&
    typeof Uint32Array.from === "function" &&
    typeof Float32Array.from === "function" &&
    typeof Float64Array.from === "function";
*/
                }
            },
            {
                name: "%TypedArray%.of",
                exec: function() {
                    /*
return typeof Int8Array.of === "function" &&
    typeof Uint8Array.of === "function" &&
    typeof Uint8ClampedArray.of === "function" &&
    typeof Int16Array.of === "function" &&
    typeof Uint16Array.of === "function" &&
    typeof Int32Array.of === "function" &&
    typeof Uint32Array.of === "function" &&
    typeof Float32Array.of === "function" &&
    typeof Float64Array.of === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.subarray",
                exec: function() {
                    /*
return typeof Int8Array.prototype.subarray === "function" &&
    typeof Uint8Array.prototype.subarray === "function" &&
    typeof Uint8ClampedArray.prototype.subarray === "function" &&
    typeof Int16Array.prototype.subarray === "function" &&
    typeof Uint16Array.prototype.subarray === "function" &&
    typeof Int32Array.prototype.subarray === "function" &&
    typeof Uint32Array.prototype.subarray === "function" &&
    typeof Float32Array.prototype.subarray === "function" &&
    typeof Float64Array.prototype.subarray === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.join",
                exec: function() {
                    /*
return typeof Int8Array.prototype.join === "function" &&
    typeof Uint8Array.prototype.join === "function" &&
    typeof Uint8ClampedArray.prototype.join === "function" &&
    typeof Int16Array.prototype.join === "function" &&
    typeof Uint16Array.prototype.join === "function" &&
    typeof Int32Array.prototype.join === "function" &&
    typeof Uint32Array.prototype.join === "function" &&
    typeof Float32Array.prototype.join === "function" &&
    typeof Float64Array.prototype.join === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.indexOf",
                exec: function() {
                    /*
return typeof Int8Array.prototype.indexOf === "function" &&
    typeof Uint8Array.prototype.indexOf === "function" &&
    typeof Uint8ClampedArray.prototype.indexOf === "function" &&
    typeof Int16Array.prototype.indexOf === "function" &&
    typeof Uint16Array.prototype.indexOf === "function" &&
    typeof Int32Array.prototype.indexOf === "function" &&
    typeof Uint32Array.prototype.indexOf === "function" &&
    typeof Float32Array.prototype.indexOf === "function" &&
    typeof Float64Array.prototype.indexOf === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.lastIndexOf",
                exec: function() {
                    /*
return typeof Int8Array.prototype.lastIndexOf === "function" &&
    typeof Uint8Array.prototype.lastIndexOf === "function" &&
    typeof Uint8ClampedArray.prototype.lastIndexOf === "function" &&
    typeof Int16Array.prototype.lastIndexOf === "function" &&
    typeof Uint16Array.prototype.lastIndexOf === "function" &&
    typeof Int32Array.prototype.lastIndexOf === "function" &&
    typeof Uint32Array.prototype.lastIndexOf === "function" &&
    typeof Float32Array.prototype.lastIndexOf === "function" &&
    typeof Float64Array.prototype.lastIndexOf === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.slice",
                exec: function() {
                    /*
return typeof Int8Array.prototype.slice === "function" &&
    typeof Uint8Array.prototype.slice === "function" &&
    typeof Uint8ClampedArray.prototype.slice === "function" &&
    typeof Int16Array.prototype.slice === "function" &&
    typeof Uint16Array.prototype.slice === "function" &&
    typeof Int32Array.prototype.slice === "function" &&
    typeof Uint32Array.prototype.slice === "function" &&
    typeof Float32Array.prototype.slice === "function" &&
    typeof Float64Array.prototype.slice === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.every",
                exec: function() {
                    /*
return typeof Int8Array.prototype.every === "function" &&
    typeof Uint8Array.prototype.every === "function" &&
    typeof Uint8ClampedArray.prototype.every === "function" &&
    typeof Int16Array.prototype.every === "function" &&
    typeof Uint16Array.prototype.every === "function" &&
    typeof Int32Array.prototype.every === "function" &&
    typeof Uint32Array.prototype.every === "function" &&
    typeof Float32Array.prototype.every === "function" &&
    typeof Float64Array.prototype.every === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.filter",
                exec: function() {
                    /*
return typeof Int8Array.prototype.filter === "function" &&
    typeof Uint8Array.prototype.filter === "function" &&
    typeof Uint8ClampedArray.prototype.filter === "function" &&
    typeof Int16Array.prototype.filter === "function" &&
    typeof Uint16Array.prototype.filter === "function" &&
    typeof Int32Array.prototype.filter === "function" &&
    typeof Uint32Array.prototype.filter === "function" &&
    typeof Float32Array.prototype.filter === "function" &&
    typeof Float64Array.prototype.filter === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.forEach",
                exec: function() {
                    /*
return typeof Int8Array.prototype.forEach === "function" &&
    typeof Uint8Array.prototype.forEach === "function" &&
    typeof Uint8ClampedArray.prototype.forEach === "function" &&
    typeof Int16Array.prototype.forEach === "function" &&
    typeof Uint16Array.prototype.forEach === "function" &&
    typeof Int32Array.prototype.forEach === "function" &&
    typeof Uint32Array.prototype.forEach === "function" &&
    typeof Float32Array.prototype.forEach === "function" &&
    typeof Float64Array.prototype.forEach === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.map",
                exec: function() {
                    /*
return typeof Int8Array.prototype.map === "function" &&
    typeof Uint8Array.prototype.map === "function" &&
    typeof Uint8ClampedArray.prototype.map === "function" &&
    typeof Int16Array.prototype.map === "function" &&
    typeof Uint16Array.prototype.map === "function" &&
    typeof Int32Array.prototype.map === "function" &&
    typeof Uint32Array.prototype.map === "function" &&
    typeof Float32Array.prototype.map === "function" &&
    typeof Float64Array.prototype.map === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.reduce",
                exec: function() {
                    /*
return typeof Int8Array.prototype.reduce === "function" &&
    typeof Uint8Array.prototype.reduce === "function" &&
    typeof Uint8ClampedArray.prototype.reduce === "function" &&
    typeof Int16Array.prototype.reduce === "function" &&
    typeof Uint16Array.prototype.reduce === "function" &&
    typeof Int32Array.prototype.reduce === "function" &&
    typeof Uint32Array.prototype.reduce === "function" &&
    typeof Float32Array.prototype.reduce === "function" &&
    typeof Float64Array.prototype.reduce === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.reduceRight",
                exec: function() {
                    /*
return typeof Int8Array.prototype.reduceRight === "function" &&
    typeof Uint8Array.prototype.reduceRight === "function" &&
    typeof Uint8ClampedArray.prototype.reduceRight === "function" &&
    typeof Int16Array.prototype.reduceRight === "function" &&
    typeof Uint16Array.prototype.reduceRight === "function" &&
    typeof Int32Array.prototype.reduceRight === "function" &&
    typeof Uint32Array.prototype.reduceRight === "function" &&
    typeof Float32Array.prototype.reduceRight === "function" &&
    typeof Float64Array.prototype.reduceRight === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.reverse",
                exec: function() {
                    /*
return typeof Int8Array.prototype.reverse === "function" &&
    typeof Uint8Array.prototype.reverse === "function" &&
    typeof Uint8ClampedArray.prototype.reverse === "function" &&
    typeof Int16Array.prototype.reverse === "function" &&
    typeof Uint16Array.prototype.reverse === "function" &&
    typeof Int32Array.prototype.reverse === "function" &&
    typeof Uint32Array.prototype.reverse === "function" &&
    typeof Float32Array.prototype.reverse === "function" &&
    typeof Float64Array.prototype.reverse === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.some",
                exec: function() {
                    /*
return typeof Int8Array.prototype.some === "function" &&
    typeof Uint8Array.prototype.some === "function" &&
    typeof Uint8ClampedArray.prototype.some === "function" &&
    typeof Int16Array.prototype.some === "function" &&
    typeof Uint16Array.prototype.some === "function" &&
    typeof Int32Array.prototype.some === "function" &&
    typeof Uint32Array.prototype.some === "function" &&
    typeof Float32Array.prototype.some === "function" &&
    typeof Float64Array.prototype.some === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.sort",
                exec: function() {
                    /*
return typeof Int8Array.prototype.sort === "function" &&
    typeof Uint8Array.prototype.sort === "function" &&
    typeof Uint8ClampedArray.prototype.sort === "function" &&
    typeof Int16Array.prototype.sort === "function" &&
    typeof Uint16Array.prototype.sort === "function" &&
    typeof Int32Array.prototype.sort === "function" &&
    typeof Uint32Array.prototype.sort === "function" &&
    typeof Float32Array.prototype.sort === "function" &&
    typeof Float64Array.prototype.sort === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.copyWithin",
                exec: function() {
                    /*
return typeof Int8Array.prototype.copyWithin === "function" &&
    typeof Uint8Array.prototype.copyWithin === "function" &&
    typeof Uint8ClampedArray.prototype.copyWithin === "function" &&
    typeof Int16Array.prototype.copyWithin === "function" &&
    typeof Uint16Array.prototype.copyWithin === "function" &&
    typeof Int32Array.prototype.copyWithin === "function" &&
    typeof Uint32Array.prototype.copyWithin === "function" &&
    typeof Float32Array.prototype.copyWithin === "function" &&
    typeof Float64Array.prototype.copyWithin === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.find",
                exec: function() {
                    /*
return typeof Int8Array.prototype.find === "function" &&
    typeof Uint8Array.prototype.find === "function" &&
    typeof Uint8ClampedArray.prototype.find === "function" &&
    typeof Int16Array.prototype.find === "function" &&
    typeof Uint16Array.prototype.find === "function" &&
    typeof Int32Array.prototype.find === "function" &&
    typeof Uint32Array.prototype.find === "function" &&
    typeof Float32Array.prototype.find === "function" &&
    typeof Float64Array.prototype.find === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.findIndex",
                exec: function() {
                    /*
return typeof Int8Array.prototype.findIndex === "function" &&
    typeof Uint8Array.prototype.findIndex === "function" &&
    typeof Uint8ClampedArray.prototype.findIndex === "function" &&
    typeof Int16Array.prototype.findIndex === "function" &&
    typeof Uint16Array.prototype.findIndex === "function" &&
    typeof Int32Array.prototype.findIndex === "function" &&
    typeof Uint32Array.prototype.findIndex === "function" &&
    typeof Float32Array.prototype.findIndex === "function" &&
    typeof Float64Array.prototype.findIndex === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.fill",
                exec: function() {
                    /*
return typeof Int8Array.prototype.fill === "function" &&
    typeof Uint8Array.prototype.fill === "function" &&
    typeof Uint8ClampedArray.prototype.fill === "function" &&
    typeof Int16Array.prototype.fill === "function" &&
    typeof Uint16Array.prototype.fill === "function" &&
    typeof Int32Array.prototype.fill === "function" &&
    typeof Uint32Array.prototype.fill === "function" &&
    typeof Float32Array.prototype.fill === "function" &&
    typeof Float64Array.prototype.fill === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.keys",
                exec: function() {
                    /*
return typeof Int8Array.prototype.keys === "function" &&
    typeof Uint8Array.prototype.keys === "function" &&
    typeof Uint8ClampedArray.prototype.keys === "function" &&
    typeof Int16Array.prototype.keys === "function" &&
    typeof Uint16Array.prototype.keys === "function" &&
    typeof Int32Array.prototype.keys === "function" &&
    typeof Uint32Array.prototype.keys === "function" &&
    typeof Float32Array.prototype.keys === "function" &&
    typeof Float64Array.prototype.keys === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.values",
                exec: function() {
                    /*
return typeof Int8Array.prototype.values === "function" &&
    typeof Uint8Array.prototype.values === "function" &&
    typeof Uint8ClampedArray.prototype.values === "function" &&
    typeof Int16Array.prototype.values === "function" &&
    typeof Uint16Array.prototype.values === "function" &&
    typeof Int32Array.prototype.values === "function" &&
    typeof Uint32Array.prototype.values === "function" &&
    typeof Float32Array.prototype.values === "function" &&
    typeof Float64Array.prototype.values === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype.entries",
                exec: function() {
                    /*
return typeof Int8Array.prototype.entries === "function" &&
    typeof Uint8Array.prototype.entries === "function" &&
    typeof Uint8ClampedArray.prototype.entries === "function" &&
    typeof Int16Array.prototype.entries === "function" &&
    typeof Uint16Array.prototype.entries === "function" &&
    typeof Int32Array.prototype.entries === "function" &&
    typeof Uint32Array.prototype.entries === "function" &&
    typeof Float32Array.prototype.entries === "function" &&
    typeof Float64Array.prototype.entries === "function";
*/
                }
            },
            {
                name: "%TypedArray%.prototype[Symbol.iterator]",
                exec: function() {
                    /*
return typeof Int8Array.prototype[Symbol.iterator] === "function" &&
    typeof Uint8Array.prototype[Symbol.iterator] === "function" &&
    typeof Uint8ClampedArray.prototype[Symbol.iterator] === "function" &&
    typeof Int16Array.prototype[Symbol.iterator] === "function" &&
    typeof Uint16Array.prototype[Symbol.iterator] === "function" &&
    typeof Int32Array.prototype[Symbol.iterator] === "function" &&
    typeof Uint32Array.prototype[Symbol.iterator] === "function" &&
    typeof Float32Array.prototype[Symbol.iterator] === "function" &&
    typeof Float64Array.prototype[Symbol.iterator] === "function";
*/
                }
            },
            {
                name: "%TypedArray%[Symbol.species]",
                exec: function() {
                    /*
return typeof Int8Array[Symbol.species] === "function" &&
    typeof Uint8Array[Symbol.species] === "function" &&
    typeof Uint8ClampedArray[Symbol.species] === "function" &&
    typeof Int16Array[Symbol.species] === "function" &&
    typeof Uint16Array[Symbol.species] === "function" &&
    typeof Int32Array[Symbol.species] === "function" &&
    typeof Uint32Array[Symbol.species] === "function" &&
    typeof Float32Array[Symbol.species] === "function" &&
    typeof Float64Array[Symbol.species] === "function";
*/
                }
            }
        ]
    },
    {
        name: "Map",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var key = {};
        var map = new Map();

        map.set(key, 123);

        return map.has(key) && map.get(key) === 123;
      */
                }
            },
            {
                name: "constructor arguments",
                exec: function() {
                    /*
        var key1 = {};
        var key2 = {};
        var map = new Map([[key1, 123], [key2, 456]]);

        return map.has(key1) && map.get(key1) === 123 &&
               map.has(key2) && map.get(key2) === 456;
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new Map();
        try {
          Map();
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "constructor accepts null",
                exec: function() {
                    /*
        new Map(null);
        return true;
      */
                }
            },
            {
                name: "constructor invokes set",
                exec: function() {
                    /*
        var passed = false;
        var _set = Map.prototype.set;

        Map.prototype.set = function(k, v) {
          passed = true;
        };

        new Map([ [1, 2] ]);
        Map.prototype.set = _set;

        return passed;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new Map(iter);
        } catch(e){}
        return closed;
      */
                }
            },
            {
                name: "Map.prototype.set returns this",
                exec: function() {
                    /*
        var map = new Map();
        return map.set(0, 0) === map;
      */
                }
            },
            {
                name: "-0 key converts to +0",
                exec: function() {
                    /*
        var map = new Map();
        map.set(-0, "foo");
        var k;
        map.forEach(function (value, key) {
          k = 1 / key;
        });
        return k === Infinity && map.get(+0) == "foo";
      */
                }
            },
            {
                name: "Map.prototype.size",
                exec: function() {
                    /*
        var key = {};
        var map = new Map();

        map.set(key, 123);

        return map.size === 1;
      */
                }
            },
            {
                name: "Map.prototype.delete",
                exec: function() {
                    /*
        return typeof Map.prototype.delete === "function";
      */
                }
            },
            {
                name: "Map.prototype.clear",
                exec: function() {
                    /*
        return typeof Map.prototype.clear === "function";
      */
                }
            },
            {
                name: "Map.prototype.forEach",
                exec: function() {
                    /*
        return typeof Map.prototype.forEach === "function";
      */
                }
            },
            {
                name: "Map.prototype.keys",
                exec: function() {
                    /*
        return typeof Map.prototype.keys === "function";
      */
                }
            },
            {
                name: "Map.prototype.values",
                exec: function() {
                    /*
        return typeof Map.prototype.values === "function";
      */
                }
            },
            {
                name: "Map.prototype.entries",
                exec: function() {
                    /*
        return typeof Map.prototype.entries === "function";
      */
                }
            },
            {
                name: "Map.prototype[Symbol.iterator]",
                exec: function() {
                    /*
        return typeof Map.prototype[Symbol.iterator] === "function";
      */
                }
            },
            {
                name: "Map.prototype isn't an instance",
                exec: function() {
                    /*
        new Map();
        var obj = {};
        try {
          Map.prototype.has(obj);
        }
        catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "Map iterator prototype chain",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "Map[Symbol.species]",
                exec: function() {
                    /*
        var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
        return 'get' in prop && Map[Symbol.species] === Map;
      */
                }
            }
        ]
    },
    {
        name: "Set",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var obj = {};
        var set = new Set();

        set.add(123);
        set.add(123);

        return set.has(123);
      */
                }
            },
            {
                name: "constructor arguments",
                exec: function() {
                    /*
        var obj1 = {};
        var obj2 = {};
        var set = new Set([obj1, obj2]);

        return set.has(obj1) && set.has(obj2);
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new Set();
        try {
          Set();
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "constructor accepts null",
                exec: function() {
                    /*
        new Set(null);
        return true;
      */
                }
            },
            {
                name: "constructor invokes add",
                exec: function() {
                    /*
        var passed = false;
        var _add = Set.prototype.add;

        Set.prototype.add = function(v) {
          passed = true;
        };

        new Set([1]);
        Set.prototype.add = _add;

        return passed;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "Set.prototype.add returns this",
                exec: function() {
                    /*
        var set = new Set();
        return set.add(0) === set;
      */
                }
            },
            {
                name: "-0 key converts to +0",
                exec: function() {
                    /*
        var set = new Set();
        set.add(-0);
        var k;
        set.forEach(function (value) {
          k = 1 / value;
        });
        return k === Infinity && set.has(+0);
      */
                }
            },
            {
                name: "Set.prototype.size",
                exec: function() {
                    /*
        var obj = {};
        var set = new Set();

        set.add(123);
        set.add(123);
        set.add(456);

        return set.size === 2;
      */
                }
            },
            {
                name: "Set.prototype.delete",
                exec: function() {
                    /*
        return typeof Set.prototype.delete === "function";
      */
                }
            },
            {
                name: "Set.prototype.clear",
                exec: function() {
                    /*
        return typeof Set.prototype.clear === "function";
      */
                }
            },
            {
                name: "Set.prototype.forEach",
                exec: function() {
                    /*
        return typeof Set.prototype.forEach === "function";
      */
                }
            },
            {
                name: "Set.prototype.keys",
                exec: function() {
                    /*
        return typeof Set.prototype.keys === "function";
      */
                }
            },
            {
                name: "Set.prototype.values",
                exec: function() {
                    /*
        return typeof Set.prototype.values === "function";
      */
                }
            },
            {
                name: "Set.prototype.entries",
                exec: function() {
                    /*
        return typeof Set.prototype.entries === "function";
      */
                }
            },
            {
                name: "Set.prototype[Symbol.iterator]",
                exec: function() {
                    /*
        return typeof Set.prototype[Symbol.iterator] === "function";
      */
                }
            },
            {
                name: "Set.prototype isn't an instance",
                exec: function() {
                    /*
        new Set();
        var obj = {};
        try {
          Set.prototype.has(obj);
        }
        catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "Set iterator prototype chain",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "Set[Symbol.species]",
                exec: function() {
                    /*
        var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
        return 'get' in prop && Set[Symbol.species] === Set;
      */
                }
            }
        ]
    },
    {
        name: "WeakMap",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var key = {};
        var weakmap = new WeakMap();

        weakmap.set(key, 123);

        return weakmap.has(key) && weakmap.get(key) === 123;
      */
                }
            },
            {
                name: "constructor arguments",
                exec: function() {
                    /*
        var key1 = {};
        var key2 = {};
        var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

        return weakmap.has(key1) && weakmap.get(key1) === 123 &&
               weakmap.has(key2) && weakmap.get(key2) === 456;
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new WeakMap();
        try {
          WeakMap();
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "constructor accepts null",
                exec: function() {
                    /*
        new WeakMap(null);
        return true;
      */
                }
            },
            {
                name: "constructor invokes set",
                exec: function() {
                    /*
        var passed = false;
        var _set = WeakMap.prototype.set;

        WeakMap.prototype.set = function(k, v) {
          passed = true;
        };

        new WeakMap([ [{ }, 42] ]);
        WeakMap.prototype.set = _set;

        return passed;
      */
                }
            },
            {
                name: "frozen objects as keys",
                exec: function() {
                    /*
        var f = Object.freeze({});
        var m = new WeakMap;
        m.set(f, 42);
        return m.get(f) === 42;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new WeakMap(iter);
        } catch(e){}
        return closed;
      */
                }
            },
            {
                name: "WeakMap.prototype.set returns this",
                exec: function() {
                    /*
        var weakmap = new WeakMap();
        var key = {};
        return weakmap.set(key, 0) === weakmap;
      */
                }
            },
            {
                name: "WeakMap.prototype.delete",
                exec: function() {
                    /*
        return typeof WeakMap.prototype.delete === "function";
      */
                }
            },
            {
                name: "no WeakMap.prototype.clear method",
                exec: function() {
                    /*
        if (!("clear" in WeakMap.prototype)) {
          return true;
        }
        var m = new WeakMap();
        var key = {};
        m.set(key, 2);
        m.clear();
        return m.has(key);
      */
                }
            },
            {
                name: ".has, .get and .delete methods accept primitives",
                exec: function() {
                    /*
        var m = new WeakMap;
        return m.has(1) === false
          && m.get(1) === undefined
          && m.delete(1) === false;
      */
                }
            },
            {
                name: "WeakMap.prototype isn't an instance",
                exec: function() {
                    /*
        new WeakMap();
        var obj = {};
        try {
          WeakMap.prototype.has(obj);
        }
        catch(e) {
          return true;
        }
      */
                }
            }
        ]
    },
    {
        name: "WeakSet",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var obj1 = {};
        var weakset = new WeakSet();

        weakset.add(obj1);
        weakset.add(obj1);

        return weakset.has(obj1);
      */
                }
            },
            {
                name: "constructor arguments",
                exec: function() {
                    /*
        var obj1 = {}, obj2 = {};
        var weakset = new WeakSet([obj1, obj2]);

        return weakset.has(obj1) && weakset.has(obj2);
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new WeakSet();
        try {
          WeakSet();
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "constructor accepts null",
                exec: function() {
                    /*
        new WeakSet(null);
        return true;
      */
                }
            },
            {
                name: "constructor invokes add",
                exec: function() {
                    /*
        var passed = false;
        var _add = WeakSet.prototype.add;

        WeakSet.prototype.add = function(v) {
          passed = true;
        };

        new WeakSet([ { } ]);
        WeakSet.prototype.add = _add;

        return passed;
      */
                }
            },
            {
                name: "iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          new WeakSet(iter);
        } catch(e){}
        return closed;
      */
                }
            },
            {
                name: "WeakSet.prototype.add returns this",
                exec: function() {
                    /*
        var weakset = new WeakSet();
        var obj = {};
        return weakset.add(obj) === weakset;
      */
                }
            },
            {
                name: "WeakSet.prototype.delete",
                exec: function() {
                    /*
        return typeof WeakSet.prototype.delete === "function";
      */
                }
            },
            {
                name: "no WeakSet.prototype.clear method",
                exec: function() {
                    /*
        if (!("clear" in WeakSet.prototype)) {
          return true;
        }
        var s = new WeakSet();
        var key = {};
        s.add(key);
        s.clear();
        return s.has(key);
      */
                }
            },
            {
                name: ".has and .delete methods accept primitives",
                exec: function() {
                    /*
        var s = new WeakSet;
        return s.has(1) === false
          && s.delete(1) === false;
      */
                }
            },
            {
                name: "WeakSet.prototype isn't an instance",
                exec: function() {
                    /*
        new WeakSet();
        var obj = {};
        try {
          WeakSet.prototype.has(obj);
        }
        catch(e) {
          return true;
        }
      */
                }
            }
        ]
    },
    {
        name: "Proxy",
        subtests: [
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new Proxy({}, {});
        try {
          Proxy({}, {});
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: 'no "prototype" property',
                exec: function() {
                    /*
        new Proxy({}, {});
        return !Proxy.hasOwnProperty('prototype');
      */
                }
            },
            {
                name: '"get" handler',
                exec: function() {
                    /*
        var proxied = { };
        var proxy = new Proxy(proxied, {
          get: function (t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
          }
        });
        return proxy.foo === 5;
      */
                }
            },
            {
                name: '"get" handler, instances of proxies',
                exec: function() {
                    /*
        var proxied = { };
        var proxy = Object.create(new Proxy(proxied, {
          get: function (t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
          }
        }));
        return proxy.foo === 5;
      */
                }
            },
            {
                name: '"get" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        var proxied = { };
        var proxy = new Proxy(proxied, {
          get: function () {
            passed = true;
            return 4;
          }
        });
        // The value reported for a property must be the same as the value of the corresponding
        // target object property if the target object property is a non-writable,
        // non-configurable own data property.
        Object.defineProperty(proxied, "foo", { value: 5, enumerable: true });
        try {
          proxy.foo;
          return false;
        }
        catch(e) {}
        // The value reported for a property must be undefined if the corresponding target
        // object property is a non-configurable own accessor property that has undefined
        // as its [[Get]] attribute.
        Object.defineProperty(proxied, "bar",
          { set: function(){}, enumerable: true });
        try {
          proxy.bar;
          return false;
        }
        catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"set" handler',
                exec: function() {
                    /*
        var proxied = { };
        var passed = false;
        var proxy = new Proxy(proxied, {
          set: function (t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
          }
        });
        proxy.foo = "bar";
        return passed;
      */
                }
            },
            {
                name: '"set" handler, instances of proxies',
                exec: function() {
                    /*
        var proxied = { };
        var passed = false;
        var proxy = Object.create(new Proxy(proxied, {
          set: function (t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
          }
        }));
        proxy.foo = "bar";
        return passed;
      */
                }
            },
            {
                name: '"set" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // Cannot change the value of a property to be different from the value of
        // the corresponding target object if the corresponding target object
        // property is a non-writable, non-configurable own data property.
        var proxied = {};
        var proxy = new Proxy(proxied, {
          set: function () {
            passed = true;
            return true;
          }
        });
        Object.defineProperty(proxied, "foo", { value: 2, enumerable: true });
        proxy.foo = 2;
        try {
          proxy.foo = 4;
          return false;
        } catch(e) {}
        // Cannot set the value of a property if the corresponding target
        // object property is a non-configurable own accessor property
        // that has undefined as its [[Set]] attribute.
        Object.defineProperty(proxied, "bar",
          { get: function(){}, enumerable: true });
        try {
          proxy.bar = 2;
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"has" handler',
                exec: function() {
                    /*
        var proxied = {};
        var passed = false;
        "foo" in new Proxy(proxied, {
          has: function (t, k) {
            passed = t === proxied && k === "foo";
          }
        });
        return passed;
      */
                }
            },
            {
                name: '"has" handler, instances of proxies',
                exec: function() {
                    /*
        var proxied = {};
        var passed = false;
        "foo" in Object.create(new Proxy(proxied, {
          has: function (t, k) {
            passed = t === proxied && k === "foo";
          }
        }));
        return passed;
      */
                }
            },
            {
                name: '"has" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // A property cannot be reported as non-existent, if it exists as a
        // non-configurable own property of the target object.
        var proxied = {};
        var proxy = new Proxy(proxied, {
          has: function () {
            passed = true;
            return false;
          }
        });
        Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
        try {
          'foo' in proxy;
          return false;
        } catch(e) {}
        // A property cannot be reported as non-existent, if it exists as an
        // own property of the target object and the target object is not extensible.
        proxied.bar = 2;
        Object.preventExtensions(proxied);
        try {
          'bar' in proxy;
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"deleteProperty" handler',
                exec: function() {
                    /*
        var proxied = {};
        var passed = false;
        delete new Proxy(proxied, {
          deleteProperty: function (t, k) {
            passed = t === proxied && k === "foo";
          }
        }).foo;
        return passed;
      */
                }
            },
            {
                name: '"deleteProperty" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // A property cannot be reported as deleted, if it exists as a non-configurable
        // own property of the target object.
        var proxied = {};
        Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
        try {
          delete new Proxy(proxied, {
            deleteProperty: function () {
              passed = true;
              return true;
            }
          }).foo;
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"getOwnPropertyDescriptor" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"getOwnPropertyDescriptor" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // A property cannot be reported as non-existent, if it exists as a non-configurable
        // own property of the target object.
        var proxied = {};
        var proxy = new Proxy(proxied, {
          getOwnPropertyDescriptor: function () {
            passed = true;
            return undefined;
          }
        });
        Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
        try {
          Object.getOwnPropertyDescriptor(proxy, "foo");
          return false;
        } catch(e) {}
        // A property cannot be reported as non-existent, if it exists as an own property
        // of the target object and the target object is not extensible.
        proxied.bar = 3;
        Object.preventExtensions(proxied);
        try {
          Object.getOwnPropertyDescriptor(proxy, "bar");
          return false;
        } catch(e) {}
        // A property cannot be reported as existent, if it does not exists as an own property
        // of the target object and the target object is not extensible.
        try {
          Object.getOwnPropertyDescriptor(new Proxy(proxied, {
            getOwnPropertyDescriptor: function() {
              return { value: 2, configurable: true, writable: true, enumerable: true };
            }}), "baz");
          return false;
        } catch(e) {}
        // A property cannot be reported as non-configurable, if it does not exists as an own
        // property of the target object or if it exists as a configurable own property of
        // the target object.
        try {
          Object.getOwnPropertyDescriptor(new Proxy({}, {
            getOwnPropertyDescriptor: function() {
              return { value: 2, configurable: false, writable: true, enumerable: true };
            }}), "baz");
          return false;
        } catch(e) {}
        try {
          Object.getOwnPropertyDescriptor(new Proxy({baz:1}, {
            getOwnPropertyDescriptor: function() {
              return { value: 1, configurable: false, writable: true, enumerable: true };
            }}), "baz");
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"defineProperty" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"defineProperty" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // A property cannot be added, if the target object is not extensible.
        var proxied = Object.preventExtensions({});
        var proxy = new Proxy(proxied, {
          defineProperty: function() {
            passed = true;
            return true;
          }
        });
        try {
          Object.defineProperty(proxy, "foo", { value: 2 });
          return false;
        } catch(e) {}
        // A property cannot be non-configurable, unless there exists a corresponding
        // non-configurable own property of the target object.
        try {
          Object.defineProperty(
            new Proxy({ bar: true }, {
              defineProperty: function () {
                return true;
              }
            }),
            "bar",
            { value: 5, configurable: false, writable: true, enumerable: true }
          );
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"getPrototypeOf" handler',
                exec: function() {
                    /*
        var proxied = {};
        var fakeProto = {};
        var proxy = new Proxy(proxied, {
          getPrototypeOf: function (t) {
            return t === proxied && fakeProto;
          }
        });
        return Object.getPrototypeOf(proxy) === fakeProto;
      */
                }
            },
            {
                name: '"getPrototypeOf" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // If the target object is not extensible, [[GetPrototypeOf]] applied to the proxy object
        // must return the same value as [[GetPrototypeOf]] applied to the proxy object's target object.
        try {
          Object.getPrototypeOf(new Proxy(Object.preventExtensions({}), {
            getPrototypeOf: function () {
              passed = true;
              return {};
            }
          }));
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"setPrototypeOf" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"setPrototypeOf" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        Object.setPrototypeOf({},{});
        // If the target object is not extensible, the argument value must be the
        // same as the result of [[GetPrototypeOf]] applied to target object.
        try {
          Object.setPrototypeOf(
            new Proxy(Object.preventExtensions({}), {
              setPrototypeOf: function () {
                passed = true;
                return true;
              }
            }),{});
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"isExtensible" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"isExtensible" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // [[IsExtensible]] applied to the proxy object must return the same value
        // as [[IsExtensible]] applied to the proxy object's target object with the same argument.
        try {
          Object.isExtensible(new Proxy({}, {
            isExtensible: function (t) {
              passed = true;
              return false;
            }
          }));
          return false;
        } catch(e) {}
        try {
          Object.isExtensible(new Proxy(Object.preventExtensions({}), {
            isExtensible: function (t) {
              return true;
            }
          }));
          return false;
        } catch(e) {}
        return true;
      */
                }
            },
            {
                name: '"preventExtensions" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"preventExtensions" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // [[PreventExtensions]] applied to the proxy object only returns true
        // if [[IsExtensible]] applied to the proxy object's target object is false.
        try {
          Object.preventExtensions(new Proxy({}, {
            preventExtensions: function () {
              passed = true;
              return true;
            }
          }));
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"ownKeys" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"ownKeys" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // The Type of each result List element is either String or Symbol.
        try {
          Object.keys(new Proxy({}, {
            ownKeys: function () {
              passed = true;
              return [2];
            }}));
          return false;
        } catch(e) {}
        // The result List must contain the keys of all non-configurable own properties of the target object.
        var proxied = {};
        Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
        try {
          Object.keys(new Proxy(proxied, {
            ownKeys: function () {
              return [];
            }}));
          return false;
        } catch(e) {}
        // If the target object is not extensible, then the result List must contain all the keys
        // of the own properties of the target object and no other values.
        try {
          Object.keys(new Proxy(Object.preventExtensions({b:1}), {
            ownKeys: function () {
              return ['a'];
            }}));
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"apply" handler',
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: '"apply" handler invariant',
                exec: function() {
                    /*
        var passed = false;
        new Proxy(function(){}, {
            apply: function () { passed = true; }
        })();
        // A Proxy exotic object only has a [[Call]] internal method if the
        // initial value of its [[ProxyTarget]] internal slot is an object
        // that has a [[Call]] internal method.
        try {
          new Proxy({}, {
            apply: function () {}
          })();
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: '"construct" handler',
                exec: function() {
                    /*
        var proxied = function(){};
        var passed = false;
        new new Proxy(proxied, {
          construct: function (t, args) {
            passed = t === proxied && args + "" === "foo,bar";
            return {};
          }
        })("foo","bar");
        return passed;
      */
                }
            },
            {
                name: '"construct" handler invariants',
                exec: function() {
                    /*
        var passed = false;
        new Proxy({},{});
        // A Proxy exotic object only has a [[Construct]] internal method if the
        // initial value of its [[ProxyTarget]] internal slot is an object
        // that has a [[Construct]] internal method.
        try {
          new new Proxy({}, {
            construct: function (t, args) {
              return {};
            }
          })();
          return false;
        } catch(e) {}
        // The result of [[Construct]] must be an Object.
        try {
          new new Proxy(function(){}, {
            construct: function (t, args) {
              passed = true;
              return 5;
            }
          })();
          return false;
        } catch(e) {}
        return passed;
      */
                }
            },
            {
                name: "Proxy.revocable",
                exec: function() {
                    /*
        var obj = Proxy.revocable({}, { get: function() { return 5; } });
        var passed = (obj.proxy.foo === 5);
        obj.revoke();
        try {
          obj.proxy.foo;
        } catch(e) {
          passed &= e instanceof TypeError;
        }
        return passed;
      */
                }
            },
            {
                name: "Array.isArray support",
                exec: function() {
                    /*
        return Array.isArray(new Proxy([], {}));
      */
                }
            },
            {
                name: "JSON.stringify support",
                exec: function() {
                    /*
        return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
      */
                }
            }
        ]
    },
    {
        name: "Reflect",
        subtests: [
            {
                name: "Reflect.get",
                exec: function() {
                    /*
        return Reflect.get({ qux: 987 }, "qux") === 987;
      */
                }
            },
            {
                name: "Reflect.set",
                exec: function() {
                    /*
        var obj = {};
        Reflect.set(obj, "quux", 654);
        return obj.quux === 654;
      */
                }
            },
            {
                name: "Reflect.has",
                exec: function() {
                    /*
        return Reflect.has({ qux: 987 }, "qux");
      */
                }
            },
            {
                name: "Reflect.deleteProperty",
                exec: function() {
                    /*
        var obj = { bar: 456 };
        Reflect.deleteProperty(obj, "bar");
        return !("bar" in obj);
      */
                }
            },
            {
                name: "Reflect.getOwnPropertyDescriptor",
                exec: function() {
                    /*
        var obj = { baz: 789 };
        var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
        return desc.value === 789 &&
          desc.configurable && desc.writable && desc.enumerable;
      */
                }
            },
            {
                name: "Reflect.defineProperty",
                exec: function() {
                    /*
        var obj = {};
        Reflect.defineProperty(obj, "foo", { value: 123 });
        return obj.foo === 123 &&
          Reflect.defineProperty(Object.freeze({}), "foo", { value: 123 }) === false;
      */
                }
            },
            {
                name: "Reflect.getPrototypeOf",
                exec: function() {
                    /*
        return Reflect.getPrototypeOf([]) === Array.prototype;
      */
                }
            },
            {
                name: "Reflect.setPrototypeOf",
                exec: function() {
                    /*
        var obj = {};
        Reflect.setPrototypeOf(obj, Array.prototype);
        return obj instanceof Array;
      */
                }
            },
            {
                name: "Reflect.isExtensible",
                exec: function() {
                    /*
        return Reflect.isExtensible({}) &&
          !Reflect.isExtensible(Object.preventExtensions({}));
      */
                }
            },
            {
                name: "Reflect.preventExtensions",
                exec: function() {
                    /*
        var obj = {};
        Reflect.preventExtensions(obj);
        return !Object.isExtensible(obj);
      */
                }
            },
            {
                name: "Reflect.ownKeys, string keys",
                exec: function() {
                    /*
        var obj = Object.create({ C: true });
        obj.A = true;
        Object.defineProperty(obj, 'B', { value: true, enumerable: false });

        return Reflect.ownKeys(obj).sort() + '' === "A,B";
      */
                }
            },
            {
                name: "Reflect.ownKeys, symbol keys",
                exec: function() {
                    /*
        var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
        var proto = {};
        proto[s1] = true;
        var obj = Object.create(proto);
        obj[s2] = true;
        Object.defineProperty(obj, s3, { value: true, enumerable: false });

        var keys = Reflect.ownKeys(obj);
        return keys.indexOf(s2) >-1 && keys.indexOf(s3) >-1 && keys.length === 2;
      */
                }
            },
            {
                name: "Reflect.apply",
                exec: function() {
                    /*
        return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
      */
                }
            },
            {
                name: "Reflect.construct",
                exec: function() {
                    /*
        return Reflect.construct(function(a, b, c) {
          this.qux = a + b + c;
        }, ["foo", "bar", "baz"]).qux === "foobarbaz";
      */
                }
            },
            {
                name: "Reflect.construct sets new.target meta-property",
                exec: function() {
                    /*
        return Reflect.construct(function(a, b, c) {
          if (new.target === Object) {
            this.qux = a + b + c;
          }
        }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
      */
                }
            },
            {
                name: "Reflect.construct creates instances from third argument",
                exec: function() {
                    /*
        function F(){}
        var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
        return obj.y === 1 && obj instanceof F;
      */
                }
            },
            {
                name: "Reflect.construct, Array subclassing",
                exec: function() {
                    /*
        function F(){}
        var obj = Reflect.construct(Array, [], F);
        obj[2] = 'foo';
        return obj.length === 3 && obj instanceof F;
      */
                }
            },
            {
                name: "Reflect.construct, RegExp subclassing",
                exec: function() {
                    /*
        function F(){}
        var obj = Reflect.construct(RegExp, ["baz","g"], F);
        return RegExp.prototype.exec.call(obj, "foobarbaz")[0] === "baz"
          && obj.lastIndex === 9 && obj instanceof F;
      */
                }
            },
            {
                name: "Reflect.construct, Function subclassing",
                exec: function() {
                    /*
        function F(){}
        var obj = Reflect.construct(Function, ["return 2"], F);
        return obj() === 2 && obj instanceof F;
      */
                }
            },
            {
                name: "Reflect.construct, Promise subclassing",
                exec: function() {
                    /*
        function F(){}
        var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve("foo"); }], F);
        var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject("quux"); }], F);
        var score = +(p1 instanceof F && p2 instanceof F);

        function thenFn(result)  { score += (result === "foo");  check(); }
        function catchFn(result) { score += (result === "quux"); check(); }
        function shouldNotRun(result)  { score = -Infinity;   }

        p1.then = p2.then = Promise.prototype.then;
        p1.catch = p2.catch = Promise.prototype.catch;

        p1.then(thenFn, shouldNotRun);
        p2.then(shouldNotRun, catchFn);
        p1.catch(shouldNotRun);
        p2.catch(catchFn);

        function check() {
          if (score === 4) asyncTestPassed();
        }
      */
                }
            }
        ]
    },
    {
        name: "Promise",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "constructor requires new",
                exec: function() {
                    /*
        new Promise(function(){});
        try {
          Promise(function(){});
          return false;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "Promise.prototype isn't an instance",
                exec: function() {
                    /*
        new Promise(function(){});
        try {
          Promise.prototype.then(function(){});
        } catch (e) {
          return true;
        }
      */
                }
            },
            {
                name: "Promise.all",
                exec: function() {
                    /*
        var fulfills = Promise.all([
          new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); }),
        ]);
        var rejects = Promise.all([
          new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); }),
        ]);
        var score = 0;
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */
                }
            },
            {
                name: "Promise.all, generic iterables",
                exec: function() {
                    /*
        var fulfills = Promise.all(global.__createIterableObject([
          new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); }),
        ]));
        var rejects = Promise.all(global.__createIterableObject([
          new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); }),
        ]));
        var score = 0;
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */
                }
            },
            {
                name: "Promise.race",
                exec: function() {
                    /*
        var fulfills = Promise.race([
          new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
          new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); }),
        ]);
        var rejects = Promise.race([
          new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
          new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); }),
        ]);
        var score = 0;
        fulfills.then(function(result) { score += (result === "foo"); check(); });
        rejects.catch(function(result) { score += (result === "baz"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */
                }
            },
            {
                name: "Promise.race, generic iterables",
                exec: function() {
                    /*
        var fulfills = Promise.race(global.__createIterableObject([
          new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
          new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); }),
        ]));
        var rejects = Promise.race(global.__createIterableObject([
          new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
          new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); }),
        ]));
        var score = 0;
        fulfills.then(function(result) { score += (result === "foo"); check(); });
        rejects.catch(function(result) { score += (result === "baz"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
      */
                }
            },
            {
                name: "Promise[Symbol.species]",
                exec: function() {
                    /*
        var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
        return 'get' in prop && Promise[Symbol.species] === Promise;
      */
                }
            }
        ]
    },
    {
        name: "Symbol",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        var object = {};
        var symbol = Symbol();
        var value = {};
        object[symbol] = value;
        return object[symbol] === value;
      */
                }
            },
            {
                name: "typeof support",
                exec: function() {
                    /*
        return typeof Symbol() === "symbol";
      */
                }
            },
            {
                name: "symbol keys are hidden to pre-ES6 code",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "Object.defineProperty support",
                exec: function() {
                    /*
        var object = {};
        var symbol = Symbol();
        var value = {};

        if (Object.defineProperty) {
          Object.defineProperty(object, symbol, { value: value });
          return object[symbol] === value;
        }

        return passed;
      */
                }
            },
            {
                name: "symbols inherit from Symbol.prototype",
                exec: function() {
                    /*
        var symbol = Symbol();
        var passed = symbol.foo === undefined;
        Symbol.prototype.foo = 2;
        passed &= symbol.foo === 2;
        delete Symbol.prototype.foo;
        return passed;
      */
                }
            },
            {
                name: "cannot coerce to string or number",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "can convert with String()",
                exec: function() {
                    /*
        return String(Symbol("foo")) === "Symbol(foo)";
      */
                }
            },
            {
                name: "new Symbol() throws",
                exec: function() {
                    /*
        var symbol = Symbol();
        try {
          new Symbol();
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "Object(symbol)",
                exec: function() {
                    /*
        var symbol = Symbol();
        var symbolObject = Object(symbol);

        return typeof symbolObject === "object" &&
          symbolObject instanceof Symbol &&
          symbolObject == symbol &&
          symbolObject !== symbol &&
          symbolObject.valueOf() === symbol;
      */
                }
            },
            {
                name: "JSON.stringify ignores symbol primitives",
                exec: function() {
                    /*
        var object = { foo: Symbol() };
        object[Symbol()] = 1;
        var array = [Symbol()];
        return JSON.stringify(object) === '{}' && JSON.stringify(array) === '[null]' && JSON.stringify(Symbol()) === undefined;
      */
                }
            },
            {
                name: "JSON.stringify ignores symbol objects",
                exec: function() {
                    /*
        var testSymbolObject = function (sym) {
          var object = { foo: sym };
          try {
            // some browsers throw a TypeError when setting symbol object keys.
            // this isn't part of this test, so, ignore it if so.
            object[sym] = 1;
          } catch (e) {} // some browsers throw a TypeError when setting symbol object keys.
          var array = [sym];
          return JSON.stringify(object) === '{"foo":{}}' && JSON.stringify(array) === '[{}]' && JSON.stringify(sym) === '{}';
        };
        var objSym = Object(Symbol());
        var symNoToJSON = Object(Symbol());
        Object.defineProperty(symNoToJSON, 'toJSON', { enumerable: false, value: null }); // ensure it overrides the prototype, but is not callable
        return testSymbolObject(objSym) && testSymbolObject(symNoToJSON);
      */
                }
            },
            {
                name: "global symbol registry",
                exec: function() {
                    /*
        var symbol = Symbol.for('foo');
        return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
      */
                }
            }
        ]
    },
    {
        name: "well-known symbols",
        subtests: [
            {
                name: "Symbol.hasInstance",
                exec: function() {
                    /*
        var passed = false;
        var obj = { foo: true };
        var C = function(){};
        Object.defineProperty(C, Symbol.hasInstance, {
          value: function(inst) { passed = inst.foo; return false; }
        });
        obj instanceof C;
        return passed;
      */
                }
            },
            {
                name: "Symbol.isConcatSpreadable",
                exec: function() {
                    /*
        var a = [], b = [];
        b[Symbol.isConcatSpreadable] = false;
        a = a.concat(b);
        return a[0] === b;
      */
                }
            },
            {
                name: "Symbol.iterator, existence",
                exec: function() {
                    /*
        return "iterator" in Symbol;
      */
                }
            },
            {
                name: "Symbol.iterator, arguments object",
                exec: function() {
                    /*
        return (function() {
          return typeof arguments[Symbol.iterator] === 'function'
            && Object.hasOwnProperty.call(arguments, Symbol.iterator);
        }());
      */
                }
            },
            {
                name: "Symbol.species, existence",
                exec: function() {
                    /*
        return "species" in Symbol;
      */
                }
            },
            {
                name: "Symbol.species, Array.prototype.concat",
                exec: function() {
                    /*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.concat.call(obj, []).foo === 1;
      */
                }
            },
            {
                name: "Symbol.species, Array.prototype.filter",
                exec: function() {
                    /*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.filter.call(obj, Boolean).foo === 1;
      */
                }
            },
            {
                name: "Symbol.species, Array.prototype.map",
                exec: function() {
                    /*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.map.call(obj, Boolean).foo === 1;
      */
                }
            },
            {
                name: "Symbol.species, Array.prototype.slice",
                exec: function() {
                    /*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.slice.call(obj, 0).foo === 1;
      */
                }
            },
            {
                name: "Symbol.species, Array.prototype.splice",
                exec: function() {
                    /*
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.splice.call(obj, 0).foo === 1;
      */
                }
            },
            {
                name: "Symbol.species, RegExp.prototype[Symbol.split]",
                exec: function() {
                    /*
        var passed = false;
        var obj = { constructor: {} };
        obj[Symbol.split] = RegExp.prototype[Symbol.split];
        obj.constructor[Symbol.species] = function() {
          passed = true;
          return /./;
        };
        "".split(obj);
        return passed;
      */
                }
            },
            {
                name: "Symbol.species, Promise.prototype.then",
                exec: function() {
                    /*
        var promise      = new Promise(function(resolve){ resolve(42); });
        var FakePromise1 = promise.constructor = function(exec){ exec(function(){}, function(){}); };
        var FakePromise2 = function(exec){ exec(function(){}, function(){}); };
        Object.defineProperty(FakePromise1, Symbol.species, {value: FakePromise2});
        return promise.then(function(){}) instanceof FakePromise2;
      */
                }
            },
            {
                name: "Symbol.replace",
                exec: function() {
                    /*
        var O = {};
        O[Symbol.replace] = function(){
          return 42;
        };
        return ''.replace(O) === 42;
      */
                }
            },
            {
                name: "Symbol.search",
                exec: function() {
                    /*
        var O = {};
        O[Symbol.search] = function(){
          return 42;
        };
        return ''.search(O) === 42;
      */
                }
            },
            {
                name: "Symbol.split",
                exec: function() {
                    /*
        var O = {};
        O[Symbol.split] = function(){
          return 42;
        };
        return ''.split(O) === 42;
      */
                }
            },
            {
                name: "Symbol.match",
                exec: function() {
                    /*
        var O = {};
        O[Symbol.match] = function(){
          return 42;
        };
        return ''.match(O) === 42;
      */
                }
            },
            {
                name: "Symbol.match, RegExp constructor",
                exec: function() {
                    /*
        var re = /./;
        re[Symbol.match] = false;
        var foo = {constructor: RegExp};
        foo[Symbol.match] = true;
        return RegExp(re) !== re && RegExp(foo) === foo;
      */
                }
            },
            {
                name: "Symbol.match, String.prototype.startsWith",
                exec: function() {
                    /*
        var re = /./;
        try {
          '/./'.startsWith(re);
        } catch(e){
          re[Symbol.match] = false;
          return '/./'.startsWith(re);
        }
      */
                }
            },
            {
                name: "Symbol.match, String.prototype.endsWith",
                exec: function() {
                    /*
        var re = /./;
        try {
          '/./'.endsWith(re);
        } catch(e){
          re[Symbol.match] = false;
          return '/./'.endsWith(re);
        }
      */
                }
            },
            {
                name: "Symbol.match, String.prototype.includes",
                exec: function() {
                    /*
        var re = /./;
        try {
          '/./'.includes(re);
        } catch(e){
          re[Symbol.match] = false;
          return '/./'.includes(re);
        }
      */
                }
            },
            {
                name: "Symbol.toPrimitive",
                exec: function() {
                    /*
        var a = {}, b = {}, c = {};
        var passed = 0;
        a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
        b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
        c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };

        a >= 0;
        b in {};
        c == 0;
        return passed === 3;
      */
                }
            },
            {
                name: "Symbol.toStringTag",
                exec: function() {
                    /*
        var a = {};
        a[Symbol.toStringTag] = "foo";
        return (a + "") === "[object foo]";
      */
                }
            },
            {
                name: "Symbol.toStringTag affects existing built-ins",
                exec: function() {
                    /*
        var s = Symbol.toStringTag;
        var passed = true;
        [
          [Array.prototype, []],
          [String.prototype, ''],
          [arguments, arguments],
          [Function.prototype, function(){}],
          [Error.prototype, new Error()],
          [Boolean.prototype, true],
          [Number.prototype, 2],
          [Date.prototype, new Date()],
          [RegExp.prototype, /./]
        ].forEach(function(pair){
          pair[0][s] = "foo";
          passed &= (Object.prototype.toString.call(pair[1]) === "[object foo]");
          delete pair[0][s];
        });
        return passed;
      */
                }
            },
            {
                name: "Symbol.toStringTag, new built-ins",
                exec: function() {
                    /*
        var passed = true;
        var s = Symbol.toStringTag;
        [
          [String, "String Iterator"],
          [Array, "Array Iterator"],
          [Map, "Map Iterator"],
          [Set, "Set Iterator"]
        ].forEach(function(pair){
          var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
          passed = passed
            && iterProto.hasOwnProperty(s)
            && iterProto[s] === pair[1];
        });
        passed = passed
          && Object.getPrototypeOf(function*(){})[s] === "GeneratorFunction"
          && Object.getPrototypeOf(function*(){}())[s] === "Generator"
          && Map.prototype[s] === "Map"
          && Set.prototype[s] === "Set"
          && ArrayBuffer.prototype[s] === "ArrayBuffer"
          && DataView.prototype[s] === "DataView"
          && Promise.prototype[s] === "Promise"
          && Symbol.prototype[s] === "Symbol"
          && typeof Object.getOwnPropertyDescriptor(
            Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === "function";
          return passed;
      */
                }
            },
            {
                name: "Symbol.toStringTag, misc. built-ins",
                exec: function() {
                    /*
        var s = Symbol.toStringTag;
        return Math[s] === "Math"
          && JSON[s] === "JSON";
      */
                }
            },
            {
                name: "Symbol.unscopables",
                exec: function() {
                    /*
        var a = { foo: 1, bar: 2 };
        a[Symbol.unscopables] = { bar: true };
        with (a) {
          return foo === 1 && typeof bar === "undefined";
        }
      */
                }
            }
        ]
    },
    {
        name: "Object static methods",
        subtests: [
            {
                name: "Object.assign",
                exec: function() {
                    /*
        var o = Object.assign({a:true}, {b:true}, {c:true});
        return "a" in o && "b" in o && "c" in o;
      */
                }
            },
            {
                name: "Object.is",
                exec: function() {
                    /*
        return typeof Object.is === 'function' &&
          Object.is(NaN, NaN) &&
         !Object.is(-0, 0);
      */
                }
            },
            {
                name: "Object.getOwnPropertySymbols",
                exec: function() {
                    /*
        var o = {};
        var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
        o[sym]  = true;
        o[sym2] = true;
        o[sym3] = true;
        var result = Object.getOwnPropertySymbols(o);
        return result[0] === sym
          && result[1] === sym2
          && result[2] === sym3;
      */
                }
            },
            {
                name: "Object.setPrototypeOf",
                exec: function() {
                    /*
        return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
      */
                }
            }
        ]
    },
    {
        name: 'function "name" property',
        subtests: [
            {
                name: "function statements",
                exec: function() {
                    /*
        function foo(){};
        return foo.name === 'foo' &&
          (function(){}).name === '';
      */
                }
            },
            {
                name: "function expressions",
                exec: function() {
                    /*
        return (function foo(){}).name === 'foo' &&
          (function(){}).name === '';
      */
                }
            },
            {
                name: "new Function",
                exec: function() {
                    /*
        return (new Function).name === "anonymous";
      */
                }
            },
            {
                name: "bound functions",
                exec: function() {
                    /*
        function foo() {};
        return foo.bind({}).name === "bound foo" &&
          (function(){}).bind({}).name === "bound ";
      */
                }
            },
            {
                name: "variables (function)",
                exec: function() {
                    /*
        var foo = function() {};
        var bar = function baz() {};
        return foo.name === "foo" && bar.name === "baz";
      */
                }
            },
            {
                name: "object methods (function)",
                exec: function() {
                    /*
        var o = { foo: function(){}, bar: function baz(){}};
        o.qux = function(){};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "";
      */
                }
            },
            {
                name: "accessor properties",
                exec: function() {
                    /*
        var o = { get foo(){}, set foo(x){} };
        var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
        return descriptor.get.name === "get foo" &&
               descriptor.set.name === "set foo";
      */
                }
            },
            {
                name: "shorthand methods",
                exec: function() {
                    /*
        var o = { foo(){} };
        return o.foo.name === "foo";
      */
                }
            },
            {
                name: "shorthand methods (no lexical binding)",
                exec: function() {
                    /*
        var f = "foo";
        return ({f() { return f; }}).f() === "foo";
      */
                }
            },
            {
                name: "symbol-keyed methods",
                exec: function() {
                    /*
        var sym1 = Symbol("foo");
        var sym2 = Symbol();
        var o = {
          [sym1]: function(){},
          [sym2]: function(){}
        };

        return o[sym1].name === "[foo]" &&
               o[sym2].name === "";
      */
                }
            },
            {
                name: "class statements",
                exec: function() {
                    /*
        class foo {};
        class bar { static name() {} };
        return foo.name === "foo" &&
          typeof bar.name === "function";
      */
                }
            },
            {
                name: "class expressions",
                exec: function() {
                    /*
        return class foo {}.name === "foo" &&
          typeof class bar { static name() {} }.name === "function";
      */
                }
            },
            {
                name: "variables (class)",
                exec: function() {
                    /*
        var foo = class {};
        var bar = class baz {};
        var qux = class { static name() {} };
        return foo.name === "foo" &&
               bar.name === "baz" &&
               typeof qux.name === "function";
      */
                }
            },
            {
                name: "object methods (class)",
                exec: function() {
                    /*
        var o = { foo: class {}, bar: class baz {}};
        o.qux = class {};
        return o.foo.name === "foo" &&
               o.bar.name === "baz" &&
               o.qux.name === "";
      */
                }
            },
            {
                name: "class prototype methods",
                exec: function() {
                    /*
        class C { foo(){} };
        return (new C).foo.name === "foo";
      */
                }
            },
            {
                name: "class static methods",
                exec: function() {
                    /*
        class C { static foo(){} };
        return C.foo.name === "foo";
      */
                }
            },
            {
                name: "isn't writable, is configurable",
                exec: function() {
                    /*
        var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
        return descriptor.enumerable   === false &&
               descriptor.writable     === false &&
               descriptor.configurable === true;
      */
                }
            }
        ]
    },
    {
        name: "String static methods",
        subtests: [
            {
                name: "String.raw",
                exec: function() {
                    /*
        return typeof String.raw === 'function';
      */
                }
            },
            {
                name: "String.fromCodePoint",
                exec: function() {
                    /*
        return typeof String.fromCodePoint === 'function';
      */
                }
            }
        ]
    },
    {
        name: "String.prototype methods",
        subtests: [
            {
                name: "String.prototype.codePointAt",
                exec: function() {
                    /*
        return typeof String.prototype.codePointAt === 'function';
      */
                }
            },
            {
                name: "String.prototype.normalize",
                exec: function() {
                    /*
        return typeof String.prototype.normalize === "function"
          && "c\u0327\u0301".normalize("NFC") === "\u1e09"
          && "\u1e09".normalize("NFD") === "c\u0327\u0301";
      */
                }
            },
            {
                name: "String.prototype.repeat",
                exec: function() {
                    /*
        return typeof String.prototype.repeat === 'function'
          && "foo".repeat(3) === "foofoofoo";
      */
                }
            },
            {
                name: "String.prototype.startsWith",
                exec: function() {
                    /*
        return typeof String.prototype.startsWith === 'function'
          && "foobar".startsWith("foo");
      */
                }
            },
            {
                name: "String.prototype.startsWith throws on RegExp",
                exec: function() {
                    /*
        try {
          "a".startsWith(/./);
        } catch(e) {
          return typeof String.prototype.startsWith === 'function';
        }
      */
                }
            },
            {
                name: "String.prototype.endsWith",
                exec: function() {
                    /*
        return typeof String.prototype.endsWith === 'function'
          && "foobar".endsWith("bar");
      */
                }
            },
            {
                name: "String.prototype.endsWith throws on RegExp",
                exec: function() {
                    /*
        try {
          "a".endsWith(/./);
        } catch(e) {
          return typeof String.prototype.endsWith === 'function';
        }
      */
                }
            },
            {
                name: "String.prototype.includes",
                exec: function() {
                    /*
        return typeof String.prototype.includes === 'function'
          && "foobar".includes("oba");
      */
                }
            },
            {
                name: "String.prototype[Symbol.iterator]",
                exec: function() {
                    /*
        return typeof String.prototype[Symbol.iterator] === 'function';
      */
                }
            },
            {
                name: "String iterator prototype chain",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "RegExp.prototype properties",
        subtests: [
            {
                name: "RegExp.prototype.flags",
                exec: function() {
                    /*
        return /./igm.flags === "gim" && /./.flags === "";
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.match]",
                exec: function() {
                    /*
        return typeof RegExp.prototype[Symbol.match] === 'function';
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.replace]",
                exec: function() {
                    /*
        return typeof RegExp.prototype[Symbol.replace] === 'function';
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.split]",
                exec: function() {
                    /*
        return typeof RegExp.prototype[Symbol.split] === 'function';
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.search]",
                exec: function() {
                    /*
        return typeof RegExp.prototype[Symbol.search] === 'function';
      */
                }
            },
            {
                name: "RegExp[Symbol.species]",
                exec: function() {
                    /*
        var prop = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
        return 'get' in prop && RegExp[Symbol.species] === RegExp;
      */
                }
            }
        ]
    },
    {
        name: "Array static methods",
        subtests: [
            {
                name: "Array.from, array-like objects",
                exec: function() {
                    /*
        return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
      */
                }
            },
            {
                name: "Array.from, generator instances",
                exec: function() {
                    /*
        var iterable = (function*(){ yield 1; yield 2; yield 3; }());
        return Array.from(iterable) + '' === "1,2,3";
      */
                }
            },
            {
                name: "Array.from, generic iterables",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Array.from(iterable) + '' === "1,2,3";
      */
                }
            },
            {
                name: "Array.from, instances of generic iterables",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject([1, 2, 3]);
        return Array.from(Object.create(iterable)) + '' === "1,2,3";
      */
                }
            },
            {
                name: "Array.from map function, array-like objects",
                exec: function() {
                    /*
        return Array.from({ 0: "foo", 1: "bar", length: 2 }, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1";
      */
                }
            },
            {
                name: "Array.from map function, generator instances",
                exec: function() {
                    /*
        var iterable = (function*(){ yield "foo"; yield "bar"; yield "bal"; }());
        return Array.from(iterable, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */
                }
            },
            {
                name: "Array.from map function, generic iterables",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
        return Array.from(iterable, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */
                }
            },
            {
                name: "Array.from map function, instances of iterables",
                exec: function() {
                    /*
        var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
        return Array.from(Object.create(iterable), function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
      */
                }
            },
            {
                name: "Array.from, iterator closing",
                exec: function() {
                    /*
        var closed = false;
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){ closed = true; return {}; }
        });
        try {
          Array.from(iter, function() { throw 42 });
        } catch(e){}
        return closed;
      */
                }
            },
            {
                name: "Array.of",
                exec: function() {
                    /*
        return typeof Array.of === 'function' &&
          Array.of(2)[0] === 2;
      */
                }
            },
            {
                name: "Array[Symbol.species]",
                exec: function() {
                    /*
        var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
        return 'get' in prop && Array[Symbol.species] === Array;
      */
                }
            }
        ]
    },
    {
        name: "Array.prototype methods",
        subtests: [
            {
                name: "Array.prototype.copyWithin",
                exec: function() {
                    /*
        return typeof Array.prototype.copyWithin === 'function';
      */
                }
            },
            {
                name: "Array.prototype.find",
                exec: function() {
                    /*
        return typeof Array.prototype.find === 'function';
      */
                }
            },
            {
                name: "Array.prototype.findIndex",
                exec: function() {
                    /*
        return typeof Array.prototype.findIndex === 'function';
      */
                }
            },
            {
                name: "Array.prototype.fill",
                exec: function() {
                    /*
        return typeof Array.prototype.fill === 'function';
      */
                }
            },
            {
                name: "Array.prototype.keys",
                exec: function() {
                    /*
        return typeof Array.prototype.keys === 'function';
      */
                }
            },
            {
                name: "Array.prototype.values",
                exec: function() {
                    /*
        return typeof Array.prototype.values === 'function';
      */
                }
            },
            {
                name: "Array.prototype.entries",
                exec: function() {
                    /*
        return typeof Array.prototype.entries === 'function';
      */
                }
            },
            {
                name: "Array.prototype[Symbol.iterator]",
                exec: function() {
                    /*
        return typeof Array.prototype[Symbol.iterator] === 'function';
      */
                }
            },
            {
                name: "Array iterator prototype chain",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "Array.prototype[Symbol.unscopables]",
                exec: function() {
                    /*
        var unscopables = Array.prototype[Symbol.unscopables];
        if (!unscopables) {
          return false;
        }
        var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
        for (var i = 0; i < ns.length; i++) {
          if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
        }
        return true;
      */
                }
            }
        ]
    },
    {
        name: "Number properties",
        subtests: [
            {
                name: "Number.isFinite",
                exec: function() {
                    /*
        return typeof Number.isFinite === 'function';
      */
                }
            },
            {
                name: "Number.isInteger",
                exec: function() {
                    /*
        return typeof Number.isInteger === 'function';
      */
                }
            },
            {
                name: "Number.isSafeInteger",
                exec: function() {
                    /*
        return typeof Number.isSafeInteger === 'function';
      */
                }
            },
            {
                name: "Number.isNaN",
                exec: function() {
                    /*
        return typeof Number.isNaN === 'function';
      */
                }
            },
            {
                name: "Number.parseFloat",
                exec: function() {
                    /*
        var actualGlobal = Function('return this')();
        return typeof Number.parseFloat === 'function'
          && Number.parseFloat === actualGlobal.parseFloat;
      */
                }
            },
            {
                name: "Number.parseInt",
                exec: function() {
                    /*
        var actualGlobal = Function('return this')();
        return typeof Number.parseInt === 'function'
          && Number.parseInt === actualGlobal.parseInt;
      */
                }
            },
            {
                name: "Number.EPSILON",
                exec: function() {
                    /*
        return typeof Number.EPSILON === 'number';
      */
                }
            },
            {
                name: "Number.MIN_SAFE_INTEGER",
                exec: function() {
                    /*
        return typeof Number.MIN_SAFE_INTEGER === 'number';
      */
                }
            },
            {
                name: "Number.MAX_SAFE_INTEGER",
                exec: function() {
                    /*
        return typeof Number.MAX_SAFE_INTEGER === 'number';
      */
                }
            }
        ]
    },
    {
        name: "Math methods",
        subtests: [
            {
                name: "Math.clz32",
                exec: function() {
                    /*
  return typeof Math.clz32 === "function";
*/
                }
            },
            {
                name: "Math.imul",
                exec: function() {
                    /*
  return typeof Math.imul === "function";
*/
                }
            },
            {
                name: "Math.sign",
                exec: function() {
                    /*
  return typeof Math.sign === "function";
*/
                }
            },
            {
                name: "Math.log10",
                exec: function() {
                    /*
  return typeof Math.log10 === "function";
*/
                }
            },
            {
                name: "Math.log2",
                exec: function() {
                    /*
  return typeof Math.log2 === "function";
*/
                }
            },
            {
                name: "Math.log1p",
                exec: function() {
                    /*
  return typeof Math.log1p === "function";
*/
                }
            },
            {
                name: "Math.expm1",
                exec: function() {
                    /*
  return typeof Math.expm1 === "function";
*/
                }
            },
            {
                name: "Math.cosh",
                exec: function() {
                    /*
  return typeof Math.cosh === "function";
*/
                }
            },
            {
                name: "Math.sinh",
                exec: function() {
                    /*
  return typeof Math.sinh === "function";
*/
                }
            },
            {
                name: "Math.tanh",
                exec: function() {
                    /*
  return typeof Math.tanh === "function";
*/
                }
            },
            {
                name: "Math.acosh",
                exec: function() {
                    /*
  return typeof Math.acosh === "function";
*/
                }
            },
            {
                name: "Math.asinh",
                exec: function() {
                    /*
  return typeof Math.asinh === "function";
*/
                }
            },
            {
                name: "Math.atanh",
                exec: function() {
                    /*
  return typeof Math.atanh === "function";
*/
                }
            },
            {
                name: "Math.trunc",
                exec: function() {
                    /*
  return typeof Math.trunc === "function";
*/
                }
            },
            {
                name: "Math.fround",
                exec: function() {
                    /*
  return typeof Math.fround === "function";
*/
                }
            },
            {
                name: "Math.cbrt",
                exec: function() {
                    /*
  return typeof Math.cbrt === "function";
*/
                }
            },
            {
                name: "Math.hypot",
                exec: function() {
                    /*
        return Math.hypot() === 0 &&
          Math.hypot(1) === 1 &&
          Math.hypot(9, 12, 20) === 25 &&
          Math.hypot(27, 36, 60, 100) === 125;
      */
                }
            }
        ]
    },
    {
        name: "Date.prototype[Symbol.toPrimitive]",
        exec: function() {
            /*
    var tp = Date.prototype[Symbol.toPrimitive];
    return tp.call(Object(2), "number") === 2
      && tp.call(Object(2), "string") === "2"
      && tp.call(Object(2), "default") === "2";
  */
        }
    },
    {
        name: "Array is subclassable",
        subtests: [
            {
                name: "length property (accessing)",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        var len1 = c.length;
        c[2] = 'foo';
        var len2 = c.length;
        return len1 === 0 && len2 === 3;
      */
                }
            },
            {
                name: "length property (setting)",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        c[2] = 'foo';
        c.length = 1;
        return c.length === 1 && !(2 in c);
      */
                }
            },
            {
                name: "correct prototype chain",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
      */
                }
            },
            {
                name: "Array.isArray support",
                exec: function() {
                    /*
        class C extends Array {}
        return Array.isArray(new C());
      */
                }
            },
            {
                name: "Array.prototype.concat",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        return c.concat(1) instanceof C;
      */
                }
            },
            {
                name: "Array.prototype.filter",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        return c.filter(Boolean) instanceof C;
      */
                }
            },
            {
                name: "Array.prototype.map",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        return c.map(Boolean) instanceof C;
      */
                }
            },
            {
                name: "Array.prototype.slice",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        c.push(2,4,6);
        return c.slice(1,2) instanceof C;
      */
                }
            },
            {
                name: "Array.prototype.splice",
                exec: function() {
                    /*
        class C extends Array {}
        var c = new C();
        c.push(2,4,6);
        return c.splice(1,2) instanceof C;
      */
                }
            },
            {
                name: "Array.from",
                exec: function() {
                    /*
        class C extends Array {}
        return C.from({ length: 0 }) instanceof C;
      */
                }
            },
            {
                name: "Array.of",
                exec: function() {
                    /*
        class C extends Array {}
        return C.of(0) instanceof C;
      */
                }
            }
        ]
    },
    {
        name: "RegExp is subclassable",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r.global && r.source === "baz";
      */
                }
            },
            {
                name: "correct prototype chain",
                exec: function() {
                    /*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
      */
                }
            },
            {
                name: "RegExp.prototype.exec",
                exec: function() {
                    /*
        class R extends RegExp {}
        var r = new R("baz","g");
        return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
      */
                }
            },
            {
                name: "RegExp.prototype.test",
                exec: function() {
                    /*
        class R extends RegExp {}
        var r = new R("baz");
        return r.test("foobarbaz");
      */
                }
            }
        ]
    },
    {
        name: "Function is subclassable",
        subtests: [
            {
                name: "can be called",
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("return 'foo';");
        return c() === 'foo';
      */
                }
            },
            {
                name: "correct prototype chain",
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("return 'foo';");
        return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
      */
                }
            },
            {
                name: 'can be used with "new"',
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("this.bar = 2;");
        c.prototype.baz = 3;
        return new c().bar === 2 && new c().baz === 3;
      */
                }
            },
            {
                name: "Function.prototype.call",
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("x", "return this.bar + x;");
        return c.call({bar:1}, 2) === 3;
      */
                }
            },
            {
                name: "Function.prototype.apply",
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("x", "return this.bar + x;");
        return c.apply({bar:1}, [2]) === 3;
      */
                }
            },
            {
                name: "Function.prototype.bind",
                exec: function() {
                    /*
        class C extends Function {}
        var c = new C("x", "y", "return this.bar + x + y;").bind({bar:1}, 2);
        return c(6) === 9 && c instanceof C;
      */
                }
            }
        ]
    },
    {
        name: "Promise is subclassable",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "correct prototype chain",
                exec: function() {
                    /*
        class C extends Promise {}
        var c = new C(function(resolve, reject) { resolve("foo"); });
        return c instanceof C && c instanceof Promise && Object.getPrototypeOf(C) === Promise;
      */
                }
            },
            {
                name: "Promise.all",
                exec: function() {
                    /*
        class P extends Promise {}
        var fulfills = P.all([
          new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); }),
        ]);
        var rejects = P.all([
          new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); }),
        ]);
        var score = +(fulfills instanceof P);
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 3) asyncTestPassed();
        }
      */
                }
            },
            {
                name: "Promise.race",
                exec: function() {
                    /*
        class P extends Promise {}
        var fulfills = P.race([
          new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
          new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); }),
        ]);
        var rejects = P.race([
          new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
          new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); }),
        ]);
        var score = +(fulfills instanceof P);
        fulfills.then(function(result) { score += (result === "foo"); check(); });
        rejects.catch(function(result) { score += (result === "baz"); check(); });

        function check() {
          if (score === 3) asyncTestPassed();
        }
      */
                }
            }
        ]
    },
    {
        name: "miscellaneous subclassables",
        subtests: [
            {
                name: "Boolean is subclassable",
                exec: function() {
                    /*
        class C extends Boolean {}
        var c = new C(true);
        return c instanceof Boolean
          && c instanceof C
          && c == true;
      */
                }
            },
            {
                name: "Number is subclassable",
                exec: function() {
                    /*
        class C extends Number {}
        var c = new C(6);
        return c instanceof Number
          && c instanceof C
          && +c === 6;
      */
                }
            },
            {
                name: "String is subclassable",
                exec: function() {
                    /*
        class C extends String {}
        var c = new C("golly");
        return c instanceof String
          && c instanceof C
          && c + '' === "golly"
          && c[0] === "g"
          && c.length === 5;
      */
                }
            },
            {
                name: "Error is subclassable",
                exec: function() {
                    /*
        class C extends Error {}
        var c = new C();
        return c instanceof Error
          && c instanceof C
          && Object.prototype.toString.call(c) === "[object Error]";
      */
                }
            },
            {
                name: "Map is subclassable",
                exec: function() {
                    /*
        var key = {};
        class M extends Map {}
        var map = new M();

        map.set(key, 123);

        return map instanceof M && map.has(key) && map.get(key) === 123;
      */
                }
            },
            {
                name: "Set is subclassable",
                exec: function() {
                    /*
        var obj = {};
        class S extends Set {}
        var set = new S();

        set.add(123);
        set.add(123);

        return set instanceof S && set.has(123);
      */
                }
            }
        ]
    },
    {
        name: "prototype of bound functions",
        subtests: [
            {
                name: "basic functions",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "generator functions",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "arrow functions",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "classes",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name: "subclasses",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'get' calls",
        subtests: [
            {
                name: "ToPrimitive",
                exec: function() {
                    /*
        // ToPrimitive -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
        p + 3;
        return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString";
      */
                }
            },
            {
                name: "CreateListFromArrayLike",
                exec: function() {
                    /*
        // CreateListFromArrayLike -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
        Function.prototype.apply({}, p);
        return get + '' === "length,0,1";
      */
                }
            },
            {
                name: "instanceof operator",
                exec: function() {
                    /*
        // InstanceofOperator -> GetMethod -> GetV -> [[Get]]
        // InstanceofOperator -> OrdinaryHasInstance -> Get -> [[Get]]
        var get = [];
        var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
        ({}) instanceof p;
        return get[0] === Symbol.hasInstance && get.slice(1) + '' === "prototype";
      */
                }
            },
            {
                name: "HasBinding",
                exec: function() {
                    /*
        // HasBinding -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
        p[Symbol.unscopables] = p;
        with(p) {
          typeof foo;
        }
        return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
      */
                }
            },
            {
                name: "CreateDynamicFunction",
                exec: function() {
                    /*
        // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
        var get = [];
        var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
        new p;
        return get + '' === "prototype";
      */
                }
            },
            {
                name: "ClassDefinitionEvaluation",
                exec: function() {
                    /*
        // ClassDefinitionEvaluation -> Get -> [[Get]]
        var get = [];
        var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
        class C extends p {}
        return get + '' === "prototype";
      */
                }
            },
            {
                name: "IteratorComplete, IteratorValue",
                exec: function() {
                    /*
        // IteratorComplete -> Get -> [[Get]]
        // IteratorValue -> Get -> [[Get]]
        var get = [];
        var iterable = {};
        iterable[Symbol.iterator] = function() {
          return {
            next: function() {
              return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
            }
          };
        }
        var i = 0;
        for(var e of iterable) {
          if (++i >= 2) break;
        }
        return get + '' === "done,value,done,value";
      */
                }
            },
            {
                name: "ToPropertyDescriptor",
                exec: function() {
                    /*
        // ToPropertyDescriptor -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({
            enumerable: true, configurable: true, value: true,
            writable: true, get: Function(), set: Function()
          }, { get: function(o, k) { get.push(k); return o[k]; }});
        try {
          // This will throw, since it will have true for both "get" and "value",
          // but not before performing a Get on every property.
          Object.defineProperty({}, "foo", p);
        } catch(e) {
          return get + '' === "enumerable,configurable,value,writable,get,set";
        }
      */
                }
            },
            {
                name: "Object.assign",
                exec: function() {
                    /*
        // Object.assign -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
        Object.assign({}, p);
        return get + '' === "foo,bar";
      */
                }
            },
            {
                name: "Object.defineProperties",
                exec: function() {
                    /*
        // Object.defineProperties -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
        Object.defineProperties({}, p);
        return get + '' === "foo,bar";
      */
                }
            },
            {
                name: "Function.prototype.bind",
                exec: function() {
                    /*
        // Function.prototype.bind -> Get -> [[Get]]
        var get = [];
        var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
        Function.prototype.bind.call(p);
        return get + '' === "length,name";
      */
                }
            },
            {
                name: "Error.prototype.toString",
                exec: function() {
                    /*
        // Error.prototype.toString -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
        Error.prototype.toString.call(p);
        return get + '' === "name,message";
      */
                }
            },
            {
                name: "String.raw",
                exec: function() {
                    /*
        // String.raw -> Get -> [[Get]]
        var get = [];
        var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
        var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
        String.raw(p);
        return get + '' === "raw,length,0,1";
      */
                }
            },
            {
                name: "RegExp constructor",
                exec: function() {
                    /*
        // RegExp -> Get -> [[Get]]
        var get = [];
        var re = { constructor: null };
        re[Symbol.match] = true;
        var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp(p);
        return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
      */
                }
            },
            {
                name: "RegExp.prototype.flags",
                exec: function() {
                    /*
        // RegExp.prototype.flags -> Get -> [[Get]]
        var expected = [];
        // Sorted alphabetically by shortname – "gumsuy".
        if ('global' in RegExp.prototype) expected.push('global');
        if ('ignoreCase' in RegExp.prototype) expected.push('ignoreCase');
        if ('multiline' in RegExp.prototype) expected.push('multiline');
        if ('dotAll' in RegExp.prototype) expected.push('dotAll');
        if ('unicode' in RegExp.prototype) expected.push('unicode');
        if ('sticky' in RegExp.prototype) expected.push('sticky');
        var actual = [];
        var p = new Proxy({}, { get: function(o, k) { actual.push(k); return o[k]; }});
        Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
        if (expected.length !== actual.length) return false;
        for (var i = 0; i < expected.length; i++) {
          if (expected[i] !== actual[i]) return false;
        }
        return true;
      */
                }
            },
            {
                name: "RegExp.prototype.test",
                exec: function() {
                    /*
        // RegExp.prototype.test -> RegExpExec -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype.test.call(p);
        return get + '' === "exec";
      */
                }
            },
            {
                name: "RegExp.prototype.toString",
                exec: function() {
                    /*
        // RegExp.prototype.toString -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype.toString.call(p);
        return get + '' === "source,flags";
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.match]",
                exec: function() {
                    /*
        // RegExp.prototype[Symbol.match] -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype[Symbol.match].call(p);
        p.global = true;
        RegExp.prototype[Symbol.match].call(p);
        return get + '' === "global,exec,global,unicode,exec";
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.replace]",
                exec: function() {
                    /*
        // RegExp.prototype[Symbol.replace] -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype[Symbol.replace].call(p);
        p.global = true;
        RegExp.prototype[Symbol.replace].call(p);
        return get + '' === "global,exec,global,unicode,exec";
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.search]",
                exec: function() {
                    /*
        // RegExp.prototype[Symbol.search] -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype[Symbol.search].call(p);
        return get + '' === "lastIndex,exec,lastIndex";
      */
                }
            },
            {
                name: "RegExp.prototype[Symbol.split]",
                exec: function() {
                    /*
        // RegExp.prototype[Symbol.split] -> Get -> [[Get]]
        var get = [];
        var constructor = Function();
        constructor[Symbol.species] = Object;
        var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype[Symbol.split].call(p, "");
        return get + '' === "constructor,flags,exec";
      */
                }
            },
            {
                name: "Array.from",
                exec: function() {
                    /*
        // Array.from -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
        Array.from(p);
        return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
      */
                }
            },
            {
                name: "Array.prototype.concat",
                exec: function() {
                    /*
        // Array.prototype.concat -> Get -> [[Get]]
        var get = [];
        var arr = [1];
        arr.constructor = undefined;
        var p = new Proxy(arr, { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.concat.call(p,p);
        return get[0] === "constructor"
          && get[1] === Symbol.isConcatSpreadable
          && get[2] === "length"
          && get[3] === "0"
          && get[4] === get[1] && get[5] === get[2] && get[6] === get[3]
          && get.length === 7;
      */
                }
            },
            {
                name: "Array.prototype iteration methods",
                exec: function() {
                    /*
        // Array.prototype methods -> Get -> [[Get]]
        var methods = ['copyWithin', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach',
          'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'some'];
        var get;
        var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
        for(var i = 0; i < methods.length; i+=1) {
          get = [];
          Array.prototype[methods[i]].call(p, Function());
          if (get + '' !== (
            methods[i] === 'fill' ? "length" :
            methods[i] === 'every' ? "length,0" :
            methods[i] === 'lastIndexOf' || methods[i] === 'reduceRight' ? "length,1,0" :
            "length,0,1"
          )) {
            return false;
          }
        }
        return true;
      */
                }
            },
            {
                name: "Array.prototype.pop",
                exec: function() {
                    /*
        // Array.prototype.pop -> Get -> [[Get]]
        var get = [];
        var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.pop.call(p);
        return get + '' === "length,3";
      */
                }
            },
            {
                name: "Array.prototype.reverse",
                exec: function() {
                    /*
        // Array.prototype.reverse -> Get -> [[Get]]
        var get = [];
        var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.reverse.call(p);
        return get + '' === "length,0,4,2";
      */
                }
            },
            {
                name: "Array.prototype.shift",
                exec: function() {
                    /*
        // Array.prototype.shift -> Get -> [[Get]]
        var get = [];
        var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.shift.call(p);
        return get + '' === "length,0,1,2,3";
      */
                }
            },
            {
                name: "Array.prototype.splice",
                exec: function() {
                    /*
        // Array.prototype.splice -> Get -> [[Get]]
        var get = [];
        var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.splice.call(p,1,1);
        Array.prototype.splice.call(p,1,0,1);
        return get + '' === "length,constructor,1,2,3,length,constructor,2,1";
      */
                }
            },
            {
                name: "Array.prototype.toString",
                exec: function() {
                    /*
        // Array.prototype.toString -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.toString.call(p);
        return get + '' === "join";
      */
                }
            },
            {
                name: "JSON.stringify",
                exec: function() {
                    /*
        // JSON.stringify -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
        JSON.stringify(p);
        return get + '' === "toJSON";
      */
                }
            },
            {
                name: "Promise resolve functions",
                exec: function() {
                    /*
        // Promise resolve functions -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
        new Promise(function(resolve){ resolve(p); });
        return get + '' === "then";
      */
                }
            },
            {
                name: "String.prototype.match",
                exec: function() {
                    /*
        // String.prototype.match -> Get -> [[Get]]
        var get = [];
        var proxied = {};
        proxied[Symbol.toPrimitive] = Function();
        var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
        "".match(p);
        return get[0] === Symbol.match && get[1] === Symbol.toPrimitive && get.length === 2;
      */
                }
            },
            {
                name: "String.prototype.replace",
                exec: function() {
                    /*
        // String.prototype.replace functions -> Get -> [[Get]]
        var get = [];
        var proxied = {};
        proxied[Symbol.toPrimitive] = Function();
        var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
        "".replace(p);
        return get[0] === Symbol.replace && get[1] === Symbol.toPrimitive && get.length === 2;
      */
                }
            },
            {
                name: "String.prototype.search",
                exec: function() {
                    /*
        // String.prototype.search functions -> Get -> [[Get]]
        var get = [];
        var proxied = {};
        proxied[Symbol.toPrimitive] = Function();
        var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
        "".search(p);
        return get[0] === Symbol.search && get[1] === Symbol.toPrimitive && get.length === 2;
      */
                }
            },
            {
                name: "String.prototype.split",
                exec: function() {
                    /*
        // String.prototype.split functions -> Get -> [[Get]]
        var get = [];
        var proxied = {};
        proxied[Symbol.toPrimitive] = Function();
        var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
        "".split(p);
        return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
      */
                }
            },
            {
                name: "Date.prototype.toJSON",
                exec: function() {
                    /*
        // Date.prototype.toJSON -> ToPrimitive -> Get -> [[Get]]
        // Date.prototype.toJSON -> Invoke -> GetMethod -> GetV -> [[Get]]
        var get = [];
        var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
        Date.prototype.toJSON.call(p);
        return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString,toISOString";
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'set' calls",
        subtests: [
            {
                name: "Object.assign",
                exec: function() {
                    /*
        // Object.assign -> Set -> [[Set]]
        var set = [];
        var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        Object.assign(p, { foo: 1, bar: 2 });
        return set + '' === "foo,bar";
      */
                }
            },
            {
                name: "Array.from",
                exec: function() {
                    /*
        // Array.from -> Set -> [[Set]]
        var set = [];
        var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
        return set + '' === "length";
      */
                }
            },
            {
                name: "Array.of",
                exec: function() {
                    /*
        // Array.from -> Set -> [[Set]]
        var set = [];
        var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        Array.of.call(function(){ return p; }, 1, 2, 3);
        return set + '' === "length";
      */
                }
            },
            {
                name: "Array.prototype.copyWithin",
                exec: function() {
                    /*
        // Array.prototype.copyWithin -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.copyWithin(0, 3);
        return set + '' === "0,1,2";
      */
                }
            },
            {
                name: "Array.prototype.fill",
                exec: function() {
                    /*
        // Array.prototype.fill -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.fill(0, 3);
        return set + '' === "3,4,5";
      */
                }
            },
            {
                name: "Array.prototype.pop",
                exec: function() {
                    /*
        // Array.prototype.pop -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.pop();
        return set + '' === "length";
      */
                }
            },
            {
                name: "Array.prototype.push",
                exec: function() {
                    /*
        // Array.prototype.push -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.push(0,0,0);
        return set + '' === "0,1,2,length";
      */
                }
            },
            {
                name: "Array.prototype.reverse",
                exec: function() {
                    /*
        // Array.prototype.reverse -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.reverse();
        return set + '' === "3,1,2";
      */
                }
            },
            {
                name: "Array.prototype.shift",
                exec: function() {
                    /*
        // Array.prototype.shift -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.shift();
        return set + '' === "0,2,length";
      */
                }
            },
            {
                name: "Array.prototype.splice",
                exec: function() {
                    /*
        // Array.prototype.splice -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.splice(1,0,0);
        return set + '' === "3,2,1,length";
      */
                }
            },
            {
                name: "Array.prototype.unshift",
                exec: function() {
                    /*
        // Array.prototype.unshift -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.unshift(0,1);
        return set + '' === "5,3,2,0,1,length";
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'defineProperty' calls",
        subtests: [
            {
                name: "[[Set]]",
                exec: function() {
                    /*
        // [[Set]] -> [[DefineOwnProperty]]
        var def = [];
        var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
        p.foo = 2; p.bar = 4;
        return def + '' === "foo,bar";
      */
                }
            },
            {
                name: "SetIntegrityLevel",
                exec: function() {
                    /*
        // SetIntegrityLevel -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
        var def = [];
        var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
        Object.freeze(p);
        return def + '' === "foo,bar";
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'deleteProperty' calls",
        subtests: [
            {
                name: "Array.prototype.copyWithin",
                exec: function() {
                    /*
        // Array.prototype.copyWithin -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.copyWithin(0,3);
        return del + '' === "0,1,2";
      */
                }
            },
            {
                name: "Array.prototype.pop",
                exec: function() {
                    /*
        // Array.prototype.pop -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.pop();
        return del + '' === "2";
      */
                }
            },
            {
                name: "Array.prototype.reverse",
                exec: function() {
                    /*
        // Array.prototype.reverse -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.reverse();
        return del + '' === "0,4,2";
      */
                }
            },
            {
                name: "Array.prototype.shift",
                exec: function() {
                    /*
        // Array.prototype.shift -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.shift();
        return del + '' === "0,2,5";
      */
                }
            },
            {
                name: "Array.prototype.splice",
                exec: function() {
                    /*
        // Array.prototype.splice -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.splice(2,2,0);
        return del + '' === "3,5";
      */
                }
            },
            {
                name: "Array.prototype.unshift",
                exec: function() {
                    /*
        // Array.prototype.unshift -> DeletePropertyOrThrow -> [[Delete]]
        var del = [];
        var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
        p.unshift(0);
        return del + '' === "5,3";
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'getOwnPropertyDescriptor' calls",
        subtests: [
            {
                name: "[[Set]]",
                exec: function() {
                    /*
        // [[Set]] -> [[GetOwnProperty]]
        var gopd = [];
        var p = new Proxy({},
          { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
        p.foo = 1; p.bar = 1;
        return gopd + '' === "foo,bar";
      */
                }
            },
            {
                name: "Object.assign",
                exec: function() {
                    /*
        // Object.assign -> [[GetOwnProperty]]
        var gopd = [];
        var p = new Proxy({foo:1, bar:2},
          { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
        Object.assign({}, p);
        return gopd + '' === "foo,bar";
      */
                }
            },
            {
                name: "Object.prototype.hasOwnProperty",
                exec: function() {
                    /*
        // Object.prototype.hasOwnProperty -> HasOwnProperty -> [[GetOwnProperty]]
        var gopd = [];
        var p = new Proxy({foo:1, bar:2},
          { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
        p.hasOwnProperty('garply');
        return gopd + '' === "garply";
      */
                }
            },
            {
                name: "Function.prototype.bind",
                exec: function() {
                    /*
        // Function.prototype.bind -> HasOwnProperty -> [[GetOwnProperty]]
        var gopd = [];
        var p = new Proxy(Function(),
          { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
        p.bind();
        return gopd + '' === "length";
      */
                }
            }
        ]
    },
    {
        name: "Proxy, internal 'ownKeys' calls",
        subtests: [
            {
                name: "SetIntegrityLevel",
                exec: function() {
                    /*
        // SetIntegrityLevel -> [[OwnPropertyKeys]]
        var ownKeysCalled = 0;
        var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
        Object.freeze(p);
        return ownKeysCalled === 1;
      */
                }
            },
            {
                name: "TestIntegrityLevel",
                exec: function() {
                    /*
        // TestIntegrityLevel -> [[OwnPropertyKeys]]
        var ownKeysCalled = 0;
        var p = new Proxy(Object.preventExtensions({}), { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
        Object.isFrozen(p);
        return ownKeysCalled === 1;
      */
                }
            },
            {
                name: "SerializeJSONObject",
                exec: function() {
                    /*
        // SerializeJSONObject -> EnumerableOwnNames -> [[OwnPropertyKeys]]
        var ownKeysCalled = 0;
        var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
        JSON.stringify({a:p,b:p});
        return ownKeysCalled === 2;
      */
                }
            }
        ]
    },
    {
        name: "Object static methods accept primitives",
        subtests: [
            {
                name: "Object.getPrototypeOf",
                exec: function() {
                    /*
        return Object.getPrototypeOf('a').constructor === String;
      */
                }
            },
            {
                name: "Object.getOwnPropertyDescriptor",
                exec: function() {
                    /*
        return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
      */
                }
            },
            {
                name: "Object.getOwnPropertyNames",
                exec: function() {
                    /*
        var s = Object.getOwnPropertyNames('a');
        return s.length === 2 &&
          ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
      */
                }
            },
            {
                name: "Object.seal",
                exec: function() {
                    /*
        return Object.seal('a') === 'a';
      */
                }
            },
            {
                name: "Object.freeze",
                exec: function() {
                    /*
        return Object.freeze('a') === 'a';
      */
                }
            },
            {
                name: "Object.preventExtensions",
                exec: function() {
                    /*
        return Object.preventExtensions('a') === 'a';
      */
                }
            },
            {
                name: "Object.isSealed",
                exec: function() {
                    /*
        return Object.isSealed('a') === true;
      */
                }
            },
            {
                name: "Object.isFrozen",
                exec: function() {
                    /*
        return Object.isFrozen('a') === true;
      */
                }
            },
            {
                name: "Object.isExtensible",
                exec: function() {
                    /*
        return Object.isExtensible('a') === false;
      */
                }
            },
            {
                name: "Object.keys",
                exec: function() {
                    /*
        var s = Object.keys('a');
        return s.length === 1 && s[0] === '0';
      */
                }
            }
        ]
    },
    {
        name: "own property order",
        subtests: [
            {
                name: "Object.keys",
                exec: function() {
                    /*
        var obj = {
          // Non-negative integer names appear first in value order
          2: true,
          0: true,
          1: true,
          // Other string names appear in source order
          ' ': true,
          // Non-negative integers are sorted above other names
          9: true,
          D: true,
          B: true,
          // Negative integers are treated as other names
          '-1': true,
        };
        // Other string names are added in order of creation
        obj.A = true;
        // Non-negative integer names, conversely, ignore order of creation
        obj[3] = true;
        // Having a total of 20+ properties doesn't affect property order
        "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
          obj[key] = true;
        });
        // Object.defineProperty doesn't affect the above rules
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        // Deleting and reinserting a property doesn't preserve its position
        delete obj[2];
        obj[2] = true;

        var forInOrder = '';
        for(var key in obj)forInOrder += key;

        return Object.keys(obj).join('') === forInOrder;
      */
                }
            },
            {
                name: "Object.getOwnPropertyNames",
                exec: function() {
                    /*
        var obj = {
          2: true,
          0: true,
          1: true,
          ' ': true,
          9: true,
          D: true,
          B: true,
          '-1': true
        };
        obj.A = true;
        obj[3] = true;
        "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
          obj[key] = true;
        });
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
      */
                }
            },
            {
                name: "Object.assign",
                exec: function() {
                    /*
        var result = '';
        var target = {};

        "012349 DBACEFGHIJKLMNOPQRST".split('').concat(-1).forEach(function(key){
          Object.defineProperty(target, key, {
            set: function(){
              result += key;
            }
          })
        });

        var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
        Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
        Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
        Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
        Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
        delete obj[2];
        obj[2] = true;

        "EFGHIJKLMNOPQRST".split('').forEach(function(key){
          obj[key] = key;
        });

        Object.assign(target, obj);

        return result === "012349 DB-1ACEFGHIJKLMNOPQRST";
      */
                }
            },
            {
                name: "JSON.stringify",
                exec: function() {
                    /*
        var obj = {
          2: true,
          0: true,
          1: true,
          ' ': true,
          9: true,
          D: true,
          B: true,
          '-1': true
        };
        obj.A = true;
        obj[3] = true;
        "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
          obj[key] = true;
        });
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return JSON.stringify(obj) ===
          '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"M":true,"N":true,"O":true,"P":true,"Q":true,"R":true,"S":true,"T":true,"U":true,"V":true,"W":true,"X":true,"Y":true,"Z":true,"C":true}';
      */
                }
            },
            {
                name: "JSON.parse",
                exec: function() {
                    /*
        var result = '';
        JSON.parse(
          '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"A":true,"C":true}',
          function reviver(k,v) {
            result += k;
            return v;
          }
        );
        return result === "012349 DB-1EFGHIJKLAC";
      */
                }
            },
            {
                name: "Reflect.ownKeys, string key order",
                exec: function() {
                    /*
        var obj = {
          2: true,
          0: true,
          1: true,
          ' ': true,
          9: true,
          D: true,
          B: true,
          '-1': true
        };
        obj.A = true;
        obj[3] = true;
        "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
          obj[key] = true;
        });
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Reflect.ownKeys(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
      */
                }
            },
            {
                name: "Reflect.ownKeys, symbol key order",
                exec: function() {
                    /*
        var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
        var obj = {
          1: true,
          A: true,
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
      */
                }
            }
        ]
    },
    {
        name: "Updated identifier syntax",
        subtests: [
            {
                name: "var ⸯ;",
                exec: function() {
                    /*
        try {
          eval('var ⸯ');
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "var 𐋀;",
                exec: function() {
                    /*
        var 𐋀;
        return true;
      */
                }
            },
            {
                name: "no escaped reserved words as identifiers",
                exec: function() {
                    /*
        var \u0061;
        try {
          eval('var v\\u0061r');
        } catch(e) {
          return true;
        }
      */
                }
            }
        ]
    },
    {
        name: "miscellaneous",
        subtests: [
            {
                name: "duplicate property names in strict mode",
                exec: function() {
                    /*
        'use strict';
        return this === undefined && ({ a:1, a:1 }).a === 1;
      */
                }
            },
            {
                name: "no semicolon needed after do-while",
                exec: function() {
                    /*
        do {} while (false) return true;
      */
                }
            },
            {
                name: "no assignments allowed in for-in head in strict mode",
                exec: function() {
                    /*
       'use strict';
       try {
         eval('for (var i = 0 in {}) {}');
       }
       catch(e) {
         return true;
       }
      */
                }
            },
            {
                name: "accessors aren't constructors",
                exec: function() {
                    /*
        var f = (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
        try {
          new f;
        } catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "Invalid Date",
                exec: function() {
                    /*
        return new Date(NaN) + "" === "Invalid Date";
      */
                }
            },
            {
                name: "RegExp constructor can alter flags",
                exec: function() {
                    /*
        return new RegExp(/./im, "g").global === true;
      */
                }
            },
            {
                name:
                    'RegExp.prototype.toString generic and uses "flags" property',
                exec: function() {
                    /*
        return RegExp.prototype.toString.call({source: 'foo', flags: 'bar'}) === '/foo/bar';
      */
                }
            },
            {
                name: "built-in prototypes are not instances",
                exec: function() {
                    /*
        try {
          RegExp.prototype.exec(); return false;
        } catch(e) {}
        try {
          Date.prototype.valueOf(); return false;
        } catch(e) {}

        if (![Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError].every(function (E) {
            return Object.prototype.toString.call(E.prototype) === '[object Object]';
        })) {
          return false;
        }

        return true;
      */
                }
            },
            {
                name: "function 'length' is configurable",
                exec: function() {
                    /*
        var fn = function(a, b) {};

        var desc = Object.getOwnPropertyDescriptor(fn, "length");
        if (desc.configurable) {
          Object.defineProperty(fn, "length", { value: 1 });
          return fn.length === 1;
        }

        return false;
      */
                }
            }
        ]
    },
    {
        name: "non-strict function semantics",
        subtests: [
            {
                name: "hoisted block-level function declaration",
                exec: function() {
                    /*
        // Note: only available outside of strict mode.
        if (!this) return false;
        var passed = f() === 1;
        function f() { return 1; }

        passed &= typeof g === 'undefined';
        { function g() { return 1; } }
        passed &= g() === 1;

        passed &= h() === 2;
        { function h() { return 1; } }
        function h() { return 2; }
        passed &= h() === 1;

        return passed;
      */
                }
            },
            {
                name: "labeled function statements",
                exec: function() {
                    /*
        // Note: only available outside of strict mode.
        if (!this) return false;

        label: function foo() { return 2; }
        return foo() === 2;
      */
                }
            },
            {
                name: "function statements in if-statement clauses",
                exec: function() {
                    /*
        // Note: only available outside of strict mode.
        if (!this) return false;

        if(true) function foo() { return 2; }
        if(false) {} else function bar() { return 3; }
        if(true) function baz() { return 4; } else {}
        if(false) function qux() { return 5; } else function qux() { return 6; }
        return foo() === 2 && bar() === 3 && baz() === 4 && qux() === 6;
      */
                }
            }
        ]
    },
    {
        name: "__proto__ in object literals",
        subtests: [
            {
                name: "basic support",
                exec: function() {
                    /*
        return { __proto__ : [] } instanceof Array
          && !({ __proto__ : null } instanceof Object);
      */
                }
            },
            {
                name: "multiple __proto__ is an error",
                exec: function() {
                    /*
        try {
          eval("({ __proto__ : [], __proto__: {} })");
        }
        catch(e) {
          return true;
        }
      */
                }
            },
            {
                name: "not a computed property",
                exec: function() {
                    /*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        var a = "__proto__";
        return !({ [a] : [] } instanceof Array);
      */
                }
            },
            {
                name: "not a shorthand property",
                exec: function() {
                    /*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        var __proto__ = [];
        return !({ __proto__ } instanceof Array);
      */
                }
            },
            {
                name: "not a shorthand method",
                exec: function() {
                    /*
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        return !({ __proto__(){} } instanceof Function);
      */
                }
            }
        ]
    },
    {
        name: "Object.prototype.__proto__",
        subtests: [
            {
                name: "get prototype",
                exec: function() {
                    /*
        var A = function(){};
        return (new A()).__proto__ === A.prototype;
      */
                }
            },
            {
                name: "set prototype",
                exec: function() {
                    /*
        var o = {};
        o.__proto__ = Array.prototype;
        return o instanceof Array;
      */
                }
            },
            {
                name: "absent from Object.create(null)",
                exec: function() {
                    /*
        var o = Object.create(null), p = {};
        o.__proto__ = p;
        return Object.getPrototypeOf(o) !== p;
      */
                }
            },
            {
                name: "present in hasOwnProperty()",
                exec: function() {
                    /*
        return Object.prototype.hasOwnProperty('__proto__');
      */
                }
            },
            {
                name: "correct property descriptor",
                exec: function() {
                    /*
        var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
        var A = function(){};

        return (desc
          && "get" in desc
          && "set" in desc
          && desc.configurable
          && !desc.enumerable);
      */
                }
            },
            {
                name: "present in Object.getOwnPropertyNames()",
                exec: function() {
                    /*
        return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
      */
                }
            }
        ]
    },
    {
        name: "String.prototype HTML methods",
        subtests: [
            {
                name: "existence",
                exec: function() {
                    /*
        var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
          "italics", "link", "small", "strike", "sub", "sup"];
        for (i = 0; i < names.length; i++) {
          if (typeof String.prototype[names[i]] !== 'function') {
            return false;
          }
        }
        return true;
      */
                }
            },
            {
                name: "tags' names are lowercase",
                exec: function() {
                    /*
        var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
          "italics", "link", "small", "strike", "sub", "sup"];
        for (i = 0; i < names.length; i++) {
          if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
            return false;
          }
        }
        return true;
      */
                }
            },
            {
                name: "quotes in arguments are escaped",
                exec: function() {
                    /*
        var i, names = ["anchor", "fontcolor", "fontsize", "link"];
        for (i = 0; i < names.length; i++) {
          if (""[names[i]]('"') !== ""[names[i]]('&' + 'quot;')) {
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
        name: "RegExp.prototype.compile",
        subtests: [
            {
                name: "basic functionality",
                exec: function() {
                    /*
        if (typeof RegExp.prototype.compile !== 'function')
          return false
        var rx = /a/;
        rx.compile('b');
        return rx.test('b');
      */
                }
            },
            {
                name: "returns this",
                exec: function() {
                    /*
        var rx = /a/;
        return rx.compile('b') === rx;
      */
                }
            }
        ]
    },
    {
        name: "RegExp syntax extensions",
        subtests: [
            {
                name: "hyphens in character sets",
                exec: function() {
                    /*
        return /[\w-_]/.exec("-")[0] === "-";
      */
                }
            },
            {
                name: "invalid character escapes",
                exec: function() {
                    /*
        return /\z/.exec("\\z")[0] === "z"
          && /[\z]/.exec("[\\z]")[0] === "z";
      */
                }
            },
            {
                name: "invalid control-character escapes",
                exec: function() {
                    /*
        return /\c2/.exec("\\c2")[0] === "\\c2";
      */
                }
            },
            {
                name: "invalid Unicode escapes",
                exec: function() {
                    /*
        return /\u1/.exec("u1")[0] === "u1"
          && /[\u1]/.exec("u")[0] === "u";
      */
                }
            },
            {
                name: "invalid hexadecimal escapes",
                exec: function() {
                    /*
        return /\x1/.exec("x1")[0] === "x1"
          && /[\x1]/.exec("x")[0] === "x";
      */
                }
            },
            {
                name: "incomplete patterns and quantifiers",
                exec: function() {
                    /*
        return /x{1/.exec("x{1")[0] === "x{1"
          && /x]1/.exec("x]1")[0] === "x]1";
      */
                }
            },
            {
                name: "octal escape sequences",
                exec: function() {
                    /*
        return /\041/.exec("!")[0] === "!"
          && /[\041]/.exec("!")[0] === "!";
      */
                }
            },
            {
                name: "invalid backreferences become octal escapes",
                exec: function() {
                    /*
        return /\41/.exec("!")[0] === "!"
          && /[\41]/.exec("!")[0] === "!";
      */
                }
            }
        ]
    },
    {
        name: "HTML-style comments",
        exec: function() {
            /*
    --> A comment
    <!-- Another comment
    var a = 3; <!-- Another comment
    return a === 3;
  */
        }
    }
];
