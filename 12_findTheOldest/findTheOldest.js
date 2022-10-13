
const findTheOldest = function(people) {
    const age = [];
    for (i=0;i<people.length;i++){
        if ("yearOfDeath" in people[i] === false){people[i].yearOfDeath = new Date().getFullYear();}
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;               
    }
    people.sort(function(a,b){return a.age - b.age});
    return people[2];
};

// Do not edit below this line
module.exports = findTheOldest;

/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


function findTheOldest(people){
    const age = [];
    for (i=0;i<people.length;i++){
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;               
    }
    people.sort(function(a,b){return a.age - b.age});
    console.log(people[2]);

}


findTheOldest(people);

//sort(function(a, b){return a-b})

/*
        if ("yearOfDeath" in people[i] === false){
            let yearActual = new Date().getFullYear();
            console.log(yearActual);
            }
*/