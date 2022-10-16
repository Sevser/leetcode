/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    var L = (new Array(s.length));
    L.fill(0);
    L = L.map(() => (new Array(s.length)));
    L = L.map(arr => arr.fill(0));
    for (let i = 0; i < s.length; i++) {
        L[i][i] = 1;
    }
    
    let pad = 1;
    
    L[0][s.length - 1] = -1;
    while (L[0][s.length - 1] === -1) {
        for (let i = 0; i < s.length; i++) {
            const a = `${i}_${i+pad}`;
            if(((i + pad) < s.length)) {
                if (s[i] === s[i + pad]) {
                    L[i][i+pad] = L[i + 1][i + pad - 1] + 2;
                } else {
                    L[i][i+pad] = Math.max(L[i + 1][i + pad], L[i][i + pad - 1]);
                }
            }
        }
        pad++;
    }
    let a = (s.length - L[0][s.length - 1]); 
    return (s.length - L[0][s.length - 1]) <= k;
};