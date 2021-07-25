// EQUAL ARRAYS?
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

// EQUAL OBJECTS? FUNCTION
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //loop throuh the keys returned by Object.keys for one obj
    //for ..of
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// ASSERT OBJECTS EQUAL FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅️✅️✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let t1 = assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
let t2 = assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 3, c: 5});
let t3 = assertObjectsEqual({a: 1, b: 2, c: {ab: 1, bc: 2}}, {a: 1, b: 2, c: {ab: 1, bc: 2}});
let t4 = assertObjectsEqual({a: 1, b: 2, c: {ab: "me", bc: 34}}, {a: 1, b: 2, c: {ab: 1, bc: 2}});

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);

//console.log(`Example label: ${inspect(actual)}`);
