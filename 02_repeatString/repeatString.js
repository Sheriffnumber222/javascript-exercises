const repeatString = function(wordRepeated, numberOfRepeats) {
    if 
    let wordRepeatedArray = [wordRepeated];
    for (i = 0; i < numberOfRepeats-1; i++) {
        wordRepeatedArray.push(wordRepeated);
    }
    wordRepeated = wordRepeatedArray.join(``);
    return wordRepeated;
};

// Do not edit below this line
module.exports = repeatString;
