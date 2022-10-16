/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ret = [];
    
    const createParenthneses = (l, r, str) => {
        if (l > r) return
        if (!l && !r) {
            ret.push(str);
        }
        if (l > 0) {
            createParenthneses(l - 1, r, str + '(');
        }
        if (r > 0) {
            createParenthneses(l, r - 1, str + ')');
        }
                
    };
    
    createParenthneses(n, n, '');
    
    return ret;
};