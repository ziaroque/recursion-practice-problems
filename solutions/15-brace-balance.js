/*
 * PROBLEM #15: Check if brace expression is balanced or not
 *
 * Write a recursive function called `checkBraces` that takes in an expression
 * and returns true if it is correct or balanced
 *
 * Examples:
 *
 * checkBraces([()]{}) // returns true
 * checkBraces([(])) // returns false
 *
 */

const bracePair = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const isOpening = (char) => {
  return Object.keys(bracePair).includes(char);
};

const isClosingOf = (left, right) => {
  return bracePair[left] === right;
};

const checkBraces = (expression, openStack = []) => {
  if (expression.length === 0) {
    return openStack.length === 0;
  }

  const c = expression[0];

  /* if closing brace, check if match */
  if (openStack.length > 0 && isClosingOf(openStack[openStack.length - 1], c)) {
    openStack.pop();
    return checkBraces(expression.slice(1), openStack);
  }

  if (isOpening(c)) {
    openStack.push(c);
    return checkBraces(expression.slice(1), openStack);
  }

  return expression.length === 0 && openStack.length === 0;
};

/*
// ALTERNATIVE SOLUTION WITHOUT USING RECURSION

const checkBraces = (expression) => {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (["[", "(", "{"].includes(char)) {
      stack.push(char);
    }

    if (stack.length === 0) return false;

    let check;

    if (char === "]") {
      check = stack.pop();
      if (["(", "{"].includes(check)) {
        return false;
      }
    } else if (char === ")") {
      check = stack.pop();
      if (["[", "{"].includes(check)) {
        return false;
      }
    } else if (char === "}") {
      check = stack.pop();
      if (["[", "("].includes(check)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
*/

module.exports = checkBraces;
