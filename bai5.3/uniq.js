/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
 * @param {array} arr
 */
function uniq(arr) {
    let array = new Set(arr);
    return [...array];
}

module.exports = uniq;