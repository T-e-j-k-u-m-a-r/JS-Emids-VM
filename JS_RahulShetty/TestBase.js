export class BaseClass {

    //Global variables or class variables or instance variables
    //They must be accessed using this keyword

    // applicationURL = "http://www.app1.com"
    // username = "user1"
    // password = "Pass@123"

    constructor(appurl, username, password) {
        this.applicationURL = appurl;
        this.username = username;
        this.password = password;
    }

    get login() {

        console.log("Entered the username : " + this.username);
        console.log("Entered the password : " + this.password);
        console.log("Click on login button...");
    }

    get validationDisplayOfHomePage() {
        console.log("Login pass");
    }

}