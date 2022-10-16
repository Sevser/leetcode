/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const set1 = new Set();
    const set2 = new Set();
    while (headA || headB) {
        if (headA) {
            set1.add(headA);
        }
        if (headB) {
            set2.add(headB);
        }
        if (set1.has(headB) && headB) {
            return headB;
        }
        if (set2.has(headA) && headA) {
            return headA;
        }
        if (headA) {
            headA = headA.next;
        }
        if (headB) {
            headB = headB.next;
        }
    }
    return null;
};