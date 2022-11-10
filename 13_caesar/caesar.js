const caesar = function(message, shiftFactor) {

    const lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let result = '';

    for (let i = 0; i < message.length; i++) {


        if (/[a-z]/.test(message.charAt(i))) {

            let lettersInAlphabet = lowerCaseAlphabet.length;
            let indexCurrentLetter = lowerCaseAlphabet.indexOf(message.charAt(i));
            let indexShiftedLetter = ((indexCurrentLetter + shiftFactor)%lettersInAlphabet + lettersInAlphabet)%lettersInAlphabet;

            result += lowerCaseAlphabet.at(indexShiftedLetter);

        } else if (/[A-z]/.test(message.charAt(i))){

            let lettersInAlphabet = upperCaseAlphabet.length;
            let indexCurrentLetter = upperCaseAlphabet.indexOf(message.charAt(i));
            let indexShiftedLetter = ((indexCurrentLetter + shiftFactor)%lettersInAlphabet + lettersInAlphabet)%lettersInAlphabet;

            result += upperCaseAlphabet.at(indexShiftedLetter);

        } else {

             result += message.charAt(i);
             
        }

    }

    return result;

};

// console.log(caesar('Hello, World!', 5))  //returns 'Mjqqt, Btwqi!'
// console.log(caesar('Hello, World!', 75))  //returns 'Ebiil, Tloia!'
// console.log(caesar('Hello, World!', -29))  //returns 'Ebiil, Tloia!'


// Do not edit below this line
module.exports = caesar;
