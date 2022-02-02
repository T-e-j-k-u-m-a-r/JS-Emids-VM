export class Bike {

    constructor(name, color, cc, cost) {
        this.name = name
        this.color = color
        this.cc = cc
        this.cost = cost
    }

    get bikeDetails() {
        console.log(`bike name is ${this.name} of ${this.color} having cc of ${this.cc} rpm & it costs ${this.cost} INR`);

    }
}