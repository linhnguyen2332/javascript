/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings
 * @param {array} strings 
 * @param {num} k 
 * @returns 
 */


function findLongestCommonSubstring(strings, k) {
    let longestSubstring = '';
    let maxLength = k;

    for (let i = 0; i < strings.length - 1; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            for (let m = 0; m <= strings[i].length - maxLength; m++) {
                const substring = strings[i].substring(m, m + maxLength);
                if (strings[j].includes(substring)) {
                    longestSubstring = substring;
                    maxLength = substring.length;
                }
            }
        }
    }

    return longestSubstring
}
module.exports = findLongestCommonSubstring