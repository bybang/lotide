// ASSERT ARRAYS EQUAL?
// EQUAL ARRAYS IS NEEDED IN ORDER TO FIRE assertArraysEqual function
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
//{
//  l: [0],
//  i: [1, 11],
//  g: [2],
//  h: [3, 5, 15, 18],
//  t: [4, 14],
//  o: [6, 19],
//  u: [7, 20],
//  s: [8, 21],
//  e: [9, 16, 22],
//  n: [12]
//}
// FIND THE LETTER POSITION AND STORE IT IN EMPTY OBJECT
const letterPositions = function(sentence) {
  /*
  loop through the sentece
  if (letter !== " ")
  and if (result[letter]) doesn't exsist, initialize the result[letter] = []
  then push the index number into result[letter] = []
  */
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = [];
      }
      result[letter].push(i);
    }
  }
  return result;
};

let test = letterPositions("lighthouse in the house");
console.log(test);
assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual(JSON.stringify(letterPositions("lighthouse in the house")), JSON.stringify({
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]}));