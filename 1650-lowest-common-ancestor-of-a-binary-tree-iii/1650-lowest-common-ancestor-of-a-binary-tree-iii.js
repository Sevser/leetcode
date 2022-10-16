/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    var set = new Set();
    set.add(p);
    set.add(q);
    var tempP = p;
    var tempQ = q;
    var result = null;
    while (true) {
        if (set.has(tempP.parent)) {
            result = tempP.parent;
            break;
        } else if (tempP.parent !== null) {
            set.add(tempP.parent);
            tempP = tempP.parent;
        }
        if (set.has(tempQ.parent)) {
            result = tempQ.parent;
            break;
        } else if (tempQ.parent !== null) {
            set.add(tempQ.parent);
            tempQ = tempQ.parent;
        }
    }
    return result;
};