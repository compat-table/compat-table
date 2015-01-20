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

$('#body tbody tr').each(function (index) {
  if ($(this).find('.separator')[0])
    return
  var scripts = $(this).find('script')
    , i = 0, scr
    , test = function test (expression) {
      results[index] = results[index] || expression
    }
	, asyncPassed = function asyncPassed () {
	  results[index] = true
    }
    , __createIterableObject = function(a, b, c) {
      if (typeof Symbol === "function" && Symbol.iterator) {
        var arr = [a, b, c, ,]
          , iterable = {
            next: function() {
              return { value: arr.shift(), done: arr.length <= 0 }
            }
          }
        iterable[Symbol.iterator] = function(){ return iterable; }
        return iterable;
      }
      else {
        return eval("(function*() { yield a; yield b; yield c; }())")
      }
    }
  
  results[index] = null
  
  desc[index] = $(this).find('td>span:first-child').text()

  // can be multiple scripts
  for (; scripts[i] && scripts[i].children && scripts[i].children.length; i++) {
    scr = scripts[i].children[0].data.trim()
      .replace(/global\.__asyncPassedFn && __asyncPassedFn\(".*?"\)/g, "asyncPassed")
    eval(scr)
  }
})

setTimeout(function(){
  Object.keys(results).forEach(function(test) {
    var result = results[test]
    var name = desc[test]
    if (result === null) {
      console.log('\u25BC\t' + name.replace('§',''))
    }
    else {
      console.log(chalk[result ? 'green' : 'red']((result ? '\u2714' : '\u2718') + '\t' + (name[0]!== '§' ? '\t' + name : name.slice(1)) + '\t'))
    }
  })
},500)
