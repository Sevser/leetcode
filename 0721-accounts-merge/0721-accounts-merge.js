/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let accountId = 1;
    let tempAccId = 0;
    const result = [];
    const accountEmails = new Map();
    const accountName = new Map();
    const accountMerge = new Map();
    for (let acc of accounts) {
        accountName.set(accountId, acc[0]);
        const sliced = acc.slice(1);
        for (let email of sliced) {
            if (accountEmails.has(email) && !tempAccId) {
                tempAccId = accountEmails.get(email);
            } else if (accountEmails.has(email) && tempAccId) {
                const newTempAccId = accountEmails.get(email);
                for (let [key, value] of accountEmails) {
                    if (value === newTempAccId) {
                        accountEmails.set(key, tempAccId);
                    }
                }
            }
        }
        for (let email of sliced) {
            if (tempAccId) {
                accountEmails.set(email, tempAccId);   
            } else {
                accountEmails.set(email, accountId);
            }
        }
        accountId++;
        tempAccId = 0;
    }
    for (let [email, accId] of accountEmails) {
        if (!accountMerge.has(accId)) {
            accountMerge.set(accId, [accountName.get(accId)]);
        }
        accountMerge.get(accId).push(email);
    }
    
    
    return [...accountMerge.values()]
        .map((acc) => ([acc[0], ...acc.slice(1).sort()]));
};