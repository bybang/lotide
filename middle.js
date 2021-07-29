// FUNCTION MIDDLE

const middle = function(myArray) {
  let emptyArray = [];
  if (myArray.length % 2 !== 0 && myArray.length >= 2) {
    emptyArray.push(myArray[Math.floor(myArray.length / 2)]);
  } else if (myArray.length % 2 === 0 && myArray.length >= 2) {
    emptyArray.push(myArray[(myArray.length / 2) - 1]);
    emptyArray.push(myArray[myArray.length / 2]);
  }
  return emptyArray;
};

module.exports = middle;