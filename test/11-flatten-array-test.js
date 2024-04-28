const assert = require('assert');
const flatten = require('../solutions/11-flatten-array.js');

describe('flatten', () => {
  const tests = ({ array, expected }) =>
    function () {
      const result = flatten(array);
      assert.deepStrictEqual(result, expected);
    };

  it(
    'should return [6,5,4,3,2,1] if the input array is [[], 6, [5], [4, 3], [[2], 1]]',
    tests({
      array: [[], 6, [5], [4, 3], [[2], 1]],
      expected: [6, 5, 4, 3, 2, 1],
    })
  );

  it(
    'should return ["nine",8,7,6,5,4,3,2,1] if the input array is ["nine", [[8], [7, 6]], [5], [4, 3], [[2], 1]]',
    tests({
      array: ['nine', [[8], [7, 6]], [5], [4, 3], [[2], 1]],
      expected: ['nine', 8, 7, 6, 5, 4, 3, 2, 1],
    })
  );
});
