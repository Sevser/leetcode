/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = '';
    while (head) {
        str = '' + str + head.val;
        head = head.next;
    }
    for (let i = 0; i < (Math.floor(str.length / 2) + 1); i++) {
        if (str[i] !== str[str.length - i - 1]) 
            return false;
    }
    return true;
};