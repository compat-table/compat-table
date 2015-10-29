// Copyright 2012 Dan Wolff | danwolff.se
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


require('object.assign').shim();

var fs         = require('fs');
var path       = require('path');
var os         = require('os');
var cheerio    = require('cheerio');
// requires Node v0.11.12
var child_process = require('child_process');

var useCompilers = String(process.argv[2]).toLowerCase() === "compilers";

var isOptional = function isOptional(category) {
  return category === 'annex b' || category === 'pre-strawman';
};

// let prototypes declared below in this file be initialized
process.nextTick(function () {
  var es5 = require('./data-es5');
  handle(es5);
  var es6 = require('./data-es6');
  handle(es6);
  var es7 = require('./data-es7');
  handle(es7);
  handle(require('./data-esintl'));
  handle(require('./data-non-standard'));

  // ES6 compilers
  if (!useCompilers) {
    return;
  }
  if (!fs.existsSync('es5/compilers')) {
    fs.mkdirSync('es5/compilers');
  }
  if (!fs.existsSync('es6/compilers')) {
    fs.mkdirSync('es6/compilers');
  }
  if (!fs.existsSync('es7/compilers')) {
    fs.mkdirSync('es7/compilers');
  }
  var closure     = require('closurecompiler');
  var babel       = require('babel-core');
  var traceur     = require('traceur');
  var esdown      = require('esdown');
  var jstransform = require('jstransform/simple');
  var ts          = require('typescript');
  var esprima     = require('esprima');
  var espree      = require('espree');
  var jshint      = require('jshint');
  [
    {
      name: 'es5-shim',
      url: 'https://github.com/es-shims/es5-shim',
      target_file: 'es5/compilers/es5-shim.html',
      polyfills: ['node_modules/es5-shim/es5-shim.js'],
      compiler: String,
    },
  ].forEach(function(e){
    Object.assign(es5, e);
    es5.browsers = {};
    es5.skeleton_file = 'es5/compiler-skeleton.html';
    handle(es5);
  });
  [
    {
      name: 'es6-shim',
      url: 'https://github.com/paulmillr/es6-shim/',
      target_file: 'es6/compilers/es6-shim.html',
      polyfills: ['node_modules/es6-shim/es6-shim.js'],
      compiler: String,
    },
    {
      name: 'Traceur',
      url: 'https://github.com/google/traceur-compiler/',
      target_file: 'es6/compilers/traceur.html',
      polyfills: ['node_modules/traceur/bin/traceur-runtime.js'],
      compiler: function(code) {
        return traceur.compile(code);
      },
    },
    {
      name: 'babel',
      url: 'https://babeljs.io/',
      target_file: 'es6/compilers/babel.html',
      polyfills: [],
      compiler: function(code) {
        return babel.transform(code, {presets: ['es2015']}).code;
      },
    },
    {
      name: 'babel + polyfill',
      url: 'https://babeljs.io/',
      target_file: 'es6/compilers/babel-polyfill.html',
      polyfills: ['node_modules/babel-polyfill/browser.js'],
      compiler: function(code) {
        return babel.transform(code, {presets: ['es2015']}).code;
      },
    },
    {
      name: 'ES6 Transpiler',
      url: 'https://github.com/termi/es6-transpiler',
      target_file: 'es6/compilers/es6-transpiler.html',
      polyfills: [],
      compiler: (function() {
        var es6tr;
        return function(code) {
          // Known bug: running require('es6-transpiler') causes babel to break.
          // So, it's run here, as late as possible.
          es6tr = es6tr || require('es6-transpiler');
          var result = es6tr.run({src:code});
          if (result.src) {
            return result.src;
          }
          throw new Error('\n' + result.errors.join('\n'));
        };
      }()),
    },
    {
      name: 'esdown',
      url: 'https://github.com/zenparsing/esdown',
      target_file: 'es6/compilers/esdown.html',
      polyfills: [],
      compiler: function(code) {
        return esdown.transform(code, { runtime: true, polyfill: true });
      },
    },
    {
      name: 'esprima',
      url: 'http://esprima.org/',
      target_file: 'es6/compilers/esprima.html',
      compiler: function(code) {
        try {
          esprima.parse(code);
          return "(function(){return true;})";
        } catch(e) {
          return "/*\n" + e.message + "\n*/\n(function(){return false;})";
        }
      },
    },
    {
      name: 'espree',
      url: 'http://espree.org/',
      target_file: 'es6/compilers/espree.html',
      compiler: function(code) {
        try {
          espree.parse(code,{
            ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            destructuring: true,
            regexYFlag: true,
            regexUFlag: true,
            templateStrings: true,
            binaryLiterals: true,
            octalLiterals: true,
            unicodeCodePointEscapes: true,
            defaultParams: true,
            restParams: true,
            forOf: true,
            objectLiteralComputedProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            objectLiteralDuplicateProperties: true,
            generators: true,
            spread: true,
            classes: true,
            modules: true,
            globalReturn: true
          }});
          return "(function(){return true;})";
        } catch(e) {
          return "/*\n" + e.message + "\n*/\n(function(){return false;})";
        }
      },
    },
    {
      name: 'jshint',
      url: 'http://jshint.com/',
      target_file: 'es6/compilers/jshint.html',
      compiler: function(code) {
        var result = jshint.JSHINT(code,{
          asi:true, boss:true, elision:true, eqnull:true, esnext:true,
          evil:true, expr:true, laxbreak:true, laxcomma:true, loopfunc:true,
          multistr: true, noyield:true, plusplus:true, proto:true, sub:true,
          supernew: true, validthis:true, withstmt:true, nonstandard:true, typed:true,
          "-W032":true,
        });
        if (result) {
          return "(function(){return true;})";
        } else {
          return "/*\n" + jshint.JSHINT.errors.map(function(e){ return (e && e.reason) || ""; }).join('\n')
            + "\n*/\n(function(){return false;})";
        }
      },
    },
    {
      name: 'JSX',
      url: 'https://github.com/facebook/react',
      target_file: 'es6/compilers/jsx.html',
      polyfills: [],
      compiler: function(code) {
        var ret = jstransform.transform(code, { harmony:true });
        return ret.code || ret;
      },
    },
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      target_file: 'es6/compilers/typescript.html',
      polyfills: [],
      compiler: ts.transpile
    },
    {
      name: 'TypeScript + polyfill',
      url: 'https://www.typescriptlang.org/',
      target_file: 'es6/compilers/typescript-polyfill.html',
      polyfills: ["node_modules/core-js/client/core.js"],
      compiler: ts.transpile
    },
    {
      name: 'Closure Compiler',
      url: 'https://developers.google.com/closure/compiler/',
      target_file: 'es6/compilers/closure.html',
      polyfills: [],
      compiler: function(code) {
        var fpath = os.tmpDir() + path.sep + 'temp.js';
        var file = fs.writeFileSync(fpath, code);
        try {
          output = ""+child_process.execSync('node_modules/closurecompiler/bin/ccjs ' +
            fpath +
            ' --language_in=ECMASCRIPT6 --language_out=ECMASCRIPT5'
          );
        } catch(e) {
          throw new Error('\n' + e.stdout.toString().split(fpath).join(''));
        }
        return output;
      },
    },
  ].forEach(function(e){
    Object.assign(es6, e);
    es6.browsers = {};
    es6.skeleton_file = 'es6/compiler-skeleton.html';
    handle(es6);
  });
  [
    {
      name: 'es7-shim',
      url: 'https://github.com/es-shims/es7-shim/',
      target_file: 'es7/compilers/es7-shim.html',
      polyfills: ['node_modules/es7-shim/dist/es7-shim.js'],
      compiler: String,
    },
    {
      name: 'JSX',
      url: 'https://github.com/facebook/react',
      target_file: 'es7/compilers/jsx.html',
      polyfills: [],
      compiler: function(code) {
        var ret = jstransform.transform(code, { harmony:true });
        return ret.code || ret;
      },
    },
  ].forEach(function(e){
    Object.assign(es7, e);
    es7.browsers = {};
    es7.skeleton_file = 'es7/compiler-skeleton.html';
    handle(es7);
  });
});


