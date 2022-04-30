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
        return "To the infinity!"
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
    countClick = 0;
});

const backSpace = document.querySelector('.button.backspace');
backSpace.addEventListener('click', (e) => {
    let displayText = [...display.innerHTML];
    displayText.pop();
    display.innerHTML = displayText.join('');
});

let currOperator = '';
let currNumber;
let countClick = 0;
let countDotClick = 0;

const btnOperators = document.querySelectorAll('.button.operator');
btnOperators.forEach(button => button.addEventListener('click', (e) => {
    countDotClick = 0;
    if (countClick === 0) {
        countClick++;
        currNumber = Number(display.innerHTML);
        currOperator = e.target.innerHTML;
        display.innerHTML += e.target.innerHTML;   
    } else {
        performCalc();
        currNumber = Number(display.innerHTML);
        currOperator = e.target.innerHTML;
        display.innerHTML += e.target.innerHTML;
    }
}));

const btnEquals = document.querySelector('.button.equals');
btnEquals.addEventListener('click', () => {
    if (display.innerHTML !== '') {
        performCalc();
        countClick = 0;
    }
});


function performCalc() {
    let secondNumber = splitDisplay(display);
    display.innerHTML = operate(currOperator, currNumber, secondNumber);
}

function splitDisplay(display) {
    return Number(display.innerHTML.split(/[*/+-]/g).slice(-1)[0]);
}

const dotButton = document.querySelector('.button.dot');
dotButton.addEventListener('click', (e) => {
    countDotClick++;
    if (countDotClick === 1) {
        display.innerHTML += e.target.innerHTML;
    } 
})

const negateButton = document.querySelector('.button.negate');
negateButton.addEventListener('click', (e) => {
    let displayText = [...display.innerHTML];
    if (displayText[0] === '-') {
        displayText.shift();
    } else {
        displayText.unshift('-');
    }
    display.innerHTML = displayText.join('');
});