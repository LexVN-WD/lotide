const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  }
};



assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true -> PASSED
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => false -> FAILED
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => true -> PASSED