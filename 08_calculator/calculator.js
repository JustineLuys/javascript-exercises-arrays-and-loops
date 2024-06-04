const add = function(addend1, addend2) {
    return addend1 + addend2;	
};

const subtract = function(minuend, subtrahend) {
    return minuend - subtrahend;
};

const sum = function(numArray) {
    return numArray.reduce((currentTotal, item) => currentTotal + item, 0);
    /*
      Using for loop
      let total = 0
      const length = numArray;
      for (let i = 0; i < length; i++) {
          total += numArray[i];
      }
      return total;
    */
  }

const multiply = function(numArray) {
     return numArray.reduce((currentProduct, item) => currentProduct * item, 1);
};

const power = function(baseNumber, exponent) {
     return Math.pow(baseNumber, exponent);
     // return baseNumber ** exponent;
};

const factorial = function(n) {
     if (n === 0 || n === 1) {
      return 1;
     } else {
        return n * factorial(n - 1);
     } 
};

console.log(factorial(0));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
