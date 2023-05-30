const theNumberBubbleSort = require("./bubbleSort");

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
    expect(theNumberBubbleSort([3, 1, 4, 2, 6, 5])).toBe(4);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
    expect(theNumberBubbleSort([3, 1, 6, -7, 5, -4, 9, 11, 39])).toBe(9);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
    expect(theNumberBubbleSort([-4, -5, -1, -3, -2, -8])).toBe(8);
});

