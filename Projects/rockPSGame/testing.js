const prompt = require("prompt-sync")();

// // // const weapon = prompt("Choose your weapon!");
// // // console.log("${weapon} !? Very Powerful 😤")

// // let weapon = prompt("Choose your weapon! bear, human or gun? ");
// // isInArray(weapon,emojis) {
// //   if 
// // }
// // console.log(`${weapon}!? Very Powerful 😤 `);

// // function isInArray(value, array) {
// //   return array.indexOf(value) > -1;
// // }

// // var emojis = ["😂", "🤣", "😒", "😁","😎", "😜", "👏", "😤","🔫","🐻","🧔"];


// // setting up weapon array
var weaponOptions = ["gun","bear","human"]

let userInput = prompt("Choose your weapon! bear, human or gun? ").toLowerCase();
if (weaponOptions.indexOf(userInput) == -1) {
    console.log("bad choice")
} else {
    console.log("good choice")
}

// // // getting computers choice
// // function getComputerChoice() {
// //   let computerChoise = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
// //   console.log(computerChoise);
// //   return computerChoise;
// // }


// let computerChoise = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
// console.log(computerChoise)