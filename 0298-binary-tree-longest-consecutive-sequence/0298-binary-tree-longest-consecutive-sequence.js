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
 * @return {number}
 */
var longestConsecutive = function(root) {
    let max = 0;
    const stack = [[root, 1]];
    while (stack.length) {
        const shifted = stack.shift();
        if (shifted[1] > max) {
            max = shifted[1];
        }
        if (shifted[0].left) {
            if (shifted[0].left.val === (shifted[0].val + 1)) {
                stack.push([shifted[0].left, shifted[1] + 1]) 
            } else {
                stack.push([shifted[0].left, 1]) 
            }
        }
        if (shifted[0].right) {
            if (shifted[0].right.val === (shifted[0].val + 1)) {
                stack.push([shifted[0].right, shifted[1] + 1]) 
            } else {
                stack.push([shifted[0].right, 1]) 
            }
        }
    }
    return max;
};