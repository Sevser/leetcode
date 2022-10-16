/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    let index = k - 1;
    while (arr.length !== 1) {
        arr.splice(index % arr.length, 1);
        index = (index + k - 1) % arr.length;
    }
    return arr[0];
};