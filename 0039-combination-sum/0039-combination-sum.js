/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const calc = (cand, temp) => {
        const tempTotal = temp.reduce((acc, i) => acc + i, 0);
        if (tempTotal > target) {
            return;
        } else if (tempTotal === target) {
            result.push(temp);
        } else if (cand.length) {
            calc(cand, temp.concat(cand[0]));
            calc(cand.slice(1), temp);
        }
    };
    calc(candidates, []);
    return result;
};