/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const getListFromNode = (root) => {
        if (!root) return [];
        return [...getListFromNode(root.left), root.val, ...getListFromNode(root.right)];
    }
    return [...getListFromNode(root1), ...getListFromNode(root2)].sort((a, b) => a - b);
};