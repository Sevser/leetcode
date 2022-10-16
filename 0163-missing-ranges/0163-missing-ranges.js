/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    return [lower, ...nums, upper].reduce((acc, num, index, array) => {
        let left = num + 1;
        if (!index) {
            left = Math.min(num, lower);
        }
        let right = Infinity;
        if (index < (array.length - 1)) {
            if (nums.includes(array[index + 1])) {
                right = array[index + 1] - 1;
            } else {
                right = array[index + 1];
            }
        } else {
            right = upper;
        }
        if (right > upper) {
            right = upper;
        }
        if (left > right) {
            return acc;
        }
        return [
            ...acc,
            left === right ? '' + left : `${left}->${right}`,
        ];
    }, []);
};