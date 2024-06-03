const removeFromArray = function(array, ...items) {
    return array.filter((item) => !items.includes(item));

//    return array.filter((item) => {
//         for (let i = 0; i < args.length; i++) {
//             if (item === args[i]) {
//                 return false;
//             }
//         }
//         return true;
//     });
};
// Do not edit below this line
module.exports = removeFromArray;

