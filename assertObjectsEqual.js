// IMPORT
const eqObjects = require("./eqObjects");


// CODE
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// EXPORT
module.exports = assertObjectsEqual;