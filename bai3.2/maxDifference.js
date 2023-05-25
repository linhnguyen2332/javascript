
/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {array} numbers
 */

function findMaxDifference(numbers) {
    if (numbers.length < 2) {
        return 0;
    }

    let minElement = numbers[0];
    let maxDifference = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minElement) {
            minElement = numbers[i];
        }
        const currentDifference = numbers[i] - minElement;
        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }
    }

    return maxDifference;
}

module.exports = findMaxDifference;