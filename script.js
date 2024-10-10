let displayValue = "0";
let operanD = null ;
let firstOperator = null;
const buttons = document.querySelectorAll('button');

let data = [];
let data2 = [];

function add(value1,value2){
let result = value1 + value2;
return result
}
function substract(value1,value2){
    let result = value1 - value2;
    return result

}
function multiply(value1,value2){
    let result = value1 * value2;
    return result

}
function divide(value1,value2){
    let result = value1 / value2;
    return result

}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}
updateDisplay();





function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('nDecimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('AC'))
                clearDisplay();
                updateDisplay();
        }
    )}
}
clickButton();

function inputOperand(operand){
if(displayValue == '0' || displayValue == 0) {
displayValue = operand;
}
else if(displayValue.length > 7){
    displayValue = "0";
    data = []
}
else if(displayValue.length >= 1 == true){
displayValue += operand;
};
data.push(displayValue);
firstOperator = data[data.length - 1];
if(firstOperator.includes("+" || "-"||"*"||"÷")){
displayValue = operand;
data2.push(displayValue)
}
}



function inputOperator(operator){
    if(displayValue.length > 0 ) {
        displayValue += operator;
        };


    }








function operate(firstNumber,operator,secondNumber){
    Number(firstOperator);
}