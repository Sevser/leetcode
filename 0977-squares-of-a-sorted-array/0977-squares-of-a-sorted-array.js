/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(i => i ** 2).sort((a,b) => a - b)
    
};