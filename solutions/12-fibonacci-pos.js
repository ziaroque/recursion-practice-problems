/*
 * PROBLEM #12: Fibonacci number position
 *
 * Write a recursive function called `fibonacciPos` that takes a number and
 * and returns its fibonacci number position
 *
 * Examples:
 *
 * fibonacciPos(4) // returns 3
 * fibonacciPos(14) // returns 377
 *
 */

const fibonacciPos = (num) => {
  if (num === 0) return 0;

  if (num === 1 || num === 2) return 1;

  return fibonacciPos(num - 1) + fibonacciPos(num - 2);
};

module.exports = fibonacciPos;
