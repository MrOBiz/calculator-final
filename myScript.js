let numA, numB;
let operators = ["+", "-", "*", "/"];
let operandFlag = 0; //If != 0 then an operand has been clicked
let inputNumA = [];
let inputNumB = [];

const display = document.querySelector("#display");

const operatorButtons = document.querySelectorAll(".opr");

const numButtons = document.querySelectorAll(".num");

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

operatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(numB != null){
            display.textContent = operate(numA, numB, operandFlag);
            numA = operate(numA, numB, operandFlag);
            inputNumB.length = 0;
        }

        operandFlag = operators[index];
    });
});

numButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(operandFlag == 0){
            inputNumA.push(index);
            numA = Number(inputNumA.join(""));
            display.textContent = numA;
        }else{
            inputNumB.push(index);
            numB = Number(inputNumB.join(""));
            display.textContent = numB;
        }
    });
});

equals.addEventListener("click", () => {
                        if(numA != null && numB != null && 
                            operandFlag != 0){
                            operate(numA, numB, operandFlag);
                            display. textContent = 
                                sayEqual(numA, numB, operandFlag);
                        }else{
                            clearEverything();
                        } 
                    });

clear.addEventListener("click", clearEverything);


function clearEverything(){
    operandFlag = 0;
    inputNumA.length = 0;
    inputNumB.length = 0;
    numA = null;
    numB = null;
    display.textContent = "Waiting";
}

function sayEqual(a, b, flag){
    return a + " " + flag + " " +
           b + " = " + operate(a, b, flag);
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, opr){
    a = Math.round(a * 1000) / 1000;
    b = Math.round(b * 1000) / 1000;

    switch (opr){
        case "+":
            return Math.round(add(a, b) * 1000) / 1000;
        
        case "-":
            return Math.round(subtract(a, b) * 1000) / 1000;

        case "/":
            return Math.round(divide(a, b) * 1000) / 1000;

        case "*":
            return Math.round(multiply(a, b) * 1000) / 1000;
        
        default:
            return "Invalid operation.";
    }
}


