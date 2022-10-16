/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let ret = mat.map(a => new Array(a[0].length));
    const visited = new Set();
    const stack = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            ret[i][j] = mat[i][j] === 0 ? 0 : Infinity;
            if (mat[i][j] === 0) {
                stack.push([i, j]);
            }
        }
    }
    while (stack.length) {
        let shifted = stack.shift();
        if ((shifted[0] - 1) >= 0) {
            if (ret[shifted[0] - 1][shifted[1]] > (ret[shifted[0]][shifted[1]] + 1)) {
                ret[shifted[0] - 1][shifted[1]] = ret[shifted[0]][shifted[1]] + 1;
                stack.push([shifted[0] - 1, shifted[1]])
            }
        }
        if ((shifted[0] + 1) < mat.length) {
            if (ret[shifted[0] + 1][shifted[1]] > (ret[shifted[0]][shifted[1]] + 1)) {
                ret[shifted[0] + 1][shifted[1]] = ret[shifted[0]][shifted[1]] + 1;
                stack.push([shifted[0] + 1, shifted[1]])
            }
        }
        if ((shifted[1] - 1) >= 0) {
            if (ret[shifted[0]][shifted[1] - 1] > (ret[shifted[0]][shifted[1]] + 1)) {
                ret[shifted[0]][shifted[1] - 1] = ret[shifted[0]][shifted[1]] + 1;
                stack.push([shifted[0], shifted[1] - 1])
            }
        }
        if ((shifted[1] + 1) < mat[0].length) {
            if (ret[shifted[0]][shifted[1] + 1] > (ret[shifted[0]][shifted[1]] + 1)) {
                ret[shifted[0]][shifted[1] + 1] = ret[shifted[0]][shifted[1]] + 1;
                stack.push([shifted[0], shifted[1] + 1])
            }
        }
    }
    return ret;
};