/**
 * Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 * @param {array} arrInput
*/
function numMoveToSort(arrInput) {
    let temp = 0
    let num = 0
    for (let i = 1; i < arrInput.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arrInput[i] < arrInput[j]) {
                temp = arrInput[j];
                arrInput[j] = arrInput[i];
                arrInput[i] = temp;
                num += 1
            }
        }
    }
    return num;
}
module.exports = numMoveToSort;