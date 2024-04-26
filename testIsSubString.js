function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here

    const myStr = subString.toLowerCase();

    if (myStr.includes(searchString.toLowerCase())) {
        console.log(subString + ' is in ' + searchString)
        return true;
    } else {
        console.log('false');
        return false;
    }
};

isSubString('Javier', 'JAVIER Martinez is a programmer');
