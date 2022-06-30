const Employee = require("./Employee");

class Intern extends Employee {
    constructor(data) {
        super(data);
        const { name, id, email, school } = data;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;