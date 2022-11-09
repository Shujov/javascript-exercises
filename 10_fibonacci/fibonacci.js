const fibonacci = function(index) {

    let fibonacciSeries = [1, 1];

    if (index < 0){

        return "OOPS";

    } else if (index > 1) {

        for (let i = 2; i < index; i++) {

            fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2]);
            
        }

    }

    return fibonacciSeries[fibonacciSeries.length - 1];

};

// console.log(fibonacci(1));
// console.log(fibonacci(0));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
