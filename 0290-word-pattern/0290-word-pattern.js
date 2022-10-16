/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map();
    let set = new Set();
    let splitted = s.split(' ');
    return pattern
        .split('')
        .every((p, index, arr) => {
            if (arr.length !== splitted.length) {
                return false;
            }
            if (!map.has(p)) {
                if (set.has(splitted[index])) {
                    return false;
                }
                map.set(p, splitted[index]);
                set.add(splitted[index]);
                return true;
            } 
            return map.get(p) === splitted[index]
        });
};