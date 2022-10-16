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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const queue = [root];
    let res = 0;
    while (queue.length) {
        const shifted = queue.shift();
        if (shifted.val >= low && shifted.val <= high) {
            res += shifted.val;
        }
        if (shifted.left) {
            queue.push(shifted.left);
        }
        if (shifted.right) {
            queue.push(shifted.right);
        }
    }
    return res;
};