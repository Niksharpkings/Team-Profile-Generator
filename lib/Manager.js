const Employee = require("./Employee");
class Manager extends Employee { //constructor
    constructor(
        name,
        id,
        email,
        officeNumber
    ) { //constructor for Manager class
        super(name, id, email); //call super class constructor
        this.officeNumber = officeNumber; //set officeNumber property
    }

    getRole() { //override getRole() method from Employee class
        return "Manager";  
    }

    getOfficeNumber() { //getter for officeNumber
        return this.officeNumber; //return officeNumber property
    }
}

module.exports = Manager; //export Manager class