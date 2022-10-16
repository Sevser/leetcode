/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    var maxHeight = -1;
    var result = [];
    heights.reverse().forEach(function(item, index) {
        if (maxHeight === -1) {
            maxHeight = item;
            result.push( heights.length - 1 - index);
        }
        if (maxHeight < item) {
            maxHeight = item;
            result.push( heights.length - 1 - index);
        }
    });
    return result.reverse(); 
};