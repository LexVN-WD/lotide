//IMPORTS
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

/* ORIGINAL CODE
const flatten = function(arrays) {
  return arrays.flat(1);
}; */


// TESTS
/* const nested = [1, 2, [3, 4], 5, [6]];
console.log(flatten(nested));

const nested2 = [1, 2, [3, 4], [5], [6], [7, 8, 9, 10]];
console.log(flatten(nested2));
 */
// EXPORT
module.exports = flatten;