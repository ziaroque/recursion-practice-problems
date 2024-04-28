/*
 * PROBLEM #5: Check some values in an array
 *
 * Write a recursive function called `some` which accepts an array and a callback
 * and returns true if some value in the array returns true
 * when passed as parameter to the callback function
 *
 * Example:
 *
 * var someAreLessThanSeven = some([1,2,9], function(num){
 * 	return num < 7;
 * });
 *
 * console.log(someAreLessThanSeven); // true
 *
 */

const some = (array, callback) => {
  if (array.length === 0) return false;

  return callback(array[0]) || some(array.slice(1), callback);
};

module.exports = some;
