const isNotNumeric = function(number){

    return ((typeof number != "number") || isNaN(number))

}

const sumAll = function(firstNum, secondNum) {

    if (isNotNumeric(firstNum) || isNotNumeric(secondNum)) return "ERROR";
    else if(firstNum < 0 || secondNum < 0) return "ERROR";
    else {

        let result = 0;
        let start = Math.min(firstNum, secondNum);
        let end = Math.max(firstNum, secondNum);

        for (let i=start; i<=end; i++){result+=i}

        return result;

    }

};

// Do not edit below this line
module.exports = sumAll;
