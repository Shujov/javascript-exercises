const reverseString = function(inputString) {

    let result = "";
    
    for (let i=(inputString.length-1); i>=0;i--){result+=inputString.charAt(i); }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
