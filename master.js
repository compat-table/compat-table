var _gaq = [['_setAccount', 'UA-1128111-24'], ['_trackPageview']];

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function test(expression) {
  var result = expression ? 'Yes' : 'No';
  document.write('<td class="' + result.toLowerCase() + '">' + result + '</td><td></td>');
}
document.write('<style>td:nth-of-type(2) { outline: #aaf solid 3px; }</style>');

domready(function() {
  if (!/#showold$/.test(location.href))
    document.body.className += ' hide-old-browsers';
  else
    document.getElementById('show-old-browsers').checked = true
  var wrapper = document.getElementById('show-old-browsers-wrapper');
  if (wrapper) {
    wrapper.style.display = '';
    document.getElementById('show-old-browsers').onclick = function() {
      if (this.checked) {
        document.body.className = document.body.className.replace('hide-old-browsers', '');
        location.href = location.href.replace(/#*$/, '#showold')
      }
      else {
        document.body.className += 'hide-old-browsers';
        location.href = location.href.replace(/(#showold)*$/, '#')
      }
    };
  }

  var mouseoverTimeout;

  var infoTooltip = document.createElement('pre');
  infoTooltip.className = 'info-tooltip';
  infoTooltip.style.display = 'none';
  document.body.appendChild(infoTooltip);
  infoTooltip.onmouseout = function() {
    infoTooltip.style.display = 'none';
  };
  infoTooltip.onmouseover = function() {
    mouseoverTimeout = null;
  };

  var rows = document.getElementsByTagName('table')[0].rows;
  for (var i = 1; i < rows.length; i++) {
    if (/separator/.test(rows[i].cells[0].className)) continue;

    var infoEl = document.createElement('span');
    infoEl.className = 'info';
    infoEl.innerHTML = 'c';
    rows[i].cells[0].appendChild(infoEl);

    infoEl.onmouseover = function(e) {
      mouseoverTimeout = null;
      var scriptEl = this.parentNode.parentNode.getElementsByTagName('script')[0];
      infoTooltip.innerHTML = scriptEl.innerHTML.replace(/^\n/, '').replace(/</g, '&lt;');
      infoTooltip.style.left = e.pageX + 10 + 'px';
      infoTooltip.style.top = e.pageY + 'px';
      infoTooltip.style.display = 'block';
    };
    infoEl.onmouseout = function(e) {
      mouseoverTimeout = setTimeout(function() {
        if (mouseoverTimeout) {
          infoTooltip.style.display = 'none';
        }
      }, 500);
    };
  }

  var last_highlighted;
  var table = document.getElementsByTagName('table')[0];
  function highlightSelected(tr) {
    if (tr === undefined) {
      // actually finds the <td>
      tr = document.getElementById(location.hash.slice(1));
      if (tr) {
        tr = tr.parentNode;
      }
    }
    table.className = tr ? 'one-selected' : '';
    if (last_highlighted) {
      last_highlighted.className = '';
    }
    if (tr) {
      tr.className = 'selected';
    }
    last_highlighted = tr;
  }

  if (location.hash) {
    highlightSelected();
    highlightColumn();
  }

  document.onclick = function(e) {
    if (e.target.className === 'anchor') {
      // <tr><td><span><a>
      highlightSelected(e.target.parentNode.parentNode.parentNode);
    }
    else {
      location.hash = '';
      highlightSelected(false);
    }
  };

  window.onhashchange = function() {
    highlightSelected();
    highlightColumn();
  };

  function highlightColumn(index) {
    var table = document.getElementById('table-wrapper');

    if (typeof index === 'undefined' && location.hash) {
      for (var i = 0, len = table.rows[0].cells.length; i < len; i++) {
        var cell = table.rows[0].cells[i];
        if (cell.innerHTML.indexOf('"' + location.hash + '"') > -1) {
          highlightColumn(i);
        }
      }
      return;
    }

    table.className = 'one-selected';

    for (var i = 0, len = table.rows.length; i < len; i++) {
      var row = table.rows[i];
      for (var j = 0, jlen = row.cells.length; j < jlen; j++) {
        row.cells[j].className = row.cells[j].className.replace('selected', '');
        if (j === index || j === 1) {
          row.cells[j].className += ' selected';
        }
      }
    }
  }

  document.onclick = function(e) {
    if (e.target.className === 'browser-name' ||
        e.target.parentNode.className === 'browser-name') {

      var target = e.target.className ? e.target : e.target.parentNode;
      var table = document.getElementById('table-wrapper');
      var headerCells = [].slice.call(table.rows[0].cells);
      var index = headerCells.indexOf(target.parentNode);

      highlightColumn(index);
    }
  };

  function initColumnHighlight() {
    var table = document.getElementById('table-wrapper');
    for (var i = 0, len = table.rows.length; i < len; i++) {
      var row = table.rows[i];
      for (var j = 0, jlen = row.cells.length; j < jlen; j++) {
        row.cells[j].onmouseover = (function(i, j) {
          return function() {

            if (!row.cells[j]) return;

            if (row.cells[j].className.indexOf('yes') > -1 || row.cells[j].className.indexOf('no') > -1) {

              for (var k = 0; k < len; k++) {
                for (var l = 0; l < jlen; l++) {
                  rows[k].cells[l] && (rows[k].cells[l].className = rows[k].cells[l].className.replace('hover', ''));
                }
                rows[k].cells[j] && (rows[k].cells[j].className += ' hover');
              }

            }
          };
        })(i, j);
      }
    }
  }
  initColumnHighlight();

  var numFeaturesPerColumn = window.numFeaturesPerColumn = { };

  var table = document.getElementById('table-wrapper');
  var totalResultsInColum = table.rows.length - table.getElementsByClassName('separator').length - 1 /* header */;

  // count number of features for each column/browser
  for (var i = 1, len = table.rows.length; i < len; i++) {
    for (var j = 1, jlen = table.rows[i].cells.length; j < jlen; j++) {

      if (j === 2) continue;

      if (typeof numFeaturesPerColumn[j] === 'undefined') {
        numFeaturesPerColumn[j] = 0;
      }
      if (table.rows[i].cells[j].className.indexOf('yes') > -1) {
        numFeaturesPerColumn[j]++;
      }
    }
  }

  // store number of features for each column/browser and numeric index
  for (var i = 0, len = table.rows.length; i < len; i++) {
    for (var j = 0, jlen = table.rows[i].cells.length; j < jlen; j++) {
      var num = numFeaturesPerColumn[j];
      var cell = table.rows[i].cells[j];

      cell.setAttribute('data-features', num);
      cell.setAttribute('data-num', j);

      if (cell.tagName.toLowerCase() === 'th' && typeof num === 'number') {
        cell.innerHTML += (
          ' <sup class="num-features" title="Number of implemented features"><b>' +
            num +
            '</b>/' +
            totalResultsInColum + '</sup>');
      }
    }
  }


  var sortButton = document.getElementById('sort');
  if (sortButton) {
    sortButton.onclick = function() {

      var sortByFeatures = this.checked;

      var comparator = sortByFeatures ? function(a, b) {
        var numFeaturesPerA = parseInt(a.getAttribute('data-features'), 10);
        var numFeaturesPerB = parseInt(b.getAttribute('data-features'), 10);

        return numFeaturesPerB - numFeaturesPerA;
      } : function(a, b) {
        var aNum = parseInt(a.getAttribute('data-num'), 10);
        var bNum = parseInt(b.getAttribute('data-num'), 10);

        return aNum - bNum;
      };

      // sort
      for (var i = 0, len = table.rows.length; i < len; i++) {

        var row = table.rows[i];
        var cells = [].slice.call(row.cells, 3);
        var sorted = cells.sort(comparator);
        var scriptEl = row.getElementsByTagName('script')[0];

        var firstCell = row.cells[0];
        var secondCell = row.cells[1];
        var thirdCell = row.cells[2];

        row.innerHTML = '';

        scriptEl && row.appendChild(scriptEl);

        row.appendChild(firstCell);
        row.appendChild(secondCell);
        row.appendChild(thirdCell);

        for (var j = 0, jlen = sorted.length; j < jlen; j++) {
          row.appendChild(sorted[j]);
        }
      }

      initColumnHighlight();
    };
  }


});
