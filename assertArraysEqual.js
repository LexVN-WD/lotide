const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`👍👍👍 Array Assertion Passed: ${eqArrays} === ${expected}`);
    // if the value of eqArrays is equal to the value of expected, print out Passed
  } else {
    console.log(`👎👎👎 Array Assertion Failed: ${eqArrays} !== ${expected}`);
    // if the value of eqArrays is not equal to the value of expected, print out Failed
  }
};


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true -> PASSED
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => false -> FAILED
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => true -> PASSED