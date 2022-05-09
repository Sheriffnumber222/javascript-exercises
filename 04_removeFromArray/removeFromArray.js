const removeFromArray = function(arrayInputed, itemToRemove) {
    for (i = 0; i < arrayInputed.length; i++) {
        if (arrayInputed[i] == itemToRemove) {
            arrayInputed.splice(i, 1);
        }
    }
    return arrayInputed.join();
};

// Do not edit below this line
module.exports = removeFromArray;