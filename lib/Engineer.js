const Employee = require("./Employee"); //const Engineer = require("./Engineer"); const Intern = require("./Intern");
class Engineer extends Employee { //constructor
    constructor(name, id, email, github) { //constructor for Engineer class
        super(name, id, email); //call super class constructor
        this.github = github; //set github property
    }
    //getters and setters
    getGithub() { //getter for github
        return this.github;
    }

    getRole() { //override getRole() method from Employee class
        return "Engineer";
    }
}
//export
module.exports = Engineer;