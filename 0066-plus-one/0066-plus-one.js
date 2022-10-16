/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let over = false;
    digits = digits.reverse();
    let i = 0;
    while (i < digits.length) {
        if (digits[i] === 9) {
            digits[i] = 0;
            over = true;
            i++;
            continue;
        }
        digits[i]++;
        return digits.reverse();
    }
    if (over) digits.push(1);
    return digits.reverse();
};