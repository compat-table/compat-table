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
  document.write('<td class="' + result.toLowerCase() + '">' + result + '</td><td></td>');
};

document.write('<style>td:nth-of-type(2) { outline: #aaf solid 3px; }</style>');

$(function() {
  'use strict';
  var table = $('#table-wrapper');
  var currentBrowserSelector = ":nth-of-type(2)";

  // Set up the Show Obsolete checkbox
  $('#show-obsolete').on('click', function() {
      var elem = $(this);
      elem.attr('value', elem.attr('value') === 'on' ? 'off' : 'on');

      $('.desktop')[0].colSpan = elem.prop('checked') ? 33 : 16;
    })
    .attr('value', $('#show-obsolete').checked);

  var mouseoverTimeout;

  // Work out tallies for the current browser's tally features
  $('tr:not(.subtest)').each(function() {
    var tr = $(this);
    var subtests = tr.nextUntil('tr:not(.subtest)');
    if (subtests.length === 0) {
      return;
    }
    var tally = subtests.find(".yes" + currentBrowserSelector).length;
    tr.find('td' + currentBrowserSelector).before(
      '<td class="tally" data-tally="' + tally/subtests.length + '">' +
      tally + '/' + subtests.length + '</td><td></td>'
    );
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
        var tooltip = $(this);

        infoTooltip.html(
            scriptTag.attr('data-source')
            // trim sides, and escape <
            .replace(/^\s*|\s*$/g, '').replace(/</g, '&lt;')
          )
          .offset({
            left: e.pageX + 10,
            top: e.pageY
          })
          .show();
      })
      .on('mouseleave', function() {
        mouseoverTimeout = setTimeout(function() {
          if (mouseoverTimeout) {
            $(this).hide();
          }
        }, 500);
      });
  });

  // Function to retrieve the platform name of a given <td> cell
  function platformOf(elem) {
    return ($(elem).attr('class') || '')
        .replace(/(?:on\-applicable|yes|no|obsolete|selected|hover|tally)(?:\s|$)|\s/g, '');
  }

  // Since you can't add a :hover effect for columns,
  // these handlers must suffice.
  function addRemoveHover(name) {
    return function() {
      var c = platformOf(this);
      if (c) {
        $("." + c)[name]('hover');
      }
    };
  }
  table
    .on('mouseenter', 'td', addRemoveHover('addClass'))
    .on('mouseleave', 'td', addRemoveHover('removeClass'));

  // Cell highlighting function
  function highlightSelected(elem) {
    table.find('.selected').removeClass('selected');

    elem.addClass('selected');
    table.addClass('one-selected');
  }

  $(document).on('click', function removeHighlighting(event) {
    // Don't remove all dimming if another link was clicked in this event.
    if ($(event.target).is('[href],[href] *'))
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
        highlightSelected(table.find('td' + currentBrowserSelector + ', td.' + elem.attr('href').slice(1)));
      }
    }
  };
  window.onhashchange();
  
  // browser engine color stripes
  function getBrowserColour(name) {
    /* Trident */
    if (/^ie/.exec(name)) { 
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
    if (/^(chrome|node)/.exec(name)) {
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
  $('.browser-name, th.current').each(function(i) {
    var elem = $(this);
    var name;

    if (elem.is('.browser-name')) {
      name = elem.attr('href').replace("#", '.');
      elem = elem.parent();
    }
    else {
      name = currentBrowserSelector;
    }
    var results = table.find('tr:not(.subtest) td:not(.not-applicable)' + name);
    var yesResults = results.filter('.yes, [data-tally="1"]');
    var featuresCount = yesResults.length / results.length;

    var colour = getBrowserColour(elem.attr('class'));
    elem
      .attr('data-num', i)
      .attr('data-features', featuresCount)
      .append('<sup class="num-features" title="Number of implemented features">' +
        // Don't bother with a HSL fallback for IE 8.
        '<b style="color:hsl(' + (featuresCount * 120|0) + ',100%,25%)">' +
        yesResults.length +
        '</b>/' +
        results.length + '</sup>')
      // Fancy bar graph background garnish (again, no fallback required).
      .css({'background-image':'linear-gradient(to top, ' +
        colour + ' 0%, ' + colour + ' ' +
        (featuresCount * 100|0) + '%, transparent ' + (featuresCount * 100|0) +
        '%,transparent 100%)'});
  });

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
      var platforms = $('th.current').parent();

      var cells = [].slice.call(platforms.children('[data-features]:not(.current)'))
        .sort(comparator);

      ordering[sortByFeatures] = $.map(cells, function(e) {
        return e.className;
      });
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
