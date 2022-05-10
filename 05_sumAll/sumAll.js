const sumAll = function(intOne, intTwo) {
    let smallNumber = 0;
    let bigNumber = 0;
    let numberSumAll = 0;

    if (intOne < 0 || intTwo < 0 || typeof intOne != `number` || typeof intTwo != `number`) {
        return `ERROR`;
    }
    
    if (intOne < intTwo) {
        smallNumber = intOne;
        bigNumber = intTwo;
    } else {
        smallNumber = intTwo;
        bigNumber = intOne;
    }
    for (smallNumber; smallNumber <= bigNumber; smallNumber++) {
        numberSumAll += smallNumber;
    }

    return numberSumAll
};

// Do not edit below this line
module.exports = sumAll;
