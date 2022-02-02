// // var a1 = 10;
// // var a2 = "Tejkumar";
// // var a3 = true;
// // var a4 = [1,2,3,4,5];
// // var a5 = 10.15;

// var testArray = [10, 20, 30, 40, 50]
// var demoArray = new Array(4);
// console.log("demoArray length :: " + demoArray.length);


// console.log("testArray :: " + testArray);
// console.log("demoArray :: " + demoArray);


// for (let i = 0; i < demoArray.length; i++) {
//     demoArray[i] = i;
// }

// console.log("demoArray :: " + demoArray);

// //Array inbuilt methods
// demoArray.push(100)
// console.log("demoArray after pushing 100 element :: " + demoArray);

// demoArray.unshift(-1)
// console.log("demoArray after unshifting -1 element :: " + demoArray);

// //console.log("Array values :: " + demoArray.values());

// var demoArrayReverse = demoArray.reverse()
// console.log("demoArrayReverse :: " + demoArrayReverse);

// //Sorting the array
// console.log("demoArray after sorting :: " + demoArray.sort());

// //Applying shift to current array
// demoArray.shift();
// console.log("demoArray after applying shift :: " + demoArray);

// //Remove an element from an array at the end 
// demoArray.pop();
// console.log("demoArray after removing last element :: " + demoArray);

// //replace all element by 7
// // demoArray.fill(7)
// // console.log("demoArray after filling 7 :: " + demoArray);

// let result = demoArray.filter(function (value, index, demoArray) {
//     return value < 50;
// })

// console.log("result :: " + result);

// console.log("demoArray after applying filter with condition of > 4 elements :: " + demoArray);

// demoArray.push(20, 30, 40, 50)

// console.log("Updated array :: " + demoArray);

// //Apply fill in built methods
// demoArray.fill("H", 3, 6);

// console.log("demoArray after filling h alphabet from 3rd to 5th index :: " + demoArray);


// //Slice and Splice
// //console.log("Slice from the 0 to 4th index position inclusive :: " + demoArray.slice(0, 4));

// console.log("demoArray after applying splice operation :: ");

// //console.log("slice -1 value :: " + demoArray.slice(-3));

// //splice demo

// //0,1,100,H,H,H,40,50

// demoArray.splice(3, 3, "T");
// console.log(demoArray);

// //Replace T by J
// demoArray.splice(demoArray.indexOf("T"), 0, "J")

// console.log(demoArray);




















// var testArray = [10, 20, 30, 40, 50];
// console.log(testArray);

// var sum = 0;

// var result = testArray.reduce(function (pv, cv) {
//     return pv + cv
// })
// console.log("result :: " + result);


