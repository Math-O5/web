
// source: https://eloquentjavascript.net/15_event.html
function back() 
{
    history.back()
}

function foward()
{
    history.forward()
}  

function styleColor() 
{
    console.log("styleColor")
    document.getElementsByClassName("car")[0].innerHTML 
    
}

function innerDate() 
{
    console.log("innerDate")
    document.getElementById("demo").innerHTML = Date()
}

var carName1 = "Volvo XC60"
var carName2 = "Volvo XC60"

document.getElementsByClassName("car")[0].innerHTML = carName1 + " " + carName2

document.write("Lero Lero!")

console.log(window.document.head)
console.log(window.document.body)
console.log(window.navigator.appName)
console.log(window.document.URL)
console.log(window.screen.width)
