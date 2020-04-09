
var carName1 = "Volvo XC60"
var carName2 = "Volvo XC60"

// var has not block scope
// redefinition
var x = 3
var x = 4

// hosting
c = 5
var c;

// functions
hello = function() {
    return "Hello World!"
}

hello = () => {
    return "Hello World"
}

hello = () => "Hello World";

hello = (val) => "Hello World" + val;

hello = val => "Hello World" + val;

const s = "a, b, b? it's hun.gry!"
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

const re = ""
const nameList = names.split(/\s*(?:;|$)\s*/)

const list = s.split(' ')
console.log(nameList)
console.log(list)

let objct = {id: 1, name: "Hello"}
console.log(objct)