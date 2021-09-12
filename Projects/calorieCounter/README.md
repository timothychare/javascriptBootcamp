Mini App: Calorie Calculator
Calorie Calculator

Did you know that food label calorie percentages are based off a 2,000 calorie a day diet? Well, depending on many factors the amount of calories you should consume on a daily basis may be much higher or lower than this.

Let's create a fun mini app that let's you set a weekly calorie goal and tells you at the end of the week whether you are right on target, need to build more exercise into your week or whether you should head back to the dinner table to get seconds!




Challenge: The program will determine the actual and ideal calories you consumed last week. It will return a message based on if you ate too much or too little.

If you get stuck during this project, check out the project walkthrough video which can be found in the next video or I have the code listed for each step at the bottom of this challenge.

1. The first problem to solve is determining how many calories you consumed each day of the week.

You can create a function that returns any given day's number of calories consumed. Instead of writing seven different functions (one for each day of the week), let's write one function with a parameter for the day.

Create a function named inputCaloriesByDay with a single parameter named day.

2. The function should accept a day as an argument and return the number of calories you consumed.

For instance, if you consumed 3500 calories on Monday night, calling inputCaloriesByDay('monday') should return 3500.

Use an if/else or switch statement to implement this.

Next section of our course covers if/else and switch statements in depth. Please jump to those videos if you don't know how those statements work, then come back to this mini app challenge.

You can check out if/else docs here:  http://bit.ly/if-else-statement

You can check out switch docs here: http://bit.ly/javascript-switch

3. Test the function by calling it multiple times on different days and printing the results to the console.

You can remove the tests when you know your function works.

4. Now that you've written a function to get the calories consumed for each day, we need to do three things:

Get the total calories you actually consumed

Get the ideal calories that you preferred to consume

Calculate if you ate too much or too little

To get the total calories consumed, create a new function named getTotalCalories that takes no parameters.

5. Inside the getTotalCalories() function, call the inputCaloriesByDay() function for each day of the week. Add the results together and return the sum.

6. To get the ideal calorie total for the week, create a function named getIdealCalories with no parameters.

Inside the function, declare a variable named idealDailyCalories and set its value to your ideal calories consumed per day. Then return the idealDailyCalories multiplied by 7.

You'll want to multiply by 7 to get the total calories you prefer per week.

7. Test your two new functions by calling them and printing the results to the console.

You can remove the tests when you know your functions works.

8. Now that you can get the actual calories consumed and the ideal calories consumed, it's time to calculate whether you should exercise more or eat more.

Create a function named calculateHealthPlan with no parameters.

Inside of its block, create a variable named actualCalories set equal to the getTotalCalories() function call.

Then, create another variable named idealCalories, set equal to the getIdealCalories() function call.

9. Now that you have actualCalories and idealCalories, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

If actual actual calories consumed equals ideal calories consumed, log to the console: "You ate just the right amount of food!"

If the actual calories consumed is greater than the ideal calories consumed, log to the console: "Time to head to the gym!"

If the actual calories consumed is less than the ideal calories consumed, log to the console: "Time for seconds!"



10. On the last line of the program, start the program by calling the calculateHealthPlan() function.



Congratulations! You did it. If you ran into any troubles you can watch the next lesson where I walkthrough the code. Or, you can check your code step by step below.