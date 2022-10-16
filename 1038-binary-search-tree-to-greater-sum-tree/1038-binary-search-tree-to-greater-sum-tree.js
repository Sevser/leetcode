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
var bstToGst = function(root) {
    let ret = null
    
    const calcValuesInSubTree = (node) => {
        if (!node) return 0;
        return node.val + calcValuesInSubTree(node.left) + calcValuesInSubTree(node.right);
    };
    
    const createTree = (root, addVal) => {
        if (!root) return null;
        const node = new TreeNode(root.val + calcValuesInSubTree(root.right) + addVal);
        node.right = createTree(root.right, addVal);
        node.left = createTree(root.left, node.val);
        return node;
    };
    
    ret = createTree(root, 0);
    return ret;
};