var inputNumber = prompt("Please enter a number between 1 - 100");

if (inputNumber > 80 && inputNumber < 100) {
  alert("Your grade is A")
} else if (inputNumber > 60 && inputNumber <= 80) {
  alert("Your grade is B")
} else if (inputNumber > 40 && inputNumber <= 60) {
  alert("Your grade is C")
} else if (inputNumber <= 40) {
  alert("Your grade is D")
} else {
  alert("Cannot calculate your grade")
}
