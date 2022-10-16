/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */


const calcDist = (point) => {
    return Math.sqrt(point[0]*point[0] + point[1] * point[1]);
};

var kClosest = function(points, k) {
    return points.sort((a, b) => calcDist(a) - calcDist(b)).slice(0, k);
};