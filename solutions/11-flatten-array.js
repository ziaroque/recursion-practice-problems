/*
 * PROBLEM #11: Flatten an array
 *
 * Write a recursive function called `flatten` that takes a multidimenstional array and returns a 1d version of it
 *
 * Examples:
 *
 * flatten([[], 6, [5], [4, 3], [[2], 1]]) // returns [6, 5, 4, 3, 2, 1]
 *
 */

const flatten = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an Array');
  }

  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }
    return acc.concat(curr);
  }, []);
};

module.exports = flatten;
