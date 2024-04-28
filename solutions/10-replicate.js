/*
 * PROBLEM #10: Repetitions of a number
 *
 * Write a recursive function called `sumSquares` that sums squares of numbers in a list that may contain more lists
 *
 * Examples:
 *
 * sumSquares([1, 2, 3]) // returns 14
 *
 */

const replicate = (times, num) => {
  if (times <= 0) return [];
  return [num].concat(replicate(times - 1, num));
};

module.exports = replicate;
