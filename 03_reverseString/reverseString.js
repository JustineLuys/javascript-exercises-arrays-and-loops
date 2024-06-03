const reverseString = function(str) {
    return str.split("").reverse().join("");
   /* without using the split() and join method(); 
    let length = str.length;
    let reversed = '';
    for (let i = length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed; */
};

// Do not edit below this line
module.exports = reverseString;
