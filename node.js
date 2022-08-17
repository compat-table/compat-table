/* global Symbol */
// run `npm install` to install deps first, then `node ./` to execute

var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
var cheerio = require('cheerio');
var runner_support = require('./runner_support');

var page = fs.readFileSync(path.join(__dirname, String(process.argv[2] || 'es6').toLowerCase(), 'index.html')).toString().replace(/data-source="[^"]*"/g,'');
var $ = cheerio.load(page);
var results = {};
var desc = {};

global.__script_executed = {};

$('#body tbody tr').each(function (index) {
  if ($(this).find('.separator')[0]) {
    return;
  }
  var scripts = $(this).find('script');
  var i = 0;
  var scr;
  global.test = function test(expression) {
    results[index] = results[index] || expression;
  };
  global.asyncPassed = function asyncPassed() {
    results[index] = true;
  };
  eval(runner_support.createIterableHelper);

  results[index] = null;

  desc[index] = $(this).find('td>span:first-child').text();

  // can be multiple scripts
  for (; scripts[i] && scripts[i].children && scripts[i].children.length; i++) {
    scr = scripts[i].children[0].data.trim()
      .replace(/global\.__asyncPassedFn && __asyncPassedFn\(".*?"\)/g, "asyncPassed");
    eval(scr);
  }
});

process.on('exit', function(){
  Object.keys(results).forEach(function(test) {
    var result = results[test];
    var name = desc[test];
    if (result === null) {
      console.log('\u25BC\t' + name.replace('§',''));
    } else {
      console.log(chalk[result === "Strict" ? 'cyan' : result ? 'green' : 'red']((result ? '\u2714' : '\u2718') + '\t' + (name[0]!== '§' ? '\t' + name : name.slice(1)) + '\t'));
    }
  });
});
