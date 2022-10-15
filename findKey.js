// Assertions
const assertEqual = require('./assertEqual');

// Goal
/*Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback
returns a truthy value.If no key is found, then it should return undefined. */

// Code
const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (key of keys) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

// Example/tests

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2)); // => "noma"

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 1)); // => "Blue Hill"

// assertEqual((findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 1)), "Blue Hill"); // => "Blue Hill")

module.exports = findKey;