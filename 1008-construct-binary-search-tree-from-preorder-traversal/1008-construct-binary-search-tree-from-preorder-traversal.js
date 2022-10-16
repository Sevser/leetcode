/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0]);
    const addToTree = (root, value) => {
        if (!root) return new TreeNode(value);
        if (root.val > value) {
            root.left = addToTree(root.left, value);
        } else {
            root.right = addToTree(root.right, value)
        }
        return root;
    };
    for (let i = 1; i < preorder.length; i++) {
        root = addToTree(root, preorder[i]);
    }
    return root;
};