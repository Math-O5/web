function innerDate() 
{
    console.log("innerDate")
    document.getElementById("demo").innerHTML = Date()
}

function breakLine(name, _debug = 0) {
    if(_debug===0) {
        console.log("breakLine")
    }
    let text = document.getElementsByTagName(name)[0]
    let words = text.innerHTML.split(' ').join('<\br>')
    
    document.getElementsByTagName(name)[0].innerHTML = words
    if(_debug===0) {
        console.log(words)
    }
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

function styleColor() 
{
    console.log("styleColor")
    document.getElementsByClassName("car")[0].innerHTML 
}