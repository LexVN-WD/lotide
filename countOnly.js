// CODE
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // create an empty object called results
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
        //for every instance of the item, increase count by 1
      } else {
        results[item] = 1;
        //if the object to count is present, equal 1
      }
    }
  }
  return results;
};

// EXPORT
module.exports = countOnly;