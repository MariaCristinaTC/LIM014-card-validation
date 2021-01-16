import { validateField, multiplyNumbers } from './validator.js'


//validate
document.getElementById('validateButton').addEventListener('click', () => {

    let cardNumber = document.getElementById('cardNumber').value;
    let isValid = validateField(cardNumber);

    alert(isValid);

});



//multiply
document.getElementById('multiplyButton').addEventListener('click', () => {

    let cardNumber = document.getElementById('cardNumber').value;
    let newAmount = multiplyNumbers(cardNumber);

    alert(newAmount);

});




//clear fields
document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('cardNumber').value = '';
});