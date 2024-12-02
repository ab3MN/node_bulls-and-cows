'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const uniqRandomNumbers = new Set();

  while (uniqRandomNumbers.size !== 4) {
    const randomNumber = Math.floor(1 + Math.random() * 9);

    uniqRandomNumbers.add(randomNumber);
  }

  return Number(Array.from(uniqRandomNumbers).join(''));
}

module.exports = {
  generateRandomNumber,
};
