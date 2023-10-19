function dailyTemperatures(temperatures: number[]): number[] {
    return temperatures.reduceRight((acc, num: number, index: number, array: number[]) => {
        if (acc.stack.length) {
            acc.stack = acc.stack.filter(el => el.num > num);
            if (acc.stack[acc.stack.length - 1] === undefined) {
                acc.result.push(0);    
            } else {
                acc.result.push(acc.stack[acc.stack.length - 1].index - index);
            }
        } else {
            acc.result.push(0);
        }
        acc.stack.push({
            index,
            num,
        });
        return acc;
    }, {
        result: [] as Array<number>,
        stack: [] as Array<{ index: number, num: number }>,
    }).result.reverse();
};
