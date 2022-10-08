//eqArrays FUNCTION
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
      // if value at array1 index does not equal to value at array2 index, return false 
    }
  }
  return true;
  // loop through all options first to make sure we find something that is false FIRST, then return true if there are none
};

// eqObjects FUNCTION
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // let keys1 and keys2 equal keys for respective objects
  let result = true;
  // let result equal an empty value
  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (Array.isArray(object1[key])) {
        let arrays = eqArrays(object1[key], object2[key]);
        if (arrays === false) result = false;
      } else if (object1[key] !== object2[key]) {
        result = false;
      }
    }
  } else {
    return result = false;
  }
  return result;
};

//Code

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);
