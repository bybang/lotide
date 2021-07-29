// FUNCTION EQUAL ARRAYS

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

module.exports = eqArrays;