const repeatString = function(wordRepeated, numberOfRepeats) {
    let wordRepeatedArray = [];
    if (numberOfRepeats < 0) {
        return `ERROR`;
    }
    for (i = 0; i < numberOfRepeats; i++) {
        wordRepeatedArray.push(wordRepeated);
    }
    wordRepeated = wordRepeatedArray.join(``);
    return wordRepeated;
};

// Do not edit below this line
module.exports = repeatString;
