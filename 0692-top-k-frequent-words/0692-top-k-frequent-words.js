/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    words.forEach(word => {
        map.set(word, map.get(word) ? map.get(word) + 1 : 1);
    });
    return [...map.entries()].sort((a, b) => {
        if ((b[1] - a[1]) !== 0) {
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0])
    }).slice(0,k).map(a => a[0]);
};