const assert = require('assert');
const replicate = require('../solutions/10-replicate.js');

describe('replicate', () => {
  const tests = ({ times, num, expected }) =>
    function () {
      const result = replicate(times, num);
      assert.deepStrictEqual(result, expected);
    };

  it(
    'should return [5, 5, 5] if the inputs are (3, 5)',
    tests({ times: 3, num: 5, expected: [5, 5, 5] })
  );

  it(
    'should return [69] if the inputs are (1, 69)',
    tests({ times: 1, num: 69, expected: [69] })
  );

  it(
    'should return [] if the inputs are (-2, 6)',
    tests({ times: -2, num: 6, expected: [] })
  );
});
