const reverseElenmentsArray = require("./reverseArr");

test("Đảo ngược phần tử trong arr", () => {
    expect(reverseElenmentsArray(["adad", "asdsda", "bbbb", "cc", "dd"])).toEqual([
        "dd",
        "cc",
        "bbbb",
        "asdsda",
        "adad",
    ]);
});

test("Đảo ngược phần tử trong arr", () => {
    expect(reverseElenmentsArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});

test("Đảo ngược phần tử trong arr", () => {
    expect(reverseElenmentsArray(["d", "e", "f", "g", "h", "d", "u", "t"])).toEqual([
        "t",
        "u",
        "d",
        "h",
        "g",
        "f",
        "e",
        "d",
    ]);
});

test("Đảo ngược phần tử trong arr", () => {
    expect(reverseElenmentsArray(["middle", "kill", "skill", 9, 10])).toEqual([
        10,
        9,
        "skill",
        "kill",
        "middle",
    ]);
});

test("Đảo ngược phần tử trong arr", () => {
    expect(reverseElenmentsArray([10, 11, 19, 12, 18])).toEqual([18, 12, 19, 11, 10]);
});