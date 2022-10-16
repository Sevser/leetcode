/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
    let total = 0;
    let map = new Map();
    for (let value of ribbons.values()) {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
        total += value;
    }
    
    if (total < k)
        return 0;
    if (total === k)
        return 1;
    
    const findTotalRibbons = (ribSet, length) => {
        let tempTotal = 0;
        for (let [num, count] of ribSet.entries()) {
            tempTotal += Math.floor(num / length) * count;
            if (tempTotal >= k)
                return true;
        }
        return false;
    };
    
    let max = Math.floor(total / k);
    
    let left = 0;
    let right = max;
    while (left < right) {
        let pv = Math.floor((left + right + 1) / 2);
        if (findTotalRibbons(map, pv)) {
            left = pv;
        } else {
            right = pv - 1;
        }
    }
    return left;
};