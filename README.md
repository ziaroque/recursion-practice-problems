# Recursion Practice Problems

This repository contains code solutions written in JavaScript for some recursion problems.

Some of the JS files may include functions using the `reduce()` method as an alternative solution (_practicing!_).

I'm adding test files for each problem using Mocha JS test framework (_also practicing!_) as I upload the solutions in GitHub.

Feel free to solve the problems listed below and compare with my solutions. I would appreciate any feedback or comments from anyone!

## Problems

| #   | Problem                               | Description                                                                            | Solution                                | Test                                    |
| --- | ------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------- |
| 1   | Sum all numbers                       | Take `n` and return the sum of all numbers from 1 up to n                              | [>>](/solutions/01-sum-range.js)        | [??](/test/01-sum-range-test.js)        |
| 2   | Power function                        | Take `base` and `exp` and return the power of a number                                 | [>>](/solutions/02-power.js)            | [??](/test/02-power-test.js)            |
| 3   | Calculate factorial                   | Take `n` and return its factorial                                                      | [>>](/solutions/03-factorial.js)        | [??](/test/03-factorial-test.js)        |
| 4   | Check all values in an array          | Take an `array` and return true if all elements return true in the callback func       | [>>](/solutions/04-all-values.js)       | [??](/test/04-all-values-test.js)       |
| 5   | Check some values in an array         | Take an `array` and return true if at least 1 element return true in the callback func | [>>](/solutions/05-some-values.js)      | [??](/test/05-some-values-test.js)      |
| 6   | Product of an array                   | Take an `array` and return the product of all numbers in it                            | [>>](/solutions/06-product-of-array.js) | [??](/test/06-product-of-array-test.js) |
| 7   | Search a JS object                    | Take an `object` and a `value` and return true if the object contains the value        | [>>](/solutions/07-search-object.js)    | [??](/test/07-search-object-test.js)    |
| 8   | Count of integers                     | Take a multi-dimensional `array` and return the count of integers stored in it         | [>>](/solutions/08-total-integers.js)   | [??](/test/08-total-integers-test.js)   |
| 9   | Sum the squares of numbers            | Take an `array` and return the sum of the squares of the numbers in it                 | [>>](/solutions/09-sum-squares.js)      | [??](/test/09-sum-squares-test.js)      |
| 10  | Generate repetitions of a number      | Take `times` and `n` and return an array containing repetitions of n                   | [>>](/solutions/10-replicate.js)        | [??](/test/10-replicate-test.js)        |
| 11  | Recreate the flat() method            | Take a multi-dimensional `array` and return its 1D or flattened version                | [>>](/solutions/11-flatten-array.js)    | [??](/test/11-flatten-array-test.js)    |
| 12  | Fibonacci number                      | Take `n` and return the fibonacci number                                               | [>>](/solutions/12-fibonacci.js)        | [??](/test/12-fibonacci-test.js)        |
| 13  | Sum of fibonacci sequence             | Take `n` and return sum of fibonacci sequence                                          | [>>](/solutions/13-fibonacci-sum.js)    | [??](/test/13-fibonacci-sum-test.js)    |
| 14  | First n prime numbers from x          | Take `n` (and an optional `i`) and return the first n prime numbers from i             | [>>](/solutions/14-first-n-primes.js)   | [??](/test/14-first-n-primes-test.js)   |
| 15  | Check if brace expression is balanced | Take an `expression` of braces and return true if it's balanced                        | [>>](/solutions/15-brace-balance.js)    | [??](/test/15-brace-balance-test.js)    |

## Technologies

- JavaScript
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Mocha](https://mochajs.org/)

## Setup

Clone this repository

```
git clone git@github.com:ziaroque/recursion-practice-problems.git
```

Install npm packages

```
npm install mocha -D
```

To test the code, run the command:

```
npm test
```

## Sources

- JS Interview Prep Recursion from [codingame.com](https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion)
- some of the problems were provided by [@ton03](https://github.com/ton03) (_ty!_)

## License

See the [LICENSE](/LICENSE.md) file for license rights and limitations (MIT).
