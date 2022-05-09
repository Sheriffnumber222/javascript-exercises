const reverseString = function(stringInput) {
    
    /*let stringInputArray = stringInput.split("(?!^");
    stringInputArray.r
    return stringInput;*/

    let stringNew = stringInput.split("");
    stringNew.reverse();
    let stringFinal = stringNew.join("");
    return stringFinal;
};

// Do not edit below this line
module.exports = reverseString;
