const isValid = (numbCard) => {
    //convert into array
    let numberArray = numbCard.split('');
    console.log('before loop', numberArray)
        //first loop
    var i;
    for (i = 0; i < numberArray.length; i++) {
        //test if second digit 
        if (i % 2 == 0) {

            //multiply second digit
            let multipliedNumber = numberArray[i] * 2;
            numberArray[i] = multipliedNumber.toString();

            if (multipliedNumber > 9) {
                let bigNumberArray = numberArray[i].split('');

                let theProduct = parseInt(bigNumberArray[0]) + parseInt(bigNumberArray[1]);
                numberArray[i] = theProduct.toString();
            }
        }
    }
    console.log('after loop', numberArray)

    //sum 
    let total = 0
    let index = 0
    for (index = 0; index < numberArray.length; index++) {
        total = total + parseInt(numberArray[index]);

    }
    console.log(total)
    if (total % 10 == 0) {

        return true

    } else {
        return false
    }

}


//

const maskify = (numbCard) => {
    let lastDigit = numbCard.slice(-4); /*Tomar solo los ultimos digitos*/
    let example = numbCard.length - 4; /*El total de digits*/
    let maskSymbol = "#";
    let masked_str = maskSymbol.repeat(example) + lastDigit; /*Concatena el # con los últimos dígitos*/
    //.replace...etc
    return masked_str;
}


const validator = { isValid, maskify }
export default validator