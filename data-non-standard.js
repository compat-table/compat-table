var common = require('./data-common');

var firefox = common.firefox;
var chrome = common.chrome;
var edge = common.edge;

exports.name = 'Non-standard';
exports.target_file = 'non-standard/index.html';
exports.skeleton_file = 'non-standard/skeleton.html';

exports.tests = [
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  spec: 'https://tc39.github.io/ecmascript_simd/',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD',
  subtests: [
    {
      name: 'basic support',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD',
      exec: function () {/*
        simdFloatTypes=['Float32x4'];
        simdBoolTypes=['Bool32x4','Bool16x8','Bool8x16'];
        simdIntTypes=['Int32x4','Int16x8','Int8x16','Uint32x4','Uint16x8','Uint8x16'];
        simd32bitFloatIntTypes=['Float32x4','Int32x4','Uint32x4'];
        simdSmallIntTypes=['Int16x8','Int8x16','Uint16x8','Uint8x16'];
        simdBoolIntTypes=simdBoolTypes.concat(simdIntTypes);
        simdFloatIntTypes=simdFloatTypes.concat(simdIntTypes);
        simdAllTypes=simdFloatTypes.concat(simdIntTypes,simdBoolTypes);
        return typeof SIMD !== 'undefined';
      */},
      res: {
        ie11: false,
        edge12: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'Float32x4',
      spec: 'https://tc39.github.io/ecmascript_simd/#float32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4 === 'function';
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'Int32x4',
      spec: 'https://tc39.github.io/ecmascript_simd/#int32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4',
      exec: function(){/*
        return typeof SIMD.Int32x4 === 'function';
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'Int16x8',
      spec: 'https://tc39.github.io/ecmascript_simd/#int16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8',
      exec: function(){/*
        return typeof SIMD.Int16x8 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Int8x16',
      spec: 'https://tc39.github.io/ecmascript_simd/#int8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16',
      exec: function(){/*
        return typeof SIMD.Int8x16 === 'function';
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'Uint32x4',
      spec: 'https://tc39.github.io/ecmascript_simd/#uint32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32x4',
      exec: function(){/*
        return typeof SIMD.Uint32x4 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Uint16x8',
      spec: 'https://tc39.github.io/ecmascript_simd/#uint16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16x8',
      exec: function(){/*
        return typeof SIMD.Uint16x8 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Uint8x16',
      spec: 'https://tc39.github.io/ecmascript_simd/#uint8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8x16',
      exec: function(){/*
        return typeof SIMD.Uint8x16 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Bool32x4',
      spec: 'https://tc39.github.io/ecmascript_simd/#bool32x4',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool32x4',
      exec: function(){/*
        return typeof SIMD.Bool32x4 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Bool16x8',
      spec: 'https://tc39.github.io/ecmascript_simd/#bool16x8',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool16x8',
      exec: function(){/*
        return typeof SIMD.Bool16x8 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'Bool8x16',
      spec: 'https://tc39.github.io/ecmascript_simd/#bool8x16',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Bool8x16',
      exec: function(){/*
        return typeof SIMD.Bool8x16 === 'function';
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.abs',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-abs',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].abs === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.add',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-add',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].add === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.addSaturate',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-add-saturate',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/addSaturate',
      exec: function(){/*
        return simdSmallIntTypes.every(function(type){
          return typeof SIMD[type].addSaturate === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.and',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-and',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and',
      exec: function(){/*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].and === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.anyTrue',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-any-true',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/anyTrue',
      exec: function(){/*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].anyTrue === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%booleanType%.allTrue',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-all-true',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/allTrue',
      exec: function(){/*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].allTrue === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.check',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-check',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check',
      exec: function(){/*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].check === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.equal',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-equal',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].equal === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.extractLane',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-extract-lane',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane',
      exec: function(){/*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].extractLane === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.greaterThan',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-greater-than',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].greaterThan === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.greaterThanOrEqual',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-greater-than-or-equal',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].greaterThanOrEqual === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.lessThan',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-less-than',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].lessThan === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.lessThanOrEqual',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-less-than-or-equal',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].lessThanOrEqual === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.mul',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-mul',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].mul === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.div',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-div',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].div === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-load-function',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].load === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load1',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load1 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load2',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load2 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.load3',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].load3 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.max',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-max',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].max === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.maxNum',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-max-num',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].maxNum === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        edge15: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.min',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-min',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].min === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.minNum',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-min-num',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].minNum === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        edge15: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.neg',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-neg',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].neg === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.not',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-not',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not',
      exec: function(){/*
        return simdBoolTypes.every(function(type){
          return typeof SIMD[type].not === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.notEqual',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-not-equal',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].notEqual === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.or',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-or',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or',
      exec: function(){/*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].or === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.reciprocalApproximation',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-reciprocal-approximation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].reciprocalApproximation === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.reciprocalSqrtApproximation',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-reciprocal-sqrt-approximation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].reciprocalSqrtApproximation === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.replaceLane',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-replace-lane',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane',
      exec: function(){/*
        return simdAllTypes.every(function(type){
          return typeof SIMD[type].replaceLane === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.select',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-select',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].select === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftLeftByScalar',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-shift-left-by-scalar',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftLeftByScalar',
      exec: function(){/*
        return simdIntTypes.every(function(type){
          return typeof SIMD[type].shiftLeftByScalar === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightByScalar',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-shift-right-by-scalar',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightByScalar',
      exec: function(){/*
        return simdIntTypes.every(function(type){
          return typeof SIMD[type].shiftRightByScalar === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.shuffle',
      spec: 'https://tc39.github.io/ecmascript_simd/#shuffle',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].shuffle === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.splat',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-splat',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].splat === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%floatType%.sqrt',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-sqrt',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt',
      exec: function(){/*
        return simdFloatTypes.every(function(type){
          return typeof SIMD[type].sqrt === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-store-function',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].store === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store1',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store1 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store2',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store2 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.store3',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store',
      exec: function(){/*
        return simd32bitFloatIntTypes.every(function(type){
          return typeof SIMD[type].store3 === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.sub',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-sub',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].sub === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%integerType%.subSaturate',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-sub-saturate',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/subSaturate',
      exec: function(){/*
        return simdSmallIntTypes.every(function(type){
          return typeof SIMD[type].subSaturate === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.swizzle',
      spec: 'https://tc39.github.io/ecmascript_simd/#swizzle',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle',
      exec: function(){/*
        return simdFloatIntTypes.every(function(type){
          return typeof SIMD[type].swizzle === 'function';
        });
      */},
      res: {
        ie11: false,
        edge13: edge.experimental,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.xor',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-xor',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor',
      exec: function(){/*
        return simdBoolIntTypes.every(function(type){
          return typeof SIMD[type].xor === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    },
    {
      name: 'SIMD.%type%.fromTIMDBits',
      spec: 'https://tc39.github.io/ecmascript_simd/#simd-to-timd',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits',
      exec: function(){/*
        return ['Float32x4','Int32x4','Int8x16','Uint32x4','Uint16x8','Uint8x16'].every(function(type){
          return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
        });
      */},
      res: {
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
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
        ie11: false,
        edge16: false,
        firefox2: false,
        firefox48: firefox.nightly,
        firefox63: false,
        opera10_50: false,
        chrome37: chrome.simd,
        chrome58: false,
        edge14: edge.experimental,
        duktape2_0: false,
      }
    }
  ],
  separator: 'after'
},
{
  name: 'decompilation',
  subtests: [
    {
      name: 'uneval, existence',
      spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval',
      exec: function () {/*
        return typeof uneval == 'function';
      */},
      res: {
        ie11: false,
        firefox2: true,
        firefox74: false,
        opera10_50: false,
        chrome77: false,
        rhino1_7: true,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'built-in "toSource" methods',
      spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource',
      mdn: 'https://developer.mozilla.org/en-US/search?q=tosource',
      exec: function () {/*
        return 'toSource' in Object.prototype
            && Number   .prototype.hasOwnProperty('toSource')
            && Boolean  .prototype.hasOwnProperty('toSource')
            && String   .prototype.hasOwnProperty('toSource')
            && Function .prototype.hasOwnProperty('toSource')
            && Array    .prototype.hasOwnProperty('toSource')
            && RegExp   .prototype.hasOwnProperty('toSource')
            && Date     .prototype.hasOwnProperty('toSource')
            && Error    .prototype.hasOwnProperty('toSource');
      */},
      res: {
        ie11: false,
        firefox2: true,
        firefox74: false,
        opera10_50: false,
        chrome77: false,
        besen: true,
        rhino1_7: true,
        duktape2_0: false,
        graalvm: false,
      },
    },
    {
      name: '"toSource" method as hook for uneval',
      exec: function () {/*
        return uneval({ toSource: function() { return "pwnd!" } }) === "pwnd!";
      */} ,
      res: {
        ie11: false,
        firefox2: true,
        firefox74: false,
        opera10_50: false,
        chrome77: false,
        rhino1_7: null,
        duktape2_0: false,
        graalvm: false,
      },
    },
    {
      name: 'eval(uneval(value)) is functionally equivalent to value',
      exec: function () {/*

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
      */} ,
      res: {
        ie11: false,
        firefox2: true,
        firefox74: false,
        opera10_50: false,
        chrome77: false,
        besen: null,
        rhino1_7: null,
        duktape2_0: false,
        graalvm: false,
      },
    },
  ]
},
{
  name: 'optional "scope" argument of "eval"',
  spec: null,
  exec: function () {/*
    var x = 1;
    return eval("x", { x: 2 }) === 2;
  */},
  res: {
    ie11: false,
    firefox2: true,
    firefox3: false,
    firefox3_5: true,
    firefox4: false,
    opera10_50: false,
    chrome77: false,
    rhino1_7: null,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'function "caller" property',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller',
  exec: function () {
    return 'caller' in function(){};
  },
  res: {
    ie7: true,
    firefox2: true,
    opera7_5: false,
    opera10_10: false,
    opera10_50: true,
    chrome7: true,
    safari3_1: true,
    konq4_4: true,
    besen: false,
    rhino1_7: false,
    phantom: true,
    android4_0: true,
    duktape2_0: false,
    graalvm: true,
  }
},
{
  name: 'function "arity" property',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity',
  exec: function () {
    return (function () {}).arity === 0 &&
      (function (x) { return x; }).arity === 1 &&
      (function (x, y) { return y; }).arity === 2;
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox7: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'function "arguments" property',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments',
  exec: function () {
    function f(a, b) {
      return f.arguments && a === 1 && f.arguments[0] === 1 && b === 'boo' && f.arguments[1] === 'boo';
    }
    return f(1, 'boo');
  },
  res: {
    ie7: true,
    firefox2: true,
    opera7_5: true,
    opera10_10: true,
    opera10_50: true,
    chrome7: true,
    safari3_1: true,
    konq4_4: true,
    besen: false,
    rhino1_7: true,
    phantom: true,
    android4_0: true,
    duktape2_0: false,
    graalvm: true,
  }
},
{
  name: 'Function.prototype.isGenerator',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/isGenerator',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator',
  exec: function () {
    return typeof Function.prototype.isGenerator == 'function';
  },
  res: {
    ie7: false,
    firefox2: false,
    firefox5: true,
    firefox57: true,
    firefox58: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'class extends null',
  spec: 'https://github.com/tc39/ecma262/issues/543',
  exec: function() {/*
     class C extends null {}
     return new C instanceof C;
     */},
  res: {
    ie11: false,
    safari10_1: true,
    safari11_1: false,
    safaritp: false,
    webkit: false,
    opera7_5: false,
    opera10_50: false,
    chrome77: false,
    duktape2_0: false,
    graalvm: false,
  },
},
{
  name: '__count__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/prototype',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/count',
  exec: function () {
    return typeof ({}).__count__ === 'number' &&
      ({ x: 1, y: 2 }).__count__ === 2;
    },
  res: {
    ie7: false,
    firefox2: true,
    firefox4: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: '__parent__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/Parent',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent',
  exec: function () {
    return typeof ({}).__parent__ !== 'undefined';
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox4: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: '__noSuchMethod__',
  spec: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/noSuchMethod',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod',
  exec: function () {
    var o = { }, executed = false;
    o.__noSuchMethod__ = function () { executed = true; };
    try {
      o.__i_dont_exist();
    } catch (e) { }
    return executed;
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox44: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: {
      val: "flagged",
      note_id: 'graalvm-nashorn-compat',
      note_html: 'The feature has to be enabled via the <code>--nashorn-compat</code> flag.'
    },
  }
},
{
  name: 'Array generics',
  exec: function () {
    return typeof Array.slice === 'function' && Array.slice('abc').length === 3;
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox70: {val: true, note_id: "firefox-not-nightly", note_html: "The feature is disabled only in Firefox Nightly builds."},
    firefox71: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'String generics',
  exec: function () {
    return typeof String.slice === 'function' && String.slice(123, 1) === "23";
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox67: true,
    firefox68: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'Array comprehensions (JS 1.8 style)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_comprehensions',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions#Differences_to_the_older_JS1.7JS1.8_comprehensions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var a = [i * 2 for (i in obj) if (i !== "foo")];
    return a instanceof Array && a[0] === 4 && a[1] === 8;
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox44: true,
    firefox46: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Array comprehensions (ES draft style)',
  significance: 'medium',
  spec: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */},
  res: {
    ie11: false,
    firefox2: false,
    firefox30: true,
    firefox57: true,
    firefox58: false,
    opera7_5: false,
    opera10_50: false,
    chrome77: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Expression closures',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures',
  exec: function () {/*
    return (function(x)x)(1) === 1;
  */},
  res: {
    ie7: false,
    firefox2: false,
    firefox3: true,
    firefox59: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: true,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: false,
  }
},
{
  name: 'ECMAScript for XML (E4X)',
  spec: 'https://developer.mozilla.org/en-US/docs/Archive/Web/E4X',
  mdn: 'https://developer.mozilla.org/en-US/docs/Archive/Web/E4X',
  exec: function () {/*
    return typeof <foo/> === "xml";
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox17: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: '"for each..in" loops',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in',
  exec: function () {/*
    var str = '';
    for each (var item in {a: "foo", b: "bar", c: "baz"}) {
      str += item;
    }
    return str === "foobarbaz";
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox20: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: false,
  }
},
{
  name: 'Sharp variables',
  spec: 'https://developer.mozilla.org/en/Sharp_variables_in_JavaScript',
  mdn: 'https://developer.mozilla.org/en-US/docs/Archive/Web/Sharp_variables_in_JavaScript',
  exec: function () {/*
    var arr = #1=[1, #1#, 3];
    return arr[1] === arr;
  */},
  res: {
    ie7: false,
    firefox2: true,
    firefox12: false,
    opera7_5: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: null,
    konq4_9: false,
    besen: null,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'Iterator',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator',
  exec: function () {
    /* global Iterator */
    try {
      // jshint newcap:false
      var it = Iterator({ foo: 1, bar: 2 });
      // jshint newcap:true
      var keys = "";
      var values = 0;
      for (var pair in it) {
        keys   += pair[0];
        values += pair[1];
      }
      return keys === "foobar" && values === 3;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox57: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: '__iterator__',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators',
  exec: function () {
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
      for (var item in { __iterator__: function() { return iter; }}) {
        total += item.foo;
      }
      // jshint iterator: false
      return total === 10;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: true,
    firefox57: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Generators (JS 1.8)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators',
  exec:[{
      type: 'application/javascript;version=1.8',
      script: function () {
        global.test((function () {
          try {
            var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
            var passed = g.next() === "foo";
            return passed && (g.send("bar") === "barbaz");
          }
          catch(e) {
            return false;
          }
        }()));
        global.__script_executed["generators"] = true;
      }
  },{
      script: function () {
        if (!global.__script_executed["generators"]) {
          global.test((function () {
            try {
              var g = eval('(function() { var a = yield "foo"; yield a + "baz";})')();
              var passed = g.next() === "foo";
              return passed && (g.send("bar") === "barbaz");
            }
            catch(e) {
              return false;
            }
          }()));
        }
      }
  }],
  res: {
    ie7: false,
    firefox2: false,
    firefox3: true,
    firefox58: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
},
{
  name: 'Generator comprehensions (JS 1.8 style)',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_expressions',
  exec: function () {/*
    var obj = { 2: true, "foo": true, 4: true };
    var g = (i * 2 for (i in obj) if (i !== "foo"));
    return g.next() === 4 && g.next() === 8;
  */},
  res: {
    ie7: false,
    firefox2: false,
    firefox3: true,
    firefox46: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Generator comprehensions (ES draft style)',
  significance: 'medium',
  spec: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    var iterator = (for (a of [1,2]) a + 4);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  */},
  res: {
    ie11: false,
    firefox2: false,
    firefox30: true,
    firefox57: true,
    firefox58: false,
    opera7_5: false,
    opera10_50: false,
    chrome77: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'RegExp "x" flag',
  exec: function () {
    try {
      var re = new RegExp('^ ( \\d+ ) \
                         ( \\w+ ) \
                         ( foo  )', 'x');
      return re.exec('23xfoo')[0] === '23xfoo';
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    firefox2: false,
    opera7_5: false,
    opera10: true,
    opera10_50: true,
    opera12_10: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Callable RegExp',
  exec: function () {/*
    return /\\w/("x")[0] === "x";
  */},
  res: {
    ie7: false,
    firefox2: false,
    opera7_5: false,
    opera10_10: true,
    chrome7: true,
    chrome11: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'RegExp named groups',
  exec: function () {/*
    return /(?P<name>a)(?P=name)/.test("aa") &&
           !/(?P<name>a)(?P=name)/.test("")
  */},
  res: {
    ie7: false,
    firefox2: false,
    opera7_5: false,
    opera10: true,
    opera10_50: true,
    chrome7: false,
    safari3_1: false,
    konq4_4: null,
    konq4_9: true,
    besen: null,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'String.prototype.quote',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/quote',
  exec: function () { return typeof String.prototype.quote === 'function' },
  res: {
    ie7: false,
    firefox2: true,
    firefox37: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: null,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'String.prototype.replace flags',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Firefox-specific_notes',
  exec: function () { return 'foofoo'.replace('foo', 'bar', 'g') === 'barbar' },
  res: {
    ie11: false,
    firefox2: true,
    firefox49: false,
    opera7_5: false,
    opera10_50: false,
    chrome77: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'Date.prototype.toLocaleFormat',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat',
  exec: function () { return typeof Date.prototype.toLocaleFormat === 'function' },
  res: {
    ie7: false,
    firefox2: true,
    firefox58: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
},
{
  name: 'Date.parse produces NaN for invalid dates',
  exec: function () {
    var brokenOnFirefox = !isNaN(Date.parse('2012-04-04T24:00:00.500Z'));
    var brokenOnIE10 = !isNaN(Date.parse('2012-12-31T24:01:00.000Z'));
    var brokenOnChrome = !isNaN(Date.parse('2011-02-29T12:00:00.000Z'));
    return !brokenOnFirefox && !brokenOnIE10 && !brokenOnChrome;
  },
  res: {
    ie11: false,
    firefox2: true,
    firefox3_6: false,
    firefox49: true,
    safari3_1: true,
    opera7_5: false,
    opera10_10: true,
    opera10_50: true,
    chrome77: false,
    konq4_3: true,
    besen: true,
    rhino1_7: true,
    ejs: true,
    android4_0: true,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'Object.prototype.watch',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch',
  exec: function () { return typeof Object.prototype.watch == 'function' },
  res: {
    ie7: false,
    firefox2: true,
    firefox58: false,
    opera10_10: false,
    opera10_50: false,
    opera7_5: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Object.prototype.unwatch',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch',
  exec: function () { return typeof Object.prototype.unwatch == 'function' },
  res: {
    ie7: false,
    firefox2: true,
    firefox58: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Object.prototype.eval',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/eval',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/eval',
  exec: function () { return typeof Object.prototype.eval == 'function' },
  res: {
    ie7: false,
    firefox2: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: true,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
},
{
  name: 'Object.observe',
  spec: 'https://arv.github.io/ecmascript-object-observe/',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe',
  exec: function () {/*
    return typeof Object.observe == 'function';
  */},
  res: {
    ie11: false,
    firefox2: false,
    opera7_5: false,
    opera10_50: false,
    chrome36: true,
    chrome49: false,
    node0_10: true,
    android5_0: true,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
  name: 'error "stack"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack',
  exec: function () {
    try {
      throw new Error();
    } catch (err) {
      return 'stack' in err;
    }
  },
  res: {
    ie7: false,
    ie11: true,
    firefox2: true,
    opera7_5: false,
    opera10_10: false,
    opera10_50: true,
    chrome7: true,
    safari3_1: false,
    safari7_1: true,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    android4_0: true,
    duktape2_0: true,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: true,
  }
},
{
  name: 'error "lineNumber"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber',
  exec: function () {
    return 'lineNumber' in new Error();
  },
  res: {
    ie7: false,
    firefox2: true,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: true,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: false,
  }
},
{
  name: 'error "columnNumber"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber',
  exec: function () {
    return 'columnNumber' in new Error();
  },
  res: {
    ie7: false,
    firefox2: false,
    firefox17: true,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: false,
  }
},
{
  name: 'error "fileName"',
  spec: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName',
  exec: function () {
    return 'fileName' in new Error();
  },
  res: {
    ie7: false,
    firefox2: true,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: true,
    phantom: false,
    duktape2_0: true,
    nashorn1_8: true,
    nashorn9: true,
    nashorn10: true,
    graalvm: false,
  }
},
{
  name: 'error "description"',
  spec: 'http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx',
  exec: function () {
    return 'description' in new Error();
  },
  res: {
    ie7: true,
    firefox2: false,
    opera7_5: false,
    opera10_10: false,
    opera10_50: false,
    chrome7: false,
    safari3_1: false,
    konq4_4: false,
    besen: false,
    rhino1_7: false,
    phantom: false,
    duktape2_0: false,
    graalvm: false,
  },
  separator: 'after'
},
{
    name: 'global',
    subtests: [{
      name: '"global" global property is global object',
      exec: function(){/*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof global === 'object' && global && global === actualGlobal && !global.lacksGlobal && global.__system_global_test__ === 42;
    */},
      res: {
        ie11: false,
        firefox2: false,
        firefox53: false,
        opera10_50: false,
        chrome77: false,
        safari10_1: false,
        safaritp: false,
        webkit: false,
        node0_10: true,
        node0_12: true,
        node4: true,
        node6: true,
        node6_5: true,
        node7: true,
        node7_6: true,
        node8: true,
        node8_3: true,
        node8_7: true,
        duktape2_0: false,
        duktape2_1: true,
        graalvm: true,
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
        ie11: false,
        firefox2: false,
        firefox53: false,
        opera10_50: false,
        chrome77: false,
        safaritp: false,
        safari10_1: false,
        webkit: false,
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
        duktape2_1: true,
        graalvm: false,
      }
    }]
  },
{
  name: 'Proxy "ownKeys" handler, duplicate keys for non-extensible targets (ES 2017 semantics)',
  spec: 'https://github.com/tc39/ecma262/pull/594',
  links: [
    {
      note_id: 'proxy-duplictate-ownkeys-updated',
      note_html: 'The behaviour of the Proxy “ownKeys” handler in presence of duplicate keys has been <a href="https://github.com/tc39/ecma262/issues/833">modified later</a>.',
    }
  ],
  exec: function() {/*
   var P = new Proxy(Object.preventExtensions(Object.defineProperty({a:1}, "b", {value:1})), {
   ownKeys: function() {
   return ['a','a','b','b'];
   }
   });
   return Object.getOwnPropertyNames(P) + '' === "a,a,b,b";
   */},
  res: {
    ie11: false,
    edge16: true,
    firefox2: false,
    firefox51: true,
    firefox56: true,
    firefox57: false,
    opera10_50: false,
    chrome51: true,
    chrome75: false,
    safari10: true,
    safari10_1: true,
    safari13: false,
    duktape2_0: true,
    graalvm: true,
  },
},
];
