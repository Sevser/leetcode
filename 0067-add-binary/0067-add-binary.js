/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').map(i => parseInt(i)).reverse();
    b = b.split('').map(i => parseInt(i)).reverse();
    let ret = [];
    let i = 0;
    let over = 0;
    while (i < a.length || i < b.length) {
        if (i < a.length && i < b.length) {
            ret.push((a[i] + b[i] + over) % 2);
            if ((a[i] + b[i] + over) > 1) {
                over = 1;
            } else {
                over = 0;
            }
        } else if (i < a.length) {
            ret.push((a[i] + over) % 2);
            if ((a[i] + over) > 1) {
                over = 1;
            } else {
                over = 0;
            }
        } else if (i < b.length) {
            ret.push((b[i] + over) % 2);
            if ((b[i] + over) > 1) {
                over = 1;
            } else {
                over = 0;
            }
        }
        i++;
    }
    if (over) {
        ret.push(1);
    }
    return ret.reverse().join('');
};