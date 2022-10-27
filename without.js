//IMPORTS
// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// REFACTORED CODE
const without = function(source, itemsToRemove) {
  let sourceEdit = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      sourceEdit.push(source[i]);
    }
  }
  return sourceEdit;
  // changed this from console.log to return
};

module.exports = without;