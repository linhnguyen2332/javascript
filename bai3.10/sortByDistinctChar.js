/**
 * Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing firs
 * @param {array} strings
 */
function sortShortestString(strings) {
    strings.sort(function (a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    return strings;
}

module.exports = sortShortestString;