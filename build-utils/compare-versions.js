module.exports = function compareVersions(a, b) {
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
};
