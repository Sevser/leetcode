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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    if (!root) {
        return null;
    }
    let queue = [[root, 1]];
    while (queue.length) {
        const [el, depth] = queue.shift();
        if (depth > max) {
            max = depth;
        }
        if (el.left) {
            queue.push([el.left, depth + 1]);
        }
        if (el.right) {
            queue.push([el.right, depth + 1]);
        }
    }
    return max;
};