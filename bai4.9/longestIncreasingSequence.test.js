const check = require('./longestIncreasingSequence')
test("the length of the longest increasing subsequence", () => {
    expect(check([1, 2, 3, 8, 7, 10])).toBe(3);
});

test("the length of the longest increasing subsequence", () => {
    expect(check([1, 2, 3, 5, 6, 7, 8, 9])).toBe(5);
});

test("the length of the longest increasing subsequence", () => {
    expect(check([1, 2, 4, 5, 6, 7, 9, 10])).toBe(4);
});
