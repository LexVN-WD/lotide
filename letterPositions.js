//Assertions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  }
};

//Code
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (letters of sentence) {
    if (results[letters]) {
      results[letters].push(index);
    } else {
      results[letters] = [index];
      //if the property of object results equals to letters string, push array value
      // since results[letter] can be read as:
      // results = {} = object
      // [letters] = whatever the value is in the array with an empty array as its property
      // CAN BE READ AS {h:[] } for the first letter h
      // we are telling RESULTS that we want the first letter of our 'for' loop to be an object with the property of empty array
      // we then push that array index starting at 0 into that property as an array value
      // if the object is already present (when we run into multiples of the same object value)
      // we push the current location of the objects index position into the same object property
    }
    index++;
    // increase index by 1 per loop
  }
  // logic to update results here
  return results;
};

// console.log(letterPositions("hello"));

// assertArraysEqual(letterPositions("hello").e, [1]);


//for (let i = 0; i < sentence.length; i++) {

module.exports = letterPositions;