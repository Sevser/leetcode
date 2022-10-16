/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let counter = new Map();
    let max = -1;
    while (right < s.length) {
        if (!counter.has(s[right])) {
            counter.set(s[right], right);
            right++;
            continue;
        }
        left = counter.get(s[right]) + 1;
        max = Math.max(max, counter.size);
        right = left;
        counter.clear();
    }
    return Math.max(counter.size, max);
};