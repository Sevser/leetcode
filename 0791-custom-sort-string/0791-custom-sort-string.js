/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const orderMap = new Map();
    order
        .split('')
        .forEach((ord, index) => {
            orderMap.set(ord, 97 + index);
        });
    return s.split('').sort((a,b) => {
        let acode = a.charCodeAt(0);
        let bcode = b.charCodeAt(0);
        if (orderMap.has(a)) {
            acode = orderMap.get(a);
        }
        if (orderMap.has(b)) {
            bcode = orderMap.get(b);
        }
        return acode - bcode;
    }).join('');
};