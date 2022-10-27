// REFACTORED CODE
const tail = function(array) {
   let arrLength = array.length;
   if (arrLength === 0) {
    return [];
   } else if (arrLength === 1) {
    return [];
   } else {
    return array.slice(1);
   }
};

// EXPORT
module.exports = tail;