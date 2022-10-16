/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.items = [];
    this.currentIndex = 0;
    const bfs = (node) => {
        if (!node) return;
        if (node.left) bfs(node.left);
        this.items.push(node.val);
        if (node.right) bfs(node.right);
    }
    bfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.items[this.currentIndex++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.currentIndex < this.items.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */