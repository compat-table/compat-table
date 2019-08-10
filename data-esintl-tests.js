module.exports = [
    {
        name: "Intl object",
        subtests: [
            {
                name: "exists on global",
                exec: function() {
                    /*
        return typeof Intl === 'object';
      */
                }
            },
            {
                name: "has prototype of Object",
                exec: function() {
                    /*
        return Intl.constructor === Object;
      */
                }
            }
        ]
    },
    {
        name: "Intl.Collator",
        subtests: [
            {
                name: "exists on intl object",
                exec: function() {
                    /*
        return typeof Intl.Collator === 'function';
      */
                }
            },
            {
                name: "creates new Collator instances",
                exec: function() {
                    /*
        return new Intl.Collator() instanceof Intl.Collator;
      */
                }
            },
            {
                name: "constructor called without new creates instances",
                exec: function() {
                    /*
        return Intl.Collator() instanceof Intl.Collator;
      */
                }
            },
            {
                name: "accepts valid language tags",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "Intl.Collator.prototype.compare",
        subtests: [
            {
                name: "exists on Collator prototype",
                exec: function() {
                    /*
        return typeof Intl.Collator().compare === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Intl.Collator.prototype.resolvedOptions",
        subtests: [
            {
                name: "exists on Collator prototype",
                exec: function() {
                    /*
        return typeof Intl.Collator().resolvedOptions === 'function';
      */
                }
            }
        ]
    },
    {
        name: "NumberFormat",
        subtests: [
            {
                name: "exists on intl object",
                exec: function() {
                    /*
        return typeof Intl.NumberFormat === 'function';
      */
                }
            },
            {
                name: "exists on intl object",
                exec: function() {
                    /*
        return typeof Intl.NumberFormat === 'function';
      */
                }
            },
            {
                name: "creates new NumberFormat instances",
                exec: function() {
                    /*
        return new Intl.NumberFormat() instanceof Intl.NumberFormat;
      */
                }
            },
            {
                name: "constructor called without new creates instances",
                exec: function() {
                    /*
        return Intl.NumberFormat() instanceof Intl.NumberFormat;
      */
                }
            },
            {
                name: "accepts valid language tags",
                exec: function() {
                    /*
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
      */
                }
            }
        ]
    },
    {
        name: "DateTimeFormat",
        subtests: [
            {
                name: "exists on intl object",
                exec: function() {
                    /*
        return typeof Intl.DateTimeFormat === 'function';
      */
                }
            },
            {
                name: "creates new DateTimeFormat instances",
                exec: function() {
                    /*
        return new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */
                }
            },
            {
                name: "constructor called without new creates instances",
                exec: function() {
                    /*
        return Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */
                }
            },
            {
                name: "accepts valid language tags",
                exec: function() {
                    /*
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
      */
                }
            },
            {
                name:
                    "resolvedOptions().timeZone defaults to the host environment",
                exec: function() {
                    /*
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz !== undefined && tz.length > 0;
      */
                }
            },
            {
                name: "accepts IANA timezone names",
                exec: function() {
                    /*
        try {
          new Intl.DateTimeFormat('en-US', {
            timeZone: 'Australia/Sydney',
            timeZoneName: 'long'
          }).format();
          return true;
        } catch (e) {
          return false;
        }
      */
                }
            }
        ]
    },
    {
        name: "String.prototype.localeCompare",
        subtests: [
            {
                name: "exists on String prototype",
                exec: function() {
                    /*
        return typeof String.prototype.localeCompare === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Number.prototype.toLocaleString",
        subtests: [
            {
                name: "exists on Number prototype",
                exec: function() {
                    /*
        return typeof Number.prototype.toLocaleString === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Array.prototype.toLocaleString",
        subtests: [
            {
                name: "exists on Array prototype",
                exec: function() {
                    /*
        return typeof Array.prototype.toLocaleString === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Object.prototype.toLocaleString",
        subtests: [
            {
                name: "exists on Object prototype",
                exec: function() {
                    /*
        return typeof Object.prototype.toLocaleString === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Date.prototype.toLocaleString",
        subtests: [
            {
                name: "exists on Date prototype",
                exec: function() {
                    /*
        return typeof Date.prototype.toLocaleString === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Date.prototype.toLocaleDateString",
        subtests: [
            {
                name: "exists on Date prototype",
                exec: function() {
                    /*
        return typeof Date.prototype.toLocaleDateString === 'function';
      */
                }
            }
        ]
    },
    {
        name: "Date.prototype.toLocaleTimeString",
        subtests: [
            {
                name: "exists on Date prototype",
                exec: function() {
                    /*
        return typeof Date.prototype.toLocaleTimeString === 'function';
      */
                }
            }
        ]
    }
];
