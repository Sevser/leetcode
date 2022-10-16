/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let pl = 1;
    let pr = x;
    let p = Math.floor((pl + pr) / 2);
    while (true) {
        if (p*p > x) {
            if (pr === pl) {
                return p - 1;
            }
            pr = p;
        } else if (p*p === x) {
            return p;
        } else {
            if ((pr - pl) > 1) {
                pl = p + 1;    
            } else {
                return pl;
            }
        }
        p = Math.floor((pl + pr) / 2);
    }
};