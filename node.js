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
    , result = null
	, id = this.find('td').attr('id')
    , i = 0, scr
    , test = function test (expression) {
      results[id] = results[id] || expression
    }
	, asyncTestPassed = function passTest (id) {
	  results[id] = true
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
  
  desc[id] = (function (el) {
    while (el && !el.data)
      el = el.children[0]
    return (el && el.data) || 'ERROR!'
  }(this.find('td>span')[0].children[1]))

  // can be multiple scripts
  for (; scripts[i] && scripts[i].children && scripts[i].children.length; i++) {
    scr = scripts[i].children[0].data.trim()
    eval(scr)
  }
  if (result === null) {
    console.log('\u25BC\t' + desc.replace('§',''))
  }
  else {
    console.log(chalk[result ? 'green' : 'red']((result ? '\u2714' : '\u2718') + '\t' + (desc[0]!== '§' ? '\t' + desc : desc.slice(1)) + '\t'))
  }
})

setTimeout(function(){
  Object.keys(results).forEach(function(test) {
    var result = results[test];
    if (result === null) {
      console.log('\u25BC\t' + desc.replace('§',''))
    }
    else {
      console.log(chalk[result ? 'green' : 'red']((result ? '\u2714' : '\u2718') + '\t' + (desc[0]!== '§' ? '\t' + desc : desc.slice(1)) + '\t'))
    }
  })
},500)
