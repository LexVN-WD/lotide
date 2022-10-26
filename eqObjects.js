//IMPORTS
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//REFACTORED CODE
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // let keys1 and keys2 equal keys for respective objects
  if (keys1.length !== keys2.length) {
    return false;
  }
  // if the lengths of keys1 and keys 2 are not equal, return false

  for (const keys of keys1) {
    const isObj1Arr = Array.isArray(object1[keys]);
    const isObj2Arr = Array.isArray(object2[keys]);
    // sets isObj1Arr and isObj2Arr as variables to test if key-values of object 1 and 2 are arrays
    const eqArr = eqArrays(object1[keys], object2[keys]);
    // sets eqArr equal to test object1 and object2 with our eqArrays function
    if (isObj1Arr && isObj2Arr && !eqArr) {
      return false
      // if the key-value of object1 and object2 are arrays, but eqArrays has tested false, return false
    } else if (object1[keys] !== object2[keys] && !isObj1Arr && !isObj2Arr) {
      return false;
      // if key-values of object1 and object2 do not equal each other and either one is an array, return false
    }
  }
  return true;
  // otherwise, return true
};

// ORIGINAL CODE
 /*  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
// let keys1 and keys2 equal keys for respective objects
  let result = true;
// let result equal an empty value
  if(keys1.length === keys2.length) {
    for(const key of keys1) {
      if(Array.isArray(object1[key])) {
        let arrays = eqArrays(object1[key], object2[key]);
        if(arrays === false) result = false;
        } else if (object1[key] !== object2[key]) {
            result = false;
          }
        } 
      } else {
        return result = false;
      }
      return result;
}; */

//EXPORTS
module.exports = eqObjects;