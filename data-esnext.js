var common = require('./data-common');

var typescript = common.typescript;
var firefox = common.firefox;

exports.name = 'ES Next';
exports.target_file = 'esnext/index.html';
exports.skeleton_file = 'esnext/skeleton.html';

exports.tests = [
{
  name: 'bind (::) operator',
  spec: 'https://github.com/zenparsing/es-function-bind',
  category: 'strawman (stage 0)',
  significance: 'medium',
  subtests: [
    {
      name: 'binary form',
      exec: function () {/*
        function foo() { this.garply += "foo"; return this; }
        var obj = { garply: "bar" };
        return typeof obj::foo === "function" && obj::foo().garply === "barfoo";
      */},
      res: {
        babel: true,
      }
    },
    {
      name: 'unary form',
      exec: function () {/*
        var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
        return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
      */},
      res: {
        babel: true,
      },
    },
  ],
},
{
  name: 'do expression',
  category: 'strawman (stage 0)',
  significance: 'small',
  spec: 'http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions',
  exec: function () {/*
    return do {
      let x = 23;
      x + 19;
    } === 42;
  */},
  res: {
    babel: true,
  }
},
{
  name: 'function.sent',
  category: 'draft (stage 2)',
  significance: 'small',
  spec: 'https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md',
  exec: function () {/*
    var result;
    function* generator() {
      result = function.sent;
    }
    var iter = generator();
    iter.next('tromple');
    return result === 'tromple';
  */},
  res: {
  }
},
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  category: 'candidate (stage 3)',
  significance: 'large',
  spec: 'https://tc39.github.io/ecmascript_simd/',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        edge12: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Float32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Int32x4',
      exec: function(){/*
        return typeof SIMD.Int32x4 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Int16x8',
      exec: function(){/*
        return typeof SIMD.Int16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Int8x16',
      exec: function(){/*
        return typeof SIMD.Int8x16 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Uint32x4',
      exec: function(){/*
        return typeof SIMD.Uint32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Uint16x8',
      exec: function(){/*
        return typeof SIMD.Uint16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Uint8x16',
      exec: function(){/*
        return typeof SIMD.Uint8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Bool32x4',
      exec: function(){/*
        return typeof SIMD.Bool32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Bool16x8',
      exec: function(){/*
        return typeof SIMD.Bool16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'Bool8x16',
      exec: function(){/*
        return typeof SIMD.Bool8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.abs',
      exec: function(){/*
        return typeof SIMD.Float32x4.abs === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.add',
      exec: function(){/*
        return typeof SIMD.Float32x4.add === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.addSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.addSaturate === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%booleanType%.and',
      exec: function(){/*
        return typeof SIMD.Bool16x8.and === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%booleanType%.anyTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.anyTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%booleanType%.allTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.allTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.check',
      exec: function(){/*
        return typeof SIMD.Float32x4.check === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.equal',
      exec: function(){/*
        return typeof SIMD.Float32x4.equal === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.extractLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.extractLane === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.greaterThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThan === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.greaterThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.lessThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThan === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.lessThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.mul',
      exec: function(){/*
        return typeof SIMD.Float32x4.mul === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.div',
      exec: function(){/*
        return typeof SIMD.Float32x4.div === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.load1',
      exec: function(){/*
        return typeof SIMD.Float32x4.load1 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.load2',
      exec: function(){/*
        return typeof SIMD.Float32x4.load2 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.load3',
      exec: function(){/*
        return typeof SIMD.Float32x4.load3 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.max',
      exec: function(){/*
        return typeof SIMD.Float32x4.max === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.maxNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.maxNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.min',
      exec: function(){/*
        return typeof SIMD.Float32x4.min === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.minNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.minNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.neg',
      exec: function(){/*
        return typeof SIMD.Float32x4.neg === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.not',
      exec: function(){/*
        return typeof SIMD.Bool16x8.not === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.notEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.notEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.or',
      exec: function(){/*
        return typeof SIMD.Bool16x8.or === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.reciprocalApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.reciprocalSqrtApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalSqrtApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.replaceLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.replaceLane === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.select',
      exec: function(){/*
        return typeof SIMD.Float32x4.select === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftLeftByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftLeftByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftRightByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.shuffle',
      exec: function(){/*
        return typeof SIMD.Float32x4.shuffle === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.splat',
      exec: function(){/*
        return typeof SIMD.Float32x4.splat === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.sqrt',
      exec: function(){/*
        return typeof SIMD.Float32x4.sqrt === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store1',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store2',
      exec: function(){/*
        return typeof SIMD.Float32x4.store2 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store3',
      exec: function(){/*
        return typeof SIMD.Float32x4.store3 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.sub',
      exec: function(){/*
        return typeof SIMD.Float32x4.sub === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.subSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.subSaturate === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.swizzle',
      exec: function(){/*
        return typeof SIMD.Float32x4.swizzle === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.xor',
      exec: function(){/*
        return typeof SIMD.Bool16x8.xor === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.fromTIMDBits',
      exec: function(){/*
        return 'Float32x4,Int32x4,Int8x16,Uint32x4,Uint16x8,Uint8x16'.split(',').every(function(type){
          return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
        });
      */},
      res: {
        firefox48: firefox.nightly,
        edge14: "flagged",
      }
    },
    {
      name: 'SIMD.%type%.fromTIMD',
      exec: function(){/*
        return 'Float32x4,Uint32x4'.split(',').every(function(type){
          return typeof SIMD.Int32x4['from' + type] === 'function';
        });
      */},
      res: {
      }
    }
  ]
},
{
  name: 'class decorators',
  category: 'draft (stage 2)',
  significance: 'medium',
  spec: 'https://github.com/wycats/javascript-decorators',
  exec: function(){/*
    class A {
      @nonconf
      get B() {}
    }
    function nonconf(target, name, descriptor) {
      descriptor.configurable = false;
      return descriptor;
    }
    return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
  */},
  res: {
    babel: {val: false, note_id: "regenerator-decorators-legacy", note_html: "Babel 6 still has no official support decorators, but you can use <a href='https://github.com/loganfsmyth/regenerator-plugin-transform-decorators-legacy'>this plugin</a>."},
    typescript: true,
  }
},
{
  name: 'class properties',
  category: 'draft (stage 2)',
  significance: 'medium',
  spec: 'https://github.com/jeffmo/es-class-properties',
  exec: function () {/*
    class C {
      x = 'x';
      static y = 'y';
    }
    return new C().x + C.y === 'xy';
  */},
  res: {
    babel: true,
    tr: true,
    typescript: true,
  }
},
{
  name: 'Realms',
  category: 'strawman (stage 0)',
  significance: 'large',
  spec: 'https://github.com/caridy/proposal-realms',
  exec: function () {/*
    return typeof Realm === "function"
      && ["eval", "global", "intrinsics", "stdlib", "directEval", "indirectEval", "initGlobal", "nonEval"].every(function(key){
        return key in Realm.prototype;
      });
  */},
  res: {
  }
},
{
  name: 'object rest properties',
  significance: 'small',
  spec: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: 'candidate (stage 3)',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    babel: true,
    jsx: true,
  }
},
{
  name: 'object spread properties',
  category: 'candidate (stage 3)',
  significance: 'medium',
  spec: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O !== spread && (O.a + O.b + O.c) === 6;
  */},
  res: {
    babel: true,
    jsx: true,
  }
},
{
  name: 'String.prototype.at',
  significance: 'small',
  spec: 'https://github.com/mathiasbynens/String.prototype.at',
  category: 'strawman (stage 0)',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    babel: true,
    typescript: typescript.corejs,
    es7shim: true,
  }
},
{
  name: 'string trimming',
  category: 'draft (stage 2)',
  significance: 'small',
  spec: 'https://github.com/sebmarkbage/ecmascript-string-left-right-trim',
  subtests: [
    {
      name: 'String.prototype.trimLeft',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
        edge12: true,
        firefox3: false,
        firefox3_5: true,
        firefox3_6: true,
        firefox4: true,
        chrome30: true,
        node012: true,
        iojs: true,
        safari51: true,
        safari9: true,
        safaritp: true,
        webkit: true,
        es7shim: true,
        android40: true,
        ios51: true,
      }
    },
    {
      name: 'String.prototype.trimRight',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
        edge12: true,
        firefox3: false,
        firefox3_5: true,
        firefox3_6: true,
        firefox4: true,
        chrome30: true,
        node012: true,
        iojs: true,
        safari51: true,
        safari9: true,
        safaritp: true,
        webkit: true,
        es7shim: true,
        android40: true,
        ios51: true,
      }
    },
    {
      name: 'String.prototype.trimStart',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'String.prototype.trimEnd',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    }
  ]
},
{
  name: 'global',
  category: 'candidate (stage 3)',
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-global',
  exec: function(){/*
    Function('return this')().__system_global_test__ = 42;
    return typeof global === 'object' && global && !global.lacksGlobal && global.__system_global_test__ === 42;
  */},
  res: {
    node012: true,
    node4: true,
    node6: false,
  }
},
{
  name: 'Math methods for 64-bit integers',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  spec: 'https://gist.github.com/BrendanEich/4294d5c212a6d2254703',
  subtests: [
    {
      name: 'Math.iaddh',
      exec: function(){/*
        return Math.iaddh(0xffffffff, 1, 1, 1) === 3;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Math.isubh',
      exec: function(){/*
        return Math.isubh(0, 4, 1, 1) === 2;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Math.imulh',
      exec: function(){/*
        return Math.imulh(0xffffffff, 7) === -1;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Math.umulh',
      exec: function(){/*
        return Math.umulh(0xffffffff, 7) === 6;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
  ]
},
{
  name: 'Observable',
  category: 'proposal (stage 1)',
  significance: 'medium',
  spec: 'https://github.com/zenparsing/es-observable',
  'subtests': [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof Observable !== 'undefined';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Symbol.observable well known symbol',
      exec: function () {/*
        return typeof Symbol.observable === 'symbol';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype.subscribe',
      exec: function () {/*
        return 'subscribe' in Observable.prototype;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable constructor behavior',
      exec: function () {/*
        if(!(new Observable(function(){}) instanceof Observable))return false;

        var nonCallableCheckPassed,
            primitiveCheckPassed,
            newCheckPassed;

        try { new Observable({ }) } catch(e) { nonCallableCheckPassed = true }
        try { new Observable(false) } catch(e) { primitiveCheckPassed = true }
        try { Observable(function() { }) } catch(e) { newCheckPassed = true }

        return nonCallableCheckPassed && primitiveCheckPassed && newCheckPassed;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype.forEach',
      exec: function () {/*
        var o = new Observable(function() { });
        return 'forEach' in Observable.prototype && o.forEach(function(e){return true}) instanceof Promise;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype[Symbol.observable]',
      exec: function () {/*
        var o = new Observable(function() { });
        return Symbol.observable in Observable.prototype && o[Symbol.observable]() === o;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.of',
      exec: function () {/*
        return Observable.of(1, 2, 3) instanceof Observable;
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.from',
      exec: function () {/*
        return (Observable.from([1,2,3,4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    }
  ]
},
{
  name: 'String.prototype.matchAll',
  category: 'proposal (stage 1)',
  significance: 'small',
  spec: 'https://github.com/tc39/String.prototype.matchAll',
  exec: function(){/*
    var iterator = '11a2bb'.matchAll(/(\d)(\D)/);
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
    babel: true,
    typescript: typescript.corejs,
  }
},
{
  name: 'shared memory and atomics',
  category: 'draft (stage 2)',
  significance: 'large',
  spec: 'https://github.com/tc39/ecmascript_sharedmem',
  'subtests': [
    {
      name: 'SharedArrayBuffer',
      exec: function () {/*
        return typeof SharedArrayBuffer === 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
      }
    },
    {
      name: 'SharedArrayBuffer[Symbol.species]',
      exec: function () {/*
        return SharedArrayBuffer[Symbol.species]() === SharedArrayBuffer;
      */},
      res: {
      }
    },
    {
      name: 'SharedArrayBuffer.prototype.byteLength',
      exec: function () {/*
        return 'byteLength' in SharedArrayBuffer.prototype;
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,

      }
    },
    {
      name: 'SharedArrayBuffer.prototype.slice',
      exec: function () {/*
        return typeof SharedArrayBuffer.prototype.slice === 'function';
      */},
      res: {
        firefox52: firefox.developer,
      }
    },
    {
      name: 'SharedArrayBuffer.prototype[Symbol.toStringTag]',
      exec: function () {/*
        return SharedArrayBuffer.prototype[Symbol.toStringTag] === 'SharedArrayBuffer';
      */},
      res: {
        firefox52: firefox.developer,
      }
    },
    {
      name: 'Atomics.add',
      exec: function () {/*
        return typeof Atomics.add == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.and',
      exec: function () {/*
        return typeof Atomics.and == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.compareExchange',
      exec: function () {/*
        return typeof Atomics.compareExchange == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.exchange',
      exec: function () {/*
        return typeof Atomics.exchange == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.wait',
      exec: function () {/*
        return typeof Atomics.wait == 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.wake',
      exec: function () {/*
        return typeof Atomics.wake == 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.isLockFree',
      exec: function () {/*
        return typeof Atomics.isLockFree == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.load',
      exec: function () {/*
        return typeof Atomics.load == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.or',
      exec: function () {/*
        return typeof Atomics.or == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.store',
      exec: function () {/*
        return typeof Atomics.store == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.sub',
      exec: function () {/*
        return typeof Atomics.sub == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    },
    {
      name: 'Atomics.xor',
      exec: function () {/*
        return typeof Atomics.xor == 'function';
      */},
      res: {
        firefox46: firefox.nightly,
        firefox51: firefox.developer,
        safaritp: true,
        webkit: true,
      }
    }
  ]
},
{
  name: 'additional meta properties',
  category: 'strawman (stage 0)',
  significance: 'medium',
  spec: 'https://github.com/allenwb/ESideas/blob/master/ES7MetaProps.md',
  subtests: [
    {
      name: 'function.callee',
      exec: function(){/*
        var f = _ => function.callee === f;
        return f();
      */},
      res: {
      }
    },
    {
      name: 'function.count',
      exec: function(){/*
        return (_ => function.count)(1, 2, 3) === 3;
      */},
      res: {
      }
    },
    {
      name: 'function.arguments',
      exec: function(){/*
        var arr =  (_ => function.arguments)(1, 2, 3);
        return Array.isArray(arr)
          && arr.length === 3
          && arr[0] === 1
          && arr[1] === 2
          && arr[2] === 3;
      */},
      res: {
      }
    }
  ]
},
{
  name: 'method parameter decorators',
  spec: 'https://docs.google.com/document/d/1Qpkqf_8NzAwfD8LdnqPjXAQ2wwh8BBUGynhn-ZlCWT0',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
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
  */},
  res : {
    typescript: true,
  }
},
{
  name: 'function expression decorators',
  spec: 'https://docs.google.com/document/d/1ikxIP5-RVYq6d_f8lAvf3pKC00W78ueyp-xIZ6q67uU/edit?pref=2&pli=1#',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    function inverse(f){
      return function(){
        return !f.apply(this, arguments);
      };
    }
    return (@inverse function(it){
      return it % 2;
    })(2);
  */},
  res : {
  }
},
{
  name: 'weak references',
  spec: 'https://github.com/tc39/proposal-weakrefs',
  category: 'proposal (stage 1)',
  significance: 'large',
  exec: function(){/*
    var O = {};
    var weakref = System.makeWeakRef(O);
    var works = weakref.get() === O;
    weakref.clear();
    return works && weakref.get() === undefined;
  */},
  res : {
  }
},
{
  name: 'Async iteration',
  category: 'candidate (stage 3)',
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
        babel: true,
      }
    },
    {
      name: 'for-await-of loops',
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
        babel: true,
      }
    }
  ]
},
{
  name: 'RegExp named capture groups',
  spec: 'https://github.com/goyakin/es-regexp-named-groups',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    var result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2016-03-11');
    return result.groups.year === '2016'
      && result.groups.month === '03'
      && result.groups.day === '11'
      && result.groups[0] === '2016-03-11'
      && result.groups[1] === '2016'
      && result.groups[2] === '03'
      && result.groups[3] === '11';
  */},
  res : {
  }
},
{
  name: 'RegExp lookbehind',
  spec: 'https://github.com/goyakin/es-regexp-lookbehind',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    return /(?<=a)b/.test('ab') && /(?<!a)b/.test('cb');
  */},
  res : {
    chrome50: "flagged",
  }
},
{
  name: 'Reflect.isCallable / Reflect.isConstructor',
  category: 'strawman (stage 0)',
  significance: 'small',
  spec: 'https://github.com/caitp/TC39-Proposals/blob/master/tc39-reflect-isconstructor-iscallable.md',
  subtests: [
    {
      name: 'Reflect.isCallable',
      exec: function(){/*
        return Reflect.isCallable(function(){})
          && Reflect.isCallable(_ => _)
          && !Reflect.isCallable(class {});
      */},
      res: {
      }
    },
    {
      name: 'Reflect.isConstructor',
      exec: function(){/*
        return Reflect.isConstructor(function(){})
          && !Reflect.isConstructor(_ => _)
          && Reflect.isConstructor(class {});
      */},
      res: {
      }
    }
  ]
},
{
  name: 'Metadata reflection API',
  category: 'pre-strawman',
  significance: 'medium',
  spec: 'https://github.com/rbuckton/ReflectDecorators',
  subtests: [
    {
      name: 'Reflect.defineMetadata',
      exec: function(){/*
        return typeof Reflect.defineMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.hasMetadata',
      exec: function(){/*
        return typeof Reflect.hasMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.hasOwnMetadata',
      exec: function(){/*
        return typeof Reflect.hasOwnMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getMetadata',
      exec: function(){/*
        return typeof Reflect.getMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getOwnMetadata',
      exec: function(){/*
        return typeof Reflect.getOwnMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getMetadataKeys == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getOwnMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getOwnMetadataKeys == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.deleteMetadata',
      exec: function(){/*
        return typeof Reflect.deleteMetadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.metadata',
      exec: function(){/*
        return typeof Reflect.metadata == 'function';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
      }
    }
  ]
},
{
  name: 'zones',
  category: 'strawman (stage 0)',
  significance: 'large',
  spec: 'https://github.com/domenic/zones',
  subtests: [
    {
      name: 'Zone',
      exec: function(){/*
        return typeof Zone == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.current',
      exec: function(){/*
        return 'current' in Zone;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.name',
      exec: function(){/*
        return 'name' in Zone.prototype;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.parent',
      exec: function(){/*
        return 'parent' in Zone.prototype;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.fork',
      exec: function(){/*
        return typeof Zone.prototype.fork == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.run',
      exec: function(){/*
        return typeof Zone.prototype.run == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.wrap',
      exec: function(){/*
        return typeof Zone.prototype.wrap == 'function';
      */},
      res: {
      }
    }
  ]
},
{
  name: 'frozen realms',
  category: 'proposal (stage 1)',
  significance: 'medium',
  spec: 'https://github.com/FUDCo/frozen-realms',
  exec: function () {/*
    return typeof Reflect.Realm.immutableRoot === 'function'
      && typeof Reflect.Realm.prototype.spawn === 'function';
  */},
  res: {
  }
},
{
  name: 'private fields',
  category: 'proposal (stage 1)',
  significance: 'medium',
  spec: 'https://github.com/zenparsing/es-private-fields',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
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
      */},
      res: {
      }
    },
    {
      name: 'initializers',
      exec: function () {/*
        class C {
          #x = 42;
          x(){
            return this.#x;
          }
        }
        return new C().x() === 42;
      */},
      res: {
      }
    },
  ]
},
{
  name: 'asap',
  spec: 'https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask',
  category: 'strawman (stage 0)',
  significance: 'medium',
  exec: function(){/*
    var passed = false;
    setTimeout(function(){ passed = false; }, 1);
    asap(function(){ if(passed)asyncTestPassed(); });
    passed = true;
  */},
  res : {
    babel: true,
    typescript: typescript.corejs,
  }
},
{
  name: 'syntactic tail calls',
  category: 'strawman (stage 0)',
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-ptc-syntax',
  subtests: [
    {
      name: 'direct recursion',
      exec: function() {/*
        "use strict";
        return (function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return continue f(n - 1);
        }(1e6)) === "foo";
      */},
      res: {},
    },
    {
      name: 'mutual recursion',
      exec: function() {/*
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
      */},
      res: {},
    }
  ]
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['candidate (stage 3)', 'draft (stage 2)', 'proposal (stage 1)', 'strawman (stage 0)', 'pre-strawman'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ESnext category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
