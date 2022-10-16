/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const tmpNums = nums.map((val, index) => ({ val, index }));
    tmpNums.sort((a,b) => a.val-b.val);
    
    while (true) {
        if ((tmpNums[left].val + tmpNums[right].val) < target) {
            left++;
            continue;
        }
        if ((tmpNums[left].val + tmpNums[right].val) > target) {
            right--;
            continue
        }
        if ((tmpNums[left].val + tmpNums[right].val) === target) {
            return [tmpNums[left].index, tmpNums[right].index];
        }
    }
};