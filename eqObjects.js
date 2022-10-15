//Assertions
const assertEqual = function(actual, expected) {

  if(actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays Function
const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
      // if value at array1 index does not equal to value at array2 index, return false 
    }
  }
  return true;
  // loop through all options first to make sure we find something that is false FIRST, then return true if there are none
};

//Code
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
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
};

//Tests (primitive values) (PASSED)
/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const bcd = { b: "2", c: "3", d: "4"};

console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, ba)); // => true

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false*/

// // Arrays as Values test
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;