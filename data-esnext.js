var common = require('./data-common');

var babel = common.babel;
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
        babel6corejs2: true,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'unary form',
      exec: function () {/*
        var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
        return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
      */},
      res: {
        babel6corejs2: true,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      },
    },
  ],
},
{
  name: 'do expressions',
  category: STAGE1,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-do-expressions',
  exec: function () {/*
    return do {
      let x = 23;
      x + 19;
    } === 42;
  */},
  res: {
    babel6corejs2: true,
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'Generator function.sent Meta Property',
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
    babel6corejs2: true,
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
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
        duktape2_0: false,
        graalvm: false,
      }
    },
  ],
},
{
  name: 'Realms',
  category: STAGE2,
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
    firefox52: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
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
    babel6corejs2: babel.corejs,
    typescript1corejs2: typescript.corejs,
    es7shim: true,
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'globalThis',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-global',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis',
  subtests: [{
    name: '"globalThis" global property is global object',
    exec: function(){/*
      var actualGlobal = Function('return this')();
      actualGlobal.__system_global_test__ = 42;
      return typeof globalThis === 'object' && globalThis && globalThis === actualGlobal && !globalThis.lacksGlobalThis && globalThis.__system_global_test__ === 42;
    */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox2: false,
      firefox53: false,
      firefox65: true,
      chrome70: chrome.experimental,
      chrome71: true,
      opera10_50: false,
      safari10_1: false,
      safari12_1: true,
      safaritp: true,
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
      duktape2_1: false,
      graalvm: true,
    }
  }, {
    name: '"globalThis" global property has correct property descriptor',
    exec: function(){/*
      var actualGlobal = Function('return this')();
      if (typeof globalThis !== 'object') { return false; }
      if (!('globalThis' in actualGlobal)) { return false; }
      if (Object.prototype.propertyIsEnumerable.call(actualGlobal, 'globalThis')) { return false; }

      var descriptor = Object.getOwnPropertyDescriptor(actualGlobal, 'globalThis');
      return descriptor.value === actualGlobal && !descriptor.enumerable && descriptor.configurable && descriptor.writable;
    */},
    res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox2: false,
      firefox53: false,
      firefox65: true,
      chrome70: chrome.experimental,
      chrome71: true,
      opera10_50: false,
      safari10_1: false,
      safari12_1: true,
      safaritp: true,
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
      duktape2_1: false,
      graalvm: true,
    }
  }]
},
{
  name: 'Observable',
  category: STAGE1,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-observable',
  'subtests': [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof Observable !== 'undefined';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Symbol.observable well known symbol',
      exec: function () {/*
        return typeof Symbol.observable === 'symbol';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Observable.prototype.subscribe',
      exec: function () {/*
        return 'subscribe' in Observable.prototype;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Observable.prototype[Symbol.observable]',
      exec: function () {/*
        var o = new Observable(function() { });
        return Symbol.observable in Observable.prototype && o[Symbol.observable]() === o;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Observable.of',
      exec: function () {/*
        return Observable.of(1, 2, 3) instanceof Observable;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Observable.from',
      exec: function () {/*
        return (Observable.from([1,2,3,4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    }
  ]
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'function.count',
      exec: function(){/*
        return (_ => function.count)(1, 2, 3) === 3;
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
    typescript1corejs2: true,
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
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
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'weak references',
  spec: 'https://github.com/tc39/proposal-weakrefs',
  category: STAGE2,
  significance: 'large',
  exec: function(){/*
    var O = {};
    var weakref = System.makeWeakRef(O);
    var works = weakref.get() === O;
    weakref.clear();
    return works && weakref.get() === undefined;
  */},
  res : {
    ie11: false,
    firefox2: false,
    opera10_50: false,
    chrome65: false,
    duktape2_0: false,
    graalvm: false,
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.hasMetadata',
      exec: function(){/*
        return typeof Reflect.hasMetadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.hasOwnMetadata',
      exec: function(){/*
        return typeof Reflect.hasOwnMetadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.getMetadata',
      exec: function(){/*
        return typeof Reflect.getMetadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.getOwnMetadata',
      exec: function(){/*
        return typeof Reflect.getOwnMetadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.getMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getMetadataKeys == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.getOwnMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getOwnMetadataKeys == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.deleteMetadata',
      exec: function(){/*
        return typeof Reflect.deleteMetadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Reflect.metadata',
      exec: function(){/*
        return typeof Reflect.metadata == 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.current',
      exec: function(){/*
        return 'current' in Zone;
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.prototype.name',
      exec: function(){/*
        return 'name' in Zone.prototype;
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.prototype.parent',
      exec: function(){/*
        return 'parent' in Zone.prototype;
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.prototype.fork',
      exec: function(){/*
        return typeof Zone.prototype.fork == 'function';
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.prototype.run',
      exec: function(){/*
        return typeof Zone.prototype.run == 'function';
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'Zone.prototype.wrap',
      exec: function(){/*
        return typeof Zone.prototype.wrap == 'function';
      */},
      res: {
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    }
  ]
},
{
  name: 'Frozen Realms API',
  category: STAGE1,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-frozen-realms',
  exec: function () {/*
    return typeof Reflect.Realm.immutableRoot === 'function'
      && typeof Reflect.Realm.prototype.spawn === 'function';
  */},
  res: {
    ie11: false,
    firefox2: false,
    opera10_50: false,
    duktape2_0: false,
    graalvm: false,
  }
},
{
  name: 'instance class fields',
  category: STAGE3,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-class-fields',
  subtests: [
    {
      name: 'public instance class fields',
      exec: function () {/*
        class C {
          x = 'x';
        }
        return new C().x === 'x';
      */},
      res: {
        babel6corejs2: true,
        tr: true,
        typescript1corejs2: true,
        ie11: false,
        firefox2: false,
        firefox67: firefox.classFields,
        chrome65: chrome.harmony,
        chrome72: true,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'private instance class fields basic support',
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
        ie11: false,
        firefox2: false,
        chrome66: chrome.harmony,
        chrome74: true,
        firefox67: firefox.privateClassFields,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'private instance class fields initializers',
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
        ie11: false,
        firefox2: false,
        chrome66: chrome.harmony,
        chrome74: true,
        firefox67: firefox.privateClassFields,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'computed instance class fields',
      exec: function () {/*
        class C {
          ['x'] = 42;
        }
        return new C().x === 42;
      */},
      res: {
        ie11: false,
        firefox2: false,
        chrome73: true,
        firefox66: false,
        firefox68: firefox.classFields,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'static class fields',
  category: STAGE3,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-static-class-features/',
  subtests: [
    {
      name: 'public static class fields',
      exec: function () {/*
        class C {
          static x = 'x';
        }
        return C.x === 'x';
      */},
      res: {
        babel6corejs2: true,
        tr: true,
        typescript1corejs2: true,
        firefox2: false,
        chrome71: chrome.harmony,
        chrome72: true,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'private static class fields',
      exec: function () {/*
        class C {
          static #x = 42;
          x(){
            return C.#x;
          }
        }
        return new C().x() === 42;
      */},
      res: {
        firefox2: false,
        chrome74: true,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
    {
      name: 'computed static class fields',
      exec: function () {/*
        class C {
          static ['x'] = 42;
        }
        return C.x === 42;
      */},
      res: {
        firefox2: false,
        chrome73: true,
        firefox66: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      }
    },
  ]
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
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
        ie11: false,
        firefox2: false,
        opera10_50: false,
        duktape2_0: false,
        graalvm: false,
      },
    }
  ]
},
{
  name: 'Math.signbit',
  spec: 'http://jfbastien.github.io/papers/Math.signbit.html',
  category: STAGE1,
  significance: 'small',
  exec: function(){/*
    return Math.signbit(-0) === false
      && Math.signbit(0) === true
      && Math.signbit(-42) === false
      && Math.signbit(42) === true;
  */},
  res : {
    babel6corejs2: babel.corejs,
    typescript1corejs2: typescript.corejs,
    ie11: false,
    firefox52: false,
    opera10_50: false,
    duktape2_2: false,
    graalvm: false,
  }
},
{
  name: 'Math extensions proposal',
  category: STAGE1,
  significance: 'small',
  spec: 'https://github.com/rwaldron/proposal-math-extensions',
  subtests: [{
    name: 'Math.clamp',
    exec: function(){/*
      return Math.clamp(2, 4, 6) === 4
        && Math.clamp(4, 2, 6) === 4
        && Math.clamp(6, 2, 4) === 4;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.DEG_PER_RAD',
    exec: function(){/*
      return Math.DEG_PER_RAD === Math.PI / 180;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.degrees',
    exec: function(){/*
      return Math.degrees(Math.PI / 2) === 90
        && Math.degrees(Math.PI) === 180;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.fscale',
    exec: function(){/*
      return Math.fscale(3, 1, 2, 1, Math.PI) === Math.fround((3 - 1) * (Math.PI - 1) / (2 - 1) + 1);
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.RAD_PER_DEG',
    exec: function(){/*
      return Math.RAD_PER_DEG === 180 / Math.PI;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.radians',
    exec: function(){/*
      return Math.radians(90) === Math.PI / 2
        && Math.radians(180) === Math.PI;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }, {
    name: 'Math.scale',
    exec: function(){/*
      return Math.scale(0, 3, 5, 8, 10) === 5;
    */},
    res: {
      babel6corejs2: babel.corejs,
      typescript1corejs2: typescript.corejs,
      ie11: false,
      firefox52: false,
      opera10_50: false,
      duktape2_2: false,
      graalvm: false,
    },
  }]
},
{
  name: 'Promise.try',
  category: STAGE1,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-promise-try',
  'subtests': [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof Promise.try === 'function';
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'returns instance of Promise',
      exec: function () {/*
        return Promise.try(function () {}) instanceof Promise;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'call function synchronously',
      exec: function () {/*
        var score = 0;
        Promise.try(function () { score++ });
        return score === 1;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'function returns value',
      exec: function () {/*
        var score = 0;
        Promise.try(function() {
          score++;
          return 'foo';
        }).then(function(val) {
          score += (val === 'foo');
          if (score === 2) asyncTestPassed();
        });
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'function throws exception',
      exec: function () {/*
        var score = 0;
        Promise.try(function() {
          score++;
          throw 'bar';
        }).catch(function(err) {
          score += (err === 'bar');
          if (score === 2) asyncTestPassed();
        });
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'function returns fulfilled Promise',
      exec: function () {/*
        var score = 0;
        Promise.try(function() {
          score++;
          return Promise.resolve('foo');
        }).then(function(val) {
          score += (val === 'foo');
          if (score === 2) asyncTestPassed();
        });
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'function returns rejected Promise',
      exec: function () {/*
        var score = 0;
        Promise.try(function() {
          score++;
          return Promise.reject('bar');
        }).catch(function(err) {
          score += (err === 'bar');
          if (score === 2) asyncTestPassed();
        });
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox2: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    }
  ]
},
{
  name: '`.of` and `.from` on collection constructors',
  category: STAGE1,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-setmap-offrom',
  subtests: [
    {
      name: 'Map.of',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = Map.of([A, 1], [B, 2]);
        return C.get(A) + C.get(B) === 3;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.from',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = Map.from([[A, 1], [B, 2]], function (it) {
          return [it[0], it[1] + 1];
        });
        return C.get(A) + C.get(B) === 5;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.of',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = Set.of(A, B);
        return C.has(A) + C.has(B);
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.from',
      exec: function(){/*
        var C = Set.from([1, 2], function (it) {
          return it + 2;
        });
        return C.has(3) + C.has(4);
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakMap.of',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = WeakMap.of([A, 1], [B, 2]);
        return C.get(A) + C.get(B) === 3;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakMap.from',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = WeakMap.from([[A, 1], [B, 2]], function (it) {
          return [it[0], it[1] + 1];
        });
        return C.get(A) + C.get(B) === 5;
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakSet.of',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = WeakSet.of(A, B);
        return C.has(A) + C.has(B);
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakSet.from',
      exec: function(){/*
        var A = {};
        var B = {};
        var C = WeakSet.from([A, B]);
        return C.has(A) + C.has(B);
      */},
      res: {
        babel6corejs2: babel.corejs,
        typescript1corejs2: typescript.corejs,
        ie11: false,
        firefox52: false,
        opera10_50: false,
        duktape2_2: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'the pipeline operator',
  spec: 'https://github.com/tc39/proposal-pipeline-operator',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator',
  category: STAGE1,
  significance: 'medium',
  exec: function(){/*
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
  */},
  res : {
    babel7corejs2: true,
    ie11: false,
    firefox2: false,
    firefox57: false,
    firefox58: {
      val: 'flagged',
      note_id: 'ffox-pipeline',
      note_html: 'Requires the <code>--enable-pipeline-operator</code> compile option.'
    },
    opera10_50: false,
    graalvm: false,
  }
},
{
  name: 'extensible numeric literals',
  spec: 'https://github.com/tc39/proposal-extended-numeric-literals',
  category: STAGE1,
  significance: 'medium',
  exec: function(){/*
    function i (str, num) {
      return typeof str + str + typeof num + num;
    }

    return 123i === 'string123number123';
  */},
  res : {
    ie11: false,
    firefox52: false,
    opera10_50: false,
    graalvm: false,
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
        firefox52: false,
        opera10_50: false,
        graalvm: false,
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
        firefox52: false,
        opera10_50: false,
        graalvm: false,
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
        firefox52: false,
        opera10_50: false,
        graalvm: false,
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
        firefox52: false,
        opera10_50: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'optional chaining operator (?.)',
  spec: 'https://github.com/tc39/proposal-optional-chaining',
  category: STAGE2,
  significance: 'medium',
  subtests: [
    {
      name: 'optional property access',
      exec: function(){/*
        var foo = { baz: 42 };
        var bar = null;
        return foo?.baz === 42 && bar?.baz === undefined;
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'optional bracket access',
      exec: function(){/*
        var foo = { baz: 42 };
        var bar = null;
        return foo?.['baz'] === 42 && bar?.['baz'] === undefined;
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'optional method call',
      exec: function(){/*
        var foo = { baz: function () { return 42; } };
        var bar = null;
        return foo?.baz() === 42 && bar?.baz() === undefined;
      */},
      res : {
        babel7corejs2: true,
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'object shorthand improvements',
  spec: 'https://github.com/rbuckton/proposal-shorthand-improvements',
  category: STAGE0,
  significance: 'small',
  subtests: [
    {
      name: 'object initializers',
      exec: function(){/*
        var foo = { bar: 42, baz: 33 };
        var fuz = { foo.bar, foo['baz'] };
        return fuz.bar === 42 && fuz.baz === 33;
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'destructuring assignments',
      exec: function(){/*
        var foo = { bar: 42, baz: 33 };
        var fuz = {};
        ({ fuz.bar, fuz['baz'] } = foo);
        return fuz.bar === 42 && fuz.baz === 33;
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'nullish coalescing operator (??)',
  spec: 'https://github.com/tc39/proposal-nullish-coalescing',
  category: STAGE2,
  significance: 'small',
  exec: function(){/*
    return null ?? 42 === 42 &&
      undefined ?? 42 === 42 &&
      false ?? 42 === false &&
      '' ?? 42 === '' &&
      0 ?? 42 === 0;
  */},
  res : {
    babel7corejs2: true,
    ie11: false,
    firefox52: false,
    graalvm: false,
  }
},
{
  name: 'partial application syntax',
  spec: 'https://github.com/tc39/proposal-partial-application',
  category: STAGE1,
  significance: 'medium',
  subtests: [
    {
      name: 'partial application from left',
      exec: function(){/*
        function f(a, b) {
          return a + b;
        };
        var p = f('a', ?);
        return p('b') === 'ab';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'partial application from right',
      exec: function(){/*
        function f(a, b) {
          return a + b;
        };
        var p = f(?, 'b');
        return p('a') === 'ab';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'partial application for any arg',
      exec: function(){/*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f(?, 'b', ?);
        return p('a', 'c') === 'abc';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'partial application from left with rest',
      exec: function(){/*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f('a', ...);
        return p('b', 'c') === 'abc';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'partial application from right with rest',
      exec: function(){/*
        function f(a, b, c) {
          return a + b + c;
        };
        var p = f(..., 'c');
        return p('a', 'b') === 'abc';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'partial application for any arg with rest',
      exec: function(){/*
        function f(a, b, c, d, e) {
          return a + b + c + d + e;
        };
        var p = f(..., 'c', ...);
        return p('a', 'b') === 'abcab';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'mixed partial application',
      exec: function(){/*
        function f(a, b, c, d) {
          return a + b + c;
        };
        var p = f(?, 'b', ...);
        return p('a', 'c', 'd') === 'abcd';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'runtime evaluation',
      exec: function(){/*
        var f = function() {
          throw new Error();
        };
        var p = f(?, 'b');
        f = function(a, b) {
          return a + b;
        };
        return p('a') === 'ab';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'runtime evaluation of property access',
      exec: function(){/*
        var o = {};
        var p = o.f(?, 'b');
        o = { x: 'c', f: function(a, b) {
          return a + b + this.x;
        } };
        return p('a') === 'abc';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'lexical `this`',
      exec: function(){/*
        function f(a, b) {
          return a + b + (this === o);
        }
        var o = { f: f(?, 'b') };
        return o.f('a') === 'abfalse';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'constructor partial application',
      exec: function(){/*
        function F(a, b) {
          this.x = a + b;
        }
        var p = new F(?, 'b');
        return p('a').x === 'ab';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'constructor partial application with rest',
      exec: function(){/*
        function F(a, b, c) {
          this.x = a + b + c;
        }
        var p = new F('a', ...);
        return p('b', 'c').x === 'abc';
      */},
      res : {
        ie11: false,
        firefox52: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'numeric separators',
  spec: 'https://github.com/tc39/proposal-numeric-separator',
  category: STAGE3,
  significance: 'small',
  exec: function(){/*
    return 1_000_000.000_001 === 1000000.000001 &&
      0b1010_0001_1000_0101 === 0b1010000110000101;
  */},
  res : {
    babel7corejs2: true,
    typescript1corejs2: false,
    typescript2_7corejs2: true,
    ie11: false,
    firefox2: false,
    firefox67: false,
    firefox68: true,
    chrome67: chrome.harmony,
    chrome75: true,
    opera10_50: false,
    safaritp: true,
    graalvm: false,
  }
},
{
  name: 'Object.freeze and Object.seal syntax',
  spec: 'https://github.com/keithamus/object-freeze-seal-syntax',
  category: STAGE1,
  significance: 'medium',
  subtests: [
    {
      name: 'Object.freeze syntax',
      exec: function(){/*
        return Object.isFrozen({# foo: 42 #});
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Object.freeze syntax with array literal',
      exec: function(){/*
        return Object.isFrozen([# 42 #]);
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Object.seal syntax',
      exec: function(){/*
        return Object.isSealed({| foo: 42 |});
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Object.seal syntax with array literal',
      exec: function(){/*
        return Object.isSealed([| 42 |]);
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Sealing, function destructuring',
      exec: function(){/*
        function foo({| bar, baz |}) {
          return bar + baz;
        }
        if (foo({ bar: 1, baz: 2 }) !== 3) return;
        try {
          foo({ bar: 1, fuz: 2 });
        } catch (e) {
          return true;
        }
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Freezing, function destructuring',
      exec: function(){/*
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
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Sealing, function arguments',
      exec: function(){/*
        function foo(| bar, baz |) {
          return bar + baz;
        }
        if (foo(1, 2) !== 3) return;
        try {
          foo(1, 2, 3);
        } catch (e) {
          return true;
        }
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
    {
      name: 'Freezing, function arguments',
      exec: function(){/*
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
      */},
      res : {
          ie11: false,
          firefox52: false,
          graalvm: false,
      }
    },
  ]
},
{
  name: 'BigInt',
  category: STAGE3,
  significance: 'medium',
  spec: 'https://github.com/tc39/proposal-bigint',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt',
  subtests: [
    {
      name: 'basic functionality',
      exec: function () {/*
        return (1n + 2n) === 3n;
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'constructor',
      exec: function () {/*
        return BigInt("3") === 3n;
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'BigInt.asIntN',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN',
      exec: function () {/*
        return typeof BigInt.asIntN === 'function';
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'BigInt.asUintN',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN',
      exec: function () {/*
        return typeof BigInt.asUintN === 'function';
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'BigInt64Array',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array',
      exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new BigInt64Array(buffer);
        view[0] = 0x8000000000000000n;
        return view[0] === -0x8000000000000000n;
      */},
      res: {
        firefox45: false,
        firefox67: false,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'BigUint64Array',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array',
      exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new BigUint64Array(buffer);
        view[0] = 0x10000000000000000n;
        return view[0] === 0n;
      */},
      res: {
        firefox45: false,
        firefox67: false,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'DataView.prototype.getBigInt64',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64',
      exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigInt64(0, 1n);
        return view.getBigInt64(0) === 1n;
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
    {
      name: 'DataView.prototype.getBigUint64',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64',
      exec: function () {/*
        var buffer = new ArrayBuffer(64);
        var view = new DataView(buffer);
        view.setBigUint64(0, 1n);
        return view.getBigUint64(0) === 1n;
      */},
      res: {
        firefox45: false,
        firefox66: false,
        firefox67: firefox.bigint,
        firefox68: true,
        chrome67: true,
        graalvm: true,
      },
    },
  ],
},
{
  name: 'String.prototype.replaceAll',
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-string-replace-all',
  category: STAGE2,
  exec: function () {/*
    return 'q=query+string+parameters'.replaceAll('+', ' ') === 'q=query string parameters';
  */},
  res: {
      babel6corejs2: false,
      babel7corejs3: babel.corejs,
      typescript1corejs2: typescript.fallthrough,
      typescript3_2corejs3: typescript.corejs,
      ie11: false,
      firefox52: false,
      graalvm: false,
  }
},
{
  name: 'String.prototype.codePoints',
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-string-prototype-codepoints',
  category: STAGE1,
  exec: function () {/*
    var results = [];
    for (let code of 'a𠮷b'.codePoints()) results.push(code);
    return results.length === 3
      && results[0].codePoint === 97 && results[0].position === 0
      && results[1].codePoint === 134071 && results[1].position === 1
      && results[2].codePoint === 98 && results[2].position === 3;
  */},
  res: {
    babel6corejs2: false,
    babel7corejs3: babel.corejs,
    typescript1corejs2: typescript.fallthrough,
    typescript3_2corejs3: typescript.corejs,
    ie11: false,
    firefox52: false,
    graalvm: false,
  }
},
{
  name: 'Getting last item from array',
  spec: 'https://github.com/keithamus/proposal-array-last',
  category: STAGE1,
  significance: 'small',
  subtests: [
    {
      name: 'Array.prototype.lastItem',
      exec: function () {/*
        return [1, 2, 3].lastItem === 3;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Array.prototype.lastIndex',
      exec: function () {/*
        return [1, 2, 3].lastIndex === 2;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
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
        firefox2: false,
        graalvm: false,
      }
    },
  ]
},
{
  name: 'Collections methods',
  spec: 'https://github.com/tc39/proposal-collection-methods',
  category: STAGE1,
  significance: 'medium',
  subtests: [
    {
      name: 'Map.groupBy',
      exec: function () {/*
        var map = Map.groupBy(new Set([1, 2, 3, 4]), it => it % 2)
        return map.size === 2
          && map.get(0)[0] === 2
          && map.get(0)[1] === 4
          && map.get(1)[0] === 1
          && map.get(1)[1] === 3;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.keyBy',
      exec: function () {/*
        var map = Map.keyBy(new Set([{ id: 101 }, { id: 102 }]), it => it.id)
        return map.size === 2
          && map.get(101).id === 101
          && map.get(102).id === 102;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.deleteAll',
      exec: function () {/*
        var map = new Map([[1, 2], [3, 4], [5, 6], [7, 8]]);
        map.deleteAll(1, 5)
        return map.size === 2
          && map.get(3) === 4
          && map.get(7) === 8;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.every',
      exec: function () {/*
        return new Map([[1, 4], [2, 5], [3, 6]]).every(it => typeof it == 'number');
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.filter',
      exec: function () {/*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).filter(it => !(it % 2));
        return map.size === 2
          && map.get(1) === 4
          && map.get(3) === 6;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.find',
      exec: function () {/*
        return new Map([[1, 2], [2, 3], [3, 4]]).find(it => it % 2) === 3;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.findKey',
      exec: function () {/*
        return new Map([[1, 2], [2, 3], [3, 4]]).findKey(it => it % 2) === 2;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.includes',
      exec: function () {/*
        return new Map([[1, 2], [2, NaN]]).includes(2)
          && new Map([[1, 2], [2, NaN]]).includes(NaN);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.keyOf',
      exec: function () {/*
        return new Map([[1, 2], [2, NaN]]).keyOf(2) === 1
          && new Map([[1, 2], [2, NaN]]).keyOf(NaN) === undefined;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.mapKeys',
      exec: function () {/*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).mapKeys((value, key) => key * key);
        return map.size === 3
          && map.get(1) === 4
          && map.get(4) === 5
          && map.get(9) === 6;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.mapValues',
      exec: function () {/*
        var map = new Map([[1, 4], [2, 5], [3, 6]]).mapValues((value, key) => value * value);
        return map.size === 3
          && map.get(1) === 16
          && map.get(2) === 25
          && map.get(3) === 36;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.merge',
      exec: function () {/*
        var map = new Map([[1, 4], [2, 5]]).merge(new Map([[2, 7], [3, 6]]));
        return map.size === 3
          && map.get(1) === 4
          && map.get(2) === 7
          && map.get(3) === 6;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.reduce',
      exec: function () {/*
        return new Map([['a', 1], ['b', 2], ['c', 3], ]).reduce(((a, b) => a + b), 1) === 7;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Map.prototype.some',
      exec: function () {/*
        return new Map([[1, 4], [2, 5], [3, 6]]).some(it => it % 2);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.addAll',
      exec: function () {/*
        var set = new Set([1, 2]).addAll(2, 3);
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
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.deleteAll',
      exec: function () {/*
        var set = new Set([1, 2, 3, 4]);
        return set.deleteAll(2, 3) === true
          && set.size === 2
          && set.has(1)
          && set.has(4);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.every',
      exec: function () {/*
        return new Set([1, 2, 3]).every(it => typeof it === 'number');
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.filter',
      exec: function () {/*
        var set = new Set([1, 2, 3]).filter(it => it % 2);
        return set.size === 2
          && set.has(1)
          && set.has(3);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.find',
      exec: function () {/*
        return new Set([1, 2, 3]).find(it => !(it % 2)) === 2;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.join',
      exec: function () {/*
        return new Set([1, 2, 3]).join('|') === '1|2|3';
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.map',
      exec: function () {/*
        var set = new Set([1, 2, 3]).map(it => it * it);
        return set.size === 3
          && set.has(1)
          && set.has(4)
          && set.has(9);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.reduce',
      exec: function () {/*
        return new Set([1, 2, 3]).reduce((memo, it) => memo + it) === 6;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'Set.prototype.some',
      exec: function () {/*
        return new Set([1, 2, 3]).some(it => it % 2);
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakMap.prototype.deleteAll',
      exec: function () {/*
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
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakSet.prototype.addAll',
      exec: function () {/*
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
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
    {
      name: 'WeakSet.prototype.deleteAll',
      exec: function () {/*
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
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
        firefox52: false,
        graalvm: false,
      }
    },
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
        firefox52: false,
        chrome70: false,
        safari12: false,
      },
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
        firefox52: false,
        chrome70: false,
        safari12: false,
      },
    },
  ]
},
{
  name: 'Promise.allSettled',
  category: STAGE3,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-promise-allSettled',
  exec: function () {/*
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
  */},
  res: {
    babel6corejs2: false,
    babel7corejs3: babel.corejs,
    typescript1corejs2: typescript.fallthrough,
    typescript3_2corejs3: typescript.corejs,
    firefox68: true,
    chrome76: true,
  }
},
{
  name: 'Math.seededPRNG',
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-seeded-random',
  category: STAGE1,
  exec: function () {/*
    var gen1 = Math.seededPRNG({ seed: 42 });
    var gen2 = Math.seededPRNG({ seed: 42 });
    if (!gen1.next || !gen1[Symbol.iterator]) return false;
    var first = gen1.next().value;
    if (first < 0 || first > 1) return false;
    if (first !== gen2.next().value) return false;
    var second = gen1.next().value;
    if (first === second) return false;
    return second === gen2.next().value;
  */},
  res: {
    babel6corejs2: false,
    babel7corejs3: babel.corejs,
    typescript1corejs2: typescript.fallthrough,
    typescript3_2corejs3: typescript.corejs,
  }
},
{
  name: '{ BigInt, Number }.fromString',
  category: STAGE1,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-number-fromstring',
  subtests: [
    {
      name: 'Number.fromString',
      exec: function () {/*
        return Number.fromString('42') === 42;
      */},
      res: {
        babel6corejs2: false,
        babel7corejs3: babel.corejs,
        typescript1corejs2: typescript.fallthrough,
        typescript3_2corejs3: typescript.corejs,
      },
    },
    {
      name: 'BigInt.fromString',
      exec: function () {/*
        return BigInt.fromString('42') === 42n;
      */},
      res: {
      },
    },
  ]
},
{
  name: 'Promise.any',
  category: STAGE1,
  significance: 'small',
  spec: 'https://github.com/tc39/proposal-promise-any',
  exec: function () {/*
    Promise.any([
      Promise.resolve(1),
      Promise.reject(2),
      Promise.resolve(3)
    ]).then(it => {
      if (it === 1) asyncTestPassed();
    });
  */},
  res: {
    babel6corejs2: false,
    babel7corejs3: babel.corejs,
    typescript1corejs2: typescript.fallthrough,
    typescript3_2corejs3: typescript.corejs,
  }
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
        safari3_1: true,
        chrome7: true,
        opera7_5: false,
        opera10_10: false,
        opera10_50: true,
        konq4_4: true,
        besen: false,
        rhino1_7: true,
        phantom: true,
        android4_0: true,
        duktape2_0: false,
        nashorn1_8: true,
        nashorn9: true,
        nashorn10: true,
        graalvm: true,
      },
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
        safari3_1: true,
        chrome7: true,
        opera7_5: true,
        opera10_10: true,
        opera10_50: true,
        konq4_4: true,
        besen: false,
        rhino1_7: true,
        phantom: true,
        android4_0: true,
        duktape2_0: false,
        nashorn1_8: true,
        nashorn9: true,
        nashorn10: true,
        graalvm: true,
      },
    },
  ]
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
