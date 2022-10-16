/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let i = 1;
    const countNumbers = (m) => 9 * m * 10 ** (m - 1);
    while ((n - countNumbers(i)) > 0) {
        n -= countNumbers(i);
        i++;
    }
    let num = '';
    if (i > 1) {
        n --;
        num = 10 ** (i - 1) + Math.floor(n / i);
    } else {
        num = Math.floor(n / i);
    }
    return num.toString()[n%i];
};