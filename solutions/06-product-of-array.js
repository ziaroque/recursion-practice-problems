/*
 * PROBLEM #6: Product of an array
 *
 * Write a recursive function called `productOfArray` which takes in an array
 * of numbers and returns the product of them all
 *
 * Examples:
 *
 * productOfArray([1, 2, 3]) // returns 6
 * productOfArray([1, 2, 3, 10]) // returns 60
 *
 */

const productOfArray = (array) => {
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
};

/*
// ALTERNATIVE SOLUTION USING REDUCE
const productOfArray = (array) => {
  if (array.length === 0) return 1;

  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};
*/

module.exports = productOfArray;
