/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    var removeCompleteBrackets = function(string) {
        var indexOpenBracket = -1;
        var indexCloseBracket = -1;
        for(var i = 0; i < string.length; i++) {
            if (indexOpenBracket === -1 && string[i] === '(') {
                indexOpenBracket = i;
            }
            if (indexOpenBracket !== -1 && string[i] === ')') {
                indexCloseBracket = i;
                break;
            }
        }
        if (indexOpenBracket === -1 || indexCloseBracket === -1) {
            return string;
        }
        return string.slice(0, indexOpenBracket).concat(string.slice(indexOpenBracket + 1, indexCloseBracket), string.slice(indexCloseBracket + 1));
    };
    var tempString = s;
    var resultRemoveBracket = tempString;
    while ((resultRemoveBracket = removeCompleteBrackets(resultRemoveBracket)) !== tempString)  {
        tempString = resultRemoveBracket;
    }
    return tempString.length;
};