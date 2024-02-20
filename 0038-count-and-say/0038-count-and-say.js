const calcString = n => n.split('').reduce((acc, letter, index, array) => {
        if (acc.letter === '') {
            acc.letter = letter;
            acc.count = 1;
        } else if (acc.letter === letter) {
            acc.count++;
        } else {
            acc.result = acc.result + acc.count + acc.letter;
            acc.letter = letter;
            acc.count = 1;
        }
        if (index === array.length - 1) {
            acc.result = acc.result + acc.count + acc.letter;
        }
        return acc;
    }, { result: '', letter: '', count: 0}).result;

function countAndSay(n: number): string {
    const results = new Array<string>();
    results.push('1');
    for (let i = 1; i < n; i++ ) {
        results.push(calcString(results[results.length - 1]));
    }
    return results[results.length - 1];
};
