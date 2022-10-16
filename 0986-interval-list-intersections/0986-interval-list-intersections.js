/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;
    let ret = [];
    let a = null;
    let b = null;
    let seg = null;
    while (i < firstList.length && j < secondList.length) {
        a = firstList[i];
        b = secondList[j];
        if (a[1] < b[0]) {
            i++;
            continue;
        } else if (a[1] === b[0]) {
            ret.push([a[1], a[1]]);
            i++;
            continue;
        }
        if (a[0] > b[1]) {
            j++;
            continue;
        } else if(a[0] === b[1]) {
            ret.push([a[0], a[0]]);
            j++;
            continue;
        }
        seg = [];
        if (a[0] < b[0]) {
            seg.push(b[0]);
        } else {
            seg.push(a[0]);
        }
        if (a[1] < b[1]) {
            seg.push(a[1])
            i++;
        } else {
            seg.push(b[1]);
            j++;
        }
        ret.push(seg);
    }
    return ret;
};