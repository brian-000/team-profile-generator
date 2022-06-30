const Employee = require("./Employee");

class Intern extends Employee {
    constructer(name, email, id) {
        super(name, email, id);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Intern;