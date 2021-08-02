const assertEqual = require('./assertEqual');

// FUNCTION FIND KEY
const findKey = function(bigObject, callback) {
  // loop through the object
  let bigObjectkeys = Object.keys(bigObject);
  for (const key of bigObjectkeys) {
    // if key's value matches the given parameter, return the (first) key name
    if (callback(bigObject[key])) {
      return key;
    }
  }
};

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"