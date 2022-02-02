class Person {
    //Constructors
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;

    }

    fetchPersonDetails() {
        console.log("Name :: " + this.name);
        console.log("Age :: " + this.age);
        console.log("City :: " + this.city);
    }

}

Person.prototype.educationLevel = "B.E"

var daddy = new Person("Tejkumar Kempaiah", 34, "Mangalore");

//Fetch object states 

console.log("Person educationLevel :: " + daddy.educationLevel);
daddy.fetchPersonDetails();



