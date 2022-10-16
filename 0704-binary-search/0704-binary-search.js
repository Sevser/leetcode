/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left !== right) {
        const pv = Math.floor((right + left) / 2);
        if (nums[pv] > target) {
            right = pv;
        } else if (nums[pv] < target) {
            left = pv + 1;
        } else if (nums[pv] === target) {
            return pv;
        }
    }
    return nums[left] === target ? left : -1;
};