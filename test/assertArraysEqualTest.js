const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true -> PASSED
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => false -> FAILED
assertArraysEqual([1, 2, 4], [1, 2, 4]); // => true -> PASSED