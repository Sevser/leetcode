/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] !== 0) {
            temp *= nums[i];
            if (temp > max) {
                max = temp;
            }
        } else {
            temp = 1;
        }
    }
    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] !== 0) {
            temp *= nums[i];
            if (temp > max) {
                max = temp;
            }
        } else {
            temp = 1;
        }
    }
    return max;
};