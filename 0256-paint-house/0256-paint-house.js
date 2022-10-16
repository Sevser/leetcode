/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    return Math.min(...costs.reverse().reduce((acc, item, index) => {
        if (!index) {
            return item;
        }
        item[0] += Math.min(acc[1], acc[2]);
        item[1] += Math.min(acc[0], acc[2]);
        item[2] += Math.min(acc[0], acc[1]);
        return item;
    }, []));
};