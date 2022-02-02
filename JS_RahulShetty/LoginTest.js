import { BaseClass } from "./TestBase.js"

class TestLogin extends BaseClass {

    constructor(appurl, username, password) {
        super(appurl, username, password)
    }
}

var testLoginObj = new TestLogin("http://www.google.com", "admin", "admin@123");

testLoginObj.login;
testLoginObj.validationDisplayOfHomePage;