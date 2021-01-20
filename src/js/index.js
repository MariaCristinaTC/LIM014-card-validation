import validator from './validator.js'


//validate
document.getElementById('validateButton').addEventListener('click', () => {

    let creditCardNumber = document.getElementById('cardNumber').value;


    if (validator.isValid(creditCardNumber) == true) {
        document.getElementById("answer").innerHTML = validator.maskify(creditCardNumber) + " Tarjeta valida ✔✔✔ "
    } else {
        document.getElementById("answer").innerHTML = validator.maskify(creditCardNumber) + " Tarjeta NO valida🤣🤣🤷‍♂️🤷‍♂️🤢"
    }
});