//Importing file1 into file 2
import { Greet } from "./File1.js"

//Object creation to call non-static properties of an object
var greetObj = new Greet();
console.log("num1 = " + greetObj.num1);
greetObj.sayHello();

//Calling static properties of the class
console.log("num2 = " + Greet.num2);
Greet.dontSayHello();



