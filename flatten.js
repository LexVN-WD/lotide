//IMPORT
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// REFACTORED CODE
const flatten = function(arrays) {
  let newArr = [];
  // create new empty array
  for (const elements of arrays) {
    let nestedArr;
    // create new empty variable to hold nested arrays
    if (!Array.isArray(elements)) {
      newArr.push(elements);
      // if the element of the array is not an array, push the value to the new empty array
    }
    if (Array.isArray(elements)) {
      nestedArr = elements;
      // if the element of the array is an array, make the nestedArr variable equal to this element
      for (const nestedEl of nestedArr) {
        newArr.push(nestedEl);
        // for the nested elements within the nested array, push to the newArr array
      }
    }
  }
  return newArr;
  // return the now flattened array
};

// EXPORT
module.exports = flatten;