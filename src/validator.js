const validator = {
    //CODE HERE

    function validateCard(num) {
        var oddSum = 0;
        var evenSum = 0;
        var numToString = num.toString().split("");
        for (var i = 0; i < numToString.length; i++) {
            if (i % 2 === 0) {
                if (numToString[i] * 2 >= 10) {
                    evenSum += ((numToString[i] * 2) - 9);
                } else {
                    evenSum += numToString[i] * 2;
                }
            } else {
                oddSum += parseInt(numToString[i]);
            }
        }
        return (oddSum + evenSum) % 10 === 0;
    }
    console.log(validateCard(41111111111111111));
};

export default validator;

function getUserInput() {
    return document.getElementById("boxCardNumber").nodeValue;
}


function name() {
    var input = document.getElementById("userInput");
    alert(input);
}

var validateButton = document.getElementById("validateButton");
validateButton.addEventListener("click", function() {
    var inputCardNumber = document.getElementById("boxCardNumber").value;
    validateNumber(inputCardNumber);

});

function validateNumber(number) {
    console.log(number);
}