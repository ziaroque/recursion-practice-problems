/*
 * PROBLEM #7: Search JS object
 *
 * Write a recursive function called `contains` that searches for a value in a nested object.
 * It returns true if the object contains that value.
 *
 * Examples:
 *
 * const animal = {
 *  dog: {
 *    breed: {
 *      group: {
 *        toy: 'shih tzu',
 *        small: 'maltese',
 *        medium: 'beagle',
 *        large: 'samoyed',
 *        giant: 'bernese mountain dog',
 *      }
 *    }
 *   }
 * };
 *
 * contains(animal, 'maltese') // returns true
 * contains(animal, 'labrador retriever') // returns false
 *
 */

const contains = (obj, value) => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      if (Object.values(obj[prop]).includes(value)) return true;

      return contains(obj[prop], value);
    }
  }

  return false;
};

module.exports = contains;
