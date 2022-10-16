/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    for (var i = 1; i < strs.length && pref.length; i++) {
        let j = 0;
        if (pref.length > strs[i].length) {
            pref = pref.slice(0, strs[i].length);
        }
        for (; j < pref.length; j++) {
            if (pref[j] !== strs[i][j])
                break
        }
        pref = pref.slice(0, j);
    }
    return pref;
};