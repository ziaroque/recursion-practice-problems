/*
 * PROBLEM #4: Check all values in an array
 *
 * Write a recursive function called `all` which accepts an array and a callback
 * and returns true if every value in the array returns true
 * when passed as parameter to the callback function
 *
 * Example:
 *
 * var allAreLessThanSeven = all([1,2,9], function(num){
 * 	return num < 7;
 * });
 *
 * console.log(allAreLessThanSeven); // false
 *
 */

const all = (array, callback) => {
  if (array.length === 0) return true;

  return callback(array[0]) && all(array.slice(1), callback);
};

module.exports = all;
