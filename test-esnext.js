exports.name = 'ES Next';
exports.target_file = 'esnext/index.html';
exports.skeleton_file = 'esnext/skeleton.html';

var STAGE2 = 'Stage 2';
var STAGE27 = 'Stage 2.7';
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
  */}
},
{
  name: 'Class and Property Decorators',
  category: STAGE3,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-decorators',
  subtests: [
    {
      name: 'class decorators',
      spec: 'https://github.com/wycats/javascript-decorators',
      exec: function (){/*
        class A {
          @nonconf
          get B() {}
        }
        function nonconf(target, name, descriptor) {
          descriptor.configurable = false;
          return descriptor;
        }
        return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
      */}
    }
  ],
},
{
  name: 'ShadowRealm',
  category: STAGE27,
  significance: 'large',
  spec: 'https://github.com/tc39/proposal-shadowrealm',
  exec: function () {/*
    return typeof ShadowRealm === "function"
      && ["evaluate", "importValue"].every(function (key){
        return key in ShadowRealm.prototype;
      });
  */}
},
{
  name: 'throw expressions',
  spec: 'https://github.com/tc39/proposal-throw-expressions',
  category: STAGE2,
  significance: 'medium',
  subtests: [
    {
      name: 'logical',
      exec: function (){/*
        var a, b;
        try {
          a = 19 || throw 77;
          b = 88 && throw 23;
        } catch (e) {
          return a + e === 42;
        }
      */}
    },
    {
      name: 'parameter initializers',
      exec: function (){/*
        function fn (arg = throw 42) {
          return arg;
        }

        if (fn(21) !== 21) return false;

        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */}
    },
    {
      name: 'arrow function bodies',
      exec: function (){/*
        var fn = () => throw 42;
        try {
          fn();
        } catch (e) {
          return e === 42;
        }
      */}
    },
    {
      name: 'conditionals',
      exec: function (){/*
        true ? 42 : throw 21;
        try {
          false ? 42 : throw 21;
        } catch (e) {
          return e === 21;
        }
      */}
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
      }
    }
  ]
},
{
  name: 'Map.prototype.upsert',
  category: STAGE27,
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
      */}
    },
    {
      name: 'WeakMap.prototype.upsert',
      exec: function () {/*
        const a = {}, b = {};
        const map = new WeakMap([[a, 1]]);
        if (map.upsert(a, it => 2, () => 3) !== 2) return false;
        if (map.upsert(b, it => 2, () => 3) !== 3) return false;
        return map.get(a) === 2 && map.get(b) === 3;
      */}
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
      && Array.isTemplateObject((it => it)`a${1}c`);
  */}
},
{
  name: 'Async Iterator Helpers',
  category: STAGE2,
  significance: 'large',
  spec: 'https://github.com/tc39/proposal-async-iterator-helpers',
  subtests: [
    {
      name: 'instanceof AsyncIterator',
      exec: function () {/*
        return (async function*() {})() instanceof AsyncIterator;
      */}
    },
    {
      name: 'extends AsyncIterator',
      exec: function () {/*
        class Class extends AsyncIterator { }
        const instance = new Class();
        return instance[Symbol.asyncIterator]() === instance;
      */}
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
      */}
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
      */}
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
      */}
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
      */}
    },
    {
      name: 'AsyncIterator.prototype.every',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().every(it => typeof it === 'number').then(it => {
          if (it === true) asyncTestPassed();
        });
      */}
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
      */}
    },
    {
      name: 'AsyncIterator.prototype.find',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().find(it => it % 2).then(it => {
          if (it === 1) asyncTestPassed();
        });
      */}
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
      */}
    },
    {
      name: 'AsyncIterator.prototype.forEach',
      exec: function () {/*
        let result = '';
        (async function*() { yield * [1, 2, 3] })().forEach(it => result += it).then(() => {
          if (result === '123') asyncTestPassed();
        });
      */}
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
      */}
    },
    {
      name: 'AsyncIterator.prototype.reduce',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().reduce((a, b) => a + b).then(it => {
          if (it === 6) asyncTestPassed();
        });
      */}
    },
    {
      name: 'AsyncIterator.prototype.some',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().some(it => typeof it === 'number').then(it => {
          if (it === true) asyncTestPassed();
        });
      */}
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
      */}
    },
    {
      name: 'AsyncIterator.prototype.toArray',
      exec: function () {/*
        (async function*() { yield * [1, 2, 3] })().toArray().then(it => {
          if (Array.isArray(it) && it.join() === '1,2,3') asyncTestPassed();
        });
      */}
    },
    {
      name: 'AsyncIterator.prototype[@@toStringTag]',
      exec: function () {/*
        return AsyncIterator.prototype[Symbol.toStringTag] === 'AsyncIterator';
      */}
    }
  ]
},
{
  name: 'Uint8Array to/from base64 and hex',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-arraybuffer-base64',
  subtests: [
    {
      name: 'Uint8Array.toBase64()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64',
      exec: function () {/*
        const arr = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        return arr.toBase64() === "SGVsbG8gV29ybGQ=";
      */}
    },
    {
      name: 'Uint8Array.fromBase64()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64',
      exec: function () {/*
        const arr1 = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        const arr2 = Uint8Array.fromBase64("SGVsbG8gV29ybGQ=");
        return arr1.length === arr2.length &&
               arr1.every((element, index) => element === arr2[index]);
      */}
    },
    {
      name: 'Uint8Array.setFromBase64()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64',
      exec: function () {/*
        const arr1 = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        let arr2 = new Uint8Array(16);
        let { read, written } = arr2.setFromBase64("SGVsbG8gV29ybGQ=");
        return read == 16 && written == 11 &&
               arr1.every((element, index) => element === arr2[index]);
      */}
    },
    {
      name: 'Uint8Array.toHex()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex',
      exec: function () {/*
        const arr = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        return arr.toHex() === "48656c6c6f20576f726c64";
      */}
    },
    {
      name: 'Uint8Array.fromHex()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex',
      exec: function () {/*
        const arr1 = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        const arr2 = Uint8Array.fromHex("48656c6c6f20576f726c64");
        return arr1.length === arr2.length &&
               arr1.every((element, index) => element === arr2[index]);
      */}
    },
        {
      name: 'Uint8Array.setFromHex()',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex',
      exec: function () {/*
        const arr1 = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
        let arr2 = new Uint8Array(16);
        let { read, written } = arr2.setFromHex("48656c6c6f20576f726c64");
        return read == 22 && written == 11 &&
               arr1.every((element, index) => element === arr2[index]);
      */}
    },

  ]
},
{
  name: 'Explicit Resource Management',
  category: STAGE3,
  significance: 'large',
  spec: 'https://github.com/tc39/proposal-explicit-resource-management',
  subtests: [
    {
      name: 'using',
      exec: function () {/*
        var resource = {
          disposed: false,
          [Symbol.dispose]() {
            this.disposed = true;
          }
        };
        {
          using _ = resource;
        }
        return resource.disposed
      */}
    },
    {
      name: 'for (using ... of',
      exec: function () {/*
        var resource1 = {
          disposed: false,
          [Symbol.dispose]() {
            this.disposed = true;
          }
        };
        var resource2 = {
          disposed: false,
          [Symbol.dispose]() {
            this.disposed = true;
          }
        };
        {
          for (using _ of [resource1, resource2]);
        }
        return resource1.disposed && resource2.disposed;
      */}
    },
    {
      name: 'await using',
      exec: function () {/*
        (async function () {
          var resource = {
            disposed: false,
            async [Symbol.asyncDispose]() {
              this.disposed = true;
            }
          };
          {
            await using _ = resource;
          }
          return resource.disposed && asyncTestPassed();
        }());
      */}
    },
    {
      name: 'for (await using ... of',
      exec: function () {/*
        var resource1 = {
          disposed: false,
          async [Symbol.asyncDispose]() {
            this.disposed = true;
          }
        };
        var resource2 = {
          disposed: false,
          async [Symbol.asyncDispose]() {
            this.disposed = true;
          }
        };
        (async function () {
          for (await using _ of [resource1, resource2]);
          return resource1.disposed && resource2.disposed && asyncTestPassed();
        }());
      */}
    },
    {
      name: "SuppressedError",
      exec: function () {/*
        var err1 = new Error();
        var err2 = new Error();
        var err3 = new Error();
        try {
          using _1 = { [Symbol.dispose]() { throw err1 } },
                _2 = { [Symbol.dispose]() { throw err2 } };
          throw err3;
        } catch (e) {
          return (
            e instanceof SuppressedError
            && e.error === err1
            && e.suppressed instanceof SuppressedError
            && e.suppressed.error === err2
            && e.suppressed.suppressed === err3
          );
        }
      */}
    },
    {
      name: "DisposableStack",
      exec: function () {/*
        var stack1 = new DisposableStack();
        var resource1 = { disposed: false };
        var resource2 = { disposed: false };
        var resource3 = { disposed: false, [Symbol.dispose]() { this.disposed = true } };
        var adopted = stack1.adopt(resource1, function (r) { r.disposed = true });
        var deferred = stack1.defer(function (r) { resource2.disposed = true });
        var stack2 = stack1.move();
        var used = stack2.use(resource3);
        stack2.dispose();
        return (
          resource1.disposed && adopted === resource1
          && resource2.disposed && deferred === undefined
          && resource3.disposed && used === resource3
        );
      */}
    },
    {
      name: "AsyncDisposableStack",
      exec: function () {/*
        var stack1 = new AsyncDisposableStack();
        var resource1 = { disposed: false };
        var resource2 = { disposed: false };
        var resource3 = { disposed: false, async [Symbol.asyncDispose]() { this.disposed = true } };
        var adopted = stack1.adopt(resource1, async function (r) { r.disposed = true });
        var deferred = stack1.defer(async function (r) { resource2.disposed = true });
        var stack2 = stack1.move();
        var used = stack2.use(resource3);
        stack2.disposeAsync().then(function () {
          resource1.disposed && adopted === resource1 &&
          resource2.disposed && deferred === undefined &&
          resource3.disposed && used === resource3 &&
          asyncTestPassed();
        });
      */}
    }
  ]
}
];


// Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function (a,e) {
  var index = [STAGE3, STAGE27, STAGE2].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ESnext category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function (a,e) {
  return a.concat(e);
},[]);
