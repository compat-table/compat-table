var common = require('./data-common');

var typescript = common.typescript;
var firefox = common.firefox;
var chrome = common.chrome;

exports.name = 'ES Next';
exports.target_file = 'esnext/index.html';
exports.skeleton_file = 'esnext/skeleton.html';

var STAGE0 = 'strawman (stage 0)';
var STAGE1 = 'proposal (stage 1)';
var STAGE2 = 'draft (stage 2)';
var STAGE3 = 'candidate (stage 3)';
var PRESTRAWMAN = 'pre-strawman';

exports.tests = [
{
  name: 'bind (::) operator',
  spec: 'https://github.com/zenparsing/es-function-bind',
  category: STAGE0,
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
        duktape2_0: false,
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
        duktape2_0: false,
      },
    },
  ],
},
{
  name: 'do expressions',
  category: STAGE1,
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
    duktape2_0: false,
  }
},
{
  name: 'function.sent',
  category: STAGE2,
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
    duktape2_0: false,
  }
},
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  category: STAGE3,
  significance: 'large',
  spec: 'https://tc39.github.io/ecmascript_simd/',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD',
  subtests: [
    {
      name: 'basic support',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD',
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        edge12: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'Float32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'Int32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4',
      exec: function(){/*
        return typeof SIMD.Int32x4 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'Int16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8',
      exec: function(){/*
        return typeof SIMD.Int16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Int8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16',
      exec: function(){/*
        return typeof SIMD.Int8x16 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'Uint32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32x4',
      exec: function(){/*
        return typeof SIMD.Uint32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Uint16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16x8',
      exec: function(){/*
        return typeof SIMD.Uint16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Uint8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8x16',
      exec: function(){/*
        return typeof SIMD.Uint8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Bool32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool32x4',
      exec: function(){/*
        return typeof SIMD.Bool32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Bool16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool16x8',
      exec: function(){/*
        return typeof SIMD.Bool16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'Bool8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool8x16',
      exec: function(){/*
        return typeof SIMD.Bool8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.abs',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs',
      exec: function(){/*
        return typeof SIMD.Float32x4.abs === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.add',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add',
      exec: function(){/*
        return typeof SIMD.Float32x4.add === 'function' && typeof SIMD.Int32x4.add === 'function' && typeof SIMD.Uint32x4.add === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.addSaturate',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/addSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.addSaturate === 'function' && typeof SIMD.Int8x16.addSaturate === 'function' && typeof SIMD.Uint16x8.addSaturate === 'function' && typeof SIMD.Uint8x16.addSaturate === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.and',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and',
      exec: function(){/*
        return typeof SIMD.Bool32x4.and === 'function' && typeof SIMD.Bool16x8.and === 'function' && typeof SIMD.Bool8x16.and === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.anyTrue',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/anyTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.anyTrue === 'function' && typeof SIMD.Bool16x8.anyTrue === 'function' && typeof SIMD.Bool8x16.anyTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.allTrue',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/allTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.allTrue === 'function' && typeof SIMD.Bool16x8.allTrue === 'function' && typeof SIMD.Bool8x16.allTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.check',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check',
      exec: function(){/*
        return typeof SIMD.Float32x4.check === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.equal',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal',
      exec: function(){/*
        return typeof SIMD.Float32x4.equal === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.extractLane',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.extractLane === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.greaterThan',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThan === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.greaterThanOrEqual',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.lessThan',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThan === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.lessThanOrEqual',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.mul',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul',
      exec: function(){/*
        return typeof SIMD.Float32x4.mul === 'function' && typeof SIMD.Int32x4.mul === 'function' && typeof SIMD.Uint32x4.mul === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.div',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div',
      exec: function(){/*
        return typeof SIMD.Float32x4.div === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load1',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load1 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load2',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load2 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load3',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load3 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.max',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max',
      exec: function(){/*
        return typeof SIMD.Float32x4.max === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.maxNum',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.maxNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.min',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min',
      exec: function(){/*
        return typeof SIMD.Float32x4.min === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.minNum',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.minNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.neg',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg',
      exec: function(){/*
        return typeof SIMD.Float32x4.neg === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.not',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not',
      exec: function(){/*
        return typeof SIMD.Bool32x4.not === 'function' && typeof SIMD.Bool16x8.not === 'function' && typeof SIMD.Bool8x16.not === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.notEqual',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.notEqual === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.or',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or',
      exec: function(){/*
        return typeof SIMD.Bool32x4.or === 'function' && typeof SIMD.Bool16x8.or === 'function' && typeof SIMD.Bool8x16.or === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalApproximation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalSqrtApproximation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalSqrtApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.replaceLane',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.replaceLane === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.select',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select',
      exec: function(){/*
        return typeof SIMD.Float32x4.select === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftLeftByScalar',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftLeftByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftLeftByScalar === 'function' && typeof SIMD.Int16x8.shiftLeftByScalar === 'function' && typeof SIMD.Int8x16.shiftLeftByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightByScalar',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftRightByScalar === 'function' && typeof SIMD.Int16x8.shiftRightByScalar === 'function' && typeof SIMD.Int8x16.shiftRightByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.shuffle',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle',
      exec: function(){/*
        return typeof SIMD.Float32x4.shuffle === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.splat',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat',
      exec: function(){/*
        return typeof SIMD.Float32x4.splat === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.sqrt',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt',
      exec: function(){/*
        return typeof SIMD.Float32x4.sqrt === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store1',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store2',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store2 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store3',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store3 === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.sub',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub',
      exec: function(){/*
        return typeof SIMD.Float32x4.sub === 'function' && typeof SIMD.Int32x4.sub === 'function' && typeof SIMD.Uint32x4.sub === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.subSaturate',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/subSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.subSaturate === 'function' && typeof SIMD.Int8x16.subSaturate === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.swizzle',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle',
      exec: function(){/*
        return typeof SIMD.Float32x4.swizzle === 'function';
      */},
      res: {
        edge13: "flagged",
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.xor',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor',
      exec: function(){/*
        return typeof SIMD.Bool32x4.xor === 'function' && typeof SIMD.Bool16x8.xor === 'function' && typeof SIMD.Bool8x16.xor === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.fromTIMDBits',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-to-timd',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits',
      exec: function(){/*
        return 'Float32x4,Int32x4,Int8x16,Uint32x4,Uint16x8,Uint8x16'.split(',').every(function(type){
          return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
        });
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.fromTIMD',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-to-timd-logical',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4.fromInt32x4 === 'function' && typeof SIMD.Float32x4.fromUint32x4 === 'function' && typeof SIMD.Int32x4.fromFloat32x4 === 'function' && typeof SIMD.Uint32x4.fromFloat32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        chrome37: chrome.simd,
        edge14: "flagged",
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'class decorators',
  category: STAGE2,
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
    duktape2_0: false,
  }
},
{
  name: 'class properties',
  category: STAGE2,
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
    duktape2_0: false,
  }
},
{
  name: 'Realms',
  category: STAGE1,
  significance: 'large',
  spec: 'https://github.com/caridy/proposal-realms',
  exec: function () {/*
    return typeof Realm === "function"
      && ["eval", "global", "intrinsics", "stdlib", "directEval", "indirectEval", "initGlobal", "nonEval"].every(function(key){
        return key in Realm.prototype;
      });
  */},
  res: {
    duktape2_0: false,
  }
},
{
  name: 'object rest properties',
  significance: 'small',
  spec: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: STAGE3,
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    babel: true,
    typescript: true,
    jsx: true,
    firefox55: true,
    chrome58: 'flagged',
    safaritp: true,
    webkit: true,
    duktape2_0: false,
  }
},
{
  name: 'object spread properties',
  category: STAGE3,
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
    firefox55: true,
    chrome58: 'flagged',
    typescript: true,
    safaritp: true,
    webkit: true,
    duktape2_0: false,
  }
},
{
  name: 'String.prototype.at',
  significance: 'small',
  spec: 'https://github.com/mathiasbynens/String.prototype.at',
  category: STAGE0,
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    babel: true,
    typescript: typescript.corejs,
    es7shim: true,
    duktape2_0: false,
  }
},
{
  name: 'string trimming',
  category: STAGE2,
  significance: 'small',
  spec: 'https://github.com/sebmarkbage/ecmascript-string-left-right-trim',
  subtests: [
    {
      name: 'String.prototype.trimLeft',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
        ie7: false,
        edge12: true,
        firefox2: false,
        firefox3_5: true,
        firefox3_6: true,
        firefox4: true,
        chrome7: true,
        opera10_10: false,
        konq44: false,
        konq49: true,
        besen: false,
        rhino1_7: false,
        phantom: true,
        node0_12: true,
        iojs: true,
        safari3: false,
        safari4: true,
        safaritp: true,
        webkit: true,
        es7shim: true,
        android4_0: true,
        ios5_1: true,
        duktape2_0: false,
      }
    },
    {
      name: 'String.prototype.trimRight',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */},
      res: {
        babel: true,
        typescript: typescript.corejs,
        ie7: false,
        edge12: true,
        firefox2: false,
        firefox3_5: true,
        firefox3_6: true,
        firefox4: true,
        chrome7: true,
        opera10_10: false,
        konq44: false,
        konq49: true,
        besen: false,
        rhino1_7: false,
        phantom: true,
        node0_12: true,
        iojs: true,
        safari3: false,
        safari4: true,
        safaritp: true,
        webkit: true,
        es7shim: true,
        android4_0: true,
        ios5_1: true,
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'global',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-global',
  subtests: [{
    name: '"global" global property is global object',
    exec: function(){/*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof global === 'object' && global && global === actualGlobal && !global.lacksGlobal && global.__system_global_test__ === 42;
    */},
    res: {
      firefox53: {
        val: false,
        note_id: 'ffox-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1325907">some</a> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1326032">compatibility</a> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1328218">issues</a>.',
      },
      safari10_1: false,
      safaritp: {
        val: false,
        note_id: 'wk-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugs.webkit.org/show_bug.cgi?id=165171">compatibility issues</a>.',
      },
      webkit: {
        val: false,
        note_id: 'wk-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugs.webkit.org/show_bug.cgi?id=165171">compatibility issues</a>.',
      },
      node0_10: true,
      node0_12: true,
      node4: true,
      node6: true,
      node6_5: true,
      node7: true,
      node7_6: true,
      duktape2_0: false,
      duktape2_1: true,
    }
  }, {
    name: '"global" global property has correct property descriptor',
    exec: function(){/*
      var actualGlobal = Function('return this')();
      if (typeof global !== 'object') { return false; }
      if (!('global' in actualGlobal)) { return false; }
      if (Object.prototype.propertyIsEnumerable.call(actualGlobal, 'global')) { return false; }
      if (typeof Object.getOwnPropertyDescriptor !== 'function') { return true; } // ES3

      var descriptor = Object.getOwnPropertyDescriptor(actualGlobal, 'global');
      return descriptor.value === actualGlobal && !descriptor.enumerable && descriptor.configurable && descriptor.writable;
    */},
    res: {
      firefox53: {
        val: false,
        note_id: 'ffox-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1325907">some</a> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1326032">compatibility</a> <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1328218">issues</a>.',
      },
      safaritp: {
        val: false,
        note_id: 'wk-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugs.webkit.org/show_bug.cgi?id=165171">compatibility issues</a>.',
      },
      safari10_1: false,
      webkit: {
        val: false,
        note_id: 'wk-global-property',
        note_html: 'The feature was disabled due to <a href="https://bugs.webkit.org/show_bug.cgi?id=165171">compatibility issues</a>.',
      },
      node0_10: false,
      node0_12: false,
      node4: false,
      node6: false,
      node6_5: false,
      node7: false,
      node7_6: false,
      duktape2_0: false,
      duktape2_1: true,
    }
  }]
},
{
  name: 'Math methods for 64-bit integers',
  category: STAGE1,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    },
  ]
},
{
  name: 'Observable',
  category: STAGE1,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'String.prototype.matchAll',
  category: STAGE1,
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
    duktape2_0: false,
  }
},
{
  name: 'additional meta properties',
  category: STAGE0,
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
        duktape2_0: false,
      }
    },
    {
      name: 'function.count',
      exec: function(){/*
        return (_ => function.count)(1, 2, 3) === 3;
      */},
      res: {
        duktape2_0: false,
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
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'method parameter decorators',
  spec: 'https://docs.google.com/document/d/1Qpkqf_8NzAwfD8LdnqPjXAQ2wwh8BBUGynhn-ZlCWT0',
  category: STAGE0,
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
    duktape2_0: false,
  }
},
{
  name: 'function expression decorators',
  spec: 'https://docs.google.com/document/d/1ikxIP5-RVYq6d_f8lAvf3pKC00W78ueyp-xIZ6q67uU/edit?pref=2&pli=1#',
  category: STAGE0,
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
    duktape2_0: false,
  }
},
{
  name: 'weak references',
  spec: 'https://github.com/tc39/proposal-weakrefs',
  category: STAGE1,
  significance: 'large',
  exec: function(){/*
    var O = {};
    var weakref = System.makeWeakRef(O);
    var works = weakref.get() === O;
    weakref.clear();
    return works && weakref.get() === undefined;
  */},
  res : {
    duktape2_0: false,
  }
},
{
  name: 'Async iteration',
  category: STAGE3,
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
        firefox55: firefox.nightly,
        duktape2_0: false,
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
        firefox55: firefox.nightly,
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'RegExp named capture groups',
  spec: 'https://github.com/goyakin/es-regexp-named-groups',
  category: STAGE3,
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
    duktape2_0: false,
  }
},
{
  name: 'RegExp lookbehind',
  spec: 'https://github.com/tc39/proposal-regexp-lookbehind',
  category: STAGE3,
  significance: 'small',
  exec: function(){/*
    return /(?<=a)b/.test('ab') && /(?<!a)b/.test('cb') &&
           !/(?<=a)b/.test('b');
  */},
  res : {
    chrome50: "flagged",
    duktape2_0: false,
  }
},
{
  name: 'RegExp Unicode Property Escapes',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-regexp-unicode-property-escapes',
  exec: function () {/*
    const regexGreekSymbol = /\p{Script=Greek}/u;
    return regexGreekSymbol.test('π');
  */},
  res: {
    chrome59: "flagged",
    duktape2_0: false,
  }
},
{
  name: 'Reflect.isCallable / Reflect.isConstructor',
  category: STAGE0,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'Metadata reflection API',
  category: PRESTRAWMAN,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'zones',
  category: STAGE0,
  significance: 'large',
  spec: 'https://github.com/domenic/zones',
  subtests: [
    {
      name: 'Zone',
      exec: function(){/*
        return typeof Zone == 'function';
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.current',
      exec: function(){/*
        return 'current' in Zone;
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.prototype.name',
      exec: function(){/*
        return 'name' in Zone.prototype;
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.prototype.parent',
      exec: function(){/*
        return 'parent' in Zone.prototype;
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.prototype.fork',
      exec: function(){/*
        return typeof Zone.prototype.fork == 'function';
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.prototype.run',
      exec: function(){/*
        return typeof Zone.prototype.run == 'function';
      */},
      res: {
        duktape2_0: false,
      }
    },
    {
      name: 'Zone.prototype.wrap',
      exec: function(){/*
        return typeof Zone.prototype.wrap == 'function';
      */},
      res: {
        duktape2_0: false,
      }
    }
  ]
},
{
  name: 'frozen realms',
  category: STAGE1,
  significance: 'medium',
  spec: 'https://github.com/FUDCo/frozen-realms',
  exec: function () {/*
    return typeof Reflect.Realm.immutableRoot === 'function'
      && typeof Reflect.Realm.prototype.spawn === 'function';
  */},
  res: {
    duktape2_0: false,
  }
},
{
  name: 'private fields',
  category: STAGE2,
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
        duktape2_0: false,
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
        duktape2_0: false,
      }
    },
  ]
},
{
  name: 'asap',
  spec: 'https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask',
  category: STAGE0,
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
    duktape2_0: false,
  }
},
{
  name: 'syntactic tail calls',
  category: STAGE0,
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
      res: {
        duktape2_0: false,
      },
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
      res: {
        duktape2_0: false,
      },
    }
  ]
},
{
  name: 'Function.prototype.toString',
  category: STAGE3,
  significance: 'small',
  spec: 'https://tc39.github.io/Function-prototype-toString-revision/',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString',
  subtests: [{
    name: 'functions created with the Function constructor',
    exec: function(){/*
      var fn = Function('a', ' /\x2A a \x2A/ b, c /\x2A b \x2A/ //', '/\x2A c \x2A/ ; /\x2A d \x2A/ //');
      var str = 'function anonymous(a, /\x2A a \x2A/ b, c /\x2A b \x2A/ //\n) {\n/\x2A c \x2A/ ; /\x2A d \x2A/ //\n}';
      return fn + '' === str;
    */},
    res: {
      firefox54: true,
      chrome59: "flagged",
      duktape2_0: false,
    },
  }, {
    name: 'arrows',
    exec: function(){/*
      var str = 'a => b';
      return eval('(' + str + ')') + '' === str;
    */},
    res: {
      node4: true,
      firefox51: true,
      chrome50: true,
      safari10: true,
      edge13: true,
      duktape2_0: false,
    },
  }, {
    name: '[native code]',
    exec: function(){/*
      const NATIVE_EVAL_RE = /\bfunction\b[\s\S]*\beval\b[\s\S]*\([\s\S]*\)[\s\S]*\{[\s\S]*\[[\s\S]*\bnative\b[\s\S]+\bcode\b[\s\S]*\][\s\S]*\}/;
      return NATIVE_EVAL_RE.test(eval + '');
    */},
    res: {
      ie11: true,
      node4: true,
      firefox45: true,
      chrome50: true,
      safari3_1: true,
      edge13: true,
      duktape2_0: true,
    },
  }, {
    name: 'class expression with implicit constructor',
    exec: function(){/*
      var str = 'class A {}';
      return eval('(' + str + ')') + '' === str;
    */},
    res: {
      node4: true,
      firefox55: true,
      chrome50: true,
      safari10: true,
      edge14: true,
      duktape2_0: false,
    },
  }, {
    name: 'class expression with explicit constructor',
    exec: function(){/*
      var str = 'class /\x2A a \x2A/ A /\x2A b \x2A/ extends /\x2A c \x2A/ function B(){} /\x2A d \x2A/ { /\x2A e \x2A/ constructor /\x2A f \x2A/ ( /\x2A g \x2A/ ) /\x2A h \x2A/ { /\x2A i \x2A/ ; /\x2A j \x2A/ } /\x2A k \x2A/ m /\x2A l \x2A/ ( /\x2A m \x2A/ ) /\x2A n \x2A/ { /\x2A o \x2A/ } /\x2A p \x2A/ }';
      return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */},
    res: {
      node4: true,
      firefox55: true,
      chrome50: true,
      safari10: true,
      edge14: true,
      duktape2_0: false,
    },
  }, {
    name: 'unicode escape sequences in identifiers',
    exec: function(){/*
      var str = 'function \\u0061(\\u{62}, \\u0063) { \\u0062 = \\u{00063}; return b; }';
      return eval('(/\x2A before \x2A/' + str + '/\x2A after \x2A/)') + '' === str;
    */},
    res: {
      firefox54: true,
      chrome59: "flagged",
      duktape2_0: false,
    },
  }, {
    name: 'methods and computed property names',
    exec: function(){/*
      var str = '[ /\x2A a \x2A/ "f" /\x2A b \x2A/ ] /\x2A c \x2A/ ( /\x2A d \x2A/ ) /\x2A e \x2A/ { /\x2A f \x2A/ }';
      return eval('({ /\x2A before \x2A/' + str + '/\x2A after \x2A/ }.f)') + '' === str;
    */},
    res: {
      firefox54: true,
      chrome59: "flagged",
      duktape2_0: false,
    },
  }]
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = [STAGE3, STAGE2, STAGE1, STAGE0, PRESTRAWMAN].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ESnext category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
