/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const set = new Set();
    set.add(nums.length - 1);
    for (let i = nums.length - 1; i >= 0; i--) {
        const currNum = nums[i];
        for (let j = 0; j <= currNum; j++) {
            if (set.has(i + j)) {
                set.add(i);
                break;
            }
        }
    }
    return set.has(0);
};