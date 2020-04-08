function selectLabel() {
    let text = document.getElementsByClassName("selected")[0];
    let textBefore = text.textContent;
    document.getElementsByTagName("section")[0].addEventListener("mouseover", event => {
        if (event.target.nodeName == "DIV") {
            text.innerHTML = event.target.className
        }
    });
    document.getElementsByTagName("section")[0].addEventListener("mouseout", event => {
        if (event.target.nodeName == "DIV") {
            text.innerHTML = textBefore;
        }
    });
}

function getRandom() {
    let a = Math.ceil(Math.random()*1000)%256,
        b = Math.ceil(Math.random()*1000)%256,
        c = Math.ceil(Math.random()*1000)%256
    return [a,b,c]
}

function randomColor() {
    let colors
    document.getElementsByClassName("random")[0].addEventListener("click", event => {
        if (event.target.nodeName == "DIV") {
            colors = getRandom()
            event.target.style.backgroundColor = `${'rgb('+colors[0]+','+colors[1]+','+colors[2]+')'}`
        }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

document.getElementById('change_heading').innerHTML = '"You said goodbye, and I say hello."'

selectLabel();
randomColor();