/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
    return nums1.reduce((acc, item, index) => {
        return acc + item * nums2[index];
    }, 0);
};