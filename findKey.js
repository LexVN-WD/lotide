// IMPORT
const assertEqual = require('./assertEqual');

// CODE
const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

// EXPORT
module.exports = findKey;