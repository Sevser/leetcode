/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const a =  s.split('').reduce((acc, item, index) => {
        if (acc.lastItem !== item) {
            acc.preLastChangeIndex = acc.lastChangeIndex;
            acc.lastChangeIndex = index;
            acc.preLast = acc.lastItem;
            acc.lastItem = item;
        }
        const oldCount = acc.map.get(item);
        if (oldCount === undefined) {
            acc.map.set(item, 1);
        } else {
            acc.map.set(item, oldCount + 1);
        }
        
        if (acc.map.size > 2) {
            acc.map.set(acc.preLast, acc.lastChangeIndex - acc.preLastChangeIndex);
            acc.map.delete([...acc.map.keys()].filter(i => i !== acc.lastItem && i !== acc.preLast)[0]);
            acc.max = Math.max([...acc.map.entries()].reduce((a, i) => a + i[1], 0), acc.max);
        } else {
            acc.max = Math.max([...acc.map.entries()].reduce((a, i) => a + i[1], 0), acc.max);
        }        
        return acc;
    }, { max: 0, map: new Map(), preLastChangeIndex: 0, lastChangeIndex: 0, lastItem: null, preLast: null, });
    return a.max;
};