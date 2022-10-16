/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    var result = [];
    var handle = (node) => {
        if (node && node.left) {
            handle(node.left);
        }
        if (node) {
            result.push(new Node(node.val, null, null));
        }
        if (node && node.right) {
            handle(node.right);
        }
    };
    handle(root);
    result
        .forEach((node, index, array) => {
            if (!index) {
                node.left = array[array.length - 1];
            } else {
                node.left = array[index - 1];
            }
            if (index === array.length - 1) {
                node.right = array[0];
            } else {
                node.right = array[index + 1];
            }
        });
    return result[0];
};