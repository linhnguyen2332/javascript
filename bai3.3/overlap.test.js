const overlap = require("./overlap");

test("tìm 2 chuỗi nhiều ký tự trung nhau nhất", () => {
    expect(
        overlap([
            "abcdef",
            "cdefhg",
            "iklda",
            "hg",
        ])
    ).toEqual(["abcdef",
        "cdefhg"]);
});