//GOAL

/*Implement the function findKeyByValue which takes in an object and a value.It should scan the object and 
return the first key which contains the given value.If no key with that given value is found, then it should return undefined*/

//Assert
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(objects, value) {
  let keys = Object.keys(bestTVShowsByGenre);
  // find keys from object bestTVShowsByGenre
  let result = " ";
  // let result equal an empty string value
  for (key of keys) {
    if (value === objects[key]) {
      return result = key;
      // for value of keys, if the value is equal to the object key value, result will be equal to key
    }
  }
  return result
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);