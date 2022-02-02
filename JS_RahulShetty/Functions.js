//Functions in Javascript
//1. Function Declaration
//2. Function Expression
//3. Named Functions
//4. Anonymous Functions
//5. Fat Arrow Functions
//6. Accessing Functions from one file into another

//Functions declaration

function greet() {
    console.log("Hello, Good Evening...");
}

greet();


//Function Expression

var personDetails = function pDetails() {

    console.log("Name :: Tejkumar");
    console.log("City :: Mangalore");
    console.log("Qualification :: B.E");
    console.log("Automation Tool Used in Current project :: Cypress");
}

personDetails();

//Anonymous function assigned to carDetails variables
var carDetails = function () {

    console.log("Name : Ciaz");
    console.log("Model :: 2025");
    console.log("Color : White");
    console.log("Fuel Type :: Diesel");
}

carDetails();