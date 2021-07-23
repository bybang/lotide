// MY MAP FUNCTION
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const results1 = map(words, word => word[0]);
//console.log(results1);


// ASSERTION CHECK
const eqArrays = function(fristArray, secondArray) {
  if (fristArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < fristArray.length; i++) {
    if (fristArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ASSERTION TEST
let test1 = map(words, word => word[0]);
console.log(test1);
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(words, ["This", "is", "Array"]);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

const myArray = ["hello", "world", "lighthouse"];
let test2 = map(myArray, myArray => myArray[0]);
console.log(test2);
assertArraysEqual(myArray, ["hello", "world", "lighthouse"]);

let test3 = map(100, myArray => myArray[0]);
console.log(test3);