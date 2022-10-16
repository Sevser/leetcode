/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const findNodeAsDescendants = (r, n) => {
        if (r.val === n.val)
            return true;
        const rootArray = [r];
        let hasRootAsDescendants = false;
        while (rootArray.length) {
            const shifted = rootArray.shift();
            if (shifted.left) {
                if (shifted.left.val !== n.val) {
                    rootArray.push(shifted.left);
                } else {
                    hasRootAsDescendants = true;
                    break;
                }
            }
            if (shifted.right) {
                if (shifted.right.val !== n.val) {
                    rootArray.push(shifted.right);
                } else {
                    hasRootAsDescendants = true;
                    break;
                }
            }
        }
        return hasRootAsDescendants;
    };
    
    var result = root;
    var rArray = [root];
    while(rArray.length) {
        let tRoot = rArray.shift();
        if (tRoot.left) {
            rArray.push(tRoot.left);
        }
        if (tRoot.right) {
            rArray.push(tRoot.right);
        }
        if (findNodeAsDescendants(tRoot, p) && findNodeAsDescendants(tRoot, q)) {
            result = tRoot;
        }
    }
    return result;
};