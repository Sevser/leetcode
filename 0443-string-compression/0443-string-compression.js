/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let total = 0;
    let letterCount = 0;
    let currentLetter = null;
    const tempArr = [];
    chars.forEach(char => {
        if (currentLetter === null) {
            currentLetter = char;
            letterCount = 1;
            return;
        } else {
            if (currentLetter !== char) {
                if (letterCount > 1) {
                    tempArr.push(currentLetter, ...letterCount.toString().split(''));
                    total += 1 + letterCount.toString().length;
                    letterCount = 1;
                } else {
                    tempArr.push(currentLetter);
                    total += 1;
                }
                currentLetter = char;
            } else {
                letterCount += 1;
            }
        }
    });
    if (letterCount > 1) {
        tempArr.push(currentLetter, ...letterCount.toString().split(''));
        total += 1 + letterCount.toString().length;
    } else {
        tempArr.push(currentLetter);
        total += 1;
    }
    chars.splice(0, total, ...tempArr);
    return total;
};
