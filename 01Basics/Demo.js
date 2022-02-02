class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        console.log("I'm a constructor and I'm called when an class object is instantiated....");

    }



    fetchPersonDetails() {

        console.log(`Name :: ` + this.name);
        console.log(`Age :: ` + this.city);
        console.log(`City :: ` + this.age);
    }
}



Person.prototype.hairColor = "brown";

var daddy = new Person("Tejkumar Kempaiah", 34, "Mangalore");
daddy.fetchPersonDetails();
console.log(daddy.name + " hair color is : " + daddy.hairColor);

