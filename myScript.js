let numA, numB;
let operators = ["+", "-", "*", "/"];


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