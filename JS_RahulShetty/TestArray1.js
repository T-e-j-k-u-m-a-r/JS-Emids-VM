// var demoArray = [1, 2, 3, 4, 5]
// console.log("demoArray :: " + demoArray);

// //values()
// console.log("demoArray.values() :: " + demoArray.values());

// //toString()
// console.log("demoArray.toString() :: " + demoArray.toString());

// //push()
// demoArray.push(10);
// console.log(demoArray);

// //pop()
// demoArray.pop()
// console.log(demoArray);


// //unshift() -> Add's elements to first index or beginning index in the array
// demoArray.unshift(0)
// console.log("unshift :: " + demoArray);

// //shift() -> Removes first element in the array
// demoArray.shift()
// console.log("shift :: " + demoArray);

//fill & filter
// var testArray1 = [1, 2, 3, 4, 5]
// var testArray2 = ["Tej", "Shravya", "Jeevitha", "Atharv"]

// console.log("testArray1 :: " + testArray1);
// console.log("testArray2 :: " + testArray2);

// testArray2.fill("S", 0, 2)
// console.log(testArray2);

// var result = testArray1.filter(function (ele, index, testArray1) {

//     return ele <= 2;

// })

// console.log("result :: " + result);


// var testArray1 = [1, 2, 3, 4, 5]
// var testArray2 = ["Tej", "Shravya", "Jeevitha", "Atharv"]
// //slice & splice

// var sliceResult = testArray1.slice(0, 3);
// console.log("sliceResult :: " + sliceResult);

// //Splice Assignment
// //Add Maddur to the end 
// //Add Mangalore to the beginning
// //Add Bangalore after Shravya 
// //Update Atharv to Athrav Tejkumar

// testArray2.unshift("Mangalore")
// testArray2.push("Maddur")
// testArray2.splice(testArray2.indexOf("Shravya") + 1, 0, "Bangalore")
// testArray2.splice(testArray2.indexOf("Atharv"), 1, "Atharv Tejkumar")
// console.log(" Final result :: " + testArray2);

// //reduce
// var array1 = [1, 2, 3, 4, 5]
// console.log("array1 :: " + array1);


// var result1 = array1.reduce(function (pv, cv, index, array1) {

//     return cv + pv

// })

// var result2 = array1.reduce(function (pv, cv, index, array1) {

//     return cv + pv

// }, 10)

// console.log("result1 :: " + result1);
// console.log("result2 :: " + result2);
// console.log("array1 :: " + array1);


// //indexOf -> Done



// //Convert String to character array
// var s1 = "Tejkumar"
// console.log("Array.from(s1) :: " + Array.from(s1));

// //Convert array to String

var a1 = [5, 1, 2, 5, 3, 4]
console.log("a1 :: " + a1);

var reversea1 = a1.reverse()

console.log("reverse a1 :: " + reversea1);

a1.sort()

console.log("sorted array :: " + a1);

console.log("a1.length :: " + a1.length);




















