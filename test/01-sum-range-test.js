const assert = require('assert');
const sumRange = require('../solutions/01-sum-range.js');

describe('sumRange', () => {
  const tests = ({ num, expected }) =>
    function () {
      const result = sumRange(num);
      assert.strictEqual(result, expected);
    };

  it('should return 6 if the input is 3', tests({ num: 3, expected: 6 }));
  it('should return 3 if the input is 2', tests({ num: 2, expected: 3 }));
  it('should return 1 if the input is 1', tests({ num: 1, expected: 1 }));
  it('should return 0 if the input is 0', tests({ num: 0, expected: 0 }));
  it(
    'should return null if the input is -7',
    tests({ num: -7, expected: null })
  );
});
