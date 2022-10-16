/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let lastIndex = -1;
    words.sort((a, b) => a.length - b.length);
    const arr = words.map(word => [word, 1, [word]]);
    arr.forEach((item, index, array) => {
        array
            .slice(index + 1)
            .forEach(item2 => {
                for (let i = 0; i < item2[0].length; i++) {
                    if (item[0] === (item2[0].slice(0, i) + item2[0].slice(i + 1))) {
                        if ((item[1] + 1) > item2[1]) {
                            item2[1] = item[1] + 1;
                            item2[2] = [item2[0], ...item[2]];
                        }
                    }
                }
                return false;
            });
    });
    return arr.sort((a, b) => b[2].length - a[2].length)[0][2].length
    
    
    const getMax = (arr, ind) => arr.slice(ind).reduce((acc, item, index, array) => {
        if (!index) {
            return [item];
        }
        const lastWord = acc[acc.length - 1];
        if (lastWord.length !== (item.length + 1)) {
            if (lastIndex === -1) {
                lastIndex = index + ind;   
            }
            return acc;
        }
        for (let i = 0; i < lastWord.length; i++) {
            if (item === (lastWord.slice(0, i) + lastWord.slice(i + 1))) {
                acc.push(item)
                return acc;
            }
        }
        if (lastIndex === -1) {
            lastIndex = index + ind;   
        }
        return acc;
    }, []).length;
    let max = getMax(words, 0)
    while (lastIndex !== -1) {
        const index = lastIndex;
        lastIndex = -1;
        const temp = getMax(words, index);
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};