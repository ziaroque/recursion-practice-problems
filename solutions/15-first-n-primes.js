/*
 * PROBLEM #15: First n primes
 *
 * Write a recursive function called `firstNPrimes` that takes in a number
 * and returns the first n prime numbers from an (optional) starting number
 *
 * Examples:
 *
 * firstNPrimes(3, 2) // returns [2, 3, 5]
 * firstNPrimes(5, 4) // returns [5, 7, 11, 13, 17]
 *
 */

const isPrime = (num) => {
  if (num === 2) return true;
  if (num <= 1 || num % 2 === 0) return false;

  for (let i = 3; i < Math.floor(num / 2); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const firstNPrimes = (counter, iterator = 2) => {
  if (counter <= 0) return;

  const nextIterator =
    iterator < 3 || iterator % 2 === 0 ? iterator + 1 : iterator + 2;

  if (isPrime(iterator)) {
    const nextPrime = firstNPrimes(counter - 1, nextIterator);
    return typeof nextPrime === 'undefined'
      ? [iterator]
      : [iterator].concat(nextPrime);
  }

  return firstNPrimes(counter, nextIterator);
};

/*
// SOLUTION WITHOUT USING RECURSION

const firstNPrimes = (counter, iterator = 2) => {
  if (counter <= 0) return;

  const arrayOfPrimes = [];

  while (arrayOfPrimes.length < counter) {
    if (isPrime(iterator)) arrayOfPrimes.push(iterator);
    iterator = iterator < 3 || iterator % 2 === 0 ? iterator + 1 : iterator + 2;
  }

  return arrayOfPrimes;
};
*/

module.exports = firstNPrimes;
