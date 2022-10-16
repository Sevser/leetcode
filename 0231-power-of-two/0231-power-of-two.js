/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n<=0) return false
    let countTrueBits = 0;
    n = Math.abs(n);
    while (n) {
        if (n&1) {
            countTrueBits++;
        }
        n = n>>>1;
    }
    return countTrueBits === 1;
};