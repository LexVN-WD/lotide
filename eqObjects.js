//Assertions
const assertEqual = function(actual, expected) {

  if(actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Code
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
// let keys1 and keys2 equal keys for respective objects
  let result;
// let result equal an empty value
  if(keys1.length !== keys2.length) {
    let result = false
    return result;
// if keys1 length does not equal to keys2 length, result equals FALSE
  }
  for (key of keys1) {
    if (object1[key] === object2[key]) {
      let result = true;
      return result;
// if key value of object1 equals key value of object2, result should equal true
    } else {
      let result = false;
      return false;
// else return false
    }
  }
  return result;
};

//Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const bcd = { b: "2", c: "3", d: "4"};

console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, ba)); // => true

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false