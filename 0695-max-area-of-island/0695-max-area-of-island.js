/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    const calcIslandSize = ([i, j]) => {
        let size = 0;
        const stack = [[i,j]];
        visited.add(`${i}_${j}`);
        while (stack.length) {
            const shifted = stack.shift();
            size++;
            if (shifted[0] > 0
                && grid[shifted[0] - 1][shifted[1]] === 1
                && !visited.has(`${shifted[0] - 1}_${shifted[1]}`)) {
                visited.add(`${shifted[0] - 1}_${shifted[1]}`);
                stack.push([shifted[0] - 1, shifted[1]]);
            }
            if (shifted[0] < (grid.length - 1)
                && grid[shifted[0] + 1][shifted[1]] === 1
                && !visited.has(`${shifted[0] + 1}_${shifted[1]}`)) {
                visited.add(`${shifted[0] + 1}_${shifted[1]}`);
                stack.push([shifted[0] + 1, shifted[1]]);
            }
            if (shifted[1] > 0
                && grid[shifted[0]][shifted[1] - 1] === 1
                && !visited.has(`${shifted[0]}_${shifted[1] - 1}`)) {
                visited.add(`${shifted[0]}_${shifted[1] - 1}`);
                stack.push([shifted[0], shifted[1] - 1]);
            }
            if (shifted[1] < (grid[0].length - 1)
                && grid[shifted[0]][shifted[1] + 1] === 1
                && !visited.has(`${shifted[0]}_${shifted[1] + 1}`)) {
                visited.add(`${shifted[0]}_${shifted[1] + 1}`);
                stack.push([shifted[0], shifted[1] + 1]);
            }
        }
        return size;
    }
    let maxSize = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] && !visited.has(`${i}_${j}`)) {
                const newSize = calcIslandSize([i, j]);
                if (newSize > maxSize) {
                    maxSize = newSize;
                }
            }
        }
    }
    return maxSize;
};