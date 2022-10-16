/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }
    let letters = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (letters.has(s1[i])) {
            letters.set(s1[i], letters.get(s1[i]) + 1);
        } else {
            letters.set(s1[i], 1);
        }
    }
    let tempLet;
    for (let i = 0; i <= s2.length - s1.length; i++) {
        tempLet = new Map(letters)
        const temp = s2.slice(i, i + s1.length);
        for (let j = 0; j < temp.length; j++) {
            if (!tempLet.has(temp[j])) {
                break;
            } else {
                const count = tempLet.get(temp[j]);
                if (count > 1) {
                    tempLet.set(temp[j], count - 1);
                } else {
                    tempLet.delete(temp[j]);
                }
            }
        }
        if(tempLet.size === 0 && letters.size) {
            return true;
        }
    }
    return false;
};