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


var assign     = require('object-assign');

var fs         = require('fs');
var path       = require('path');
var os         = require('os');
var cheerio    = require('cheerio');
// requires Node v0.11.12
var child_process = require('child_process');

var useCompilers = String(process.argv[2]).toLowerCase() === "compilers";

// let prototypes declared below in this file be initialized
process.nextTick(function () {
  handle(require('./data-es5'));
  var es6 = require('./data-es6');
  handle(es6);
  handle(require('./data-es7'));
  handle(require('./data-non-standard'));
  
  // ES6 compilers
  if (!useCompilers) {
    return;
  }
  if (!fs.existsSync('es6/compilers')) {
    fs.mkdirSync('es6/compilers');
  }
  var closure    = require('closurecompiler');
  var to5        = require('6to5');
  var esnext     = require('esnext');
  // Known bug: running require('es6-transpiler') causes 6to5 to break.
  var es6tr      = require('es6-transpiler');
  var traceur    = require('traceur');
  var reacttools = require('react-tools');
  [
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
      name: '6to5',
      url: 'https://6to5.github.io/',
      target_file: 'es6/compilers/6to5.html',
      polyfills: [],
      compiler: function(code) {
        return to5.transform(code, { experimental: true }).code;
      },
    },
    {
      name: '6to5 + polyfill',
      url: 'https://6to5.github.io/',
      target_file: 'es6/compilers/6to5-polyfill.html',
      polyfills: ['node_modules/6to5/browser-polyfill.js'],
      compiler: function(code) {
        return to5.transform(code, { experimental: true }).code;
      },
    },
    {
      name: 'ESNext',
      url: 'https://github.com/esnext/esnext',
      target_file: 'es6/compilers/esnext.html',
      polyfills: [],
      compiler: function(code) {
        return esnext.compile(code).code;
      },
    },
    {
      name: 'ES6 Transpiler',
      url: 'https://github.com/termi/es6-transpiler',
      target_file: 'es6/compilers/es6-transpiler.html',
      polyfills: [],
      compiler: function(code) {
        return es6tr.run({src:code}).src;
      },
    },
    {
      name: 'JSX',
      url: 'https://github.com/facebook/react',
      target_file: 'es6/compilers/jsx.html',
      polyfills: [],
      compiler: function(code) {
        var ret = reacttools.transform(code, { harmony:true });
        return ret.code || ret;
      },
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
            ' --language_in=ECMASCRIPT6 --language_out=ECMASCRIPT5 --transpile_only'
          );
        } catch(e) {
          throw new Error('\n' + e.stdout.toString().split(fpath).join(''));
        }
        return output;
      },
    },
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      target_file: 'es6/compilers/typescript.html',
      polyfills: [],
      compiler: function(code) {
        var fpath = os.tmpDir() + path.sep + 'temp.ts';
        var file = fs.writeFileSync(fpath, code);
        try {
          child_process.execSync('node_modules/typescript/bin/tsc -t ES5 ' + fpath);
        } catch(e) {
          throw new Error('\n' + e.stdout.toString().split(fpath).join(''));
        }
        var output = fs.readFileSync(fpath.slice(0, -2) + 'js', 'utf-8');
        return output;
      },
    },
  ].forEach(function(e){
    assign(es6, e);
    es6.browsers = {};
    es6.skeleton_file = 'es6/compiler-skeleton.html';
    handle(es6);
  });
});


