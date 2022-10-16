/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let total = 0;
    const set = new Set(); // not unique
    const set2 = new Set(); // is element count in total
    for (let i = 0; i < nums.length; i++) {
        const s1 = set.has(nums[i]);
        const s2 = set2.has(nums[i]);
        if (!s1 && !s2) {
            total += nums[i];
            set2.add(nums[i]);
        } else if(s2) {
            total -= nums[i];
            set2.delete(nums[i]);
            set.add(nums[i])
        }
    }
    return total;
};