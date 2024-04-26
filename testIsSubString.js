function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here

    const myStr = searchString.toLowerCase();

    if (myStr.includes(subString.toLowerCase())) {
        console.log(subString + ' is in ' + searchString)
        return true;
    } else {
        console.log('false');
        return false;
    }
};

isSubString('JAVIER Martinez is a programmer', 'Javier');
