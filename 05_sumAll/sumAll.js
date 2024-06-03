const sumAll = function(firstNum, secondNum) {
    if (typeof(firstNum) !== 'number' || typeof(secondNum) !== 'number' ||
    firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    }
    let min, max;
    let sum = 0;
    if (firstNum < secondNum) {
        min = firstNum;
        max = secondNum;
    } else {
        min = secondNum;
        max = firstNum;
    }
    console.log(`Min: ${min}. Max: ${max}`);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
