const findTheOldest = function(people) {
    const date = new Date().getFullYear();
    const oldestPerson = people.sort((firstPerson, nextPerson) => {
    const firstPersonAge = date - firstPerson.yearOfBirth;
    const secondPersonAge = date - nextPerson.yearOfBirth;
    return firstPersonAge < secondPersonAge ? 1 : -1;
});
return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
