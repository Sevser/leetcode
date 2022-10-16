/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    s.split('').forEach(letter => {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }
    });
    let maxLen = 0;
    let hasOneSingle = false;
    for (let count of map.values()) {
        if (count % 2) {
            hasOneSingle = true;
        }
        maxLen += Math.floor(count / 2) * 2; 
    }
    if (hasOneSingle) {
        maxLen += 1;
    }
    return maxLen;
};