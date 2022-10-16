/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const ret = [];
    while (s.length > k) {
        ret.push(s.slice(0, k));
        s = s.slice(k)
    }
    if (s.length) {
        ret.push(s.padEnd(k, fill));
    }
    return ret;
};