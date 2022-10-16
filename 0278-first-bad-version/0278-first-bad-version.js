/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    let left = 0;
    let right = 0;
    return function(n) {
        right = n;
        while (left < right) {
            let pv = Math.floor((right + left) / 2);
            if (isBadVersion(pv)) {
                right = pv;
            } else {
                left = pv;
            }
            if ((right - left) === 1) {
                return right;
            }
        }
    };
};