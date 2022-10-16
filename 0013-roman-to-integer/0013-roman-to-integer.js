/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    const dict = {
        I:  1,
        IV: 4,
        V:  5,
        IX: 9,
        X:  10,
        XL: 40,
        L:  50,
        XC: 90,
        C:  100,
        CD: 400,
        D:  500,
        CM: 900,
        M:  1000,
    }
    for (var i = 0; i < s.length; i++) {
        if (i === (s.length - 1)) {
            total += dict[s[i]];
            break;
        }
        if (dict[s[i]+s[i+1]]) {
            total += dict[s[i]+s[i+1]];
            i++;
        } else {
            total += dict[s[i]];
        }
    }
    return total;
};