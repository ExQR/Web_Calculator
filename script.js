function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if (b === 0) {
        return "Division by zero"
    }
    return a/b
}

function operate(operator, a, b) {
    switch(operator) {
        case '*': 
            return multiply(a, b);
        case '+':
            return add(a, b);
        case '-':
            return subtract(a,b);
        case '/':
            return divide(a,b);
    }
}


const numButtons = document.querySelectorAll('.button.number');
const display = document.querySelector('#display');
numButtons.forEach(button => button.addEventListener('click', (e) => {
    display.innerHTML += e.target.innerHTML;
}));

const clearButton = document.querySelector('.button.clear');
clearButton.addEventListener('click', (e) => {
    display.innerHTML = '';
});

const backSpace = document.querySelector('.button.backspace');
backSpace.addEventListener('click', (e) => {
    let displayText = [...display.innerHTML];
    displayText.pop();
    display.innerHTML = displayText.join('');
});

let currOperator = '';
let currNumber;
let isOperatorPressed = false;

const btnOperators = document.querySelectorAll('.button.operator');
btnOperators.forEach(button => button.addEventListener('click', (e) => {
    currNumber = Number(display.innerHTML);
    currOperator = e.target.innerHTML;
    display.innerHTML += e.target.innerHTML;
    isOperatorPressed = true;
}));

const btnEquals = document.querySelector('.button.equals');
btnEquals.addEventListener('click', () => {
    let secondNumber = splitDisplay(display);
    display.innerHTML = operate(currOperator, currNumber, secondNumber);
});

function splitDisplay(display) {
    return Number(display.innerHTML.split(/[*/+-]/g)[1]);
}