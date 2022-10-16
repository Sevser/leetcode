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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSym = (l, r) => {
        if (l && r) {
            if (l.val !== r.val) {
                return false;
            }
            if (l.left === null && r.right) {
                return false;
            }
            if (l.right === null && r.left) {
                return false;
            }
            if (!l.left && !l.right && !r.left && !r.right) {
                return true;
            }
            return isSym(l.left, r.right) && isSym(l.right, r.left);
        }
        if (!l && !r) {
            return true;
        }
        return false;
    };
    
    return isSym(root.left, root.right);
};