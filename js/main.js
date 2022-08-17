// Add two numbers 
function add(x, y){
    return x+y ;
}


// Subtract two numbers
function subtract(x, y){
    return x-y ;
}


// Multiply two numbers 
function multiply(x, y){
    return x*y ;
}


// Divide two numbers 
function divide(x, y){
    if(y === 0){
        return "555 A7a"
    }
    return x/y ;
}


// Calculate the operation 
function operate(operator , num1 , num2){
    switch(operator){
        case "+" :
            return add(Number(num1), Number(num2));
        case "-" :
            return subtract(Number(num1), Number(num2));
        case "x" :
            return multiply(Number(num1) , Number(num2));
        case "÷" :
            return divide(Number(num1), Number(num2));
    }
}


// display the input on the screen
function displayInput(){

    // If its a new operation after a finished one
    if (newOperation === true){
        // if the user input was NOT + or - or x or ÷
        if (!(this.textContent === "+" || this.textContent === "-" ||
        this.textContent === "x" || this.textContent === "÷")){
            // clear the screen for the new operation
            screen.textContent = "";
            // reset the variable
            newOperation = false ;
        }else {
            // If it was + or - or x or ÷ just reset the variable
            newOperation = false ;
        }
    }

    // if the screen content is just 0 
    if (screen.textContent === "0"){
        // if the zero was not clicked by the user
        if (zeroClicked === false){
            // and user input was an operator
            if (this.textContent === "+" || this.textContent === "-" || this.textContent === "x" || this.textContent === "÷") {
                // do not do anything
                return;
            }
            // And if it was 0
            if (this.textContent === "0"){
                // just activate the variable zero clicked and end
                zeroClicked = true ;
                return;
            }
            // else its a number so clear the screen 
            screen.textContent = "";
        // if zero is already clicked 
        } else {
            // But the user input was not an operator
            if (!(this.textContent === "+" || this.textContent === "-" || this.textContent === "x" || this.textContent === "÷")){
                // also clear the screen 
                screen.textContent = "";
            }
        }
    }

    // after making sure the screen is not empty if the user pressed operator
    if (this.textContent === "+" || this.textContent === "-" ||
        this.textContent === "x" || this.textContent === "÷"){
            // if the screen has an operator as a last character
            if (screen.textContent.charAt(screen.textContent.length -1) === "+" ||
            screen.textContent.charAt(screen.textContent.length -1) === "-" ||
            screen.textContent.charAt(screen.textContent.length -1) === "x" ||
            screen.textContent.charAt(screen.textContent.length -1) === "÷"){
                // do not do anything
                return;
            }else {
                // call the function that operates if there is an operation
                doOperation();
                // reset the variable new operation cause the function doOperation makes it true so if u pressed a number it will clear the screen(look the first if expression in this function)
                newOperation = false ;
            }

        }
    // clear the screen
    screen.textContent += this.textContent ;
}

// Clear the screen when user press AC button
function clearScreen(){
    screen.textContent = "0";
    zeroClicked = false ;
}
function doOperation(){

    // make sure there is an operator on the screen
    if (screen.textContent.indexOf('+') > -1 || screen.textContent.indexOf('-') > -1 || screen.textContent.indexOf('x') > -1 || screen.textContent.indexOf('÷') > -1){
            // if the screen has an operator but it is the last char
            if (screen.textContent.charAt(screen.textContent.length -1) === "+" ||
                screen.textContent.charAt(screen.textContent.length -1) === "-" ||
                screen.textContent.charAt(screen.textContent.length -1) === "x" ||
                screen.textContent.charAt(screen.textContent.length -1) === "÷"){
                    // do not do anything
                    return;
            }else {
                // the index number for the operator
                let index;
                // save the index number of the operator in index
                if (screen.textContent.indexOf('+') > -1){
                    index = screen.textContent.indexOf('+');
                }else if (screen.textContent.indexOf('-') > -1){
                    index = screen.textContent.indexOf('-');
                }else if (screen.textContent.indexOf('x') > -1){
                    index = screen.textContent.indexOf('x');
                }else {
                    index = screen.textContent.indexOf('÷');
                }
                // number one will be everything before the operator
                num1 = screen.textContent.slice(0, index);
                // the second number will be everything after the operator
                num2 = screen.textContent.slice(index+1);
                // the operator 
                operator = screen.textContent.slice(index, index+1);
                // make the operation and display it on the screen
                screen.textContent = Math.round(operate(operator, num1 , num2)*10)/10;
                // activate the new operation variable
                newOperation = true ;
            }
    // if there is no operator do not do anything
    }else {
        return;
    }
    
}


// when the user presses the C button delete a single number
function deleteNumber(){
    // if the screen has more than one number
    if (screen.textContent.length > 1){
        // remove the last number
        screen.textContent = screen.textContent.slice(0, -1);
        newOperation = false ;
    } else {
        // if it has one number just make it zero
        screen.textContent = "0";
    }
    
}

let screen = document.querySelector('.screen');
let displayableButtons = document.querySelectorAll(".display-when-clicked");
let zeroClicked = false ;
let newOperation = false ;
let num1 , num2 , operator ;
displayableButtons.forEach(displayableButton => displayableButton.addEventListener('click', displayInput));

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearScreen);

let equals = document.querySelector('.doOperation');
equals.addEventListener('click', doOperation);

let deleteNum = document.querySelector('.delete');
deleteNum.addEventListener('click', deleteNumber);