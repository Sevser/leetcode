/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let result = '';
    let pow = 0;
    const nums = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    };
    const tenth = {
        1: 'Ten',
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
    };
    const el = {
        0: 'Ten',
        1: 'Eleven',
        2: 'Twelve',
        3: 'Thirteen',
        4: 'Fourteen',
        5: 'Fifteen',
        6: 'Sixteen',
        7: 'Seventeen',
        8: 'Eighteen',
        9: 'Nineteen',
    };
    const dep = {
        100: 'Hundred',
        1: 'Thousand',
        2: 'Million',
        3: 'Billion'
    }
    if (num === 0) return 'Zero';
    while (num) {
        let temp = '';
        const th = (num % 1000).toFixed(0);
        if (th.length === 3) {
            temp += nums[th[0]] + ' ' + dep[100];
            if (th[1] === '1') {
                temp += ' ' + el[th[2]];
            } else if (th[1] !== '0') {
                temp += ' ' + tenth[th[1]];
                if (th[2] !== '' && th[2] !== '0') {
                    temp += ' ' + nums[th[2]];
                }
            } else {
                if (th[2] !== '' && th[2] !== '0') {
                    temp += ' ' + nums[th[2]];
                }
            }
        } else if (th.length === 2) {
            if (th[0] === '1') {
                temp += ' ' + el[th[1]];
            } else {
                temp += ' ' + tenth[th[0]];
                if (th[1] !== '' && th[1] !== '0') {
                    temp += ' ' + nums[th[1]];
                }
            }
        } else if (th.length === 1 && th[0] !== '0') {
            temp += ' ' + nums[th[0]];
        }
        if (pow && temp.trim().length) {
            temp += ' ' + dep[pow];
        }
        pow++;
        num = Math.floor(num / 1000);
        result = (temp.trim() + ' ' + result).trim();
    }
    return result;
};