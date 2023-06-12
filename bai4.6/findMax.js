/**
 * Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list
 * @param {Array} numbers
 */
function findMaximumProductOfThreeDistincElement(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const n = sortedNumbers.length;

  const product1 =
    sortedNumbers[n - 1] * sortedNumbers[n - 2] * sortedNumbers[n - 3];

  const product2 = sortedNumbers[0] * sortedNumbers[1] * sortedNumbers[n - 1];
  return Math.max(product1, product2);
}
module.exports = findMaximumProductOfThreeDistincElement;