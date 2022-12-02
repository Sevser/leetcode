/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    const mapNums = new Map();
    let currentMax = 0;
    nums.forEach(num => {
        let val = 1;
        if (mapNums.has(num + 1)) {
           val += mapNums.get(num + 1);
        }
        mapNums.set(num, val);
        if (val > currentMax) {
            currentMax = val;
        }
        let tempNum = num - 1;
        while (mapNums.has(tempNum)) {
            const nval = mapNums.get(tempNum + 1) + 1;
            mapNums.set(tempNum, nval);
            if (nval > currentMax) {
                currentMax = nval;
            }
            tempNum -=1;
        }
    });
    return currentMax;
};