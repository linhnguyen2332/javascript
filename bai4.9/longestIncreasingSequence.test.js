const check = require('./longestIncreasingSequence')
test("the length of the longest increasing subsequence", () => {
    expect(check([1, 2, 3, 8, 6, 3])).toBe(3);
});
