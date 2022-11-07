const leapYears = function(year) {

    // console.log("");
    // console.log("Year: " + year);
    // console.log("Divisible by 4: " + (year%4 === 0));
    // console.log("Divisible by 100: " + (year%100 === 0));
    // console.log("Divisible by 400: " + (year%400 === 0));

    return ((year%4 === 0) && (year%100 != 0)) || ((year%400 === 0))

};

// console.log(leapYears(1996)) // true
// console.log(leapYears(1997)) // false
// console.log(leapYears(34992)) // true
// console.log(leapYears(1900)) // false
// console.log(leapYears(1600)) // true
// console.log(leapYears(700)) // false

// Do not edit below this line
module.exports = leapYears;
