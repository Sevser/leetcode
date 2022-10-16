/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while((right - left) > 1) {
        let pv = Math.floor((left + right) / 2);
        if (nums[pv] > target) {
            right = pv;
            continue;
        }
        if (nums[pv] < target) {
            left = pv;
            continue;
        }
        if (nums[pv] === target)
            return pv;
    }
    if (target < nums[left]) {
        return (left - 1) > 0 ? left - 1 : 0;
    } else if (target === nums[left]) {
        return left;
    } else if (target > nums[left] && target < nums[right]) {
        return right;
    } else if (target === nums[right]) {
        return right;
    } else if (target > nums[right]) {
        return right + 1;
    }
};