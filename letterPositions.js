// CODE
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (letters of sentence) {
    if (results[letters]) {
      results[letters].push(index);
    } else {
      results[letters] = [index];
      //if the property of object results equals to letters string, push array value
      // since results[letter] can be read as:
      // results = {} = object
      // [letters] = whatever the value is in the array with an empty array as its property
      // CAN BE READ AS {h:[] } for the first letter h
      // we are telling RESULTS that we want the first letter of our 'for' loop to be an object with the property of empty array
      // we then push that array index starting at 0 into that property as an array value
      // if the object is already present (when we run into multiples of the same object value)
      // we push the current location of the objects index position into the same object property
    }
    index++;
    // increase index by 1 per loop
  }
  // logic to update results here
  return results;
};

// EXPORT
module.exports = letterPositions;