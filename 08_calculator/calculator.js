const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numList) {
	
  let result = 0;

  numList.forEach(num => {result+=num});

  return result;

};

const multiply = function(numList) {

  if(numList.length > 0){

    let result = 1;

    numList.forEach(num => {result*=num});

    return result;

  } else {

    return "Empty list of numbers"

  }

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {

  let result = 1;

  for (let i = num; i > 0; i--) {

    result*=i;

  }

  return result;
	
};

// console.log("Add:")
// console.log(add(0,0)); /*(0);*/
// console.log(add(2,2)); /*(4);*/
// console.log(add(2,6)); /*(8);*/
// console.log(subtract(10,4)); /*(6);*/

// console.log("Sum:")
// console.log(sum([])); /*(0);*/
// console.log(sum([7])); /*(7);*/
// console.log(sum([7,11])); /*(18);*/
// console.log(sum([1,3,5,7,9])); /*(25);*/

// console.log("Multiply:")
// console.log(multiply([2,4])); /*(8);*/
// console.log(multiply([2,4,6,8,10,12,14])); /*(645120);*/

// console.log("Power:")
// console.log(power(4,3)); /*(64); // 4 to third power is 64*/

// console.log("Factorial:")
// console.log(factorial(0)); /*(1); // 0! = 1*/
// console.log(factorial(1)); /*(1);*/
// console.log(factorial(2)); /*(2);*/
// console.log(factorial(5)); /*(120);*/
// console.log(factorial(10)); /*(3628800);*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
