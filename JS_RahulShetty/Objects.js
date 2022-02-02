//Empty Object
{ }


//Non-Empty Object without assigning
{
    carname: "Honda City"
    model: 2027
    color: "white"
    fuelType: "Diesel"
}

//Non-Empty Object with Assigning
var profile = {
    name: "Tejkumar",
    laptopName: "Dell",
    color: "black",
    electronicItems: "laptop,phone,charger,bluetooth",
    socialFeeds:
    {
        fb: "tej@fb.com",
        linkedin: "tej@linkedin.com",
        insta: "tej@insta.com",
        gmail: "tej@gmail.com",
        whatsApp: {
            fatherNum: 8553314778,
            motherNum: 9880441222,
            child1Num: 12345789,
            child2Num: 987654321
        }
    }
}
//Object Destructuring
let { fatherNum, motherNum, child2Num, child1Num } = profile.socialFeeds.whatsApp

console.log(`my father phone number is ${fatherNum}`);
console.log(`my mother phone number is ${motherNum}`);
console.log(`my child1 phone number is ${child1Num}`);
console.log(`my child2 phone number is ${child2Num}`);

//How to make an object Immutable

Object.seal(profile)
console.log("Object.isSealed(profile) :: " + Object.isSealed(profile));

profile.name = "Jeevitha Tejkumar"
profile.date = '3rd August'
console.log(profile);
delete profile.date
console.log(profile);












