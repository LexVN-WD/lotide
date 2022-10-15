// Assertions
const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  }
};

// CODE
const takeUntil = function (array, callback) {
  let results = [];

  for (items of array) {
    if (callback(items) === false) {
      results.push(items)
    } else {
      return results;
    }
  }
  return results;
  // ...
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

module.exports = takeUntil;