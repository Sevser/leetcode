/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/\s/g, '');
    s = s.replaceAll(/\W/g, '');
    s = s.replaceAll(/_/g, '');
    s = s.toLowerCase();
    for (let i = 0; i < (s.length/ 2 + 1); i++) {
        if (s[i] !== s[s.length - 1 - i])
            return false;
    }
    return true;
};