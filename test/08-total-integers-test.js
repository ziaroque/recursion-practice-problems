const assert = require('assert');
const totalIntegers = require('../solutions/08-total-integers.js');

describe('totalIntegers', () => {
  const tests = ({ array, expected }) =>
    function () {
      const result = totalIntegers(array);
      assert.strictEqual(result, expected);
    };

  it(
    'should return 7 if the input array is [[[1], 2], 3, 4, ["foo"], [], [5, [6, 7]]]',
    tests({ array: [[[1], 2], 3, 4, ['foo'], [], [5, [6, 7]]], expected: 7 })
  );
  it(
    'should return 5 if the input array is [[1, 2], "three", [4, [5, 6]]]',
    tests({ array: [[1, 2], 'three', [4, [5, 6]]], expected: 5 })
  );
});
