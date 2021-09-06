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
var weaponOptions = ["gun", "bear", "human"]

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


function determineWinner(userInput, computerChoice) {
  console.log("who is the winner?",userInput,computerChoice)
  if (userInput === computerChoice) {
      console.log( "Tie");
  } else {
      if (userInput === "human") {
          if (computerChoice === "bear") {
              console.log( "you lose"
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
}