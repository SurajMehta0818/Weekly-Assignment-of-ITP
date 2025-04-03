// Exercise 11: Add and display elements in an array using functions

var items = [];

// Function to add an item to the array
function addItem(item) {
    items.push(item);
}

// Function to display all items in the array
function displayItems() {
    alert("Items: " + items.join(", "));
}

// Adding items through user input
var numItems = parseInt(prompt("How many items do you want to add?"));
for (var i = 0; i < numItems; i++) {
    var item = prompt("Enter item " + (i + 1) + ":");
    addItem(item);
}

// Display the items
displayItems();
