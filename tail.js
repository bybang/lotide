// FUNCTION IMPLEMENTATION

// FUNCTION RETURNS THE REST OF ARRAY
/*const tail = function(someArray) {
  let firstNum = someArray.slice(0)
  let myArray = [];
  for (let items of someArray) {
    if (items !== firstNum) {
      myArray.push(items);
    }
  }
  return myArray;
};
*/
const tail = function(someArray) {
  let exceptFirstNum = someArray.slice(1);
  return exceptFirstNum;
};

module.exports = tail