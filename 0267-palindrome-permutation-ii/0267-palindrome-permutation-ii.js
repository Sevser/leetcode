/**
 * @param {string} s
 * @return {string[]}
 */
const checkForNoPalindrome = (map) => ([...map.values()].filter(c => c%2).length < 2);

const generatePalindrome = (obj, str, len) => {
    const keys = Object.keys(obj);
    if (keys.length) {
        return Object.keys(obj).reduce((acc, key, index) => {
            if (obj[key]) {
                const tempObj = {
                  ...obj,
                    [key]: obj[key] - 2,
                };
                if ((obj[key] - 2) === 0) {
                    delete tempObj[key];
                }
                acc.push(...generatePalindrome(tempObj, key + str + key, len));
            } else if (str.length === len) {
                acc.push(str);
            }
            return acc;
        }, []);
    }
    return [str];
};

var generatePalindromes = function(s) {
    const map = new Map();
    s.split('').forEach(c => {
        const count = map.get(c);
        if (count === undefined) {
            map.set(c, 1);
        } else{
            map.set(c, count + 1);
        }
    });
    
    const hasPalindrome = checkForNoPalindrome(map);
    if (!hasPalindrome) {
        return [];
    }
    
    const even = [...map.entries()].filter(c => c[1]%2);
    let palindromes = [];
    if (even.length) {
        if (even[0][1] === 1) {
            map.delete(even[0][0]);
        } else {
            map.set(even[0][0], even[0][1] - 1)
        }
        palindromes = generatePalindrome(
            [...map.entries()].reduce((acc, item,) => ({ ...acc, [item[0]]: item[1]}),{}),
            even[0][0],
            s.length
        );
    } else {
        palindromes = generatePalindrome(
            [...map.entries()].reduce((acc, item,) => ({ ...acc, [item[0]]: item[1]}),{}),
            '',
            s.length
        );
    }
    return [...(new Set(palindromes)).keys()];
};