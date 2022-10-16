/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = nums.map(i => [i, 1, 1]);
    for (let i = 1; i < nums.length; i++) {
        result[i][1] *= result[i-1][0] * result[i - 1][1];
        result[nums.length - i - 1][2] *= result[nums.length - i][2] * result[nums.length - i][0];
    }
    return result.map(i => i[1] * i[2]);
};