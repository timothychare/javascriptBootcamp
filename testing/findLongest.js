// instructor left a lot of issues in this, Ill finish it later
// given a string of words adn return the length of the longest word.
// I should break the string into an array, remove any punctuation, then compare each words length to one another and return the largest word.
// Regex:
//     [   #Character block start.
//     ^   #Not these characters (letters, numbers).
//     \w  #Word characters.
//     \s  #Space characters.
//     ]   #Character block end.

function longestWordLength(str) {
    const removePunctuation = str.replace(/\W/g, " ");
    var longestWord = "0";
    const wordArray = removePunctuation.split(" ");

    for (let index = 0; index < wordArray.length; index++) {
        if (wordArray[index].length > longestWord) {
            longestWord = wordArray[index].length;
        }
    return longestWord;
    }
};

console.log(longestWordLength("Hi, where is the airport?"))
console.log(longestWordLength("Thanks for stopping by!"))