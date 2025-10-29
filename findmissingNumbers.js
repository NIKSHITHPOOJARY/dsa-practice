function findmissingNumbersinArray(arr, n) {
    let missingNumbers = [];
    let numSet = new Set(arr);

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}