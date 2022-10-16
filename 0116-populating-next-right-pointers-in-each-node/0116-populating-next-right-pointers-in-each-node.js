/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    const stack = [];
    let tempStack = [root];
    while (tempStack.length) {
        stack.push(...tempStack);
        tempStack = [];
        while (stack.length) {
            stack[0].next = stack[1] || null;
            const shifted = stack.shift();
            if (shifted.left) {
                tempStack.push(shifted.left);
            }
            if (shifted.right) {
                tempStack.push(shifted.right);
            }
        }
    }
    return root;
};