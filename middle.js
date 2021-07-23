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
  }
  
  const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
    }
  }

// FUNCTION MIDDLE

  const middle = function(myArray) {
    let emptyArray = []
      if (myArray.length <= 2) { 
        return [];
      } else if (myArray.length % 2 !== 0) {
        emptyArray.push(myArray[Math.floor(myArray.length / 2)])
        return emptyArray
      } else if (myArray.length % 2 === 0) {
        emptyArray.push(myArray[(myArray.length / 2)-1])
        emptyArray.push(myArray[myArray.length / 2])
        return emptyArray
      }
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
middle(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);