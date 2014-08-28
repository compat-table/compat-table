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
  var showObsolete = document.getElementById('show-obsolete');
  showObsolete.onclick = function() {
    this.setAttribute('value',this.getAttribute('value')==="on" ? "off" : "on");
  }
  showObsolete.setAttribute('value', showObsolete.checked);
  
  var table = document.getElementById('table-wrapper');
  
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

  var rows = table.rows;
  for (var i = 1; i < rows.length; i++) {
    if (/separator/.test(rows[i].cells[0].className)) continue;

    var infoEl = document.createElement('span');
    infoEl.className = 'info';
    infoEl.innerHTML = 'c';
    rows[i].cells[0].appendChild(infoEl);

    infoEl.onmouseover = function(e) {
      e = e || window.event;
      mouseoverTimeout = null;
      
      var scriptEl = this.parentNode.parentNode.getElementsByTagName('script')[0];
      var id = "tooltip_" + this.parentNode.id;
      
      infoTooltip.innerHTML = scriptEl.getAttribute('data-source')
        // trim sides, and escape <
        .replace(/^\s*|\s*$/g,'').replace(/</g, '&lt;');
      
      if (!e.pageX) {
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      infoTooltip.style.left = e.pageX + 10 + 'px';
      infoTooltip.style.top  = e.pageY + 'px';
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
    e = e || window.event;
    e.target = e.target || e.srcElement;
    if (e.target.className === 'anchor') {
      // <tr><td><span><a>
      highlightSelected(e.target.parentNode.parentNode.parentNode);
    }
    else if (e.target.className === 'browser-name' ||
        e.target.parentNode.className === 'browser-name') {

      var i, target = e.target.className ? e.target : e.target.parentNode;
      
      for(i=0; i<table.rows[0].cells.length; i++) {
        if (table.rows[0].cells[i]===target.parentNode) {
          break;
        }
      }

      highlightColumn(i);
    }
    else {
      location.hash = '';
      highlightSelected(false);
    }
  };

  window.onhashchange = function() {
    if (location.hash) {
      highlightSelected();
      highlightColumn();
    }
  };

  function highlightColumn(index) {
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
  
  function initColumnHighlight() {
    for (var i = 0, len = table.rows.length; i < len; i++) {
      var row = table.rows[i];
      for (var j = 0, jlen = row.cells.length; j < jlen; j++) {
        row.cells[j].onmouseover = (function(i, j) {
          return function() {

            if (!row.cells[j]) return;

            if (row.cells[j].className.indexOf('yes') > -1 || row.cells[j].className.indexOf('no') > -1) {

              for (var k = 0; k < len; k++) {
                for (var l = 0; l < jlen; l++) {
                  rows[k].cells[l] && (rows[k].cells[l].className = rows[k].cells[l].className.replace(' hover', ''));
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

  // count number of features for each column/browser
  for (var i = 1, len = table.rows.length; i < len; i++) {
    for (var j = 1, jlen = table.rows[i].cells.length; j < jlen; j++) {

      if (j === 2) continue;
      if (numFeaturesPerColumn[j] === undefined) {
        numFeaturesPerColumn[j] = [0,0];
      }
      if (table.rows[i].cells[j].className.indexOf('yes') > -1) {
        numFeaturesPerColumn[j][0]++;
      }
      if (table.rows[i].cells[j].className.indexOf('not-applicable') == -1) {
        numFeaturesPerColumn[j][1]++;
      }
    }
  }

  // store number of features for each column/browser and numeric index
  for (var i = 0, len = table.rows.length; i < len; i++) {
    for (var j = 0, jlen = table.rows[i].cells.length; j < jlen; j++) {
      if (numFeaturesPerColumn[j] === undefined) continue;
      
      var num = numFeaturesPerColumn[j][0];
      var totalResultsInColum = numFeaturesPerColumn[j][1];
      var cell = table.rows[i].cells[j];

      cell.setAttribute('data-features', num/totalResultsInColum);
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
        var numFeaturesPerA = parseFloat(a.getAttribute('data-features'), 10);
        var numFeaturesPerB = parseFloat(b.getAttribute('data-features'), 10);

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

        firstCell && row.appendChild(firstCell);
        secondCell && row.appendChild(secondCell);
        thirdCell && row.appendChild(thirdCell);

        for (var j = 0, jlen = sorted.length; j < jlen; j++) {
          row.appendChild(sorted[j]);
        }
      }

      initColumnHighlight();
    };
  }


});
