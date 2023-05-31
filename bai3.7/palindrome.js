


function longestPalindromeLength(inputString) {
    const charCountMap = new Map();
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
    let palindromeLength = 0;
    let oddCountFound = false;
    for (const count of charCountMap.values()) {
        if (count % 2 === 0) {
            palindromeLength += count;
        }
        else {
            palindromeLength += count - 1;
            oddCountFound = true;
        }
    }
    if (oddCountFound) {
        palindromeLength++;
    }

    return palindromeLength;
}

module.exports = longestPalindromeLength