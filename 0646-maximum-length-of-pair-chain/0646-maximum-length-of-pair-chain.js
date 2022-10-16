/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => (a[1] - b[1]));
    let len = 0;
    let max = -Infinity;
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] > max) {
            max = pairs[i][1];
            len++;
        }
    }
    return len;
};