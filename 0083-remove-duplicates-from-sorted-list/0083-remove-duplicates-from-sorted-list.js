/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let tHead = head;
    while (tHead && tHead.next) {
        if (tHead.next.val === tHead.val) {
            tHead.next = tHead.next.next;
            continue;
        }
        tHead = tHead.next;
    }
    return head;
};