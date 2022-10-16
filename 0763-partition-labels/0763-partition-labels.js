/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = new Map();
    const mapFirst = new Map();
    
    s
        .split('')
        .forEach((letter, index) => {
            map.set(letter, index);
            if (!mapFirst.has(letter)) {
                mapFirst.set(letter, index)
            }
        })
    const arr1 = [...map.entries()];
    const arr2 = [...mapFirst.entries()];
    const pat = [];
    let index = 0;
    while(index < arr1.length) {
        if (!pat.length) {
            pat.push([arr2[index][1], arr1[index][1]])
            index++;
        } else if (arr2[index][1] < pat[pat.length - 1][1]) {
            if (arr1[index][1] > pat[pat.length - 1][1]) {
                pat[pat.length - 1][1] = arr1[index][1];
            }
            index++;
        } else {
            pat.push([arr2[index][1], arr1[index][1]]);
            index++;
        }
    }
    return pat.map(a => (a[1] - a[0] + 1));
};