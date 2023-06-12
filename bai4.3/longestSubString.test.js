const findLongestSubString = require('./longestfindLongestSubString')



test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
    expect(findLongestSubString(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toBe(2);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
    expect(findLongestSubString(["programming", "programmer", "program"])).toBe(7);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
    expect(findLongestSubString(["hello", "world", "jelly"])).toBe(1);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
    expect(findLongestSubString(["abcdefg", "abcde", "abcdef", "ab", "abc", "o"])).toBe(0);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
    expect(
        findLongestSubString([
            "abcdefg",
            "abcde",
            "abcdef",
            "abe",
            "eabc",
            "hello",
            "worlded",
            "jelly",
        ])
    ).toBe(1);
});