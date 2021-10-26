var common = require('./data-common');

var babel = common.babel;
var typescript = common.typescript;
// var firefox = common.firefox;
// var graalvm = common.graalvm;

exports.name = 'ES Next';
exports.target_file = 'esnext/index.html';
exports.skeleton_file = 'esnext/skeleton.html';

var STAGE2 = 'Stage 2';
var STAGE3 = 'Stage 3';

exports.tests = [
{
  name: 'Generator function.sent Meta Property',
  category: STAGE2,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-function.sent',
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
    babel6corejs2: true,
    ie11: false,
    firefox2: false,
    opera10_50: false,
    chrome77: false,
    duktape2_0: false,
    graalvm19: false,
    graalvm20: false,
    graalvm20_1: false,
    rhino1_7_13: false
  }
},
{
  name: 'Class and Property Decorators',
  category: STAGE2,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-decorators',
  subtests: [
    {
      name: 'class decorators',
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
        babel6corejs2: {val: false, note_id: "babel-decorators-legacy", note_html: "Babel 6 still has no official support decorators, but you can use <a href='https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy'>this plugin</a>."},
        typescript1corejs2: true,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    }
  ],
},
{
  name: 'Realms',
  category: STAGE3,
  significance: 'large',
  spec: 'https://github.com/tc39/proposal-realms',
  exec: function () {/*
    return typeof Realm === "function"
      && ["eval", "global", "intrinsics", "stdlib", "directEval", "indirectEval", "initGlobal", "nonEval"].every(function(key){
        return key in Realm.prototype;
      });
  */},
  res: {
    ie11: false,
    firefox10: false,
    firefox52: false,
    opera10_50: false,
    chrome77: false,
    duktape2_0: false,
    graalvm19: false,
    graalvm20: false,
    graalvm20_1: false,
    rhino1_7_13: false
  }
},
{
  name: 'throw expressions',
  spec: 'https://github.com/tc39/proposal-throw-expressions',
  category: STAGE2,
  significance: 'medium',
  subtests: [
    {
      name: 'logical',
      exec: function(){/*
        var a, b;
        try {
          a = 19 || throw 77;
          b = 88 && throw 23;
        } catch (e) {
          return a + e === 42;
        }
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox10: false,
        firefox52: false,
        opera10_50: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'parameter initializers',
      exec: function(){/*
        function fn (arg = throw 42) {
          return arg;
        }

        if (fn(21) !== 21) return false;

        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox10: false,
        firefox52: false,
        opera10_50: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'arrow function bodies',
      exec: function(){/*
        var fn = () => throw 42;
        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox10: false,
        firefox52: false,
        opera10_50: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'conditionals',
      exec: function(){/*
        true ? 42 : throw 21;
        try {
          false ? 42 : throw 21;
        } catch (e) {
          return e === 21;
        }
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox10: false,
        firefox52: false,
        opera10_50: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    }
  ]
},
{
  name: 'Set methods',
  spec: 'https://github.com/tc39/proposal-set-methods',
  category: STAGE2,
  significance: 'medium',
  subtests: [
    {
      name: 'Set.prototype.intersection',
      exec: function () {/*
        var set = new Set([1, 2, 3]).intersection(new Set([2, 3, 4]));
        return set.size === 2
          && set.has(2)
          && set.has(3);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.union',
      exec: function () {/*
        var set = new Set([1, 2]).union(new Set([2, 3]));
        return set.size === 3
          && set.has(1)
          && set.has(2)
          && set.has(3);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.difference',
      exec: function () {/*
        var set = new Set([1, 2, 3]).difference(new Set([3, 4]));
        return set.size === 2
          && set.has(1)
          && set.has(2);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.symmetricDifference',
      exec: function () {/*
        var set = new Set([1, 2]).symmetricDifference(new Set([2, 3]));
        return set.size === 2
          && set.has(1)
          && set.has(3);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.isDisjointFrom',
      exec: function () {/*
        return new Set([1, 2, 3]).isDisjointFrom([4, 5, 6]);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.isSubsetOf',
      exec: function () {/*
        return new Set([1, 2, 3]).isSubsetOf([5, 4, 3, 2, 1]);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Set.prototype.isSupersetOf',
      exec: function () {/*
        return new Set([5, 4, 3, 2, 1]).isSupersetOf([1, 2, 3]);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox2: false,
        chrome77: false,
        duktape2_0: false,
        graalvm19: false,
        graalvm20: false,
        graalvm20_1: false,
        rhino1_7_13: false
      }
    }
  ]
},
{
  name: 'ArrayBuffer.prototype.transfer',
  category: STAGE2,
  significance: 'small',
  spec: 'https://github.com/domenic/proposal-arraybuffer-transfer/',
  subtests: [
    {
      name: 'ArrayBuffer.prototype.transfer()',
      exec: function () {/*
        const buffer1 = new Uint8Array([1, 2]).buffer;
        const buffer2 = buffer1.transfer();
        return buffer1.byteLength === 0
          && buffer2.byteLength === 2;
      */},
      res: {
        ie11: false,
        firefox10: false,
        firefox52: false,
        chrome70: false,
        safari12: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'ArrayBuffer.prototype.realloc()',
      exec: function () {/*
        const buffer1 = new ArrayBuffer(1024);
        const buffer2 = buffer1.realloc(256);
        return buffer1.byteLength === 0
          && buffer2.byteLength === 256;
      */},
      res: {
        ie11: false,
        firefox10: false,
        firefox52: false,
        chrome70: false,
        safari12: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    }
  ]
},
{
  name: 'Legacy RegExp features in JavaScript',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-regexp-legacy-features',
  subtests: [
    {
      name: 'RegExp "lastMatch"',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch',
      exec: function () {
        var re = /\w/;
        re.exec('x');
        return RegExp.lastMatch === 'x';
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
        rhino1_7_13: true,
        phantom: true,
        android4_0: true,
        duktape2_0: false,
        nashorn1_8: true,
        nashorn9: true,
        nashorn10: true,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true
      }
    },
    {
      name: 'RegExp.$1-$9',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n',
      exec: function () {
        for (var i = 1; i < 10; i++) {
          if (!(('$' + i) in RegExp)) return false;
        }
        return true;
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
        rhino1_7_13: true,
        phantom: true,
        android4_0: true,
        duktape2_0: false,
        nashorn1_8: true,
        nashorn9: true,
        nashorn10: true,
        graalvm19: true,
        graalvm20: true,
        graalvm20_1: true
      }
    }
  ]
},
{
  name: 'Map.prototype.upsert',
  category: STAGE2,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-upsert',
  subtests: [
    {
      name: 'Map.prototype.upsert',
      exec: function () {/*
        const map = new Map([['a', 1]]);
        if (map.upsert('a', it => 2, () => 3) !== 2) return false;
        if (map.upsert('b', it => 2, () => 3) !== 3) return false;
        return Array.from(map).join() === 'a,2,b,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'WeakMap.prototype.upsert',
      exec: function () {/*
        const a = {}, b = {};
        const map = new WeakMap([[a, 1]]);
        if (map.upsert(a, it => 2, () => 3) !== 2) return false;
        if (map.upsert(b, it => 2, () => 3) !== 3) return false;
        return map.get(a) === 2 && map.get(b) === 3;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    }
  ]
},
{
  name: 'Array.isTemplateObject',
  category: STAGE2,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-array-is-template-object',
  exec: function () {/*
    return !Array.isTemplateObject([])
      && Array.isTemplateObject((it => it)`a{1}c`);
  */},
  res: {
    babel6corejs2: false,
    babel7corejs3: babel.corejs,
    typescript1corejs2: typescript.fallthrough,
    typescript3_2corejs3: typescript.corejs,
    ie11: false,
    firefox10: false,
    firefox60: false,
    chrome77: false,
    duktape2_0: false,
    rhino1_7_13: false
  }
},
{
  name: 'Iterator Helpers',
  category: STAGE2,
  significance: 'large',
  spec: 'https://github.com/tc39/proposal-iterator-helpers',
  subtests: [
    {
      name: 'instanceof Iterator',
      exec: function () {/*
        return [1, 2, 3].values() instanceof Iterator;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'extends Iterator',
      exec: function () {/*
        class Class extends Iterator { }
        const instance = new Class();
        return instance[Symbol.iterator]() === instance;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.from, iterable',
      exec: function () {/*
        const iterator = Iterator.from([1, 2, 3]);
        return 'next' in iterator
          && iterator instanceof Iterator
          && Array.from(iterator).join() === '1,2,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.from, iterator',
      exec: function () {/*
        const iterator = Iterator.from({
          i: 0,
          next() {
            return { value: ++this.i, done: this.i > 3 };
          }
        });
        return 'next' in iterator
          && iterator instanceof Iterator
          && Array.from(iterator).join() === '1,2,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.asIndexedPairs',
      exec: function () {/*
        return Array.from([1, 2, 3].values().asIndexedPairs()).join() === '0,1,1,2,2,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.drop',
      exec: function () {/*
        return Array.from([1, 2, 3].values().drop(1)).join() === '2,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.every',
      exec: function () {/*
        return [1, 2, 3].values().every(it => typeof it === 'number');
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.filter',
      exec: function () {/*
        return Array.from([1, 2, 3].values().filter(it => it % 2)).join() === '1,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.find',
      exec: function () {/*
        return [1, 2, 3].values().find(it => it % 2) === 1;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.flatMap',
      exec: function () {/*
        return Array.from([1, 2, 3].values().flatMap(it => [it, 0])).join() === '1,0,2,0,3,0';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.forEach',
      exec: function () {/*
        let result = '';
        [1, 2, 3].values().forEach(it => result += it);
        return result === '123';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.map',
      exec: function () {/*
        return Array.from([1, 2, 3].values().map(it => it * it)).join() === '1,4,9';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.reduce',
      exec: function () {/*
        return [1, 2, 3].values().reduce((a, b) => a + b) === 6;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.some',
      exec: function () {/*
        return [1, 2, 3].values().some(it => typeof it === 'number');
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.take',
      exec: function () {/*
        return Array.from([1, 2, 3].values().take(2)).join() === '1,2';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype.toArray',
      exec: function () {/*
        const array = [1, 2, 3].values().toArray();
        return Array.isArray(array) && array.join() === '1,2,3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'Iterator.prototype[@@toStringTag]',
      exec: function () {/*
        return Iterator.prototype[Symbol.toStringTag] === 'Iterator';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'instanceof AsyncIterator',
      exec: function () {/*
        return (async function*() {})() instanceof AsyncIterator;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'extends AsyncIterator',
      exec: function () {/*
        class Class extends AsyncIterator { }
        const instance = new Class();
        return instance[Symbol.asyncIterator]() === instance;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.from, async iterable',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        const iterator = AsyncIterator.from(async function*() { yield * [1, 2, 3] }());

        if (!('next' in iterator) || !(iterator instanceof AsyncIterator)) return false;

        toArray(iterator).then(it => {
          if (it.join() === '1,2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.from, iterable',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        const iterator = AsyncIterator.from([1, 2, 3]);

        if (!('next' in iterator) || !(iterator instanceof AsyncIterator)) return false;

        toArray(iterator).then(it => {
          if (it.join() === '1,2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.from, iterator',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        const iterator = AsyncIterator.from([1, 2, 3].values());

        if (!('next' in iterator) || !(iterator instanceof AsyncIterator)) return false;

        toArray(iterator).then(it => {
          if (it.join() === '1,2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.asIndexedPairs',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray((async function*() { yield * [1, 2, 3] })().asIndexedPairs()).then(it => {
          if (it.join() === '0,1,1,2,2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.drop',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray(async function*() { yield * [1, 2, 3] }().drop(1)).then(it => {
          if (it.join() === '2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.every',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().every(it => typeof it === 'number').then(it => {
          if (it === true) asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.filter',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray(async function*() { yield * [1, 2, 3] }().filter(it => it % 2)).then(it => {
          if (it.join() === '1,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.find',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().find(it => it % 2).then(it => {
          if (it === 1) asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.flatMap',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray(async function*() { yield * [1, 2, 3] }().flatMap(it => [it, 0])).then(it => {
          if (it.join() === '1,0,2,0,3,0') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.forEach',
      exec: function () {/*
        let result = '';
        (async function*() { yield * [1, 2, 3] })().forEach(it => result += it).then(() => {
          if (result === '123') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.map',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray(async function*() { yield * [1, 2, 3] }().map(it => it * it)).then(it => {
          if (it.join() === '1,4,9') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.reduce',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().reduce((a, b) => a + b).then(it => {
          if (it === 6) asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.some',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().some(it => typeof it === 'number').then(it => {
          if (it === true) asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.take',
      exec: function () {/*
        async function toArray(iterator) {
          const result = [];
          for await (const it of iterator) result.push(it);
          return result;
        }

        toArray(async function*() { yield * [1, 2, 3] }().take(2)).then(it => {
          if (it.join() === '1,2') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype.toArray',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().toArray().then(it => {
          if (Array.isArray(it) && it.join() === '1,2,3') asyncTestPassed();
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
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: 'AsyncIterator.prototype[@@toStringTag]',
      exec: function () {/*
        return AsyncIterator.prototype[Symbol.toStringTag] === 'AsyncIterator';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        firefox10: false,
        firefox60: false,
        chrome77: false,
        duktape2_0: false,
        rhino1_7_13: false
      }
    }
  ]
},
{
  name: 'Hashbang Grammar',
  category: STAGE3,
  significance: 'tiny',
  spec: 'https://github.com/tc39/proposal-hashbang/',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments',
  exec: function() {/*
    try {
      return !eval('#!/wash/your/hands');
    } catch (e) {
      return false
    }
  */},
  res: {
    chrome1: false,
    chrome74: true,
    firefox2: false,
    firefox67: true,
    ie11: false,
    opera10_50: false,
    edge18: false,
    safari1: false,
    safari13: false,
    safari13_1: true,
    duktape2_0: false,
    graalvm19: false,
    graalvm20: false,
    graalvm20_1: true,
    babel7corejs3: false,
    typescript3_2corejs3: false,
    closure: false,
    rhino1_7_13: false
  }
},
{
  name: 'Array find from last',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-array-find-from-last',
  subtests: [
    {
      name: "Array.prototype.findLast",
      exec: function () {/*
        var arr = [{ x: 1 }, { x: 2 }, { x: 1 }, { x: 2 }];
        return arr.findLast(function (o) { return o.x === 1; }) === arr[2];
      */},
      res: {
        babel7corejs3: babel.corejs,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        chrome1: false,
        chrome90: false,
        edge18: false,
        firefox2: false,
        firefox89: false,
        opera10_50: false,
        safari12: false,
        safaritp: true,
        duktape2_0: false,
        rhino1_7_13: false
      }
    },
    {
      name: "Array.prototype.findLastIndex",
      exec: function () {/*
        var arr = [{ x: 1 }, { x: 2 }, { x: 1 }, { x: 2 }];
        return arr.findLastIndex(function (o) { return o.x === 1; }) === 2;
      */},
      res: {
        babel7corejs3: babel.corejs,
        typescript3_2corejs3: typescript.corejs,
        ie11: false,
        chrome1: false,
        chrome90: false,
        edge18: false,
        firefox2: false,
        firefox89: false,
        opera10_50: false,
        safari12: false,
        safaritp: true,
        duktape2_0: false,
        rhino1_7_13: false
      }
    }
  ]
},
];


//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = [STAGE3, STAGE2].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ESnext category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
