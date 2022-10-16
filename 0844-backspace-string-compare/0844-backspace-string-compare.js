/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s = s
        .split('')
        .reduce((acc, item) => {
            if (item === '#') {
                if (acc.length) {
                    acc.pop();
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, [])
        .join('');
    t = t
        .split('')
        .reduce((acc, item) => {
            if (item === '#') {
                if (acc.length) {
                    acc.pop();
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, [])
        .join('');
    return t === s;
};