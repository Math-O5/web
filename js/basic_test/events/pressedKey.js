
// key events : keydown
function ChangeBackground() {
    window.addEventListener("keydown", event => {
        if(event.key == "v") {
            document.body.style.background = "violet"
        }
    });
    window.addEventListener("keyup", event => {
        if(event.key == "v") {
            document.body.style.background = "";
        }
    });
}

ChangeBackground();