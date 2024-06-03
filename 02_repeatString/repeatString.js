const repeatString = function(str, counter) {
    let repeatedString = '';
    let i = 0;
    if (counter < 0) {
        return 'ERROR';
    }
    while (i < counter) {
        repeatedString += str;
        i++;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
