/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let i = 2;
    return sentence.split(' ').map((str, index) => {
        const fl = str[0].toLowerCase();
        if (fl === 'a' || fl === 'i' || fl === 'e' || fl === 'o' || fl === 'u') {
            return ''.concat(str, 'm').padEnd(str.length + i + 1 + index, 'a');
        }
        return ''.concat(str.slice(1), str[0], 'm').padEnd(str.length + i + 1 + index, 'a');
    }).join(' ')
};