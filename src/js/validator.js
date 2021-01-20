const isValid = (numbCard) => {
    //convert into array
    let numberArray = numbCard.split('');
    console.log('before loop', numberArray)
        //first loop
    var i;
    for (i = 0; i < numberArray.length; i++) {
        //test if second digit 
        if (i % 2 != 0) {

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
    // If length is greater than 4, then we have things to mask
    if (numbCard.length > 4) {
        // reverse string
        let reversed = reverse(numbCard);
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
            // if i < 4, we want to reveal these numbers in our output
            if (i < 4) {
                newString += reversed[i];
            } else {
                // otherwise, just hide it
                newString += '#';
            }
        }
        // return the reversal of the string to revert it back to original format
        return reverse(newString);
    } else {
        return numbCard;
    }
}

function reverse(str) {
    return str.split("").reverse().join("");
}



const validator = { isValid, maskify }
export default validator