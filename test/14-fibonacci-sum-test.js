const assert = require('assert');
const fibonacciSum = require('../solutions/14-fibonacci-sum.js');

describe('fibonacciSum', () => {
  const tests = ({ num, expected }) =>
    function () {
      const result = fibonacciSum(num);
      assert.strictEqual(result, expected);
    };

  it('should return 7 if the input is 4', tests({ num: 4, expected: 7 }));
  it('should return 33 if the input is 7', tests({ num: 7, expected: 33 }));
});
