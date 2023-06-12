/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {array} numbers
 *
 */

function findsecondSmallestNumber(numbers) {
    let smallest = Infinity;
    let secondSmallestNumber = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallestNumber = smallest;
            smallest = numbers[i];
        } else if (numbers[i] > smallest && numbers[i] < secondSmallestNumber) {
            secondSmallestNumber = numbers[i];
        }
    }

    return secondSmallestNumber;
}

module.exports = findsecondSmallestNumber;