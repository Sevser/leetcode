/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
    return prob.reduce((acc, item, index, array) => {
        if (!index) {
            return [1 - item, item];
        } else {
            const ret = new Array(acc.length + 1);
            ret[0] = acc[0] * (1 - item);
            for (let i = 1; i < acc.length; i++) {
                ret[i] = acc[i - 1] * item + acc[i] * (1 - item)
            }
            ret[ret.length - 1] = acc[ret.length - 2] * item;
            return ret;
        }
    }, [])[target];
};