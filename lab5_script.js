let studentName = "Ita, Louis Michael";
let age = 21;
let major = "Computer Engineering";

console.log("Student Name: " + studentName);
console.log("Age: " + age);
console.log("Major: " + major);

function welcome(name) {
    alert("Welcome to JavaScript, " + name + "!");
}

welcome(studentName);

function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let total = addNumbers(30, 45);
alert("The sum is: " + total);

let userNumber = Number(prompt("Enter any whole number"));

if (isNaN(userNumber)) {
    alert("Please enter a valid number.");
} else if (userNumber % 2 === 0) {
    alert(userNumber + " is an even number.");
} else {
    alert(userNumber + " is an odd number.");
}

let fruits = ["Orange", "Pineapple", "Apple", "Watermelon", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
