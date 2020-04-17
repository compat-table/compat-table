var compareVersions = require("./compare-versions");

var RE = {
  engine: /^(\w+?)(tp|[\d_]+)?(?:corejs[23])?$/,
  version: /^(\d{4})(\d{2})(\d{2})$|^(\d+)(?:_(\d+))?(?:_(\d+))?$/
};

module.exports = function parseEnvsVersions(data) {
  var envs = Object.create(null);

  Object.keys(data).forEach(function (id) {
    var parsed = parseEnvId(id);
    if (!envs[parsed.name]) envs[parsed.name] = [];
    envs[parsed.name].push(parsed);
  });

  Object.keys(envs).forEach(function (name) {
    envs[name].sort(compareVersions);
  });

  return envs;
};

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




