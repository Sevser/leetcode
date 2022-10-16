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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false
    }
    const elements = [{ node: root, path: 0 }];
    while (elements.length) {
        const el = elements.shift();
        if (!el.node.right && !el.node.left) {
            if ((el.path + el.node.val) === targetSum) {
                return true;
            }
        }
        if (el.node.left) {
            elements.push({
                node: el.node.left,
                path: el.path + el.node.val,
            })
        }
        if (el.node.right) {
            elements.push({
                node: el.node.right,
                path: el.path + el.node.val,
            })
        }
    }
    return false;
};