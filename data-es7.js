// exports browsers and tests

exports.name = 'ES7';
exports.target_file = 'es7/index.html';
exports.skeleton_file = 'es7/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false, // always up-to-date version
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel',
    short: 'Babel +<br><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via --experimental flag'
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
    obsolete: false // always up-to-date version
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF34'
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF35'
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF39'
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  safari78: {
    full: 'Safari 7.0, Safari 7.1, Safari 8',
    short: 'SF 7, SF 8',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r168571',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  konq49: {
    full: 'Konqueror 4.13',
    short: 'KQ 4.13'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    platformtype: 'engine',
    obsolete: true,
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH',
    platformtype: 'engine',
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false, // current version
    platformtype: 'engine',
  },
  nodeharmony: {
    full: 'Node 0.11.11 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  },
  iojs: {
    full: 'io.js 1.0.0',
    short: 'io.js',
    obsolete: false, // current version
    platformtype: 'engine',
  },
  ejs: {
    full: 'Echo JS',
    short: 'Echo JS',
    obsolete: false, // always up-to-date version
    platformtype: 'engine',
  },
  ios7: {
    full: 'iOS Safari 7',
    short: 'iOS7',
    platformtype: 'mobile',
  },
  ios8: {
    full: 'iOS Safari 8',
    short: 'iOS8',
    platformtype: 'mobile',
  }
};

exports.tests = [
{
  name: 'Exponentiation operator',
  link: 'https://gist.github.com/rwaldron/ebe0f4d2d267370be882',
  exec: function () {/*
    return 2 ** 3 === 8;
  */},
  res: {
    tr: true,
    babel: true,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: true,
    firefox34: true,
    firefox35: true,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Array comprehensions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a][0] === 1
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Generator comprehensions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    (for (a of [1, 2, 3]) a * a)
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object rest properties',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    tr:          false,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object spread properties',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O.a + O.b + O.c === 6;
  */},
  res: {
    tr:          false,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Async functions',
  link: 'https://github.com/lukehoban/ecmascript-asyncawait',
  exec: function () {/*
    return (async function(){
      return 42 + await Promise.resolve(42)
    })() instanceof Promise
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
  }
},
{
  name: 'Arrow async functions',
  link: 'https://github.com/lukehoban/ecmascript-asyncawait',
  exec: function () {/*
    return (async () => 42 + await Promise.resolve(42))() instanceof Promise
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
  }
},
{
  name: 'Typed objects',
  link: 'https://github.com/dslomov-chromium/typed-objects-es7',
  exec: function () {/*
    return typeof StructType !== 'undefined';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: true,
    firefox34: true,
    firefox35: true,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object.observe',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:observe',
  exec: function () {/*
    return typeof Object.observe === 'function';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    chrome37: true,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true,
    iojs: true,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://gist.github.com/WebReflection/9353781',
  exec: function () {/*
    return typeof Object.getOwnPropertyDescriptors === 'function';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: true,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},

{
  name: 'Array.prototype.includes',
  link: 'https://github.com/tc39/Array.prototype.includes/blob/master/spec.md',
  exec: function () {/*
    return typeof Array.prototype.includes === 'function';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: true,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35:   {
      val: true,
      note_id: 'includes-nightly',
      note_html: 'Only enabled in Nightly builds, before 2014-11-22 as <code>Array.prototype.contains</code>'
    },
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},

{
  name: 'String.prototype.at',
  link: 'https://github.com/mathiasbynens/String.prototype.at',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Reflect.Realm',
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
    tr:          false,
    babel:       false,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    firefox39:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'SIMD',
  link: 'https://github.com/johnmccutchan/ecmascript_simd',
  exec: function () {/*
    return typeof SIMD !== 'undefined';
  */},
  res: {
    tr:          false,
    babel:       false,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    firefox39:   true,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
}
];
