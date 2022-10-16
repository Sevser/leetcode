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
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let node = null;
    if ((root1 && root1.val !== undefined) || (root2 && root2.val !== undefined)) {
        node = new TreeNode(0);
    }
    if (root1 && root1.val !== undefined) {
        node.val += root1.val;
    }
    if (root2 && root2.val !== undefined) {
        node.val += root2.val;
    }
    if ((root1 && root1.left) || (root2 && root2.left)) {
        node.left = mergeTrees(root1 && root1.left, root2 && root2.left);
    }
    if ((root1 && root1.right) || (root2 && root2.right)) {
        node.right = mergeTrees(root1 && root1.right, root2 && root2.right);
    }
    return node;
};