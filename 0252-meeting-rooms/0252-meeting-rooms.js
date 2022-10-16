/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    return intervals
        .sort((a,b) => a[0] - b[0])
        .every((int, index, array) => {
            if (index === array.length - 1) {
                return true;
            }
            return int[1] <= array[index + 1][0];
        });
};