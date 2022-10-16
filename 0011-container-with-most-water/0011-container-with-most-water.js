/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = -Infinity;
    while (left !== right) {
        const vol = (right - left) * Math.min(height[left], height[right]);
        if (vol > max) {
            max = vol;
        }
        if (height[left] > height[right]) {
            right --;
        } else {
            left++;
        }
    }
    return max;
};