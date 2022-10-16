/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const mainRet = [];
    const backtrack = (num, arr) => {
        if (arr.length === k) {
            mainRet.push(arr);
            return
        }
        for (let i = num; i <= n && arr.length < k; i++) {
            if (i !== arr[arr.length - 1]){
                backtrack(i, [...arr, i])
            }
        }
    };
    backtrack(1, []);
    return mainRet;
};