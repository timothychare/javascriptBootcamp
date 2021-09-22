// take a string and return it sorted in alphabetical order


function alphaOrder(str) {
    var strArray = str.toLowerCase().split("");
    var sortedArray = strArray.sort();
    var alphaOrdered = sortedArray.join("");
    return alphaOrdered
};


function alphaOrderedOneStep(str) {
    return str.toLowerCase().split('').sort().join('');
}
console.log(alphaOrder("ApeBoy"));
console.log(alphaOrderedOneStep("Bbabigail"));