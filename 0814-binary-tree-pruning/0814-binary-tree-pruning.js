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
var pruneTree = function(root) {
    const hasOne = (node) => {
        if (!node) return false;
        if (node.val === 1) return true;
        return hasOne(node.left) || hasOne(node.right);
    }
    
    const createTree = (rt) => {
        let ret = null;
        if (!rt) {
            return ret;
        }
        if (hasOne(rt)) {
            ret = new TreeNode(rt.val);
        }
        if (hasOne(rt.left)) {
            ret.left = createTree(rt.left);
        }
        if (hasOne(rt.right)) {
            ret.right = createTree(rt.right);
        }
        return ret;
    }
    
    return createTree(root);
};