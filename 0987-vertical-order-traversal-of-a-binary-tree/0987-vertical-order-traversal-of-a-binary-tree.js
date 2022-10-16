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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const stack = [{ node: root, row: 0, col: 0 }];
    const result = [];
    while(stack.length) {
        const shifted = stack.shift();
        if (shifted.node && shifted.node.left) {
            stack.push({
                node: shifted.node.left,
                row : shifted.row - 1,
                col: shifted.col - 1,
            })
        }
        if (shifted.node && shifted.node.right) {
            stack.push({
                node: shifted.node.right,
                row: shifted.row - 1,
                col: shifted.col + 1,
            })
        }
        result.push(shifted);
    }
    
    result.sort((a,b) => {
        if (a.col !== b.col) {
            return a.col - b.col;
        }
        if (a.row !== b.row) {
            return b.row - a.row;
        }
        return a.node.val - b.node.val
    });
    
    
    
    return Array.from(result.reduce((acc, item) => {
        if (!acc.has(item.col)) {
            acc.set(item.col, []);
        }
        acc.get(item.col).push(item.node.val)
        return acc;
    }, new Map()), ([col, item]) => item);
};