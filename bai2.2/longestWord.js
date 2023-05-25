/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {array} arr
 */
const longestWord = (arr) => {
    let longest = ''
    for (let i = 0; i < arr.length; i++) {
        longest = longest.length < arr[i].length ? arr[i] : longest
    }
    return longest
}

module.exports = longestWord