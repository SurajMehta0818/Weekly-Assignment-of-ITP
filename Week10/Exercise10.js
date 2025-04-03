// Exercise 10: Function to calculate area of a rectangle

function calculateArea(length, breadth) {
    return length * breadth;
}

// Get input from the user
var length = parseFloat(prompt("Enter the length of the rectangle:"));
var breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));

// Calculate and display the area
alert("The area of the rectangle is: " + calculateArea(length, breadth));
