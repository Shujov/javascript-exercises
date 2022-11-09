const roundDecimal = function(number, decimalPositions){
  return Math.round(number*(10**decimalPositions))/(10**decimalPositions);
}

const ftoc = function(fahrenheit) {
  return roundDecimal((fahrenheit - 32)*(5/9), 1);
};

const ctof = function(celsius) {
  return roundDecimal((celsius*(9/5)) + 32, 1);
};


// console.log(ftoc(32));     /*toEqual(0);*/
// console.log(ftoc(100));    /*toEqual(37.8);*/
// console.log(ftoc(-100));   /*toEqual(-73.3);*/

// console.log(ctof(0));      /*toEqual(32);*/
// console.log(ctof(73.2));   /*toEqual(163.8);*/
// console.log(ctof(-10));    /*toEqual(14);*/

// console.log(roundDecimal(37.77777777777778, 1));
// console.log(roundDecimal(37.77777777777778, 2));
// console.log(roundDecimal(37.77777777777778, 3));
// console.log(roundDecimal(37.77777777777778, 4));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
