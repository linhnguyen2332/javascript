/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {array} numbers
 */
const sum15 = (arr) => {
    let sum = 0;
    arr.map((item) => {
        if (item % 15 == 0) {
            sum = sum + item
        }
    })
    return sum
}

module.exports = sum15