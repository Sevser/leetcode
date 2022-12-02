/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    return searchWord.split('').reduce((acc, item) => {
        if (!acc.length) {
            acc.push(item);
        } else {
            acc.push(acc[acc.length - 1] + item);
        }
        return acc;
    }, []).map((subword) => {
        return products.reduce((acc, p) => {
            if (p.startsWith(subword)) {
                acc.push(p);
                acc.sort();
                if (acc.length > 3) {
                    acc = acc.slice(0, 3)
                }
            }
            return acc;
        }, []);
    });
};