/**
 * Sắp xếp từ chuỗi dài nhất đến ngắn nhất, trong trường hợp có 2 chuỗi cùng độ dài thì sắp xếp theo thứ tự bảng chữ cái 
 * @param {array} strings 
 * @returns 
 */

function sortStringsByDistinctWordCount(strings) {
  const stringWordCountMap = new Map();
  strings.forEach((string) => {
    const words = string.split(" ");
    const uniqueWordCount = new Set(words).size;
    stringWordCountMap.set(string, uniqueWordCount);
  });

  const sortedStrings = [...strings].sort((a, b) => {
    const countA = stringWordCountMap.get(a);
    const countB = stringWordCountMap.get(b);
    if (countA === countB) {
      return a.length - b.length;
    }
    return countB - countA;
  });

  return sortedStrings;
}

module.exports = sortStringsByDistinctWordCount;