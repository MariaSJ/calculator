'use strict';

var num1 = 0;
var num2 = 0;
var operator = "";

const result = document.getElementById('result');

function addNumber(number) {
    result.value += number;
}

function operate(op) {
    num1 = parseFloat(result.value);
    operator = op;
    result.value = num1 + operator;
}

function calculate() {
    num2 = parseFloat(result.value.slice(num1.toString().length + 1));
    var finalResult;
    switch (operator) {
        case "+":
            finalResult = num1 + num2;
            break;
        case "-":
            finalResult = num1 - num2;
            break;
        case "*":
            finalResult = num1 * num2;
            break;
        case "/":
            finalResult = num1 / num2;
            break;
        default:
            finalResult = 0;
            break;
    }
    result.value = finalResult;
    num1 = finalResult;
}

function reset() {
    result.value = "";
}
