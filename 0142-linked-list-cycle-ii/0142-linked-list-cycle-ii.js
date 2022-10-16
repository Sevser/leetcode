/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let set = new Set();
    while (head) {
        if (head.next === null) {
            return null;
        }
        if (set.has(head)) {
            return head;
        } else {
            set.add(head);
        }
        head = head.next;
    }
    return null;
};