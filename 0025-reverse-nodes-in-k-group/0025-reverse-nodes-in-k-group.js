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
var reverseKGroup = function(head, k) {
    let arr = [];
    let curr = 0;
    let currNode = head;
    let lastInsertedNode = null;
    let retNode = head;
    while (currNode !== null) {
        if (arr.length === k) {
            const nextNode = arr[k - 1].next;
            arr.reverse();
            arr.forEach((item, index, array) => {
               if (index !== (array.length - 1)) {
                   item.next = array[index + 1];
               }
            });
            if (lastInsertedNode === null) {
                retNode = arr[0];
            } else {
                lastInsertedNode.next = arr[0];
            }
            lastInsertedNode = arr[k - 1];
            lastInsertedNode.next = nextNode;
            arr = [];
        } else {
            arr.push(currNode);
            currNode = currNode.next;
        }
    }
    if (arr.length === k) {
        const nextNode = arr[k - 1].next;
        arr.reverse();
        arr.forEach((item, index, array) => {
           if (index !== (array.length - 1)) {
               item.next = array[index + 1];
           }
        });
        if (lastInsertedNode === null) {
            retNode = arr[0];
        } else {
            lastInsertedNode.next = arr[0];
        }
        lastInsertedNode = arr[k - 1];
        lastInsertedNode.next = nextNode;
        arr = [];
    }
    return retNode;
};