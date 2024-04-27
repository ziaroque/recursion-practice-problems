const assert = require('assert');
const sumRange = require('../solutions/01-sum-range.js');

describe('sumRange', () => {
  it('tests if sumRange(3) returns 6', () => {
    const num = 3;
    const expected = 6;

    const result = sumRange(num);

    assert.strictEqual(result, expected);
  });

  it('tests if sumRange(2) returns 3', () => {
    const num = 2;
    const expected = 3;

    const result = sumRange(num);

    assert.strictEqual(result, expected);
  });

  it('tests if sumRange(1) returns 1', () => {
    const num = 1;
    const expected = 1;

    const result = sumRange(num);

    assert.strictEqual(result, expected);
  });

  it('tests if sumRange(0) returns 0', () => {
    const num = 0;
    const expected = 0;

    const result = sumRange(num);

    assert.strictEqual(result, expected);
  });

  it('tests if sumRange(-7) returns null', () => {
    const num = -7;
    const expected = null;

    const result = sumRange(num);

    assert.strictEqual(result, expected);
  });
});
