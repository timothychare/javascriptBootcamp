// Rock paper scissors game but its bear, gun, human.

// using prompt-sync for console prompts. Remember to use ` with variables
const prompt = require('prompt-sync')({sigint: true});

//setting up my arrays
var emojis = ["😂", "🤣", "😒", "😁","😎", "😜", "👏", "😤","🔫","🐻","🧔"];
var gunEmoji = emojis[8];
var bearEmoji = emojis[9];
var humanEmoji = emojis[10];
var weaponOptions = ["gun","bear","human"];

// getting computers choice
let computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];

function getUserChoice(userInput) {
    userInput = prompt("Choose your weapon! bear, human or gun? ").toLowerCase();
    if (weaponOptions.indexOf(userInput) == -1) {
        console.log("bad choice")
    } else {
    console.log(userInput,"!? Very Powerful 😤 ")
    return userInput, " VS ", computerChoice;
    }
}

function determineWinner(weapon,computerChoice) {
    if (weapon === computerChoice) {
        return "Tie";
    }
    if (weapon == "human") {
        if (computerChoice == "bear") {
            return "you lose"
        } else {
            return "you WIN"
        }
    }
    if (weapon == "gun") {
        if (computerChoice == "human") {
            return "you lose"
        } else {
            return "you WIN"
        }
    }
    if (weapon == "bear") {
        if (computerChoice == "gun") {
            return "you lose"
        } else {
            return "you WIN"
        }
    }
}

function playGame() {
    getUserChoice();
    determineWinner();
}

playGame();

// //checking valid choice
// if (weapon == "gun") {
//     console.log(gunEmoji," VS ",computerChoice)
// } else if (weapon == "bear") {
//     console.log(bearEmoji," VS ",computerChoice)
// } else if (weapon == "human") {
//     console.log(humanEmoji," VS ",computerChoice)
// } else {
//     console.log("you fool, You cannot use that weapon here!")
// }

// // want to check if the weapon is in the emoji array to return emojis
// function isInArray(value, array) {
//     return array.indexOf(value) > -1;
//   }

//get random emoji function
function randomEmoji() {
    var randomEmoji = emojis[Math.floor(Math.random() * 8)];
    return(randomEmoji);
}


