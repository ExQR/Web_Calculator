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

