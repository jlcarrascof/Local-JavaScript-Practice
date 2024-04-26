function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here

    var count = 0;
    for (let i=0; i < word.length; i++) {
        var char = word[i];
        if (char === "a" || char === "A") {
            count += 1;
        }
    }

    return count;
};

let numbers = aCounter("AafjflkdajddjdAsjdaA");
console.log("We have " + numbers + " letters 'A' or 'a' in the word");
