/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    return Math.min(...costs.reverse().reduce((acc, item, index) => {
        if (!index) {
            return item;
        }
        item = item.map((val, index) => {
           return val + Math.min(...acc.slice(0, index), ...acc.slice(index + 1)); 
        });
        return item;
    }, []));
};