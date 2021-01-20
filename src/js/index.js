import { isValid, maskify } from './validator.js'


//validate
document.getElementById('validateButton').addEventListener('click', () => {

    let creditCardNumber = document.getElementById('cardNumber').value;


    if (isValid(creditCardNumber) == true) {
        document.getElementById("answer").innerHTML = maskify(creditCardNumber) + " Tarjeta valida ✔✔✔ "
    } else {
        document.getElementById("answer").innerHTML = maskify(creditCardNumber) + " Tarjeta NO valida🤣🤣🤷‍♂️🤷‍♂️🤢"
    }
});