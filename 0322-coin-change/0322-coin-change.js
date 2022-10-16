/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, map = new Map()) {
    if (amount < 0) {
        map.set(amount, -1);
        return -1;
    }
    if (amount === 0) {
        return 0;
    }
    if (map.has(amount)) {
        return map.get(amount);
    }
    const change = coins
        .map((coin) => coinChange(coins, amount - coin, map))
        .filter((c) => c !== -1);
    if (!change.length) {
        map.set(amount, -1);
        return -1;
    }
    const min = Math.min(...change) + 1;
    map.set(amount, min);
    return min;
};