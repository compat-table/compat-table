var RE = {
  engine: /^(\w+?)(tp|[\d_]+)?(?:corejs[23])?$/,
  version: /^(\d{4})(\d{2})(\d{2})$|^(\d+)(?:_(\d+))?(?:_(\d+))?$/
};

module.exports = buildEnvsTree;

// This function returns an object mapping "browser id" -> "parent browser id"
function buildEnvsTree(data) {
  var result = {};
  var envs = Object.create(null);

  Object.keys(data).forEach(function (id) {
    var parsed = parseEnvId(id);
    if (!envs[parsed.name]) envs[parsed.name] = [];
    envs[parsed.name].push(parsed);
  });

  Object.keys(envs).forEach(function (name) {
    envs[name].sort(compareVersions);

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

function parseEnvId(id) {
  var result = { id: id };

  var match = id.match(RE.engine);
  if (!match) throw new Error("Unable to parse environment id: " + id);

  result.name = match[1];
  result.version = parseVersion(match[2]);

  return result;
}

function parseVersion(version) {
  if (!version) return null;

  if (version === "tp") return ["tp"];

  var match = version.match(RE.version);
  if (!match) throw new Error("Unable to parse environment version: " + version);

  if (match[1]) return match.slice(1, 4).map(Number);

  var result = [];
  for (var i = 4; i <= 6 && match[i]; i++) result.push(Number(match[i]));

  return result;
}

function compareVersions(a, b) {
  var vA = a.version;
  var vB = b.version;

  if (!vA && !vB) return 0;
  if (!vB) return 1;
  if (!vA) return -1;

  for (var i = 0; i < vA.length && i < vB.length; i++) {
    if (vA[i] === "tp" && vB[i] === "tp") continue;
    if (vA[i] === "tp") return 1;
    if (vB[i] === "tp") return -1;
    if (vA[i] > vB[i]) return 1;
    if (vA[i] < vB[i]) return -1;
  }

  if (vA.length > vB.length) return 1;
  if (vA.length < vB.length) return -1;

  return 0;
}
