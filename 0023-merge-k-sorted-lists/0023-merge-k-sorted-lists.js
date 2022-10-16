/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const findLeastIndex = (l) => {
    let index = 0;
    for (let i = 1; i < l.length; i++) {
        if (l[i].val < l[index].val) {
            index = i;
        }
    }
    return index;
};

var mergeKLists = function(lists) {
    if (lists.length === 0 || (lists.length === 1 && lists[0] === undefined))
        return null;
    
    let head = null;
    let nextEl = null;
    let currentArrays = lists;
    currentArrays = currentArrays.filter(i => i && i.val !== undefined);
    while (currentArrays.length) {
        const index = findLeastIndex(currentArrays);
        if (!head) {
            head = currentArrays[index];
            nextEl = head;
        } else {
            nextEl.next = currentArrays[index];
            nextEl = nextEl.next;
        }
        currentArrays[index] = currentArrays[index].next;
        currentArrays = currentArrays.filter(i => i);
    }
    return head;
};