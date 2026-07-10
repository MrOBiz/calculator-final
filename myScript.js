let numA, numB;
let operators = ["+", "-", "*", "/", "=", "c"];
let flag;
let result;

const display = document.querySelector("#display");

const operatorButtons = document.querySelectorAll(".opr");

const numButtons = document.querySelectorAll(".num");

operatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        return flag = operators[index];
    });
});

numButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        
    }),
});

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
    switch (opr){
        case "+":
            return add(a, b);
        
        case "-":
            return subtract(a, b);

        case "/":
            return divide(a, b);

        case "*":
            return multiply(a, b);
        
        default:
            return "Invalid opration.";
    }
}


