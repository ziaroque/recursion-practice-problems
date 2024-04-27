/*
 * PROBLEM #1: Sum all numbers
 *
 * Write a recursive function called `sumRange` that takes in a number and
 * returns the sum of all numbers from 1 up to the number passed in.
 *
 * Examples:
 *
 * sumRange(3) // returns 6
 * sumRange(2) // returns 3
 * sumRange(1) // returns 1
 * sumRange(0) // returns 0
 * sumRange(-7) // returns null
 *
 */

const sumRange = (num) => {
  if (num === 0) return 0;
  if (num < 0) return null;

  return num + sumRange(num - 1);
};

module.exports = sumRange;
