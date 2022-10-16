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
var swapPairs = function(head) {
    if (!head) return null;
    if (head.val !== undefined && head.next === null) return head;
    const arr = [];
    let nHead = null;
    while (head) {
        arr.push(head);
        head = head.next;
    }
    for (let i = 0; i < (arr.length - 1); i += 2) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
    }
    for (let i = 0; i < (arr.length - 1); i++) {
        arr[i].next = arr[i+1];
    }
    arr[arr.length - 1].next = null;
    return arr[0];
};