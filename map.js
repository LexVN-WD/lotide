// IMPORT
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

// CODE
const map = function(array, callback) {

  const results = [];

  for (let element of array) {
    results.push(callback(element));
  }
  return results;
};

// EXPORT
module.exports = map;