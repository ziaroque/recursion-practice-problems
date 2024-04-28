const assert = require('assert');
const power = require('../solutions/02-power.js');

describe('power', () => {
  const tests = ({ base, exp, expected }) =>
    function () {
      const result = power(base, exp);
      assert.strictEqual(result, expected);
    };

  it(
    'should return 16 when passed the arguments (2, 4)',
    tests({ base: 2, exp: 4, expected: 16 })
  );
  it(
    'should return 8 when passed the arguments (2, 3)',
    tests({ base: 2, exp: 3, expected: 8 })
  );
  it(
    'should return 4 when passed the arguments (2, 2)',
    tests({ base: 2, exp: 2, expected: 4 })
  );
  it(
    'should return 2 when passed the arguments (2, 1)',
    tests({ base: 2, exp: 1, expected: 2 })
  );
  it(
    'should return 1 when passed the arguments (2, 0)',
    tests({ base: 2, exp: 0, expected: 1 })
  );
});
