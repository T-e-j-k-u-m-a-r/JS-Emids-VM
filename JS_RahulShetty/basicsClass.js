class Profile {
    type = "personal"


    get name() {

        return "Tejkumar";
    }

    get vsCodeVersion() {
        return "1.58.2";
    }

    constructor(status, phoneName, phoneColor) {
        this.status = status;
        this.phoneName = phoneName;
        this.phoneColor = phoneColor;
    }

    get details() {
        console.log("status + phoneName + phoneColor :: " + this.status + this.phoneName + this.phoneColor);
    }
}

//Object creation

var profileObj = new Profile("Online", "Redmi Note 10 Pro", "Golden Blue")

console.log("profileType :: " + profileObj.type);
console.log("profileName :: " + profileObj.name);
console.log("vsCodeversion :: " + profileObj.vsCodeVersion);
profileObj.details;




