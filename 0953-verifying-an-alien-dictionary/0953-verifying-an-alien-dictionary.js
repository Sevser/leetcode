/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = new Map();
    
    for (let [key, value] of order.split('').entries()) {
        orderMap.set(value, key);
    }
    
    for (let i = 0; i < (words.length - 1); i++) {
        for (let j = 0; j < words[i].length; j++) {
            const first = orderMap.get(words[i][j]);
            const second = orderMap.get(words[i + 1][j]);
            if (j && j >= words[i + 1].length) {
                return false;
            }
            if (first > second) {
                return false;
            } else if (first === second) {
                continue;
            } else {
                break;
            }
        }
    }
    return true;
};