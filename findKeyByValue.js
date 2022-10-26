// IMPORTS
const assertEqual = require('./assertEqual');

//REFACTORED CODE
const findKeyByValue = function(objects, value) {
  const keys = Object.keys(objects);
  // create variable keys that will list object's keys
  let keyFound;
  // create empty variable to store key once found

  for (const key of keys) {
    if (objects[key] !== value) {
      keyFound = undefined;
      // if the object key-value does not equal the search value (or doesn't exist), return undefined
    } else {
      keyFound = key;
      // otherwise the search value has been found and keyFound is equal to the current key
    }
  }
  return keyFound;
  // return the value for keyFound
};

/* ORIGINAL CODE
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
  return result;
}; */


/* TESTS
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue({"a": 1, "b": 2}, 2));
 */

// EXPORTS

module.exports = findKeyByValue;