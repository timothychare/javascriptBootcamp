// create a function that takes an array of non-negative numbers and string and returns a new array without strings.

function filterArray(arr) {
    var regEX = /\D/g;
    var joinedArr = arr.join("");
    var filteredStr = joinedArr.replace(regEX,"");
    var filteredArray = [...filteredStr];
    return filteredArray;
};

console.log(filterArray([1,2,"a","b","f",51,32,"asd"]));