const fibonacci = function(num) {
    let array = [];
    let firstPrev = 0, secondPrev = 1;
    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        firstPrev = current;
        array.push(current);
    }
    console.log(array);
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
