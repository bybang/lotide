// modified middleTest with mocha and chai
const assert = require('chai').assert;
const middle   = require('../middle');

describe('#middle', () => {
  it("returns [ 'world' ] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(middle(['hello', 'world', 'lighthouse']), ['world']);
  });
  it("returns ['I', 'am'] for ['Hola', 'I', 'am', 'Korean']", () => {
    assert.deepEqual(middle(['Hola', 'I', 'am', 'Korean']), ['I', 'am']);
  });
});