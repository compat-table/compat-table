// exports browsers and tests
// new browsers should only be added once they have at least a single 'true' result.
exports.name = 'ES7';
exports.target_file = 'es7/index.html';
exports.skeleton_file = 'es7/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur',
    short: 'Traceur',
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel',
    short: 'Babel +<br><nobr>core-js</nobr>',
    platformtype: 'compiler',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via --stage 0 flag'
  },
  jsx: {
    full: 'JSX',
    short: 'JSX',
    obsolete: false,
    platformtype: 'compiler',
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31',
    obsolete: true,
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32',
    obsolete: true,
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF34',
    obsolete: true,
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF35',
    obsolete: true,
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF39',
    unstable: true,
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome38: {
    full: 'Chrome',
    short: 'CH 38',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome39: {
    full: 'Chrome',
    short: 'CH 39',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome40: {
    full: 'Chrome',
    short: 'CH 40',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome41: {
    full: 'Chrome',
    short: 'CH 41',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome42: {
    full: 'Chrome',
    short: 'CH 42',
    unstable: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome43: {
    full: 'Chrome',
    short: 'CH 43',
    unstable: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  node: {
    full: 'Node 0.12',
    short: 'Node',
    platformtype: 'engine',
  },
  iojs: {
    full: 'io.js 1.0.0',
    short: 'io.js',
    platformtype: 'engine',
  },
};

exports.tests = [
{
  name: 'exponentiation operator',
  category: 'draft',
  link: 'https://gist.github.com/rwaldron/ebe0f4d2d267370be882',
  exec: function () {/*
    return 2 ** 3 === 8;
  */},
  res: {
    tr: true,
    babel: true,
  }
},
{
  name: 'Object.observe',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:observe',
  category: 'draft',
  exec: function () {/*
    return typeof Object.observe === 'function';
  */},
  res: {
    chrome33: true,
    chrome34: true,
    chrome35: true,
    chrome37: true,
    node: true,
    iojs: true,
  }
},
{
  name: 'Array.prototype.includes',
  link: 'https://github.com/tc39/Array.prototype.includes/blob/master/spec.md',
  category: 'draft',
  exec: function () {/*
    return typeof Array.prototype.includes === 'function';
  */},
  res: {
    babel: true,
    es7shim: true,
  }
},
{
  name: 'trailing commas in function syntax',
  link: 'https://github.com/tc39/tc39-notes/raw/master/es6/2014-09/trailing_comma_proposal.pdf',
  category: 'proposal',
  subtests: {
    'in parameter lists': {
      exec: function(){/*
        return typeof function f( a, b, ){} === 'function';
      */},
      res: {
        babel:       true,
      }
    },
    'in argument lists': {
      exec: function(){/*
        return Math.min(1,2,3,) === 1;
      */},
      res: {
        babel:       true,
      }
    },
  },
},
{
  name: 'async functions',
  category: 'proposal',
  link: 'https://github.com/lukehoban/ecmascript-asyncawait',
  subtests: {
    'basic support' : {
      exec: function () {/*
        return (async function(){
          return 42 + await Promise.resolve(42)
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
      }
    },
    'arrow async functions' : {
      exec: function () {/*
        return (async () => 42 + await Promise.resolve(42))() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
      }
    }
  }
},
{
  name: 'typed objects',
  category: 'proposal',
  link: 'https://github.com/dslomov-chromium/typed-objects-es7',
  exec: function () {/*
    return typeof StructType === "function";
  */},
  res: {
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://gist.github.com/WebReflection/9353781',
  category: 'strawman',
  exec: function () {/*
    return typeof Object.getOwnPropertyDescriptors === 'function';
  */},
  res: {
    babel: true,
    es7shim: true,
  }
},
{
  name: 'ArrayBuffer.transfer',
  link: 'https://gist.github.com/lukewagner/2735af7eea411e18cf20',
  category: 'proposal',
  exec: function(){/*
    return typeof ArrayBuffer.transfer === 'function';
  */},
  res : {
    firefox39: true,
    chrome41:  true
  }
},
{
  name: 'parallel JavaScript',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism',
  category: 'proposal',
  subtests: {
    'Array.prototype.mapPar' : {
      exec: function(){/*
        return typeof Array.prototype.mapPar === 'function';
      */},
      res: {
      }
    },
    'Array.prototype.filterPar' : {
      exec: function(){/*
        return typeof Array.prototype.filterPar === 'function';
      */},
      res: {
      }
    },
    'Array.fromPar' : {
      exec: function(){/*
        return typeof Array.fromPar === 'function';
      */},
      res: {
      }
    },
    'TypedObject.fromPar' : {
      exec: function(){/*
        return typeof TypedObject.fromPar === 'function';
      */},
      res: {
      }
    },
    'Array.prototype.get' : {
      exec: function(){/*
        return typeof Array.prototype.get === 'function';
      */},
      res: {
      }
    },
    'Array.prototype.reducePar' : {
      exec: function(){/*
        return typeof Array.prototype.reducePar === 'function';
      */},
      res: {
      }
    },
    'Array.prototype.scanPar' : {
      exec: function(){/*
        return typeof Array.prototype.scanPar === 'function';
      */},
      res: {
      }
    },
    'Array.prototype.scatterPar' : {
      exec: function(){/*
        return typeof Array.prototype.scatterPar === 'function';
      */},
      res: {
      }
    }
  }
},
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  category: 'proposal',
  link: 'https://github.com/johnmccutchan/ecmascript_simd',
  subtests: {
    'basic support' : {
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        firefox39:   true,
      }
    },
    'float32x4' : {
      exec: function(){/*
        return typeof SIMD.float32x4 === 'function';
      */},
      res: {
        firefox39:   true,
      }
    },
    'float64x2' : {
      exec: function(){/*
        return typeof SIMD.float64x2 === 'function';
      */},
      res: {
        firefox39:   true,
      }
    },
    'int32x4' : {
      exec: function(){/*
        return typeof SIMD.int32x4 === 'function';
      */},
      res: {
        firefox39:   true,
      }
    },
    'SIMD.%type%.abs' : {
      exec: function(){/*
        return typeof SIMD.float32x4.abs === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.add' : {
      exec: function(){/*
        return typeof SIMD.float32x4.add === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.and' : {
      exec: function(){/*
        return typeof SIMD.float32x4.and === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.bitselect' : {
      exec: function(){/*
        return typeof SIMD.float32x4.bitselect === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.bool' : {
      exec: function(){/*
        return typeof SIMD.float32x4.bool === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.check' : {
      exec: function(){/*
        return typeof SIMD.float32x4.check === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.equal' : {
      exec: function(){/*
        return typeof SIMD.float32x4.equal === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.equivalent' : {
      exec: function(){/*
        return typeof SIMD.float32x4.equivalent === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.greaterThan' : {
      exec: function(){/*
        return typeof SIMD.float32x4.greaterThan === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.greaterThanOrEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.lessThan' : {
      exec: function(){/*
        return typeof SIMD.float32x4.lessThan === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.lessThanOrEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.mul' : {
      exec: function(){/*
        return typeof SIMD.float32x4.mul === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.neg' : {
      exec: function(){/*
        return typeof SIMD.float32x4.neg === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.not' : {
      exec: function(){/*
        return typeof SIMD.float32x4.not === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.notEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.notEqual === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.or' : {
      exec: function(){/*
        return typeof SIMD.float32x4.or === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.select' : {
      exec: function(){/*
        return typeof SIMD.float32x4.select === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.shuffle' : {
      exec: function(){/*
        return typeof SIMD.float32x4.shuffle === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.sub' : {
      exec: function(){/*
        return typeof SIMD.float32x4.sub === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.swizzle' : {
      exec: function(){/*
        return typeof SIMD.float32x4.swizzle === 'function';
      */},
      res: {
        firefox39: true,
      }
    },
    'SIMD.%type%.xor' : {
      exec: function(){/*
        return typeof SIMD.float32x4.xor === 'function';
      */},
      res: {
        firefox39: true,
      }
    }
  }
},
{
  name: 'class decorators',
  category: 'proposal',
  link: 'https://github.com/wycats/javascript-decorators',
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
    babel: true,
  }
},
{
  name: 'async generators',
  link: 'https://github.com/jhusain/asyncgenerator',
  category: 'proposal',
  exec: function(){/*
    async function * nums() {
      yield 1;
      yield 2;
      yield 3;
    }
    var result = '';
    // data consumer
    async function printData() {
      for(var x on nums()) {
        result += x;
      }
    }
    return result === "123";
  */},
  res: {
  }
},
{
  name: 'array comprehensions',
  category: 'strawman',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */},
  res: {
    tr:          true,
    babel:       true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
  }
},
{
  name: 'generator comprehensions',
  category: 'strawman',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
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
    tr:          true,
    babel:       true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
  }
},
{
  name: 'destructuring in comprehensions',
  category: 'strawman',
  link: 'https://bugzilla.mozilla.org/show_bug.cgi?id=980828',
  exec: function () {/*
    return [for([a, b] of [['a', 'b']])a + b][0] === 'ab';
  */},
  res: {
    tr:          true,
    babel:       true,
  }
},
{
  name: 'class properties',
  category: 'strawman',
  link: 'https://gist.github.com/jeffmo/054df782c05639da2adb',
  exec: function () {/*
    class C {
      x = 'x';
      static y = 'y';
    }
    return new C().x + C.y === 'xy';
  */},
  res: {
    babel:       true,
    tr:          true,
  }
},
{
  name: 'Map.prototype.toJSON',
  category: 'strawman',
  link : 'https://github.com/DavidBruant/Map-Set.prototype.toJSON',
  exec: function(){/*
    return JSON.stringify(new Map([['a', 'b'], ['c', 'd']])) === '[["a","b"],["c","d"]]';
  */},
  res: {
    babel:       true,
    es7shim:     true,
  }
},
{
  name: 'Reflect.Realm',
  category: 'strawman',
  link: 'https://gist.github.com/dherman/7568885',
  exec: function () {/*
    var i, names =
      ["eval", "global", "intrinsics", "stdlib", "directEval",
      "indirectEval", "initGlobal", "nonEval"];

    if (typeof Reflect !== "object" || typeof Reflect.Realm !== "function"
        || typeof Reflect.Realm.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Realm.prototype)) {
        return false;
      }
    }
    return true;
  */},
  res: {
  }
},
{
  name: 'Set.prototype.toJSON',
  category: 'strawman',
  link: 'https://github.com/DavidBruant/Map-Set.prototype.toJSON',
  exec: function(){/*
    return JSON.stringify(new Set([1, 2, 3, 2, 1])) === '[1,2,3]';
  */},
  res: {
    babel:       true,
    es7shim:     true,
  }
},
{
  name: 'object rest properties',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: 'strawman',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'object spread properties',
  category: 'strawman',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O.a + O.b + O.c === 6;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'String.prototype.at',
  link: 'https://github.com/mathiasbynens/String.prototype.at',
  category: 'strawman',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    babel:       true,
    es7shim:     true,
  }
},
{
  name: 'string padding',
  category: 'strawman',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:string_padding',
  subtests: {
    'String.prototype.lpad' : {
      exec: function(){/*
        return 'hello'.lpad(10) === '     hello'
          && 'hello'.lpad(10, '1234') === '41234hello';
      */},
      res: {
        babel:       true,
      }
    },
    'String.prototype.rpad' : {
      exec: function(){/*
        return 'hello'.rpad(10) === 'hello     '
          && 'hello'.rpad(10, '1234') === 'hello12341';
      */},
      res: {
        babel:       true,
      }
    }
  }
}
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['finished', 'candidate', 'draft', 'proposal', 'strawman'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES7 category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
