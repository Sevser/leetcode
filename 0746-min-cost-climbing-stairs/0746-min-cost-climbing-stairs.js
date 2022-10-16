/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const costArr = new Array(cost.length + 1);
    costArr[0] = cost[0];
    costArr[1] = cost[1];
    for (let i = 2; i < (costArr.length); i++) {
        if (cost[i] !== undefined) {
            costArr[i] = Math.min(cost[i] + costArr[i - 1], cost[i] + costArr[i - 2]);
        } else {
            costArr[i] = Math.min(costArr[i - 1], costArr[i - 2]);    
        }
    }
    return costArr[costArr.length - 1];
};