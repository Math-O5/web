// ............................................................
// Mathias Fernandes Duarte Coelho
// NUSP: 10734352
// Email: mathfern444@gmail.com
// EmailUSP: mathfernandes@usp.br
// ............................................................
let id = 1; // number of request

// Request data from the web server https://reqres.in 
function changeColorContainer(name, color) {
    let caixa = document.getElementsByClassName('caixa')[0]
    caixa.style.backgroundColor = color
    caixa.innerHTML = color + '<br>' + name + '</br'
}

function requestColor() {
    let color, name;
    let button = document.getElementsByClassName('button')[0]
    let string = ''
    button.addEventListener("click", function() {   
        fetch(`${'https://reqres.in/api/unknown/'+id}`, {
            method: 'GET',
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response.data.color)
            changeColorContainer(response.data.name, response.data.color)
        })
        .catch(function(err) {
            id = 1;
            console.log(err)                
        })
        ++id;
    })
}

requestColor()