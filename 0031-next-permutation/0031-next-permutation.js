/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.every((num, index, arr) => {
        if (index === (arr.length - 1)) {
            return true;
        }
        return num >= arr[index + 1];
    })) {
        nums.sort((a,b) => a-b);
        return;
    }
    
    var right = nums.length - 1;
    var availableDictionary = [];
    var max = null;
    while (right > -1) { 
        if (right < nums.length - 1) {
            availableDictionary.push(nums[right + 1]);
        }
        if (!availableDictionary.length) {
            right--;
            continue;
        }
        var numbersBiggerCurrent = availableDictionary.filter(num => num > nums[right]);
        if (!numbersBiggerCurrent.length) {
            right--;
            continue;
        }
        var newRight = Math.min(...numbersBiggerCurrent);
        var temp = nums[right];
        nums[right] = newRight;
        var indexAvailable = availableDictionary.findIndex(num => num === newRight);
        availableDictionary[indexAvailable] = temp;
        availableDictionary.sort((a,b) => a-b);
        for (var i = 0; i < availableDictionary.length; i++) {
            nums[right + i + 1] = availableDictionary[i];
        }
        return;
    }
};