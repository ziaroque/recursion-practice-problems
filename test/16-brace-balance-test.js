const assert = require('assert');
const checkBraces = require('../solutions/16-brace-balance.js');

describe('checkBraces', () => {
  const tests = ({ expression, expected }) =>
    function () {
      const result = checkBraces(expression);
      assert.strictEqual(result, expected);
    };

  it(
    'should return `true` if the expression is `[()]{}`',
    tests({ expression: '[()]{}', expected: true })
  );

  it(
    'should return `true` if the expression is `((()))(()())`',
    tests({ expression: '((()))(()())', expected: true })
  );

  it(
    'should return `true` if the expression is `[()]{}{[()()]()}`',
    tests({ expression: '[()]{}{[()()]()}', expected: true })
  );

  it(
    'should return `false` if the expression is `(())))))`',
    tests({ expression: '(())))))', expected: false })
  );

  it(
    'should return `false` if the expression is `[(])`',
    tests({ expression: '[(])', expected: false })
  );

  it(
    'should return `false` if the expression is `[()]{}{[()()]()})`',
    tests({ expression: '[()]{}{[()()]()})', expected: false })
  );
});
