const removeFromArray = function(arrayInputed) {
    let args = Array.prototype.slice.call(arguments, 1);
    let newArray = [];
    for (i = 0; i < arrayInputed.length; i++) {
        let arrayMatch = 0;
        for (w = 0; w < args.length; w++) {
            if (arrayInputed[i] === args[w]) {
                arrayMatch += 1
            }
        }
        if (arrayMatch === 0) {
            newArray.push(arrayInputed[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;