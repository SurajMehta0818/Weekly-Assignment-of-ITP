// Exercise 3: Grading system using if...else if...else

// Get marks from the user
var marks = parseInt(prompt("Enter your marks:"));

// Determine the grade based on the marks
if (marks >= 80 && marks <= 100) {
    alert("Distinction");
} else if (marks >= 60 && marks < 80) {
    alert("First Division");
} else if (marks >= 50 && marks < 60) {
    alert("Second Division");
} else if (marks >= 40 && marks < 50) {
    alert("Third Division");
} else {
    alert("Fail");
}