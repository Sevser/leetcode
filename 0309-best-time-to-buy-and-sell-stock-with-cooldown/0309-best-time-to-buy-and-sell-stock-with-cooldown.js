/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;
    let sold = -Infinity;
    let held = -Infinity;
    let reset = 0;
    
    for (let price of prices) {
        let presold = sold;
        sold = held + price;
        held = Math.max(held, reset - price);
        reset = Math.max(reset, presold);
    }
    return Math.max(sold, held, reset);
};