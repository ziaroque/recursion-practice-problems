const assert = require('assert');
const power = require('../solutions/02-power.js');

describe('power', () => {
  it('tests if power(2, 4) returns 16', () => {
    const base = 2;
    const exponent = 4;
    const expected = 16;

    const result = power(base, exponent);

    assert.strictEqual(result, expected);
  });

  it('tests if power(2, 3) returns 8', () => {
    const base = 2;
    const exponent = 3;
    const expected = 8;

    const result = power(base, exponent);

    assert.strictEqual(result, expected);
  });

  it('tests if power(2, 2) returns 4', () => {
    const base = 2;
    const exponent = 2;
    const expected = 4;

    const result = power(base, exponent);

    assert.strictEqual(result, expected);
  });

  it('tests if power(2, 1) returns 2', () => {
    const base = 2;
    const exponent = 1;
    const expected = 2;

    const result = power(base, exponent);

    assert.strictEqual(result, expected);
  });

  it('tests if power(2, 0) returns 1', () => {
    const base = 2;
    const exponent = 0;
    const expected = 1;

    const result = power(base, exponent);

    assert.strictEqual(result, expected);
  });
});
