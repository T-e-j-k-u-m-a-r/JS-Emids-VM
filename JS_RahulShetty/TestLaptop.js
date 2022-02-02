import { Laptop } from "./Laptop.js";

class TestLaptop extends Laptop {

    constructor(name, model, color, cost) {
        super(name, model, color, cost)
    }

}
var dell = new TestLaptop("Dell", "Inspiron 2021", "Black", "35000")

console.log("Laptop quantity :: " + dell.quantity);
dell.displayDetails;