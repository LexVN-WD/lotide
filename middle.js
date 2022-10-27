// IMPORT
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// CODE
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

// EXPORT
module.exports = middle;