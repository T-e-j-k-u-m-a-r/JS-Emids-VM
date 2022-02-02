const Person = {

    "name": "Tejkumar",
    "age": 34,
    "friends": ["Jeevitha", "Shravya", "Atharv"],
    "city": "Mangalore",

    "socialFeeds": {
        "fb": "tejkumar@fb.com",
        "gmail": "tejkumar@gmail.com",
        "linkedin": "tejkumar@linkedin.com"
    },

}

const { socialFeeds, friends, name } = Person;
console.log("Name :: " + name);
console.log("Social Feeds - FB :: " + socialFeeds.fb);
console.log("Friends Array consists of Jeevitha? :: " + friends.includes("Jeevitha"));


