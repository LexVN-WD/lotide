// IMPORT
const assertEqual = require('./assertEqual');

// REFACTORED CODE
const tail = function(array) {
   let arrLength = array.length;
   if (arrLength === 0) {
    console.log("I'm Here");
    return [];
   } else if (arrLength === 1) {
    return [];
   } else {
    console.log("Im Over Here");
    return array.slice(1);
   }
};

// EXPORT
module.exports = tail;