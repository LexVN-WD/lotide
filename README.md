# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lexvn-wd/lotide`

**Require it:**

`const _ = require('@lexvn-wd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Asserts if two arrays are equal.
* `assertEqual(...)`: Asserts if two values are are equal.
* `assertObjectsEqual(...)`: Asserts if two objects are equal.
* `countLetters(...)`: Takes an array. Outputs an object containing the count of each letter that appeared.
* `countOnly(...)`: Takes an array and object. Returns new object that contains the count of all elements present in the array if it matches requirement.
* `eqArrays(...)`: Checks if two arrays are equal.
* `eqObjects(...)`: Checks if two objects are equal.
* `findKey(...)`: Takes an object and callback condition. If object contains callback condition, return key.
* `findKeyByValue(...)`: Takes an object and a key. Loops through object. Returns key.
* `flatten(...)`: Takes an array with nested arrays. Returns new array containing all elements by removing nested arrays by one level of depth.
* `head(...)`: Takes an array. Returns first value in the array.
* `letterPositions(...)`: Takes a string. Returns object with the letters index position.
* `map(...)`: Takes an array and callback function. Returns array after modification by callback function.
* `middle(...)`: Takes an array. Returns empty array if array.length <= 2. Returns middle value if array length is odd. Returns middle two values if even.
* `tail(...)`: Takes an array. Returns all elements except the first one.
* `takeUntil(...)`: Takes an array and a callback function. Return array items until callback requirement is satisfied.
* `without(...)`: Takes 2 arrays. Returns a new array without the items listed in itemsToRemove.