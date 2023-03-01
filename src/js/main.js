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

function clean () {
    var text = result.value;
    result.value = text.slice(0, text.length - 1);
}

// toggle themes

const btnDark = document.querySelector('.js-btn-dark');
const btnLight = document.querySelector('.js-btn-light');
const btnColorful = document.querySelector('.js-btn-colorful');
const body = document.getElementById('body');

function addBodyClass(className) {
    const classes = ['dark', 'light', 'colorful'];
  
    if (!classes.includes(className)) {
      return;
    }
  
    classes.forEach((c) => {
      body.classList.remove(c);
    });
  
    body.classList.add(className);
  }

btnDark.addEventListener('click', () => {
    addBodyClass('dark')
})

btnLight.addEventListener('click', () => {
    addBodyClass('light')
})

btnColorful.addEventListener('click', () => {
    addBodyClass('colorful')
})