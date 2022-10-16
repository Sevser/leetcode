/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prev = head;
    let iter = head;
    let lag = 0;
    let totLength = 0;
    while (iter) {
        iter = iter.next;
        totLength++;
        if (lag === (n + 1)) {
            prev = prev.next;
        } else {
            lag++;
        }
    }
    if (n === totLength) {
        return head.next;
    }
    if (prev.next) {
        prev.next = prev.next.next;
    }
    return head;
};