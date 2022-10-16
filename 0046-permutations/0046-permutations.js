/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let stack = [[[], nums]];
    let result = [];
    while (stack.length) {
        const shifted = stack.shift();
        if (shifted[0].length === nums.length) {
            result.push(shifted[0]);
            continue;
        }
        for (let i = 0; i < shifted[1].length; i++) {
            stack.push([
                shifted[0].concat(shifted[1][i]),
                [...shifted[1].slice(0, i), ...shifted[1].slice(i + 1)]
            ]);
        }
    }
    return result;
};