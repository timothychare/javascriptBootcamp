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

function getUserChoice() {
    console.log("Weapons available: ", "Bear", bearEmoji, "Human", humanEmoji, "Gun", gunEmoji + "\n");
    userInput = prompt("Choose your weapon! ").toLowerCase();
    if (weaponOptions.indexOf(userInput) == -1) {
        console.log("bad choice");
    } else {
        console.log(userInput + "!?" + "\n" + "Very Powerful 😤 " + "\n");
    }
    return userInput;
};


function getComputerChoice() {
    computerChoice = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
    return computerChoice;
}


playGame();

function playGame() {
    getUserChoice();
    getComputerChoice();
    setTimeout(determineWinner, 10000);
    determineWinner(userInput, computerChoice);
}


function determineWinner() {
    console.log("who is the winner?" + "\n")
    console.log(userInput, " VS ", computerChoice + "\n");
    if (userInput === computerChoice) {
        console.log("You are evenly matched!" + "\n" + "TIE!" + "\n");
    } else {
        if (userInput === "human") {
            if (computerChoice === "bear") {
                console.log("bear mauls human!" + "\n", "You Lose!" + "\n");
            } else {
                console.log("You Disarmed", computerChoice + "!!!" + "\n");
            }
        }
        if (userInput === "gun") {
            if (computerChoice === "human") {
                console.log("human disarms gun!" + "\n", "You Lose!" + "\n");
            } else {
                console.log("You Shot", computerChoice + "!!!" + "\n");
            }
        }
        if (userInput === "bear") {
            if (computerChoice === "gun") {
                console.log("gun shoots bear!" + "\n", "You Lose!" + "\n");
            } else {
                console.log("You MAULED", computerChoice + "!!!" + "\n");
            }
        }
    }
    playGame();
}

//get random emoji function
function randomEmoji() {
    var randomEmoji = emojis[Math.floor(Math.random() * 8)];
    return (randomEmoji);
}