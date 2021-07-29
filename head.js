// FUNCTION IMPLEMENTATION

// FUNCTION RETURN FIRST ITEM IN THE ARRAY
const head = function(someArray) {
  return someArray[0];
};

module.exports = head;

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head