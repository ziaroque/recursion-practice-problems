/*
 * PROBLEM #13: Sum of fibonacci sequence
 *
 * Write a recursive function called `fibonacciSum` that takes a number and
 * and returns its fibonacci number
 *
 * Examples:
 *
 * fibonacciSum(4)  -->  0 + 1 + 1 + 2 + 3 = 7
 * fibonacci(4) = 3
 * fibonacci(3) = 2
 * fibonacci(2) = 1
 * fibonacci(1) = 1
 * fibonacci(0) = 0
 *             += 7
 *
 * fibonacciSum(4) // returns 7
 * fibonacciSum(7) // returns 33
 *
 */

const fibonacci = require('./12-fibonacci.js');

const fibonacciSum = (num) => {
  if (num <= 0) return 0;

  return fibonacci(num) + fibonacciSum(num - 1);
};

module.exports = fibonacciSum;
