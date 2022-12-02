/**
 * @param {number[]} nums
 * @return {number}
 */

var sumFourDivisors = function(nums) {
    const divMap = new Map();
    function sum(...arguments) {
        return arguments.reduce((acc, item) => item + acc, 0);
    }
    function createDivisors(num) {
        if (num === 1) {
            return [1];
        }
        let ret = new Set();
        ret.add(1);
        ret.add(num);
        for (let i = Math.ceil(Math.sqrt(num)); i > 1; i--) {
            if (num%i === 0 && (!ret.add(num/i) || !ret.add(i))) {
                ret.add(i);
                ret.add(num/i);
                createDivisors(i).concat(createDivisors(num/i)).forEach(i => ret.add(i));
                break;
            }
        }
        return [...ret.keys()];
    }
    return nums
        .map(createDivisors)
        .filter(d => d.length === 4)
        .reduce((acc, item) => {
            return sum(acc, ...item);
        }, 0)
};