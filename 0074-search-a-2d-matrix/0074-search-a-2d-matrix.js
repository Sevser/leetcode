/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowId = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] <= target) {
            rowId = i;
        }
    }
    row = matrix[rowId];
    return row.findIndex(item => item === target) !== -1;
};