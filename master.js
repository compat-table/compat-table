// jshint ignore:start
var _gaq = [
  ['_setAccount', 'UA-1128111-24'],
  ['_trackPageview']
];
// jshint ignore:end

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') +
            '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

window.test = function(expression) {
  var result = expression ? 'Yes' : 'No';
  document.write('<td class="' + result.toLowerCase() + ' current">' + result + '</td><td></td>');
};

document.write('<style>td:nth-of-type(2) { outline: #aaf solid 3px; }</style>');

// For async tests, this returned function is used to set results
// instead of returning true/false.
var __asyncPassedFn = function(rowNum) {
  return function() {
    var elem = $("#table-wrapper tbody tr:not(.category)").eq(+rowNum).children(".current")[0];
    elem.className = "yes";
    elem.textContent = "Yes";
    if (global.__updateHeaderTotal) {
      $(elem).parent().prevAll('.supertest').first().each(__updateSupertest);
      $('th.current').each(__updateHeaderTotal);
    }
  }
}

$(function() {
  'use strict';
  var table = $('#table-wrapper');
  var currentBrowserSelector = ":nth-of-type(2)";

  // Set up the Show Obsolete checkbox
  $('#show-obsolete, #show-unstable').on('click', function() {
      var elem = $(this);
      elem.attr('value', elem.attr('value') === 'on' ? 'off' : 'on');

      $('#desktop-header' ).prop('colSpan', $('.platform.desktop:visible' ).length);
      $('#compiler-header').prop('colSpan', $('.platform.compiler:visible').length);
      $('#engine-header'  ).prop('colSpan', $('.platform.engine:visible'  ).length);
      $('#mobile-header'  ).prop('colSpan', $('.platform.mobile:visible'  ).length);
    })
  $('#show-obsolete').attr('value', $('#show-obsolete').checked);
  $('#show-unstable').attr('value', $('#show-unstable').checked);

  var mouseoverTimeout;

  window.__updateSupertest = function(){
    var tr = $(this);
    var subtests = tr.nextUntil('tr:not(.subtest)');
    if (subtests.length === 0) {
      return;
    }
    var tally = subtests.find(".yes" + currentBrowserSelector).length;
    var grade = tally/subtests.length;
    tr
      .find('.tally.current, .tally.current + td:empty').remove().end()
      .find('td:first-child')
      .after(
      '<td class="tally current" data-tally="' + tally/subtests.length
      + '" style="background-color:hsl(' + (120*grade|0) + ',' +((86 - (grade*44))|0)  +'%,50%)'
      + '">' +
      tally + '/' + subtests.length + '</td><td></td>'
    );
  }

  $('tr.supertest').each(function() {
    var tr = $(this);
    var subtests = tr.nextUntil('tr:not(.subtest)');
    if (subtests.length === 0) {
      return;
    }
    // Attach dropdown indicator and onclick to those tests with subtests
    $('<span class="folddown">&#9658;</span>')
      .appendTo(tr.children()[0]);

    tr.on('click', function(event) {
      if (!$(event.target).is('a')) {
        subtests.toggle();
        tr.find(".folddown").css('transform', 'rotate(' + (subtests.is(':visible') ? '90deg' : '0deg') + ')');
      }
    });

    // Also, work out tallies for the current browser's tally features
    tr.each(__updateSupertest);
  });

  // Set up the tooltip HTML
  var infoTooltip = $('<pre class="info-tooltip">')
    .hide()
    .appendTo('body')
    .on('mouseleave', function() {
      $(this).hide();
    })
    .on('mouseenter', function() {
      mouseoverTimeout = null;
    });

  // Attach tooltip buttons to each feature <tr>
  $('#table-wrapper td:first-child').each(function() {
    var td = $(this);
    var scriptTag = td.parents('tr').find('script');
    if (scriptTag.length === 0) {
      return;
    }
    $('<span class="info">c</span>')
      .appendTo(td)
      .on('mouseenter', function(e) {
        infoTooltip.html(
            scriptTag.attr('data-source')
            // trim sides, and escape <
            .replace(/^\s*|\s*$/g, '').replace(/</g, '&lt;')
          )
          .show();
      })
      .on('mouseleave', function() {
        infoTooltip.hide();
      })
      .on('mousemove', function(e) {
        infoTooltip.offset({
          left: e.pageX + 10,
          top: e.pageY
        });
      });
  });

  // Function to retrieve the platform name of a given <td> cell
  function platformOf(elem) {
    return $(elem).attr('data-browser') || '';
  }

  // Since you can't add a :hover effect for columns,
  // these handlers must suffice.
  function addRemoveHover(name) {
    return function() {
      var c = platformOf(this);
      if (c) {
        $("[data-browser='" + c + "']")[name]('hover');
      }
    };
  }
  table
    .on('mouseenter', 'td', addRemoveHover('addClass'))
    .on('mouseleave', 'td', addRemoveHover('removeClass'));

  // Cell highlighting function
  function highlightSelected(elem) {
    table.detach().find('.selected').removeClass('selected');

    elem.addClass('selected');

    if (!elem.is('.parent') && elem.is('.subtest:hidden')) {
      elem.prevUntil('.supertest').prev().click();
    }

    table.addClass('one-selected').insertBefore('#footnotes');
  }

  $(document).on('click', function removeHighlighting(event) {
    // Don't remove all dimming if another link was clicked in this event.
    if ($(event.target).is('[href],[href] *, .supertest *'))
      return;
    table.removeClass('one-selected');
  });

  window.onhashchange = function() {
    if (location.hash) {
      var elem = $('[href="' + location.hash + '"]');

      // If it's a feature anchor, select only the <tr>.
      // (The CSS widens the selected row only vertically.)
      if (elem.is('.anchor')) {
        highlightSelected(elem.parents('tr'));
      }
      // If it's a browser name, select all matching <td> elements
      // (The CSS widens the selected column only horizontally.)
      else if (elem.is('.browser-name')) {
        // This assumes that all <td>s in the column have a class that matches
        // the browser-name's ID.
        highlightSelected(table.find('td' + currentBrowserSelector + ', td[data-browser="' + elem.attr('href').slice(1) + '"]'));
      }
    }
  };
  window.onhashchange();

  // browser engine color stripes
  function getBrowserColour(name) {
    /* Chakra */
    if (/^(ie|edge)/.exec(name)) {
      return "hsla(217, 85%, 54%, .5)";
    }
    /* SpiderMonkey */
    if (/^(firefox|rhino)/.exec(name)) {
      return "hsla(35, 100%, 50%, .5)";
    }
    /* JavaScriptCore */
    if (/^(webkit|safari|phantom|ios)/.exec(name)) {
      return "hsla(220, 25%, 70%, .5)";
    }
    /* V8 */
    if (/^(chrome|node|iojs)/.exec(name)) {
      return "hsla(79, 100%, 37%, .5)";
    }
    /* Carakan */
    if (/^opera/.exec(name)) {
      return "hsla(358, 86%, 43%, .5)";
    }
    /* KJS */
    if (/^konq/.exec(name)) {
      return "hsla(200, 100%, 74%, .5)";
    }
    /* BESEN */
    if (name === "besen") {
      return "rgba(173, 108, 23, .5)";
    }
    /* Current browser */
    if (name === "current") {
      return "hsla(0, 0%, 75%, .5)";
    }
    /* Compilers */
    return "hsla(52, 85%, 63%, .5)";
  }

  // Store number of features for each column/browser and numeric index.
  // The reason this is done at runtime instead of build time is because
  // the current browser's totals must be done at runtime, and to save on
  // duplicated code, we may as well do the predefined results too.
  window.__updateHeaderTotal = function(i) {
    var elem = $(this);
    var name;
    var id = 'current';

    if (elem.is('.browser-name')) {
      id = elem.attr('href').slice(1);
      name = elem.attr('href').replace("#", '[data-browser="')+'"]';
      elem = elem.parent();
    }
    else {
      name = currentBrowserSelector;
    }
    var results = table.find('tr:not([class*=test]):not(.optional-feature) td:not(.not-applicable)' + name);
    var yesResults = results.filter('.yes').length;
    var totalResults = results.length;
    /*
        Add annex b results, weighted to 1/5
    */
    results = table.find('tr:not([class*=test]).optional-feature td:not(.not-applicable)' + name);
    yesResults += results.filter('.yes').length/5;
    totalResults += results.length/5;

    var flaggedResults = yesResults;

    table.find('tr.supertest td[data-tally]:not(.not-applicable)' + name).each(function() {
      var weight = +$(this).parent().attr('significance') || 1;
      var yes = (+$(this).attr('data-tally') || 0) * weight;
      yesResults += yes;
      flaggedResults += yes + (+$(this).attr('data-flagged-tally') || 0) * weight;
      totalResults += weight;
    });
    var featuresCount = yesResults / totalResults;
    var flaggedFeaturesCount = flaggedResults / totalResults;

    function gradient(colour, percent) {
      return 'linear-gradient(to top, ' +
        colour + ' 0%, ' + colour + ' ' +
        (percent * 100|0) + '%, transparent ' + (percent * 100|0) +
        '%,transparent 100%)';
    }
    var colour = getBrowserColour(id);
    elem
      .attr('data-num', i)
      .attr('data-features', featuresCount)
      .find('.num-features').remove().end()
      .append('<sup class="num-features" title="Number of implemented features">' +
        // Don't bother with a HSL fallback for IE 8.
        '<b style="color:hsl(' + (featuresCount * 120|0) + ',100%,25%)">' +
        (Math.round(featuresCount*100)) +
        '</b>%</sup>')
      // Fancy bar graph background garnish (again, no fallback required).
      .css({'background-image': gradient(colour, featuresCount) +
        (flaggedFeaturesCount > featuresCount
          ? ',' + gradient(colour.replace(".5",".2"), flaggedFeaturesCount)
          : '')});
  };
  $('.browser-name, th.current').each(__updateHeaderTotal);

  // Cached array of sort orderings
  var ordering = [];

  $('#sort').on('click', function() {
    var elem = $(this);
    var sortByFeatures = elem.prop('checked');
    var comparator;

    // First, hide the platformtype bar if we're sorting by features.
    $('.platformtype')[sortByFeatures ? 'hide' : 'show']();

    // Next, cache the sort orderings
    if (!ordering[sortByFeatures]) {
      comparator = sortByFeatures ? function(a, b) {
        var numFeaturesPerA = parseFloat(a.getAttribute('data-features'));
        var numFeaturesPerB = parseFloat(b.getAttribute('data-features'));

        return numFeaturesPerB - numFeaturesPerA;
      } : function(a, b) {
        var aNum = parseInt(a.getAttribute('data-num'), 10);
        var bNum = parseInt(b.getAttribute('data-num'), 10);

        return aNum - bNum;
      };

      // Sort the platforms
      var cells = [].slice.call($('th.platform')).sort(comparator);

      ordering[sortByFeatures] = $.map(cells, platformOf);
    }

    // Define a comparison function using the orderings
    comparator = function(a, b) {
      return ordering[sortByFeatures].indexOf(platformOf(a))
           - ordering[sortByFeatures].indexOf(platformOf(b));
    };

    // Now sort the columns using the comparison function
    table.detach().find('tr').each(function() {
      var row = $(this);
      var cells = [].slice.call(row.children(), 3 + row.children('script').length)
        .sort(comparator);
      row.append(cells);
    });
    table.insertBefore('#footnotes');
  });
});
