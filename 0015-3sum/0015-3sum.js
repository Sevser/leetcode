/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const ret = new Set()
    let left;
    let right;
    let temp;
    for (let i = 0; i < (nums.length - 2); i++) {
        left = i + 1;
        right = nums.length - 1;
        
        while(left < right) {
            temp = nums[i] + nums[left] + nums[right]
            if (!temp
                && left !== right
                && !ret.has(`${nums[i]}_${nums[left]}_${nums[right]}`)) {
                ret.add(`${nums[i]}_${nums[left]}_${nums[right]}`);
            }
            if (temp > 0) {
                right--;
            } else if (temp < 0) {
                left++;
            } else {
                left++;
            }
        }
    }
    return [...ret.keys()].map(s => s.split('_'));
};