/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = s.trim();
    let isPositive = true;
    let result = 0;
    if (str[0] === '-') {
        isPositive = false;
        str = str.slice(1);
    } else if (str[0] === '+') {
        str = str.slice(1);
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '0' && !result) {
            continue;
        }
        if (!/\d/.test(str[i])) {
            break;
        }
        result = result * 10 + parseInt(str[i]);
    }
    if (result > (2 ** 31 - 1)) {
        if (!isPositive) {
            return 0 - 2 ** 31;
        }
        return 2 ** 31 - 1;
    }
    if (!isPositive) {
        return -result;
    }
    return result;
};