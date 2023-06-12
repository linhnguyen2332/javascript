/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings
 * @param {array} strings 
 * @param {num} k 
 * @returns 
 */


function findLongestCommonSubstring(strings, k) {
  let longestCommonSubString = "";
  let maxLength = k;

  strings.forEach((str1, index1) => {
    strings.slice(index1 + 1).forEach((str2) => {
      str1.split("").reduce((substring, char) => {
        const newSubstring = substring + char;
        if (str2.includes(newSubstring) && newSubstring.length > maxLength) {
          longestCommonSubString = newSubstring;
          maxLength = newSubstring.length;
        }
        return newSubstring;
      }, "");
    });
  });

  return longestCommonSubString;
}

module.exports = findLongestCommonSubstring