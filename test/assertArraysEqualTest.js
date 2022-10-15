const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true -> PASSED
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => false -> FAILED
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => true -> PASSED