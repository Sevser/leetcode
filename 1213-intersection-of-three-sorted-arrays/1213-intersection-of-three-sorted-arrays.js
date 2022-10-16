/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let map1 = new Map();
    let map2 = new Map();
    let map3 = new Map();
    for (let i = 0; i < Math.max(arr1.length, arr2.length, arr3.length); i++) {
        if (arr1[i] !== undefined) {
            map1.set(arr1[i], 1);
        }
        if (arr2[i] !== undefined) {
            map2.set(arr2[i], 1);
        }
        if (arr3[i] !== undefined) {
            map3.set(arr3[i], 1);
        }
    }
    let result = [];
    for (let key of map1.keys()) {
        if (map2.has(key) && map3.has(key)) {
            result.push(key);
        }
    }
    return result;
};