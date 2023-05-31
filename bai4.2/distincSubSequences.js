/**
 * Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {Array} arr
 * @param {number} num
 */
function countDistinctSubsequences(nums, target) {
    const memo = new Map();
    return backtrack(nums, target, 0, 0, memo);
}

function backtrack(nums, target, index, currSum, memo) {
    if (index === nums.length) {
        if (currSum === target) {
            return 1; // Found a valid subsequence
        }
        return 0; // Reached the end of the list
    }

    const key = `${index}-${currSum}`;
    if (memo.has(key)) {
        return memo.get(key); // Return memoized value if available
    }

    const count1 = backtrack(nums, target, index + 1, currSum + nums[index], memo); // Include current number
    const count2 = backtrack(nums, target, index + 1, currSum, memo); // Exclude current number

    const totalCount = count1 + count2;
    memo.set(key, totalCount); // Memoize the result

    return totalCount;
}





module.exports = countDistinctSubsequences;