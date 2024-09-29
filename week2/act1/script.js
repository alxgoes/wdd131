const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


console.log("For Loop:");
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


console.log("While Loop:");
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}


console.log("forEach Loop:");
studentReport.forEach(value => {
    if (value < LIMIT) {
        console.log(value);
    }
});


console.log("for...in Loop:");
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}


console.log("Next Days:");
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
let result = [];

for (let i = 0; i < DAYS; i++) {
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    result.push(dayNames[nextDay.getDay()]);
}

console.log(result);
