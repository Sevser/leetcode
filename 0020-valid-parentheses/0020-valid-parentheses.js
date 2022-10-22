/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let countCommon = 0;
    let countCurvy = 0;
    let countAngle = 0;
    const order = [];
    for (let l of s) {
        if (l === '(') {
            countCommon++;
            order.push('(')
        }
        if (l === '{') {
            countCurvy++;
            order.push('{');
        }
        if (l === '[') {
            countAngle++;
            order.push('[');
        }
        if (l === ')') {
            countCommon--;
            const last = order.pop();
            if (last !== '(') {
                return false
            }
        }
        if (l === '}') {
            countCurvy--;            
            const last = order.pop();
            if (last !== '{') {
                return false
            }
        }
        if (l === ']') {
            countAngle--;            
            const last = order.pop();
            if (last !== '[') {
                return false
            }
        }
        if (countCommon < 0 || countCurvy < 0 || countAngle < 0) {
            return false;
        }
    }
    return !countCommon && !countCurvy && !countAngle;
};