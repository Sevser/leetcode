/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n === 0) {
        return 0
    }
    const nums = [0, 1];
    for (let i = 2; i <= n; i++) {
        if (i%2) {
            nums.push(nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1]);
        } else {
            nums.push(nums[Math.floor(i / 2)]);
        }
    }
    return Math.max(...nums);
};