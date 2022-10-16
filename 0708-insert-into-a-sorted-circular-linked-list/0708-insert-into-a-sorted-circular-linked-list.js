/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (!head) {
        const ret = new Node(insertVal);
        ret.next = ret;
        return ret;
    }
    if (head && head.next === head) {
        const ret = new Node(insertVal);
        ret.next = head;
        head.next = ret;
        return head;
    }
    let current = head;
    while (true) {
        if (current.val <= insertVal && (current.next.val >= insertVal || current.next.val < current.val)) {
            break;
        } else if (current.val > current.next.val && current.next.val > insertVal) {
            break;
        } else if (current.next === head) {
            break;
        }  else {
            current = current.next;
        }
    }
    const el = new Node(insertVal, current.next);
    current.next = el;
    return head;
};