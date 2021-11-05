// write a function that repeats a string as many times as the number provided

function repeatString(str, num) {
    var finalString = "";
    if (num <= 0) {
        return finalString;
    }
    for (let index = 1; index < num + 1; index++) {
        finalString += str;
        
    };
    console.log(finalString);
};

repeatString("duck ",4);