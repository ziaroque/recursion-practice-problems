/*
 * PROBLEM #8: Parse a multi-dimensional array
 *
 * Write a recursive function called `totalIntegers`. Given a multi-dimensional integer array,
 * return the total number of integers stored inside this array
 *
 * Examples:
 *
 * totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]) // returns 7
 *
 */

const totalIntegers = (array) => {
  if (array.length === 0) return 0;

  let numberCount = 0;

  if (Number.isInteger(array[0])) numberCount += 1;

  if (Array.isArray(array[0])) numberCount += totalIntegers(array[0]);

  return numberCount + totalIntegers(array.slice(1));
};

/*
// ALTERNATIVE SOLUTION USING REDUCE

const totalIntegers = (array) => {
  return array.flat(Infinity).reduce((accumulator, currentValue) => {
    return typeof currentValue === "number" ? (accumulator += 1) : accumulator;
  }, 0);
};
*/

module.exports = totalIntegers;
