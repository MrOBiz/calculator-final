let numA, numB;
let operators = ["+", "-", "*", "/"];

const display = document.querySelector("#display");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divided = document.querySelector("#divided");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");


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
    /* if(opr == "+"){return add(a, b)};
    if(opr == "-"){return subtract(a, b)};
    if(opr == "/"){return divide(a, b)};
    if(opr == "*"){return multiply(a, b)}; */
}

