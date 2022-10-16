/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    let pivot;
    while (left < right) {
        pivot = Math.floor((left + right) / 2);
        if (arr[pivot] > arr[pivot + 1] && arr[pivot] > arr[pivot - 1]) {
            return pivot;
        } else if (arr[pivot + 1] > arr[pivot]) {
            left = pivot;
        } else if (arr[pivot - 1] > arr[pivot]) {
            right = pivot;
        }
    }
    return left;
};