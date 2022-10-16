/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const result = [];
    let x = 0;
    let y = 0;
    let forward = true;
    while (x >= 0 && x < mat.length && y >= 0 && y < mat[0].length) {
        result.push(mat[x][y]);
        if (forward) {
            if (x === 0) {
                forward = false;
                if ((y + 1) >= mat[0].length) {
                    x++;
                } else {
                    y++;
                }
            } else if ((y + 1) >= mat[0].length) {
                forward = false;
                x++;
            } else {
                x--;
                y++;
            }
        } else {
            if (y === 0) {
                forward = true;
                if ((x + 1) >= mat.length) {
                    y++;
                } else {
                    x++;
                }
            } else if ((x + 1) >= mat.length) {
                forward = true;
                y++;
            } else {
                y--;
                x++;
            }
        }
    }
    return result;
};