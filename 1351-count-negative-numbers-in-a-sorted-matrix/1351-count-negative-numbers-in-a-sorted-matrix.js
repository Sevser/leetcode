/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0)
                total++;
        }
    }
    return total;
};