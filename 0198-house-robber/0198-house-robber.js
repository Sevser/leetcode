/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    let n = nums.length;
    if (!n) return 0;
    
    let maxRobbetAmount = new Array(n + 1);
    maxRobbetAmount[n] = 0;
    maxRobbetAmount[n - 1] = nums[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        maxRobbetAmount[i] = Math.max(maxRobbetAmount[i + 1], maxRobbetAmount[i + 2] + nums[i]);
    }
    return maxRobbetAmount[0];
};