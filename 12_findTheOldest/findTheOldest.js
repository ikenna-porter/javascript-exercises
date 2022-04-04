const findTheOldest = function(people) {

    //creates label for current year
    const date = new Date().getFullYear();

    //creates age key in each object
    people.map(person => {
        if (!person.yearOfDeath) {
            return person.age = date - person.yearOfBirth;
        } else {
            return person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
    //reduces people array down to the oldest person
    return people.reduce((a, b) => a.age > b.age ? a : b);
}; 

// Do not edit below this line
module.exports = findTheOldest;
