/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const ret = [-1, -1];
    if (!nums.length) return ret;
    if (nums.length === 1 && nums[0] === target) {
        return [0,0];
    } else if (nums.length === 1) {
        return ret;
    }
    let left = 0;
    let right = nums.length - 1;
    let elExistInArray = false;
    if (nums[left] > target) return ret;
    if (nums[right] < target) return ret;
    let lastPivot = null;
    
    while (left < right) {
        const pivot = Math.floor((left + right) / 2);
        if (lastPivot !== null && lastPivot === pivot) {
            return ret;
        }
        lastPivot = pivot;
        if (nums[pivot] > target) {
            right = pivot;
        } else if (nums[pivot] < target) {
            left = pivot;
        }
        if (nums[pivot] === target) {
            left = pivot;
            right = pivot;
            while (nums[left - 1] === target) {
                left--;
            }
            while(nums[right + 1] === target) {
                right++;
            }
            return [left, right];
        }
        if (nums[right] === target) {
            left = right;
            while (nums[left - 1] === target) {
                left--;
            }
            while(nums[right + 1] === target) {
                right++;
            }
            return [left, right];
        }
    }
    return ret;
};