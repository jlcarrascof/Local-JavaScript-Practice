function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here

    const finalArray = [];
    for (let i=1; i <= max; i++) {
        if (i % 3 === 0) {
            finalArray.push(i);
            if (i % 5 === 0) {
                finalArray.pop(i);
            }
        } else if (i % 5 === 0) {
            finalArray.push(i);
        }
    }

    return finalArray;

};

result = fizzBuzz(30);
console.log(result);
