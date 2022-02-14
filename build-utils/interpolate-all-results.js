var parseEnvsVersions = require("./parse-envs-versions");

module.exports = function interpolateAllResults(tests, envs, customResults = {}) {
  var envsTree = buildEnvsTree(envs);

  tests.forEach(function (t) {
    const customRes = customResults[t.name];

    // Calculate the result totals for tests which consist solely of subtests.
    [].concat(t.subtests || t).forEach(function (e) {
      const res = e.res;

      if (customRes) {
        if (e === t) { // not a subtest
          Object.assign(res, customRes);
        } else {
          Object.assign(res, customRes.subtests[e.name]);
          delete customRes.subtests[e.name];
        }
      }

      interpolateTestResults(res, envsTree);
    });

    if (customRes?.subtests) {
      const invalidSubTests = Object.keys(customRes.subtests)
      if (invalidSubTests.length) {
        console.warn(`Invalid custom subtest results for '${t.name}'`, invalidSubTests);
      }
    }

    delete customResults[t.name];
  });

  const invalidTests = Object.keys(customResults);
  if (invalidTests.length) {
    console.warn(`Invalid custom results`, invalidTests);
  }
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
