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
  var i, j, browserId, footnote;

  var footnoter = new Footnoter();

  // headers
  var b,
    headers = [];
  for (browserId in browsers) {
    b = browsers[browserId];
    if (!b) {
      throw new Error('No browser with ID ' + browserId);
    }
    headers.push(
      '<th class="' + browserTableClass(browserId, b) + '">' +
      ('<a href="#' + browserId + '" class="browser-name">') +
      (b.short ? '<abbr title="' + b.full + '">' + b.short + '</abbr>' : b.full) +
      (b.link ? '</a>' : '') +
      footnoter.get(b) +
      '</th>'
    );
  }

  // body rows
  var val,
    body = [],
    name, id;
  for (i = 0; i < tests.length; i++) {
    t = tests[i];
    id = t.name.replace(/^[\s<>&"]+|[\s<>&"]+$/g, '').replace(/[\s<>&"]+/g, '_');
    name = t.link ? ('<a href="' + t.link + '">' + t.name + '</a>') : t.name;
    body.push(
      '<tr>',
      '\t<td id="' + id + '"><span><a class="anchor" href="#' + id + '">&sect;</a>' + name + footnoter.get(t) + '</span></td>\n' +
      testScript(t.exec)
    );

    // each browser for this test
    for (browserId in browsers) {
      val = t.res[browserId];
      if (browsers[browserId].nonbrowser && t.annex_b) {
        body.push('\t<td title="This feature is optional on non-browser platforms." class="not-applicable '
          + browserTableClass(browserId, browsers[browserId]) + '">' + boolToString(val) + '</td>');
      }
      else if (val == null) {
        body.push('\t<td class="' + browserTableClass(browserId, browsers[browserId]) + '"></td>');
      } else {
        body.push(
          '\t<td class="' + boolToString(val).toLowerCase() + ' ' + browserTableClass(browserId, browsers[browserId]) + '">' +
          boolToString(val) +
          footnoter.get(val) +
          '</td>'
        );
      }
    }

    body.push('</tr>');
    if (t.separator === 'after') {
      body.push(
        '<tr>',
        '\t<th colspan="' + (Object.keys(browsers).length + 3) + '" class="separator"></th>',
        '</tr>'
      );
    }
  }

  return {
    tableHeaders: headers,
    tableBody: body,
    footnotes: footnoter.getAll()
  };
}

function browserTableClass(browserId, entry) {
  return browserId + (entry.obsolete ? ' obsolete' : '');
}

function boolToString(val) {
  if (typeof val === 'object') {
    val = val.val;
  }
  return val ? 'Yes' : 'No';
}

// Footnoter
function Footnoter() {
  this.indexById = Object.create(null);
  this.notes = [];
}

Footnoter.prototype.get = function (val) {
  var id;
  if (typeof val === 'object' && val.note_id) {
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

function deindentFunc(fn) {
  fn = (fn+'');
  var indent = /(?:^|\n)([\t ]+)[^\n]+/.exec(fn);
  if (indent) {
    fn = fn.replace(new RegExp('\n' + indent[1], 'g'), '\n');
  }
  return fn;
}

function testScript(fn) {
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
