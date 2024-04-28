const assert = require('assert');
const firstNPrimes = require('../solutions/14-first-n-primes.js');

describe('firstNPrimes', () => {
  const tests = ({ counter, iterator, expected }) =>
    function () {
      const result = firstNPrimes(counter, iterator);
      assert.deepStrictEqual(result, expected);
    };

  it(
    'should return [2, 3] given a counter of 2 and no iterator',
    tests({ counter: 2, iterator: undefined, expected: [2, 3] })
  );

  it(
    'should return [2, 3, 5, 7] given a counter of 4 and no iterator',
    tests({ counter: 4, iterator: undefined, expected: [2, 3, 5, 7] })
  );

  it(
    'should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] given a counter of 10 and no iterator',
    tests({
      counter: 10,
      iterator: undefined,
      expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
    })
  );

  it(
    'should return [2, 3, 5] given a counter of 3 and an iterator of 2',
    tests({
      counter: 3,
      iterator: 2,
      expected: [2, 3, 5],
    })
  );

  it(
    'should return [53, 59, 61] given a counter of 3 and an iterator of 2',
    tests({
      counter: 3,
      iterator: 50,
      expected: [53, 59, 61],
    })
  );

  it(
    'should return [5, 7, 11, 13, 17] given a counter of 5 and an iterator of 4',
    tests({
      counter: 5,
      iterator: 4,
      expected: [5, 7, 11, 13, 17],
    })
  );

  it(
    'should return [17, 19, 23, 29, 31] given a counter of 5 and an iterator of 15',
    tests({
      counter: 5,
      iterator: 15,
      expected: [17, 19, 23, 29, 31],
    })
  );

  it(
    'should return [53, 59, 61, 67, 71] given a counter of 5 and an iterator of 15',
    tests({
      counter: 5,
      iterator: 50,
      expected: [53, 59, 61, 67, 71],
    })
  );
});
