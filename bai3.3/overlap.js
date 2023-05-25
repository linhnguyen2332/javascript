
/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters
 * @param { array } strings
 */
function findStringsLargestOverlap(strings) {
    let maxOverlap = 0;
    let result = [];

    // Iterate through all pairs of strings
    for (let i = 0; i < strings.length - 1; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            const overlap = computeOverlap(strings[i], strings[j]);

            if (overlap > maxOverlap) {
                maxOverlap = overlap;
                result = [strings[i], strings[j]];
            }
        }
    }

    return result;
}

function computeOverlap(str1, str2) {
    let overlap = 0;
    const minLength = Math.min(str1.length, str2.length);
    for (let i = 1; i <= minLength; i++) {
        const suffix1 = str1.substring(str1.length - i);
        const prefix2 = str2.substring(0, i);

        if (suffix1 === prefix2) {
            overlap = i;
        }
    }

    return overlap;
}

module.exports = findStringsLargestOverlap;