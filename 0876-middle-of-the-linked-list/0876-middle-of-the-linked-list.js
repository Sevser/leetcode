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
var middleNode = function(head) {
    let length = 1;
    let middle = head;
    while (head) {
        head = head.next;
        length++;
        if (length % 2) {
            middle = middle.next;
        }
    }
    return middle;
};