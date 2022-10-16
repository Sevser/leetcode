/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var iErrorTruePalindromeCheck = -1;
    var isTruePalindrome = true;
    for (var i = 0; i < Math.floor(s.length / 2); i ++) {
        if (s[i] !== s[s.length - i - 1]) {
            isTruePalindrome = false;
            iErrorTruePalindromeCheck = i;
            break;
        }
    }
    if (isTruePalindrome)
        return true;
    var leftWrongLetter = s.slice(0, iErrorTruePalindromeCheck).concat(s.slice(iErrorTruePalindromeCheck + 1));
    var leftWrongTruePalindrome = true;
    for (var i = 0; i < Math.floor(leftWrongLetter.length / 2); i ++) {
        if (leftWrongLetter[i] !== leftWrongLetter[leftWrongLetter.length - i - 1]) {
            leftWrongTruePalindrome = false;
            break;
        }
    }
    if (leftWrongTruePalindrome)
        return true;
    var rightWrongLetter = s.slice(0, s.length - iErrorTruePalindromeCheck - 1).concat(s.slice(s.length - iErrorTruePalindromeCheck));
    var rightWrongTruePalindrome = true;
    for (var i = 0; i < Math.floor(rightWrongLetter.length / 2); i ++) {
        if (rightWrongLetter[i] !== rightWrongLetter[rightWrongLetter.length - i - 1]) {
            rightWrongTruePalindrome = false;
            break;
        }
    }
    if (rightWrongTruePalindrome)
        return true;
    return false;
};