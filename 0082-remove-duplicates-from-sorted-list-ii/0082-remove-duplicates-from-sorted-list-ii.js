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
    if (!head) return null
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    const set = new Set();
    const set2 = new Map();
    arr.forEach(el => {
        if (set.has(el.val)) {
            return;
        }
        if (set2.has(el.val)) {
            set.add(el.val);
            set2.delete(el.val)
        } else {
            set2.set(el.val, el);
        }
    })
    const ret = [];
    for (let i of set2) {
        if (ret.length) {
            ret[ret.length - 1].next = i[1];
        }
        ret.push(i[1]);
    }
    if (ret.length) {
        ret[ret.length - 1].next = null;
        return ret[0]
    }
    return null;
};