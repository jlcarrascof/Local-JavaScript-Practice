function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    var newArray = [];

    for (let i=0; i < nums.length; i++) {
        newArray.push(nums[i] * 2);
    }

    return newArray;
};

var originalArray = [5,8,14,2,3];
result = doubler(originalArray);

console.log('Original Array ' + originalArray);
console.log('Final Array ' + result);
