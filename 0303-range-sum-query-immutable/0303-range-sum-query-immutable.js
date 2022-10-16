/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums.slice();
    this.arrPrefix = nums.reduce((acc, item) => {
        if (!acc.length) {
            acc.push(item)
        } else {
            acc.push(item + acc[acc.length - 1]);
        }
        return acc;
    }, []);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left) {
        return this.arrPrefix[right] - this.arrPrefix[left - 1];
    }
    return this.arrPrefix[right];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */