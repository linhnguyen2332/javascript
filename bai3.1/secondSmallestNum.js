/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {array} numbers
 *
 */
function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] > smallest && numbers[i] < secondSmallest) {
            secondSmallest = numbers[i];
        }
    }

    return secondSmallest;
}

module.exports = findSecondSmallest