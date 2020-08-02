let name = document.querySelector("#name")
let job = document.querySelector("#job")
let form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
    // the default action is reload all page
    event.preventDefault() 
    let dados = {
        name: name.value,
        job: job.value
    };

    fectch('https://regres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados) // body accept [Object] [Object]
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        alert("Sucesso")
    });

})