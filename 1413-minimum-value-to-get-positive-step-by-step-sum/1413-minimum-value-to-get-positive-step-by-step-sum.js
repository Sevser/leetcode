/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let num = nums[0];
    nums.reduce((acc, item) => {
        if (!acc.length) {
            acc.push(item);
        } else {
            acc.push(item + acc[acc.length - 1]);
        }
        if (num > acc[acc.length - 1]) {
            num = acc[acc.length - 1];
        }
        return acc;
    }, []);
    if (num < 1) {
        return Math.abs(num) + 1;
    }
    return 1;
};