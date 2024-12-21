let display = document.getElementById('display'); 
let currentInput = ''; 

function appendNumber(number) {
    
    currentInput += number; 
    updateDisplay(currentInput); 
}
function appendOperator(operator) {
    currentInput += operator; 
    updateDisplay(currentInput); 
}
function calculateResult() {
        let result = eval(currentInput); 
        updateDisplay(result); 
        currentInput = result.toString(); 
}
function clearDisplay() {
    currentInput = ''; 
    updateDisplay(''); 
}
function updateDisplay(value) {
    display.innerText = value; 
}
