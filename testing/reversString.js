// write a function to reverse any string.

function reverseString(str) {
    return str.toLowerCase().split("").reverse().join("");
};

console.log(reverseString("Bus"));
console.log(reverseString("Truck"));