//IMPORTS
const assertEqual = require('./assertEqual');

// REFACTORED CODE
const tail = function(array) {
   let arrLength = array.length;
   if (array === []) {
    return [];
   } else if (arrLength === 1) {
    return [];
   } else {
    return array.slice(1);
   }
};

// TESTS
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const words2 = ["hello"];
// console.log(tail(words2));
// assertEqual(words2.length, 1);

// const words3 = [];
// console.log(tail(words3));
// assertEqual(words3.length, 0);



/* ORIGINAL CODE
const tail = function(array) {
  if (array === null) {
    // if the array is empty(null), return empty array
    return array[null];
  } else if (array.length === 1) {
    // if the array has only 1 value, return empty array
    return array[null];
  } else {
    return array.slice(1);
    // else, return array starting at index 1
  }
}; */

module.exports = tail;