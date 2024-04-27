const assert = require('assert');
const factorial = require('../solutions/03-factorial.js');

describe('factorial', () => {
  it('tests if factorial(5) returns 120', () => {
    const num = 5;
    const expected = 120;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });

  it('tests if factorial(4) returns 24', () => {
    const num = 4;
    const expected = 24;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });

  it('tests if factorial(3) returns 6', () => {
    const num = 3;
    const expected = 6;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });

  it('tests if factorial(2) returns 2', () => {
    const num = 2;
    const expected = 2;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });

  it('tests if factorial(1) returns 1', () => {
    const num = 1;
    const expected = 1;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });

  it('tests if factorial(0) returns 1', () => {
    const num = 0;
    const expected = 1;

    const result = factorial(num);

    assert.strictEqual(result, expected);
  });
});
