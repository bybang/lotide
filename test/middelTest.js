// EQARRAYS FUNCTION
// const eqArrays = require('../eqArrays') => don't need it here
// ASSERT ARRAYS EQUAL?
const assertArraysEqual = require("../assertArraysEqual");
const middle = require('../middle');

// TEST CODE
const words = ["hello", "world", "lighthouse"];
const words2 = ["Hola", "I", "am", "Korean"];
let test = middle(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(test); // just for test
let test2 = middle(words2, ["I", "am"]);
console.log(test2); //just for test 2


assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words2, ["Hola", "I am", "Korean"]); // false case;