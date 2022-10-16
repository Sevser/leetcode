/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.store = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const val = this.store.get(key);
    if (val === undefined) {
        return -1;
    }
    this.store.delete(key);
    this.store.set(key, val);
    return this.store.get(key, val);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.store.has(key)) {
        this.store.delete(key);
    }
    this.store.set(key, value);
    if (this.store.size > this.capacity) {
        this.store.delete(this.store.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */