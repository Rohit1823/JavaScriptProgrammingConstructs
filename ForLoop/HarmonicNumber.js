const readline = require('readline-sync');
let inputNumber = readline.questionInt("Enter a number.");
let harmonicNumber = 0;

for (i = 1; i <= inputNumber; i++) {
    harmonicNumber = harmonicNumber + (1 / i);
}
console.log("Harmonic number : " + harmonicNumber);
