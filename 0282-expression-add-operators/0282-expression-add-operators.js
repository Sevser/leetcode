/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const result = [];
    num = num.split('').map(i => parseInt(i));
    
    const calc = (str, tot, last, evaledLast, a) => {
        if (a.length) {
            calc(str + '+' + a[0],
                 tot + a[0],
                 '' + a[0],
                 a[0],
                 a.slice(1));
            
            calc(str + '-' + a[0],
                 tot - a[0],
                 '-' + a[0],
                 -a[0],
                 a.slice(1));
            
            calc(str + '*' + a[0],
                 tot - evaledLast + eval(last + '*' + a[0]),
                 last + '*' + a[0],
                 eval(last + '*' + a[0]),
                 a.slice(1));
            
            if (!(str[str.length - 1] === '0' && !evaledLast)) {
                if (last < 0) {
                    calc(str + a[0],
                         tot - evaledLast + eval(last + a[0]),
                         last + a[0],
                         eval(last + a[0]),
                         a.slice(1));
                    
                } else {
                    calc(str + a[0],
                         tot - evaledLast + eval(last + a[0]),
                         last + a[0],
                         eval(last + a[0]),
                         a.slice(1));                    
                }
            }
        } else {
            if (tot === target) {
                result.push(str);
            }
        } 
    };
    calc('' + num[0], num[0], '' + num[0], num[0], num.slice(1));
    return result;
    
};