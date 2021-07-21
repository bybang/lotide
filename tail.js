// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION RETURNS THE REST OF ARRAY
/*const tail = function(someArray) {
  let firstNum = someArray.slice(0)
  let myArray = [];
  for (let items of someArray) {
    if (items !== firstNum) {
      myArray.push(items);
    }
  }
  return myArray;
};
*/
const tail = function(someArray) {
  let exceptFirstNum = someArray.slice(1);
  return exceptFirstNum;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!