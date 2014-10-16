// run `npm install` to install deps first, then `node ./` to execute

var fs = require('fs')
  , chalk = require('chalk')
  , path = require('path')
  , cheerio = require('cheerio')

  , page = fs.readFileSync(path.join(__dirname, 'es6', 'index.html')).toString().replace(/data-source="[^"]*"/g,'')
  , $ = cheerio.load(page)
  , results = {}
  , desc = {}
  , done = false

global.__script_executed = {};

$('#body tbody tr').each(function () {
  if (this.find('.separator')[0])
    return
  var scripts = this.find('script')
    , result = false
	, id = this.find('td').attr('id')
    , i = 0, scr
    , test = function test (expression) {
      results[id] = results[id] || expression
    }
	, asyncTestPassed = function asyncTestPassed () {
	  results[id] = true
    }
  
  desc[id] = (function (el) {
    while (el && !el.data)
      el = el.children[0]
    return (el && el.data) || 'ERROR!'
  }(this.find('td>span')[0].children[1]))

  // can be multiple scripts
  for (; scripts[i] && scripts[i].children && scripts[i].children.length; i++) {
    scr = scripts[i].children[0].data.trim()
      .replace(/global\.__asyncPassedFn && __asyncPassedFn\(".*?"\)/g, "asyncTestPassed")
    eval(scr)
  }
})

setTimeout(function(){
  Object.keys(results).forEach(function(test) {
    console.log(chalk[results[test] ? 'green' : 'red']((results[test] ? '\u2714' : '\u2718') + '\t' + desc[test] + '\t'))
  })
},500)
