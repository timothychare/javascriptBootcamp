// using spread operator to alphabetize a string

function alphaOrder(str) {
    var lowerStr = str.toLowerCase().trim()
    var strToArray = [...lowerStr];
    var sortArray = strToArray.sort();
    var joinedSorted = sortArray.join("");
    return joinedSorted
};

console.log(alphaOrder("This is my string"))