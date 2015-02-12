// exports browsers and tests
exports.name = 'ES Intl';
exports.target_file = 'esintl/index.html';
exports.skeleton_file = 'esintl/skeleton.html';

exports.browsers = {
  ie10: {
    full: 'Internet Explorer',
    short: 'IE 10',
    obsolete: false // no EOL any time soon
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  ie11tp: {
    full: 'Internet Explorer',
    short: 'IE<br>Technical<br>Preview',
    obsolete: false,
    note_id: 'ie-experimental-flag',
    note_html: 'Have to be enabled via "Experimental Web Platform Features" flag'
  },
  firefox11: {
    full: 'Firefox',
    short: 'FF 11-12',
    obsolete: true
  },
  firefox13: {
    full: 'Firefox',
    short: 'FF 13',
    obsolete: true
  },
  firefox16: {
    full: 'Firefox',
    short: 'FF 16',
    obsolete: true
  },
  firefox17: {
    full: 'Firefox',
    short: 'FF 17',
    obsolete: true
  },
  firefox18: {
    full: 'Firefox',
    short: 'FF 18',
    obsolete: true
  },
  firefox23: {
    full: 'Firefox',
    short: 'FF 23',
    obsolete: true
  },
  firefox24: {
    full: 'Firefox',
    short: 'FF 24',
    obsolete: true
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25',
    obsolete: true
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27',
    obsolete: true
  },
  firefox28: {
    full: 'Firefox',
    short: 'FF 28',
    obsolete: true
  },
  firefox29: {
    full: 'Firefox',
    short: 'FF 29',
    obsolete: true
  },
  firefox30: {
    full: 'Firefox',
    short: 'FF 30',
    obsolete: true
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31',
    obsolete: false // ESR (EOL at Aug 2015)
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32',
    obsolete: true
  },
  firefox33: {
    full: 'Firefox',
    short: 'FF 33',
    obsolete: true
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34'
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35'
  },
  firefox36: {
    full: 'Firefox',
    short: 'FF 36'
  },
  chrome: {
    full: 'Chrome',
    short: 'CH &lt;19',
    obsolete: true
  },
  chrome19dev: {
    full: 'Chrome',
    short: 'CH 19',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome21dev: {
    full: 'Chrome',
    short: 'CH 21-29',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome30: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;30,<br>OP&nbsp;17',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome31: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;31,<br>OP&nbsp;18',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome33: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;32-33,<br>OP&nbsp;19-20',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome34: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;34,<br>OP&nbsp;21',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome35: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;35,<br>OP&nbsp;22',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome36: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;36,<br>OP&nbsp;23',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome37: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;37,<br>OP&nbsp;24',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome38: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;38,<br>OP&nbsp;25',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome39: {
    full: 'Chrome, Opera',
    short: 'CH 39,<br>OP&nbsp;26',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  chrome40: {
    full: 'Chrome, Opera',
    short: 'CH 40,<br>OP&nbsp;27',
    obsolete: false,
    note_id: 'experimental-flag',
  },
  safari51: {
    full: 'Safari',
    short: 'SF 5.1',
    obsolete: true
  },
  safari6: {
    full: 'Safari',
    short: 'SF 6',
    obsolete: false // EOLs together with OS X 10.8
  },
  safari7: {
    full: 'Safari',
    short: 'SF 7.0',
    obsolete: false
  },
  safari71_8: {
    full: 'Safari',
    short: 'SF 7.1,<br>SF 8',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r176637',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  opera: {
    full: 'Opera 12.16',
    short: 'OP 12',
    obsolete: false // still supported
  },
  konq49: {
    full: 'Konqueror 4.14',
    short: 'KQ 4.14',
    note_id: 'khtml',
    note_html: 'Results are only applicable for the KHTML rendering engine.'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    platformtype: 'engine',
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
    full: 'Node 0.11.14 harmony',
    short: 'Node<br>harmony',
    obsolete: false, // current version
    platformtype: 'engine',
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  },
  ejs: {
    full: 'Echo JS',
    short: 'Echo JS',
    obsolete: false,
    platformtype: 'engine',
  },
  ios7: {
    full: 'iOS Safari',
    short: 'iOS7',
    platformtype: 'mobile',
  },
  ios8: {
    full: 'iOS Safari',
    short: 'iOS8',
    platformtype: 'mobile',
  }
};

exports.tests = [
{
  name: 'Intl object',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-8',
  subtests: {
    'exists on global': {
      exec: function(){/*
        return typeof Intl === 'object';
      */},
      res: {
      },
    },
    'has prototype of Object': {
      exec: function(){/*
        return Intl.constructor === Object;
      */},
      res: {
      },
    },
  },
},
{
  name: 'Intl.Collator',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10',
  subtests: {
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.Collator === 'function';
      */},
      res: {
      },
    },
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.Collator === 'function';
      */},
      res: {
      },
    },
    'creates new Collator instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.Collator() instanceof Intl.Collator;
      */},
      res: {
      },
    },
    'constructor called without new creates instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.Collator() instanceof Intl.Collator;
      */},
      res: {
      },
    },
    'calling Collator with Collator instance throws error': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.Collator.call(Intl.Collator());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
      },
    },
    'accepts valid language tags': {
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
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "enochian-enochian", // language and variant subtags may be the same
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.Collator(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
      },
    },
  },
},
{
  name: 'Intl.Collator.prototype.compare',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.2',
  subtests: {
    'exists on Collator prototype': {
      exec: function(){/*
        return typeof Intl.Collator().compare === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Intl.Collator.prototype.resolvedOptions',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.3',
  subtests: {
    'exists on Collator prototype': {
      exec: function(){/*
        return typeof Intl.Collator().resolvedOptions === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'NumberFormat',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-11',
  subtests: {
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.NumberFormat === 'function';
      */},
      res: {
      },
    },
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.NumberFormat === 'function';
      */},
      res: {
      },
    },
    'creates new NumberFormat instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.NumberFormat() instanceof Intl.NumberFormat;
      */},
      res: {
      },
    },
    'constructor called without new creates instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.NumberFormat() instanceof Intl.NumberFormat;
      */},
      res: {
      },
    },
    'calling NumberFormat with NumberFormat instance throws error': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.NumberFormat.call(Intl.NumberFormat());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
      },
    },
    'accepts valid language tags': {
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
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "enochian-enochian", // language and variant subtags may be the same
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.NumberFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
      },
    },
  },
},
{
  name: 'DateTimeFormat',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-12',
  subtests: {
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.DateTimeFormat === 'function';
      */},
      res: {
      },
    },
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.DateTimeFormat === 'function';
      */},
      res: {
      },
    },
    'creates new DateTimeFormat instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */},
      res: {
      },
    },
    'constructor called without new creates instances': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */},
      res: {
      },
    },
    'calling DateTimeFormat with DateTimeFormat instance throws error': {
      link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.DateTimeFormat.call(Intl.DateTimeFormat());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
      },
    },
    'accepts valid language tags': {
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
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "enochian-enochian", // language and variant subtags may be the same
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.DateTimeFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
      },
    },
  },
},
{
  name: 'String.prototype.localeCompare',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-String.prototype.localeCompare',
  subtests: {
    'exists on String prototype': {
      exec: function(){/*
        return typeof String.prototype.localeCompare === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Number.prototype.toLocaleString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.tolocalestring',
  subtests: {
    'exists on Number prototype': {
      exec: function(){/*
        return typeof Number.prototype.toLocaleString === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Array.prototype.toLocaleString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.tolocalestring',
  subtests: {
    'exists on Array prototype': {
      exec: function(){/*
        return typeof Array.prototype.toLocaleString === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Object.prototype.toLocaleString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tolocalestring',
  subtests: {
    'exists on Object prototype': {
      exec: function(){/*
        return typeof Object.prototype.toLocaleString === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Date.prototype.toLocaleString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocalestring',
  subtests: {
    'exists on Date prototype': {
      exec: function(){/*
        return typeof Date.prototype.toLocaleString === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Date.prototype.toLocaleDateString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaledatestring',
  subtests: {
    'exists on Date prototype': {
      exec: function(){/*
        return typeof Date.prototype.toLocaleDateString === 'function';
      */},
      res: {
      },
    },
  },
},
{
  name: 'Date.prototype.toLocaleTimeString',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaletimestring',
  subtests: {
    'exists on Date prototype': {
      exec: function(){/*
        return typeof Date.prototype.toLocaleTimeString === 'function';
      */},
      res: {
      },
    },
  },
},
];
