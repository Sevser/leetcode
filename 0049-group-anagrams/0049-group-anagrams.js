/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    strs
        .map(str => [str, str.split('').sort().join()])
        .forEach(a => {
            if (map.has(a[1])) {
                map.set(a[1], [...map.get(a[1]), a[0]])
            } else {
                map.set(a[1], [a[0]])
            }
        })
    
    
    return [...map.values()];
};