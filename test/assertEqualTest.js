const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //Failed
assertEqual(1, 1); //Passed
assertEqual(15, 16); //Failed
assertEqual('hello', 'goodbye'); //Failed
assertEqual('works', 'works'); //Passed