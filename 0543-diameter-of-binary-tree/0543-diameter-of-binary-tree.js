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
var diameterOfBinaryTree = function(root) {
    let tempMax = -1;
    const calcDepth = (node) => {
        if (!node) return 0;
        let leftDepth = 0;
        let rightDepth = 0;
        leftDepth = calcDepth(node.left);
        rightDepth = calcDepth(node.right);
        if (tempMax < (leftDepth + rightDepth)) {
            tempMax = leftDepth + rightDepth;
        }
        return 1 + Math.max(leftDepth, rightDepth);
    }
    if (root && !root.left && !root.right) return 0;
    const left = calcDepth(root.left);
    const right = calcDepth(root.right);
    return Math.max(left + right, tempMax);
};