const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === null) {
    // if the array is empty(null), return 'undefined'
    return 'undefined';
  } else {
    // if the array is not empty, return the first element in the array
    return array[0];
  }
};

module.exports = head;