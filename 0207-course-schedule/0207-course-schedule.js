function Node(val) {
    this.val = val === undefined ? undefined : val;
    this.nearby = [];
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const mapValues = new Map(); // key - num course, val - node
    for (let i = 0; i < numCourses; i++) {
        mapValues.set(i, new Node(i));
    }
    prerequisites.forEach(p => {
        const currNode = mapValues.get(p[0]);
        const dep = mapValues.get(p[1]);
        currNode.nearby.push(dep);
    });
    
    return [...mapValues.values()].every((node) => {
        const arr = new Array(numCourses);
        arr.fill(0);
        let res = true;
        const dfs = (node, arr) => {
            arr[node.val] = 1;
            for (let n of node.nearby) {
                if (arr[n.val] === 1) {
                    res = false;
                } else if (arr[n.val] === 0) {
                    dfs(n, arr);
                }
            }
            arr[node.val] = 2;
        }
        dfs(node, arr);
        return res;
    });
};