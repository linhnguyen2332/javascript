/**
 * Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {array} numbers
 */

function smallestUnrepresentedNumber(numbers) {
    let smallestNumber = 1;
    numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= smallestNumber) {
            smallestNumber += numbers[i];
        } else {
            break;
        }
    }

    return smallestNumber;
}

module.exports = smallestUnrepresentedNumber