/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const a = (new Array(m)).fill(0).map(i => (new Array(n)).fill(0));
    a[0][0] = 1;
    const getAmount = (i, j) => {
        if (obstacleGrid[i][j] !== 1) {
            return a[i][j]
        }
        return 0;
    };
    for (let i in a) {
        for (let j in a[i]) {
            if (!i && !j) continue;
            if (i > 0) {
                if (j > 0) {
                    a[i][j] = getAmount(i, j - 1) + getAmount(i - 1, j);
                } else {
                    a[i][j] = getAmount(i - 1, j);
                }
            } else {
                if (j > 0) {
                    a[i][j] = getAmount(i, j - 1);
                }
            }
        }
    }
    return getAmount(m - 1, n - 1);
};