/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const getDomains = (str) => {
        return str.split('.').reduce((acc, domain, index, array) => {
            acc.push(array.slice(index).join('.'));
            return acc;
        }, []);
    };
    const mappedDomains = cpdomains.reduce((acc, item) => {
        let [count, domain] = item.split(' ');
        count = parseInt(count);
        getDomains(domain).forEach(domain => {
            if (acc.has(domain)) {
                acc.set(domain, acc.get(domain) + count);
            } else {
                acc.set(domain, count);
            }
        });
        return acc;
    }, new Map());
    return [...mappedDomains.entries()].map(([key, value]) => `${value} ${key}`);
};