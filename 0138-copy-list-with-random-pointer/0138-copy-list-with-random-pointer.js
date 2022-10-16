/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null
    }
    const nHead = new Node(head.val);
    let tHead = nHead;
    let oHead = head.next;
    const findNodeByVal = (node, oldNode) => {
        if (node.val === oldNode.val) {
            const nodeNextVal = node.next !== null && node.next.val;
            const oldNodeNextVal = oldNode.next !== null && oldNode.next.val;
            if (nodeNextVal === oldNodeNextVal) {
                const nodeNextNextVal = node.next !== null && node.next.next !== null && node.next.next.val;
                const oldNodeNextNextVal = oldNode.next !== null && oldNode.next.next !== null && oldNode.next.next.val;
                if (nodeNextNextVal === oldNodeNextNextVal) {
                    return node;
                }
            }
        }
        return findNodeByVal(node.next, oldNode);
    }
    while (oHead) {
        tHead.next = new Node(oHead.val);
        tHead = tHead.next;
        oHead = oHead.next;
    }
    oHead = head;
    tHead = nHead;
    while (oHead) {
        if (oHead.random === null) {
            tHead.random = null;
            tHead = tHead.next;
            oHead = oHead.next;
            continue;
        }
        tHead.random = findNodeByVal(nHead, oHead.random);
        tHead = tHead.next;
        oHead = oHead.next;
    }
    return nHead;
};