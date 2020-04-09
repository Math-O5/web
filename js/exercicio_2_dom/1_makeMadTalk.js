// ............................................................</br>
// Mathias Fernandes Duarte Coelho</br>
// NUSP: 10734352</br>
// Email: mathfern4@gmail.com</br>
// EmailUSP: mathfernandes@usp.br</br>
// ............................................................

function makeMadTalk() {
    console.log("You're welcome at makeMadTalk")
    let noun = document.getElementById('noun')
    let adjective = document.getElementById('adjective')
    let person = document.getElementById('person')

    document.getElementById('story').innerHTML = person.value + " claims that " + noun.value + " is " + adjective.value;
}

let button = document.getElementById('lib-button')
button.addEventListener("click", (event) => {
    makeMadTalk()
})