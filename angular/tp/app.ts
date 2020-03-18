import * as _ from 'lodash'
_.pad("Ts exampl", 40, "===")

// let message: string = "Help me";
// console.log(message);

// let example: number = 4;
// example++;

// let isEnoughToBeatMF = function( parsecs: number) : boolean {
//     return parsecs < 12
// }

// let distance  = 14

// let call = (name: string) => console.log(`${name}`)

// call('example 01')

// function inc (speed: number, inc: number = 1) {
//     return speed + inc

// }


interface Containership {
    cargoContainers: number;
}

class SpaceCraft implements Containership {
    
    cargoContainers: number;
    
    this.cargoContainers = 2;

    constructor(public propulsor: string) {

    }
    
    jumpIntoHyperSpace() {
        console.log(`${this.propulsor}`);
    }
    
}

let ship = new SpaceCraft('hypedrive');
ship.jumpIntoHyperSpace();
