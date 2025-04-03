// Exercise 7: Display table with alternating row colors

// Get the container element
var container = document.getElementById("tableContainer");

// Create the table structure
var table = "<table border='1' cellspacing='0' cellpadding='5'>";
for (var i = 1; i <= 5; i++) {
    var color = (i % 2 === 0) ? "#f2f2f2" : "#ffffff";
    table += "<tr style='background-color:" + color + "'><td>Row " + i + "</td></tr>";
}
table += "</table>";

// Insert table into the container
container.innerHTML = table;
