// This was based on https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
/**
 * We dont want to use the uggly for(let i = 0; i < n; ++i)
 * 
 * In funtional programming, we use explict clear commands like 
 * 
 *  * ForEach
 *  * Filters
 *  * reduce
 *  * map
 * 
 */ 
// infos
let people = [
    {id: 0, name: "Eeeny", age: 7, is_user: "false"},
    {id: 1, name: "Meeny", age: 8, is_user: "false"},
    {id: 2, name: "Miney", age: 9, is_user: "false"},
    {id: 3, name: "Moe",   age: 10, is_user: "false"},
    {id: 4, name: "Eeeny", age: 7, is_user: "false"},
    {id: 5, name: "Meeny", age: 8, is_user: "true"},
    {id: 6, name: "Miney", age: 9, is_user: "true"},
    {id: 7, name: "Moe",   age: 10, is_user: "true"}
]

// get the ids with foreach
let ids1 = []

people.forEach((it) => {
    ids1.push(it.id)
});

console.log(ids1)

//get the ids with
let ids2 = people.map((it) => {
    return it.id;
});

console.log(ids2)

//get ids more concise ((ES6))
const peopleId = people.map((it) => it.id)

console.log(peopleId)

//get the sum of all ages
let totalAges = people.reduce((aculmulator, it) => {
    return aculmulator + it.age
}, 0);

console.log("Total ages: " + totalAges)

// get the most old people
let mostOld = people.reduce((aculmulator, it) => {
    return ((aculmulator.age || 0) > it.age)? aculmulator : it;
}, {});

console.log(mostOld)

// get all active users os app
const users = people.filter(function (it) {
    return it.is_user === "true";
});

console.log(users)

// get user desactivy more concise
const users_active = people.filter((it) => it.is_user === "false")

console.log(users_active)