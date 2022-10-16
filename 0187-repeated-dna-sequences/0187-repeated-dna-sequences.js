/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const set = new Set();
    const set2 = new Set();
    for (let i = (s.length - 10); i >= 0; i--) {
        const subs = s.slice(i, i + 10);
        if (set.has(subs)) {
            set2.add(subs);
        } else {
            set.add(subs);
        }   
    }
    return [...set2.keys()];
};