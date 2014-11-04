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


var fs = require('fs');

// let prototypes declared below in this file be initialized
process.nextTick(function () {
  handle(require('./data-es5'));
  handle(require('./data-es6'));
  handle(require('./data-es7'));
  handle(require('./data-non-standard'));
});


function handle(options) {
  var skeleton = fs.readFileSync(__dirname + '/' + options.skeleton_file, 'utf-8');
  var html = dataToHtml(options.browsers, options.tests);

  var result = replaceAndIndent(skeleton, [
    ["<!-- TABLE HEADERS -->", html.tableHeaders],
    ["<!-- TABLE BODY -->", html.tableBody],
    ["<!-- FOOTNOTES -->", html.footnotes]
  ]).replace(/\t/g, '  ');

  var target_file = __dirname + '/' + options.target_file;
  var old_result;
  try {
    old_result = fs.readFileSync(target_file, 'utf-8');
  } catch (e) {}
  if (old_result === result) {
    console.log('[' + options.name + '] ' + options.target_file + ' not changed');
  } else {
    fs.writeFileSync(target_file, result);
    console.log('[' + options.name + '] Write to file ' + options.target_file);
  }
}

function dataToHtml(browsers, tests) {
  var footnoter = new Footnoter();
  var headers = [];
  var body = [];
  
  function browserCSSclass(browserId) {
    var b = browsers[browserId];
    if (!b) {
      throw new Error('No browser with ID ' + browserId);
    }
    return browserId + (b.obsolete ? ' obsolete' : '');
  }
  
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
  
  // Write the browser headers
  
  Object.keys(browsers).forEach(function(browserId) {
    var b = browsers[browserId];
    if (!b) {
      throw new Error('No browser with ID ' + browserId);
    }
    headers.push(
      '<th class="' + browserCSSclass(browserId) + '">' +
      ('<a href="#' + browserId + '" class="browser-name">') +
      (b.short ? '<abbr title="' + b.full + '">' + b.short + '</abbr>' : b.full) +
      (b.link ? '</a>' : '') +
      footnoter.get(b) +
      '</th>'
    );
  });
  
  // Now print the results.
  tests.forEach(function(t) {
    var subtests;
    // Calculate the result totals for tests which consist solely of subtests.
    if ("subtests" in t) {
      t.res = t.res || {};
      
      subtests = t.subtests;
      Object.keys(t.subtests).forEach(function(st) {
        var subtest = subtests[st];
        // For each of the subtest's results, add 1 to the main test's
        // results tally for the given browser.
        if (!subtest.res) {
          return;
        }
        interpolateResults(subtest.res);
        Object.keys(subtest.res).forEach(function(browserId) {
          var res = subtest.res[browserId];
          // If the result is an object representing a footnote, use the raw val
          if (res.val) {
            res = res.val;
          }
          t.res[browserId] = (t.res[browserId] || 0) + +(res === true);
        });
      });
    }
    else {
      interpolateResults(t.res);
    }
    
    var id = t.name.replace(/^[\s<>&"]+|[\s<>&"]+$/g, '').replace(/[\s<>&"]+/g, '_');
    var name = t.link ? ('<a href="' + t.link + '">' + t.name + '</a>') : t.name;
    
    body.push(
      '<tr' + (subtests ? ' class="supertest"' : '') + '>',
      '\t<td id="' + id + '"><span><a class="anchor" href="#' + id + '">&sect;</a>' + name + footnoter.get(t) + '</span></td>\n' +
      testScript(t.exec)
    );
    
    // Function to print out a single <td> result cell.
    function printResultCell(browserId, result, outOf, footnote) {
      if (!browsers[browserId]) {
        return;
      }
      // Prepare the result text
      if (result && typeof result === 'object') {
        result = result.val;
      }
      if (outOf) {
        result = (result|0) + "/" + outOf;
      }
      if (typeof result === "boolean" || result === undefined) {
        result = result ? 'Yes' : 'No';
      }
      // Prepare the CSS class and title
      var title = "";
      var CSSclass = browserCSSclass(browserId);
      
      // These change if the result is not applicable.
      if (browsers[browserId].nonbrowser && t.annex_b) {
        title="This feature is optional on non-browser platforms.";
        CSSclass +=" not-applicable ";
      }
      
      if (result == null) {
        body.push('\t<td class="' + CSSclass + '"></td>');
      } else {
        body.push(
          '\t<td ' + (title ? ('title="' + title + '" ') : '') +
          'class="' + (outOf ? 'tally' : result.toLowerCase()) + ' ' + CSSclass + '"' +
          (outOf ? ' data-tally="' + eval(result) + '"' : '') + '>' +
          result +
          footnote +
          '</td>'
        );
      }
    }
    
    // Print all the results for the main test
    Object.keys(browsers).forEach(function(browserId) {
      var result = t.res[browserId];
      printResultCell(
        browserId,
        result,
        t.subtests ? Object.keys(t.subtests).length : null,
        footnoter.get(result)
      );
    });
    
    // Print all the results for the subtests
    if ("subtests" in t) {
      Object.keys(t.subtests).forEach(function(subtestName) {
        var subtest = t.subtests[subtestName];
        body.push(
          '<tr class="subtest" data-parent="' + id + '">',
          '\t<td><span>' + subtestName + '</span></td>\n' +
          testScript(subtest.exec)
        );
        Object.keys(browsers).forEach(function(browserId) {
          var result = subtest.res[browserId];
          printResultCell(
            browserId,
            result,
            null,
            footnoter.get(result)
          );
        });
      });
    }
    
    // Finish the <tr>
    body.push('</tr>');
    if (t.separator === 'after') {
      body.push(
        '<tr>',
        '\t<th colspan="' + (Object.keys(browsers).length + 3) + '" class="separator"></th>',
        '</tr>'
      );
    }
  });

  return {
    tableHeaders: headers,
    tableBody: body,
    footnotes: footnoter.getAll()
  };
}

// Footnoter
function Footnoter() {
  this.indexById = Object.create(null);
  this.notes = [];
}

Footnoter.prototype.get = function (val) {
  var id;
  if (val && typeof val === 'object' && val.note_id) {
    id = val.note_id;
    // save if it's new
    if (this.indexById[id] == null) {
      this.indexById[id] = this.notes.length;
      this.notes.push(val.note_html);
    }
    // save html if such exists (may replace existing)
    else if (val.note_html) {
      this.notes[ this.indexById[id] ] = val.note_html;
    }

    // return the index + 1
    return '<a href="#' + id + '-note"><sup>[' +
      (this.indexById[id] + 1) +
      ']</sup></a>';
  }
  return '';
};

Footnoter.prototype.getAll = function() {
  var id, index,
    html = [];

  for (id in this.indexById) {
    index = this.indexById[id];
    html.push(
      '<p id="' + id + '-note">',
      '\t<sup>[' + (index + 1) + ']</sup> ' + this.notes[index],
      '</p>'
    );
  }
  return html;
};

function replaceAndIndent(str, replacements) {
  var i, replacement, indent;
  for (i = 0; i < replacements.length; i++) {
    replacement = replacements[i];
    indent = new RegExp('(\n[ \t]*)' + replacement[0]).exec(str);
    if (!indent) {
      throw new Error('Could not find indent for ' + replacement[0]);
    }
    str = str
      .split(replacement[0])
      .join(replacement[1].join(indent[1]));
  }
  return str;
}

function testScript(fn) {
  
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

    // if there wasn't an expression, make the function statement into one
    if (!expr) {
      expr = deindentFunc(fn);
      return '<script data-source="' + expr.replace(/"/g,'&quot;') + '">test(\n' + expr + '())</script>\n';
    }
    else {
      expr = deindentFunc(expr[1]);
      return '<script data-source="' + expr.replace(/"/g,'&quot;') + '">\n' +
      'test(function(){try{return Function(' + JSON.stringify(expr).replace(/\\r/g,'') + ')()}catch(e){return false;}}());\n' +
      '</script>\n';
    }
  } else {
    // it's an array of objects like the following:
    // { type: 'application/javascript;version=1.8', script: function () { ... } }
    return fn.reduce(function(text, script) {
      var expr = deindentFunc(
          (script.script+'').replace(/^function \(\) \{\s*|\s*\}$/g, '')
        );
      return text
        + '<script' + (script.type ? ' type="' + script.type + '"' : '')
        + ' data-source="' + expr.replace(/"/g,'&quot;') + '">'
        + expr
        + '</script>\n';
    },'');
  }
}
