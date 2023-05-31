const longestPalindromeLength = require('./palindrome');

test("longest palindrome ", () => {
    expect(longestPalindromeLength("amanaplanacanalpanama")).toBe(21);
});