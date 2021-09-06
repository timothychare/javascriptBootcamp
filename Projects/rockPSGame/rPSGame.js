// Rock paper scissoers game but its bear, gun, human.

// using prompt-sync for console prompts. Remember to use ` with variables
const prompt = require('prompt-sync')({sigint: true});

//setting up my arrays
var emojis = ["😂", "🤣", "😒", "😁","😎", "😜", "👏", "😤","🔫","🐻","🧔"];
var gunEmoji = emojis[8];
var bearEmoji = emojis[9];
var humanEmoji = emojis[10];
var weaponOptions = ["gun","bear","human"];

let userInput = prompt("Choose your weapon! bear, human or gun? ");
console.log(`${userInput}!? Very Powerful 😤 `);

//lower case user input for comparison
let weapon = userInput.toLowerCase();

// getting computers choice
let computerChoise = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];

//checking valid choice
if (weapon == "gun") {
    console.log(gunEmoji," VS ",computerChoise)
} else if (weapon == "bear") {
    console.log(bearEmoji," VS ",computerChoise)
} else if (weapon == "human") {
    console.log(humanEmoji," VS ",computerChoise)
} else {
    console.log("you fool, You cannot use that weapon here!")
}

// want to check if the weapon is in the emoji arry to return emojis
function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }

//get random emoji function
function randomEmoji() {
    var randomEmoji = emojis[Math.floor(Math.random() * 8)];
    return(randomEmoji);
}

function determinWinner(weapon,computerChoise) {
    if (weapon == computerChoise) {
        console.log("tie");
    }
    else if (weapon == "human") {
        if (computerChoise == "bear") {
            console.log("you lose")
        } else {
            console.log("you WIN")
        }
    }
    else if (weapon == "gun") {
        if (computerChoise == "human") {
            console.log("you lose")
        } else {
            console.log("you WIN")
        }
    }
    else if (weapon == "bear") {
        if (computerChoise == "gun") {
            console.log("you lose")
        } else {
            console.log("you WIN")
        }
    }
}

determinWinner();