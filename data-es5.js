// exports browsers and tests

exports.name = 'ES5';
exports.target_file = 'index.html';
exports.skeleton_file = 'skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7',
    short: 'IE 7'
  },
  ie8: {
    full: 'Internet Explorer 8',
    short: 'IE 8'
  },
  ie9: {
    full: 'Internet Explorer 9',
    short: 'IE 9'
  },
  ie10: {
    full: 'Internet Explorer 10, 11',
    short: 'IE 10, 11'
  },

  firefox3: {
    full: 'Firefox 3',
    short: 'FF 3'
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    short: 'FF 3.5, 3.6'
  },
  firefox4: {
    full: 'Firefox 4+',
    short: 'FF 4+'
  },

  safari3: {
    full: 'Safari 3.2',
    short: 'SF 3.2'
  },
  safari4: {
    full: 'Safari 4.0.5',
    short: 'SF 4'
  },
  safari5: {
    full: 'Safari 5.0.5',
    short: 'SF 5'
  },
  safari51: {
    full: 'Safari 5.1',
    short: 'SF 5.1'
  },
  safari6: {
    full: 'Safari 6.0',
    short: 'SF 6'
  },
  webkit: {
    full: 'Webkit r120398 (June 20, 2012)',
    short: 'WebKit'
  },

  chrome5: {
    full: 'Chrome 5 (5.0.375.127)',
    short: 'CH 5'
  },
  chrome6: {
    full: 'Chrome 6 (6.0.472.55)',
    short: 'CH 6'
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev), Chrome 10, Chrome 11, Chrome 12 (12.0.742.91)',
    short: 'CH 7-12'
  },
  chrome13: {
    full: 'Chrome 13 (13.0.782.107 beta), Chrome 14 (14.0.835.8 dev), Chrome 15, Chrome 16 (16.0.891.0 dev)',
    short: 'CH 13-16'
  },
  chrome19: {
    full: 'Chrome 19 (19.0.1084.56 stable)',
    short: 'CH 19+'
  },

  opera10_10: {
    full: 'Opera 10.10',
    short: 'OP 10.1'
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156), Opera 11.10 (build 2048), Opera 11.11 (build 2109), Opera 11.50 (build 1074)',
    short: 'OP 10.50-11.50'
  },
  opera12: {
    full: 'Opera 12 (build 1065)',
    short: 'OP 12'
  },
  opera12_10: {
    full: 'Opera 12.10 (build 1652), Opera 15.0',
    short: 'OP 12.10, 15'
  },

  konq43: {
    full: 'Konqueror 4.3',
    short: 'Konq 4.3'
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9'
  },

  besen: {
    full: 'Bero\'s EcmaScript Engine (version 1.0.0.489)',
    short: 'BESEN',
    link: 'http://besen.sourceforge.net/'
  },

  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7'
  }
};

exports.tests = [
{
  name: 'Object.create',
  exec: function () {
    return typeof Object.create == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.defineProperty',
  exec: function () {
    return typeof Object.defineProperty == 'function';
  },
  res: {
    ie7: false,
    ie8: {
      val: true,
      note_id: 'define-property-ie',
      note_html: 'In Internet Explorer 8 <code>Object.defineProperty</code> only accepts DOM objects ' +
        '(<a href="http://msdn.microsoft.com/en-us/library/dd548687(VS.85).aspx">MSDN reference</a>).'
    },
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: {
      val: true,
      note_id: 'define-property-webkit',
      note_html: 'In some versions of WebKit <code>Object.defineProperty</code> does <b>not</b> work with DOM objects.'
    },
    safari51: true,
    safari6: true,
    webkit: {
      val: true,
      note_id: 'define-property-webkit'
    },

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.defineProperties',
  exec: function () {
    return typeof Object.defineProperties == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.getPrototypeOf',
  exec: function () {
    return typeof Object.getPrototypeOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.keys',
  exec: function () {
    return typeof Object.keys == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.seal',
  exec: function () {
    return typeof Object.seal == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.freeze',
  exec: function () {
    return typeof Object.freeze == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.preventExtensions',
  exec: function () {
    return typeof Object.preventExtensions == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.isSealed',
  exec: function () {
    return typeof Object.isSealed == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.isFrozen',
  exec: function () {
    return typeof Object.isFrozen == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.isExtensible',
  exec: function () {
    return typeof Object.isExtensible == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.getOwnPropertyDescriptor',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptor == 'function';
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Object.getOwnPropertyNames',
  exec: function () {
    return typeof Object.getOwnPropertyNames == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'Date.prototype.toISOString',
  exec: function () {
    return typeof Date.prototype.toISOString == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Date.now',
  exec: function () {
    return typeof Date.now == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.isArray',
  exec: function () {
    return typeof Array.isArray == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'JSON',
  exec: function () {
    return typeof JSON == 'object';
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Function.prototype.bind',
  exec: function () {
    return typeof Function.prototype.bind == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: {
      val: false,
      note_id: 'safari-bind',
      note_html: '<code>Function.prototype.bind</code> is now supported in Safari 5.1.4'
    },
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'String.prototype.trim',
  exec: function () {
    return typeof String.prototype.trim == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'Array.prototype.indexOf',
  exec: function () {
    return typeof Array.prototype.indexOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.lastIndexOf',
  exec: function () {
    return typeof Array.prototype.lastIndexOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.every',
  exec: function () {
    return typeof Array.prototype.every == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.some',
  exec: function () {
    return typeof Array.prototype.some == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.forEach',
  exec: function () {
    return typeof Array.prototype.forEach == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.map',
  exec: function () {
    return typeof Array.prototype.map == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.filter',
  exec: function () {
    return typeof Array.prototype.filter == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.reduce',
  exec: function () {
    return typeof Array.prototype.reduce == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Array.prototype.reduceRight',
  exec: function () {
    return typeof Array.prototype.reduceRight == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'Getter in property initializer',
  exec: function () {
    try {
      return eval('({ get x(){ return 1 } }).x === 1');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Setter in property initializer',
  exec: function () {
    try {
      var value;
      eval('({ set x(v){ value = v; } }).x = 1');
      return value === 1;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  },
  separator: 'after'
},
{
  name: 'Property access on strings',
  note_id: 'property-access-on-strings',
  note_html: 'For example: <code>"foobar"[3] === "b"</code>',
  exec: function () {
    return "foobar"[3] === "b";
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Reserved words as property names',
  note_id: 'reserved-words',
  note_html: 'For example: <code>({ if: 1 })</code>',
  exec: function () {
    try {
      var obj = { };
      eval('obj = ({ if: 1 })');
      return obj['if'] === 1;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: true,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: false
  },
  separator: 'after'
},
{
  name: 'Zero-width chars in identifiers',
  exec: function () {
    try {
      return eval('_\u200c\u200d = true');
    } catch (e) { }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: {
      val: true,
      note_id: 'zero-width-char',
      note_html: 'Firefox 4 &amp; 5 fail this test'
    },

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: false,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: false,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: false,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: true
  }
},
{
  name: 'Immutable undefined',
  exec: function () {
    var result;
    try {
      undefined = 12345;
      result = typeof undefined == 'undefined';
      undefined = void 0;
    } catch (e) { }

    return result;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: false,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,

    besen: true,
    rhino: true
  }
},
{
  name: 'Strict mode',
  link: 'http://kangax.github.com/es5-compat-table/strict-mode/',
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

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: true,
    chrome19: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,

    besen: true,
    rhino: false
  }
}
];
