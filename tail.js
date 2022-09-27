const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result[1], "Labs");