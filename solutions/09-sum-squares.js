/*
 * PROBLEM #9: Sum of squares
 *
 * Write a recursive function called `sumSquares` that sums squares of numbers in a list that may contain more lists
 *
 * Examples:
 *
 * sumSquares([1, 2, 3]) // returns 14
 *
 */

const sumSquares = (array) => {
  if (array.length === 0) return 0;

  const total = array.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return (accumulator += sumSquares(currentValue));
    }

    return (accumulator += currentValue * currentValue);
  }, 0);

  return total;
};

module.exports = sumSquares;
