"use strict";

var fs = require("fs");
var path = require("path");
var acorn = require("acorn");

/**
 * Parses a `data-` file, updates/inserts a new value eg "resultKey: result" into the named test's `res` property,
 * and saves the file in place, ready to be reviewed and committed.
 *
 * Usage:
 * updateResult("es5", ["Root test name", "Subtest name"], "graalvm19", "true");
 *
 * @param {string} suite Suite name corresponding to results in ./data-{suite}.js
 * @param {string[]} testPath Array of test names, from top-level to the test to update
 * @param {string} resultKey Key for the engine/runtime under test. Alphanumeric + underscores
 * @param {string} result The *raw* string to insert as the value - eg for a fail, use 'false'
 */
function updateResult(suite, testPath, resultKey, result) {
  var suiteFile = path.join(__dirname, "data-" + suite + ".js");
  var srcString = fs.readFileSync(suiteFile, "utf8");
  var testNodes = parseSourceForRootTestNodes(srcString);
  var testNode;
  var testNameNode;
  var readableTestPath = [];
  for (var i = 0; i < testPath.length; i++) {
    if (!testNodes || testNodes.type !== "ArrayExpression") {
      throw new Error(
        "Expected subtests at " +
          suite +
          ', test "' +
          testPath.slice(0, i + 1).join('" / "') +
          '"'
      );
    }
    testNode = testNodes.elements.find(function (testNode) {
      return getTestName(testNode) === testPath[i];
    });
    if (!testNode) {
      throw new Error(
        'No subtest with name "' +
          testPath[i] +
          '" in ' +
          suite +
          ', test "' +
          testPath.slice(0, i + 1).join('" / "') +
          '"'
      );
    }
    testNameNode = maybeGetPropertyValue(testNode, "name");
    readableTestPath.push(
      testNameNode ? testNameNode.value : ["MISSING TEST NAME"]
    );
    testNodes = maybeGetPropertyValue(testNode, "subtests");
  }
  var resNode = maybeGetPropertyValue(testNode, "res");
  if (!resNode) {
    throw new Error(
      'Missing "res" property on "' + readableTestPath.join('" / "') + '"'
    );
  }

  // Determine the indentation of the line the object begins (ie, left of "{")
  var startOfLine = srcString.lastIndexOf("\n", resNode.start) + 1;
  var indentLength = 0;
  while (srcString[startOfLine + indentLength] === " ") {
    indentLength++;
  }

  var newRawResString = generateNewRawResString(
    srcString,
    indentLength,
    resNode,
    resultKey,
    result
  );
  fs.writeFileSync(
    suiteFile,
    srcString.slice(0, resNode.start) +
      newRawResString +
      srcString.slice(resNode.end)
  );
}

function generateNewRawResString(
  srcString,
  indentLength,
  resNode,
  resultKey,
  result
) {
  var newResRaw;
  var existingValue = maybeGetPropertyValue(resNode, resultKey);
  if (existingValue) {
    newResRaw =
      srcString.slice(resNode.start, existingValue.start) +
      result +
      srcString.slice(existingValue.end, resNode.end);
  } else {
    var indent = " ".repeat(indentLength);
    if (resNode.properties.length === 0) {
      newResRaw =
        "{\n" + indent + "  " + resultKey + ": " + result + "\n" + indent + "}";
    } else {
      var lastProperty = resNode.properties[resNode.properties.length - 1];
      newResRaw =
        srcString.slice(resNode.start, lastProperty.end) +
        ",\n" +
        indent +
        "  " +
        resultKey +
        ": " +
        result +
        "\n" +
        indent +
        "}";
    }
  }
  return newResRaw;
}

function parseSourceForRootTestNodes(srcString) {
  var bodyNodes = acorn.parse(srcString, { ecmaVersion: "2015" }).body;
  var testsArrayNode = bodyNodes.find(function (bodyNode) {
    return (
      bodyNode.type === "ExpressionStatement" &&
      bodyNode.expression.type === "AssignmentExpression" &&
      bodyNode.expression.left.type === "MemberExpression" &&
      bodyNode.expression.left.object.type === "Identifier" &&
      bodyNode.expression.left.object.name === "exports" &&
      bodyNode.expression.left.property.type === "Identifier" &&
      bodyNode.expression.left.property.name === "tests" &&
      bodyNode.expression.right.type === "ArrayExpression"
    );
  });

  if (!testsArrayNode) {
    throw new Error(
      "Could not find exported tests in input file. Expected an assignment of the form export.tests = []"
    );
  }

  return testsArrayNode.expression.right;
}

function maybeGetPropertyValue(node, propertyName) {
  var property = node.properties.find(function (propertyNode) {
    return propertyNode.key.name === propertyName;
  });
  if (!property || !property.value) {
    return null;
  }
  return property.value;
}

function getTestName(testNode) {
  var nameNode = maybeGetPropertyValue(testNode, "name");
  return nameNode ? nameNode.value : null;
}

module.exports = updateResult;
