let calculator = {
    primaryNumber: '',
    secondaryNumber: '',
    operator: undefined,

    updateDisplay: function() {
        primaryNumberDisplay.innerText = this.primaryNumber;
        secondaryNumberDisplay.innerText = this.secondaryNumber;
    },

    appendNumber: function(number) {
        // updates primary display number
        // if (this.operator == undefined) {
        //     this.primaryNumber = this.primaryNumber + number;
        //     this.updateDisplay();
        // } else {
            this.primaryNumber = this.primaryNumber + number;
            this.updateDisplay();
        // }


        
    },

    delete: function() {
        //deletes last number in primary display
    },

    updateOperator(operator) {
        // if (this.primaryNumber !== '') {
            this.operator = operator;
            this.secondaryNumber = `${this.primaryNumber} ${this.operator}`;
            this.primaryNumber = '';
            this.updateDisplay();
        // }
    },

    clear: function () {
        this.primaryNumber = '';
        this.secondaryNumber = '';
        this.operator = undefined;
        this.updateDisplay();
    },

    calculate: function() {
        //switch(case)
        switch(calculator.operator) {
            case "x":
                this.secondaryNumber = `${this.secondaryNumber} ${this.primaryNumber}`;
                this.primaryNumber = (parseInt(this.primaryNumber) * parseInt(this.secondaryNumber));
                this.updateDisplay();
                break;
            case "+":
                this.secondaryNumber = `${this.secondaryNumber} ${this.primaryNumber}`;
                this.primaryNumber = (parseInt(this.primaryNumber) + parseInt(this.secondaryNumber));
                this.updateDisplay();
                break;
            case "-":
                this.secondaryNumber = `${this.secondaryNumber} ${this.primaryNumber}`;
                this.primaryNumber = (parseInt(this.secondaryNumber) - parseInt(this.primaryNumber));
                this.updateDisplay();
                break;
            case "/":
                this.secondaryNumber = `${this.secondaryNumber} ${this.primaryNumber}`;
                this.primaryNumber = (parseInt(this.secondaryNumber) / parseInt(this.primaryNumber));
                this.updateDisplay();
                break;
    }
    },




}

const primaryNumberDisplay = document.getElementById('primaryDisplay');
const secondaryNumberDisplay = document.getElementById('secondaryDisplay');

document.getElementById('clear').addEventListener('click', () => {
    calculator.clear();
})

let numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calculator.appendNumber(button.innerText);
    })
})

let operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.innerText);
        calculator.updateOperator(button.innerText);
    })
})

document.getElementById('=').addEventListener('click', () => {
    // if (operator === '+') {
    //     currentDisplay.innerText = parseInt(firstInput) + parseInt(secondInput);
    // } else if (operator === "-") {
    //     currentDisplay.innerText = parseInt(firstInput)-parseInt(secondInput)
    // } else if (operator === "x") {
    //     currentDisplay.innerText = parseInt(firstInput) * parseInt(secondInput)
    // } else if (operator === "/") {
    //     currentDisplay.innerText = parseInt(firstInput) / parseInt(secondInput)
    // }
    calculator.calculate();
})

