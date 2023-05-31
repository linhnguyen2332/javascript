const check = require("./sortLongestString")

test("Sắp xếp từ chuỗi dài nhất đến ngắn nhất, trong trường hợp có 2 chuỗi cùng độ dài thì sắp xếp theo thứ tự bảng chữ cái ", () => {
    expect(
        check(
            ['the dog in the hat', 'the lazy dog jumps over the fence', 'the cat in the hat']
        )
    ).toEqual(['the lazy dog jumps over the fence', 'the dog in the hat', 'the cat in the hat'])})
     