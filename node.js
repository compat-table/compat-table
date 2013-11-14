// run `npm install` to install deps first, then `node ./` to execute

var fs = require('fs')
  , colors = require('colors')
  , path = require('path')
  , cheerio = require('cheerio')

  , page = fs.readFileSync(path.join(__dirname, 'es6', 'index.html')).toString()
  , $ = cheerio.load(page)

$('#body tbody tr').each(function () {
  var desc = (function (el) {
        while (el && !el.data)
          el = el.children[0]
        return (el && el.data) || 'ERROR!'
      }(this.find('td>span>a')[1] || this.find('td>span')[0].children[1]))
    , scripts = this.find('script')
    , result = false
    , i = 0, scr

    , test = function test (expression) {
        result = result || expression
      }

  // can be multiple scripts
  for (; scripts[i] && scripts[i].children && scripts[i].children.length; i++) {
    scr = scripts[i].children[0].data.trim()
    eval(scr)
  }

  console.log(((result ? '\u2714' : '\u2718') + '\t' + desc + '\t')[result ? 'green' : 'red'])
})
