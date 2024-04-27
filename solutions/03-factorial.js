/*
 * PROBLEM #3: Calculate factorial
 *
 * Write a recursive function called `factorial` that returns the factorial of a number.
 * A factorial of a number is the result of that number multiplied by the number before it,
 * and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
 *
 * Examples:
 *
 * factorial(5) // returns 120
 * factorial(4) // returns 24
 * factorial(3) // returns 6
 * factorial(2) // returns 2
 * factorial(1) // returns 1
 * factorial(0) // returns 1
 *
 */

const factorial = (num) => {
  if (num <= 0) return 1;

  return num * factorial(num - 1);
};

module.exports = factorial;
