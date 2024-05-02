/*
 * PROBLEM #13: Fibonacci sequence
 *
 * Write a recursive function called `fibonacciSeq` that takes a number and
 * and returns an array of fibonacci sequence up to that number
 *
 * Examples:
 *
 * fibonacciSeq(6) // returns [0,1,1,2,3,5]
 * fibonacciSeq(12) // returns [0,1,1,2,3,5,8,13,21,34,55,89]
 *
 */

const fibonacciSeq = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  return fibonacciSeq(num - 1, [
    ...array,
    array[array.length - 2] + array[array.length - 1],
  ]);
};

module.exports = fibonacciSeq;
