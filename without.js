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

const without = function (source, itemsToRemove) {
  let sourceEdit = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      sourceEdit.push(source[i]);
    }
  }
  console.log(sourceEdit);
}

without([1, 2, 3], [1]); // => [2, 3]

without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);