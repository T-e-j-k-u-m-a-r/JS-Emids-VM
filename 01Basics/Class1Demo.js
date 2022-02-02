class Bike {

    constructor(bikeName, color, modelNumber) {
        this.bikeName = bikeName;
        this.color = color;
        this.modelNumber = modelNumber;
    }


    fetchBikeDetails() {
        console.log("Here are the bike details....");
        console.log("Bike name is :: " + this.bikeName);
        console.log("Bike color is :: " + this.color);
        console.log("Bike model number is :: " + this.modelNumber);
    }

}

//Adding a generic state to an object
Bike.prototype.bikeType = "With Gear";

const HondaUnicorn = new Bike("CB Unicorn", "Silver", "2013 Model");

HondaUnicorn.fetchBikeDetails();

console.log("Bike Type is :: " + HondaUnicorn.bikeType);
