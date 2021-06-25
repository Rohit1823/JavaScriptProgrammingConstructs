const readline = require('readline-sync');
let inputNumber = readline.questionInt("Enter a number to find power of 2: ");
console.log("Powers of 2 :");
for (i = 0; i <= inputNumber; i++) {
    console.log(Math.pow(2, i) + "  ");
}