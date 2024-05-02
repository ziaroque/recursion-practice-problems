/*
 * PROBLEM #14: Sum of fibonacci sequence
 *
 * Write a recursive function called `fibonacciSum` that takes a number and
 * and returns its fibonacci number
 *
 * Examples:
 *
 * fibonacciSum(4)  -->  0 + 1 + 1 + 2 + 3 = 7
 * fibonacciPos(4) = 3
 * fibonacciPos(3) = 2
 * fibonacciPos(2) = 1
 * fibonacciPos(1) = 1
 * fibonacciPos(0) = 0
 *                 += 7
 *
 * fibonacciSum(4) // returns 7
 * fibonacciSum(7) // returns 33
 *
 */

const fibonacciPos = require('./12-fibonacci-pos.js');

const fibonacciSum = (num) => {
  if (num <= 0) return 0;

  return fibonacciPos(num) + fibonacciSum(num - 1);
};

module.exports = fibonacciSum;
