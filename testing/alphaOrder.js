// take a string and return it sorted in alphabetical order


function alphaOrder(str) {
    var strArray = str.toLowerCase().split("");
    var sortedArray = strArray.sort();
    var alphaOrdered = sortedArray.join("");
    return alphaOrdered
};

console.log(alphaOrder("ApeBoy"));
console.log(alphaOrder("Bbabigail"));