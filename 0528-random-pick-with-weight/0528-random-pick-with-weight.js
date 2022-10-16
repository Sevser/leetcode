/**
 * @param {number[]} w
 */
var Solution = function(w) {
    var totalSum = w.reduce((acc, i) => acc + i, 0);
    var totalProbability = 0;
    this.arrayProbability = w.map((i) => {
        const ret = i / totalSum + totalProbability;
        totalProbability = ret;
        return ret;
    })
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    var rand = Math.random();
    return this.arrayProbability.findIndex(i => i > rand);
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */;