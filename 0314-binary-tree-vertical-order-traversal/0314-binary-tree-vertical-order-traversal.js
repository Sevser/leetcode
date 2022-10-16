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
var verticalOrder = function(root) {
    var tree = {};
    var tempQueue = [{ el: root, position: 0 }];
    while(tempQueue.length) {
        var shifted = tempQueue.shift();
        if (shifted.el && shifted.el.left) {
            tempQueue.push({ el: shifted.el.left, position: shifted.position - 1 });
        }
        if (shifted.el && shifted.el.right) {
            tempQueue.push({ el: shifted.el.right, position: shifted.position + 1 });
        }
        if (shifted.el) {
            if (tree[shifted.position]) {
                tree[shifted.position].push(shifted.el.val);
            } else {
                tree[shifted.position] = [shifted.el.val];
            }
        }
    }
    return Object.keys(tree).sort(function (a, b) { return a - b }).map(function (key) { return tree[key] })
    
};