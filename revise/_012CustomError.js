class CheckAge extends Error{
    constructor(message){
        super(message)
        this.name = "Invalid Age Error"
    }

}

function newAdmission(age){
    if(age < 6){
        throw new CheckAge("Age should be eual or greater than 6")
    }else{
        console.log("Admission granted.")
    }

}

newAdmission(5)