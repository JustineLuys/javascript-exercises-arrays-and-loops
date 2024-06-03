const repeatString = function(str, counter) {
    const number = Math.floor(Math.random() * 1000) ;
    console.log(number);
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
let test = repeatString("hey", 3);
console.log(test);