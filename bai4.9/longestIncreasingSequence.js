/**
 * Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers,
 * with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1. 
 * @param {array} numbers
 */
function findLongestIncreasingSequenceLength(numbers) {
    let maxLength = 0;
    let currentLength = 0;

    numbers.reduce((previousNumber, currentNumber) => {
        if (currentNumber > previousNumber) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }

        return currentNumber;
    });

    maxLength = Math.max(maxLength, currentLength);
    return maxLength;
}

module.exports = findLongestIncreasingSequenceLength;