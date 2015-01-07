ECMAScript 5/6/7/non-standard compatibility tables
==================================================

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kangax/es5-compat-table/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Editing the tests
-----------------

Edit the `data-es5.js`, `data-es6.js`, `data-es7.js`, or `data-non-standard.js` files to adjust the tests and their recorded browser results. Run `node build.js` to build the HTML files from these JavaScript sources.

The tests themselves should be written in pure ES3, *except* for the sole ES6 feature being tested (as well as any ES5 features strictly required to use the ES6 feature). The test code is placed in multi-line comments (as in [this hack](http://tomasz.janczuk.org/2013/05/multi-line-strings-in-javascript-and.html)), so that node can parse the data scripts without throwing syntax errors. The `build.js` script will wrap the code in an `eval` call inside a `try`, so the tests themselves do not need to catch errors that non-supporting platforms may throw.

In order to test compilers
-----------------

Run `npm install` to install the compilers under test (and remember to `npm update` them frequently).
Then run `node build.js compilers` to create compiler test pages under `es6/compilers`. Currently only the ES6 tests produce compiler test pages.
Open the compilers' HTML files in a browser with close to zero native ES6 support, such as Internet Explorer 9 (although its lack of support for strict mode will cause some tests to fail), Opera 12, or Safari 5.1 (bearing in mind their native support for TypedArrays, `__proto__` and such).

Note that some tests cannot be compiled correctly, as they rely on runtime `eval()` results to ensure that, for instance, certain syntactic constructs are syntax errors. These will fail on the compiler test pages. Support for those features should be divined manually.
