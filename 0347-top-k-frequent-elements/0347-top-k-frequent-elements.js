/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counter = new Map();
    for(let i of nums) {
        if (!counter.has(i)) {
            counter.set(i, 1);
        } else {
            counter.set(i, counter.get(i) + 1);
        }
    }
    return [...counter.entries()].sort((a,b) => b[1] - a[1]).map(i => i[0]).slice(0, k)
};