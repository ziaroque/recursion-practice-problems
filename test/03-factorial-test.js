const assert = require('assert');
const factorial = require('../solutions/03-factorial.js');

describe('factorial', () => {
  const tests = ({ num, expected }) =>
    function () {
      const result = factorial(num);
      assert.strictEqual(result, expected);
    };

  it('should return 120 if the input is 5', tests({ num: 5, expected: 120 }));
  it('should return 24 if the input is 4', tests({ num: 4, expected: 24 }));
  it('should return 6 if the input is 3', tests({ num: 3, expected: 6 }));
  it('should return 2 if the input is 2', tests({ num: 2, expected: 2 }));
  it('should return 1 if the input is 1', tests({ num: 1, expected: 1 }));
  it('should return 1 if the input is 0', tests({ num: 0, expected: 1 }));
});
