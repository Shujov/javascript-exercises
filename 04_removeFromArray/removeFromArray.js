const removeFromArray = function() {

    let args = Array.from(arguments);

    const originalArray = args[0];
    const toRemove = args.slice(1);

    for(const removable of toRemove){
        const index = originalArray.indexOf(removable);
        if(index>-1) originalArray.splice(index, 1)
    }

    return originalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
