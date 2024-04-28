const assert = require('assert');
const contains = require('../solutions/07-search-object.js');

const random = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo',
          },
        },
      },
    },
  },
};

const animal = {
  dog: {
    breed: {
      group: {
        toy: 'shih tzu',
        small: 'maltese',
        medium: 'beagle',
        large: 'samoyed',
        giant: 'bernese mountain dog',
      },
    },
  },
};

describe('contains', () => {
  const tests = ({ obj, value, expected }) =>
    function () {
      const result = contains(obj, value);
      assert.strictEqual(result, expected);
    };

  it(
    'should return true since the `random` object contains the value `44`',
    tests({ obj: random, value: 44, expected: true })
  );
  it(
    'should return false since the `random` object does not contain the value `foo2`',
    tests({ obj: random, value: 'foo2', expected: false })
  );
  it(
    'should return true since the `animal` object contains the value `maltese`',
    tests({ obj: animal, value: 'maltese', expected: true })
  );
  it(
    'should return false since the `animal` object does not contain the value `labrador retriever`',
    tests({ obj: animal, value: 'labrador retriever', expected: false })
  );
});
