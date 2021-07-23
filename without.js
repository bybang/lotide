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
/*
compare two arrays
let resultArray = []
if (firstArray[i] === secondArray[i])
then remove secondArray[i] from firstArray[i] >>> how?
push this value into resultArray
return resultArray
end
*/



const without = function (source, itemsToRemove) {
  let resultArray = [];
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      resultArray.push(source[i]);
    }
  }
  return resultArray;
}
//  let resultArray = [];
//  if (source[i] === itemsToRemove[i]) {
//    


//TEST CODE
let t1 = without([1, 2, 3], [1]) // => [2, 3]
let t2 = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
console.log(t1);
console.log(t2);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);