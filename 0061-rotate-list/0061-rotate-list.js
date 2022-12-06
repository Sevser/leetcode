/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if (!head) {
        return head;
    }
    let totalEl = 0;
    let thead = head;
    while (thead.next !== null) {
        thead = thead.next;
        totalEl++;
    }
    if ((k % (totalEl + 1)) === 0) {
        return head;
    }
    thead.next = head;
    let count = totalEl - k % (totalEl + 1) + 1;
    while(count > 0) {
        head = head.next;
        count--;
    }
    thead = head;
    while(totalEl > 0) {
        thead = thead.next;
        totalEl--;
    }
    thead.next = null;
    return head;
};