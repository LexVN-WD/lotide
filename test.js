const eqArrays = function (arr1, arr2) {
  let value1 = arr1;
  let value2 = arr2;
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const value of arr1){
    if (arr1[value] !== arr2[value]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true -> PASSED
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => false -> FAILED
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => true -> PASSED