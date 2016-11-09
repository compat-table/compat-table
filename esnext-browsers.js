var very = "very";

// exports browsers
// new browsers should only be added once they have at least a single 'true' result.

module.exports = {
  tr: {
    full: 'Traceur',
    short: 'Traceur',
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel 6.5 + core-js 2.4',
    short: 'Babel +<br><nobr>core-js</nobr>',
    platformtype: 'compiler',
    note_id: 'babel-optional',
    note_html: 'Have to be enabled via <code>babel-preset-stage-0</code> preset'
  },
  closure: {
    full: 'Closure Compiler v20161024',
    short: 'Closure',
    platformtype: 'compiler',
  },
  jsx: {
    full: 'JSX',
    short: 'JSX',
    obsolete: true,
    platformtype: 'compiler',
  },
  typescript: {
    full: 'TypeScript 1.8 + core-js 2.4',
    short: 'Type-<br />Script +<br /><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler'
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
  },
  ie10: {
    full: 'Internet Explorer',
    family: 'Chakra',
    short: 'IE &lt; 11',
    obsolete: true,
  },
  ie11: {
    full: 'Internet Explorer',
    family: 'Chakra',
    short: 'IE 11',
    obsolete: false // no EOL any time soon
  },
  edge12: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 12',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags',
    obsolete: true,
  },
  edge13: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 13',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  edge14: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 14',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  firefox2: {
    full: 'Firefox',
    short: 'FF 2',
    obsolete: very,
  },
  firefox3: {
    full: 'Firefox',
    short: 'FF 3',
    obsolete: very,
  },
  firefox3_5: {
    full: 'Firefox',
    short: 'FF 3.5',
    obsolete: very,
  },
  firefox3_6: {
    full: 'Firefox',
    short: 'FF 3.6',
    obsolete: very,
  },
  firefox4: {
    full: 'Firefox',
    short: 'FF 4-9',
    obsolete: very,
  },
  firefox10: {
    full: 'Firefox',
    short: 'FF 10<br> ESR',
    obsolete: very, // ESR (EOL on February 12, 2013)
  },
  firefox17: {
    full: 'Firefox',
    short: 'FF 17<br> ESR',
    obsolete: very, // ESR (EOL on December 3, 2013)
  },
  firefox18: {
    full: 'Firefox',
      short: 'FF 18',
      obsolete: very,
  },
  firefox24: {
    full: 'Firefox',
    short: 'FF 24<br> ESR',
    obsolete: very, // ESR (EOL on October 14, 2014)
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25',
    obsolete: very,
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27',
    obsolete: very,
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31<br> ESR',
    obsolete: true, // ESR (EOL on August 11, 2015)
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32',
    obsolete: very,
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34',
    obsolete: very,
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35',
    obsolete: very,
  },
  firefox36: {
    full: 'Firefox',
    short: 'FF 36',
    obsolete: very,
  },
  firefox38: {
    full: 'Firefox',
    short: 'FF 38<br> ESR',
    obsolete: true, // ESR (EOL on June 7, 2016)
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF 39',
    obsolete: very,
  },
  firefox40: {
    full: 'Firefox',
    short: 'FF 40',
    obsolete: true,
  },
  firefox41: {
    full: 'Firefox',
    short: 'FF 41',
    obsolete: true,
  },
  firefox42: {
    full: 'Firefox',
    short: 'FF 42',
    obsolete: true,
  },
  firefox43: {
    full: 'Firefox',
    short: 'FF 43',
    obsolete: true,
  },
  firefox44: {
    full: 'Firefox',
    short: 'FF 44',
    obsolete: true,
  },
  firefox45: {
    full: 'Firefox',
    short: 'FF 45 ESR',
    obsolete: false, // ESR (EOL at Mar 2017)
  },
  firefox46: {
    full: 'Firefox',
    short: 'FF 46',
    obsolete: true,
  },
  firefox47: {
    full: 'Firefox',
    short: 'FF 47',
    obsolete: true,
  },
  firefox48: {
    full: 'Firefox',
    short: 'FF 48',
    obsolete: true,
  },
  firefox49: {
    full: 'Firefox',
    short: 'FF 49',
  },
  firefox50: {
    full: 'Firefox',
    short: 'FF 50 Beta',
    unstable: true,
  },
  firefox51: {
    full: 'Firefox',
    short: 'FF 51 Aurora',
    unstable: true,
  },
  firefox52: {
    full: 'Firefox',
    short: 'FF 52 Nightly',
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
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome38: {
    full: 'Chrome',
    short: 'CH 38',
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome39: {
    full: 'Chrome',
    short: 'CH 39',
    obsolete: very,
    note_id: 'experimental-flag',
  },
  chrome40: {
    full: 'Chrome',
    short: 'CH 40',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome41: {
    full: 'Chrome',
    short: 'CH 41',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome42: {
    full: 'Chrome',
    short: 'CH 42',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome43: {
    full: 'Chrome',
    short: 'CH 43',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome46: {
    full: 'Chrome',
    short: 'CH 46',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome47: {
    full: 'Chrome',
    short: 'CH 47',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome48: {
    full: 'Chrome',
    short: 'CH 48',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome49: {
    full: 'Chrome',
    short: 'CH 49',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome50: {
    full: 'Chrome',
    short: 'CH 50',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome51: {
    full: 'Chrome',
    short: 'CH 51',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome52: {
    full: 'Chrome',
    short: 'CH 52',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome53: {
    full: 'Chrome',
    short: 'CH 53',
    note_id: 'experimental-flag',
    obsolete: true,
  },
  chrome54: {
    full: 'Chrome',
    short: 'CH 54',
    note_id: 'experimental-flag',
    obsolete: false,
  },
  chrome55: {
    full: 'Chrome',
    short: 'CH 55',
    note_id: 'experimental-flag',
    unstable: true,
  },
  chrome56: {
    full: 'Chrome',
    short: 'CH 56',
    note_id: 'experimental-flag',
    unstable: true,
  },
  safari51: {
    full: 'Safari',
    short: 'SF<br />5.1 - 8',
    obsolete: true,
  },
  safari9: {
    full: 'Safari',
    short: 'SF 9',
    obsolete: false,
  },
  safari10: {
    full: 'Safari',
    short: 'SF 10',
    obsolete: false,
  },
  safaritp: {
    full: 'Safari Technology Preview Release 17',
    short: 'SF TP',
    unstable: true,
  },
  webkit: {
    full: 'Webkit r208102 (October 29, 2016)',
    short: 'WK',
    unstable: true,
  },
  node: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 0.12',
    platformtype: 'engine',
  },
  iojs: {
    full: 'io.js',
    family: 'Node.js',
    short: 'io.js',
    obsolete: true,
    platformtype: 'engine',
  },
  node4: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 4',
    platformtype: 'engine',
  },
  node5: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 5',
    platformtype: 'engine',
    obsolete: true,
  },
  node64: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 6.0-6.4',
    platformtype: 'engine',
    equals: 'chrome50',
    obsolete: true,
  },
  node65: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 6.5',
    platformtype: 'engine',
    equals: 'chrome51',
    obsolete: false,
  },
  node7: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 7',
    platformtype: 'engine',
    equals: 'chrome54',
    obsolete: false,
  },
  android40: {
    full: 'Android Browser',
    short: 'AN 4.0',
    platformtype: 'mobile',
    obsolete: true,
  },
  android41: {
    full: 'Android Browser',
    short: 'AN 4.1 - 4.3',
    platformtype: 'mobile',
    obsolete: true,
  },
  android44: {
    full: 'Android Browser',
    short: 'AN 4.4',
    platformtype: 'mobile',
    equals: 'chrome30',
    ignore_flagged: true,
  },
  android50: {
    full: 'Android Browser',
    short: 'AN 5.0',
    platformtype: 'mobile',
    equals: 'chrome37',
    ignore_flagged: true,
  },
  android51: {
    full: 'Android Browser',
    short: 'AN 5.1',
    platformtype: 'mobile',
    equals: 'chrome39',
    ignore_flagged: true,
  },
  ios51: {
    full: 'iOS 5.1',
    short: 'iOS 5.1',
    platformtype: 'mobile',
    obsolete: true,
  },
  ios6: {
    full: 'iOS 6-8',
    short: 'iOS<br />6-8',
    platformtype: 'mobile',
    equals: 'safari51',
    obsolete: true,
  },
  ios9: {
    full: 'iOS 9',
    short: 'iOS 9',
    platformtype: 'mobile',
    equals: 'safari9',
    obsolete: false,
  },
  ios10: {
    full: 'iOS 10',
    short: 'iOS 10',
    platformtype: 'mobile',
    equals: 'safari10',
    obsolete: false,
  },
};
