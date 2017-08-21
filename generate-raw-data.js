var fs = require('fs');
var path = require('path');

var RAW_DATA_DIR = 'raw-data';

function omitTests(test) {
  if (test.subtests) {
    test.subtests = test.subtests.map(omitTests);
    return test;
  }
  delete test.exec;
  return test;
}

function processFile(file) {
  var content = require('./data-' + file + '.js').tests.map(omitTests);
  var json = JSON.stringify(content, null, 2);
  var fileName = 'data-' + file + '.json';
  fs.writeFile(path.join(__dirname, RAW_DATA_DIR, file), json, function (err) {
    if (err) throw err;
    console.log(fileName + ' generated.');
  });
}

if (!fs.existsSync(RAW_DATA_DIR)){
  fs.mkdirSync(RAW_DATA_DIR);
}
['es5', 'es6', 'es2016plus', 'esnext', 'esintl', 'non-standard'].map(processFile);
