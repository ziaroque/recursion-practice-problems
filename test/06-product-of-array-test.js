const assert = require('assert');
const productOfArray = require('../solutions/06-product-of-array.js');

describe('productOfArray', () => {
  const tests = ({ array, expected }) =>
    function () {
      const result = productOfArray(array);
      assert.strictEqual(result, expected);
    };

  it(
    'should return 6 when passed the array [1, 2, 3]',
    tests({ array: [1, 2, 3], expected: 6 })
  );
  it(
    'should return 60 when passed the array [1, 2, 3, 10]',
    tests({ array: [1, 2, 3, 10], expected: 60 })
  );
});
