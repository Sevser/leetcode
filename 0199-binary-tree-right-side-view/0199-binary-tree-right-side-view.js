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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var tree = [];
    const dfs = (node, col, row, depth) => {
        if (!node) return;
        tree.push({ col, row, node });
        dfs(node.right, col + 2 / depth, row - 1, depth << 1);
        dfs(node.left, col - 2 / depth, row - 1, depth << 1);
    };
    
    dfs(root, 0, 0, 1);
    
    tree.sort((a,b) => {
        if (a.row !== b.row) {
            return b.row - a.row;
        }
        if (a.col !== b.col) {
            return b.col - a.col;
        }
        return b.node.val - a.node.val;    
    });
    
    const map = new Map();
    tree.forEach((item) => {
        if (!map.has(item.row)) {
            map.set(item.row, item.node.val);
        }
    })
    return [...map.values()];
};