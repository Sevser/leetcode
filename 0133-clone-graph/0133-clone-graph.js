
// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(root) {
    const map = new Map();
    const cloneNode = (node) => {
        if (!node) {
            return null
        }
        if (map.has(node.val)) {
            return map.get(node.val);
        }
        const ret = new Node();
        ret.val = node.val;
        map.set(node.val, ret);
        if (node.neighbors && node.neighbors.length) {
            ret.neighbors = node.neighbors.map(n => {
                const rn = cloneNode(n);
                return rn;
            });
        }
        return ret;
    };
    
    return cloneNode(root);
};