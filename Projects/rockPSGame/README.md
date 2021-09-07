Mini App: Bear, Human, Gun Game
Bear, Human, or Gun

Bear human gun is just like Rock paper scissors. Each player chooses either bear, human, or gun. The items are compared, and whichever player chooses the more powerful item wins.


The possible outcomes are:

bear mauls human.

human disarms gun.

gun shoots bear.

If there's a tie, then the game ends in a draw.

Challenge: Our code will break the game into four parts:

Get the user's choice.

Get the computer's choice.

Compare the two choices and determine a winner.

Start the program and display the results.

If you get stuck during this project, check out the project walkthrough video which can be found in the next lesson(s) or look at the code snippets for each step at the bottom of this challenge.

1. The user should be able to choose 'bear', 'human', or 'gun' when the game starts.

Create a function named getUserChoice that takes a single parameter userInput.

2. Since a user can pass in a parameter, such as 'Bear' or 'bear' with different capitalizations, begin by utilizing JavaScript's toLowerCase() function to make the userInput all lowercase.

You can use code like this:

userInput = userInput.toLowerCase();
3. When getting the user's choice, you should also check to make sure that the user typed a valid choice: 'bear', 'human', or 'gun'.

Inside getUserChoice(), write an if/elsestatement that makes sure the userInput is either 'bear', 'human', or 'gun'. If it does, then return the userInput. If not, use console.log to print an error message to the console.

We haven't covered if / else statements yet in this course. In the following walkthrough video you can watch me implement this step! However, you could also pause for a moment and take a quick look at the if / else whiteboard video and lab then continue on with this step. Those lessons are titled "Loops" but fundamentally teach on if / else statements.

4. Test the function by calling it with valid and invalid input, and printing the results to the console.

You can delete this when you know your function works.

5. Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2 and assign to variable randomNumber. Then, depending on the number, return either 'bear', 'human', or 'gun'. Again, you can use if/else or switch for this logic.

6.

Test the function by calling it multiple times and printing the results to the console.

You can delete this when you know your function works.

7. Now it's time to determine a winner.

Create a function named determineWinnerthat takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.

Let's deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.

8. If the game is not a tie, you'll need to determine a winner.

Begin by writing an if statement that checks if the userChoice is 'human'. Inside the if statement's block, write another if/else statement. The inner if/elseshould check if the computerChoice is 'bear'. If so, return a message that the computer won. If not, return a message that the user won.

9. Next, write another if statement for if the userChoice is 'bear'. The inner if/elseshould check if the computerChoice is 'gun'.

If so, return a message that the computer won. If not, return a message that the user won.

10. Next, write yet another if statement for if the userChoice is 'gun'.

The inner if/elseshould check if the computerChoice is 'human'. If so, return a message that the computer won. If not, return a message that the user won.

11. Test your function by logging it to the console!

12. Everything is set up. Now you need to start the game and log the results.

Create a function named playGame.

Inside the playGame() function, create a variable named promptUserChoice and assign the value of prompt("Please choose bear, human or gun"); This will allow the user to provide their input.

Now pass in promptUserChoice as an argument to the function getUserChoice(),  and assign to the variable userChoice.

Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().

Under both of these variables, use console.log to print them to the console.

13. Let's determine who won.

Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.

14. Finally, to start the game, call the playGame()function on the last line of your program.



Congratulations! You did it. If you got stuck anywhere you can check out the following video where I walk through the steps or you can look at the code snippets below for each challenge.



1.

function getUserChoice(userInput) {
}
2.

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
}
3.

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'Please enter valid option';
    }
}
4.

console.log(getUserChoice('Bear'); // 'bear'
console.log(getUserChoice('bear'); // 'bear'
console.log(getUserChoice('duck'); // 'Please enter valid option'
5.

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}
6.

console.log(getComputerChoice();

7.

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
}
8.

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
}
9.

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
}
10.

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}
11.

console.log(determineWinner('bear', 'human'));
console.log(determineWinner('bear', 'gun'));


12.

function playGame() {
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
}
13.

function playGame() {
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
14.

playGame();