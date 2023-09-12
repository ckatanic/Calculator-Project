let calculator = {
    primaryNumber: "",
    secondaryNumber: "",
    operator: "",

    updateDisplay: function() {
        primaryNumberDisplay.innerText = this.primaryNumber;
        secondaryNumberDisplay.innerText = this.secondaryNumber;
    },

    updateNumber: function(number) {
        // updates primary display number 
    },

    delete: function() {
        //deletes last number in primary display
    },

    updateOperator(input) {
        calculator.operator = input;
    },

    calculate: function() {
        //switch(case)
    }



}

const primaryNumberDisplay = document.getElementById('primaryDisplay');
const secondaryNumberDisplay = document.getElementById('secondaryDisplay');

let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.srcElement.innerText);
    })
})

document.getElementById('clear').addEventListener('click', () => {
    firstInput="";
    secondInput="";
    operator = "";
    calculator.updateDisplay();
})

document.getElementById('+').addEventListener('click', () => {
    operator = "+";
    calculator.updateDisplay();
})
document.getElementById('-').addEventListener('click', () => {
    operator = "-";
    calculator.updateDisplay();
})
document.getElementById('x').addEventListener('click', () => {
    operator = "x";
    calculator.updateDisplay();
})
document.getElementById('/').addEventListener('click', () => {
    operator = "/";
    calculator.updateDisplay();
})

document.getElementById('=').addEventListener('click', () => {
    if (operator === '+') {
        currentDisplay.innerText = parseInt(firstInput) + parseInt(secondInput);
    } else if (operator === "-") {
        currentDisplay.innerText = parseInt(firstInput)-parseInt(secondInput)
    } else if (operator === "x") {
        currentDisplay.innerText = parseInt(firstInput) * parseInt(secondInput)
    } else if (operator === "/") {
        currentDisplay.innerText = parseInt(firstInput) / parseInt(secondInput)
    }
})

