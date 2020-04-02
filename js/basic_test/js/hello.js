console.log(
    window.screen.width
)

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
