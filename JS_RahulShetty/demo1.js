


class Bike {

    bikeType = "electric"

    constructor(name, color, cost) {
        this.name = name;
        this.color = color;
        this.cost = cost;
    }

    get dealerDetails() {
        return "Honda Showroom, Channapatna"
    }

    get bikeTopSpeed() {
        return "60 KMPM"
    }

    get completeDetails() {
        console.log("bike name is " + this.name, " color is " + this.color, " cost is " + this.cost);
    }

}

//Object creation -1 
var bike1 = new Bike("Electra1", "Black", "90k")
bike1.completeDetails;



//Object creation -2
var bike2 = new Bike("Vespa", "Red", "85k")
bike2.completeDetails;

//call generic methods
console.log("bike1 type :: " + bike1.bikeType);
console.log("bike2 type :: " + bike2.bikeType);

console.log("Dealer details :: " + bike1.dealerDetails);
console.log("Top speed :: " + bike2.bikeTopSpeed)





