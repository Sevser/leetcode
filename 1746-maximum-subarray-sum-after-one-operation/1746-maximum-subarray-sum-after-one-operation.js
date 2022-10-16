/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
    let maxSoFar = 0;
    let maxEndHereOneSquared = 0
    let maxEndHere = 0;
    for (let i = 0; i < nums.length; i++) {
        maxEndHereOneSquared = Math.max(maxEndHere + nums[i] * nums[i], maxEndHereOneSquared + nums[i]);
        maxEndHere = Math.max(0, maxEndHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndHereOneSquared);
    }
    return maxSoFar;
};