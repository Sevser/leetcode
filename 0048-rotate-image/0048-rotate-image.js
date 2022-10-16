/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rotateEl = (i, j) => {
        let tmp = matrix[j][matrix.length - i - 1];
        matrix[j][matrix.length - i - 1] = matrix[i][j];
        let tmp2 = matrix[matrix.length - i - 1][matrix.length - j - 1];
        matrix[matrix.length - i - 1][matrix.length - j - 1] = tmp;
        tmp = matrix[matrix.length - j - 1][i];
        matrix[matrix.length - j - 1][i] = tmp2;
        matrix[i][j] = tmp;
    };
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = i; j < (matrix.length - 1 - i); j++) {
            rotateEl(i, j);
        }
    }
    
    return;
};