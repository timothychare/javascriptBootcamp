// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples
// [4, 5, 1, 3] ➞ 5
// [300, 200, 600, 150] ➞ 600
// [1000, 1001, 857, 1] ➞ 1001
// Notes
// Expect either a positive integer or zero. Don't worry about negative integers.

    function findLargestNum(arr) {
        var largestNumber = 0;
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > largestNumber) {
                largestNumber = arr[index];
            }
        };
        return largestNumber;
    };


    console.log(findLargestNum([4, 5, 1, 3, 27]));
    console.log(findLargestNum([300, 200, 600, 150]));
    console.log(findLargestNum([1000, 1001, 857, 1]));