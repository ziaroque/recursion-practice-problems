const assert = require('assert');
const fibonacci = require('../solutions/12-fibonacci.js');

describe('fibonacci', () => {
  const tests = ({ num, expected }) =>
    function () {
      const result = fibonacci(num);
      assert.strictEqual(result, expected);
    };

  it('should return 3 if the input is 4', tests({ num: 4, expected: 3 }));
  it('should return 13 if the input is 7', tests({ num: 7, expected: 13 }));
  it('should return 377 if the input is 14', tests({ num: 14, expected: 377 }));
  it(
    'should return 4181 if the input is 19',
    tests({ num: 19, expected: 4181 })
  );
});
