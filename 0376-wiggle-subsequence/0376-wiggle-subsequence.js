/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    return Math.max(...nums.reduce((acc, i, index) => {
        if (!index) {
            return acc;
        }
        if ((i - nums[index - 1]) > 0) {
            return [acc[1] + 1, acc[1]]
        } else if ((i - nums[index - 1]) < 0) {
            return [acc[0], acc[0] + 1];
        } else {
            return acc;
        }
    }, [1, 1]));
};