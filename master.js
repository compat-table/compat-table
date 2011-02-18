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
document.write('<style>td:nth-child(3) { outline: #aaf solid 3px; }</style>');

window.onload = function() {
  document.body.className += ' hide-old-browsers';
  document.getElementById('show-old-browsers-wrapper').style.display = '';
  document.getElementById('show-old-browsers').onclick = function() {
    if (this.checked) {
      document.body.className = document.body.className.replace('hide-old-browsers', '');
    }
    else {
      document.body.className += 'hide-old-browsers';
    }
  };
};