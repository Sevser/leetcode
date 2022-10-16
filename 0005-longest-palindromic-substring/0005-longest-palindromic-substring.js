/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {    
    let L = new Map();
    for (let i = 0; i < s.length; i++) {
        L.set(`${i}_${i}`, s[i]);
    }
    let pad = 1;
    let max = s[0];
    while (pad < s.length) {
        for (let i = 0; (i + pad) < s.length; i++) {
            if (s[i] === s[i+pad] && (L.has(`${i+1}_${i+pad-1}`) || pad === 1)) {
                const res = s[i] + (pad !== 1 ? L.get(`${i+1}_${i+pad-1}`) : '' ) + s[i+pad];                
                L.set(`${i}_${i+pad}`, res);
                L.delete(`${i+1}_${i+pad-1}`);
                if (res.length > max.length) {
                    max = res;
                }
            }
        }
        pad++;
    }
    return max;
};