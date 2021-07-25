//ASSERT EQUAL? FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let t1 = assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let t2 = assertEqual(eqObjects(cd, cd2), false); // => false

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false
//assertEqual(eqObjects(ab, ba), true)
//let t1 = eqObjects(ab, ba)
//let t2 = eqObjects(ab, abc)
console.log(t1);
console.log(t2);

