/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n === 1) return [[1]]
    let matrix = new Array(n);
    matrix.fill(0);
    matrix = matrix.map(a => { let mat = new Array(n); mat.fill(NaN); return mat});
    let curr = [0, 0];
    const direction = {
        'right': true,
        'bottom': false,
        'left': false,
        'top': false,
    };
    let currNum = 1;
    while (curr) {
        if (isNaN(matrix[curr[0]][curr[1]])) {
            matrix[curr[0]][curr[1]] = currNum++;
        } else {
           break; 
        }
        if (direction.right) {
            if (matrix[curr[0]][curr[1] + 1] !== undefined
                && isNaN(matrix[curr[0]][curr[1] + 1])) {
                curr[1] += 1;
            } else {
                curr[0] += 1;
                direction.right = false;
                direction.bottom = true;
            }
        } else if (direction.bottom) {
            if (matrix[curr[0] + 1] !== undefined
                && matrix[curr[0] + 1][curr[1]] !== undefined
                && isNaN(matrix[curr[0] + 1][curr[1]])) {
                curr[0] += 1;
            } else {
                curr[1] -= 1;
                direction.bottom = false;
                direction.left = true;
            }
        } else if (direction.left) {
            if (matrix[curr[0]][curr[1] - 1] !== undefined
                && isNaN(matrix[curr[0]][curr[1] - 1])) {
                curr[1] -= 1;
            } else {
                curr[0] -= 1;
                direction.left = false;
                direction.top = true;
            }
        } else if (direction.top) {
            if (matrix[curr[0] - 1] !== undefined
                && matrix[curr[0] - 1][curr[1]] !== undefined
                && isNaN(matrix[curr[0] - 1][curr[1]])) {
                curr[0] -= 1;
            } else {
                curr[1] += 1;
                direction.bottom = false;
                direction.right = true;
            }
        }
    }
    return matrix;
};