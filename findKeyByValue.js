// REFACTORED CODE
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  // create variable keys that will list object's keys
  let keyFound;
  // create empty variable to store key once found

  for (const key of keys) {
    if (object[key] !== value) {
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

// EXPORT
module.exports = findKeyByValue;