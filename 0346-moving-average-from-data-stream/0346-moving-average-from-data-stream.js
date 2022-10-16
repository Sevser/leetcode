/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.array = new Array(size);
    this.average = null;
    this.currentIndex = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.array[(this.currentIndex++) % this.size] = val;
    if (this.average === null) {
        this.average = val;
    } else {
        this.average = this.array.reduce((acc, i) => acc + i, 0)        
        if (this.currentIndex < this.size) {
            this.average = this.average / this.currentIndex;
        } else {
            this.average = this.average / this.array.length;
        }
    }
    return this.average;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */