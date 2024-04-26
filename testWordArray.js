function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here

    var foundWord = arr.indexOf(word);

    return foundWord;

};

result = wordWithinArray('Stanton', ['Cortes', 'Soto', 'Verdugo', 'Stanton', 'Judge']);

if (result !== -1) {
    console.log("I found the word in the array");
} else {
    console.log("I couldn't find the word in the array");
}
