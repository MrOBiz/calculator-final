let numA, numB;
let operators = ["+", "-", "*", "/", "=", "c"];
let flag = 0;
let inputNumA = [];
let inputNumB = [];
let result;

const display = document.querySelector("#display");

const operatorButtons = document.querySelectorAll(".opr");

const numButtons = document.querySelectorAll(".num");

operatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        flag = operators[index];
        console.log(flag);
    });
});

numButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(flag == 0){
            inputNumA.push(index);
            numA = Number(inputNumA.join(""));
            console.log("A " + numA);
        }else{
            inputNumB.push(index);
            numB = Number(inputNumB.join(""));
            console.log("B " + numB);
        }
    });
});


/* setOperands();

function setOperands(){
    if(flag == null){
        numA = Number(inputNum.join(""));
        console.log(numA);
    }else if(flag != null){
        console.log(flag);
        numB = Number(inputNum.join(""));
        console.log(numB);
    }
}
 */
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


