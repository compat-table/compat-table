var parseEnvsVersions = require("./parse-envs-versions");

module.exports = function interpolateAllResults(tests, envs) {
  var envsTree = buildEnvsTree(envs);

  tests.forEach(function (t) {
    // Calculate the result totals for tests which consist solely of subtests.
    [].concat(t.subtests || t).forEach(function (e) {
      interpolateTestResults(e.res, envsTree);
    });
  });
};

function interpolateTestResults(res, envsTree) {
  var bid, prevBid;
  for (bid in envsTree) {
    if (res[bid] !== undefined) continue;

    prevBid = bid;
    do {
      prevBid = envsTree[prevBid];
    } while (prevBid !== null && res[prevBid] === undefined);

    if (prevBid !== null) res[bid] = res[prevBid];
  }
}

// This function returns an object mapping "browser id" -> "parent browser id"
function buildEnvsTree(data) {
  var result = {};
  var envs = parseEnvsVersions(data);

  Object.keys(envs).forEach(function (name) {
    var id = envs[name][0].id;
    result[id] = data[id].equals || null;

    for (var i = 1; i < envs[name].length; i++) {
      id = envs[name][i].id;
      if (data[id].equals === false) result[id] = null;
      else result[id] = data[id].equals || envs[name][i - 1].id;
    }
  });

  return result;
}
