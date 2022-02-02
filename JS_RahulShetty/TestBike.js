import { Bike } from "./Bike.js";

class TestBike extends Bike {

    constructor(name, color, cc, cost) {
        super(name, color, cc, cost)
    }


}


var testbikeObj = new TestBike("Unicorn", "Black", "180 CC", "1.25Lakh");
testbikeObj.bikeDetails


