function duplicateInArray(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

let arr = [1, 2, 3, 4, 5, 3, 2, 1];
console.log("Duplicates in array:", duplicateInArray(arr));  