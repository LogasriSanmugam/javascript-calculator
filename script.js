function appendToDisplay(value) {
    const display = document.getElementById('result');
    if (display.value === 'Error') display.value = '';
    display.value += value;
}

function evaluateExpression() {
    const display = document.getElementById('result');
    try {
        const expression = display.value.replace('x', '*').replace('%', '/100');
        const result = Function('"use strict";return (' + expression + ')')();
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('backspace').addEventListener('click', backspace);
document.getElementById('equals').addEventListener('click', evaluateExpression);

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        appendToDisplay(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        evaluateExpression();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
