export class Laptop {

    quantity = 10;

    constructor(name, model, color, cost) {
        this.model = model;
        this.name = name;
        this.color = color;
        this.cost = cost;
    }

    get displayDetails() {
        console.log(`${this.name} is of model ${this.model} having ${this.color} color cost's ${this.cost}`);
    }

}

// var dell = new Laptop("Dell", "Inspiron 2021", "Black", "35000")

// console.log("Laptop quantity :: " + dell.quantity);
// dell.displayDetails;

