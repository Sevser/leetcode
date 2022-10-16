/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let img = new Array(image.length);
    img.fill(1);
    img = img.map(() => new Array(image[0].length));
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[0].length; j++) {
            img[i][j] = image[i][j];
        }
    }
    const set = new Set();
    const stack = [[sr, sc]];
    while (stack.length) {
        const shifted = stack.shift();
        set.add(`${shifted[0]}_${shifted[1]}`);
        if (img[shifted[0]][shifted[1]] !== newColor) {
            img[shifted[0]][shifted[1]] = newColor;
        }
        if (shifted[0] > 0
            && image[shifted[0] - 1][shifted[1]] === image[sr][sc]
            && !set.has(`${shifted[0] - 1}_${shifted[1]}`)) {
            stack.push([shifted[0] - 1, shifted[1]]);
        }
        if (shifted[0] < (img.length - 1)
            && image[shifted[0] + 1][shifted[1]] === image[sr][sc]
            && !set.has(`${shifted[0] + 1}_${shifted[1]}`)) {
            stack.push([shifted[0] + 1, shifted[1]]);
        }
        if (shifted[1] > 0
            && image[shifted[0]][shifted[1] - 1] === image[sr][sc]
            && !set.has(`${shifted[0]}_${shifted[1] - 1}`)) {
            stack.push([shifted[0], shifted[1] - 1]);
        }
        if (shifted[1] < (img[0].length - 1)
            && image[shifted[0]][shifted[1] + 1] === image[sr][sc]
            && !set.has(`${shifted[0]}_${shifted[1] + 1}`)) {
            stack.push([shifted[0], shifted[1] + 1]);
        }
    }
    return img
};