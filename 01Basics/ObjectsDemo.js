const Person = {

    "name": "Tejkumar",
    "age ": 34,
    "friends": [
        "SriVatsa", "Manoj", "Punith", "Wasim"
    ],
    "SocialAccount": {

        "fb": "fb@tejkumar.com",
        "gmail": "gmail@tejkumar.com",
        "linkedin": "linkedin@tejkumar.com"

    }

}

const { name, SocialAccount, friends } = Person

console.log("name :: " + name);
console.log("SocialAccount.gmail :: " + SocialAccount.fb);
console.log("friends :: " + friends.toString());


