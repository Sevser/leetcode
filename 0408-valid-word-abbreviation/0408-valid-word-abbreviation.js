/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    var matched = abbr.matchAll(/\d+/g);
    var currentMatch = null;
    var testWord = word;
    var totalLength = 0;
    var lastMatch = null;
    while (!(currentMatch = matched.next()).done) {
        if (currentMatch.value[0][0] === '0') {
            return false;
        }
        var parsed = parseInt(currentMatch.value[0], 10);
        totalLength += parsed + currentMatch.value.index;
        if (lastMatch) {
            totalLength -= (lastMatch.value.index + lastMatch.value[0].length);
        }
        lastMatch = currentMatch;
    }
    if (lastMatch === null) {
        return abbr === word;
    }
    if (totalLength > word.length) {
        return false;
    }
    return abbr.slice(lastMatch.value.index + lastMatch.value[0].length) === word.slice(totalLength);
};