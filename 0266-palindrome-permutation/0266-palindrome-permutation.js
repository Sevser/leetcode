/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1);
        }
    }
    let hasOneOdd = false;
    for (let count of map.values()) {
        if ((count % 2) && !hasOneOdd) {
            hasOneOdd = true;
        } else if ((count % 2) && hasOneOdd){
            return false;
        }
    }
    return true;
};