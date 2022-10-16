/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length;
    for (let i = nums.length; i >= 0;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
        } else {
            i--;
        }
    }
    nums.push(...(new Array(length - nums.length)).fill(0));
};