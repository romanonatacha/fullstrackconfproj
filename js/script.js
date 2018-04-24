// Name input values 
const inputName = document.getElementById('inputName'); // Input field
const nameError = document.getElementById('nameError'); // Error message

// Email input values
const inputEmail = document.getElementById('inputEmail');
const emailError = document.getElementById('emailError');


// Number input values
const inputNumber = document.getElementById('inputNumber');
const numberError = document.getElementById('numberError');

// Input validation methods
const stringCheck = /\S/; // Check if value contains characters 
const nameValidation = /^[a-zA-Z\s]*$/; // Check if valid name entered
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Check if valid email entered
const numberValidation = /^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i; // Check if valid phone number entered

// Multidemnsional array of inputs and their values
var inputs = [
    [inputName, nameValidation, nameError, 'Invalid name'],
    [inputEmail, emailValidation, emailError, 'Invalid email address'],
    [inputNumber, numberValidation, numberError, 'Invalid phone number']
];

// Border style properites 
var errorBorder = "2px solid #ff0000"; // Red 
var normalBorder = "1px solid #FFFFFF"; // CSS document style


for(i = 0; i < inputs.length; i ++){

var inputType = inputs[i][0];
var inputValidation = inputs[i][1];
var inputError = inputs[i][2];
var errorMessage = inputs[i][3];

    inputType.addEventListener('blur', () => {
        const validation = inputValidation.test(inputType.value);
        inputCheck = stringCheck.test(inputType.value);

        if(inputCheck == false){
            inputType.style.border = errorBorder;
            inputError.innerHTML = "Required field"; 
        } else if(validation !== true){
            inputType.style.border = errorBorder;
            inputError.innerHTML = errorMessage;
        } else {
            inputType.style.border = normalBorder;
            inputError.innerHTML = "";
        }
    })
}```
