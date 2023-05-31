/**
 * uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
 * @param {array} arr
 */
function uniqArr(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i].x === uniqueArr[j].x && arr[i].y === uniqueArr[j].y) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
module.exports = uniqArr;