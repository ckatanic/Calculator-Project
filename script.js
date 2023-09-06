let firstInput="";
let secondInput="";
let process = "";

const currentDisplay = document.getElementById('current-display');

document.getElementById('7').addEventListener('click', () => {
    if (process === "") {
        firstInput+=7;
        currentDisplay.innerText=firstInput;
    } else {
        secondInput+=7;
        currentDisplay.innerText+='7';
    }
    
    console.log("First: " + firstInput);
    
    console.log("Second: " + secondInput);
    console.log(process);
})

document.getElementById('+').addEventListener('click', () => {
    process = "+";
    currentDisplay.innerText+='+';
})

document.getElementById('=').addEventListener('click', () => {
    if (process === '+') {
        currentDisplay.innerText = parseInt(firstInput) + parseInt(secondInput);
    }
})

 

