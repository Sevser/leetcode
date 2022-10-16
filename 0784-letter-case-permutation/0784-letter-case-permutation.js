/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const regexp = /[a-zA-Z]/g;
    let arr = [...s.matchAll(regexp)];
    const ret = [s];
    for (let i of arr) {
        const temp = [];
        while (ret.length) {
            const shifted = ret.shift();
            temp.push(
                `${shifted.slice(0, i.index)}${i[0].toLowerCase()}${shifted.slice(i.index + 1)}`,
                `${shifted.slice(0, i.index)}${i[0].toUpperCase()}${shifted.slice(i.index + 1)}`);
        }
        ret.push(...temp);
    }
    return ret;
};