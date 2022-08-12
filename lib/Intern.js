const Employee = require("./Employee"); // const Engineer = require("./Engineer"); const Intern = require("./Intern");
class Intern extends Employee { //constructor
    constructor(name, id, email, school){ //constructor for Intern class
        super(name, id, email); //call super class constructor
        this.school = school; //set school property
    }

    getSchool() { //getter for school
        return this.school; //return school property
    }

    getRole() { //override getRole() method from Employee class
        return "Intern"; //return "Intern"
    }
}

module.exports = Intern; //export Intern class