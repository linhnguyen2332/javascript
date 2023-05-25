/**
 Viết chương trình nhập vào một danh sách các số nguyên và trả về tổng lớn nhất của bất kỳ mảng con liền kề nào trong danh sách.
 * @param {array} arr
 *  
 * */

const maxSum = (arr) => {
    let maxSu = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
                if (sum > maxSu) {
                    maxSu = sum;
                }
            }
        }
    }
    return maxSu;
}

module.exports = maxSum