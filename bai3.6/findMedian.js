/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {array} list1
 *  @param {array} list2
 */

function findMedian(list1, list2) {
    const combinedList = [...list1, ...list2];

    combinedList.sort((a, b) => a - b);

    const length = combinedList.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (combinedList[mid - 1] + combinedList[mid]) / 2;
    } else {
        return combinedList[mid];
    }
}

module.exports = findMedian