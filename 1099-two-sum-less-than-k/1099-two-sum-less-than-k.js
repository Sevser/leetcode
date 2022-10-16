/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => b - a);
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > k) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) < k && (nums[i] + nums[j]) > max) {
                max = nums[i] + nums[j]
            }
        }
    }
    return max;
};