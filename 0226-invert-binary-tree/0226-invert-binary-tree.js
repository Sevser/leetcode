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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const ret = root;
    if (!root) return root;
    const stack = [root];
    while (stack.length) {
        const shifted = stack.shift();
        let temp = shifted.left;
        shifted.left = shifted.right;
        shifted.right = temp;
        if (shifted.left) stack.push(shifted.left);
        if (shifted.right) stack.push(shifted.right);
    }
    return ret;
};