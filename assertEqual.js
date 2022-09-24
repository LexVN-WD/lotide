const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //Failed
assertEqual(1, 1); //Passed
assertEqual(15, 16); //Failed
assertEqual('hello', 'goodbye'); //Failed
assertEqual('works', 'works'); //Passed