const findTheOldest = (people) => {
    const thisYear = new Date().getFullYear();
    return people.reduce((res, person) => {
      const age = (person.yearOfDeath?person.yearOfDeath:thisYear) - person.yearOfBirth;
      return age > res.age ? { person, age } : res;
    }, { person: null, age: 0 }).person;
};

// Do not edit below this line
module.exports = findTheOldest;
