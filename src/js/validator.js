export const validateField = (number) => {

    //convert into array

    //do operations on array index 4, 8, 12

    //update array

    //add all the number

    //check if equals last digit 0

    //if yes
    //return TRUE
    //if no
    //return FALSE

    if (number > 100) {
        return true;
    } else {
        return false;
    }

}


export const multiplyNumbers = (number) => {

    let newNumber = number * 100;

    return newNumber;

}


//

function maskify() {
    var numbCard = document.getElementById('user').value; /*Tomar el dato que se ingreso. Input*/
    let lastDigit = numbCard.slice(-4); /*Tomar solo los ultimos digitos*/
    let example = numbCard.length - 4; /*El total de caratetres*/
    let maskSymbol = "#"; /*Solo es para texto*/
    let masked_str = maskSymbol.repeat(example) + lastDigit; /*Concatena el # con los últimos dígitos*/

    if (numbCard === null || numbCard === "") {
        alert("Por favor, completa el númera de Tarjeta");
    } else {
        let resultado = document.getElementById('blank');
        resultado.innerHTML = 'Tarjeta Encriptada es :: ' + masked_str;
    }
}