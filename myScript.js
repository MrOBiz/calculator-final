let numA, numB;
let operators = ["+", "-", "*", "/"];
let operandFlag = 0; //If != 0 -> an operand has been clicked
let dotFlag = 0;

let inputNumA = [];
let inputNumB = [];


const display = document.querySelector("#display");

const operatorButtons = document.querySelectorAll(".opr");

const numButtons = document.querySelectorAll(".num");

const canc = document.querySelector("#backspace");
const dot = document.querySelector("#dot");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

//CLICK FUNCTIONALITIES

operatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        enterOperator(operators[index]);
    });
});

numButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        enterNum(button.textContent);
    });
});

equals.addEventListener("click", calculateResult);
dot.addEventListener("click", enterDot);
canc.addEventListener("click", enterCanc);

clear.addEventListener("click", () => {
            clearEverything()
            display.textContent = "Waiting...";
        });

//KEYBOARD FUNCTIONALITIES

document.addEventListener("keydown", (event) => {
    if(event.key >= "0" && event.key <= "9"){
        enterNum(event.key);
        return;
    }

    if(operators.includes(event.key)){
        enterOperator(event.key);
        return;
    }

    if(event.key === "."){
        enterDot();
        return;
    }

    if(event.key === "Backspace"){
        enterCanc();
        return;
    }

    if(event.key === "Escape"){
        clearEverything();
        display.textContent = "Waiting...";
        return;
    }

    if (event.key === "Enter" || event.key == "="){
        calculateResult();
        return;
    }
});

//HELPER FUNCTIONS

function enterNum(digit){
    if(operandFlag === 0){
        inputNumA.push(digit);
        numA = Number(inputNumA.join(""));
        display.textContent = inputNumA.join("");
    }else{
        inputNumB.push(digit);
        numB = Number(inputNumB.join(""));
        display.textContent = inputNumB.join("");
    }
}

function enterOperator(opr){
    //stops /0, otherwise checks for second number
    if(numB == 0 && operandFlag == "/"){
        clearEverything();
        display.textContent = "0 is a bad customer..."; 
        return;
    }

    //stops if there's no first operand and many operator clicks
    if(numA == null && numB != null &&
        operandFlag != 0){
        clearEverything();
        display.textContent = "Waiting...";
        return;
    }
    
    if(numB != null){
        display.textContent = operate(numA, numB, operandFlag);
        numA = operate(numA, numB, operandFlag);
        inputNumB.length = 0;
        numB = null;
    }

    operandFlag = opr;
    dotFlag = 0;
}

function enterCanc(){
    if(inputNumA.length === 0 &&
        inputNumB.length === 0){
        return;
    }

    
    if (operandFlag == 0) {
        if(inputNumA[inputNumA.length -1] === "."){
            dotFlag = 0;
        }

        inputNumA.pop();
        numA = Number(inputNumA.join(""));
        display.textContent = inputNumA.join("");

        if(inputNumA.length === 0){
            display.textContent = "Insert new operand"
        }

    }else{
        if(inputNumB[inputNumB.length -1] === "."){
            dotFlag = 0;
        }

        inputNumB.pop();
        numB = Number(inputNumB.join(""));
        display.textContent = inputNumB.join("");

        if(inputNumB.length === 0){
            display.textContent = "Insert new operand"
        }
    }
}

function enterDot(){
    if(dotFlag === 1){
        return;
    }

    if (operandFlag == 0) {
        if (inputNumA.length === 0) {
            inputNumA.push("0");
        }

        inputNumA.push(".");
        numA = Number(inputNumA.join(""));
        display.textContent = inputNumA.join("");
    }else{
        if (inputNumB.length === 0) {
            inputNumB.push("0");
        }

        inputNumB.push(".");
        numB = Number(inputNumB.join(""));
        display.textContent = inputNumB.join("");
    }
    
    dotFlag = 1; 
}

function calculateResult(){
    if(numA != null && numB != null && 
        operandFlag != 0){
        operate(numA, numB, operandFlag);
        display. textContent = 
                sayEqual(numA, numB, operandFlag);

        clearEverything();
    }else{
        clearEverything();
        display.textContent = "Waiting...";
    }
}

function clearEverything(){
    operandFlag = 0;
    dotFlag = 0;
    inputNumA.length = 0;
    inputNumB.length = 0;
    numA = null;
    numB = null;
}

function sayEqual(a, b, flag){
    if(flag == "/" && b == 0){
        clearEverything();
        return "0 is a bad customer..."; 
    }else{    
        return a + " " + flag + " " +
                b + " = " + operate(a, b, flag);
    }
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


