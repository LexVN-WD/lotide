// CODE
const countLetters = function(sentence) {
  const letterCount= {};
  for (const letters of sentence) {
    if (letters !== ' ') {
      if (letterCount[letters]) {
        letterCount[letters] += 1;
      } else {
        letterCount[letters] = 1
      }
    }
  }
  return letterCount;
};

// EXPORT
module.exports = countLetters;