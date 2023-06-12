/**
 * Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list
 * @param {array} strings 
 * @returns longestSubstring.length 
 */

function findLongestSubstring(strings) {
  let longestSubstring = "";

  strings.forEach((currentString) => {
    currentString.split("").forEach((char, index) => {
      let substring = char;

      while (strings.every((str) => str.includes(substring))) {
        const nextChar = currentString[index + substring.length];
        if (nextChar) {
          substring += nextChar;
        } else {
          break;
        }
      }

      if (substring.length > longestSubstring.length) {
        longestSubstring = substring;
      }
    });
  });

  return longestSubstring.length;
}

module.exports = findLongestSubstring