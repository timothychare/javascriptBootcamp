// using prompt-sync for console prompts. Remember to use ` with variables
const prompt = require('prompt-sync')({
    sigint: true
});

var eightBallResponses = ["Better not tell you now.","Concentrate and ask again.","Reply hazy try again","Cannot predict now","My reply is no.","My sources say no","Outlook not so good","Signs point to yes"]

userName = prompt("What is your name? ");
    if (userName != "") {
        console.log("Hello ",userName +"!")
    } else {
        console.log("Hello!")
    };

function magicEightBall() {
    var userQuestion = prompt("What would you like to ask the Magic 8 Ball? ");
    var eightBallResponse = eightBallResponses[Math.floor(Math.random() * 8)];
    console.log(eightBallResponse)
    magicEightBall();
}

magicEightBall();