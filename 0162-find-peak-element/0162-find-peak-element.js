/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) {
        return 0
    }
    if (nums.length === 2) {
        return nums[0] > nums[1] ? 0 : 1;
    }
    for (let i = 0; i < (nums.length / 2 + 1); i++) {
        if ((nums[i - 1] === undefined || nums[i] > nums[i - 1]) && nums[i] > nums[i+1]) {
            return i;
        }
        if (nums[nums.length - i] > nums[nums.length - i - 1] && (nums[nums.length - i + 1] === undefined || nums[nums.length - i] > nums[nums.length - i + 1])) {
            return nums.length - i;
        }
    }
    return -1;
};