function innerDate() 
{
    console.log("innerDate")
    document.getElementById("demo").innerHTML = Date()
}

function back() 
{
    history.back()
}

function foward()
{
    history.forward()
}  


document.write("Lero Lero!")

function modelCar()
{
}

var carName1 = "Volvo XC60"
var carName2 = "Volvo XC60"

document.getElementsByClassName("car")[0].innerHTML = carName1 + " " + carName2

const s = "a, b, b? it's hun.gry!"
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

const re = ""
const nameList = names.split(/\s*(?:;|$)\s*/)

const list = s.split(' ')
console.log(nameList)
console.log(list)

function styleColor() 
{
    console.log("styleColor")
    document.getElementsByClassName("car")[0].innerHTML 
}