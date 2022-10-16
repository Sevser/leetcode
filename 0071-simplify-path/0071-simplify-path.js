/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var arr = path.split('/');
    const validatePath = (arr) => {
        return arr.every(val => val && val !== '..');
    }
    arr = arr.filter(value => value && value !== '.');
    while (!validatePath(arr)) {
        var tempArr = [];
        while (arr.length) {
            if (!tempArr.length) {
                if (arr[0] === '..') {
                    arr.shift();
                    continue;
                }
                tempArr.push(arr.shift());
                continue;
            }
            if (arr[0] == '..') {
                if (tempArr[tempArr.length - 1] === '..') {
                    tempArr.push(arr.shift());
                } else {
                    tempArr.pop();
                    arr.shift();
                }
            } else {
                tempArr.push(arr.shift());
            }
        }
        arr.push(...tempArr);
    }
    return '/' + arr.join('/');
};