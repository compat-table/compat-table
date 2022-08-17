var fs = require('fs');

var environments = JSON.parse(fs.readFileSync('environments.json').toString());

// List of keys for inheriting results from previous versions.
exports.keyList = function keyList(key, family) {
    var res = [];
    for (var k in environments) {
        var env = environments[k];
        if (env.family !== family) {
            continue;
        }
        res.push(k);
        if (k === key) {
            // Include versions up to 'key' but not newer.
            break;
        }
    }
    return res;
};