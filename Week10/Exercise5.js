// Exercise 5: Display 4 images using a for loop

// Get the container element
var container = document.getElementById("imageContainer");

// Loop to create image elements and append them
tempHtml = "";
for (var i = 1; i <= 4; i++) {
    tempHtml += '<img src="dhoni.webp" alt="Image ' + i + '" style="width:100px; height:100px; margin:5px;">';
}
container.innerHTML = tempHtml;