function handle(options, compiler) {
  var skeleton = fs.readFileSync(__dirname + path.sep + options.skeleton_file, 'utf-8');
  var html = dataToHtml(skeleton, options.browsers, options.tests, options.compiler);

  var result = replaceAndIndent(html, [
    ["<!-- NAME -->", [options.name]],
    ["<!-- URL -->", [options.name.link(options.url)]],
    ["<!-- POLYFILLS -->", !options.polyfills ? [] : options.polyfills.map(function(e) {
      return '<script>' + fs.readFileSync(__dirname + path.sep + e, 'utf-8') + '</script>\n';
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

function dataToHtml(skeleton, browsers, tests, compiler) {
  var $ = cheerio.load(skeleton);
  var head = $('table thead tr:last-child');
  var body = $('table tbody');
  var footnoteIndex = {};
  var rowNum = 0;
  
  function interpolateResults(res) {
    var browser, prevBrowser, result, prevResult, bid, prevBid, j;
    // For each browser, check if the previous browser has the same
    // browser full name as this one.
    for (var bid in browsers) {
      browser = browsers[bid];
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
  }
  
  function footnoteHTML(obj) {
    if (obj && obj.note_id) {
      if (!footnoteIndex[obj.note_id]) {
        footnoteIndex[obj.note_id] = obj.note_html;
      }
      var num = Object.keys(footnoteIndex).indexOf(obj.note_id) + 1;
      return '<a href="#' + obj.note_id + '-note"><sup>[' + num + ']</sup></a>';
    }
    return '';
  }
  
  function allFootnotes() {
    var ret = $('<p>');
    Object.keys(footnoteIndex).forEach(function(e,id) {
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
  
  // Write the browser headers
  
  Object.keys(browsers).forEach(function(browserId) {
    var b = browsers[browserId];
    if (!b) {
      throw new Error('No browser with ID ' + browserId);
    }
    head.append($('<th></th>')
      .addClass("platform " + browserId + ' ' + (b.platformtype || 'desktop'))
      .addClass(b.obsolete ? "obsolete" : "")
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
      Object.keys(t.subtests).forEach(function(e) {
        interpolateResults(t.subtests[e].res);
      });
    }
    else interpolateResults(t.res);
    
    var id = t.name.replace(/^[\s<>&"]+|[\s<>&"]+$/g, '').replace(/[\s<>&"]+/g, '_');
    var name = t.link ? ('<a href="' + t.link + '">' + t.name + '</a>') : t.name;
    
    var testRow = $('<tr></tr>')
      .addClass("subtests" in t ? 'supertest' : '')
      .append($('<td></td>')
        .attr('id',id)
        .append('<span><a class="anchor" href="#' + id + '">&sect;</a>' + name + footnoteHTML(t) + '</span></td>')
        .append(testScript(t.exec, compiler, rowNum++))
      );
    body.append(testRow);
    
    // Function to print out a single <td> result cell.
    function resultCell(browserId, result, footnote) {
      if (!browsers[browserId]) {
        return;
      }
      result = testValue(result);
      
      // Create the cell, and add classes and attributes
      var cell = $('<td></td>');
      cell.addClass(result === true ? "yes" : result !== null ? "no" : "");
      if(result === "flagged") {
        cell.addClass("flagged");
      }
      cell.attr('data-browser', browserId).addClass(browsers[browserId].obsolete ? "obsolete" : "");
      
      // Add extra signifiers if the result is not applicable.
      if (browsers[browserId].platformtype &&
          "desktop|mobile".indexOf(browsers[browserId].platformtype) === -1 &&
          t.annex_b) {
        cell.attr('title', "This feature is optional on non-browser platforms.");
        cell.addClass("not-applicable");
      }
      
      if (result !== null) {
        cell.text(result === "flagged" ? "Flag" : result === true ? "Yes" : "No");
      }
      if (footnote) {
        cell.append(footnote);
      }
      return cell;
    }
    
    // Print all the results for the subtests
    if ("subtests" in t) {
      Object.keys(t.subtests).forEach(function(subtestName, subtestNum) {
        var subtest = t.subtests[subtestName];
        
        subtestRow = $('<tr class="subtest"></tr>')
          .attr('data-parent', id)
          .append(
            $('<td></td>')
              .append('<span>' + subtestName + '</span>')
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
          
          Object.keys(t.subtests).forEach(function(e) {
            var result = t.subtests[e].res[browserId];
            
            tally += testValue(result) === true;
            flaggedTally += testValue(result) === 'flagged';
            outOf += 1;
          });
          
          var cell = resultCell(browserId, null)
            .text((tally|0) + "/" + outOf)
            .addClass('tally')
            .attr('data-tally', tally / outOf);
          
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
      return cheerio.load()('<script>test(\n' + expr + '())</script>').attr('data-source', expr);
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
      var funcString =
        transformed ? '' + asyncFn + ' && eval(' + codeString + ')()'
        : 'Function("asyncTestPassed",' + codeString + ')(asyncTestPassed);';
      
      return cheerio.load()('<script>' +
        'test(function(){try{var asyncTestPassed=' + asyncFn + ';return ' +
        funcString + '}catch(e){return false;}}()' + 
      ');\n</script>').attr('data-source', expr);
    }
  } else {
    // it's an array of objects like the following:
    // { type: 'application/javascript;version=1.8', script: function () { ... } }
    return fn.reduce(function(text, script) {
      var expr = deindentFunc(
          (script.script+'').replace(/^function \(\) \{\s*|\s*\}$/g, '')
        );
      return text +
        cheerio.load()('<script' + (script.type ? ' type="' + script.type + '"' : '') + '">' +
          expr +
          '</script>'
        ).attr('data-source', expr).html();
    },'');
  }
}
