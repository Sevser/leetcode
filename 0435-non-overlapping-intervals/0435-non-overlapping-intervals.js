/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    return Math.min(
        intervals.sort((a, b) => a[0] - b[0]).reduce((acc, int, index, array) => {
            if (index === (array.length - 1)) {
                if (acc.arr[1] > int[0]) {
                    return acc.removed + 1;
                }
                return acc.removed;
            }
            if (!index) {
                acc.arr = int.slice();
            } else {
                if (acc.arr[1] > int[0]) {
                    acc.removed++;
                } else {
                    acc.arr[1] = int[1];
                }
            }
            return acc;
        }, { arr: [], removed: 0 }),
        intervals.sort((a, b) => a[1] - b[1]).reduce((acc, int, index, array) => {
            if (index === (array.length - 1)) {
                if (acc.arr[1] > int[0]) {
                    return acc.removed + 1;
                }
                return acc.removed;
            }
            if (!index) {
                acc.arr = int.slice();
            } else {
                if (acc.arr[1] > int[0]) {
                    acc.removed++;
                } else {
                    acc.arr[1] = int[1];
                }
            }
            return acc;
        }, { arr: [], removed: 0 })
    );
};