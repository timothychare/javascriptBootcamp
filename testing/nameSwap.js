// name swap, will take two names and swap their last with their first.

function nameSwapLong(str) {
    var strToArray = str.split(" ");
    console.log(strToArray);
    strToArray.reverse();
    console.log(strToArray);
    var swappedName = strToArray.join(" ")
    console.log(swappedName);
};

function nameSwapShort(str) {
    console.log(str.split(" ").reverse().join(" "));
};

nameSwapLong("Charles Manson");
nameSwapShort("Elon Musk");