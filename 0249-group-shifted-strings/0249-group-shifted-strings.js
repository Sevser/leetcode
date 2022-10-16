/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const map = new Map();
    strings.forEach(string => {
        let seq = `${string.length}`;
        
        for (let i = 0; i < string.length - 1; i++) {
            let diff = string.charCodeAt(i + 1) - string.charCodeAt(i);
            if (diff < 0) {
                diff += 26;
            }
            seq += `_${diff}`;
        }        
        
        if(!map.has(seq)) {
            map.set(seq, []);
        }
        map.get(seq).push(string);
    });
    return Array.from(map, ([key, value]) => value);
};