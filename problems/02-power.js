/*
 * PROBLEM #2: Power function
 *
 * Write a recursive function called `power` which takes in a base and an exponent.
 * If the exponent is 0, return 1.
 *
 * Examples:
 *
 * power(2, 4) // returns 16
 * power(2, 3) // returns 8
 * power(2, 2) // returns 4
 * power(2, 1) // returns 2
 * power(2, 0) // returns 1
 *
 */

const power = (base, exp) => {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
};

module.exports = power;