function handle(options, compiler) {
  var skeleton = fs.readFileSync(__dirname + path.sep + options.skeleton_file, 'utf-8');
  var html = dataToHtml(skeleton, options.browsers, options.tests, options.compiler);

  var result = replaceAndIndent(html, [
    ["<!-- NAME -->", [options.name]],
    ["<!-- URL -->", [options.name.link(options.url)]],
    ["<!-- POLYFILLS -->", !options.polyfills ? [] : options.polyfills.map(function(e) {
      return '<script>' + fs.readFileSync(__dirname + path.sep + e, 'utf-8').replace(/<(?=\/script>)/g,'\\u003c') + '</script>\n';
    })],
  ]).replace(/\t/g, '  ');

  var target_file = __dirname + path.sep + options.target_file;
  var old_result;
  try {
    old_result = fs.readFileSync(target_file, 'utf-8');
  } catch (e) {}
  if (old_result === result) {
    console.log('[' + options.name + '] ' + options.target_file + ' not changed');
  } else {
    fs.writeFileSync(target_file, result, 'utf-8');
    console.log('[' + options.name + '] Write to file ' + options.target_file);
  }
}

function dataToHtml(skeleton, rawBrowsers, tests, compiler) {
  var $ = cheerio.load(skeleton);
  var head = $('table thead tr:last-child');
  var body = $('table tbody');
  var footnoteIndex = {};
  var rowNum = 0;
  // rawBrowsers includes very obsolete browsers which mustn't be printed, but should
  // be used by interpolateResults(). All other uses should use this, which filters
  // the very obsolete ones out.
  var browsers = Object.keys(rawBrowsers).reduce(function(obj,e) {
    if (rawBrowsers[e].obsolete !== "very") {
      obj[e] = rawBrowsers[e];
    }
    return obj;
  },{});

  function interpolateResults(res) {
    var browser, prevBrowser, result, prevResult, bid, prevBid, j;
    // For each browser, check if the previous browser has the same
    // browser full name as this one.
    for (var bid in rawBrowsers) {
      browser = rawBrowsers[bid];
      if (prevBrowser &&
          prevBrowser.full.replace(/,.+$/,'') === browser.full.replace(/,.+$/,'')) {
        // For each test, check if the previous browser has a result
        // that this browser lacks.
        result     = res[bid];
        prevResult = res[prevBid];
        if (prevResult !== undefined && result === undefined) {
          res[bid] = prevResult;
        }
      }
      prevBrowser = browser;
      prevBid = bid;
    }
    // For browsers that are essentially equal to other browsers,
    // copy over the results.
    for (var bid in rawBrowsers) {
      browser = rawBrowsers[bid];
      if (browser.equals) {
        result = res[browser.equals];
        res[bid] = browser.ignore_flagged && result === 'flagged' ? false : result; 
      }
    }
  }

  function getHtmlId(id) {
    return 'test-' + id;
  }

  function footnoteHTML(obj) {
    if (obj && obj.note_id) {
      if (!footnoteIndex[obj.note_id]) {
        if (obj.note_html) {
          footnoteIndex[obj.note_id] = obj.note_html;
        }
      }
      var num = Object.keys(footnoteIndex).indexOf(obj.note_id) + 1;
      return '<a href="#' + obj.note_id + '-note"><sup>[' + num + ']</sup></a>';
    }
    return '';
  }

  function allFootnotes() {
    var ret = $('<p>');
    Object.keys(footnoteIndex).forEach(function(e,id) {
      if (!(e in footnoteIndex)) {
        console.error("There's no footnote with id '" + e + "'");
      }
      ret.append('<p id="' + e + '-note">' +
      '\t<sup>[' + (id + 1) + ']</sup> ' + footnoteIndex[e] +
      '</p>');
    });
    return ret;
  }

  function testValue(result) {
    if (result && typeof result === "object" && "val" in result) {
      return result.val;
    }
    return result;
  }

  function escapeTestName(name) {
    return name.replace(/^[\s<>&"',]+|[\s<>&"',]+$/g, '').replace(/[\s<>&"]+/g, '_');
  }

  // Write the browser headers

  Object.keys(browsers).forEach(function(browserId) {
    var b = browsers[browserId];
    if (!b) {
      throw new Error('No browser with ID ' + browserId);
    }
    head.append($('<th></th>')
      .addClass("platform " + browserId + ' ' + (b.platformtype || 'desktop'))
      .addClass(b.obsolete ? "obsolete" : b.unstable ? "unstable" : "")
      .attr("data-browser", browserId)
      .append(
        $('<a href="#' + browserId + '" class="browser-name"></a>')
          .append('<abbr title="' + b.full + '">' + b.short + '</abbr>')
          .append(footnoteHTML(b))
      )
    );
  });

  // Now print the results.
  tests.forEach(function(t, testNum) {
    var subtests;
    // Calculate the result totals for tests which consist solely of subtests.
    if ("subtests" in t) {
      t.subtests.forEach(function(e) {
        interpolateResults(e.res);
      });
    }
    else interpolateResults(t.res);

    var id = escapeTestName(t.name);
    var name = t.link ? ('<a href="' + t.link + '">' + t.name + '</a>') : t.name;

    var testRow = $('<tr></tr>')
      .addClass("subtests" in t ? 'supertest' : '')
      .attr("significance",
        t.significance === "tiny" ? 0.125 :
        t.significance === "small" ? 0.25 :
        t.significance === "medium" ? 0.5 : 1)
      .addClass(isOptional(t.category) ? 'optional-feature' : '')
      .append($('<td></td>')
        .attr('id', getHtmlId(id))
        .append('<span><a class="anchor" href="#' + getHtmlId(id) + '">&sect;</a>' + name + footnoteHTML(t) + '</span></td>')
        .append(testScript(t.exec, compiler, rowNum++))
      );
    body.append(testRow);
    // If this row has a different category to the last, add a title <tr> before it.
    if (t.category && (!testNum || t.category !== tests[testNum-1].category)) {
      testRow.before('<tr class="category"><td colspan="' + (Object.keys(browsers).length+2) + '">' + capitalise(t.category) + '</td></tr>');
    }

    // Function to print out a single <td> result cell.
    function resultCell(browserId, result, footnote) {
      if (!browsers[browserId]) {
        return;
      }
      result = testValue(result);

      // Create the cell, and add classes and attributes
      var cell = $('<td></td>');
      cell.addClass(result === true ? "yes" : result !== null ? "no" : "");
      if (result === "flagged") {
        cell.addClass("flagged");
      }
      else if (result === "needs-polyfill-or-native") {
        cell.attr('title', "Requires native support or a polyfill.");
        cell.addClass("needs-polyfill-or-native");
      }
      else if (result === "strict") {
        cell.addClass("strict").attr('title', "Support for this feature incorrectly requires strict mode.");
      }
      cell.attr('data-browser', browserId).addClass(
        browsers[browserId].obsolete ? "obsolete" :
        browsers[browserId].unstable ? "unstable" :
        "");

      // Add extra signifiers if the result is not applicable.
      if (isOptional(t.category) &&
        // Annex B is only optional for non-browsers.
        (t.category !== "annex b" || (browsers[browserId].platformtype &&
          "desktop|mobile".indexOf(browsers[browserId].platformtype) === -1 &&
          !browsers[browserId].needs_annex_b))) {
        var msg = {
          'annex b': "This feature is optional on non-browser platforms",
          'pre-strawman': "This proposal has not yet been accepted by ECMA Technical Committee 39",
        }[t.category] + ", and doesn't contribute to the platform's support percentage.";
        cell.attr('title', msg);
        cell.addClass("not-applicable");
      }

      if (result !== null) {
        cell.text(result === "strict" ? "Strict" : result === "flagged" ? "Flag" : result === true ? "Yes" : "No");
      }

      if (footnote) {
        cell.append(footnote);
      }
      return cell;
    }

    // Print all the results for the subtests
    if ("subtests" in t) {
      t.subtests.forEach(function(subtest, subtestNum) {
        var subtestName = subtest.name;

        var subtestId = id + '_' + escapeTestName(subtestName);

        subtestRow = $('<tr class="subtest"></tr>')
          .attr('data-parent', id)
          .attr('id', getHtmlId(subtestId))

          .append(
            $('<td></td>')
              .append('<span><a class="anchor" href="#' + getHtmlId(subtestId) + '">&sect;</a>' + subtestName + '</span>')
              .append(testScript(subtest.exec, compiler, rowNum++))
          );
        body.append(subtestRow);

        // Add all the result cells
        Object.keys(browsers).forEach(function(browserId) {
          var result = subtest.res[browserId];

          subtestRow.append(resultCell(
            browserId,
            result,
            footnoteHTML(result)
          ));
        });
      });
    }

    // Print all the results for the main test
    Object.keys(browsers).forEach(function(browserId) {
      // For supertests, calculate the tally and total
      if ("subtests" in t) {

          var tally = 0, outOf = 0, flaggedTally = 0;

          t.subtests.forEach(function(e) {
            var result = e.res[browserId];

            tally += testValue(result) === true;
            flaggedTally += ['flagged','strict'].indexOf(testValue(result)) > -1;
            outOf += 1;
          });
          var grade = (tally / outOf);
          var cell = resultCell(browserId, null)
            .text((tally|0) + "/" + outOf)
            .addClass('tally')
            .attr('data-tally', grade);
          if (grade > 0 && grade < 1 && !cell.hasClass('not-applicable')) {
            cell.attr('style','background-color:hsl(' + (120*grade|0) + ','
              +((86 - (grade*44))|0)  +'%,50%)');
          }

          if (flaggedTally) {
            cell.attr('data-flagged-tally',  (tally + flaggedTally) / outOf);
          }
          testRow.append(cell);
      }
      // For single tests:
      else {
        var result = t.res[browserId];

        testRow.append(resultCell(
          browserId,
          result,
          footnoteHTML(result)
        ));
      }
    });

    // Finish the <tr>
    if (t.separator === 'after') {
      body.append(
        '<tr><th colspan="' + (Object.keys(browsers).length + 3) + '" class="separator"></th></tr>'
      );
    }
  });

  $('#footnotes').append(allFootnotes());

  return $.root().html().replace(/(<\/t\w>)/g, "$1\n");
}

function capitalise(s) {
  return String.fromCharCode(s.charCodeAt(0) - 32) + s.slice(1);
}

function replaceAndIndent(str, replacements) {
  var i, replacement, indent;
  for (i = 0; i < replacements.length; i++) {
    replacement = replacements[i];
    indent = new RegExp('(\n[ \t]*)' + replacement[0]).exec(str);
    if (!indent) {
      indent = [,''];
    }
    str = str
      .split(replacement[0])
      .join(replacement[1].join(indent[1]));
  }
  return str;
}

function testScript(fn, transformFn, rowNum) {

  function deindentFunc(fn) {
    fn = (fn+'');
    var indent = /(?:^|\n)([\t ]+)[^\n]+/.exec(fn);
    if (indent) {
      fn = fn.replace(new RegExp('\n' + indent[1], 'g'), '\n');
    }
    return fn;
  }

  if (!fn) {
    return '';
  }
  if (typeof fn === 'function') {
    // see if the code is encoded in a comment
    var expr = (fn+"").match(/[^]*\/\*([^]*)\*\/\}$/);
    var transformed = false;
    // if there wasn't an expression, make the function statement into one
    if (!expr) {
      if (transformFn) {
        try {
          expr = transformFn("("+fn+")");
          transformed = true;
        } catch(e) {
          expr = "false";
        }
      }
      else {
        expr = deindentFunc(fn);
      }
      return cheerio.load('')('<script>test(\n' + expr + '())</script>').attr('data-source', expr);
    }
    else {
      expr = deindentFunc(expr[1]);
      if (transformFn) {
        try {
          if (expr.search(/Function\s*\(|eval\s*\(/) > -1) {
            throw new Error("This test's code invokes eval() and cannot be compiled.");
          }
          expr = transformFn("(function(){" + expr + "})")
          transformed = true;
        } catch(e) {
          expr = "/* Error during compilation: " + e.message + "*/";
        }
      }
      var async = !!/asyncTestPassed/.exec(fn);
      var codeString = JSON.stringify(expr).replace(/\\r/g,'');
      var asyncFn = 'global.__asyncPassedFn && __asyncPassedFn("' + rowNum + '")';
      var strictAsyncFn = 'global.__strictAsyncPassedFn && __strictAsyncPassedFn("' + rowNum + '")';
      var funcString =
        transformed ? '' + asyncFn + ' && eval(' + codeString + ')()'
        : 'Function("asyncTestPassed",' + codeString + ')(asyncTestPassed)';
      var strictFuncString =
        transformed ? '' + strictAsyncFn + ' && function(){"use strict";' + codeString + '}() && "Strict"'
        : 'Function("asyncTestPassed","\'use strict\';"+' + codeString + ')(asyncTestPassed)';

      return cheerio.load('')('<script>' +
         'test(function(){'
        +  'try{'
        +    'var asyncTestPassed=' + asyncFn + ';'
        +    'try{'
        +      'return ' + funcString
        +    '}'
        +    'catch(e){'
        +      'asyncTestPassed=' + strictAsyncFn + ';'
        +      'return ' + strictFuncString + '&&"Strict"'
        +    '}'
        +  '}'
        +  'catch(e){'
        +    'return false;'
        +  '}'
        +'}());'
        +'\n</script>').attr('data-source', expr);
    }
  } else {
    // it's an array of objects like the following:
    // { type: 'application/javascript;version=1.8', script: function () { ... } }
    return fn.reduce(function(text, script) {
      var expr = deindentFunc(
          (script.script+'').replace(/^function \(\) \{\s*|\s*\}$/g, '')
        );
      var $ = cheerio.load
        ('<script' + (script.type ? ' type="' + script.type + '"' : '') + '>' +
          expr +
          '</script>'
        );
      $('script').attr('data-source', expr);
      return text + $.html();
    },'');
  }
}
