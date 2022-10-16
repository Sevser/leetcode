/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var n = [];
    while (num > 0) {
        n.push(num % 10);
        num = Math.floor(num/10);
    }
    n = n.reverse();
    let i = 0;
    
    while (i < n.length) {
        const currNum = n[i];
        const numBigThanCurr = Math.max(...n.slice(i));
        if (numBigThanCurr > currNum) {
            const temp = currNum;
            const index1 = n.length - 1 - n.slice(i).reverse().findIndex((item,index) => {
                return numBigThanCurr === item;
            });
            n[i] = numBigThanCurr;
            n[index1] = temp;
            break;
        }
        i++;
    }
    return n.reverse().reduce((acc, i, index) => acc + 10 ** index * i, 0)
};