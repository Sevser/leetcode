/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let a = (new Array(n)).fill(1);
    for (let i = 1; i < m; i++) {
        a = a.reduce((acc, j, index, array) => {
            if (!index) {
                return [j];
            }
            return [...acc, acc[index - 1] + j];
        }, [])
    }
    return a[n - 1];
};