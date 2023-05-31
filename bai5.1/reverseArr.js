/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascrip
 * @param {array} arr 
 */
function reverseArray(arr) {
    const reversed = [];
    arr.forEach((element) => {
        reversed.unshift(element);
    });
    return reversed;
}

module.exports = reverseArray;