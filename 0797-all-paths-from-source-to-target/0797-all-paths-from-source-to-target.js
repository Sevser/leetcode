/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let lastIndex = graph.length - 1;
    let ret = [];
    let stack = [[lastIndex]];
    while (stack.length) {
        let shifted = stack.shift();
        graph
            .map((item, index) => [item, index])
            .filter(a => (a[0].indexOf(shifted[0]) + 1))
            .forEach(a => {
                if (a[1] === 0) {
                    ret.push([0, ...shifted]);
                } else {
                    stack.push([a[1], ...shifted])
                }
            });
    }
    return ret
};