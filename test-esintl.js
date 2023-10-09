var common = require('./data-common');

var firefox = common.firefox;

exports.name = 'ES Intl';
exports.target_file = 'esintl/index.html';
exports.skeleton_file = 'esintl/skeleton.html';

exports.tests = [
{
  name: 'Intl object',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-8',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl',
  subtests: [
    {
      name: 'exists on global',
      exec: function(){/*
        return typeof Intl === 'object';
      */}
    },
    {
      name: 'has prototype of Object',
      exec: function(){/*
        return Intl.constructor === Object;
      */}
    }
  ],
},
{
  name: 'Intl.Collator',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.Collator === 'function';
      */}
    },
    {
      name: 'creates new Collator instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.Collator() instanceof Intl.Collator;
      */}
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.Collator() instanceof Intl.Collator;
      */}
    },
// The spec was updated making this test invalid.  It was disabled until it can be fixed
//    {
//      name: 'calling Collator with Collator instance throws error',
//      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
//      exec: function(){/*
//        try {
//          Intl.Collator.call(Intl.Collator());
//          return false;
//        } catch(e) {
//          return e instanceof TypeError;
//        }
//      */},
//      res: {
//        ie11: true,
//        edge12: true,
//        firefox29: firefox.nomob,
//        firefox56: true,
//        chrome24: true,
//        node0_12: true,
//      },
//    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
          ];
          for (var i in validLanguageTags) {
            Intl.Collator(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */}
    },
    {
      name: 'rejects invalid language tags',
      spec: 'https://github.com/tc39/ecma402/pull/289',
      exec: function(){/*
        if (typeof Intl.Collator !== 'function') return false;
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var invalidLanguageTags = [
            "i-klingon", // grandfathered tag
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in invalidLanguageTags) {
            Intl.Collator(invalidLanguageTags[i]);
          }
          return false;
        } catch(e) {
          return true;
        }
      */}
    }
  ],
},
{
  name: 'Intl.Collator.prototype.compare',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.2',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare',
  subtests: [
    {
      name: 'exists on Collator prototype',
      exec: function(){/*
        return typeof Intl.Collator().compare === 'function';
      */}
    }
  ],
},
{
  name: 'Intl.Collator.prototype.resolvedOptions',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.3',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions',
  subtests: [
    {
      name: 'exists on Collator prototype',
      exec: function(){/*
        return typeof Intl.Collator().resolvedOptions === 'function';
      */}
    }
  ],
},
{
  name: 'NumberFormat',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-11',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.NumberFormat === 'function';
      */}
    },
    {
      name: 'creates new NumberFormat instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.NumberFormat() instanceof Intl.NumberFormat;
      */}
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.NumberFormat() instanceof Intl.NumberFormat;
      */}
    },
// The spec was updated making this test invalid.  It was disabled until it can be fixed
//    {
//      name: 'calling NumberFormat with NumberFormat instance throws error',
//      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
//      exec: function(){/*
//        try {
//          Intl.NumberFormat.call(Intl.NumberFormat());
//          return false;
//        } catch(e) {
//          return e instanceof TypeError;
//        }
//      */},
//      res: {
//        ie11: true,
//        edge12: true,
//        firefox29: firefox.nomob,
//        firefox56: true,
//        chrome24: true,
//        node0_12: true,
//      },
//    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
          ];
          for (var i in validLanguageTags) {
            Intl.NumberFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */}
    },
    {
      name: 'rejects invalid language tags',
      spec: 'https://github.com/tc39/ecma402/pull/289',
      exec: function(){/*
        if (typeof Intl.NumberFormat !== 'function') return false;
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var invalidLanguageTags = [
            "i-klingon", // grandfathered tag
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in invalidLanguageTags) {
            Intl.NumberFormat(invalidLanguageTags[i]);
          }
          return false;
        } catch(e) {
          return true;
        }
      */}
    }
  ],
},
{
  name: 'DateTimeFormat',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-12',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.DateTimeFormat === 'function';
      */}
    },
    {
      name: 'creates new DateTimeFormat instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */}
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */}
    },
// The spec was updated making this test invalid.  It was disabled until it can be fixed
//    {
//      name: 'calling DateTimeFormat with DateTimeFormat instance throws error',
//      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
//      exec: function(){/*
//        try {
//          Intl.DateTimeFormat.call(Intl.DateTimeFormat());
//          return false;
//        } catch(e) {
//          return e instanceof TypeError;
//        }
//      */},
//      res: {
//        ie11: true,
//        edge12: true,
//        firefox29: firefox.nomob,
//        firefox56: true,
//        chrome24: true,
//        node0_12: true,
//      },
//    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
          ];
          for (var i in validLanguageTags) {
            Intl.DateTimeFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */}
    },
    {
      name: 'rejects invalid language tags',
      spec: 'https://github.com/tc39/ecma402/pull/289',
      exec: function(){/*
        if (typeof Intl.DateTimeFormat !== 'function') return false;
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var invalidLanguageTags = [
            "i-klingon", // grandfathered tag
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in invalidLanguageTags) {
            Intl.DateTimeFormat(invalidLanguageTags[i]);
          }
          return false;
        } catch(e) {
          return true;
        }
      */}
    },
    {
      name: 'resolvedOptions().timeZone defaults to the host environment',
      exec: function () {/*
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz !== void undefined && tz.length > 0;
      */}
    },
    {
      name: 'accepts IANA timezone names',
      exec: function() {/*
        try {
          new Intl.DateTimeFormat('en-US', {
            timeZone: 'Australia/Sydney',
            timeZoneName: 'long'
          }).format();
          return true;
        } catch (e) {
          return false;
        }
      */}
    }
  ],
},
{
  name: 'String.prototype.localeCompare',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.localecompare',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare',
  subtests: [
    {
      name: 'exists on String prototype',
      exec: function(){/*
        return typeof String.prototype.localeCompare === 'function';
      */}
    }
  ],
},
{
  name: 'Number.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.tolocalestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString',
  subtests: [
    {
      name: 'exists on Number prototype',
      exec: function(){/*
        return typeof Number.prototype.toLocaleString === 'function';
      */}
    }
  ],
},
{
  name: 'Array.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.tolocalestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString',
  subtests: [
    {
      name: 'exists on Array prototype',
      exec: function(){/*
        return typeof Array.prototype.toLocaleString === 'function';
      */}
    }
  ],
},
{
  name: 'Object.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tolocalestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString',
  subtests: [
    {
      name: 'exists on Object prototype',
      exec: function(){/*
        return typeof Object.prototype.toLocaleString === 'function';
      */}
    }
  ],
},
{
  name: 'Date.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocalestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleString === 'function';
      */}
    }
  ],
},
{
  name: 'Date.prototype.toLocaleDateString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaledatestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleDateString === 'function';
      */}
    }
  ],
},
{
  name: 'Date.prototype.toLocaleTimeString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaletimestring',
  mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleTimeString === 'function';
      */}
    }
  ],
},
];
