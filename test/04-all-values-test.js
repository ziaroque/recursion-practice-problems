const assert = require('assert');
const all = require('../solutions/04-all-values.js');

function callback(num) {
  return num < 7;
}

describe('all', () => {
  const tests = ({ array, expected }) =>
    function () {
      const result = all(array, callback);
      assert.strictEqual(result, expected);
    };

  it(
    'should return false if the input array is [1, 2, 9]',
    tests({ array: [1, 2, 9], expected: false })
  );
  it(
    'should return true if the input array is [1, 2, 3]',
    tests({ array: [1, 2, 3], expected: true })
  );
  it(
    'should return false if the input array is [1, 2, 13]',
    tests({ array: [1, 2, 13], expected: false })
  );
});
