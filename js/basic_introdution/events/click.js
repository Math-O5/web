// addEventListener : this method allow you to add any numbers of handlers
window.addEventListener("click", () => {
    console.log("Did you knocked?")
});

let button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("Button clicked")
})

// Which button of mouse was used to.
function buttonPressed()
{
    let button = document.querySelector("button");
    button.addEventListener("mousedown", event => {
        if (event.button == 0) {
            console.log("Left button");
        } else if (event.button == 1) {
            console.log("Middle button");
        } else if (event.button == 2) {
            console.log("Right button");
        }
    });
}
    
// The propagation of handler come from child to root. Then, when a element active a event, it's is sending to your father and so on.
// stopPropagation : method which stop the event listenning.
// you have a button inside another clickable element and you don’t want clicks on the button to activate the outer element’s click behavior.
// OBS: to see better it, click with right button and see the propagation.
function propagation()
{
    let para = document.querySelector("p.propagation");
    let button = document.querySelector("p.propagation button");
    para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
    });
    button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 0) event.stopPropagation();
    });
}

// One label with several buttons
function containerOfEvents() {
    document.getElementsByClassName("label-buttons")[0].addEventListener("click", event => {
        if (event.target.nodeName == "BUTTON") {
          console.log("Clicked", event.target.textContent);
        }
      });
}

// the default actions is prevent with preventDefault. 
// An default actions happens when you click a link, for exemple, and you're redirect for a target.
function changeDefault()  {
    let link = document.querySelector("a");
    link.addEventListener("click", event => {
      console.log("Nope.");
      event.preventDefault();
    });
}

buttonPressed();
propagation();
containerOfEvents();
changeDefault();