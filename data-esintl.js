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
  name: 'Collator',
  link: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10',
  subtests: {
    'exists on intl object': {
      exec: function(){/*
        return typeof Intl.Collator === 'function';
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
  },
},
];
