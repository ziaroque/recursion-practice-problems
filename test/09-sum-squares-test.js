const assert = require('assert');
const sumSquares = require('../solutions/09-sum-squares.js');

describe('sumSquares', () => {
  const tests = ({ array, expected }) =>
    function () {
      const result = sumSquares(array);
      assert.strictEqual(result, expected);
    };

  it(
    'should return 14 if the input array is [1, 2, 3]',
    tests({ array: [1, 2, 3], expected: 14 })
  );

  it(
    'should return 14 if the input array is [[1, 2], 3]',
    tests({ array: [[1, 2], 3], expected: 14 })
  );

  it(
    'should return 1 if the input array is [[[[[[[[[1]]]]]]]]]',
    tests({ array: [[[[[[[[[1]]]]]]]]], expected: 1 })
  );

  it(
    'should return 400 if the input array is [10, [[10], 10], [10]]',
    tests({ array: [10, [[10], 10], [10]], expected: 400 })
  );
});
