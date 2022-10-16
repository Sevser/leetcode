/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let right = 0;
    let numZeros = 0;
    let max = 0;
    while (left <= right && left <= nums.length && right <= nums.length ) {
        if (numZeros < 2) {
            if (max < (right - left)) {
                max = right - left;
            }
        } else {
            if (nums[left++] === 0) {
                numZeros--;
            }
        }
        if (nums[right++] === 0) {
            numZeros++;
        }
    }
    return max;
};