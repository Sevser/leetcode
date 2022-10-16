/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const str = '' + x;
    
    for (var i = 0; i < Math.ceil(str.length/2); i ++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }
    return true;
};