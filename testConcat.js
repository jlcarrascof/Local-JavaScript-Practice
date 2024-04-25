function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here

    var arr3 = arr1.concat(arr2);

    return arr3;
};

console.log(combineArrays([1, 5, 3], [8, 4, 6]));
