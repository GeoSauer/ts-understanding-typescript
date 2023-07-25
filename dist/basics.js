"use strict";
function adds(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResults = true;
const resultPhrase = "Result is: ";
adds(number1, number2, printResults, resultPhrase);
//# sourceMappingURL=basics.js.map