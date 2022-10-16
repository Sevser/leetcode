/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generateRow = (row) => {
    const arr = [1];
    for (let i = 0; i < row.length - 1; i++) {
        arr.push(row[i] + row[i + 1]);
    }
    arr.push(1);
    return arr;
}
var generate = function(numRows) {
    const arr = [[1]];
    for (let i = 1; i < numRows; i++) {
        arr.push(generateRow(arr[arr.length - 1]));
    }
    return arr;
};