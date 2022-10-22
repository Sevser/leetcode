/**
 * @param {string} digits
 * @return {string[]}
 */
const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}
var letterCombinations = function(digits) {
    digits = digits.split('');
    let ret = [];
    while (digits.length) {
        const current = dict[digits.shift()].slice();
        if (ret.length) {
            ret = ret.reduce((acc, item) => {
                return [...acc, ...current.map(c => item + c)];
            }, []);
        } else {
            ret = current;
        }
    }
    return ret;
};