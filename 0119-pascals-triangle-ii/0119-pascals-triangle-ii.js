/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    while (rowIndex--) {
        row = row.reduce((acc, item, index, array) => {
            if (!index) {
                acc.push(1);
            } else {
                acc.push(item + array[index - 1]);
            }
            return acc;
        }, []);
        row.push(1);
    }
    return row;
};