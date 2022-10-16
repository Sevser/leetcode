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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    const stack = [root];
    let nearest = root.val;
    while (stack.length) {
        const shifted = stack.shift();
        if (!isNaN(shifted.val) && Math.abs(shifted.val - target) < Math.abs(nearest - target)) {
            nearest = shifted.val;
        }
        if (shifted.left) stack.push(shifted.left);
        if (shifted.right) stack.push(shifted.right);
    }
    return nearest;
};