const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`👍👍👍 Array Assertion Passed: ${eqArrays} === ${expected}`);
    // if the value of eqArrays is equal to the value of expected, print out Passed
  } else {
    console.log(`👎👎👎 Array Assertion Failed: ${eqArrays} !== ${expected}`);
    // if the value of eqArrays is not equal to the value of expected, print out Failed
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