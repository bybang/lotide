// ASSERT EQAUL? FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// COUNT LETTERS FUNCTION
const countLetters = function(allStrings) {
  let resultObj = {};
  for (let letter of allStrings) {
    if (letter !== ' ') {
      if (resultObj[letter]) {
        resultObj[letter] += 1;
      } else {
      resultObj[letter] = 1;
      }
    }
  }
  return resultObj;
};

let test = countLetters("lighthouse in the house");
console.log(test);