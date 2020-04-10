// ............................................................
// Mathias Fernandes Duarte Coelho
// NUSP: 10734352
// Email: mathfern4@gmail.com
// EmailUSP: mathfernandes@usp.br
//
const MAX = 999999999;
const MIN = -999999999;
const MAXF = 0.0000009;
let out = ""
// Display functions 

// outputDisplay display the parameter result on screen. 
function outputDisplay(result) {
    if(typeof result === 'number' || typeof result === 'string') {
        // result = Math.max(MIN, result);
        // result = Math.min(MAX, result); 
        document.getElementsByClassName('display')[0].innerHTML = result;
        return true;
    } else {
        document.getElementsByClassName('display')[0].innerHTML = "Error input, enter CE to resolve.";
        return false;
    }
}

// readDisplay read the number and return it.
function readDisplay() {
    let d = document.getElementsByClassName('display')[0].innerHTML;
    if(typeof d === 'number') {
        return d;
    } else {
        document.getElementsByClassName('display')[0].innerHTML = 0;
        return 0;
    }
}

let Calculadora = function() {
    this.storage = [];
    this.size = 0;
    this.number_display = 0.0;
    this.point = 0;
}

// Include the input in queue
Calculadora.prototype.add = function(value) {
    this.storage[this.size] = value;
    this.size += 1;
}

Calculadora.prototype.clear = function() {
    while(this.storage.length) { 
        this.storage.pop(); 
    };
    this.size = 0;
    this.point = 0;
}

Calculadora.prototype.getNumberDisplay = function() {
    return this.number_display;
}    

Calculadora.prototype.setNumberDisplay = function(value) {
    this.number_display = value;
}  

// Validation of a single input. 
// If it is a number, then concat with the number.
// If it is a signal, put in the queue and start the process to receive another number. 
Calculadora.prototype.input = function(digit, degub = 0) {
    let number = parseFloat(digit, 10);
    
    if(degub) {
        console.log("inputNumber");
        console.log(digit);
        console.log(typeof digit);
        console.log(number);
    }    
    
    // cancel input
    if(digit === "C") {         
        this.number_display = 0;
        this.point = 0;
        if(this.size >= 0) {
            this.storage.pop();
            this.size--;
        }
        out = ""
        for(let i = 0; i < this.size; ++i) {
            out += (this.storage[i]);
        }
        if(Number.isNaN(out)) {
            out = "";
        }
    } 
    // cancel all entry
    else if(digit === "CE") {
        this.number_display = 0;
        this.clear();   
        out = "";
        this.point = 0;
    }
    // process the queue of values
    else if(digit === "=") {    
        this.add(this.number_display);
        this.number_display = this.process(this.storage)
        this.clear();
        out = this.number_display;
    } 
    else if(digit === "-" ||  digit === "/" || digit === "*" || digit === "+") {
        out += digit;
        this.add(this.number_display);
        this.add(digit);
        this.number_display = 0;
        this.point = 0;

    }
    else if(digit === "." || this.point) {
        if(this.point) {
            this.number_display = parseFloat(this.number_display)+(number/Math.pow(10, this.point));
            out += number;
        } else {
            out += '.';
        }
        ++this.point;
    }
    else {
        this.number_display = Math.min(MAX, (this.number_display*10.0)+number);
        this.number_display = Math.max(MIN,this.number_display);
        out += number;
    }    

    outputDisplay(out);
}    

Calculadora.prototype.process = (storage) => {
    let signal = 0, result = 0;
    console.log(storage)
    if(storage.length == 0) {
        return 0;
    }
    
    if(storage.length <= 1) {
        return (typeof storage[storage.length-1] === 'number')? storage[storage.length-1] : undefined;
    }
    
    for(let i = 0; i < storage.length - 1; ++i) {
        if(signal == 0) {
            result = storage[i];
            signal = 1;
            if(typeof result === 'string') {
                return undefined;
            }
         } 
         else {
            if(storage[i] === "+") {
                result += storage[i+1];
            }
            else if(storage[i] === "/") {
                if(storage[i+1] == 0)
                    return undefined;
                result /= storage[i+1];
            }
            else if(storage[i] === "-") {
                result -= storage[i+1];
            }
            else if(storage[i] === "*") {
                result *= storage[i+1];
            }
            ++i;
        }
    }
    return result;
}

// Buttons click
Calculadora.prototype.pressButton = function(degub = 0) {
    document.getElementsByClassName("grid-buttons")[0].addEventListener("click", event => {
        event.stopImmediatePropagation();
        if (event.target.nodeName == "BUTTON") {
            if(degub) {
                console.log("Clicked", event.target.textContent);
            }
            this.input(event.target.textContent, 0);
        }
    });
}

let calc = new Calculadora();
calc.pressButton();
document.getElementsByClassName('premmium')[0].innerHTML = "Get Premmium version 1.0</br>or</br>Preemium Plus</br>To use all of our product.";