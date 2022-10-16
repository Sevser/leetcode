/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefOne = nums.reduce((acc, item) => {
        if (!acc.length) {
            acc.push(item)
        } else {
            acc.push(item + acc[acc.length - 1]);
        }
        return acc;
    }, []);
    let prefTwo = nums.reverse().reduce((acc, item) => {
        if (!acc.length) {
            acc.push(item)
        } else {
            acc.push(item + acc[acc.length - 1]);
        }
        return acc;
    }, []);
    for (let i = 0; i < prefOne.length; i++) {
        if (prefOne[i] === prefTwo[prefOne.length - i - 1]) {
            return i;
        }
    }
    return -1;
}