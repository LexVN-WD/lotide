//TEST ASSERTIONS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays == expected) {
    console.log(`👍👍👍 Array Assertion Passed: ${eqArrays} === ${expected}`);
    // if the value of eqArrays is equal to the value of expected, print out Passed
  } else {
    console.log(`👎👎👎 Array Assertion Failed: ${eqArrays} !== ${expected}`);
    // if the value of eqArrays is not equal to the value of expected, print out Failed
  }
};

// MAIN CODE

const middle = function(arrays) {
  if (arrays.length <= 2) {
    return [];
    // if array length is less than or equal to 2 elements, return empty array
  }
  let mid = arrays.length / 2;
  // let mid equal to the array length divided by 2
  if (arrays.length % 2 === 1) {
    // if the array length divisible by 2 leaves 1 as a remainder, it is an odd number
    return [arrays[Math.floor(mid)]];
    //return the middle value
  } else {
    return [
      arrays[mid - 1],
      arrays[mid],
    ];
    // if the array length divisible by 2 equals 0, its even. Return both the first and second middle value
  }
};


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), 2);