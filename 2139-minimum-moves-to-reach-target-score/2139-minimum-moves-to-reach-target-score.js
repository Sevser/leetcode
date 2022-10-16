/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let count = 0;
    if (!maxDoubles) {
        return target - 1;
    }
    while (target !== 1) {
        if ((target % 2) === 1) {
            target = target - 1;
        } else if (maxDoubles) {
            target = target / 2;
            maxDoubles -= 1;
        } else {
            count += target - 1;
            target = 1;
            break;
        }
        count++;
    }
    return count;
};