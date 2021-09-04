// Random insult generator

// define variables

let count = 0

var randomBodyParts = ["head", "foot", "toe", "neck"];

var randomAdjectives = ["old", "hairy", "crispy", "fat"];

var randomWords = ["porkchop", "hatchet", "busted", "dumb"];

var randomEmojis = ["😂", "🤣", "😒", "😁","😎", "😜", "👏", "😤"];

// get random body part

function getWord() {
    var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

    var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

    var randomWord = randomWords[Math.floor(Math.random() * 4)];

    var randomEmoji = randomEmojis[Math.floor(Math.random() * 8)];

    console.log("ole",randomAdjective,randomWord,randomBodyPart," ",randomEmoji);
}

setInterval(getWord, 1500);

