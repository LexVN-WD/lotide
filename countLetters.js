//ASSERT
const assertEqual = require('./assertEqual');

//CODE
//(1): take sentence as a string, return count of each of the letters in that sentence
//(example): countLetters('LHL') should return L: 2 and H: 1

const countLetters = (sentence) => {
  const letters = sentence.split("");
  console.log(letters);
  //split the sentence into an array of letters
  const results = {};
  //let result be an empty object
  for (let letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

//countLetters("hello hello hello yo this is weird");

module.exports = countLetters;