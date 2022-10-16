/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let countTrueBits = 0;
    while (n) {
        if (n&1) {
            countTrueBits++;
        }
        n = n>>>1;
    }
    return countTrueBits;
};