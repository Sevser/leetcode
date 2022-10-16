/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isPositive = x >= 0;
    x = isPositive ? x : -x;
    let ret = 0;
    while (x) {
        ret = ret * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (isPositive && (2 ** 31 - 1) < ret)
        return 0;
    if (!isPositive && (2 ** 31) < ret)
        return 0;
    return isPositive ? ret : -ret;
};