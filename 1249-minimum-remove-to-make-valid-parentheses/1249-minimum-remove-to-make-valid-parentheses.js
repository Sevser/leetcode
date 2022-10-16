/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    var resLetterArray = [];
    var openBracesIndexes = [];    
    for(var i = 0; i < s.length; i++) {
        if (s[i] === ')' && openBracesIndexes.length > 0) {
            openBracesIndexes.pop();
            resLetterArray.push(s[i]);
        } else if (s[i] === '(') {
            resLetterArray.push(s[i]);
            openBracesIndexes.push(resLetterArray.length);
        } else if (s[i] !== '(' && s[i] !== ')') {
            resLetterArray.push(s[i]);
        }
    }
    if (openBracesIndexes.length) {
        resLetterArray = resLetterArray.reverse().filter(letter => {
            if (openBracesIndexes.length && letter === '(') {
                openBracesIndexes.pop();
                return false;
            }
            return true;
        }).reverse();
    }
    return resLetterArray.join('');
};