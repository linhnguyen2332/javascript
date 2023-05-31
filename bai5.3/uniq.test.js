const uniq = require("./uniq");

test("loại bỏ các phần tử bị lặp trong mảng", () => {
    expect(uniq([1, 1, 2, 3, 4, 5, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
    expect(uniq([-1, -1, 2, "test1", 2, 6, 5, "test1", 4, 5, 4, 4, 5])).toEqual([
        -1, 2, "test1", 6, 5, 4,
    ]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
    expect(uniq(["abc", "efg", "abc", "jkl", "jkl"])).toEqual(["abc","efg", "jkl"]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
    expect(uniq([1, 1, 2, 3, 4, 5, 4, 4, 5, 7])).toEqual([1, 2, 3, 4, 5, 7]);
});

