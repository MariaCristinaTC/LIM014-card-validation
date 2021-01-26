const isValid = (numbCard) => { //parameter
    //convert into array
    let numberArray = numbCard.split('').reverse();
    console.log('before loop', numberArray)
        //first loop
        //let i;
    for (let i = 0; i < numberArray.length; i++) {
        //test if  digit 
        if ((i % 2) != 0) {

            //multiply  digit
            let multipliedNumber = numberArray[i] * 2;
            numberArray[i] = multipliedNumber.toString();

            if (multipliedNumber > 9) {
                let bigNumberArray = numberArray[i].split('');

                let theProduct = parseInt(bigNumberArray[0]) + parseInt(bigNumberArray[1]);
                numberArray[i] = theProduct.toString(); //put it back into a string so that it can read it as am array and then sum it with the other numbers. All the other number are strings
            }
        }
    } // there is no else bc there is no requirement for those numbers
    console.log('after loop', numberArray)

    //sum 
    let total = 0
    for (let index = 0; index < numberArray.length; index++) {
        total = total + parseInt(numberArray[index]); //parseInt treat it  as a number so the + doesnt put toguether stuff as strings
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
    // If length is greater than 4, then we use the mask
    if (numbCard.length > 4) {
        // reverse string
        let cardNumberArray = numbCard.split("");
        let newString = '';

        for (let i = 0; i < cardNumberArray.length; i++) {
            // if i is less than the array's lenght -4 then hide
            if (i < (cardNumberArray.length - 4)) {
                newString += '#'; //+= means concatenation in this case

            } else {

                newString += cardNumberArray[i]; //show if the index is bigger than array's lenght -4
            }
        }

        return newString;
    } else {
        return numbCard; // if the input is 4 or less then only show the whole numbCard
    }
}

const validator = { isValid, maskify }
export default validator