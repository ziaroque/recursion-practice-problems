const assert = require('assert');
const some = require('../solutions/05-some-values.js');

function callback(num) {
  return num < 7;
}

describe('some', () => {
  const testAdd = ({ array, expected }) =>
    function () {
      const result = some(array, callback);
      assert.strictEqual(result, expected);
    };

  it(
    'should return true if the input array is [1, 2, 9]',
    testAdd({ array: [1, 2, 9], expected: true })
  );
  it(
    'should return true if the input array is [1, 2, 3]',
    testAdd({ array: [1, 2, 3], expected: true })
  );
  it(
    'should return false if the input array is [11, 12, 13]',
    testAdd({ array: [11, 12, 13], expected: false })
  );
});
