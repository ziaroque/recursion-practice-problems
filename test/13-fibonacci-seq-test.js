const assert = require('assert');
const fibonacciSeq = require('../solutions/13-fibonacci-seq.js');

describe('fibonacciSeq', () => {
  const tests = ({ num, expected }) =>
    function () {
      const result = fibonacciSeq(num);
      assert.deepStrictEqual(result, expected);
    };

  it(
    'should return [0,1,1,2,3,5] if the input is 6',
    tests({ num: 6, expected: [0, 1, 1, 2, 3, 5] })
  );
  it(
    'should return [0,1,1,2,3,5,8,13,21,34,55,89] if the input is 12',
    tests({ num: 12, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] })
  );
});
