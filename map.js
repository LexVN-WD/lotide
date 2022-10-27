// CODE
const map = function(array, callback) {

  const results = [];

  for (let element of array) {
    results.push(callback(element));
  }
  return results;
};

// EXPORT
module.exports = map;