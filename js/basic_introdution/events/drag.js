// drag and drop
function dragBar() {
    let lastX; // Tracks the last observed mouse X position
    let bar = document.getElementsByClassName("bar")[0];
    bar.addEventListener("mousedown", event => {
      if (event.button == 0) { // if mouse left button was pressed                  
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault(); // Prevent selection
      }
    });
  
    function moved(event) {
      if (event.buttons == 0) {
        window.removeEventListener("mousemove", moved);
      } else {
        let dist = event.clientX - lastX;
        let minWidth = Math.max(10, bar.offsetWidth + dist);
        let newWidth = Math.min(window.screen.width-50, minWidth);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
      }
    }
}

dragBar();
