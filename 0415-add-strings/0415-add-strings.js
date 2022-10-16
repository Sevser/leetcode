/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const max = Math.max(num1.length, num2.length);
    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');
    let iter = 0;
    let sum = '';
    let left = 0;
    let right = 0;
    let over = false;
    while(iter < max) {
        left = 0;
        right = 0;
        if (num1[iter]) {
            left = parseInt(num1[iter]);
        }
        if (num2[iter]) {
            right = parseInt(num2[iter]);
        }
        sum = `${sum}${(left + right + over) % 10}`;
        if ((left + right + over) >= 10) {
            over = true;
        } else {
            over = false;
        }
        if (iter === max - 1 && over) {
            sum = `${sum}${0+over}`;
        }
        iter++;
    }
    return sum.split('').reverse().join('');
};