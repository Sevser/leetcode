/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let count = 0;
    
    const getNearbyIndexes = (grid) => {
        let values = new Set();
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    if (i > 0 && grid[i - 1][j] === 2) {
                       values.add(`${i}_${j}`);
                    }
                    if (i < (grid.length - 1) && grid[i + 1][j] === 2) {
                       values.add(`${i}_${j}`);
                    }
                    if (j > 0 && grid[i][j - 1] === 2) {
                       values.add(`${i}_${j}`);
                    }
                    if (j < (grid[0].length - 1) && grid[i][j + 1] === 2) {
                       values.add(`${i}_${j}`);
                    }
                } 
            }
        }
        return [...values.values()].map(val => val.split('_'));
    }
    
    let currentRottenOranges;
    while((currentRottenOranges = getNearbyIndexes(grid)).length) {
        count++;
        currentRottenOranges.forEach(index => {
            grid[index[0]][index[1]] = 2;
        });
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    
    return count;
};