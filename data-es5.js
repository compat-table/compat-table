// exports browsers and tests
exports.name = 'ES5';
exports.target_file = 'es5/index.html';
exports.skeleton_file = 'es5/skeleton.html';
exports.browsers = {
  es5shim: {
    full: 'es5-shim',
    short: 'es5-shim',
    obsolete: false,
    platformtype: 'compiler'
  },
  ie7: {
    full: 'Internet Explorer 7',
    family: 'Chakra',
    short: 'IE 7',
    obsolete: true
  },
  ie8: {
    full: 'Internet Explorer 8',
    family: 'Chakra',
    short: 'IE 8',
    obsolete: true
  },
  ie9: {
    full: 'Internet Explorer 9',
    family: 'Chakra',
    short: 'IE 9',
    obsolete: false
  },
  ie10: {
    full: 'Internet Explorer 10, 11',
    family: 'Chakra',
    short: 'IE 10+',
    obsolete: false
  },
  firefox3: {
    full: 'Firefox 3',
    family: 'SpiderMonkey',
    short: 'FF 3',
    obsolete: true
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    family: 'SpiderMonkey',
    short: 'FF 3.5, 3.6',
    obsolete: true
  },
  firefox4: {
    full: 'Firefox 4-20',
    family: 'SpiderMonkey',
    short: 'FF 4-20',
    obsolete: true
  },
  firefox21: {
    full: 'Firefox 21+',
    family: 'SpiderMonkey',
    short: 'FF 21+',
    obsolete: false
  },
  safari3: {
    full: 'Safari 3.2',
    family: 'JavaScriptCore',
    short: 'SF 3.2',
    obsolete: true
  },
  safari4: {
    full: 'Safari 4.0.5',
    family: 'JavaScriptCore',
    short: 'SF 4',
    obsolete: true
  },
  safari5: {
    full: 'Safari 5.0.5',
    family: 'JavaScriptCore',
    short: 'SF 5',
    obsolete: true
  },
  safari51: {
    full: 'Safari 5.1.4',
    family: 'JavaScriptCore',
    short: 'SF 5.1.4',
    obsolete: true
  },
  safari6: {
    full: 'Safari 6.0, Safari 7.0, Safari 7.1, Safari 8, Safari 9',
    family: 'JavaScriptCore',
    short: 'SF 6+',
    obsolete: false
  },
  webkit: {
    full: 'Webkit r120398 (June 20, 2012)',
    family: 'JavaScriptCore',
    short: 'WebKit',
    obsolete: false
  },
  chrome5: {
    full: 'Chrome 5 (5.0.375.127)',
    family: 'V8',
    short: 'CH 5',
    obsolete: true
  },
  chrome6: {
    full: 'Chrome 6 (6.0.472.55)',
    family: 'V8',
    short: 'CH 6',
    obsolete: true
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev), Chrome 10, Chrome 11, Chrome 12 (12.0.742.91)',
    family: 'V8',
    short: 'CH 7-12',
    obsolete: true
  },
  chrome13: {
    full: 'Chrome 13 (13.0.782.107 beta), Chrome 14 (14.0.835.8 dev), Chrome 15, Chrome 16 (16.0.891.0 dev)',
    family: 'V8',
    short: 'CH 13-16',
    obsolete: true
  },
  chrome19: {
    full: 'Chrome 19 (19.0.1084.56 stable), Chrome 22',
    family: 'V8',
    short: 'CH 19-22',
    obsolete: true
  },
  chrome23: {
    full: 'Chrome 23+, Opera 15+',
    family: 'V8',
    short: 'CH 23+,<br>OP 15+',
    obsolete: false
  },
  opera10_10: {
    full: 'Opera 10.10',
    family: 'Carakan',
    short: 'OP 10.1',
    obsolete: true
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156), Opera 11.10 (build 2048), Opera 11.11 (build 2109), Opera 11.50 (build 1074)',
    family: 'Carakan',
    short: 'OP 10.50-11.50',
    obsolete: true
  },
  opera12: {
    full: 'Opera 11.60 (build 1185), Opera 11.64 (build 1403), Opera 12 (build 1065)',
    family: 'Carakan',
    short: 'OP 11.60-OP 12',
    obsolete: true
  },
  opera12_10: {
    full: 'Opera 12.15',
    family: 'Carakan',
    short: 'OP 12.10',
    obsolete: false
  },
  konq43: {
    full: 'Konqueror 4.3',
    family: 'KJS',
    short: 'Konq 4.3',
    obsolete: true
  },
  konq49: {
    full: 'Konqueror 4.9',
    family: 'KJS',
    short: 'Konq 4.9',
    obsolete: true
  },
  konq413: {
    full: 'Konqueror 4.13',
    family: 'KJS',
    short: 'Konq 4.13',
    obsolete: false
  },
  besen: {
    full: 'Bero\'s EcmaScript Engine (version 1.0.0.489)',
    short: 'BESEN',
    link: 'http://besen.sourceforge.net/',
    obsolete: false,
    platformtype: 'engine',
  },
  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7',
    obsolete: false,
    platform: 'engine',
  },
  phantom: {
    full: 'PhantomJS 2.0',
    short: 'PhantomJS 2.0',
    obsolete: false,
    platformtype: 'engine',
    equals: 'safari6',
  },
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    unstable: true,
    platformtype: 'compiler',
  },
  android40: {
    full: 'Android Browser',
    family: 'Android',
    short: 'Android 4.0',
    platformtype: 'mobile',
    obsolete: true,
  },
  android41: {
    full: 'Android Browser',
    family: 'Android',
    short: 'Android 4.1 - 4.3',
    platformtype: 'mobile',
    obsolete: true,
  },
  android44: {
    full: 'Android Browser',
    family: 'Android',
    short: 'Android 4.4+',
    platformtype: 'mobile',
    equals: 'chrome23',
    ignore_flagged: true,
  },
  ios78: {
    full: 'iOS Safari 7/8',
    short: 'iOS7/8',
    equals: 'safari6',
    platformtype: 'mobile',
  }
};
var sparseNote = {
  val: true,
  note_id: 'sparse_arrays',
  note_html: 'Internet Explorer 6 - 8 do not differentiate between a dense array with undefined values, and a sparse array. Specifically, `0 in [,]` and `0 in [undefined]` both yield false - whereas in a compliant browser, the former would give `false`, the latter `true`. As such, ES5 array iteration methods can only be shimmed reliably when dealing with dense arrays.'
};
exports.tests = [
{
  name: 'Object/array literal extensions',
  significance: 'large',
  subtests: [{
    name: 'Getter accessors',
    exec: function () {/*
      return ({ get x(){ return 1 } }).x === 1;
    */},
    res: {
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Setter accessors',
    exec: function () {/*
      var value = 0;
      ({ set x(v){ value = v; } }).x = 1;
      return value === 1;
    */},
    res: {
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    },
  },
  {
    name: 'Trailing commas in object literals',
    exec: function () {/*
      return { a: true, }.a === true;
    */},
    res: {
      ie9: true,
      firefox3: true,
      safari3: null,
      safari4: true,
      chrome5: null,
      chrome7: true,
      opera10_50: null,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'Trailing commas in array literals',
    exec: function () {/*
      return [1,].length === 1;
    */},
    res: {
      ie9: true,
      firefox3: true,
      safari3: null,
      safari4: true,
      chrome5: null,
      chrome7: true,
      opera10_50: null,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'Reserved words as property names',
    exec: function () {/*
      return ({ if: 1 }).if === 1;
    */},
    res: {
      ie9: true,
      firefox3: true,
      safari51: true,
      webkit: true,
      chrome5: false,
      chrome6: false,
      chrome7: true,
      chrome13: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: false,
      ejs: true,
      android40: true,
    },
  }],
  separator: 'after'
},
{
  name: 'Object static methods',
  significance: 'large',
  subtests: [{
    name: 'Object.create',
    exec: function () {
      return typeof Object.create == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.defineProperty',
    exec: function () {
      return typeof Object.defineProperty == 'function';
    },
    res: {
      ie8: {
        val: true,
        note_id: 'define-property-ie',
        note_html: 'In Internet Explorer 8 <code>Object.defineProperty</code> only accepts DOM objects ' +
          '(<a href="http://msdn.microsoft.com/en-us/library/dd548687(VS.85).aspx">MSDN reference</a>).'
      },
      ie9: true,
      firefox4: true,
      firefox21: true,
      safari5: {
        val: true,
        note_id: 'define-property-webkit',
        note_html: 'In some versions of Safari 5, <code>Object.defineProperty</code> does <b>not</b> work with DOM objects.'
      },
      safari51: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.defineProperties',
    exec: function () {
      return typeof Object.defineProperties == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.getPrototypeOf',
    exec: function () {
      return typeof Object.getPrototypeOf == 'function';
    },
    res: {
      ie9: true,
      firefox3_5: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.keys',
    exec: function () {
      return typeof Object.keys == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.seal',
    exec: function () {
      return typeof Object.seal == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.freeze',
    exec: function () {
      return typeof Object.freeze == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.preventExtensions',
    exec: function () {
      return typeof Object.preventExtensions == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.isSealed',
    exec: function () {
      return typeof Object.isSealed == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.isFrozen',
    exec: function () {
      return typeof Object.isFrozen == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.isExtensible',
    exec: function () {
      return typeof Object.isExtensible == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari51: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.getOwnPropertyDescriptor',
    exec: function () {
      return typeof Object.getOwnPropertyDescriptor == 'function';
    },
    res: {
      ie7: false,
      ie8: {
        val: true,
        note_id: 'get-own-property-descriptor-ie',
        note_html: 'In Internet Explorer 8 <code>Object.getOwnPropertyDescriptor</code> only accepts DOM objects ' +
          '(<a href="http://msdn.microsoft.com/en-us/library/dd548687(VS.85).aspx">MSDN reference</a>).'
      },
      ie9: true,
      ie10: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Object.getOwnPropertyNames',
    exec: function () {
      return typeof Object.getOwnPropertyNames == 'function';
    },
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    },
    separator: 'after'
  }],
},
{
  name: 'Array methods',
  significance: 'large',
  subtests: [{
    name: 'Array.isArray',
    exec: function () {
      return typeof Array.isArray == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.indexOf',
    exec: function () {
      return typeof Array.prototype.indexOf == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.lastIndexOf',
    exec: function () {
      return typeof Array.prototype.lastIndexOf == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.every',
    exec: function () {
      return typeof Array.prototype.every == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.some',
    exec: function () {
      return typeof Array.prototype.some == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.forEach',
    exec: function () {
      return typeof Array.prototype.forEach == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.map',
    exec: function () {
      return typeof Array.prototype.map == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.filter',
    exec: function () {
      return typeof Array.prototype.filter == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.reduce',
    exec: function () {
      return typeof Array.prototype.reduce == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari4: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Array.prototype.reduceRight',
    exec: function () {
      return typeof Array.prototype.reduceRight == 'function';
    },
    res: {
      es5shim: sparseNote,
      ie9: true,
      firefox3: true,
      safari4: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    },
  }],
},
{
  name: 'String properties and methods',
  significance: 'small',
  subtests: [{
    name: 'Property access on strings',
    exec: function () {
      return "foobar"[3] === "b";
    },
    res: {
      ie7: false,
      ie8: true,
      firefox3: true,
      safari3: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'String.prototype.trim',
    exec: function () {
      return typeof String.prototype.trim == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3_5: true,
      safari5: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    },
    separator: 'after'
  }
  ]
},
{
  name: 'Date methods',
  significance: 'small',
  subtests: [{
    name: 'Date.prototype.toISOString',
    exec: function () {
      return typeof Date.prototype.toISOString == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3_5: true,
      safari4: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: false,
      android40: true,
    }
  },
  {
    name: 'Date.now',
    exec: function () {
      return typeof Date.now == 'function';
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3: true,
      safari4: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Date.prototype.toJSON',
    exec: function () {
      try {
        return Date.prototype.toJSON.call(new Date(NaN)) === null;
      } catch (e) {
        return false;
      }
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox4: true,
      webkit: true,
      chrome5: true,
      opera10_10: false,
      opera10_50: false,
      opera12: {
        val: true,
        note_id: 'Date.prototype.toJSON-OP11_60-OP11_64',
        note_html: 'In Opera 11.60-11.64 Date.prototype.toJSON is undefined.'
      },
      opera12_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  }]
},
{
  name: 'Function.prototype.bind',
  significance: 'medium',
  exec: function () {
    return typeof Function.prototype.bind == 'function';
  },
  res: {
    es5shim: true,
    ie9: true,
    firefox4: true,
    safari51: true,
    webkit: true,
    chrome7: true,
    opera12: true,
    konq413: true,
    besen: true,
    rhino: true,
    phantom: true,
    ejs: true,
    ios78: true,
    android40: true,
  },
},
{
  name: 'JSON',
  significance: 'medium',
  exec: function () {
    return typeof JSON == 'object';
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,
    firefox3_5: true,
    safari4: true,
    webkit: true,
    chrome5: true,
    opera10_50: true,
    konq43: false,
    konq49: true,
    konq413: true,
    besen: true,
    rhino: true,
    phantom: true,
    ejs: true,
    ios78: true,
    android40: true,
  },
  separator: 'after'
},
{
  name: 'Immutable globals',
  significance: 'small',
  subtests: [
  {
    name: 'undefined',
    exec: function () {/*
      undefined = 12345;
      var result = typeof undefined == 'undefined';
      undefined = void 0;
      return result;
    */},
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: false,
      android41: true,
    }
  },
  {
    name: 'NaN',
    exec: function () {/*
      NaN = false;
      var result = typeof NaN == 'number';
      NaN = Math.sqrt(-1);
      return result;
    */},
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: false,
      android41: true,
    }
  },
  {
    name: 'Infinity',
    exec: function () {/*
      Infinity = false;
      var result = typeof Infinity == 'number';
      Infinity = 1/0;
      return result;
    */},
    res: {
      ie9: true,
      firefox4: true,
      safari5: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino: true,
      ejs: false,
      android41: true,
    }
  }]
},
{
  name: 'Miscellaneous',
  significance: 'medium',
  subtests: [{
    name: 'Array.prototype.sort: compareFn must be function or undefined',
    exec: function () {
      try {
        [1,2].sort(null);
        return false;
      } catch (enull) {}
      try {
        [1,2].sort(true);
        return false;
      } catch (etrue) {}
      try {
        [1,2].sort({});
        return false;
      } catch (eobj) {}
      try {
        [1,2].sort([]);
        return false;
      } catch (earr) {}
      try {
        [1,2].sort(/a/g);
        return false;
      } catch (eregex) {}
      return true;
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox21: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      konq49: null,
      konq413: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: false,
    },
  },
  {
    name: 'Array.prototype.sort: compareFn may be explicit undefined',
    exec: function () {
      try {
        var arr = [2, 1];
        return arr.sort(undefined) === arr && arr[0] === 1 && arr[1] === 2;
      } catch (e) {
        return false;
      }
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox4: true,
      safari4: true,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      konq49: null,
      konq413: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: true,
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
      es5shim: true,
      firefox3: true,
      firefox4: false,
      safari4: true,
      webkit: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino: true,
      ejs: true,
      android40: true,
    }
  },
  {
    name: 'Function.prototype.apply permits array-likes',
    exec: function () {
      return (function(a,b) { return a === 1 && b === 2; }).apply({}, {0:1, 1:2, length:2});
    },
    res: {
      ie7: null,
      ie9: true,
      firefox4: true,
      safari3: false,
      safari5: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'parseInt ignores leading zeros',
    exec: function () {
      return parseInt('010') === 10;
    },
    res: {
      es5shim: true,
      ie9: true,
      firefox3: false,
      firefox21: true,
      safari6: true,
      webkit: true,
      chrome23: true,
      opera10_10: false,
      konq43: false,
      konq49: false,
      konq413: false,
      besen: true,
      rhino: false,
      ejs: true,
      android44: true,
    }
  },
  {
    name: 'Function "prototype" property is non-enumerable',
    exec: function () {/*
      return !Function().propertyIsEnumerable('prototype');
    */},
    res: {
      ie7: null,
      ie9: true,
      firefox4: true,
      safari3: null,
      safari4: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: false,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'Arguments toStringTag is "Arguments"',
    exec: function () {/*
      return (function(){ return Object.prototype.toString.call(arguments) === '[object Arguments]'; }());
    */},
    res: {
      ie7: null,
      ie9: true,
      firefox4: true,
      safari3: null,
      safari4: true,
      chrome5: null,
      chrome7: true,
      chrome13: true,
      opera10_10: null,
      opera10_50: false,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'Zero-width chars in identifiers',
    significance: 'tiny',
    exec: function () {/*
      var _\u200c\u200d = true;
      return _\u200c\u200d;
    */},
    res: {
      ie9: true,
      firefox3: false,
      firefox3_5: false,
      firefox4: {
        val: true,
        note_id: 'zero-width-char',
        note_html: 'Firefox 4 &amp; 5 fail this test'
      },
      firefox21: true,
      safari6: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera10_10: false,
      opera12_10: true,
      konq43: false,
      konq49: false,
      konq413: false,
      besen: true,
      rhino: true,
      ejs: true,
      android41: true,
    }
  },
  {
    name: 'Unreserved words',
    significance: 'tiny',
    exec: function () {/*
      var abstract, boolean, byte, char, double, final, float, goto, int, long,
        native, short, synchronized, transient, volatile;
      return true;
    */},
    res: {
      ie7: null,
      ie9: true,
      firefox3: true,
      safari3: null,
      safari4: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    }
  },
  {
    name: 'Enumerable properties can be shadowed by non-enumerables',
    significance: 'tiny',
    exec: function () {/*
      var result = true;
      Object.prototype.length = 42;
      for (var i in Function) {
          if (i == 'length') {
              result = false;
          }
      }
      delete Object.prototype.length;
      return result;
    */},
    res: {
      ie7: null,
      ie9: false,
      firefox3: true,
      safari3: false,
      chrome5: false,
      chrome13: false,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    }
  },
  {
    name: 'Thrown functions have proper "this" values',
    exec: function () {/*
      try {
        throw function() { return !('a' in this); };
      }
      catch(e) {
        var a = true;
        return e();
      }
    */},
    res: {
      ie7: null,
      ie9: true,
      firefox3: true,
      safari3: null,
      safari4: true,
      chrome5: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino: null,
      ejs: null,
      android40: null,
    },
  }]
},
{
  name: 'Strict mode',
  significance: 'large',
  link: '../strict-mode/',
  exec: function () {
    "use strict";
    return !this;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: {
      val: true,
      note_id: 'strict-mode-ie10',
      note_html: 'IE10 PP2 has a bug with strict mode which makes the following expression "fail", even though strict mode is more or less supported: <code>(function(){ "use strict"; return !this })()</code>'
    },
    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: {
      val: true,
      note_id: 'strict-mode-ff21',
      note_html: 'In Firefox, strict getters on String, Boolean and Number prototypes receive wrapped <code>this</code> values (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=603201">Bugzilla reference</a>).'
    },
    safari51: true,
    webkit: true,
    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: true,
    chrome19: true,
    chrome23: true,
    opera12: true,
    konq43: false,
    konq49: false,
    konq413: false,
    besen: true,
    rhino: false,
    phantom: true,
    ejs: true,
    ios78: true,
    android41: true,
  }
}
];
