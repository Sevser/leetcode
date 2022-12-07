/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const visited = new Set();
    let i = 0;
    let j = 0;
    const ret = [];
    let direction = 'right';
    const checkNextPosition = (i, j) => {
        if (visited.has(`${i}_${j}`)) {
            return false;
        }
        return i < (matrix.length) && i >= 0 && j >= 0 && j < matrix[0].length;
    };
    while (true) {
        if (!checkNextPosition(i, j)) {
            break;
        } else {
            ret.push(matrix[i][j]);
            visited.add(`${i}_${j}`);
        }
        switch(direction){
            case 'right': {
                if (checkNextPosition(i, j + 1)) {
                    j += 1;
                } else {
                    direction = 'bottom';
                    i += 1;
                }
                break;
            }
            case 'bottom': {
                if (checkNextPosition(i + 1, j)) {
                    i += 1;
                } else {
                    direction = 'left';
                    j -= 1;
                }
                break;
            }
            case 'left': {
                if (checkNextPosition(i, j - 1)) {
                    j -= 1;
                } else {
                    direction = 'top';
                    i -= 1;
                }
                break;
            }
            case 'top': {
                if (checkNextPosition(i - 1, j)) {
                    i -= 1;
                } else {
                    direction = 'right';
                    j += 1;
                }
                break;
            }
        }
    }
    return ret;
};