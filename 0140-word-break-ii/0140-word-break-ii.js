/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = [];
    const test = (str, a) => {
        if (!str.length) {
            result.push(a.join(' '));
            return;
        }
        for (let i = 0; i < wordDict.length; i++) {
            let index = str.indexOf(wordDict[i]);
            if (index === 0) {
                let nstr = str.replace(wordDict[i], '');
                test(nstr, a.slice().concat(wordDict[i]));
            }
        }
    }
    test(s, []);
    return result;
};