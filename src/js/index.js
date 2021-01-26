import validator from './validator.js'


//validate
document.getElementById('validateButton').addEventListener('click', () => {

    let creditCardNumber = document.getElementById('cardNumber').value; //value to select the value instead of the whole box

    if (validator.isValid(creditCardNumber) == true) {
        document.getElementById("answer").innerHTML = validator.maskify(creditCardNumber) + " Tarjeta válida ✔✔✔ "
    } else {
        document.getElementById("answer").innerHTML = validator.maskify(creditCardNumber) + " Tarjeta NO válida🤷‍♂️🤷‍♂️"
    }
});

//argument