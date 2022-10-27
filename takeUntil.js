// CODE
const takeUntil = function(array, callback) {
  let results = [];
  for (items of array) {
    if (callback(items) === false) {
      results.push(items);
    } else {
      return results;
    }
  }
  return results;
};

// EXPORT
module.exports = takeUntil;