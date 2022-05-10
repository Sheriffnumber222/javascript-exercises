const leapYears = function(yearSubmitted) {
    if (yearSubmitted % 4 === 0) {
        if (yearSubmitted % 100 === 0) {
            if (yearSubmitted % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
        return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
