const findTheOldest = function(people) {

    let oldest = {
        name: "",
        yearOfBirth: 2022,
        yearOfDeath: 2022,
    }

    people.forEach(person => {

        let oldestAge = (oldest.yearOfDeath || 2022) - (oldest.yearOfBirth);
        let personAge = (person.yearOfDeath || 2022) - (person.yearOfBirth);

        if (personAge > oldestAge) {
            
            oldest = person;

        }
        
    });

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
