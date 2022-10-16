/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const diag = Math.min(matrix.length, matrix[0].length);
    for(let j = 0; j <= matrix[0].length; j++) {
        for(let i = 0; i < diag; i++) {
            if (matrix[i][i + j] !== undefined && matrix[i][i + j] !== matrix[0][j])
                return false;
        }
    }
    for (let j = 1; j < matrix.length; j++) {
        for (let i = 0; i < diag; i++) {
            if (matrix[j + i] !== undefined && matrix[j + i][i] !== undefined && matrix[i + j][i] !== matrix[j][0])
                return false;
        }
    }
    return true;
};