/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.array = new Array(k);
    this.array.fill(-Infinity);
    for (let i = 0; i < nums.length; i++) {
        let currMin = Math.min(...this.array);
        if (currMin < nums[i]) {
            this.array[this.array.findIndex(e => e === currMin)] = nums[i];
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let currMin = Math.min(...this.array);
    if (currMin < val) {
        this.array[this.array.findIndex(e => e === currMin)] = val;
    }
    return Math.min(...this.array);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */