function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    var myStr = "";
    myStr = str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase();
    return myStr;
};

console.log(echo("Mom!"));
console.log(echo("hey"));
console.log(echo("JUMp"));
