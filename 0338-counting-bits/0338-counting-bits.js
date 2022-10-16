/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let acc = [0];
    for (let i = 1; i < (n + 1); i++) {
        acc.push(acc[i - 2 ** Math.floor(Math.log2(i))] + 1);
    }
    return acc;
};