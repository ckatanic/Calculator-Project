let calculator = {
    primaryNumber: '',
    secondaryNumber: '',
    operator: undefined,

    updateDisplay: function() {
        secondaryNumberDisplay.innerText = this.secondaryNumber;
        if (typeof(this.primaryNumber) === 'number') {
            primaryNumberDisplay.innerText = +parseFloat(this.primaryNumber).toFixed(6);
            return;
        } 
            primaryNumberDisplay.innerText = this.primaryNumber;
    },
        
    appendNumber: function(number) {
        if (number === '.' && this.primaryNumber.includes('.')) {
            return;
        }
        if (this.secondaryNumber.includes ("=")) {
            this.clear();
        }
        this.primaryNumber = this.primaryNumber + number;
        this.updateDisplay();
    },

    delete: function() {
        //deletes last number in primary display
        if (this.secondaryNumber.includes('=')) {
            return;
        }
        this.primaryNumber = this.primaryNumber.slice(0, -1);
        this.updateDisplay();
    },

    updateOperator(operator) {
        this.operator = operator;
        if (this.primaryNumber === "" && this.secondaryNumber === '') {
            return;
        } else if (this.secondaryNumber.includes ("=")) {
            this.secondaryNumber = `${this.primaryNumber} ${this.operator}`;
            this.primaryNumber = '';
            this.updateDisplay();
            return;
        } else {
        this.operator = operator;
        this.secondaryNumber = `${this.primaryNumber} ${this.operator}`;
        this.primaryNumber = '';
        this.updateDisplay();
        }
    },

    clear: function () {
        this.primaryNumber = '';
        this.secondaryNumber = '';
        this.operator = undefined;
        this.updateDisplay();
    },

    calculate: function() {
        //switch(case)
        if (this.secondaryNumber.includes("=")) {
            return;
        }
        this.secondaryNumber = `${this.secondaryNumber} ${this.primaryNumber} =`;
        switch(calculator.operator) {
            case "x":
                this.primaryNumber = (parseFloat(this.primaryNumber) * parseFloat(this.secondaryNumber));
                break;
            case "+":
                this.primaryNumber = (parseFloat(this.primaryNumber) + parseFloat(this.secondaryNumber));
                break;
            case "-":
                this.primaryNumber = (parseFloat(this.secondaryNumber) - parseFloat(this.primaryNumber));
                break;
            case "/":
                this.primaryNumber = (parseFloat(this.secondaryNumber) / parseFloat(this.primaryNumber));
                break;
    }
    this.updateDisplay();
    },
    reverse: function() {
        this.primaryNumber = -parseFloat(this.primaryNumber);
        this.updateDisplay();
    }




}

const primaryNumberDisplay = document.getElementById('primaryDisplay');
const secondaryNumberDisplay = document.getElementById('secondaryDisplay');

document.getElementById('clear').addEventListener('click', () => {
    calculator.clear();
})

let numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
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
    calculator.calculate();
})

document.getElementById('+/-').addEventListener('click', () => {
    calculator.reverse();
})

document.getElementById('delete').addEventListener('click', () => {
    calculator.delete();
})

