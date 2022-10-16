/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secondNum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= firstNum) {
            firstNum = nums[i];
        } else if (nums[i] <= secondNum) {
            secondNum = nums[i];
        } else {
            return true;
        }
    }
    return false;
};