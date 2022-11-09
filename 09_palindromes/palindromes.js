
String.prototype.reverseString = function() { 

    let result = "";

    for (let i = (this.length - 1); i >= 0; i--) {result += this.charAt(i);}

    return result;

};

String.prototype.removePunctuation = function() { 

    return this.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

}

String.prototype.removeBreaks = function() { 

    return this.replace(/[\s]/g,"");

}

const palindromes = function (phrase) {

    phrase = phrase.removeBreaks().removePunctuation().toLowerCase();

    return (phrase === phrase.reverseString());

};


// console.log(palindromes('racecar')); /*(true);*/
// console.log(palindromes('racecar!')); /*(true);*/
// console.log(palindromes('Racecar!')); /*(true);*/
// console.log(palindromes('A car, a man, a maraca.')); /*(true);*/
// console.log(palindromes('Animal loots foliated detail of stool lamina.')); /*(true);*/
// console.log(palindromes('ZZZZ car, a man, a maracaz.')); /*(false);*/

// Do not edit below this line
module.exports = palindromes;
