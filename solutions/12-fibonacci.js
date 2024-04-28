/*
 * PROBLEM #12: Fibonacci number
 *
 * Write a recursive function called `fibonacci` that takes a number and
 * and returns its fibonacci number
 *
 * Examples:
 *
 * fibonacci(4) // returns 3
 * fibonacci(14) // returns 377
 *
 */

const fibonacci = (num) => {
  if (num === 0) return 0;

  if (num === 1 || num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

module.exports = fibonacci;
