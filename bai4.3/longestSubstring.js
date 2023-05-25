/**
 * Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list
 * @param {array} strings 
 * @returns longestSubstring.length 
 */

function findLongestSubstring(strings) {
    let longestSubstring = '';

    for (let i = 0; i < strings.length; i++) {
        const currentString = strings[i];

        for (let j = 0; j < currentString.length; j++) {
            for (let k = j + 1; k <= currentString.length; k++) {
                const substring = currentString.slice(j, k);
                let isSubstringPresentInAllStrings = true;

                for (let m = 0; m < strings.length; m++) {
                    if (strings[m].indexOf(substring) === -1) {
                        isSubstringPresentInAllStrings = false;
                        break;
                    }
                }

                if (isSubstringPresentInAllStrings && substring.length > longestSubstring.length) {
                    longestSubstring = substring;
                }
            }
        }
    }

    return longestSubstring.length;
}

module.exports = findLongestSubstring