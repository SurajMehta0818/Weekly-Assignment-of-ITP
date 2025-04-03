// Exercise 4: Display day of the week using switch case

// Get input from the user
var dayNumber = parseInt(prompt("Enter a number (1-7) for the day of the week:"));

// Determine the day using switch
switch (dayNumber) {
    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    case 3:
        alert("Tuesday");
        break;
    case 4:
        alert("Wednesday");
        break;
    case 5:
        alert("Thursday");
        break;
    case 6:
        alert("Friday");
        break;
    case 7:
        alert("Saturday");
        break;
    default:
        alert("Invalid input");
}