const assertEqual = require('./assertEqual');

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
};

module.exports = tail;