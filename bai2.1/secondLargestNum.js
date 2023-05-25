/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {Array} numbers
 */

function findSecondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] < largest && numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }

    return secondLargest;
}

module.exports = findSecondLargest