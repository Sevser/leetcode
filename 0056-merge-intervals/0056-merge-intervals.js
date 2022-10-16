/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const acc = [];
    for (let i = 0; i < intervals.length; i++) {
        if (!acc.length) {
            acc.push(intervals[i]);
            continue;
        }
        if (acc[acc.length - 1][1] >= intervals[i][0]) {
            if (acc[acc.length - 1][1] < intervals[i][1]) {
                acc[acc.length - 1][1] = intervals[i][1];
            }
        } else {
            acc.push(intervals[i])
        }
    }
    return acc;
};