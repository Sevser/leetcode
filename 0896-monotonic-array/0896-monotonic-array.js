/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length === 1) {
        return true;
    }
    let isIncrease = null;
    for (let i = 0; i < (nums.length - 1); i++) {
        if ((nums[i] - nums[i + 1]) < 0) {
            if (isIncrease === null) {
                isIncrease = true;
            } else if (isIncrease) {
                continue;
            } else {
                return false;
            }
        } else if ((nums[i] - nums[i + 1]) > 0) {
            if (isIncrease === null) {
                isIncrease = false;
            } else if (!isIncrease) {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
};