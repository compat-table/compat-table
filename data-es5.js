require('object.assign').shim();
var util = require('./data-common');

var sparseNote = util.sparseNote;

var temp = {};

// exports browsers and tests
exports.name = 'ES5';
exports.target_file = 'es5/index.html';
exports.skeleton_file = 'es5/skeleton.html';

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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: null,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: null,
      chrome7: true,
      opera10_50: null,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino17: null,
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
      firefox2: true,
      safari3: null,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: null,
      chrome7: true,
      opera10_50: null,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino17: null,
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
      firefox2: true,
      safari51: true,
      safaritp: true,
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
      rhino17: false,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome6: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari3: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      firefox2: true,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_50: true,
      konq43: true,
      besen: true,
      rhino17: true,
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
      safari10: true,
      safaritp: true,
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
      rhino17: true,
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
    safaritp: true,
    webkit: true,
    chrome7: true,
    opera12: true,
    konq413: true,
    besen: true,
    rhino17: true,
    phantom: true,
    ejs: true,
    ios7: true,
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
    safaritp: true,
    webkit: true,
    chrome5: true,
    opera10_50: true,
    konq43: false,
    konq49: true,
    konq413: true,
    besen: true,
    rhino17: true,
    phantom: true,
    ejs: true,
    ios7: true,
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
      safaritp: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      safaritp: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera12: true,
      konq43: false,
      konq49: true,
      konq413: true,
      besen: true,
      rhino17: true,
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
      firefox5: true,
      safaritp: true,
      webkit: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      konq49: null,
      konq413: null,
      besen: null,
      rhino17: null,
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
      safaritp: true,
      webkit: true,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      konq49: null,
      konq413: null,
      besen: null,
      rhino17: null,
      ejs: null,
      android40: true,
    },
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
      safaritp: true,
      webkit: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino17: null,
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
      firefox2: false,
      firefox21: true,
      safari6: true,
      safaritp: true,
      webkit: true,
      chrome23: true,
      opera10_10: false,
      konq43: false,
      konq49: false,
      konq413: false,
      besen: true,
      rhino17: false,
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
      firefox3_6: true,
      safari3: null,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: false,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino17: null,
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
      safaritp: true,
      webkit: true,
      chrome5: null,
      chrome7: true,
      chrome13: true,
      opera10_10: null,
      opera10_50: false,
      opera12_10: true,
      konq43: null,
      besen: null,
      rhino17: null,
      ejs: null,
      android40: null,
    },
  },
  {
    name: 'Zero-width chars in identifiers',
    exec: function () {/*
      var _\u200c\u200d = true;
      return _\u200c\u200d;
    */},
    res: {
      ie9: true,
      firefox2: false,
      firefox3_5: false,
      firefox8: true,
      firefox21: true,
      safari6: true,
      safaritp: true,
      webkit: true,
      chrome19: true,
      chrome23: true,
      opera10_10: false,
      opera12_10: true,
      konq43: false,
      konq49: false,
      konq413: false,
      besen: true,
      rhino17: true,
      ejs: true,
      android41: true,
    }
  },
  {
    name: 'Unreserved words',
    exec: function () {/*
      var abstract, boolean, byte, char, double, final, float, goto, int, long,
        native, short, synchronized, transient, volatile;
      return true;
    */},
    res: {
      ie7: null,
      ie9: true,
      firefox2: true,
      safari3: null,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: false,
      chrome13: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino17: null,
      ejs: null,
      android40: null,
    }
  },
  {
    name: 'Enumerable properties can be shadowed by non-enumerables',
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
      edge13: true,
      firefox2: true,
      safari3: false,
      chrome5: false,
      chrome13: false,
      chrome54: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino17: null,
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
      firefox2: true,
      safari3: null,
      safari4: true,
      safaritp: true,
      webkit: true,
      chrome5: true,
      opera10_10: null,
      opera10_50: true,
      konq43: null,
      besen: null,
      rhino17: null,
      ejs: null,
      android40: null,
    },
  }]
},
{
  name: 'Strict mode',
  significance: 'large',
  subtests: [
  {
    name: 'reserved words',
    exec: function() {/*
      'use strict';
      var words = 'implements,interface,let,package,private,protected,public,static,yield'.split(',');
      for (var i = 0; i < 9; i+=1) {
        try { eval('var ' + words[i]); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      }
      return true;
    */},
    res: (temp.strict = {
      ie10: true,
      firefox4: true,
      safari51: true,
      safaritp: true,
      webkit: true,
      chrome13: true,
      opera12: true,
      besen: true,
      phantom: true,
      ejs: true,
      ios7: true,
      android41: true,
    }),
  },
  {
    name: '"this" is undefined in functions',
    exec: function() {/*
      'use strict';
      return this === undefined && (function(){ return this === undefined; }).call();
    */},
    res: Object.assign({}, temp.strict, {
      ie10: {
        val: true,
        note_id: 'strict-mode-ie10',
        note_html: 'IE10 PP2 fails this test.</code>'
      }
    }),
  },
  {
    name: '"this" is not coerced to object in primitive methods',
    exec: function() {/*
      'use strict';
      return (function(){ return typeof this === 'string' }).call('')
        && (function(){ return typeof this === 'number' }).call(1)
        && (function(){ return typeof this === 'boolean' }).call(true);
    */},
    res: temp.strict,
  },
  {
    name: '"this" is not coerced to object in primitive accessors',
    exec: function() {/*
      'use strict';

      function test(Class, instance) {
        Object.defineProperty(Class.prototype, 'test', {
          get: function () { passed = passed && this === instance; },
          set: function () { passed = passed && this === instance; },
          configurable: true
        });

        var passed = true;
        instance.test;
        instance.test = 42;
        return passed;
      }

      return test(String, '')
        && test(Number, 1)
        && test(Boolean, true);
    */},
    res: Object.assign({}, temp.strict, {
      firefox4: false,
      firefox46: true,
    }),
  },
  {
    name: 'legacy octal is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('010');     return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('"\\010"'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */},
    res: temp.strict,
  },
  {
    name: 'assignment to unresolvable identifiers is a ReferenceError',
    exec: function() {/*
      'use strict';
      try { eval('__i_dont_exist = 1'); } catch (err) { return err instanceof ReferenceError; }
    */},
    res: temp.strict,
  },
  {
    name: 'assignment to eval or arguments is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('eval = 1');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('arguments = 1'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('eval++');        return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('arguments++');   return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */},
    res: temp.strict,
  },
  {
    name: 'assignment to non-writable properties is a TypeError',
    exec: function() {/*
      'use strict';
      try { Object.defineProperty({},"x",{ writable: false }).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { Object.preventExtensions({}).x = 1;                      return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { ({ get x(){ } }).x = 1;                                  return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { (function f() { f = 123; })();                           return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */},
    res: temp.strict,
  },
  {
    name: 'eval or arguments bindings is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('var eval');                return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('var arguments');           return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('(function(eval){})');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('(function(arguments){})'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('try{}catch(eval){}');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      try { eval('try{}catch(arguments){}'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
      return true;
    */},
    res: temp.strict,
  },
  {
    name: 'arguments.caller removed or is a TypeError',
    exec: function() {/*
      'use strict';
      if ('caller' in arguments) {
        try { arguments.caller; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      }
      return true;
    */},
    res: {
      ie10: true,
      firefox4: true,
      safari51: true,
      safaritp: true,
      webkit: true,
      chrome13: true,
      opera12: true,
      besen: true,
      phantom: true,
      ejs: true,
      ios7: true,
      android41: true,
    },
  },
  {
    name: 'arguments.callee is a TypeError',
    exec: function() {/*
      'use strict';
      try { arguments.callee; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */},
    res: {
      ie10: true,
      firefox4: true,
      safari51: true,
      safaritp: true,
      webkit: true,
      chrome13: true,
      opera12: true,
      besen: true,
      phantom: true,
      ejs: true,
      ios7: true,
      android41: true,
    },
  },
  {
    name: '(function(){}).caller and (function(){}).arguments is a TypeError',
    exec: function() {/*
      'use strict';
      try { (function(){}).caller;    return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      try { (function(){}).arguments; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
      return true;
    */},
    res: temp.strict,
  },
  {
    name: 'arguments is unmapped',
    exec: function() {/*
      'use strict';
      return (function(x){
        x = 2;
        return arguments[0] === 1;
      })(1) && (function(x){
        arguments[0] = 2;
        return x === 1;
      })(1);
    */},
    res: temp.strict,
  },
  {
    name: 'eval() can\'t create bindings',
    exec: function() {/*
      'use strict';
      try { eval('var __some_unique_variable;'); __some_unique_variable; } catch (err) { return err instanceof ReferenceError; }
    */},
    res: temp.strict,
  },
  {
    name: 'deleting bindings is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('var x; delete x;'); } catch (err) { return err instanceof SyntaxError; }
    */},
    res: temp.strict,
  },
  {
    name: 'deleting non-configurable properties is a TypeError',
    exec: function() {/*
      'use strict';
      try { delete Object.prototype; } catch (err) { return err instanceof TypeError; }
    */},
    res: temp.strict,
  },
  {
    name: '"with" is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('with({}){}'); } catch (err) { return err instanceof SyntaxError; }
    */},
    res: temp.strict,
  },
  {
    name: 'repeated parameter names is a SyntaxError',
    exec: function() {/*
      'use strict';
      try { eval('function f(x, x) { }'); } catch (err) { return err instanceof SyntaxError; }
    */},
    res: temp.strict,
  },
  {
    name: 'function expressions with matching name and argument are valid',
    exec: function() {/*
      var foo = function bar(bar) {'use strict'};
      return typeof foo === 'function';
    */},
    res: {
      ie10: true,
      firefox2: true,
      safari51: false,
      safari10: true,
      safaritp: true,
      webkit: true,
      chrome13: true,
      opera12: true,
      besen: true,
      phantom: true,
      ejs: true,
      ios7: true,
      ios8: true,
      ios9: true,
      android41: true,
    }
  }]
}
];
