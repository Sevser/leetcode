/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let over = 0;
    let tmpRes = 0;
    let firstNode = new ListNode();
    let currentNode = firstNode;
    while (l1 || l2) {
        tmpRes = over;
        if (l1 && l1.val) {
            tmpRes += l1.val;
        }
        if (l2 && l2.val) {
            tmpRes += l2.val;
        }
        currentNode.val = tmpRes % 10;
        over = Math.floor(tmpRes/10);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        if (l1 || l2 || over) {
            currentNode.next = new ListNode(over);
            currentNode = currentNode.next;
        }
    }
    return firstNode;
};