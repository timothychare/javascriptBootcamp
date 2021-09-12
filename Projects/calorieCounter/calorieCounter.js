//determining how many calories you consumed each day of the week.

daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function inputCaloriesByDay(day) {
    if (day == daysOfWeek[0]) {
        return 1600
    } else if(day == daysOfWeek[1]) {
        return 2600
    } else if(day == daysOfWeek[2]) {
        return 3600
    } else if (day == daysOfWeek[3]) {
        return 4600
    } else if(day == daysOfWeek[4]) {
        return 5600
    } else if(day == daysOfWeek[5]) {
        return 6600
    } else if(day == daysOfWeek[6]) {
        return 7600
    } else if(day == daysOfWeek[7]) {
        return 8600
    } else {
        console.log("choose a valid day")
    }
};

function getTotalCalories() {
    let calories = [];
    for (let index = 0; index < daysOfWeek.length + 1; index++) {
        calories.push(inputCaloriesByDay(daysOfWeek[index]));
    }
    let sum = calories.reduce((a, b) => a + b);
    return sum;
};


function getIdealCalories() {
    var idealDailyCalories = 1500;
    return idealDailyCalories * 7;
};

function calculateHealthPlan() {
    var actualCalories = getTotalCalories()
    var idealCalories = getIdealCalories()
    if (actualCalories == idealCalories) {
        console.log ("Good Job!")
    }
    if (actualCalories > idealCalories) {
        console.log ("Time to head to the gym!")
    }
    if (actualCalories < idealCalories) {
        console.log ("Time for seconds!")
    }
}

calculateHealthPlan();