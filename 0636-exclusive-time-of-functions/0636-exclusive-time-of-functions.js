/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    var callStack = [];
    const result = new Array(n);
    result.fill(0);
    
    for (let log of logs) {
        const logParsed = log.split(':');
        const id = parseInt(logParsed[0]);
        const action = logParsed[1];
        const timestamp = parseInt(logParsed[2]);
        if (action === 'start') {
            if (callStack.length) {                
                callStack[callStack.length - 1].total += timestamp - callStack[callStack.length - 1].start;
            }
            callStack.push({
                id: id,
                start: timestamp,
                total: 0,
            });
        } else {
            const finished = callStack.pop();
            result[finished.id] += finished.total + (timestamp - finished.start + 1);
            if (callStack.length) {
                callStack[callStack.length - 1].start = timestamp + 1;
            }
        }
        
    }
    
    return result;
};