// Rock paper scissors game but its bear, gun, human.

// using prompt-sync for console prompts. Remember to use ` with variables
const prompt = require('prompt-sync')({
    sigint: true
});

//setting up my arrays
var emojis = ["😂", "🤣", "😒", "😁", "😎", "😜", "👏", "😤", "🔫", "🐻", "🧔"];
var gunEmoji = emojis[8];
var bearEmoji = emojis[9];
var humanEmoji = emojis[10];
var weaponOptions = ["gun", "bear", "human"];








// getting computers choice
var computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];

function getUserChoice() {
    console.log("Weapons available: ","Bear", bearEmoji,"Human",humanEmoji,"Gun",gunEmoji)
    userInput = prompt("Choose your weapon! ").toLowerCase();
    if (weaponOptions.indexOf(userInput) == -1) {
        console.log("bad choice");
    } else {
        console.log(userInput, "!? Very Powerful 😤 ");
        console.log(userInput, " VS ", computerChoice);
    }
    return userInput;
};





playGame();

function playGame() {
    getUserChoice();
    determineWinner(userInput, computerChoice);
}




function determineWinner(userInput, computerChoice) {
    console.log("who is the winner?",userInput,computerChoice)
    if (userInput === computerChoice) {
        console.log( "Tie");
    } else {
        if (userInput === "human") {
            if (computerChoice === "bear") {
                console.log( "you lose");
            } else {
                console.log( "you WIN");
            }
        }
        if (userInput === "gun") {
            if (computerChoice === "human") {
                console.log( "you lose");
            } else {
                console.log( "you WIN");
            }
        }
        if (userInput === "bear") {
            if (computerChoice === "gun") {
                console.log( "you lose");
            } else {
                console.log( "you WIN");
            }
        }
    }
    playGame();
  }

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
    return (randomEmoji);
}