// Exercise 9: Compute sum and product of an array

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
}

alert("Sum: " + sum + "\nProduct: " + product);
