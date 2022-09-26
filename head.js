const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array === null) {
    // if the array is empty(null), return 'undefined'
    return 'undefined';
  } else {
    // if the array is not empty, return the first element in the array
    return array[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), "Hello");
